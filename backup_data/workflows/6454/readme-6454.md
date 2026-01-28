# Automated inbox organization for Outlook using GPT-4.1 agent

> # Auto-Categorize Outlook Emails with AI in n8n

## **How It Works**

1. **Trigger:** The workflow starts with the **Microsoft Outlook Trigger** node, polling your inbox every minute for new emails.
2. **Extract & Clean Email Content:** The email’s key fields (from, subject, isRead, body) are extracted. The body is converted from HTML to Markdown, then sanitized to plain text for reliable AI processing.

   **Node Setup Details:**

   - **Microsoft Outlook Trigger**
     - **Resource:** Message
     - **Operation:** Trigger on new email
     - **Fields to Output:** from, subject, isRead(optional), body
     - **Folders to Include:** (Set to your Inbox or specific folder IDs)
   
   - **Markdown Node**
     - **Input:** `{{$json["body"]["content"]}}` (HTML email body)
     - **Output Key:** `Email Body Markdown`
     - **Purpose:** Converts HTML to Markdown for easier downstream processing.
   
   - **Sanitize Node (Code Node)**
     - **Input:** `Email Body Markdown` from previous node
     - **Purpose:** Cleans up Markdown, strips images, links, HTML tags, table formatting, and truncates to 4000 characters.
     - **Sample JS Code:**
       ```javascript
       // Get the markdown content from the previous node
       const markdownContent = $input.item.json["Email Body Markdown"];

3. **Setup AI tools**
   - Move message and Get Folders Outlook tools are required, get contacts is optional.
   - Set each field in the tools to "defined automatically by the model" and describe each field so the model understands how to use it.
   - OpenRouter or other LLM models tool: You can use any client for this, but make sure to use a model that does well with tool calls (Claude, GPT-4.1, Gemini 2.5 Pro, etc.).

---

## **Best Practices & Notes**

- **AI Prompt Engineering:** The AI is instructed to be conservative—never move emails from real people or saved contacts, and always explain its reasoning if it doesn’t move a message.
- This automation only works for **NEW** incoming messages.
- **Inbox Zero:** This system is designed to help you achieve and maintain Inbox Zero by keeping only actionable items in your main inbox.
- **Customization:** You can adjust the folder logic, add more categories, or tweak the AI prompt for your specific needs.
- **Privacy:** All processing happens within your n8n instance; no email data is stored outside your environment except for the AI call (which only receives sanitized, minimal content).

## 📊 Basic Information

- **Workflow ID:** 6454
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 1347
- **Downloads:** 134
- **Created:** 2025/7/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6454)

## 👤 Author

- **Name:** AlexAutomates
- **Username:** @automatoralex

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **microsoftOutlookTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **microsoftOutlookTool** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **stickyNote** 
- **markdown** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
