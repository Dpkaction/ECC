import React, { useState } from 'react';
import { Lock, Unlock } from 'lucide-react';

interface DataSectionProps {
  onEncrypt: (data: string) => void;
  onDecrypt: (privateKey: string) => void;
  decryptedData: string | null;
}

export function DataSection({ onEncrypt, onDecrypt, decryptedData }: DataSectionProps) {
  const [data, setData] = useState('');
  const [privateKey, setPrivateKey] = useState('');

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-2xl">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
            <Lock className="w-5 h-5" />
            Encrypt Data
          </h3>
          <div className="space-y-4">
            <textarea
              value={data}
              onChange={(e) => setData(e.target.value)}
              placeholder="Enter data to encrypt..."
              className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button
              onClick={() => {
                onEncrypt(data);
                setData('');
              }}
              disabled={!data}
              className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-gray-400"
            >
              Encrypt & Add to Chain
            </button>
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
            <Unlock className="w-5 h-5" />
            Decrypt Latest Block
          </h3>
          <div className="space-y-4">
            <input
              type="text"
              value={privateKey}
              onChange={(e) => setPrivateKey(e.target.value)}
              placeholder="Enter private key..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button
              onClick={() => onDecrypt(privateKey)}
              disabled={!privateKey}
              className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-gray-400"
            >
              Decrypt
            </button>

            {decryptedData && (
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-600 mb-2">Decrypted Data:</h4>
                <p className="text-sm whitespace-pre-wrap">{decryptedData}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}