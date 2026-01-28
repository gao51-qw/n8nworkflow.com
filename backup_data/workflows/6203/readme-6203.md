# Generate social media hashtags from Twitter & YouTube trends with Mistral AI

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

##  Description  
This workflow automatically collects daily trending topics from Twitter and YouTube, filters them for relevance, and uses an AI model (such as Mistral Cloud or another OpenAI-compatible API) to generate engaging social media hashtags. The final results, including source platform and date, are saved into a connected Google Sheet for easy access, tracking, or team collaboration.

Ideal for content creators, marketers, and social media managers, this automation eliminates the manual effort of trend research and hashtag writing by combining real-time scraping with LLM-powered generation. The result is a scalable, daily strategy tool to stay aligned with what’s trending across major platforms.

---

##  How It Works  

1. **Daily Trigger**  
   - Starts the workflow automatically on a daily schedule.

2. **Trend Scraping**  
   - Scrapes current trending content from Twitter and YouTube using the [Crawl and Scrape community node](https://www.npmjs.com/package/n8n-nodes-crawl-and-scrape).

3. **Filtering & Slicing**  
   - Removes irrelevant or duplicate entries and limits each platform’s list to top-performing trends.

4. **Merge Trends**  
   - Combines Twitter and YouTube trends into a single dataset.

5. **AI Hashtag Generation**  
   - Sends each trend topic to an AI model to generate relevant hashtags.

6. **Output to Google Sheets**  
   - Loops through AI results and writes them to a Google Sheet, including trend, platform, hashtags, and timestamp.

---

##  Setup Instructions  
**Estimated time:** 10–15 minutes  

### Prerequisites  
-  A self-hosted instance of n8n (required for community nodes)  
-  API key for Mistral Cloud or any OpenAI-compatible LLM  
-  Google Sheets account connected via OAuth2 credentials  
-  Twitter and YouTube trend URLs (or scraping logic for target regions)

---

#### Template Image:

![Screenshot 339.png](fileId:1842)

#### Example: Crawl and Scrape Node for Twitter Trends
You can use the following configuration in the Crawl and Scrape node to extract Twitter trends from [Trends24]((https://trends24.in/))

```
{
  "parameters": {
    "url": "https://trends24.in/",
    "selectors": [
      {
        "label": "Twitter Trends",
        "selector": ".trend-card__list li a",
        "type": "text"
      }
    ]
  },
  "name": "Scrape Twitter Trends",
  "type": "n8n-nodes-crawl-and-scrape.crawlAndScrape",
  "typeVersion": 1,
  "position": [300, 200]
}

```


###  Google Sheet Column Format  
```plaintext
Column A: Generated Hashtags![Screenshot 339.png](fileId:1842)



## 📊 Basic Information

- **Workflow ID:** 6203
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 641
- **Downloads:** 64
- **Created:** 2025/7/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6203)

## 👤 Author

- **Name:** ResilNext
- **Username:** @rnair1996

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **merge** 
- **scheduleTrigger** 
- **n8n-nodes-crawl-and-scrape.crawleeNode** (×2)
- **googleSheets** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** (×3)
- **@n8n/n8n-nodes-langchain.lmChatMistralCloud** 
- **html** (×2)
- **code** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
