# Daily tech & cyber security brief with RSS, OpenAI GPT-4o, and Gmail

> **What this workflow does**
---------------------------

-   Pulls free security/tech headlines from multiple RSS feeds (e.g., CISA, BleepingComputer, Krebs, SecurityWeek, Ars Technica, TechCrunch, Hacker News).

-   De-duplicates stories, keeps only the last 24 hours, and limits to a manageable number.

-   Uses OpenAI to write a concise brief with sections and "Why it matters."

-   Sends a clean HTML email via Gmail.

**Category:** Security / News\
**Time to set up:** ~10--15 minutes\
**Difficulty:** Beginner--Intermediate\
**Cost:** Mostly free (OpenAI tokens + Gmail)

* * * * *

**What you'll need**
--------------------

-   n8n (recent version)
-   OpenAI credentials
-   Gmail (or SMTP) credentials
-   A few free RSS feed URLs (swap in/out as you like)

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

-   If everything gets discarded at de-dup e while testing, switch to "within current input" or reset the node's stored values.
-   If no items pass the IF, widen the date window temporarily (some feeds publish late).
-   If the email arrives blank, ensure Gmail email type is set to HTML and the subject/body fields map to the model's output.

* * * * *

**Sources you can start with (swap freely)**
--------------------------------------------

CISA, BleepingComputer, KrebsOnSecurity, SecurityWeek, Ars Technica (Security), TechCrunch (Security), Hacker News (front page).

## 📊 Basic Information

- **Workflow ID:** 7428
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 1084
- **Downloads:** 108
- **Created:** 2025/8/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7428)

## 👤 Author

- **Name:** Calistus Christian
- **Username:** @ca7ai

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **rssFeedRead** (×6)
- **merge** 
- **removeDuplicates** 
- **if** 
- **limit** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **code** (×3)
- **scheduleTrigger** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
