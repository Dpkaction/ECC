import React, { useState } from 'react';
import { KeyRound } from 'lucide-react';

interface HashDecryptSectionProps {
  onDecryptHash: (hash: string, privateKey: string) => void;
  decryptedHashData: string | null;
}

export function HashDecryptSection({ onDecryptHash, decryptedHashData }: HashDecryptSectionProps) {
  const [hash, setHash] = useState('');
  const [privateKey, setPrivateKey] = useState('');

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-2xl">
      <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
        <KeyRound className="w-5 h-5" />
        Decrypt by Hash
      </h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="hash" className="block text-sm font-medium text-gray-600 mb-1">
            Hash
          </label>
          <input
            id="hash"
            type="text"
            value={hash}
            onChange={(e) => setHash(e.target.value)}
            placeholder="Enter block hash..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label htmlFor="privateKeyHash" className="block text-sm font-medium text-gray-600 mb-1">
            Private Key
          </label>
          <input
            id="privateKeyHash"
            type="text"
            value={privateKey}
            onChange={(e) => setPrivateKey(e.target.value)}
            placeholder="Enter private key..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <button
          onClick={() => onDecryptHash(hash, privateKey)}
          disabled={!hash || !privateKey}
          className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-gray-400"
        >
          Decrypt Hash
        </button>

        {decryptedHashData && (
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="text-sm font-medium text-gray-600 mb-2">Decrypted Data:</h4>
            <p className="text-sm whitespace-pre-wrap">{decryptedHashData}</p>
          </div>
        )}
      </div>
    </div>
  );
}