# Arxiv paper summarization with ChatGPT

> # Webhook | Paper Summarization

## Who is this for?
This workflow is designed for researchers, students, and professionals who frequently read academic papers and need concise summaries. It is useful for anyone who wants to quickly extract key information from research papers hosted on arXiv.

## What problem is this workflow solving?
Academic papers are often lengthy and complex, making it time-consuming to extract essential insights. This workflow automates the process of retrieving, processing, and summarizing research papers, allowing users to focus on key findings without manually reading the entire paper.

## What this workflow does
This workflow extracts the content of an arXiv research paper, processes its abstract and main sections, and generates a structured summary. It provides a well-organized output containing the **Abstract Overview, Introduction, Results, and Conclusion**, ensuring that users receive critical information in a concise format.

## Setup
1. Ensure you have **n8n** installed and configured.
2. Import this workflow into your n8n instance.
3. Configure an external trigger using the **Webhook** node to accept paper IDs.
4. Test the workflow by providing an arXiv paper ID.
5. (Optional) Modify the summarization model or output format according to your preferences.

## How to customize this workflow to your needs
- Adjust the **HTTPRequest** node to fetch papers from other sources beyond arXiv.
- Modify the **Summarization Chain** node to refine the summary output.
- Enhance the **Reorganize Paper Summary** step by integrating additional language models.
- Add an **email or Slack notification** step to receive summaries directly.

## Workflow Steps
1. **Webhook** receives a request with an arXiv paper ID.
2. **Send an HTTP request** using **"Request to Paper Page"** to fetch the HTML content of the paper.
3. **Extract the abstract and sections** using **"Extract Contents"**.
4. **Split out all sections** using **"Split out All Sections"** to process individual paragraphs.
5. **Clean up text** using **"Remove useless links"** to remove unnecessary elements.
6. **Summarize extracted content** using **"Summarization Chain"**.
7. **Aggregate summarized content** using **"Aggregate summarized content"**.
8. **Reorganize the paper summary** into structured sections using **"Reorganize Paper Summary"**.
9. **Extract key information** using **"Content Extractor"** to classify data into **Abstract Overview, Introduction, Results, and Conclusion**.
10. **Respond to the webhook** with the structured summary.

---

**Note:** This workflow is designed for use with **arXiv** research papers but can be adapted to process papers from other sources.


## 📊 Basic Information

- **Workflow ID:** 2904
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 5174
- **Downloads:** 517
- **Created:** 2025/2/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2904)

## 👤 Author

- **Name:** Teddy
- **Username:** @teddysbeach

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **httpRequest** 
- **html** 
- **splitOut** 
- **set** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **webhook** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
