# Automate Instagram comment responses with Google Sheets & CRM tracking

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## 🎯 Overview
This n8n workflow template automates the process of monitoring Instagram comments and sending predefined responses based on specific comment keywords. It integrates Instagram's Graph API with Google Sheets to manage comment responses and maintains an interaction log for customer relationship management (CRM) purposes.

## 🔧 Workflow Components
The workflow consists of **9 main nodes** organized into two primary sections:

### 📡 Section 1: Webhook Verification
- ✅ **Get Verification** (Webhook node)
- 🔄 **Respond to Verification Message** (Respond to Webhook node)

### 🤖 Section 2: Auto Comment Response
- 📬 **Insta Update** (Webhook node)
- ❓ **Check if update is of comment?** (Switch node)
- 👤 **Comment if of other user** (If node)
- 📊 **Comment List** (Google Sheets node)
- 💬 **Send Message for Comment** (HTTP Request node)
- 📝 **Add Interaction in Sheet (CRM)** (Google Sheets node)

## 🛠️ Prerequisites and Setup Requirements

### 1. 🔵 Meta/Facebook Developer Setup

#### 📱 Create Facebook App
&gt; 📋 **Action Items:**
&gt; - [ ] Navigate to [Facebook Developers](https://developers.facebook.com/)
&gt; - [ ] Click "Create App" and select "Business" type
&gt; - [ ] Configure the following products:
&gt;   - ✅ Instagram Graph API
&gt;   - ✅ Facebook Login for Business  
&gt;   - ✅ Webhooks

#### 🔐 Required Permissions

Configure the following permissions in your Meta app:
| `instagram_basic` | 📖 Read Instagram account profile info and media
| `instagram_manage_comments` | 💬 Create, delete, and manage comments
| `instagram_manage_messages` | 📤 Send and receive Instagram messages 
| `pages_show_list` | 📄 Access connected Facebook pages

#### 🎫 Access Token Generation
&gt; ⚠️ **Important Setup:**+
&gt; - [ ] Use Facebook's Graph API Explorer
&gt; - [ ] Generate a User Access Token with required permissions
&gt; - [ ] ⚡ **Important**: Tokens expire periodically and need refreshing

### 2. 🌐 Webhook Configuration

#### 🔗 Setup Webhook URL
&gt; 📌 **Configuration Checklist:**
&gt; - [ ] In Meta App Dashboard, navigate to **Products → Webhooks**
&gt; - [ ] Subscribe to **Instagram** object
&gt; - [ ] Configure webhook URL: `your-n8n-domain/webhook/instagram`
&gt; - [ ] Set verification token (use "test" or create secure token)
&gt; - [ ] Select webhook fields:
&gt;   - ✅ **comments** - For comment notifications
&gt;   - ✅ **messages** - For DM notifications (if needed)

#### ✅ Webhook Verification Process
The workflow handles Meta's webhook verification automatically:
- 📡 Meta sends GET request with `hub.challenge` parameter
- 🔄 Workflow responds with the challenge value to confirm subscription

### 3. 📊 Google Sheets Setup

Example - https://docs.google.com/spreadsheets/d/1ONPKJZOpQTSxbasVcCB7oBjbZcCyAm9gZ-UNPoXM21A/edit?usp=sharing 

#### 📋 Create Response Management Sheet
Set up a Google Sheets document with the following structure:

**📝 Sheet 1 - Comment Responses:**
| Column | Description | Example |
|--------|-------------|---------|
| 💬 Comment | Trigger keywords | `"auto", "info", "help"` |
| 📝 Message | Corresponding response message | `"Thanks for your comment! We'll get back to you soon."` |

**📈 Sheet 2 - Interaction Log:**
| Column | Description | Purpose |
|--------|-------------|---------|
| ⏰ Time | Timestamp of interaction | Track when interactions occur |
| 🆔 User Id | Instagram user ID | Identify unique users |
| 👤 Username | Instagram username | Human-readable identification |
| 📝 Note | Additional notes or error messages | Debugging and analytics |

---

## 🔧 Built By - akash@codescale.tech




## 📊 Basic Information

- **Workflow ID:** 6205
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 1328
- **Downloads:** 132
- **Created:** 2025/7/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6205)

## 👤 Author

- **Name:** Akash Kankariya
- **Username:** @akash25

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **webhook** (×2)
- **httpRequest** 
- **googleSheets** (×2)
- **respondToWebhook** 
- **stickyNote** (×3)
- **switch** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
