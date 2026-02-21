import { getContext, setContext } from "svelte";
import type { LanyardData, LanyardWebSocketMessage } from "$lib/types/lanyard";
import { DISCORD_USER_ID, LANYARD_WS_URL } from "$lib/util";

export const LANYARD_CONTEXT_KEY = Symbol("lanyard");

export interface LanyardContext {
  readonly data: LanyardData;
}

export function getLanyardContext(): LanyardContext {
  return getContext<LanyardContext>(LANYARD_CONTEXT_KEY);
}

export function setLanyardContext(context: LanyardContext): void {
  setContext(LANYARD_CONTEXT_KEY, context);
}

export function createLanyardSocket(onUpdate: (data: LanyardData) => void) {
  let ws: WebSocket | null = null;
  let heartbeatInterval: ReturnType<typeof setInterval> | null = null;
  let reconnectTimeout: ReturnType<typeof setTimeout> | null = null;
  let destroyed = false;

  function connect() {
    if (typeof window === "undefined" || destroyed) return;

    ws = new WebSocket(LANYARD_WS_URL);

    ws.onmessage = (event: MessageEvent) => {
      const message: LanyardWebSocketMessage = JSON.parse(event.data);

      switch (message.op) {
        case 1: {
          const { heartbeat_interval } = message.d as { heartbeat_interval: number };

          heartbeatInterval = setInterval(() => {
            ws?.send(JSON.stringify({ op: 3 }));
          }, heartbeat_interval);

          ws?.send(JSON.stringify({ d: { subscribe_to_id: DISCORD_USER_ID }, op: 2 }));
          break;
        }

        case 0: {
          onUpdate(message.d as LanyardData);
          break;
        }
      }
    };

    ws.onclose = () => {
      if (heartbeatInterval) {
        clearInterval(heartbeatInterval);
        heartbeatInterval = null;
      }

      if (!destroyed) {
        reconnectTimeout = setTimeout(connect, 5_000);
      }
    };

    ws.onerror = () => {
      ws?.close();
    };
  }

  function destroy() {
    destroyed = true;

    if (heartbeatInterval) {
      clearInterval(heartbeatInterval);
      heartbeatInterval = null;
    }

    if (reconnectTimeout) {
      clearTimeout(reconnectTimeout);
      reconnectTimeout = null;
    }

    ws?.close();
    ws = null;
  }

  return { connect, destroy };
}
