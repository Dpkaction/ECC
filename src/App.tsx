import React, { useState } from 'react';
import { WalletSection } from './components/WalletSection';
import { BlockchainVisualizer } from './components/BlockchainVisualizer';
import { DataSection } from './components/DataSection';
import { HashDecryptSection } from './components/HashDecryptSection';
import type { Block, Wallet } from './types';
import { Shield } from 'lucide-react';

// Mock functions - replace with actual crypto implementation
const generateWallet = () => ({
  publicKey: 'pk_' + Math.random().toString(36).substring(2),
  privateKey: 'sk_' + Math.random().toString(36).substring(2),
});

const encryptData = (data: string) => ({
  data: 'encrypted_' + data,
  hash: 'hash_' + Math.random().toString(36).substring(2),
});

export default function App() {
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [currentBlock, setCurrentBlock] = useState<Block | null>(null);
  const [blockCount, setBlockCount] = useState(0);
  const [decryptedData, setDecryptedData] = useState<string | null>(null);
  const [decryptedHashData, setDecryptedHashData] = useState<string | null>(null);
  const [blocks, setBlocks] = useState<Block[]>([]);

  const handleGenerateWallet = () => {
    setWallet(generateWallet());
  };

  const handleEncrypt = (data: string) => {
    if (!wallet) return;

    const encrypted = encryptData(data);
    const newBlock: Block = {
      id: blockCount,
      data: encrypted.data,
      hash: encrypted.hash,
      previousHash: currentBlock?.hash || '0000000000000000',
      timestamp: Date.now(),
    };

    setBlocks(prev => [...prev, newBlock]);
    setCurrentBlock(newBlock);
    setBlockCount((prev) => prev + 1);
    setDecryptedData(null);
  };

  const handleDecrypt = (privateKey: string) => {
    if (!currentBlock || !wallet || privateKey !== wallet.privateKey) {
      setDecryptedData('Invalid private key');
      return;
    }

    // Mock decryption - replace with actual implementation
    setDecryptedData(currentBlock.data.replace('encrypted_', ''));
  };

  const handleDecryptHash = (hash: string, privateKey: string) => {
    if (!wallet || privateKey !== wallet.privateKey) {
      setDecryptedHashData('Invalid private key');
      return;
    }

    const block = blocks.find(b => b.hash === hash);
    if (!block) {
      setDecryptedHashData('Hash not found');
      return;
    }

    // Mock decryption - replace with actual implementation
    setDecryptedHashData(block.data.replace('encrypted_', ''));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-12 h-12 text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-900">Decentralized database ECC cryptography</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A secure blockchain-based wallet using Elliptic Curve Cryptography for
            data encryption and decryption.
          </p>
        </header>

        <div className="space-y-8 flex flex-col items-center">
          <WalletSection wallet={wallet} onGenerateWallet={handleGenerateWallet} />
          <BlockchainVisualizer currentBlock={currentBlock} />
          <DataSection
            onEncrypt={handleEncrypt}
            onDecrypt={handleDecrypt}
            decryptedData={decryptedData}
          />
          <HashDecryptSection
            onDecryptHash={handleDecryptHash}
            decryptedHashData={decryptedHashData}
          />
        </div>
      </div>
    </div>
  );
}
