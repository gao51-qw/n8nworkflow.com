# Advanced AI-powered YouTube SEO optimization & auto-update

> # Optimize Existing YouTube Video Metadata using AI and YouTube API

## This n8n workflow automatically enhances the Search Engine Optimization (SEO) of your existing YouTube videos. Provide a video link, and the workflow fetches its current data, uses advanced SEO techniques with AI to generate optimized titles, descriptions, and tags, and then updates the video directly on your YouTube channel.

### Who is this for?
This workflow is designed for:

#### Content Creators & YouTubers: 
Who want to improve the visibility and reach of their existing video library without manual effort.
#### 
Digital Marketers & Social Media Managers: Who manage YouTube channels and need an efficient way to revitalize older or underperforming content.
#### Agencies: 
Managing multiple client YouTube channels and looking for scalable optimization solutions.

### What problem is this workflow solving? / Use Case
Many creators have a backlog of published videos that aren't reaching their full potential due to suboptimal titles, descriptions, or tags. Manually reviewing and updating each video is time-consuming and requires SEO expertise.

### This workflow solves that by:

- Automating the re-optimization process: Saving significant time and effort.
- Leveraging AI for SEO: Generating high-quality, relevant metadata based on the video's content.
- Revitalizing existing content: Giving older videos a fresh chance to be discovered by the YouTube algorithm and new viewers.
- Improving discoverability: Helping your videos rank better in Youtube and appear more often in recommendations.

### What this workflow does
#### Input: 
Takes a YouTube video URL as the starting point (e.g., via a manual trigger or form).
#### Fetch Data: 
Connects to the YouTube API using the provided link to retrieve the video's current title, description, tags, and potentially transcript data (if accessible and configured).
#### AI Analysis & Generation: 
Sends the current metadata and video information to an AI model (like OpenAI, Google AI, or Anthropic - depending on your setup). 

The AI analyzes the content and generates new, SEO-optimized suggestions for the:
 - Video Title
 - Video Description
 - Video Tags
#### Update Video: 
Connects to the YouTube API again using appropriate permissions and updates the specific video with the newly generated title, description, and tags, replacing the old ones.
### How to customize this workflow to your needs
To use this workflow, you will need to:

#### Configure Credentials:
 - YouTube: Set up YouTube API credentials in n8n. You'll likely need OAuth2 credentials that allow editing video metadata (youtube.force-ssl scope). Follow Google Cloud Console instructions to create these.
 - AI Service: Set up credentials for your chosen AI provider (e.g., OpenAI API Key, Google AI API Key) in n8n.
 - Connect Credentials: Select your configured YouTube and AI credentials in the respective nodes within the workflow.
 - (Optional) Review AI Prompts: Check the prompts used in the AI node(s) to ensure they align with your desired tone and optimization strategy.

## 📊 Basic Information

- **Workflow ID:** 3528
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 1025
- **Downloads:** 102
- **Created:** 2025/4/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3528)

## 👤 Author

- **Name:** Lucas Correia
- **Username:** @lucascorrei4

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatDeepSeek** 
- **stickyNote** 
- **formTrigger** 
- **code** 
- **youTube** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **form** (×2)
- **if** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
