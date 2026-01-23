# Transform Reddit questions into SEO blog posts with OpenAI and Google Sheets

> ## Turn Reddit Questions into SEO Articles Automatically

This workflow takes real user questions from Reddit and transforms them into fully structured blog posts — title, intro, steps, and conclusion — using AI.

---

### How it works

- Manually triggered when you want to run it
- Scrapes the latest posts from a specific subreddit (e.g. `r/n8n`)
- Filters only posts that are real questions (based on keywords like “how,” “what,” “why”)
- Logs relevant questions into a Google Sheet as raw input
- Enhances each question using AI (rephrases, creates a clean title and slug)
- Generates full-length blog content:
  - ✏️ Intro paragraph
  - ✅ Step-by-step guide
  - 🧠 Clear conclusion
- Saves the final blog content to a second Google Sheet for publishing

---

### Set up steps

- You’ll need access to:
  - Reddit API (OAuth)
  - OpenAI API
  - Google Sheets
- Takes around **15–20 minutes** to connect all the credentials and tweak prompts
- Customize the subreddit or topic focus by changing the Reddit node config

---

Perfect for content teams who want to scale content output using real community pain points — without ever starting from a blank page.


## 📊 Basic Information

- **Workflow ID:** 5842
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 6899
- **Downloads:** 689
- **Created:** 2025/7/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5842)

## 👤 Author

- **Name:** Abrar Sami
- **Username:** @abrarsami

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **reddit** 
- **code** 
- **googleSheets** (×3)
- **@n8n/n8n-nodes-langchain.agent** (×5)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×5)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** (×5)
- **splitInBatches** 
- **set** (×5)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 27 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
