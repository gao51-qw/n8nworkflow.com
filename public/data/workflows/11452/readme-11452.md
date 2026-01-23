# Create daily Google Alerts digest with Gemini AI summarization and Gmail

> # Summarize Google Alerts with Gemini

Turn your noisy Google Alerts folder into a concise, AI-curated executive briefing. This workflow replaces dozens of individual notification emails with a single, structured daily digest.

### How it works
*   **Ingest:** Fetches unread Google Alerts emails from your Gmail inbox.
*   **Clean:** Extracts article links, scrapes the website content, and strips away ads and clutter to ensure high-quality AI processing.
*   **Analyze:** Uses Google Gemini to summarize each article into a concise 2-4 sentence overview.
*   **Deliver:** Compiles a professional HTML email report sorted by topic, sends it to you, and automatically marks the original alerts as read.

### Set up steps
*   **Connect Gmail:** Authenticate your Gmail account to allow reading alerts and sending the digest.
*   **Connect Gemini:** Add your Google Gemini API key.
*   **Configure Recipient:** Update the **Send Email Digest** node with your desired destination email address.
*   **Schedule:** (Optional) Replace the Manual Trigger with a **Schedule Trigger** (e.g., every morning at 7 AM) to fully automate the process.

## 📊 Basic Information

- **Workflow ID:** 11452
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 130
- **Downloads:** 13
- **Created:** 2025/12/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11452)

## 👤 Author

- **Name:** Bernhard Zindel 
- **Username:** @bzi

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **code** (×3)
- **aggregate** (×2)
- **stickyNote** (×7)
- **gmail** (×3)
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.agent** 
- **set** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
