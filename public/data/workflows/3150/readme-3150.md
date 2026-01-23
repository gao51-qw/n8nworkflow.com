# Extract and decode Google News RSS URLs to clean article links

> The workflow performs tasks that would normally require human intervention on Google News links, transforming the RSS feeds into data that can be used by an automated system like n8n, thus creating a solid foundation for further applications

## Who is this for?
This workflow is ideal for developers, journalists, and content aggregators who need to extract and clean Google News URLs from its RSS feed. 

**What problem does this workflow solve?**
Google News RSS provides encoded URLs that contain additional tracking parameters. This workflow decodes those URLs and provides clean, direct links to news articles, making them easier to process, share, and analyze.

**What this workflow does**
1. **Fetch Google News RSS** – Retrieves news articles from Google News based on predefined parameters (language, country).
2. **Limit results** – Reduces the number of requests to avoid excessive API usage.
3. **Extract encoded content** – Retrieves the encoded news URLs.
4. **Decode the URLs** – Uses a decoding mechanism to extract clean links.
5. **Remove unwanted characters** – Cleans up the decoded URLs to ensure they are properly formatted.
6. **Aggregate results** – Outputs a final list of clean, readable URLs.

## Setup
+ Modify RSS parameters (hl, gl) to match your target region.
+ Adjust the result limit to control the number of processed articles.

## How to customize this workflow
+ To customize this workflow, you can add an HTTP Request node to retrieve the article's text, an HTML Extract node to process the text, an AI node to generate new content, and a WordPress node to publish it
+ Another option is to use an AI Agent node to classify articles by category based on the title or through HTML Extract. You can then save the classified articles using a Google Sheets node, organizing them by category and creating an high quality editorial plan


This workflow efficiently processes Google News RSS, removes unnecessary encoding, and delivers clean, shareable URLs. 🚀

## 📊 Basic Information

- **Workflow ID:** 3150
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 13102
- **Downloads:** 1310
- **Created:** 2025/3/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3150)

## 👤 Author

- **Name:** Miko
- **Username:** @mdmiko

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **manualTrigger** 
- **limit** 
- **rssFeedRead** 
- **set** (×2)
- **httpRequest** (×2)
- **code** 
- **stickyNote** (×10)
- **html** 
- **aggregate** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
