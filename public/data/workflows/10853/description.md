## Overview  
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
