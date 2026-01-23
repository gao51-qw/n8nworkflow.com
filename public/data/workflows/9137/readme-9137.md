# Daily cybersecurity news summarizer with Grok AI for Telegram

>   <h1>🚀 Cybersecurity News Automation Workflow</h1>
  <p>
    This <strong>n8n automation workflow</strong> fetches daily cybersecurity news, cleans it,
    summarizes with AI, and posts it automatically to a Telegram channel.
  </p>

  <h2>🔎 Workflow Steps</h2>

  <div>
    <h3>1. Triggering the Workflow</h3>
    <ul>
      <li><strong>9 AM - Schedule Trigger</strong>: Starts the workflow every day at 9 AM.</li>
    </ul>
  </div>

  <div>
    <h3>2. Fetching Cybersecurity News</h3>
    <ul>
      <li><strong>Bleeping Computer Security Bulletin</strong>: Pulls the latest news from the RSS feed.</li>
    </ul>
  </div>

  <div>
    <h3>3. Processing Articles</h3>
    <ul>
      <li><strong>HTTP Request → Filter Body → Extract Images</strong>: Retrieves the full article, cleans the HTML, and pulls image links.</li>
      <li><strong>AI Agent (OpenRouter Grok)</strong>: Summarizes the article snippet into <em>2 short sentences</em>.</li>
      <li><strong>Memory Buffer</strong>: Maintains short-term context across articles.</li>
    </ul>
  </div>

  <div>
    <h3>4. Merging Data</h3>
    <ul>
      <li><strong>Merge Node</strong>: Combines images, cleaned text, and AI-generated summaries.</li>
    </ul>
  </div>

  <div>
    <h3>5. Filtering Sponsored Content</h3>
    <ul>
      <li><strong>Sponsored Removal</strong>: Excludes articles with “Sponsored” in the creator field.</li>
    </ul>
  </div>

  <div>
    <h3>6. Posting to Telegram</h3>
    <ul>
      <li><strong>Loop Over Items + Send Photo Message</strong>: Publishes sponsor-free, summarized articles to <code>@DailySecurityNewss</code> telegram Channel.</li>
      <li>Each post includes: title, author, date, AI summary, categories, image (if available), and the “Read more” link.</li>
      <li><strong>Wait 1 min</strong>: Adds a short delay to avoid spamming Telegram.</li>
    </ul>
  </div>

  <h2>🎯 Outcome</h2>
  <div>
    <p>
      ✅ Daily feed of cybersecurity news <br>
      ✅ Clean, AI-simplified summaries <br>
      ✅ Images & links preserved <br>
      ✅ Sponsored posts filtered <br>
      ✅ Auto-posted to Telegram at 9 AM
    </p>
  </div>

## 📊 Basic Information

- **Workflow ID:** 9137
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 628
- **Downloads:** 62
- **Created:** 2025/10/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9137)

## 👤 Author

- **Name:** Sheikh Masem Mandal
- **Username:** @masem1996

## 🏷️ Categories

- AI Summarization

## 🔗 Nodes Used

- **merge** 
- **splitInBatches** 
- **rssFeedRead** 
- **httpRequest** 
- **set** (×2)
- **telegram** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **scheduleTrigger** 
- **wait** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **if** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
