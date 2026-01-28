# Generate & publish professional COE blogs with Gemini AI and Google Drive

> This n8n workflow transforms simple chat requests into professional Center of Excellence (COE) blog posts using AI, then automatically publishes them to Google Drive.

## What Is This?

An intelligent blog creation system that takes a topic from chat and produces executive-level blog posts. Uses three AI stages to ensure high-quality, professional content suitable for business consumption.

## Why Use This?

- **Professional Content**: Creates sophisticated blogs with business insights
- **Save Time**: Topic to published blog in 2-3 minutes
- **No Writing Skills Needed**: AI handles all the writing and formatting
- **Auto-Publishing**: Creates and shares Google Docs automatically
- **Easy to Use**: Just chat your topic, get your blog

## How It Works

### 1. **Blog Request & Planning**
- **Start Blog Request**: Chat interface receives your blog topic
- **Create Blog Outline**: AI generates structured outline with sections
- **AI Brain for Outline**: Powers the initial content planning

### 2. **Content Review & Writing**
- **Review & Fix Outline**: AI improves outline structure and flow
- **Write Full Blog Post**: Transforms outline into complete professional blog
- **AI Brain for Review/Writing**: Advanced AI models handle content creation

### 3. **Publish & Share Blog**
- **Clean Up Text Format**: Removes formatting issues for clean presentation
- **Save Blog to Google Drive**: Creates properly formatted Google Doc
- **Email Blog to Stakeholder**: Shares with specified team members
- **Make Blog Public**: Creates shareable public link
- **Send Blog Link to User**: Returns document URL via chat

## How to Use

1. **Start Chat**: Access the chat interface and type your blog topic
2. **Wait**: AI automatically processes (2-3 minutes)
3. **Get Your Blog**: Receive Google Drive link to your published blog

## Good to Know

- **Processing Time**: 2-3 minutes per blog
- **Content Quality**: Uses advanced Gemini AI models for professional output
- **Auto-Formatting**: Creates clean Google Docs ready for sharing
- **Instant Sharing**: Stakeholders get email notifications automatically
- **Public Access**: Generates shareable links for broader distribution

## Customizing This Workflow

### **Content Style**
- Modify AI prompts to match your company's writing tone
- Adjust content evaluation criteria for different audiences
- Change blog structure templates

### **Publishing & Sharing**
- Update stakeholder email addresses
- Change Google Drive folder destinations
- Modify sharing permissions (public/private)
- Add more distribution channels

### **AI Enhancement**
- Switch between different AI models for speed vs quality
- Add more review stages for specialized content
- Include company-specific knowledge sources

## 📊 Basic Information

- **Workflow ID:** 5619
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 859
- **Downloads:** 85
- **Created:** 2025/7/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5619)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)
- **code** 
- **googleDrive** (×3)
- **set** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
