# Schedule BlueSky posts and threads using Google Sheets as content calendar

> This workflow turns a Google Sheet into a fully automated content calendar for BlueSky. It handles single posts, multi-post threads, and image attachments, allowing you to manage your entire social presence from a simple spreadsheet.

## Who is this for
Ideal for social media managers, content creators, and growth marketers who want to schedule content in bulk without using expensive third-party tools.

## What it does
It runs on a schedule to check your Google Sheet for posts marked "Ready." It automatically handles:
* **Threading:** Links posts together if they share a Thread ID and Sequence.
* **Images:** Downloads image URLs and uploads them as blobs to BlueSky.
* **Status Updates:** Marks rows as "Posted" and saves the live URL back to your sheet.

## How to set up
1. **Google Sheet:** Create a sheet with these columns: `Content`, `Thread ID`, `Sequence` (use '1' for single posts), `Image URL`, `Scheduled Time`, `Status`, `Post Link`.
   * **Important:** Even if it is a single post (not a thread), you must add a unique `Thread ID`.
   * **Note:** `Image URL` is optional.
   * **Format:** Set the "Scheduled Time" column type to **Plain Text** to prevent date errors.
   * *(A sample Google Sheet link is provided inside the workflow notes)*.
2. **Credentials:** Enter your BlueSky Handle and App Password in the "Configuration" node.
3. **Select Sheet:** In both the "Get row(s)" and "Update row" nodes, select your specific Google Sheet.

## 🚀 The BlueSky Growth Suite
This workflow is part of a 3-part automation suite designed to help you grow on BlueSky:
* **Part 1: Post Scheduler** (This template)
* **Part 2: Analytics Tracker** (Track likes/reposts back to Sheets)
* **Part 3: Lead Magnet Bot** (Auto-DM users who reply to your posts)

## 📊 Basic Information

- **Workflow ID:** 12153
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 18
- **Downloads:** 1
- **Created:** 2025/12/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12153)

## 👤 Author

- **Name:** Soumya Sahu
- **Username:** @sahu

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleSheets** (×2)
- **sort** 
- **splitInBatches** 
- **if** 
- **httpRequest** (×4)
- **code** (×2)
- **set** 
- **stickyNote** (×19)
- **merge** (×2)
- **filter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
