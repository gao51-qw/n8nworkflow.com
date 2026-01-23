# AI-powered daily LinkedIn post creator with OpenAI feedback loop and Notion

> 
This n8n template automatically creates and publishes high-quality LinkedIn posts using your brand brief, AI-generated ideas, and structured feedback loops — all powered by OpenAI. Perfect for solo creators, marketers, and startup teams building a consistent presence on LinkedIn.

 Who's it for
Creators and freelancers building a personal brand
Social media managers at startups or agencies
Marketing teams that want to scale LinkedIn content
Anyone tired of manually ideating, writing, and posting daily

 What it does
Triggers daily at a chosen time (default: 9 PM)
Fetches new content ideas from your idea-generation workflow
Loads your brand brief and previous post feedback
Uses OpenAI to craft a branded, engaging LinkedIn post
Publishes directly to LinkedIn — no manual copy-paste needed

How the AI logic works
The AI agent follows a consistent, looped prompt strategy to ensure brand alignment:

**++Prompt++**
You are a helpful content creator for Nabin Bhandari's personal brand. Use the below steps to create content:

1. Always start by getting the brand brief using the Get_Brand_Brief tool.  
2. Create a post on the requested topic that aligns with the brand brief.  
3. Get feedback and a score on the post using the Get_Content_Feedback tool.  
4. If the score is below 0.8, use the feedback to refine the post and repeat.  
5. The final output should be the approved post.
 Bonus: You can fine-tune OpenAI on your own brand tone and style by uploading at least 50 examples of approved posts. This will help ensure even more accurate, on-brand outputs.

 Requirements
OpenAI API Key
LinkedIn API credentials set in the LinkedIn node
A Notion page (or any storage) with your Brand Brief clearly described
Optional: Fine-tuned OpenAI model for higher fidelity

 How to customize
Adjust the AI prompt for different tones (e.g., witty, professional)
Swap the idea source (Airtable, Notion, Webhook, etc.)
Add manual approval steps before publishing
Replace the LinkedIn node with other social media APIs (Twitter/X, Threads)

 Tips
Store a clear and specific brand brief in your Notion page — it directly shapes the AI's tone
Add a database of previously approved posts for fine-tuning OpenAI
Use additional feedback metrics (likes, engagement) for future iterations
![Screenshot 20250805 at 00.36.05.png](fileId:1938)

## 📊 Basic Information

- **Workflow ID:** 6979
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 2250
- **Downloads:** 225
- **Created:** 2025/8/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6979)

## 👤 Author

- **Name:** Nabin Bhandari
- **Username:** @knabinbhandari

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×2)
- **executeWorkflow** (×3)
- **executeWorkflowTrigger** 
- **aggregate** 
- **notion** 
- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **linkedIn** 
- **splitOut** 
- **splitInBatches** 
- **set** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
