# AI-powered multi-platform social media content factory with dynamic system prompts & GPT-4o

> ### Automated Social Media Content Publishing Factory + System Prompt Composition

This workflow is a powerful automation for creating and publishing social media content. It uses AI to generate content and images based on external prompts and schemas, and routes the final posts to various social media platforms.

#### **How it Works**

This workflow operates as a "Content Publishing Factory". It generates platform-optimized content for platforms like LinkedIn, Instagram, Facebook, X (Twitter), Threads, and YouTube Shorts. A key feature is its dynamic system prompt and output schema composition, which pulls content from external Google Docs to ensure consistency. The workflow can also create images to match the content and send the final draft for approval via email before publishing.

#### **Use Cases**

- **Centralized Content Management**: Store and manage all system prompts and schemas in Google Docs for easy team collaboration and version control.

- **Brand Consistency**: Ensure a consistent brand voice across all social media platforms by centralizing brand guidelines and content rules.

- **Automated Publishing**: Automate content creation, image generation, and publishing, reducing manual effort and design bottlenecks.

- **Fact-checking and Contextual Relevance**: Incorporate real-time research and fact-checking into content to ensure accuracy and relevance.

#### **Setup Instructions**

1. **Google Docs**: Create two Google Docs: one for the social media schema and one for the system prompt, and update the respective node IDs in the workflow.

2. **API Credentials**: Provide credentials for the following services:
   - **OpenAI**: For the AI agents and content creation.
   - **SerpAPI**: For the web search tool to perform research.
   - **Gmail**: For sending content for approval and notifications.
   - **Google Drive**: For archiving images and final posts.
   - **Social Media Platforms**: You'll need credentials for the platforms you wish to publish to (X, Instagram, Facebook, LinkedIn, etc.).
   - **Image Hosting**: The workflow uses imgbb.com to host generated images, requiring an API key.

#### **Workflow Logic**

1. **Routing Agent**: The Social Media Router Agent receives a user prompt and uses a toolWorkflow node to route the request to the appropriate content generation workflow.

2. **Prompt & Schema Composition**: The workflow fetches the system prompt and platform-specific schemas from Google Docs, parses them, and composes a dynamic prompt for the AI agent.

3. **Content Creation**: The Social Media Content Creator agent uses the composed prompt and a web search tool to generate platform-optimized content and an image suggestion.

4. **Image Generation & Archiving**: The workflow generates an image from the AI suggestion using an external service and archives both the image and the final post content in Google Drive.

5. **Approval Process**: The draft content is sent to a Gmail address for approval.

6. **Publishing**: If the content is approved, the Social Media Publishing Router node directs the content to the correct publishing node for the specified platform (e.g., X Post, Instagram Image, Facebook Post, etc.).

#### **Node Descriptions**

| Node Name | Description |
|-----------|-------------|
| **When chat message received** | A trigger node that initiates the workflow based on a chat message. |
| **Social Media System Prompt** | A Google Docs node that retrieves the main system prompt for the AI agent. |
| **Social Media Schema** | A Google Docs node that retrieves the JSON schema for each social media platform's output. |
| **Social Media Content Creator** | An AI agent that generates content based on user prompts, system prompts, and schemas, using a web search tool for research. |
| **pollinations.ai1** | An HTTP Request node that generates an image from a text prompt using an external service. |
| **Gmail User for Approval** | Sends a draft of the social media post for approval and pauses the workflow until a decision is made. |
| **Social Media Publishing Router** | A Switch node that routes the workflow to the correct publishing node based on the user's selected platform. |
| **X Post, Instagram Post, Facebook Post, LinkedIn Post** | These nodes publish the final, approved content to their respective social media platforms. |

#### **Customization Tips**

- You can replace the pollinations.ai image generation service with any other online service that produces an image file.

- Replace the gpt-4o and gpt-4o-mini models with other LLMs and web search tools to suit your needs.

- Adjust the content and parameters for each social media platform to better fit your brand and audience.

#### **Suggested Sticky Notes for Workflow**

- ** Start Here**: "Update all Social Media Platform Credentials as required. Adjust parameters and content for each platform to suit your needs".

- **External System Prompt and Schema**: "Create Google Doc for the Social Media Schema and copy the provided schema. Update the Google Doc ID in the Social Media Schema node.".

- **Create Post Image**: "Replace pollinations.ai with any online image generation service that produces an image file you can download".

- **Social Media Content Creator**: "Replace Chat model with other LLMs and test out the results. Add more tools or try other web search tools to suit your use case."

#### **Testing Tips**

- Start the workflow with a manual trigger and verify that the social media content and a related image are generated and sent for approval via Gmail.

- Approve the content in the Gmail email to test the publishing side of the workflow.

- Check the specified social media accounts to confirm that the post was published correctly.

#### **Suggested Tags & Categories**

- SocialMedia

- Automation

- AI

- ContentCreation

- Publishing

- GoogleDocs

- OpenAI

## 📊 Basic Information

- **Workflow ID:** 8850
- **Complexity:** advanced
- **Node Count:** 100
- **Views:** 1316
- **Downloads:** 131
- **Created:** 2025/9/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8850)

## 👤 Author

- **Name:** Amit Mehta
- **Username:** @amitswba

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **stickyNote** (×43)
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×6)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **executeWorkflowTrigger** 
- **httpRequest** (×4)
- **gmail** (×2)
- **googleDocs** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×4)
- **twitter** 
- **facebookGraphApi** (×2)
- **linkedIn** 
- **set** (×12)
- **code** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×4)
- **merge** (×3)
- **googleDrive** (×3)
- **telegram** (×2)
- **switch** 
- **if** 
- **extractFromFile** 
- **noOp** (×2)
- **@n8n/n8n-nodes-langchain.toolSerpApi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 100 nodes with 48 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
