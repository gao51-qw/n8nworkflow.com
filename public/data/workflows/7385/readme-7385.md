# Email to Notion knowledge base with IMAP, Postgres dedup and Telegram alert

> Filter incoming emails via IMAP, extract & clean the body into plain text, normalize (title/slug/snippet/date/from/url), check for duplicates in Postgres, store as a row in a Notion database, then send a Telegram notification.
Perfect for building a knowledge base or inbox triage automation without duplicate noise.

Key Features

IMAP polling (Only UNSEEN).

Extract & clean HTML → plain text.

Normalization: title, snippet, bodyText, slug, messageId, sentAt, fromAddress, sourceUrl.

Deduplication via Postgres (SELECT EXISTS).

Create page in Notion database (property mapping).

Telegram success notification.

Tags: email, imap, notion, postgres, deduplication, telegram, automation, knowledge-base

Prerequisites

IMAP access (Gmail/Outlook/Custom).

Gmail: enable IMAP + App Password if using 2FA.

Notion Integration Token & Database ID (database must be shared with the integration).

PostgreSQL accessible from n8n.

(Optional) Telegram Bot Token & Chat ID.

## 📊 Basic Information

- **Workflow ID:** 7385
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 342
- **Downloads:** 34
- **Created:** 2025/8/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7385)

## 👤 Author

- **Name:** Ariyanto Catur Pamungkas
- **Username:** @shioon

## 🏷️ Categories

- Internal Wiki
- Multimodal AI

## 🔗 Nodes Used

- **emailReadImap** (×4)
- **code** (×4)
- **postgres** (×4)
- **if** (×4)
- **notion** (×4)
- **telegram** (×4)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
