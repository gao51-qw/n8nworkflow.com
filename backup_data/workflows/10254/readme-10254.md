# AI-powered email forwarding to WhatsApp with Gmail, Outlook & Google Gemini

> ## Overview

Intelligent email-to-WhatsApp automation that monitors Gmail and Outlook accounts, uses Google Gemini AI to filter important emails, and forwards them to WhatsApp via Evolution API.

## Key Features

- Multi-account support (Gmail + 2 Outlook accounts)
- AI-powered email classification with Google Gemini
- Automatic Arabic translation for foreign emails
- Approved sender whitelist
- Security email prioritization (2FA, activations, passwords)
- Spam and promotion filtering
- Automatic mark-as-read
- Link extraction from emails

## Setup Requirements

**Services Needed:**
- n8n instance
- Gmail account with API access
- Microsoft Outlook account(s)
- Google Gemini API key (free tier available)
- Evolution API (self-hosted WhatsApp API)

**Credentials to Add:**
- Gmail OAuth2
- Microsoft Outlook OAuth2
- Google Gemini API
- Evolution API

## Configuration Steps

1. Import workflow
2. Add all credentials in n8n
3. Update WhatsApp numbers in all "Send" nodes (format: `number@s.whatsapp.net`)
4. Replace "YourInstanceName" with your Evolution API instance
5. Customize approved sender emails in AI Agent system prompts
6. Test and activate

## How It Works

Workflow monitors emails every minute, parses content with JavaScript, classifies importance with Google Gemini AI, extracts links, translates non-Arabic content, and sends formatted messages to WhatsApp.

## Use Cases

Perfect for professionals needing instant mobile notifications for critical emails while filtering spam and promotions.


## 📊 Basic Information

- **Workflow ID:** 10254
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 795
- **Downloads:** 79
- **Created:** 2025/10/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10254)

## 👤 Author

- **Name:** iTzJok3r
- **Username:** @itzjok3r

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **gmail** 
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)
- **code** (×3)
- **n8n-nodes-evolution-api-en.evolutionApi** (×3)
- **gmailTrigger** 
- **microsoftOutlookTrigger** (×2)
- **httpRequest** (×2)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
