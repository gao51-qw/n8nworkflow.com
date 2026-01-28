# 🎦🚀 YouTube video comment analysis agent

> # 🎦🚀 YouTube Video Comment Analysis Agent

This **n8n workflow** is designed to help YouTube creators analyze video details and comments to generate a **comprehensive and actionable report**. The workflow provides insights into video performance, audience engagement, and viewer feedback, helping creators identify trends, interests, and opportunities for future content creation.

---

## ✨ **Key Features**
1. **Video Performance Analysis**: Extracts metrics like views, likes, and comments to evaluate the video's success.
2. **Comment Sentiment Analysis**: Determines the tone of comments (positive, neutral, or negative) to understand audience sentiment.
3. **Recurring Themes Detection**: Identifies common topics or questions in comments to highlight viewer interests.
4. **Engagement Drivers**: Pinpoints what aspects of the video resonated most with viewers.
5. **Actionable Recommendations**: Offers strategies for creating follow-up content or improving future videos.
6. **Keyword Suggestions**: Extracts frequently mentioned terms for better discoverability on YouTube.
7. **Collaboration Opportunities**: Suggests potential partnerships based on viewer feedback or related channels.

---

## 🛠️ **How to Use**
1. **Set Up Workflow Variables**:
   - Add your `GOOGLE_API_KEY` and the `VIDEO_ID` of the YouTube video you want to analyze in the "Workflow Variables" node.
   - Ensure your Google API key has access to the YouTube Data API.

2. **Run the Workflow**:
   - Trigger the workflow manually or through another workflow using the "Execute Workflow Trigger" node.
   - The workflow will fetch video details and comments using pagination to ensure all data is captured.

3. **Generate Insights**:
   - The workflow processes video details and comments to create a detailed report with actionable insights.
   - Outputs include sentiment analysis, engagement drivers, content opportunities, and audience profiling.

4. **View or Share Results**:
   - The report is converted into Markdown and can be emailed via Gmail or saved to Google Drive as a document.

---

## 🌟 **Value from This Workflow**
- Gain a deeper understanding of your audience's preferences and feedback.
- Identify trends and engagement drivers to replicate success in future videos.
- Discover new content opportunities based on viewer questions and suggestions.
- Improve discoverability by leveraging keyword suggestions extracted from comments.
- Build stronger connections with your audience by addressing their needs effectively.



## 📊 Basic Information

- **Workflow ID:** 2965
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 4751
- **Downloads:** 475
- **Created:** 2025/2/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2965)

## 👤 Author

- **Name:** Joseph LePage
- **Username:** @joe

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **stickyNote** (×8)
- **code** (×3)
- **httpRequest** (×2)
- **merge** 
- **aggregate** 
- **set** 
- **summarize** 
- **splitOut** 
- **manualTrigger** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **markdown** 
- **@n8n/n8n-nodes-langchain.agent** 
- **googleDrive** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
