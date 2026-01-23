# Translate multilingual content with DeepL, GPT-4, WordPress, Slack and Sheets

> #Multi-Language Content Translation Pipeline with AI Quality Control

This workflow provides a professional-grade translation pipeline that combines the speed of DeepL with the intelligent reasoning of OpenAI's GPT-4. It is designed to help teams scale their global content reach without sacrificing linguistic accuracy or cultural nuance.

## Who’s it for
This template is ideal for content managers, digital marketing teams, and global publishers who need to localize high volumes of articles or documentation while maintaining a "human-in-the-loop" quality standard.

## How it works
The workflow automates the entire translation lifecycle through the following steps:
1. **Trigger:** Content is ingested via a Webhook or a recurring Schedule.
2. **Translation:** The source text is translated into multiple target languages simultaneously using the DeepL API.
3. **AI Quality Guard:** An OpenAI agent evaluates each translation, assigning a quality score based on accuracy and fluency.
4. **Automated Publishing:** Content that meets your quality threshold is automatically uploaded as a draft to WordPress.
5. **Manual Review:** Any translations that fall below the threshold are flagged in Slack for human intervention.
6. **Data Logging:** All results are saved to Google Sheets to build a searchable translation memory.

## How to set up
1. **Credentials:** Connect your DeepL, OpenAI, WordPress, Slack, and Google Sheets accounts.
2. **Configuration:** In the 'Translation Configuration' node, define your source language and a list of target languages (e.g., DE, FR, JA).
3. **Google Sheets:** Create a sheet with headers: `contentId`, `title`, `sourceLanguage`, `targetLanguage`, `translatedText`, and `qualityScore`.
4. **Slack:** Choose the notification channels for alerts and summary reports.

## Requirements
- DeepL API key
- OpenAI API key (GPT-4o or GPT-4o-mini recommended)
- WordPress site with Application Passwords enabled
- A Slack workspace and a Google Sheets account

## How to customize the workflow
- **Adjust Quality Standards:** Change the `qualityThreshold` value in the configuration node to make the AI verification more or less strict.
- **Add Platforms:** Replace the WordPress node with other CMS nodes like Ghost, Strapi, or Contentful to match your stack.
- **Advanced QA:** Modify the AI Quality Reviewer’s prompt to focus on specific brand guidelines or industry terminology.

## 📊 Basic Information

- **Workflow ID:** 11910
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 0
- **Downloads:** 0
- **Created:** 2025/12/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11910)

## 👤 Author

- **Name:** TOMOMITSU ASANO
- **Username:** @tomo-0310

## 🏷️ Categories

- Content Creation
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×5)
- **webhook** 
- **scheduleTrigger** 
- **merge** 
- **set** 
- **code** (×3)
- **splitOut** 
- **deepL** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **if** 
- **wordpress** 
- **slack** (×2)
- **aggregate** 
- **googleSheets** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
