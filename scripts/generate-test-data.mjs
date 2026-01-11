#!/usr/bin/env node

/**
 * Test Data Generator for N8N Workflows
 * Generates mock data for testing purposes
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get directory name for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure test-data directory exists
const testDataDir = path.join(__dirname, '..', 'test-data');
if (!fs.existsSync(testDataDir)) {
  fs.mkdirSync(testDataDir, { recursive: true });
}

// Generate mock workflows
function generateMockWorkflows() {
  const workflows = [];
  const categories = ['Automation', 'Data Processing', 'Integration', 'AI', 'Utilities'];
  const authors = ['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Williams', 'Charlie Brown'];
  
  for (let i = 1; i <= 50; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const author = authors[Math.floor(Math.random() * authors.length)];
    
    workflows.push({
      id: `workflow-${i}`,
      title: `${category} Workflow #${i}`,
      description: `This is a test workflow for ${category.toLowerCase()} purposes.`,
      slug: `test-workflow-${i}`,
      author: author,
      category: category,
      createdAt: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date().toISOString(),
      views: Math.floor(Math.random() * 1000),
      likes: Math.floor(Math.random() * 100),
      complexity: ['Beginner', 'Intermediate', 'Advanced'][Math.floor(Math.random() * 3)],
      tags: ['test', 'automation', 'mock']
    });
  }
  
  fs.writeFileSync(
    path.join(testDataDir, 'mock-workflows.json'),
    JSON.stringify(workflows, null, 2)
  );
  
  console.log('✅ Generated 50 mock workflows');
}

// Generate mock users
function generateMockUsers() {
  const users = [];
  const roles = ['admin', 'editor', 'user', 'guest'];
  
  for (let i = 1; i <= 20; i++) {
    const role = roles[Math.floor(Math.random() * roles.length)];
    
    users.push({
      id: `user-${i}`,
      email: `user${i}@test.com`,
      name: `Test User ${i}`,
      role: role,
      createdAt: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString(),
      lastLogin: new Date(Date.now() - Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000).toISOString(),
      status: ['active', 'inactive', 'suspended'][Math.floor(Math.random() * 3)]
    });
  }
  
  fs.writeFileSync(
    path.join(testDataDir, 'mock-users.json'),
    JSON.stringify(users, null, 2)
  );
  
  console.log('✅ Generated 20 mock users');
}

// Generate test configuration
function generateTestConfig() {
  const config = {
    testEnvironment: {
      name: 'N8N Workflows Test Environment',
      version: '1.0.0',
      createdAt: new Date().toISOString(),
      baseUrl: 'http://localhost:3001',
      apiUrl: 'http://localhost:3001/api',
      database: {
        host: 'localhost',
        port: 5433,
        name: 'test_db',
        user: 'postgres',
        password: 'testpassword'
      }
    },
    testSettings: {
      timeout: 30000,
      retries: 2,
      headless: true,
      screenshotOnFailure: true,
      videoRecording: false,
      traceCollection: true
    }
  };
  
  fs.writeFileSync(
    path.join(testDataDir, 'test-config.json'),
    JSON.stringify(config, null, 2)
  );
  
  console.log('✅ Generated test configuration');
}

// Main function
function main() {
  console.log('🚀 Starting test data generation...\n');
  
  generateMockWorkflows();
  generateMockUsers();
  generateTestConfig();
  
  console.log('\n🎉 Test data generation completed!');
  console.log(`📁 Data saved to: ${testDataDir}/`);
  console.log('\nGenerated files:');
  console.log('  - mock-workflows.json (50 workflows)');
  console.log('  - mock-users.json (20 users)');
  console.log('  - test-config.json (test configuration)');
}

// Run the generator
main();