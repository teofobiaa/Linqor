export type DevicePlatform = "web" | "android";
export type SessionStatus = "pending" | "active" | "completed" | "expired" | "cancelled";
export interface Device { id: string; name: string; platform: DevicePlatform; lastSeenAt: string | null; }
export interface SessionSummary { id: string; status: SessionStatus; createdAt: string; expiresAt: string; devices: readonly Device[]; }
export interface TransferMetadata { id: string; sessionId: string; name: string; mediaType: string; sizeBytes: number; checksumSha256: string; createdAt: string; }
export interface FavoriteConversation { id: string; title: string; updatedAt: string; }
