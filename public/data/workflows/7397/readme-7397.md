# Auto-generate tech news blog posts with NewsAPI & Google Gemini to WordPress

> ## WordPress Daily News Digest Generator

**Overview:**
This automation automatically fetches trending tech news every morning, uses AI to create engaging blog posts from each article, and publishes them directly to your WordPress site.

**What it does:**
- Fetches top 10 US technology news stories every day at 8 AM via NewsAPI
- Splits articles into individual items for processing
- Processes each article through a loop system
- AI creates expanded, engaging blog posts (600-800 words) from each news article
- Parses AI response to extract clean titles and content
- Publishes individual blog posts to WordPress automatically

**Setup Required:**
1. **NewsAPI Configuration**
   - Get free API key from newsapi.org (1,000 requests/day free)
   - Replace `YOUR_API_KEY` in the HTTP Request URL with your actual key
   - Customize country/category parameters in URL if needed

2. **WordPress Connection**
   - Configure WordPress credentials in the "Publish to WordPress" node
   - Enter your WordPress site URL, username, and password/app password

3. **AI Configuration**
   - Set up Google Gemini API credentials
   - Connect the Gemini model to the "AI News Summarizer" node

4. **Customization Options**
   - Publishing Schedule: Modify schedule trigger (default: daily 8 AM)
   - News Sources: Change country, category, or pageSize in NewsAPI URL
   - Content Style: Adjust AI system message for different writing tones
   - Post Status: Change from "publish" to "draft" for manual review

5. **Testing**
   - Run workflow manually to test all connections
   - Verify news articles are fetched correctly
   - Check that blog posts appear properly on your WordPress site

**Features:**
- Automatic daily content creation
- AI-generated unique titles and expanded content
- Loop processing for multiple articles per day
- Duplicate content filtering (removes incomplete articles)
- SEO-optimized blog post formatting
- Automatic tagging and categorization

**Customization:**
- Change news categories (technology, business, science, etc.)
- Adjust posting frequency (hourly, twice daily, etc.)
- Modify AI prompts for different writing styles
- Add custom categories and tags
- Change article limits (currently 5 articles max)

**Need Help?**
For [n8n coaching or one-on-one consultation](mailto:david@daexai.com)

## 📊 Basic Information

- **Workflow ID:** 7397
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 2415
- **Downloads:** 241
- **Created:** 2025/8/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7397)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** 
- **scheduleTrigger** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **wordpress** 
- **splitInBatches** 
- **code** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
