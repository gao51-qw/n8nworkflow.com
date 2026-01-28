# Auto-post WordPress articles to social media with Gemini AI & Blotato

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## WordPress to Blotato Social Publisher


**Overview:**
This automation monitors your WordPress site for new posts and automatically creates platform-specific social media content using AI, then posts to Twitter, LinkedIn, and Facebook via Blotato.

**What it does:**
- Monitors WordPress site for new posts every 30 minutes
- Filters posts published in the last hour to avoid duplicates
- Processes each new post individually
- AI generates optimized content for each social platform (Twitter, LinkedIn, Facebook)
- Extracts platform-specific content from AI response
- Publishes to all three social media platforms via Blotato API

**Setup Required:**
1. **WordPress Connection**
   - Configure WordPress credentials in the "Check New Posts" node
   - Enter your WordPress site URL, username, and password/app password
2. **Blotato Social Media API Setup**
   - Get your Blotato API key from your Blotato account
   - Configure API credentials in the Blotato connection node
   - Map each platform (Twitter, LinkedIn, Facebook) to the correct Blotato channel
3. **AI Configuration**
   - Set up Google Gemini API credentials
   - Connect the Gemini model to the "AI Social Content Creator" node
4. **Customization Options**
   - Posting Frequency: Modify schedule trigger (default: every 30 minutes)
   - Content Tone: Adjust AI system message for different writing styles
   - Post Filtering: Change time window in WordPress node (default: last hour)
   - Platform Selection: Remove any social media platforms you don’t want to use
5. **Testing**
   - Run workflow manually to test connections
   - Verify posts appear correctly on all platforms
   - Monitor for API rate limit issues

**Features:**
- Platform-optimized content (hashtags, character limits, professional tone)
- Duplicate prevention system
- Batch processing for multiple posts
- Featured image support
- Customizable posting frequency

**Customization:**
- Change monitoring frequency
- Adjust AI prompts for different tones
- Add/remove social platforms
- Modify hashtag strategies

**Need Help?**
For [n8n coaching or one-on-one consultation](mailto:david@daexai.com)


## 📊 Basic Information

- **Workflow ID:** 7395
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 568
- **Downloads:** 56
- **Created:** 2025/8/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7395)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** 
- **scheduleTrigger** 
- **wordpress** 
- **if** 
- **@n8n/n8n-nodes-langchain.agent** 
- **code** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@blotato/n8n-nodes-blotato.blotato** (×3)
- **splitOut** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
