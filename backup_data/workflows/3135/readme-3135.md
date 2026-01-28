# ✨🩷Automated social media content publishing factory + system prompt composition

> # Social Media Content Publishing Factory for Streamlined Content Creation Across Platforms

## Who is this for?
This workflow is designed for content creators, social media managers, and marketing teams who need to efficiently create and publish content across multiple social media platforms. It's perfect for businesses looking to maintain a consistent presence across X (Twitter), Instagram, Facebook, LinkedIn, Threads, and YouTube Shorts without spending hours crafting platform-specific content manually.

## What problem is this workflow solving?
Creating tailored content for different social media platforms is time-consuming and requires understanding each platform's unique requirements and audience expectations. This workflow solves the challenge of:
- Maintaining consistent messaging across platforms while respecting platform-specific formats
- Generating optimized content that follows best practices for each platform
- Creating accompanying visuals without graphic design skills
- Streamlining the approval process before publishing
- Reducing the time spent on repetitive content creation tasks

## What this workflow does
This automated content factory takes your content idea and transforms it into platform-optimized posts for all major social media channels. The workflow:

1. Accepts your content idea or topic through a chat interface
2. Leverages AI to generate tailored content for each platform (X/Twitter, Instagram, Facebook, LinkedIn, Threads, YouTube Shorts)
3. Creates appropriate images using AI image generation
4. Sends content for approval via email before publishing
5. Publishes approved content to selected platforms
6. Maintains chat memory to improve future content generation

## Setup
1. Connect your social media platform credentials (X/Twitter, Instagram, Facebook, LinkedIn)
2. Set up your email account for the approval process
3. Configure your OpenAI API key for AI content generation
4. Update the image generation service credentials (Pollinations.ai is used by default)
5. Customize the system prompts and schemas in the Google Docs nodes with your brand voice and content requirements

## How to customize this workflow to your needs
- Modify the system prompts in the Google Docs nodes to match your brand voice and content strategy
- Adjust the social media schemas to include specific fields relevant to your content
- Update the approval process to include additional stakeholders if needed
- Add or remove social media platforms based on your marketing strategy
- Customize the image generation prompts to better match your visual branding
- Integrate with your existing content calendar or CRM systems

This workflow eliminates the need to manually craft different versions of the same content for each platform, saving hours of work while ensuring your social media presence remains consistent and optimized for maximum engagement.


## 📊 Basic Information

- **Workflow ID:** 3135
- **Complexity:** advanced
- **Node Count:** 100
- **Views:** 70877
- **Downloads:** 7087
- **Created:** 2025/3/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3135)

## 👤 Author

- **Name:** Joseph LePage
- **Username:** @joe

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
