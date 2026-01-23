# Ai-powered social media amplifier

> &gt; [Reach out to me  for any setup help/consulting.](https://x.com/being_mudit)


Automate the curation and sharing of trending GitHub discussions from Hacker News to Twitter and LinkedIn. This workflow leverages AI to generate engaging posts, streamlining your social media content creation and distribution.

**How it Works**

1. **Crawl Hacker News for GitHub Posts**: The workflow fetches trending GitHub-related discussions from Hacker News.
2. **Extract Key Information**: Relevant data such as post titles, URLs, and metadata are extracted and filtered to focus only on unposted content.
3. **Fetch Additional Details**: For each GitHub post, the workflow retrieves extra information from the GitHub repository page to enrich the post content.
4. **Generate Social Media Posts**: Using AI, the workflow automatically generates tailored posts for Twitter and LinkedIn based on the collected data.
5. **Post to Twitter & LinkedIn**: The generated content is posted to your Twitter and LinkedIn accounts.
6. **Track and Log Posts**: Each post is logged in Airtable for tracking, and its status is updated to ensure no duplicate posts are made.
7. **Telegram Notification**: After posting, a summary of the posts is sent to your Telegram chat for real-time updates.

**Requirements**

- **n8n Account**: Set up and configured. [Sign up here](https://n8n.partnerlinks.io/vzzxn6v15mra).
- **API Credentials**: Valid keys for LinkedIn, Twitter, Airtable, OpenAI, and Telegram.
- **Airtable Base**: Configured with fields such as Title, URL, Post Content, Status, and Timestamp. [Get started with Airtable](https://airtable.com/invite/r/sk9yE4mh).
- **Telegram Chat ID**: For receiving real-time notifications.


**Set Up Steps**

1. **Clone the Workflow**: Import the workflow into your n8n environment using the provided JSON.
2. **Configure API Credentials**: Enter your API keys for LinkedIn, Twitter, Airtable, OpenAI, and Telegram into the respective nodes.
3. **Set Up Airtable Base**: Create an Airtable base with fields such as Title, URL, Post Content, Status, and Timestamp.
4. **Customize Telegram Chat ID**: Modify the 'Ping me' node with your Telegram chat ID to receive notifications.
5. **Run the Workflow**: Activate the workflow to start the automated content curation and posting process.

**Additional Resources**

- [n8n AI Agentic Workflows Guide](https://blog.n8n.io/ai-agentic-workflows/)
- [n8n AI Workflow Tutorial](https://docs.n8n.io/advanced-ai/intro-tutorial/)
- [n8n Community Tutorial on Building an AI-Powered Telegram Bot](https://community.n8n.io/t/how-to-build-a-telegram-ai-bot-with-n8n-step-by-step-tutorial/39748)


&gt; Note: Chat GPT prompt should/can be tweaked in the step to give the desired behaviour.

****Sample Posts from my X and LinkedIn -**** 

![Screenshot 20250103 010113.png](fileId:880)

![Screenshot 20250103 010259.png](fileId:881)

## 📊 Basic Information

- **Workflow ID:** 2681
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 18206
- **Downloads:** 1820
- **Created:** 2024/12/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2681)

## 👤 Author

- **Name:** Mudit Juneja
- **Username:** @beingmudit

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×2)
- **code** (×3)
- **markdown** 
- **filter** 
- **noOp** 
- **airtable** (×4)
- **linkedIn** 
- **twitter** 
- **scheduleTrigger** 
- **merge** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** (×7)
- **telegram** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
