# Generate social media content from video transcripts with Gemini AI & Airtable

> # 🎬 Social Media Content Generator

## Workflow Overview
Automated social media content creation from video transcripts

### 🎯 Trigger: Airtable Webhook
- **Action**: Receives webhook from Airtable automation
- **Data**: RecordId and action type (e.g., "post-ig")
- **Purpose**: Starts the content generation pipeline

### 📊 Step 1: Fetch Record
- **Node**: Airtable (Get Record)
- **Action**: Retrieves full record data using RecordId
- **Data**: Name, transcript, and other fields

### 📁 Step 2: Create Google Drive Folder
- **Node**: Google Drive (Create Folder)
- **Action**: Creates blue folder in /tutorials directory
- **Name**: Uses record Name field
- **Updates**: Stores folder ID back to Airtable

### 🤖 Step 3: AI Content Analysis
- **Node**: AI Agent with Google Gemini 2.5 Flash
- **Input**: Video transcript from Airtable
- **Structured Output**: JSON with all social formats:
  - YouTube title & description
  - YouTube thumbnail text
  - Twitter thread (array)
  - LinkedIn post
  - Instagram caption
  - TikTok caption
  - YouTube Shorts caption
  - Relevant tags

### 💾 Step 4: Save Transcript File
- **Node**: Google Drive (Create from Text)
- **Action**: Saves transcript as text file
- **Location**: Inside the created folder
- **Name**: Uses record Name field

### 📋 Step 5: Update Airtable Results
- **Node**: Airtable (Update Record)
- **Data**: All AI-generated social media content
- **Special**: Twitter thread array joined with newlines

---

**🎯 Result**: Complete social media content suite ready for multi-platform publishing, organized in Google Drive with all data stored in Airtable.

## 📊 Basic Information

- **Workflow ID:** 5942
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 1673
- **Downloads:** 167
- **Created:** 2025/7/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5942)

## 👤 Author

- **Name:** Kurt Bijl
- **Username:** @netkreatives

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×2)
- **airtable** (×3)
- **webhook** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleDrive** (×2)
- **manualTrigger** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
