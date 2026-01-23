# 🤖 Facebook Messenger Smart Chatbot - Smart Batch, Format & History with n8n Data Table v3
## Version 2026 - Adaptable to n8n v1.113+ and v2.x
**by Nguyen Thieu Toan (Jay Nguyen)**

---
![bananapro20251218T102041765Z1.png](fileId:3772)

## 📖 Overview

A **production-ready, enterprise-grade chatbot solution** for Facebook Messenger built entirely in n8n. Features intelligent message batching, session-aware conversation tracking, multi-page support, and natural AI-powered responses.

**Perfect for:**
- 💼 Customer support automation
- 🛒 E-commerce product inquiries
- 📅 Appointment scheduling & consultation booking
- 🎓 Educational assistants & training
- 🤝 Lead qualification & sales automation

**Requirements:** n8n v1.113.0+, Facebook App with Messenger, Google Gemini API key (or compatible LLM)

## 🔗 Complementary Workflow

**Facebook Messenger Chatbot – Smart Human Takeover, Auto Pause & Context-Aware**

Adds intelligent human agent detection and automatic AI pause. When a human joins, AI pauses for configurable duration, then resumes automatically.

**Why combine?**
- Smart Batch (v3): Multi-message batching, spam reduction
- Human Takeover: AI pauses for humans, smooth collaboration

👉 [Access workflow](https://n8n.io/workflows/11920)

---
![Screenshot_18122025_154423_n8n.nguyenthieutoan.com.jpeg](fileId:3771)

## ⚡ What's New in Version 3

### **Major Upgrades**

| Feature | Impact |
|---------|--------|
| 🏢 **Multi-Page Support** | Manage multiple pages within one workflow |
| ⏱️ **Flexible Timing** | Adjustable wait times instead of fixed delays |
| 🔒 **Improved Detection** | More reliable identification of system vs. user messages |
| 📦 **Smart Delivery** | Sequential message handling to avoid overload |
| 🧹 **Automatic Cleanup** | Removes outdated records to keep storage efficient |
| 📊 **Better Context** | Clear separation of past vs. current sessions |
| 🔄 **Ordered Updates** | Ensures actions run in the right sequence |
| 📝 **Simplified Naming** | Clearer labels for easier understanding |

**Architecture Comparison**:  
Previous version had fixed timing, parallel updates, no multi-page handling, and no cleanup.  
New version introduces flexibility, sequential processing, and scalability for real-world use.

---

## 🎯 Key Features

- **🔄 Smart Batching**: Groups consecutive messages within configurable window (default 7s)
- **🧠 Session-Aware Context**: Distinguishes old vs. current sessions for temporal awareness
- **📋 Full History**: Stores complete chat logs with both user and page responses
- **👀 Natural UX**: "Seen" marker and "Typing..." indicator for human-like feel
- **🎯 AI Integration**: Extensible prompts for domain-specific consulting (Gemini, Groq, or any LLM)
- **🌐 Multi-Language**: Handles Vietnamese (anh/chị/em) with customizable settings
- **🏢 Multi-Page Ready**: Single workflow serves multiple Facebook Pages simultaneously

**Technical Highlights**: Idempotent processing, timezone-aware timestamps (Asia/Ho_Chi_Minh), Facebook API v24.0 compatible, sequential delivery with rate limiting protection, auto cleanup (keeps last 15 rows)

---

## 🏗️ How It Works

```
### 🔄 General Flow

Reception & Validation → Batching & Storage → Context Aggregation  
        ↓                      ↓                      ↓  
   Identify input        Store for later use     Combine with history  
   Filter duplicates     Apply short delay       Build conversation context  

                              ↓  

                AI Processing → Delivery & Cleanup  
                         ↓                ↓  
                 Generate response     Format & send  
                 Add signals           Maintain records  
                 Ensure continuity     Clean old data  

```

---

## 🛠️ Setup Guide

### Step 1: Facebook App  
Create app, add Messenger, set webhook, get token, subscribe page  

### Step 2: Data Table  
Prepare tables for messages batching

### Step 3: Workflow  
Import template, set context, link tables, connect AI 

### Step 4: Test  
Activate workflow, send test messages, verify pause/resume  

---

## 👤 About the Author

**Nguyen Thieu Toan (Nguyễn Thiệu Toàn / Jay Nguyen)**

*AI Automation Specialist | n8n Workflow Expert | Business Optimization Consultant*

**Services**: AI Automation Solutions, n8n Workflow Development, Custom Chatbot Implementation, Training Programs

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

---

**Last Updated**: December 18, 2025 | **Version**: 3.0 | **n8n Compatibility**: v1.123.0+ and v2.0.0+ | **Facebook API**: v24.0

---

**Ready to transform your Facebook Messenger into an intelligent AI assistant? Import this workflow and start automating today! 🚀**