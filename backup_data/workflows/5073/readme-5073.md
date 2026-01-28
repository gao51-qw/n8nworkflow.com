# Summarize YouTube videos with AI and extract key lessons to Google Docs

> ## Who is this template for?
This template is for learners, researchers, students and professionals who want to quickly capture the essence of a YouTube video. 

Steps in the workflow: 
- Gets the transcript from any YouTube video through Supadata. 
- Process the result from Supadata to one text 
- Process the text with AI (any LLM of your choice)

Final result: Produces a summary accompanied with the most important lessons and interesting facts mentioned in the video.  

The workflow automatically creates a new Google Doc wiht this output, in a folder of your choice on your Google Drive. 

_(If you want to convert the markdown text to real markup after the Google Doc is created: just select all text (Ctrl-A or CMD-A), Cut the text (Ctrl-X or CMD-X and then go to Edit &gt; Paste from Markdown.)_

## Setup
- Edit your Supadata credentials in the second node (you can start for free)
- Choose your favourite LLM for AI processing
- Edit your Google Drive credentials. 

## How to adjust it to your needs
- If you want the outcome to be different, edit the Prompt in "Proces transcript to summary template". 
- The file name is a combination of ‘transcript ‘ and the date and time. You can change this to whatever you need in the Google Drive node. 
- Supadata offers more details and options (or even translation) when working with transcripts. Check the options here: https://supadata.ai/documentation/youtube/get-transcript





## 📊 Basic Information

- **Workflow ID:** 5073
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 1093
- **Downloads:** 109
- **Created:** 2025/6/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5073)

## 👤 Author

- **Name:** andsync
- **Username:** @b-ensink

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **aggregate** 
- **splitOut** 
- **stickyNote** (×6)
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **googleDrive** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
