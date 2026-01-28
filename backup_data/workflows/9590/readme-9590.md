# Create AI-generated social media posts from RSS feeds with GPT-5 and JsonCut

> ![workflowtitle2.png](fileId:2904)

Automatically create and publish ready-to-post social media news updates — all powered by AI.  
This workflow turns any RSS feed into professional, branded posts, complete with visuals and captions.

Use cases include automating news updates, sharing industry insights, or maintaining an active social presence without manual work.

---

## Good to know  

- Fully automated end-to-end publishing — from RSS feed to social post  
- Uses **JsonCut** for dynamic image composition (backgrounds, text overlays, logos)  
- Publishes directly to Instagram (or other channels) via **Blotato**  
- Utilizes **OpenAI GPT-5** for post text and image prompt generation  
- Polling mechanism checks job status every 3 seconds  
- Setup time: under 10 minutes once credentials are in place  

---

## How it works  

1. The **RSS Trigger** monitors any RSS feed for new content.  
2. **OpenAI GPT-5** rewrites the headline and creates a short, social-friendly post caption.  
3. An **AI image prompt** is generated to match the article’s topic and mood.  
4. **JsonCut** combines the background, logo, and headline text into a branded image.  
5. Once the image is ready, **Blotato** uploads and publishes the post directly to Instagram (or other connected platforms).  

The process runs completely automatically — no human input required after setup.  

---

## How to use  

1. Import the workflow into your **n8n** instance.  
2. Configure your RSS feed URL(s).  
3. Add your **JsonCut**, **Blotato**, and **OpenAI** credentials.  
4. Activate the workflow — it will automatically generate and post new content whenever your RSS source updates.  

---

## Requirements  

- Free account at [jsoncut.com](https://jsoncut.com)  
- Account at [blotato.com](https://www.blotato.com/) *(paid service — can be replaced with any social media API or publishing platform)*  
- API keys for both services:  
  - **JsonCut API Key** via [app.jsoncut.com](https://app.jsoncut.com)  
  - **Blotato API Key** via [www.blotato.com](https://www.blotato.com/)  
- **OpenAI credential** (GPT-5 or compatible model)  
- **RSS Feed URL** (e.g. from a news site, blog, or press page)  

---

## Setup steps  

1. Sign up for a free account at [app.jsoncut.com](https://app.jsoncut.com).  
2. If you use **Blotato**, create an account at [blotato.com](https://www.blotato.com/) and generate an API key.  
3. In n8n, add:  
   - `JsonCut API Key` (HTTP Header Auth, header: `x-api-key`)  
   - `Blotato API` credential *(optional — can be replaced)*  
   - `OpenAI` credential for GPT-5  
4. Replace the example RSS URL in the **RSS Feed Trigger** node with your own.  
5. Activate the workflow — it will start monitoring, generating, and posting automatically.  

---

## Customising this workflow  

You can easily adjust:  
- The **image layout** and branding (in the “Create JsonCut Job” node)  
- The **tone or length** of social captions (in the “Create Instagram Text” node prompt)  
- The **publishing platform** — replace **Blotato** with another integration (e.g. Buffer, Hootsuite, or native social API)  
- Posting frequency via the **RSS trigger interval**  

For advanced customization, check out:  
- [JsonCut Documentation](https://docs.jsoncut.com)  
- [JsonCut Image Generation Examples](https://docs.jsoncut.com/docs/image-generation/examples)  
- [Blotato Website](https://www.blotato.com/)  
- [n8n Documentation](https://docs.n8n.io)  


## 📊 Basic Information

- **Workflow ID:** 9590
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 331
- **Downloads:** 33
- **Created:** 2025/10/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9590)

## 👤 Author

- **Name:** 8Automator
- **Username:** @kesim0

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **wait** 
- **if** (×2)
- **httpRequest** (×7)
- **stopAndError** 
- **aggregate** 
- **stickyNote** (×5)
- **rssFeedReadTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **merge** 
- **@blotato/n8n-nodes-blotato.blotato** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
