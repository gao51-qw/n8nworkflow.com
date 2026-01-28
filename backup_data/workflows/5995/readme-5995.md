# Create AI news video content ideas for social media with Perplexity & OpenAI

> ---

## AI Latest News Content Script Writer
### Overview
This workflow automates the daily generation of viral short-form video content ideas tailored for founders and business leaders. It scrapes fresh AI-related news and trends from various topics, synthesizes the information, and then uses AI to craft complete content packages—including video scripts, captivating captions, and punchy text overlays. All generated content is saved to a Google Sheet, ready for your review and use.

### Use Case
This workflow is perfect for:
* **Founders & Entrepreneurs**: Consistently produce engaging content to build authority and attract inbound leads without a dedicated content team.
* **AI Thought Leaders**: Stay on top of the latest AI news and effortlessly create shareable insights.
* **Content Marketing Teams**: Automate the ideation and initial drafting phases for short-form video strategies.
* **Agencies**: Offer a unique AI-powered content generation service to your clients.

---

### How It Works

1.  **Scheduled Daily Trigger**: The workflow runs automatically every day at 6 AM IST, ensuring you always have fresh content ideas to start your day.
2.  **AI-Powered News Gathering**: It uses **Perplexity AI** to fetch the latest, most interesting, and relevant stories across three key AI topics:
    * **Topic 1**: General AI News
    * **Topic 2**: AI Market and Industry Trends
    * **Topic 3**: AI Business Automation
3.  **Organize and Combine Content**: The information from each topic is organized, and then all content and their respective citations are combined into a single, comprehensive input.
4.  **Personalize "About Me"**: Crucially, a configurable "About me" node allows you to define the personal brand of the founder (e.g., Name, Niche, Business Name, Business Type). This context is fed to the AI to ensure generated content aligns perfectly with your persona and business objectives.
5.  **Generate Content Packages**: Leveraging **OpenAI (acting as "CreatorAI")**, the workflow takes the combined news and your "About me" information to:
    * **Identify a Unique Angle**: Finds a distinct, engaging angle from the input that aligns with key content pillars (e.g., AI solving business pain points, future of work with AI).
    * **Craft Video Scripts**: Generates concise video scripts (under 700 characters) with powerful hooks, mini-narratives (problem → AI solution → impact), and a focus on tangible business benefits. It subtly references your business as a thought leader, not a direct pitch.
    * **Write Captions**: Creates friendly, expert-toned captions with engaging hooks, more context, a clear call to action (e.g., "Comment 'Workflow' for more"), and relevant hashtags.
    * **Design Text Overlays**: Produces short, punchy text overlays (3-7 words, ALL CAPS or Title Case) perfect for video thumbnails or initial screens.
6.  **Save to Google Sheet**: Each generated content package (Text Overlay, Video Script, Caption) is appended as a new row in your designated Google Sheet ("Content Idea" sheet within "Video Automation (Vansh)").
7.  **Notify User**: Finally, you'll receive an email notification confirming that new content ideas have been generated and saved to your Google Sheet.

---

### How to Set It Up

To set up this AI Viral Content Generator, follow these steps:

1.  **API Keys & Credentials**:
    * **Perplexity AI API Key**: Obtain your API key from Perplexity AI and replace the `Bearer` token in the "Topic 1", "Topic 2", and "Topic 3" HTTP Request nodes.
    * **OpenAI API Key**: Connect your OpenAI API key in n8n and link it to the "Content Generation" node.
    * **Google Sheets Account**: Ensure your Google Sheets OAuth2 API credentials are set up and connected to the "Save Data" node.
    * **Gmail Account**: Connect your Gmail OAuth2 credentials to the "Notify user" node.
2.  **Google Sheet Setup**:
    * **Copy the Google Sheet Template** provided. This template has predefined columns for "Text Overlay", "Video Script", "Caption", "Approval", and "Published".
    * Update the `documentId` in the "Save Data" Google Sheets node with the ID of *your copied template*.
3.  **Personalize "About me"**:
    * Open the **"About me" node**.
    * Fill in your **Name**, **Niche**, **Business Name**, **Business Type**, **Website**, and detailed **Key Services & Products**. This is crucial for the AI to generate relevant and personalized content.
4.  **Configure Notification Email**:
    * In the "Notify user" node, update the `sendTo` field with your email address where you want to receive notifications.
5.  **Set Schedule**:
    * The "Schedule Trigger" is set to run daily at 6 AM IST. You can adjust the time to your preference.
6.  **Activate and Monitor**:
    * Activate the workflow. It will now automatically generate content ideas daily.
    * Check your Google Sheet regularly to review the new content, mark it for approval, and track its publication status.

This workflow is your secret weapon for consistently creating engaging, AI-driven short-form video content!


## 📊 Basic Information

- **Workflow ID:** 5995
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 2060
- **Downloads:** 206
- **Created:** 2025/7/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5995)

## 👤 Author

- **Name:** Gain FLow AI
- **Username:** @gain-flow

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **merge** 
- **splitInBatches** 
- **set** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **httpRequest** (×3)
- **code** (×5)
- **googleSheets** 
- **stickyNote** (×3)
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
