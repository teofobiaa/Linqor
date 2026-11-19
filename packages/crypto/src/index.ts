/**
 * Cross-platform cryptography contracts only.
 * Do not add ad-hoc cryptography. Algorithms, KDF parameters, key wrapping,
 * recovery and platform secure-storage adapters require an approved threat model.
 */
export interface CryptoProvider { randomBytes(length: number): Uint8Array; sha256(data: Uint8Array): Promise<Uint8Array>; }
export interface SecureKeyStore { get(keyId: string): Promise<Uint8Array | null>; set(keyId: string, value: Uint8Array): Promise<void>; remove(keyId: string): Promise<void>; }