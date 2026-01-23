# Extract and clean YouTube video transcripts with RapidAPI

> Here is your refined template description with detailed step-by-step instructions, markdown formatting, and customization guidance.  

---

# YouTube Transcript Extraction Workflow  

This **n8n workflow** extracts and processes transcripts from YouTube videos using the **YouTube Transcript API** on RapidAPI. It allows users to retrieve subtitles from YouTube videos, clean them up, and return structured transcript data for further processing.  

## Table of Contents  
- [Problem Statement & Target Audience](#problem-statement--target-audience)  
- [Pre-conditions & API Requirements](#pre-conditions--api-requirements)  
- [Step-by-Step Workflow Explanation](#step-by-step-workflow-explanation)  
- [Customization Guide](#customization-guide)  
- [How to Set Up This Workflow](#how-to-set-up-this-workflow)  

---

## Problem Statement & Target Audience  

### **Who is this for?**  
This workflow is ideal for content creators, researchers, and developers who need to:  
- Extract **subtitles** from YouTube videos automatically.  
- **Format and clean** transcript data for readability.  
- Use transcripts for **summarization, content repurposing, or language analysis**.  

---

## Pre-conditions & API Requirements  

### **API Required**  
- **YouTube Transcript API** ([RapidAPI](https://rapidapi.com/solid-api-solid-api-default/api/youtube-transcript3/playground))  

### **n8n Setup Prerequisites**  
- A running **n8n instance** ([Installation Guide](https://docs.n8n.io/))  
- A **RapidAPI account** to access the **YouTube Transcript API**  
- An **API key** from RapidAPI to authenticate requests  

---

## Step-by-Step Workflow Explanation  

### **1. Input YouTube Video URL (Trigger)**  
- This step provides a simple input form where users enter a YouTube video URL.  

### **2. HTTP Request Node (Retrieve Transcript Data)**  
- Makes a **POST request** to the YouTube Transcript API via RapidAPI.  
- Passes the video URL received from the input form.  
- Uses an **environment variable** to store the API key securely.  

### **3. Function Node (Process Transcript)**  
- **Receives** the API response containing the **raw transcript**.  
- **Processes and cleans** the transcript:  
  - Removes unwanted characters.  
  - Formats text for readability.  
- **Handles errors** when no transcript is available.  
- **Outputs** both the **raw and cleaned transcript** for further use.  

### **4. Set Field Node (Response Formatting)**  
- **Structures** the processed transcript data into a user-friendly format.  
- **Returns** the final transcript data to the client.  

---

## Customization Guide  

### **1. Modify Transcript Cleaning Rules**  
- Update the **Function Node** to apply custom text processing, such as:  
  - Removing timestamps.  
  - Changing the output format (e.g., JSON, plain text).  

### **2. Store Transcripts in a Database**  
- Add a **Database Node** (e.g., MySQL, PostgreSQL, or Firebase) to save transcripts.  

### **3. Generate Summaries from Transcripts**  
- Integrate **AI services** (e.g., OpenAI, Google Gemini) to summarize transcripts.  

### **4. Convert Transcripts into Speech**  
- Use **ElevenLabs API** to generate an AI-powered voiceover from transcripts.  

---

## How to Set Up This Workflow  

### **Step 1: Import the Workflow into n8n**  
- Download or copy the workflow JSON file.  
- Import it into your **n8n instance**.  

### **Step 2: Set Up the API Key**  
- Sign up for the **[YouTube Transcript API](https://rapidapi.com/solid-api-solid-api-default/api/youtube-transcript3/playground)**.  
- Subscribe to the api.  
- Copy and paste your api key where the "your_api_key" is.

### **Step 3: Activate the Workflow**  
- Start the workflow in **n8n**.  
- Enter a **YouTube video URL** in the input form.  
- The workflow will return a **cleaned transcript**.  

---

This workflow ensures seamless YouTube transcript extraction and processing with minimal manual effort. 🚀

## 📊 Basic Information

- **Workflow ID:** 3417
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 7844
- **Downloads:** 784
- **Created:** 2025/4/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3417)

## 👤 Author

- **Name:** Joseph
- **Username:** @mjomba

## 🏷️ Categories

- Content Creation

## 🔗 Nodes Used

- **formTrigger** 
- **set** 
- **function** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
