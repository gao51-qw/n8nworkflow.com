This n8n automation notifies you whenever someone books a meeting with you via **Calendly**. It sends a customized **email via Outlook** and a **Slack message** using details from the event.

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
