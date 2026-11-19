import { describe, expect, it } from "vitest";
import {
  emailSchema,
  pairingRequestSchema,
  passwordSchema,
  transferMetadataSchema,
} from "./index";

describe("emailSchema", () => {
  it("accepts a valid email address", () => {
    expect(emailSchema.safeParse("user@example.com").success).toBe(true);
  });

  it("rejects malformed email addresses", () => {
    expect(emailSchema.safeParse("not-an-email").success).toBe(false);
  });
});

describe("passwordSchema", () => {
  it("accepts passwords within the configured length", () => {
    expect(passwordSchema.safeParse("correct-horse-12").success).toBe(true);
  });

  it("rejects passwords shorter than 12 characters", () => {
    expect(passwordSchema.safeParse("short").success).toBe(false);
  });

  it("rejects passwords longer than 128 characters", () => {
    expect(passwordSchema.safeParse("a".repeat(129)).success).toBe(false);
  });
});

describe("pairingRequestSchema", () => {
  const validRequest = {
    requestId: "550e8400-e29b-41d4-a716-446655440000",
    token: "t".repeat(32),
    expiresAt: "2026-11-20T12:00:00.000Z",
  };

  it("accepts a valid pairing request", () => {
    expect(pairingRequestSchema.safeParse(validRequest).success).toBe(true);
  });

  it("rejects a token shorter than 32 characters", () => {
    expect(pairingRequestSchema.safeParse({ ...validRequest, token: "too-short" }).success).toBe(false);
  });
});

describe("transferMetadataSchema", () => {
  const validMetadata = {
    name: "document.pdf",
    mediaType: "application/pdf",
    sizeBytes: 1024,
    checksumSha256: "a".repeat(64),
  };

  it("accepts valid transfer metadata", () => {
    expect(transferMetadataSchema.safeParse(validMetadata).success).toBe(true);
  });

  it("rejects a non-positive file size", () => {
    expect(transferMetadataSchema.safeParse({ ...validMetadata, sizeBytes: 0 }).success).toBe(false);
  });

  it("rejects an invalid SHA-256 checksum", () => {
    expect(transferMetadataSchema.safeParse({ ...validMetadata, checksumSha256: "invalid" }).success).toBe(false);
  });
});
