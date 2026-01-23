# Create AI news videos with HeyGen avatars and auto-post to social media

> Automatically generate short AI avatar videos based on trending news, then post them across social media platforms—fully automated using n8n, HeyGen, ChatGPT, and Blotato.

### Tools & Services Used:

- n8n (Self-hosted required due to Community Nodes)
- HeyGen (for creating AI avatar videos)
- OpenAI (for script and caption generation)
- Blotato (for social media distribution)
- Hacker News (for sourcing trending articles)


### Workflow Overview:

This automation performs the following steps:

1. Fetches trending news from Hacker News
2. Generates a short script using ChatGPT
3. Creates an AI avatar video with HeyGen
4. Generates platform-specific captions
5. Posts the content across social media with Blotato

### Prerequisites:

Make sure you have active accounts and API keys for:

- HeyGen
- OpenAI
- Blotato



### How to Use This Template

Step 1: Import the Template

1. Open your self-hosted n8n instance  
2. Go to "Workflows" &gt; "Create Workflow"  
3. Click the three dots (…) &gt; "Import from File"  
4. Upload the downloaded JSON file  

Step 2: Configure API Keys

Only two nodes need customization:

- `Setup HeyGen`: Add your HeyGen API key, avatar ID, and voice ID
- `Prepare for Publish`: Add your Blotato API key, account IDs, and page IDs

Optional platforms like Pinterest and Bluesky are already disabled by default.

### Finding Your HeyGen Avatar & Voice IDs
To customize the AI avatar video:

Log into your HeyGen Dashboard

Navigate to "Avatars" → choose or create an avatar → copy the Avatar ID

Navigate to "Voices" → select a preferred voice → copy the Voice ID

You can upload a custom avatar or voice if you have access to those features in your plan

This allows you to align the video style with your brand’s tone and personality.

### Initial Test Run

For your first run:

1. Shorten the AI script in the prompt to 5 seconds
2. Enable only one social media platform
3. Adjust the wait time to 2 minutes to speed up testing
4. Verify that the video is created and successfully posted

Once successful, enable more platforms and scale your automation.

Workflow Diagram:
![Screen Shot 20250415 at 23.05.43.png](fileId:1115)



### Use Cases

- Business owners automating daily content
- Creators scaling short-form video production
- Freelancers offering automation as a service
- Anyone building an AI-driven media workflow


### Disclaimer
This workflow uses Community Nodes, which only function on self-hosted n8n instances.
This workflow may not work on n8n Cloud without some modifications.



## 📊 Basic Information

- **Workflow ID:** 3538
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 1517
- **Downloads:** 151
- **Created:** 2025/4/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3538)

## 👤 Author

- **Name:** Sam Yassine
- **Username:** @samyassine

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×13)
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **hackerNewsTool** (×2)
- **wait** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **set** (×2)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
