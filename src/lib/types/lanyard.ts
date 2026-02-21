export type DiscordStatus = "dnd" | "idle" | "offline" | "online";

export interface SpotifyData {
  album: string;
  album_art_url: string;
  artist: string;
  song: string;
  timestamps: { end: number; start: number };
  track_id: string;
}

export interface LanyardData {
  active_on_discord_desktop: boolean;
  active_on_discord_mobile: boolean;
  active_on_discord_web: boolean;
  activities: unknown[];
  discord_status: DiscordStatus;
  discord_user: {
    avatar: string;
    discriminator: string;
    display_name: string;
    id: string;
    public_flags: number;
    username: string;
  };
  kv: Record<string, string>;
  listening_to_spotify: boolean;
  spotify: SpotifyData | null;
}

export interface LanyardResponse {
  data: LanyardData;
  success: boolean;
}

export interface LanyardWebSocketMessage {
  d: LanyardData | { heartbeat_interval: number };
  op: number;
  seq: number;
  t: "INIT_STATE" | "PRESENCE_UPDATE" | null;
}
