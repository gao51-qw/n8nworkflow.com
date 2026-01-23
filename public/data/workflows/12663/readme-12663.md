# Create and schedule LinkedIn posts from Google Sheets with Gemini and DALL·E

> ## Overview
This n8n automation is a complete LinkedIn Content Engine that turns simple topic ideas into fully written, visual, and scheduled posts. It features a "Human-in-the-Loop" design, meaning AI handles the heavy lifting of writing and image creation, but nothing goes live until you manually approve it in Google Sheets.

## How It Works
The system runs two separate workflows in parallel:

### 1. The "Creator" Workflow

**Input:** Detects when you add a new topic to your "Content Calendar" Google Sheet.

**Brand Alignment:** Pulls your specific "Brand Voice" guidelines from a separate tab to ensure the AI sounds like you.

**Creation:** Uses Gemini Flash 1.5 to write the post and DALL-E 3 to generate a matching professional image.

**Drafting:** Uploads the image to ImgBB and saves the full draft back to your sheet with a status of "Draft."

### 2. The "Publisher" Workflow

**Daily Scan:** Wakes up every morning to check your Content Calendar.

**Verification:** Looks for posts that match two criteria:

* Date Scheduled matches today's date.
* Status is marked as "Approved" (by you).

**Publishing:** If both match, it automatically uploads the text and image to LinkedIn and updates the sheet status to "Posted."

**Tools Used:** n8n, Google Sheets, OpenRouter (Gemini / OpenAI), ImgBB.

## Connect & Learn More
**YouTube Channel:** **[Simon Scrapes](https://www.youtube.com/@simonscrapes)** – More tutorials on AI & Automation.

**Community:** **[Skool Community](https://www.skool.com/scrapes/about)** – Master AI & Automation with us.

**Full Video Tutorial:** [Watch the step-by-step build here](https://youtu.be/eiIRSUhPgOI?si=lgZTrPZPMqWF4uqz&t=4276)

## 📊 Basic Information

- **Workflow ID:** 12663
- **Complexity:** advanced
- **Node Count:** 32
- **Views:** 114
- **Downloads:** 11
- **Created:** 2026/1/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12663)

## 👤 Author

- **Name:** simonscrapes
- **Username:** @simonscrapes

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×2)
- **stickyNote** (×14)
- **googleSheets** (×4)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **googleSheetsTrigger** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **filter** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **scheduleTrigger** 
- **if** 
- **noOp** 
- **n8n-nodes-preview-upload-post.uploadPost** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 32 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
