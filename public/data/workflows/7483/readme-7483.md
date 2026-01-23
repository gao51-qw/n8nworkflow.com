# Daily news aggregation with Perplexity AI & MongoDB storage

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

***Workflow***: **Daily News Aggregator & MongoDB Storage**

This workflow is designed to run seamlessly in the background, automating the full cycle of news aggregation, storage, and reporting with precision and reliability.

1. Daily Trigger (Cron Node)
The process kicks off every morning at 8:00 AM UTC. This scheduling ensures that fresh global news is captured consistently at the start of each day.

2. Perplexity Node
At the heart of the workflow, a Perplexity node queries the latest global news. The prompt specifies both the type of news and the JSON structure required, guaranteeing the output is ready for structured storage. The result is a clean feed of headlines, timestamps, sources, and URLs.

3. Data Formatting (Code Node)
Since Perplexity’s response is a string, the workflow includes a custom JavaScript function to clean and parse it into a valid JSON array. Each news item is then transformed into its own object, ready for iteration.

4. MongoDB Insertion (Loop Node)
Each news article is inserted into the daily_news collection in MongoDB. The workflow ensures that fields such as headline, timestamp, source, URL, and category are stored neatly, with additional metadata available for future filtering and analysis.

5. Aggregation & Notification Prep (Code Node)
Once all items are stored, the workflow aggregates the day’s results. This step prepares a digest of what was successfully processed, ensuring visibility into the pipeline’s performance.

6. Email Notification (Gmail Node)
Finally, a summary email is sent via Gmail. This message confirms the operation’s success and provides a quick snapshot of the news collected and stored that day.

Workflow Flow

Cron Trigger → Perplexity API → Format Data → MongoDB Insert → Aggregate Results → Send Email Notification

This setup transforms what could be a manual, repetitive task into a streamlined daily routine. It not only guarantees timely and structured storage of news but also provides immediate confirmation, making it an elegant solution for automated information management.

## 📊 Basic Information

- **Workflow ID:** 7483
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 791
- **Downloads:** 79
- **Created:** 2025/8/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7483)

## 👤 Author

- **Name:** Samuel Heredia
- **Username:** @sheredia

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **stickyNote** (×4)
- **perplexity** 
- **code** (×2)
- **splitInBatches** 
- **mongoDb** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
