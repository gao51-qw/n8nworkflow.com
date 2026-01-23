# Auto-generate platform-optimized social media posts from WordPress with Claude & Postiz

> This workflow automates the process of **generating and scheduling social media posts using content from a WordPress blog**. It leverages advanced AI (OpenAI & Anthropic Claude), Google Sheets, and the [Postiz](https://postiz.com/?ref=n3witalia) platform to create and publish platform-specific posts across **LinkedIn, Facebook, Instagram, and Twitter (X)**.

This system streamlines cross-platform social media publishing, ensuring consistent branding and AI-optimized content.

---

### **Key Features**

1. **Content Source: WordPress**

   * Automatically fetches the content of a WordPress post by its **Post ID**.

2. **Content Transformation via AI**

   * Uses Anthropic Claude and OpenAI to generate unique, optimized captions for each platform:

     * **LinkedIn**: professional and insight-driven
     * **Instagram**: creative with emojis and storytelling
     * **Facebook**: community-oriented and friendly
     * **Twitter (X)**: concise, hashtag-optimized

3. **Visual Generation (Optional)**

   * Uses OpenAI's DALL·E (via OpenRouter) to generate **custom images** based on the AI-generated Instagram and Facebook/LinkedIn captions.

4. **Post Management with Google Sheets**

   * Uses a Google Sheet as the control panel:

     * Simply input the WordPress **Post ID**
     * Marks each post as “done” by updating corresponding columns (TWITTER, FACEBOOK, INSTAGRAM, LINKEDIN)

5. **Publishing via Postiz**

   * Uses the **Postiz API** to schedule or immediately publish posts to your connected social accounts.
   * Handles image uploads and scheduling time for each platform.

---

###  **Benefits**

* 💡 **Intelligent automation**: Saves time by removing manual copywriting and platform formatting.
* 🎯 **Platform optimization**: Ensures posts are tailored to each platform’s audience and algorithm.
* 🛠️ **No-code friendly**: Simple setup via Google Sheets + Postiz + WordPress.
* 🔁 **Repeatable & Scalable**: Ideal for agencies or content creators managing multiple posts per week.
* 🧪 **+20 Social Media Platforms**: Easy to start with social integrations.

--- 

### **How It Works**  
1. **Input & Data Fetching**:  
   - The workflow starts with a manual trigger (e.g., "Test workflow") or scheduled execution.  
   - It retrieves a WordPress post ID from a Google Sheets document, then fetches the full post content (title and body) via the WordPress API.  

2. **AI-Powered Content Generation**:  
   - The "Social Media Manager" node (powered by Claude Opus 4.1) analyzes the post and generates **platform-optimized captions** for:  
     - **Twitter/X**: Concise, hashtag-rich text (≤150 chars).  
     - **Facebook/LinkedIn**: Professional yet engaging copy with CTAs.  
     - **Instagram**: Visual-focused captions with emojis and hashtags.  
   - AI-generated images are created for Instagram (square) and Facebook/LinkedIn (landscape) using OpenAI’s image model.  

3. **Publishing Automation**:  
   - Captions and images are uploaded to **Postiz**, a social media scheduler.  
   - Postiz publishes the content to connected platforms (Twitter, Facebook, LinkedIn, Instagram) at the specified time.  
   - Google Sheets is updated with status markers (e.g., "x" in columns like `TWITTER`, `FACEBOOK`) to track published posts.  

---

### **Set Up Steps**  
1. **Prerequisites**:  
   - **Postiz Account**: Sign up for [Postiz](https://postiz.com/?ref=n3witalia) (free trial available).  
   - **API Keys**: Configure Postiz API credentials in the "Postiz" and "Upload Image" nodes.  
   - **Social Channels**: Link your social accounts in Postiz’s dashboard and note their `integrationId` values (replace "XXX" in Postiz nodes).  

2. **Google Sheets Setup**:  
   - Clone the [template Sheet](https://docs.google.com/spreadsheets/d/1suPQNdgoAzrklleN4ok2mZnsq0GK1dt59oIHv8JWX5U/edit) and add WordPress post IDs to the "POST ID" column.  

3. **Configure Nodes**:  
   - **WordPress**: Add credentials for your WordPress site in the "Get Post" node.  
   - **AI Models**: Ensure API keys for Claude (Anthropic) and OpenAI (for images) are valid.  
   - **Postiz Nodes**: Replace placeholder `integrationId` values with your actual Postiz channel IDs.  

4. **Test & Deploy**:  
   - Trigger the workflow manually to verify captions, images, and Postiz scheduling.  
   - Activate the workflow for automation (e.g., run daily to publish new WordPress posts).  

**Note**: This workflow requires **self-hosted n8n** due to community nodes (Postiz, LangChain).  

---
### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/). 


## 📊 Basic Information

- **Workflow ID:** 7046
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 1343
- **Downloads:** 134
- **Created:** 2025/8/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7046)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** (×5)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **stickyNote** (×5)
- **wordpress** 
- **n8n-nodes-postiz.postiz** (×4)
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
