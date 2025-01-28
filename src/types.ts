export interface Block {
  id: number;
  data: string;
  hash: string;
  previousHash: string;
  timestamp: number;
}

export interface Wallet {
  publicKey: string;
  privateKey: string;
}

export interface EncryptedData {
  data: string;
  hash: string;
}