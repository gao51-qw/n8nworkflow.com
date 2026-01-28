# Automate blog publishing from PostgreSQL to WordPress with OpenAI GPT

> ## How it works
This workflow automatically generates and publishes marketing blog posts to WordPress using AI. It begins by checking your PostgreSQL database for unprocessed records, then uses OpenAI to create SEO-friendly, structured blog content. The content is formatted for WordPress, including categories, tags, and meta descriptions, before being published. After publishing, the workflow updates the original database record to track processing status and WordPress post details.

## Step-by-step
- **Trigger workflow**  
  - **Schedule Trigger** – Runs the workflow at defined intervals.  
- **Fetch unprocessed record**  
  - **PostgreSQL Trigger** – Retrieves the latest unprocessed record from the database.  
  - **Check Record Exists** – Confirms the record is valid and ready for processing.  
- **Generate AI blog content**  
  - **OpenAI Chat Model** – Processes the record to generate blog content based on the title.  
  - **Blog Post Agent** – Structures AI output into JSON with title, content, excerpt, and meta description.  
- **Format and safeguard content**  
  - **Code Node** – Prepares structured data for WordPress, ensuring categories, tags, and error handling.  
- **Publish content and update database**  
  - **WordPress Publisher** – Publishes content to WordPress with proper categories, tags, and meta.  
  - **Update Database** – Marks the record as processed and stores WordPress post ID, URL, and processing timestamp.

## Why use this?
- Automates end-to-end blog content generation and publishing.  
- Ensures SEO-friendly and marketing-optimized posts.  
- Maintains database integrity by tracking published content.  
- Reduces manual effort and accelerates content workflow.  
- Integrates PostgreSQL, OpenAI, and WordPress seamlessly for scalable marketing automation.


## 📊 Basic Information

- **Workflow ID:** 9217
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 224
- **Downloads:** 22
- **Created:** 2025/10/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9217)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **postgres** (×2)
- **scheduleTrigger** 
- **code** 
- **wordpress** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **if** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
