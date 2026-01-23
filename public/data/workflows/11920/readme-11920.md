#  Smart human takeover & auto pause AI-powered Facebook Messenger chatbot

> ![nguyenthieutoann8nworkflowfacebookmessenger 3.jpeg](fileId:3783)

# 🤖 Facebook Messenger Chatbot - Smart Human Takeover, Auto Pause & Context-Aware
## Adaptable to n8n 1.113+ and 2.x
**by Nguyen Thieu Toan (Jay Nguyen)**

---

## 📖 Overview

An **intelligent Facebook Messenger chatbot** that automatically detects human agent intervention and pauses AI responses accordingly. Features smart pause management, full context preservation, and seamless handoff between AI and human support.

**Perfect for:**
- 💼 Customer support with AI + human escalation
- 🎯 Sales conversations requiring manual intervention
- 🛠️ Technical support needing human expertise
- 🤝 Any chatbot requiring human oversight capability

**Requirements:** n8n v1.113.0+, Facebook App with Messenger, Google Gemini API key (or compatible LLM)

---
## 🔗 Complementary Workflow  
[Smart Facebook Messenger Chatbot – Message Batching & History](https://n8n.io/workflows/9192)

Enhances Messenger automation with intelligent batching, conversation tracking, and context-aware responses.  
Messages are grouped, stored, and processed with full history for smoother interactions.

**Why combine?**  
- 🧩 **Smart Batch (v3)**: Efficient multi-message handling, reduced spam  
- 📜 **Conversation History**: Maintains context across sessions  
- 🤖 **AI Responses**: Natural, context-aware replies  
- ⚡ **Scalability**: Sequential processing for reliable delivery  

👉 Access workflow
[Smart Facebook Messenger Chatbot – Message Batching & History](https://n8n.io/workflows/9192)

---

## ⚡ Key Features

### **Core Capabilities**

| Feature | Description |
|---------|-------------|
| 🔍 **Human Takeover Detection** | Automatically detects when admin/human sends messages from page via metadata checking |
| ⏸️ **Smart Auto-Pause** | Bot pauses for configurable duration (default 60s) when human joins conversation |
| 📝 **Context Preservation** | Saves both AI and human responses in conversation history for seamless continuity |
| 📋 **Whitelist Management** | Tracks paused users with timestamp-based auto-resume (no manual intervention needed) |
| 🔄 **Seamless Handoff** | Smooth transition between AI and human, then automatic resume after timeout |
| 🏢 **Multi-Page Support** | Single workflow handles multiple Facebook Pages via `page_id` differentiation |
| 📊 **Full History Context** | AI sees both previous AI and human responses when resuming |

### **Technical Highlights**

- ✅ Metadata-based detection (`message.metadata == "bot_rep"`)
- ✅ Timestamp-based pause management (auto-expires)
- ✅ Upsert operation for whitelist (updates if exists, inserts if new)
- ✅ Composite key indexing (`user_id` + `page_id`)
- ✅ Zero manual cleanup required
- ✅ Full conversation context preserved across handoffs

---

## 🏗️ How It Works

```
┌──────────────────────────────────────────────────────────┐
│ 1. Message Intake                                        │
│ • The system receives incoming messages from different   │
│   sources and identifies their type.                     │
└──────────────────────────────────────────────────────────┘
                         ↓
┌──────────────────────────────────────────────────────────┐
│ 2. Human Interaction Recognition                         │
│ • Detects when a human is involved and records the event │
│ • Adjusts automated handling accordingly.                │
└──────────────────────────────────────────────────────────┘
                         ↓
┌──────────────────────────────────────────────────────────┐
│ 3. Pause & Resume Control                                │
│ • Temporarily pauses automation when needed              │
│ • Resumes once conditions are met.                       │
└──────────────────────────────────────────────────────────┘
                         ↓
┌──────────────────────────────────────────────────────────┐
│ 4. Automated Response                                    │
│ • Processes messages with context                        │
│ • Generates and delivers appropriate replies.            │
└──────────────────────────────────────────────────────────┘

```

---

## 🛠️ Setup Guide

### Step 1: Facebook App Setup

### Step 2: Data Storage Preparation

### Step 3: Workflow Configuration

### Step 4: Testing

---

## 👤 About the Author

**Nguyen Thieu Toan (Nguyễn Thiệu Toàn / Jay Nguyen)**

*AI Automation Specialist | n8n Workflow Expert | Business Optimization Consultant*

**Services**: AI Automation Solutions, n8n Workflow Development, Custom Chatbot Implementation, Team Training Programs

**Contact**:
- 🌐 [nguyenthieutoan.com](https://nguyenthieutoan.com)
- 📘 [Facebook](https://www.facebook.com/nguyenthieutoan)
- 💼 [LinkedIn](https://www.linkedin.com/in/nguyenthieutoan)
- 🐦 [X (Twitter)](https://www.x.com/nguyenthieutoan)
- 📺 [YouTube](https://www.youtube.com/@NguyenThieuToan)
- 📧 me@nguyenthieutoan.com

**GenStaff Company**: [genstaff.net](https://genstaff.net) | contact@genstaff.net

---

## 📄 License

After purchase, use in commercial/personal projects. No redistribution or resale. Keep author attribution when sharing.


**Last Updated**: December 18, 2025 | **Version**: 1.0 | **n8n Compatibility**: v1.123.0+ and v2.0.0+ | **Facebook API**: v23.0/v24.0

---

**Ready to enable intelligent human-AI collaboration in your Facebook Messenger? Import this workflow and transform your chatbot today! 🚀**

## 📊 Basic Information

- **Workflow ID:** 11920
- **Complexity:** advanced
- **Node Count:** 40
- **Views:** 38
- **Downloads:** 3
- **Created:** 2025/12/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11920)

## 👤 Author

- **Name:** Nguyễn Thiệu Toàn (Jay Nguyen)
- **Username:** @nguyenthieutoan

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **webhook** 
- **set** (×4)
- **code** (×4)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **wait** 
- **splitInBatches** 
- **if** (×5)
- **dataTable** (×10)
- **respondToWebhook** 
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 40 nodes with 26 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
