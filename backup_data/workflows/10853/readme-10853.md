# Extract text from Instagram posts (single & carousel) using HikerAPI & OCR.Space

> ## Overview  
This workflow extracts text from Instagram images by combining HikerAPI and OCR.Space. You can use it to collect text data from single posts or carousels, analyze visual content, or repurpose insights without manual copying. The process is fully automated inside N8N and helps marketers, researchers, and teams gather Instagram text quickly.

## How it works  
- Takes an Instagram post URL, either a single post or a carousel  
- Retrieves media data using the HikerAPI Get Media endpoint  
- Detects the post type, whether single feed, carousel, or reel  
- For single posts, sends the image to OCR.Space for text extraction  
- For carousels, loops through each slide and extracts text from every image  
- Merges all parsed results into one raw text output  

## Use cases  
- Collecting text data from Instagram images for research  
- Extracting visual insights for marketing analysis  
- Repurposing creator content without manual transcription  
- Helping marketers, agencies, and researchers identify message patterns in visual posts  

## Prerequisites  
- HikerAPI account with access to the Instagram media endpoint  
- OCR.Space API key for image text extraction  
- A valid Instagram post URL  
- N8N instance capable of running HTTP requests and looping through items  

## Set up steps  
- Prepare your API keys for HikerAPI and OCR.Space  
- Insert both API keys into their respective HTTP Request nodes  
- Paste the Instagram post URL into the IGPost URL node  
- Run the workflow to generate raw text extracted from Instagram images  
- Check the sticky notes inside the workflow for additional guidance  

Made by @fataelislami
https://pake.ai


## 📊 Basic Information

- **Workflow ID:** 10853
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 256
- **Downloads:** 25
- **Created:** 2025/11/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10853)

## 👤 Author

- **Name:** Pake.AI
- **Username:** @pake-ai

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **set** 
- **splitInBatches** 
- **aggregate** 
- **httpRequest** (×3)
- **code** (×4)
- **noOp** 
- **manualTrigger** 
- **stickyNote** (×6)
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
