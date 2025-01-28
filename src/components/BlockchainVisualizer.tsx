import React from 'react';
import { Link, Hash } from 'lucide-react';
import type { Block } from '../types';

interface BlockchainVisualizerProps {
  currentBlock: Block | null;
}

export function BlockchainVisualizer({ currentBlock }: BlockchainVisualizerProps) {
  if (!currentBlock) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-2xl">
        <div className="flex items-center gap-2 mb-6">
          <Link className="w-6 h-6" />
          <h2 className="text-2xl font-bold text-gray-800">Blockchain</h2>
        </div>
        <div className="text-center py-8 text-gray-500">
          No blocks in the chain yet. Add some data to create the first block.
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-2xl">
      <div className="flex items-center gap-2 mb-6">
        <Link className="w-6 h-6" />
        <h2 className="text-2xl font-bold text-gray-800">Latest Block</h2>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-600">Block</span>
          <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded">
            #{currentBlock.id}
          </span>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg space-y-2">
          <div className="flex items-center gap-2">
            <Hash className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-600">Current Hash</span>
          </div>
          <p className="text-sm font-mono break-all">{currentBlock.hash}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg space-y-2">
          <div className="flex items-center gap-2">
            <Hash className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-600">Previous Hash</span>
          </div>
          <p className="text-sm font-mono break-all">{currentBlock.previousHash}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg space-y-2">
          <span className="text-sm font-medium text-gray-600">Encrypted Data</span>
          <p className="text-sm font-mono break-all">{currentBlock.data}</p>
        </div>

        <div className="text-right text-sm text-gray-500">
          {new Date(currentBlock.timestamp).toLocaleString()}
        </div>
      </div>
    </div>
  );
}