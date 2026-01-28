# Reddit lead finder: Automated prospecting with GPT-4, Supabase and Gmail alerts

> This workflow monitors targeted subreddits for potential sales leads using Reddit’s API, AI content analysis, Supabase, and Google Sheets.

It is built specifically to discover posts from Reddit users who may benefit from a particular product or service. It can be easily customized for any market.

---

### 🔍 Features

- **Targeted Subreddit Monitoring:**  
  Searches multiple niche subreddits like `smallbusiness`, `startup`, `sweatystartup`, etc., using relevant keywords.

- **AI-Powered Relevance Scoring:**  
  Uses OpenAI GPT to analyze each post and determine if it’s written by someone who might benefit from your product, returning a simple “yes” or “no.”

- **Duplicate Lead Filtering with Supabase:**  
  Ensures you don’t email the same lead more than once by storing already-processed Reddit post IDs in a Supabase table.

- **Content Filtering:**  
  Filters out posts with no body text or no upvotes to ensure only high-quality content is processed.

- **Lead Storage in Google Sheets:**  
  Saves qualified leads into a connected Google Sheet with key data (URL, post content, subreddit, and timestamp).

- **Email Digest Alerts:**  
  Compiles relevant leads and sends a daily digest of matched posts to your team’s inbox for review or outreach.

- **Manual or Scheduled Trigger:**  
  Can be manually triggered or automatically scheduled (via the built-in Schedule Trigger node).

---

### ⚙️ Tech Stack

- **Reddit API** – For post discovery  
- **OpenAI Chat Model** – For AI-based relevance filtering  
- **Supabase** – For lead de-duplication  
- **Google Sheets** – For storing lead details  
- **Gmail API** – For sending email alerts

---

### 🔧 Customization Tips

- **Adjust Audience**: Modify the subreddits and keywords in the initial `Code` node to match your market.
- **Change the AI Prompt**: Customize the prompt in the “Analysis Content by AI” node to describe your product or service.
- **Search Comments Instead**: To monitor comments instead of posts, change `type=link` to `type=comment` in the Reddit Search node.
- **Change Email Recipients**: Edit the Gmail node to direct leads to a different email address or format.

## 📊 Basic Information

- **Workflow ID:** 6756
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 963
- **Downloads:** 96
- **Created:** 2025/8/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6756)

## 👤 Author

- **Name:** BluePro
- **Username:** @bluepro

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **reddit** 
- **if** (×3)
- **googleSheets** 
- **gmail** 
- **splitInBatches** (×4)
- **supabase** (×2)
- **code** (×6)
- **wait** 
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
