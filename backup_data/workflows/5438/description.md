# 🤖 Create a Telegram Bot with Mistral AI and Conversation Memory

A sophisticated Telegram bot that provides AI-powered responses with conversation memory. This template demonstrates how to integrate any AI API service with Telegram, making it easy to swap between different AI providers like OpenAI, Anthropic, Google AI, or any other API-based AI model.

## 🔧 How it works

The workflow creates an intelligent Telegram bot that:
- 💬 Maintains conversation history for each user
- 🧠 Provides contextual AI responses using **any AI API service**
- 📱 Handles different message types and commands
- 🔄 Manages chat sessions with clear functionality
- 🔌 **Easily adaptable to any AI provider** (OpenAI, Anthropic, Google AI, etc.)

## ⚙️ Set up steps

### 📋 Prerequisites
- 🤖 Telegram Bot Token (from @BotFather)
- 🔑 AI API Key (from any AI service provider)
- 🚀 n8n instance with webhook capability

### 🛠️ Configuration Steps

1. **🤖 Create Telegram Bot**
   - Message @BotFather on Telegram
   - Create new bot with `/newbot` command
   - Save the bot token for credentials setup

2. **🧠 Choose Your AI Provider**
   - **OpenAI**: Get API key from OpenAI platform
   - **Anthropic**: Sign up for Claude API access
   - **Google AI**: Get Gemini API key
   - **NVIDIA**: Access LLaMA models
   - **Hugging Face**: Use inference API
   - **Any other AI API service**

3. **🔐 Set up Credentials in n8n**
   - Add Telegram API credentials with your bot token
   - Add Bearer Auth/API Key credentials for your chosen AI service
   - Test both connections

4. **🚀 Deploy Workflow**
   - Import the workflow JSON
   - **Customize the AI API call** (see customization section)
   - Activate the workflow
   - Set webhook URL in Telegram bot settings

## ✨ Features

### 🚀 Core Functionality
- **📨 Smart Message Routing**: Automatically categorizes incoming messages (commands, text, non-text)
- **🧠 Conversation Memory**: Maintains chat history for each user (last 10 messages)
- **🤖 AI-Powered Responses**: Integrates with any AI API service for intelligent replies
- **⚡ Command Support**: Built-in `/start` and `/clear` commands

### 📱 Message Types Handled
- **💬 Text Messages**: Processed through AI model with context
- **🔧 Commands**: Special handling for bot commands
- **❌ Non-text Messages**: Polite error message for unsupported content

### 💾 Memory Management
- 👤 User-specific chat history storage
- 🔄 Automatic history trimming (keeps last 10 messages)
- 🌐 Global state management across workflow executions

## 🤖 Bot Commands

- `/start` 🎯 - Welcome message with bot introduction
- `/clear` 🗑️ - Clears conversation history for fresh start
- Regular text 💬 - Processed by AI with conversation context

## 🔧 Technical Details

### 🏗️ Workflow Structure
1. **📡 Telegram Trigger** - Receives all incoming messages
2. **🔀 Message Filtering** - Routes messages based on type/content
3. **💾 History Management** - Maintains conversation context
4. **🧠 AI Processing** - Generates intelligent responses
5. **📤 Response Delivery** - Sends formatted replies back to user

### 🤖 AI API Integration (Customizable)
**Current Example (NVIDIA):**
- Model: `mistralai/mistral-nemotron`
- Temperature: 0.6 (balanced creativity)
- Max tokens: 4096
- Response limit: Under 200 words

**🔄 Easy to Replace with Any AI Service:**

**OpenAI Example:**
```json
{
  "model": "gpt-4",
  "messages": [...],
  "temperature": 0.7,
  "max_tokens": 1000
}
```

**Anthropic Claude Example:**
```json
{
  "model": "claude-3-sonnet-20240229",
  "messages": [...],
  "max_tokens": 1000
}
```

**Google Gemini Example:**
```json
{
  "contents": [...],
  "generationConfig": {
    "temperature": 0.7,
    "maxOutputTokens": 1000
  }
}
```

### 🛡️ Error Handling
- ❌ Non-text message detection and appropriate responses
- 🔧 API failure handling
- ⚠️ Invalid command processing

## 🎨 Customization Options

### 🤖 AI Provider Switching
**To use a different AI service, modify the "NVIDIA LLaMA Chat Model" node:**

1. **📝 Change the URL** in HTTP Request node
2. **🔧 Update the request body** format in "Prepare API Request" node
3. **🔐 Update authentication** method if needed
4. **📊 Adjust response parsing** in "Save AI Response to History" node

### 🧠 AI Behavior
- 📝 Modify system prompt in "Prepare API Request" node
- 🌡️ Adjust temperature and response parameters
- 📏 Change response length limits
- 🎯 Customize model-specific parameters

### 💾 Memory Settings
- 📊 Adjust history length (currently 10 messages)
- 👤 Modify user identification logic
- 🗄️ Customize data persistence approach

### 🎭 Bot Personality
- 🎉 Update welcome message content
- ⚠️ Customize error messages and responses
- ➕ Add new command handlers

## 💡 Use Cases

- **🎧 Customer Support**: Automated first-line support with context awareness
- **📚 Educational Assistant**: Homework help and learning support
- **👥 Personal AI Companion**: General conversation and assistance
- **💼 Business Assistant**: FAQ handling and information retrieval
- **🔬 AI API Testing**: Perfect template for testing different AI services
- **🚀 Prototype Development**: Quick AI chatbot prototyping

## 📝 Notes

- 🌐 Requires active n8n instance for webhook handling
- 💰 AI API usage may have rate limits and costs (varies by provider)
- 💾 Bot memory persists across workflow restarts
- 👥 Supports multiple concurrent users with separate histories
- 🔄 **Template is provider-agnostic** - easily switch between AI services
- 🛠️ **Perfect starting point** for any AI-powered Telegram bot project

## 🔧 Popular AI Services You Can Use

| Provider | Model Examples | API Endpoint Style |
|----------|---------------|-------------------|
| 🟢 **OpenAI** | GPT-4, GPT-3.5 | `https://api.openai.com/v1/chat/completions` |
| 🔵 **Anthropic** | Claude 3 Opus, Sonnet | `https://api.anthropic.com/v1/messages` |
| 🔴 **Google** | Gemini Pro, Gemini Flash | `https://generativelanguage.googleapis.com/v1beta/models/` |
| 🟡 **NVIDIA** | LLaMA, Mistral | `https://integrate.api.nvidia.com/v1/chat/completions` |
| 🟠 **Hugging Face** | Various OSS models | `https://api-inference.huggingface.co/models/` |
| 🟣 **Cohere** | Command, Generate | `https://api.cohere.ai/v1/generate` |

*Simply replace the HTTP Request node configuration to switch providers!*