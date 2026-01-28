# ⚡📽️ Ultimate AI-powered chatbot for YouTube summarization & analysis

> ## 🎥 YouTube Video AI Agent Workflow

This n8n workflow template allows you to interact with an AI agent that extracts details and the transcript of a YouTube video using a provided video ID. Once the details and transcript are retrieved, you can chat with the AI agent to explore or analyze the video's content in a conversational and insightful manner.

### 🌟 How the Workflow Works
1. **🔗 Input Video ID**: The user provides a YouTube video ID as input to the workflow.
   
2. **📄 Data Retrieval**: The workflow fetches essential details about the video (e.g., title, description, upload date) and retrieves its transcript using YouTube's Data API and additional tools for transcript extraction.

3. **🤖 AI Agent Interaction**: The extracted details and transcript are processed by an AI-powered agent. Users can then ask questions or engage in a conversation with the agent about the video's content, such as:
   - Summarizing the transcript.
   - Analyzing key points.
   - Clarifying specific sections.

4. **💬 Dynamic Responses**: The AI agent uses natural language processing (NLP) to generate contextual and accurate responses based on the video data, ensuring a smooth and intuitive interaction.

---

### 🚀 Use Cases
- **📊 Content Analysis**: Quickly analyze long YouTube videos by querying specific sections or extracting summaries.
- **📚 Research and Learning**: Gain insights from educational videos or tutorials without watching them entirely.
- **✍️ Content Creation**: Repurpose transcripts into blogs, social media posts, or other formats efficiently.
- **♿ Accessibility**: Provide an alternative, text-based way to interact with video content for users who prefer reading over watching.

---

### 🛠️ Resources for Getting Started
- **Google Cloud Console** (for API setup): Visit Google Cloud's [Get Started Guide](https://cloud.google.com/docs/get-started/access-apis) to configure your API access.
- **YouTube Data API Key Setup**: Follow this [guide](https://developers.google.com/youtube/v3/docs) to create and manage your YouTube Data API key.
- **Install n8n Locally**: Refer to this [installation guide](https://docs.n8n.io/integrations/creating-nodes/test/run-node-locally/) for setting up n8n on your local machine.

---

### ✨ Sample Prompts
*"Tell me about this YouTube video with id: JWfNLF_g_V0"*  
 
*"Can you provide a list of key takeaways from this video with id: [youtube-video-id]?"*



## 📊 Basic Information

- **Workflow ID:** 2956
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 19301
- **Downloads:** 1930
- **Created:** 2025/2/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2956)

## 👤 Author

- **Name:** Joseph LePage
- **Username:** @joe

## 🏷️ Categories

- Market Research
- AI RAG

## 🔗 Nodes Used

- **code** (×2)
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **stickyNote** (×13)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **splitOut** 
- **summarize** 
- **httpRequest** 
- **merge** 
- **aggregate** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.toolWorkflow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
