This n8n workflow demonstrates multiple ways to harness DeepSeek's AI models in your automation pipeline! 🌟

## Core Features

**Multiple Integration Methods** 🔌
- Local deployment using Ollama for DeepSeek-R1
- Direct API integration with DeepSeek Chat V3
- Conversational agent with memory buffer
- HTTP request implementation with both raw and JSON formats

**Model Options** 🧠
- DeepSeek Chat V3 for general conversation
- DeepSeek-R1 for advanced reasoning
- Memory-enabled agent for persistent context

## Quick Setup 🛠️

**API Configuration**
- Base URL: https://api.deepseek.com
- Get your API key from platform.deepseek.com/api_keys

**Local Setup** 💻
- Install Ollama for local deployment
- Set up DeepSeek-R1 via Ollama
- Configure local credentials in n8n

## Implementation Details 🔧

**Conversational Agent**
- Window Buffer Memory for context
- Customizable system messages
- Built-in error handling with retries

**API Endpoints** 🌐
- Chat completions for V3 and R1 models
- OpenAI API format compatibles
