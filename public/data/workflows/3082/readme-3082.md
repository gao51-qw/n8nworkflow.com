# Social media content generator and publisher | X, Linkedin

> # Generate and Publish AI Content to LinkedIn and X (Twitter) with n8n

## Overview
This **n8n workflow** automates the generation and publishing of AI-powered social media content across **LinkedIn** and **X (formerly Twitter)**. By leveraging AI, this workflow helps social media managers, marketers, and content creators streamline their posting process.

### Who is this for?
- Social media managers
- Content creators
- Digital marketers
- Businesses looking to automate content generation

## Features
- **AI-powered content creation** tailored for LinkedIn and X (Twitter)
- **Automated publishing** to both platforms
- **Structured output parsing** to ensure consistency
- **OAuth2 authentication** for secure posting
- **Merge and confirmation steps** to track successful postings

## Setup Instructions
### Prerequisites
Before using this workflow, ensure you have:
- An **n8n instance** set up
- API credentials for:
  - **Google Gemini AI** (for content generation)
  - **X Developer Account** with OAuth2 authentication
  - **LinkedIn Developer Account** with OAuth2 authentication
- A form submission service integrated with n8n

## Workflow Breakdown

### **1. Trigger: Form Submission**
- A user submits a form containing the **post title**.
- The form is secured with **Basic Authentication**.
- The submitted title is passed to the AI Agent.

### **2. AI Content Generation**
- The **Google Gemini Chat Model** processes the title and generates:
  - **LinkedIn post content**
  - **Twitter (X) post content**
  - **Hashtags**
  - **Call-to-action (LinkedIn)**
  - **Character limit check (Twitter)**

### **3. Parsing AI Output**
- A structured output parser converts the AI-generated content into a **JSON format**.
- Ensures correct formatting for LinkedIn and Twitter (X).

### **4. Publishing to Social Media**
#### **X (Twitter) Posting**
- Extracts the **Twitter post** from the AI output.
- Publishes it via an **OAuth2-authenticated** X (Twitter) account.

#### **LinkedIn Posting**
- Extracts the **LinkedIn post** from the AI output.
- Publishes it via an **OAuth2-authenticated** LinkedIn account.

### **5. Merging Post Results**
- Merges the response data from both **LinkedIn** and **Twitter** after publishing.

### **6. Confirmation Step**
- Displays a **final confirmation form** once the posts are successfully published.

## Benefits
- **Save time** by automating content creation and publishing.
- **Ensure consistency** across platforms with structured AI-generated posts.
- **Secure authentication** using OAuth2 for LinkedIn and Twitter.
- **Increase engagement** with AI-optimized hashtags and CTAs.

This workflow enables seamless **social media automation**, helping professionals post engaging AI-powered content effortlessly. 🚀
```



## 📊 Basic Information

- **Workflow ID:** 3082
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 21998
- **Downloads:** 2199
- **Created:** 2025/3/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3082)

## 👤 Author

- **Name:** ömer
- **Username:** @gocmen

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **formTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **twitter** 
- **linkedIn** 
- **merge** 
- **form** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
