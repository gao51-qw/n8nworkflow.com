## What this template does
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