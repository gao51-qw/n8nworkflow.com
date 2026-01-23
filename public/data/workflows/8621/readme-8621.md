# Daily business news summary with OpenAI and Gmail from multiple RSS sources

> -   Pulls free business and economic headlines from multiple publicly available RSS feeds (e.g., Reuters, Wall Street Journal, Federal Reserve, St. Louis Fed, BNP Paribas, WTO).

-   De-duplicates stories, keeps only the last 24 hours, and limits to a manageable number.

-   Uses OpenAI to generate a concise market brief with sections and "Why it matters."

-   Sends a clean HTML email via Gmail.

**Category:** Business / Economics / News\
**Time to set up:** ~10--15 minutes\
**Difficulty:** Beginner--Intermediate\
**Cost:** Free (except minimal OpenAI tokens if summarization is used)

* * * * *

**What you'll need**
--------------------

-   n8n (recent version)

-   OpenAI credentials (for summaries, optional if you want raw feeds only)

-   Gmail (or SMTP) credentials

-   A few **free RSS feed URLs** (swap in/out as you like)

* * * * *

**Set up steps**
----------------

-   Trigger -- Add a Cron to run daily (pick your time and timezone).

-   Fetch -- Add one RSS Read node per source and connect all to a Merge (append).

-   De-duplicate (this run) -- Add Remove Duplicates and compare on a stable key (prefer the article URL).

-   Freshness -- Add an IF to pass only items published in the last 24 hours.

-   Limit -- Add Limit to cap the total items (e.g., 25).

-   Summarize -- Add OpenAI → Message a model to produce a JSON brief with subject + HTML body.

-   Email -- Add Gmail → Send to deliver the brief to your inbox.

* * * * *

**Tips & troubleshooting**
--------------------------

-   If everything gets discarded at de-dup while testing, switch to "within current input" or reset the node's stored values.

-   If no items pass the IF, widen the date window temporarily (some feeds publish late).

-   If the email arrives blank, ensure Gmail email type is set to HTML and the subject/body fields map to the model's output.

* * * * *

**Free sources you can start with (swap freely)**
-------------------------------------------------

-   Yahoo News
-   Financial Times

## 📊 Basic Information

- **Workflow ID:** 8621
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 82
- **Downloads:** 8
- **Created:** 2025/9/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8621)

## 👤 Author

- **Name:** Calistus Christian
- **Username:** @ca7ai

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **merge** 
- **removeDuplicates** 
- **if** 
- **limit** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **code** (×3)
- **scheduleTrigger** 
- **stickyNote** (×3)
- **rssFeedRead** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
