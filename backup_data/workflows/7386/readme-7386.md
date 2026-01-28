# Daily tech news digest from Google News summarized with Llama AI and email delivery

> This n8n workflow automatically fetches top technology news from Google News, summarizes it using AI, and sends a daily email with key updates. Users get a concise overview of important tech developments every morning.

**Good to know:**

* Focuses specifically on technology news.
* Summarizes multiple sources into one concise email.
* Ensures consistent and easy-to-read formatting.
* Handles updates from different websites reliably.

## How it works

1. **Trigger: Schedule Daily Tech News**

   * Runs automatically every morning at 8 AM.

2. **Fetch Google Tech News**

   * Retrieves the latest tech news from Google News.

3. **Extract Tech News Articles**

   * Parses the HTML to extract headlines, source, and timestamps.

4. **Format Tech News Data**

   * Prepares structured data ready for AI analysis.

5. **Check If News Found**

   * If no news is found, sends an error alert email.
   * Otherwise, continues to AI summarization.

6. **AI Tech News Analyzer**

   * Uses an AI model to summarize and highlight key trends.

7. **Send Tech News Email**

   * Sends a formatted daily email with summarized tech news.

8. **Send Error Alert** *(optional)*

   * Sends an alert email if no news can be found.

## Email Examples

**Output Email Example:**

```
Subject: 🌐 Daily Tech News Summary - August 14, 2025

📌 Top Technology Headlines Today:

1. AI-powered tools are revolutionizing cloud computing. (Source: TechCrunch)
2. Startup funding in India sees record growth. (Source: Economic Times)
3. New smartphone launches include innovative camera features. (Source: The Verge)
4. Cybersecurity threats increase amid remote work trends. (Source: Wired)

🗓️ Summary Date: August 14, 2025
```

## How to use

**Setup Instructions:**

1. Import workflow into your n8n instance.
2. Configure SMTP credentials for sending emails.
3. Set the schedule to run daily at your preferred time.
4. Test the workflow to ensure news is fetched and the email is sent correctly.

**Requirements:**

* n8n instance (cloud or self-hosted).
* Email account with SMTP access.
* Reliable internet connection.
* Access to Google News.

**Troubleshooting:**

* **No news found:** Check internet connection and Google News accessibility.
* **Email not sent:** Verify SMTP credentials.
* **AI summarization errors:** Check model credentials and API usage.




## 📊 Basic Information

- **Workflow ID:** 7386
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 1763
- **Downloads:** 176
- **Created:** 2025/8/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7386)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** 
- **html** 
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 
- **emailSend** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOllama** 
- **stickyNote** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
