# Turn YouTube videos into summaries, transcripts, and visual insights

> ## Who is this for?  

This workflow is built for anyone who works with YouTube content, whether you're:  

- A **learner** looking to understand a video’s key points  
- A **content creator** repurposing video material  
- A **YouTube manager** looking to update titles, descriptions
- A **social media strategist** searching for the most shareable clips  

![AskQuestions.png](fileId:1016)
*Don't just ask questions about what's said. Find out what's going on in a video too.*

Video Overview: https://www.youtube.com/watch?v=Ovg_KfKxnC8

## What problem does this solve?  

YouTube videos hold valuable insights, but watching and processing them manually takes time. This workflow automates:  

- **Quick content extraction**: Summarize key ideas without watching full videos   
- **Visual analysis**: Understand what’s happening beyond spoken words  
- **Clip discovery**: Identify the best moments for social sharing  

## How the workflow works  

This n8n-powered automation:  

1. Uses **Google’s Gemini 1.5 Flash AI** for intelligent video analysis  
2. Provides **multiple content analysis templates** tailored to different needs  

## What makes this workflow powerful?  

The easiest place to start is by requesting a **summary or transcript**. From there, you can refine the prompts to match your specific use case and the type of video content you’re working with.  

But what's even more amazing? You can ask **questions about what’s happening in the video** — and get detailed insights about the people, objects, and scenes. It's jaw-dropping.  

This workflow is **versatile** — the actions adapt based on the values set. That means you can use a single workflow to:  

- Extract **transcripts**  
- Generate an **extended YouTube description**  
- Write a **summary blog post**  

You can also **modify the trigger** based on how you want to run the workflow — use a **webhook**, connect it to an event in **Airtable**, or leave it as-is for on-demand use. The output can then be sent anywhere: **Notion, Airtable, CMS platforms, or even just stored for reference.**  

## How to set it up  

1. **Connect** your Google API key  
2. **Paste** a YouTube video URL  
3. **Select** an analysis method  
4. **Run** the workflow and get structured results  

## Analysis Templates  

- **Basic & Timestamped Transcripts**: Extract spoken content  
- **Summaries**: Get concise takeaways  
- **Visual Scene Analysis**: Detect objects, settings, and people  
- **Clip Finder**: Locate shareable moments  
- **Actionable Insights**: Extract practical information  

## Customization Options  

- Modify templates to fit your needs  
- Connect with external platforms  
- Adjust formatting preferences  

## Advanced Configuration  

This workflow is designed for use with **gemini-1.5-flash**. In the future, you can update the flow to work with different models or even modify the HTTP request node to define which API endpoint should be used. 

It's also been designed so you can use this flow on it's own or add to a new / existing worflow. 

This workflow helps you get the most out of YouTube content — quickly and efficiently.


## 📊 Basic Information

- **Workflow ID:** 3188
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 26708
- **Downloads:** 2670
- **Created:** 2025/3/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3188)

## 👤 Author

- **Name:** Colleen Brady
- **Username:** @colleen

## 🏷️ Categories

- Content Creation
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×9)
- **switch** 
- **stickyNote** (×12)
- **httpRequest** 
- **if** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
