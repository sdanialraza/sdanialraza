import { getContext, setContext } from "svelte";
import type { LanyardData, LanyardWebSocketMessage } from "$lib/types/lanyard";
import { DISCORD_USER_ID, LANYARD_OFFLINE_FALLBACK, LANYARD_WS_URL } from "$lib/util";

const LANYARD_CONTEXT_KEY = Symbol("lanyard");

interface LanyardContext {
  readonly data: LanyardData;
  connect(): void;
  destroy(): void;
}

export function setLanyardContext(initialData: LanyardData | null): LanyardContext {
  const state = $state({ data: initialData ?? LANYARD_OFFLINE_FALLBACK });
  let ws: WebSocket | null = null;
  let heartbeatInterval: ReturnType<typeof setInterval> | null = null;
  let reconnectTimeout: ReturnType<typeof setTimeout> | null = null;

  function connect() {
    if (typeof window === "undefined") return;

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
          state.data = message.d as LanyardData;
          break;
        }
      }
    };

    ws.onclose = () => {
      if (heartbeatInterval) {
        clearInterval(heartbeatInterval);
        heartbeatInterval = null;
      }

      reconnectTimeout = setTimeout(connect, 5_000);
    };

    ws.onerror = () => {
      ws?.close();
    };
  }

  function destroy() {
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

  const context: LanyardContext = {
    get data() {
      return state.data;
    },
    connect,
    destroy,
  };

  setContext(LANYARD_CONTEXT_KEY, context);

  return context;
}

export function getLanyardContext(): LanyardContext {
  return getContext<LanyardContext>(LANYARD_CONTEXT_KEY);
}
