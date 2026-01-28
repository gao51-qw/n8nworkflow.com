# Generate AI-summarized newsletter drafts from RSS feeds with GPT-4 and Gmail

> ## **How it works**
Every hour, the workflow checks the RSS feed https://www.artificialintelligence-news.com/feed/ for new articles.
For each new item, it extracts the title, snippet, and full content, then sends them to an AI model to summarize and optionally translate.
The processed summary is passed to another AI model (with a personalized “Patrik” assistant tone) to generate a newsletter-style text.
Finally, the result is saved as a draft email in Gmail, ready to review and send.

## How to use
Set your preferred language in the Information Extractor system prompt.

Update the RSS feed URL if you want to pull articles from a different source.

Customize the assistant tone in the Message a model node for your newsletter style.

Connect your Gmail account to the Create a draft node.

Activate the workflow — every hour it will fetch new articles, generate newsletter content, and save them as Gmail drafts.

## Customising this workflow
Change the source: Replace the RSS feed URL in the RSS Feed Trigger node.

Language & length: Edit the system prompt in the Information Extractor to set your preferred language and summary style.

Tone & format: Adjust the Message a model node to define the assistant’s personality, structure (headlines, bullets, CTA), or output as HTML.

Email settings: Change the subject, sender, or draft folder in the Create a draft node.

Frequency: Modify the trigger schedule to run daily, weekly, or at custom intervals.

## 📊 Basic Information

- **Workflow ID:** 7264
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 1159
- **Downloads:** 115
- **Created:** 2025/8/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7264)

## 👤 Author

- **Name:** Patrik Schick
- **Username:** @patrikdescodino

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **rssFeedReadTrigger** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **gmail** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
