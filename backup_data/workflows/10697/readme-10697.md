# Automate blog content creation from topics to WordPress with AI, Google Drive & Sheets

> # Blog Post Content Creation (Multi-Topic with Brand Research, Google Drive, and WordPress)

## Description

This workflow automates the full lifecycle of generating and publishing SEO-optimized blog posts from a list of topics. It reads topics (and optionally brands) from Google Sheets, performs brand research, generates a structured HTML article via AI, converts it into an HTML file for Google Drive, publishes a draft post on WordPress, and repeats this for every row in the sheet.

When the final topic has been processed, a single Slack message is sent to confirm completion and share links.

## How It Works

### 1. Input from Google Sheets

A Google Sheets node reads rows containing at least:

- Brand (optional, can be defaulted)
- Blog Title or Topic

A Split In Batches node iterates through the rows one by one so each topic is processed independently.

### 2. Configuration

The Configuration node maps each row’s values into:

- Brand
- Blog Title

These values are used consistently across brand research, content creation, file naming, and WordPress publishing.

### 3. Brand Research

A Language Model Chain node calls an OpenRouter model to gather background information about the brand and its services.

The brand context is used as input for better, on-brand content generation.

### 4. Content Creation

A second Language Model Chain node uses the brand research and the blog title or topic to generate a full-length, SEO-friendly blog article.

Output is clean HTML with:

- Exactly one `<h1>` at the top
- Structured `<h2>` and `<h3>` headings
- Semantic tags only
- No inline CSS
- No `&lt;html&gt;` or `&lt;body&gt;` wrappers
- No external resources

### 5. HTML Processing

A Code node in JavaScript:

- Strips any markdown-style code fences around the HTML
- Normalizes paragraph breaks
- Builds a safe file name from the blog title
- Encodes the HTML as a binary file payload

### 6. Upload to Google Drive

A Google Drive node uploads the generated HTML file to a specified folder.

Each topic creates its own HTML file, named after the blog title.

### 7. Publish to WordPress

An HTTP Request node calls the WordPress REST API to create a post.

The post content is the generated HTML, and the title comes from the Configuration node.  
By default, the post is created with status `draft` (can be changed to `publish` if desired).

### 8. Loop Control and Slack Notification

After each topic is processed (Drive upload and WordPress draft), the workflow loops back to Split In Batches to process the next row.

When there are no rows left, an IF node detects that the loop has finished.

Only then is a single Slack message sent to:

- Confirm that all posts have been processed
- Share links to the last generated Google Drive file and WordPress post

## Integrations Used

- OpenRouter - AI models for brand research and SEO content generation
- Google Sheets - Source of topics and (optionally) brands
- Google Drive - Storage for generated HTML files
- WordPress REST API - Blog post creation (drafts or published posts)
- Slack - Final summary notification when the entire batch is complete

## Ideal Use Case

- Content teams and agencies managing a queue of blog topics in a spreadsheet
- Marketers who want a hands-off pipeline from topic list to WordPress drafts
- Teams who need generated HTML files stored in Drive for backup, review, or reuse
- Any workflow where automation should handle the heavy lifting and humans only review the final drafts

## Setup Instructions

### Google Sheets

- Create a sheet with columns like `Brand` and `Blog Title` or `Topic`.
- In the Get Blog Topics node, set the sheet ID and range to match your sheet.
- Add your Google Sheets credentials in n8n.

### OpenRouter (LLM)

- Add your OpenRouter API key as credentials.
- In the OpenRouter Chat Model nodes, select your preferred models and options if you want to customize behavior.

### Google Drive

- Add Google Drive credentials.
- Update the folder ID in the Upload file node to your target directory.

### WordPress

- In the Publish to WordPress node, replace the example URL with your site’s REST API endpoint.
- Configure authentication (for example, Application Passwords or Basic Auth).
- Adjust the `status` field (`draft` or `publish`) to match your desired workflow.

### Slack

- Add Slack OAuth credentials.
- Set the channel ID in the Slack node where the final summary message should be posted.

### Run the Workflow

- Click Execute Workflow.
- The workflow will loop through every row in the sheet, generating content, saving HTML files to Drive, and creating WordPress posts.
- When all rows have been processed, a single Slack notification confirms completion.


## 📊 Basic Information

- **Workflow ID:** 10697
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 247
- **Downloads:** 24
- **Created:** 2025/11/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10697)

## 👤 Author

- **Name:** Jonas Frewert
- **Username:** @jonasfrewert

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **set** 
- **code** 
- **googleDrive** 
- **httpRequest** 
- **if** 
- **slack** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **manualTrigger** 
- **stickyNote** (×5)
- **googleSheets** 
- **splitInBatches** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
