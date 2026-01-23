# Ultimate scraper workflow for n8n

> ## What this template does
The Ultimate Scraper for n8n uses Selenium and AI to retrieve any information displayed on a webpage. You can also use session cookies to log in to the targeted webpage for more advanced scraping needs.

⚠️ Important: This project requires specific setup instructions. Please follow the guidelines provided in the GitHub repository: n8n Ultimate Scraper Setup : https://github.com/Touxan/n8n-ultimate-scraper/tree/main.

The workflow version on n8n and the GitHub project may differ; however, the most up-to-date version will always be the one available on the GitHub repository : https://github.com/Touxan/n8n-ultimate-scraper/tree/main.

## How to use 
Deploy the project with all the requirements and request your webhook.

**Example of request**:
```bash
curl -X POST http://localhost:5678/webhook-test/yourwebhookid \
-H "Content-Type: application/json" \
-d '{
  "subject": "Hugging Face",
  "Url": "github.com",
  "Target data": [
    {
      "DataName": "Followers",
      "description": "The number of followers of the GitHub page"
    },
    {
      "DataName": "Total Stars",
      "description": "The total numbers of stars on the different repos"
    }
  ],
  "cookie": []
}'
```

Or to just scrap a url :
```bash
curl -X POST http://localhost:5678/webhook-test/67d77918-2d5b-48c1-ae73-2004b32125f0 \
-H "Content-Type: application/json" \
-d '{
  "Target Url": "https://github.com",
  "Target data": [
    {
      "DataName": "Followers",
      "description": "The number of followers of the GitHub page"
    },
    {
      "DataName": "Total Stars",
      "description": "The total numbers of stars on the different repo"
    }
  ],
  "cookies": []
}'
```

## 📊 Basic Information

- **Workflow ID:** 2431
- **Complexity:** advanced
- **Node Count:** 63
- **Views:** 52720
- **Downloads:** 5272
- **Created:** 2024/9/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2431)

## 👤 Author

- **Name:** Pablo
- **Username:** @pablobarrier

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **html** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **httpRequest** (×23)
- **if** (×8)
- **limit** 
- **respondToWebhook** (×9)
- **code** 
- **@n8n/n8n-nodes-langchain.informationExtractor** (×3)
- **convertToFile** (×3)
- **stickyNote** (×7)
- **set** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 63 nodes with 45 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
