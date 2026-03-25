import '@testing-library/jest-dom';
import { indexedDB, IDBKeyRange } from 'fake-indexeddb';
import { vi } from 'vitest';

// Global setup for Vitest
globalThis.indexedDB = indexedDB;
globalThis.IDBKeyRange = IDBKeyRange;

// Mock Hyperspeed (WebGL) which causes issues in JSDOM
vi.mock('../components/Hyperspeed/Hyperspeed', () => ({
  default: () => null
}));

// Mock AI Engine
vi.mock('../utils/aiEngine', () => ({
  aiEngine: {
    init: vi.fn().mockResolvedValue(true),
    generateResponse: vi.fn()
  }
}));

// Mock i18next
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { changeLanguage: vi.fn() }
  }),
  initReactI18next: { type: '3rdParty', init: vi.fn() }
}));
