# Find TikTok video questions from keywords using Dumpling AI + GPT-4

> ## Who’s it for

This template is perfect for content creators, social media strategists, and marketing teams who want to uncover trending questions directly from real TikTok audiences. If you spend hours scrolling through videos to find content ideas or audience pain points, this workflow automates the entire research process and delivers clean, ready-to-use insights in minutes.

---

## What it does

The workflow takes a **keyword**, searches TikTok for matching creator profiles, retrieves their latest videos, extracts viewer comments, and uses **GPT-4** to identify the most frequently asked questions. These questions can be used to inspire new content, shape engagement strategies, or create FAQ-style videos that directly address what your audience is curious about.

Here’s what happens step by step:  
1. Accepts a keyword from a form trigger  
2. Uses **Dumpling AI** to search TikTok for relevant profiles  
3. Fetches the most recent videos from each profile  
4. Extracts and cleans comments using a Python script  
5. Sends cleaned comments to **GPT-4** to find recurring audience questions  
6. Saves the top questions and video links into a Data Table for easy review

---

## How it works

1. **Form Trigger**: Collects the keyword input from the user  
2. **Dumpling AI**: Searches TikTok to find relevant creators based on the keyword  
3. **Video Retrieval**: Gets recent videos from the discovered profiles  
4. **Comments Extraction**: Gathers and cleans all video comments using Python  
5. **GPT-4**: Analyzes the cleaned text to extract top audience questions  
6. **Data Table**: Stores the results for easy access and content planning

---

## Requirements

- ✅ **Dumpling AI API key** stored as credentials  
- ✅ **OpenAI GPT-4 credentials**  
- ✅ **Python** node enabled in n8n  
- ✅ A Data Table in n8n to store questions and related video details

---

## How to customize

- Adjust the GPT prompt to refine the tone or format of the extracted questions  
- Add filters to target specific types of TikTok profiles or content niches  
- Integrate the output with your content calendar or idea tracking tool  
- Set up scheduled runs to build a constantly updating library of audience questions  
- Extend the workflow to analyze TikTok hashtags or trends alongside comments

---

&gt; This workflow turns TikTok keyword searches into structured audience insights, helping you quickly discover real questions your audience is asking—perfect for fueling content strategies, campaigns, and engagement.


## 📊 Basic Information

- **Workflow ID:** 9249
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 251
- **Downloads:** 25
- **Created:** 2025/10/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9249)

## 👤 Author

- **Name:** Yang
- **Username:** @yang

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **noOp** 
- **formTrigger** 
- **httpRequest** (×3)
- **splitOut** (×2)
- **limit** 
- **splitInBatches** (×2)
- **wait** 
- **code** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **dataTable** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
