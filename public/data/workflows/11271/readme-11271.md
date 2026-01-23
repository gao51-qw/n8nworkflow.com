# Personalize Instagram trends for custom skin tones with GPT-4o, DALL-E & Slack

> Who is it for
Beauty & Fashion Consultants: To visualize trends for specific client profiles.
Content Creators: To generate personalized variations of trending aesthetics.
Trend Watchers: To automate the collection and adaptation of social media designs.
How it works
Configuration: You define the target hashtags (e.g., #trendnails) and the target skin tone (e.g., "Yellow Base Spring") in the set node.
Scraping: The workflow uses Apify to scrape the latest top posts from Instagram based on your hashtags.
Analysis & Prompting: GPT-4o (Vision) analyzes the original image to understand the pattern and atmosphere, then generates a new prompt optimized for the specified skin tone.
Generation: DALL-E 3 creates a new image based on the generated prompt.
Delivery: The final personalized image is uploaded directly to a Slack channel.
How to set up
Apify: Create an account and get your API Token. Ensure you have access to the instagram-hashtag-scraper actor.
OpenAI: You need an API Key with access to GPT-4o and DALL-E 3.
Slack: Connect your Slack account with OAuth2 in n8n.
Workflow Configuration: Open the "Workflow Configuration" node and fill in your apifyApiToken, desired hashtags, and skinTone.
Requirements
Apify account
OpenAI API key (GPT-4o & DALL-E model access)
Slack account


## 📊 Basic Information

- **Workflow ID:** 11271
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 54
- **Downloads:** 5
- **Created:** 2025/11/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11271)

## 👤 Author

- **Name:** Miki Arai
- **Username:** @mikia-n8n

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **stickyNote** (×4)
- **merge** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
