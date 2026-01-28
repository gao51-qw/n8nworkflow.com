# Automate tweet filtering and replies on X with GPT and scheduled rotation

> # Automate tweet engagement on X (formerly Twitter)

## Description

Automate professional engagement on X (formerly Twitter) by searching for, filtering, liking, and replying to tweets that match your key topics. This workflow enables you to engage consistently and efficiently with relevant conversations, using your defined professional role and the power of GPT for filtering and replies. Save time and maintain high-quality interactions, while staying focused on your business or personal brand interests.

---

## How it Works

1. **Rotating Topic Selection**
   The workflow selects one search term from your list on each run, using a rotating index based on the date.

2. **Search Tweets & Extract Essentials**
   Searches X (formerly Twitter) for tweets matching the chosen topic, then extracts only the tweet `id` and `text` for further processing.

3. **GPT‑Based Filtering with Role Context**
   Filters tweets based on your role and strict criteria, removing non-English tweets, memes, spam, Grok-generated content, political posts, internships, and more.

4. **Engagement Loop**
   For every filtered tweet, the workflow likes the post, generates a professional, concise reply with GPT (matching language and context), and posts the reply. Wait nodes ensure compliance with Twitter’s API rate limits (can be adjusted for paid API tiers).

---

## Requirements

* X (Twitter) API credentials (for searching, liking, and replying to tweets)
* OpenAI API key (for GPT-based steps)

---

## Setup Steps

1. **Obtain your X (Twitter) API credentials.**
2. **Obtain your OpenAI API key.**
3. **Configure the schedule** in the trigger node to your desired frequency (e.g., every 3 days or daily).
4. **Set your list of topics and professional role** in the variables node.

---

## How to Customize the Workflow (Optional)

* **Adjust prompts** in the GPT nodes to fine-tune filtering and reply style.
* **Upgrade your Twitter API plan** to increase request limits and search for more tweets per run.
* **Change tweet processing logic:** For high-volume engagement (e.g., analyzing 100+ tweets per run), consider switching to a per-tweet loop for advanced filtering and response handling.

---

**This workflow enables scalable, professional, and targeted engagement on X (formerly Twitter), fully customizable to your audience and objectives.**


## 📊 Basic Information

- **Workflow ID:** 7027
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 1023
- **Downloads:** 102
- **Created:** 2025/8/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7027)

## 👤 Author

- **Name:** Jorge Martínez
- **Username:** @jorgemartinezjam

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **wait** (×2)
- **splitInBatches** 
- **scheduleTrigger** 
- **set** 
- **code** (×3)
- **twitter** (×3)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
