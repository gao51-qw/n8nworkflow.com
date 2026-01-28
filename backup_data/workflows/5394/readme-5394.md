# Turns Reddit Pain Points into Comic Ads using Dumpling AI and GPT-4o

> ## 📝 Description

### 🤖 What this workflow does  
This workflow turns Reddit pain points into emotionally-driven comic-style ads using AI.  
It takes in a product description, scrapes Reddit for real user pain points, filters  
relevant posts using AI, generates ad angles, rewrites them into 4-panel comic prompts,  
and finally uses Dumpling AI to generate comic-style images. All final creatives  
are uploaded to Google Drive.

---

### 🧠 What problem is this solving?  
Crafting ad content that truly speaks to customer struggles is time-consuming.  
This workflow automates that entire process — from pain point discovery to visual  
creative output — using AI and Reddit as a source of truth for customer language.

---

### 👤 Who is this for?  
- Copywriters and performance marketers  
- Startup founders and indie hackers  
- Creatives building empathy-driven ad concepts  
- Automation experts looking to generate scroll-stopping content

---

## ⚙️ Setup Instructions

Here’s how to set everything up, step by step:

---

### 🔹 1. Trigger: Form Input  
**Node**: `📝 Form - Submit Product Info`  
This form asks the user to enter:  
- Brand Name  
- Website  
- Product Description  

✅ **Make sure this form is active and testable.**

---

### 🔹 2. Generate Reddit Keyword  
**Node**: `🧠 GPT-4o - Generate Reddit Keyword`  
Uses the product description to generate a search keyword based on what your audience might be discussing on Reddit.

---

### 🔹 3. Search Reddit  
**Node**: `🔍 Reddit - Search Posts`  
Uses the keyword to search Reddit for relevant threads.  
Make sure your Reddit integration is properly configured.

---

### 🔹 4. Filter Valid Posts  
**Node**: `🔎 IF - Check Upvotes & Text Length`  
Filters out low-effort or unpopular posts. Only keeps posts with:  
- Minimum 2 upvotes  
- Content at least 100 characters long  

✅ You can adjust these thresholds in the node settings.

---

### 🔹 5. Clean Reddit Output  
**Node**: `🧼 Code - Structure Reddit Posts`  
This formats the list of posts into clean JSON for the AI agents to process.

---

### 🔹 6. Check Relevance with AI Agent  
**Node**: `🤔 Langchain Agent - Post Relevance Classifier`  
This node uses a LangChain agent (tool: `think2`) to determine if each post  
is **relevant to your product**. Only relevant ones are passed forward.

---

### 🔹 7. Aggregate Relevant Posts  
**Node**: `📦 Code - Merge Relevant Posts`  
Collects all relevant posts into a clean format for the next GPT-4 call.

---

### 🔹 8. Generate Ad Angles  
**Node**: `✍️ GPT-4o - Generate Emotional Ad Angles`  
Writes 10 pain-point-based marketing angles using real customer language.

---

### 🔹 9. Rank the Best Angles  
**Node**: `📊 GPT-4o - Rank Top 10 Angles`  
Scores the generated angles and ranks them from most to least powerful.  
Only the top 3 are passed forward.

---

### 🔹 10. Turn Angles into Comic Prompts  
**Node**: `🎭 GPT-4o - Write Comic Scene Prompts`  
Rewrites each of the top ad angles into a 4-panel comic strip structure  
(pain → tension → product → resolution).

---

### 🔹 11. Generate Comic Images  
**Node**: `🎨 Dumpling AI - Generate Comic Panels`  
Sends each prompt to Dumpling AI to create visual comic scenes.

---

### 🔹 12. Wait for Image Generation  
**Node**: `⏳ Wait - Dumpling AI Response Time`  
Adds a delay to give Dumpling AI time to finish generating all images.

---

### 🔹 13. Get Final Image URLs  
**Node**: `🔗 Code - Extract Image URLs from Dumpling Response`  
Extracts all image links for preview/download.

---

### 🔹 14. Upload to Google Drive  
**Node**: `☁️ Google Drive - Upload Comics`  
Uploads the comic images to your chosen Google Drive folder.  
✅ Update this node with your destination folder ID.

---

### 🔹 15. Log Final Output  
**Optional**  
You can extend the flow to log the image links, ad angles, and Reddit sources  
to Google Sheets, Airtable, or Notion depending on your use case.

---

## 🛠️ How to Customize

- ✏️ **Adjust tone**: Update GPT-4 system prompts to sound more humorous, emotional, or brand-specific.
- 🧵 **Use different styles**: Swap Dumpling AI image settings for ink sketch, manga, or cartoon renderings.
- 🔄 **Change input source**: Replace Reddit with X (Twitter), Quora, or YouTube comments.
- 📦 **Store results differently**: Swap Google Drive for Notion, Dropbox, or Airtable.

---

This workflow turns real audience struggles into thumb-stopping comic content — automatically.


## 📊 Basic Information

- **Workflow ID:** 5394
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 1308
- **Downloads:** 130
- **Created:** 2025/6/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5394)

## 👤 Author

- **Name:** Yang
- **Username:** @yang

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×8)
- **formTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **reddit** 
- **if** 
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **@n8n/n8n-nodes-langchain.toolThink** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **set** 
- **aggregate** 
- **splitOut** 
- **splitInBatches** 
- **httpRequest** (×2)
- **googleDrive** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
