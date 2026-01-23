# AI-powered automatic analysis of YouTube product reviews with Apify + GPT

> # AI-Powered Automatic Analysis of YouTube Product Reviews With Apify

This **n8n** workflow automates the process of searching, transcribing, and analyzing product reviews extracted from YouTube videos, generating a clear, ready-to-use report in **HTML format and/or email**.

---

## 📌 Usage and How It Works
1. **Enter the product name** (via webhook or manually).
2. The workflow **searches YouTube videos** related to the product using **Apify**.
3. **Extracts the text** (transcription) from the selected videos.
4. **Merges and separates** each video's content to maintain context.
5. Analyzes the texts with **GPT-4o-mini** to obtain:
   - **Strengths** (pros, advantages, what users value most).
   - **Weaknesses** (cons, problems, criticisms).
   - Other relevant points mentioned in the reviews.
6. Returns an **HTML report** (via email or webhook), ready for reading or presentation.

The entire process is **fully automated** and multi-language (language configured in the `LANG` node).

---

## 💡 Why Buy This Workflow
- **Save hours of work** searching and manually analyzing reviews.
- **Reliable results**: the analysis is based only on what is said in the videos, without inventing data.
- **Complete integration**: scraping, transcription, processing, and delivery, all in a single flow.
- **Multi-language** configurable in seconds.
- **Low cost per use** (see below).
- **Configurable**: Designed to be easy to set up and adapt.

---

## 🎯 Who It’s For
- **E-commerce and online stores** wanting to know product pros/cons before selling.
- **Marketing and SEO agencies** looking for real user insights.
- **Brands** seeking genuine feedback on their products.
- **Market researchers** needing aggregated opinions.
- **n8n enthusiasts** wanting to see a practical and complete example of advanced automation.

---

## 💰 Usage Costs
- **Approximate cost:** $0.03 USD per report *(GPT-4o-mini + Apify)*.
- **Apify** offers **$5 free without a credit card**, which equals **~130 free reports** before incurring any costs.
- After that, you only pay for what you use.

---

## 🔧 Technologies Used
- **Apify** for video search and transcript extraction.
- **OpenAI GPT-4o-mini** for text analysis and report generation.

---

## 📬 Basic Support
For questions or basic support, email: **oriolrotllant3@gmail.com**

---

## Example result
![Example result screenshot png](https://i.ibb.co/NgT0pMKx/workflow.png)


## 📊 Basic Information

- **Workflow ID:** 7148
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 43
- **Downloads:** 4
- **Created:** 2025/8/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7148)

## 👤 Author

- **Name:** Oriol Seguí
- **Username:** @oxsr11

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **set** (×5)
- **webhook** 
- **code** (×3)
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **limit** 
- **respondToWebhook** 
- **stickyNote** (×6)
- **httpRequest** (×2)
- **manualTrigger** 
- **markdown** 
- **gmail** 
- **stopAndError** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
