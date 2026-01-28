# Automated social media content creation with OpenAI, LinkedIn & Twitter approval

> Whether you’re a product manager, developer, or simply curious about workflow automation, you’re in the right place. This n8n workflow is designed to help you streamline and automate your social media content creation, approval, and publishing process—all with minimal manual effort.

I’ve put together this guide to make it easy for you to get started, even if you’re new to n8n or automation tools. You’ll find step-by-step instructions, helpful links, and tips to ensure a smooth setup. Feel free to explore, experiment, and make this workflow your own!

Let’s dive in and unlock the power of automation together!

## **1. What This Workflow Does**

This workflow automates the process of creating, reviewing, and publishing social media posts for LinkedIn and Twitter (X), including image generation and approval steps. It also notifies via Slack and logs posts in Google Sheets.

Workflow json: https://drive.google.com/drive/folders/1zE5W0Ff6EBoAFRHupWPybC-fnGZqE84r?usp=sharing

## **2. Prerequisites**

- An n8n account (sign up for free: [n8n Cloud](https://app.n8n.cloud/register))
- API credentials for:
    - OpenAI (for content and image generation)
    - LinkedIn
    - Gmail (for approval emails)
    - Twitter/X
    - Slack
    - Google Sheets

You’ll find help to set up auth at the end of this doc!

## **3. How to Use This Workflow**

### **Step 1: Import the Workflow**

- Download or copy the workflow JSON.
- In n8n, click **Import** and paste/upload the workflow.

### **Step 2: Set Up Credentials**

- For each service node (OpenAI, LinkedIn, Gmail, Twitter, Slack, Google Sheets), click the node and select or create the required credentials.
- Use the official setup links provided earlier for each service.

### **Step 3: Configure the Trigger**

- The workflow starts with a **Form Trigger** node. Open the node to customize the form fields if needed.

### **Step 4: Test the Workflow**

- Click **Test Workflow** to run it manually.
- Fill out the form to generate a post.
- The workflow will:
    1. Generate platform-specific content using AI.
    2. Send an approval email.
    3. If approved, generate an image (if selected).
    4. Publish to LinkedIn and Twitter.
    5. Notify via Slack.
    6. Log the post in Google Sheets.

### **Step 5: Review and Adjust**

- Check each node for errors or missing credentials.
- Adjust content prompts, approval logic, or output formatting as needed.

## **4. Helpful n8n Resources**

- [n8n Quickstart Guide](https://docs.n8n.io/getting-started/quickstart/)
- [How to use workflow templates](https://docs.n8n.io/workflows/templates/)
- [Working with credentials](https://docs.n8n.io/credentials/)
- [Using expressions in n8n](https://docs.n8n.io/code/expressions/)

## 📊 Basic Information

- **Workflow ID:** 6486
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 1807
- **Downloads:** 180
- **Created:** 2025/7/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6486)

## 👤 Author

- **Name:** Saloni Malhotra
- **Username:** @salonimalhotra

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **linkedIn** (×2)
- **gmail** 
- **formTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **if** (×2)
- **twitter** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **slack** 
- **googleSheets** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
