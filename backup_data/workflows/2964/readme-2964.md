# Free YouTube video analyzer with AI-powered summaries & email alerts

> 
This workflow is designed to analyze YouTube videos by extracting their transcripts, summarizing the content using AI models, and sending the analysis via email.

This workflow is ideal for content creators, marketers, or anyone who needs to quickly analyze and summarize YouTube videos for research, content planning, or educational purposes.

#### How It Works:
1. **Trigger**: The workflow starts with a manual trigger, allowing you to test it by clicking "Test workflow." You can also set a YouTube video URL manually or dynamically.

2. **YouTube Video ID Extraction**:
   - The workflow extracts the YouTube video ID from the provided URL using a custom JavaScript function. This ID is necessary for fetching the transcript.

3. **Transcript Generation**:
   - The video ID is sent via an HTTP request to generate the transcript. You need to replace `APIKEY` with a free API key from the service.

4. **Transcript Validation**:
   - The workflow checks if a transcript exists for the video. If a transcript is available, it proceeds; otherwise, it stops.

5. **Full Text Extraction**:
   - If a transcript exists, the workflow combines all transcript segments into a single text variable for further analysis.

6. **AI-Powered Analysis**:
   - The full transcript is passed to an AI model (DeepSeek, OpenAI, or OpenRouter) for analysis. The AI generates a structured summary, including a title and key points, formatted in markdown.

7. **Email Notification**:
   - The analysis results (title and summary) are sent via email using SMTP credentials. The email contains the structured summary of the video.

#### Set Up Steps:
1. **YouTube Transcript API**:
   - Obtain a free API key from **youtube-transcript.io** and replace `APIKEY` in the "Generate transcript" node with your key.

2. **AI Model Configuration**:
   - Configure the AI model nodes (DeepSeek, OpenAI, or OpenRouter) with the appropriate API credentials. You can choose one or multiple models depending on your preference.

3. **Email Setup**:
   - Configure the "Send Email" node with your SMTP credentials (e.g., Gmail, Outlook, or any SMTP service). Ensure the email settings are correct to send the analysis results.

#### Key Features:
- **Free Tools**: Uses **youtube-transcript.io** for free transcript generation.
- **AI Models**: Supports multiple AI models (DeepSeek, OpenAI, OpenRouter) for flexible analysis.
- **Email Notifications**: Sends the analysis results directly to your inbox.
- **Customizable**: Easily adapt the workflow to analyze different videos or use different AI models.



## 📊 Basic Information

- **Workflow ID:** 2964
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 5043
- **Downloads:** 504
- **Created:** 2025/2/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2964)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **@n8n/n8n-nodes-langchain.lmChatDeepSeek** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** (×8)
- **emailSend** 
- **httpRequest** 
- **if** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **set** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
