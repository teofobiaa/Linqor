import type { SessionStatus } from "@linqor/domain";
export const PROTOCOL_VERSION = 1 as const;
export type ClientMessage =
 | { type: "session.join"; protocolVersion: typeof PROTOCOL_VERSION; sessionId: string; deviceId: string }
 | { type: "session.leave"; sessionId: string; deviceId: string }
 | { type: "message.send"; sessionId: string; messageId: string; ciphertext: string; createdAt: string }
 | { type: "transfer.offer"; sessionId: string; transferId: string; metadata: { name: string; mediaType: string; sizeBytes: number; checksumSha256: string } }
 | { type: "transfer.cancel"; sessionId: string; transferId: string };
export type ServerMessage =
 | { type: "session.state"; sessionId: string; status: SessionStatus }
 | { type: "message.received"; sessionId: string; messageId: string; ciphertext: string; createdAt: string }
 | { type: "transfer.accepted"; sessionId: string; transferId: string }
 | { type: "transfer.progress"; sessionId: string; transferId: string; bytesTransferred: number }
 | { type: "error"; code: string; message: string };
export interface PairingRequest { requestId: string; expiresAt: string; /** Opaque short-lived token; never include credentials or encryption keys in QR payloads. */ token: string; }