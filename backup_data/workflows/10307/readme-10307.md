# Automate Instagram comment replies with OpenAI and Redis tracking

> This workflow automatically replies to new comments on your Instagram posts using smart AI.  
It checks your recent posts, finds unread comments, and skips spam or duplicates.  
The AI reads the post and comments to create a friendly, natural reply with emojis.  
It posts the reply instantly and logs everything so you can track engagement.  
Perfect for busy creators — stays active 24/7 without you lifting a finger!

## What It Monitors
- **Recent Instagram Posts**: Fetches the latest posts based on your account activity.
- **New Comments**: Detects unreplied comments in real time.
- **Reply Eligibility**: Filters spam, duplicates, and already replied comments.
- **AI-Generated Responses**: Creates personalized, engaging replies using post context.

## Features
- Runs on a **schedule trigger** (High traffic: 2–3 min | Medium: 5 min | Low: 10+ min).
- Fetches **recent posts** and their **comments** via Instagram Graph API.
- **Context-aware AI replies** using post caption + comment content.
- **Spam & duplicate filtering** to avoid unwanted or repeated replies.
- **Tone-friendly & emoji-rich** responses for higher engagement.
- **Logs every reply** with metadata (post ID, comment ID, timestamp).


## Workflow Steps

| Node Name | Description |
|---------|-----------|
| **Schedule Trigger** | Triggers workflow based on traffic level (2–10 min intervals). |
| **Get Recent Posts** | Fetches recent posts using Instagram Graph API. Returns post IDs needed to fetch comments. |
| **Split Posts** | Splits batch of posts into individual items for parallel processing. |
| **Get Comments** | For each post, retrieves comments with content, username, timestamp, like count. |
| **Split Comments** | Splits comments into individual items for granular processing. |
| **Add Post Context** | Combines comment + original post caption to generate relevant replies. |
| **Check if Replied** | Checks if AI has already replied to this comment (prevents duplicate replies). |
| **Not Replied Yet?** | Routes only unreplied comments forward. |
| **Spam Filter** | Filters out spam using: <br>• Spam keywords <br>• Empty/one-word comments <br>• Excessive emojis <br>• Known spam patterns |
| **Should Reply?** | Final logic gate: <br>• If reply key exists → Skip <br>• If spam → Skip <br>• Else → Proceed |
| **Generate AI Reply** | Uses OpenAI (or compatible LLM): <br>• Input: Post caption + comment <br>• Tone: Friendly & engaging <br>• Max tokens: 150 <br>• Temperature: 0.8 (creative) |
| **Post Reply** | Posts AI-generated reply via Instagram API: <br>• Method: POST <br>• Body: message parameter <br>• TTL: 30 days |
| **Mark As Replied** | Updates internal tracking to prevent duplicate replies. |
| **Log Reply** | Logs full reply details: <br>• Post ID <br>• Comment ID <br>• Username <br>• Reply text <br>• Timestamp <br>• Used for analytics & reporting |

---

## How to Use
1. Copy the JSON configuration of the workflow.
2. Import it into your **n8n** workspace.
3. Configure **Instagram Graph API credentials** (Business/Creator Account required).
4. Set up **OpenAI API key** in the **Generate AI Reply** node.
5. Activate the workflow.
6. Monitor replies in Instagram and execution logs in n8n.

&gt; The bot will **only reply once per comment**, skip spam, and use full post context for natural responses.

---

## Requirements
- **n8n** account and self-hosted or cloud instance.
- **Instagram Business or Creator Account** with Graph API access.
- **Facebook App** with `pages_read_engagement`, `pages_manage_comments` permissions.
- **OpenAI API key** (or compatible LLM endpoint).
- Valid **access token** with long-lived permissions.

---

## Customizing this Workflow
- Change **Schedule Trigger** interval based on post frequency (e.g., every 1 min for viral accounts).
- Update **Spam Filter** keywords list for brand-specific spam patterns.
- Modify **Generate AI Reply** prompt to match your brand voice (e.g., formal, humorous, Gen-Z).
- Adjust **Temperature** (0.5 = consistent, 1.0 = creative) and **Max Tokens**.
- Replace **OpenAI** with **Claude, Gemini, or local LLM** via HTTP request.
- Add **approval step** (manual review) before posting replies.
- Export logs to **Google Sheets, Airtable, or database** for analytics.

**Explore More AI Workflows:** [https://www.oneclickitsolution.com/contact-us/](https://www.oneclickitsolution.com/contact-us/)



## 📊 Basic Information

- **Workflow ID:** 10307
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 486
- **Downloads:** 48
- **Created:** 2025/10/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10307)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×13)
- **scheduleTrigger** 
- **httpRequest** (×3)
- **splitOut** (×2)
- **merge** 
- **redis** (×3)
- **if** (×2)
- **code** 
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
