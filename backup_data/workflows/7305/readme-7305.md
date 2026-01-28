# Generate smart Calendly notifications for Outlook and Slack using GPT-4

> This n8n automation notifies you whenever someone books a meeting with you via **Calendly**. It sends a customized **email via Outlook** and a **Slack message** using details from the event.

---

### 📌 What This Workflow Does

1. Listens for new Calendly meeting bookings (`invitee.created`).  
2. Extracts key details (name, email, reason for meeting, start time).  
3. Uses an AI agent to generate both:
   - A **HTML email** sent to you via Outlook.
   - A **Slack message** sent to your chosen channel.

---

### ⚙️ Step-by-Step Setup Instructions

#### 1. 🔗 Calendly API Setup
- In n8n: Go to **Credentials → Add Credential → Calendly API**.
- Connect your account with the personal access token.
- In the **Calendly Trigger** node, set event to `invitee.created`.

#### 2. 📧 Microsoft Outlook Credential
- Add Microsoft Outlook credentials via OAuth2 in **n8n → Credentials**.
- Select it in the "Send a message" node.

#### 3. 💬 Slack Setup
- Add Slack OAuth2 credentials.
- Select your Slack workspace and choose the channel (e.g., `#leads`).

#### 4. 🧠 Configure the AI Agent (OpenAI)
- Provide your OpenAI API key under **Credentials → OpenAI API**.
- The AI Agent node is pre-configured to:
  - Format a custom Slack message
  - Format a custom Outlook HTML email

#### 5. 🛠 Node Details
- **Calendly Event** (Trigger): Listens for new bookings
- **Edit Fields**: Extracts values like name, email, start time, and form answers
- **Email Generator** (AI Agent): Creates formatted email + Slack message
- **Send a message** (Outlook): Sends the formatted email to your inbox
- **Slack Message**: Sends the AI-generated Slack alert

---

### 🧪 Example Output

**Slack Message**:


## 📊 Basic Information

- **Workflow ID:** 7305
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 225
- **Downloads:** 22
- **Created:** 2025/8/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7305)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **set** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **microsoftOutlook** 
- **stickyNote** (×2)
- **calendlyTrigger** 
- **slack** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
