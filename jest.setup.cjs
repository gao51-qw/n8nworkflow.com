// Jest setup file for N8N Workflows project - CommonJS version
require('@testing-library/jest-dom');

// Mock environment variables
process.env.SUPABASE_URL = 'https://test.supabase.com';
process.env.SUPABASE_ANON_KEY = 'test-anon-key';
process.env.N8N_API_URL = 'https://test.n8n.com';

// Mock Astro components
global.Astro = {
  canonicalURL: '',
  request: {
    url: 'http://localhost'
  },
  site: 'http://localhost',
  generator: 'Astro'
};

// Mock IntersectionObserver
class MockIntersectionObserver {
  constructor(callback, options) {}
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.IntersectionObserver = MockIntersectionObserver;

// Mock matchMedia
Object.defineProperty(global, 'matchMedia', {
  writable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  })
});