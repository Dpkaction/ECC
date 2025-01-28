import React from 'react';
import { KeyRound, Copy } from 'lucide-react';
import type { Wallet } from '../types';

interface WalletSectionProps {
  wallet: Wallet | null;
  onGenerateWallet: () => void;
}

export function WalletSection({ wallet, onGenerateWallet }: WalletSectionProps) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-2xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <KeyRound className="w-6 h-6" />
          Wallet
        </h2>
        <button
          onClick={onGenerateWallet}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Generate New Wallet
        </button>
      </div>

      {wallet ? (
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Public Key</span>
              <button
                onClick={() => copyToClipboard(wallet.publicKey)}
                className="text-indigo-600 hover:text-indigo-700"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm font-mono break-all">{wallet.publicKey}</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Private Key</span>
              <button
                onClick={() => copyToClipboard(wallet.privateKey)}
                className="text-indigo-600 hover:text-indigo-700"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm font-mono break-all">{wallet.privateKey}</p>
          </div>
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          No wallet generated yet. Click the button above to create one.
        </div>
      )}
    </div>
  );
}