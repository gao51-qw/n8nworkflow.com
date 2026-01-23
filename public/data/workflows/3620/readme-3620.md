# Translate SRT files with Google Translate

> This workflow is designed to translate SRT subtitle files from one language to another using Google Translate.

### The workflow follows these main steps:

1. Accept an SRT file upload and target language selection
2. Extract and parse the SRT file content
3. Split the content into translatable segments
4. Translate each segment using Google Translate
5. Reassemble the translated content into a proper SRT format
6. Return the translated file to the user

You'll need a Google Console Cloud account to access the Translate API.


### Who is this for?

This workflow is designed for content creators, video editors, translators, and anyone who needs to translate subtitle files (.srt) from one language to another. It's particularly useful for those working with international content, educational materials, or preparing videos for global audiences.


### What problem does this workflow solve?

Translating subtitle files manually is time-consuming and error-prone. Professional translation services can be expensive, especially for multiple videos or long content. This workflow automates the translation process while maintaining the proper SRT format including timestamps and subtitle numbering.


## Setup

- Set up Google Translate credentials:
-- Create a Google Cloud project and enable the Google Translate API
-- Create OAuth credentials and configure them in the Google Translate node
- Customize language options:
-- The default workflow includes English (EN) and Japanese (JP) options
-- Add more language options by editing the dropdown field in the "Receive SRT File to Translate" node
-- Use standard language codes that Google Translate supports
- Add more languages:
-- Edit the form trigger node to include additional language options in the dropdown

## 📊 Basic Information

- **Workflow ID:** 3620
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 1496
- **Downloads:** 149
- **Created:** 2025/4/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3620)

## 👤 Author

- **Name:** DanielV
- **Username:** @danielv

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **splitOut** 
- **googleTranslate** 
- **aggregate** 
- **set** 
- **convertToFile** 
- **code** (×6)
- **form** 
- **formTrigger** 
- **stickyNote** 
- **extractFromFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
