import { z } from "zod";
export const emailSchema = z.email().max(254);
export const passwordSchema = z.string().min(12).max(128);
export const pairingRequestSchema = z.object({ requestId: z.uuid(), token: z.string().min(32).max(512), expiresAt: z.iso.datetime() });
export const transferMetadataSchema = z.object({ name: z.string().min(1).max(255), mediaType: z.string().min(1).max(127), sizeBytes: z.number().int().positive(), checksumSha256: z.string().regex(/^[a-f0-9]{64}$/i) });