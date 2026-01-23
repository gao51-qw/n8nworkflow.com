# Automated academic paper monitoring with PDF vector, GPT-3.5, & Slack alerts

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Automated Academic Paper Monitoring

Stay updated with the latest research in your field. This bot monitors multiple academic databases for new papers matching your interests and sends personalized alerts.

### Bot Features:
- Monitor keywords across multiple databases
- Filter by authors, journals, or institutions
- Daily/weekly digest emails
- Slack notifications for high-impact papers
- Automatic paper summarization

### Workflow Components:
1. **Schedule**: Run daily/weekly checks
2. **Search**: Query latest papers across databases
3. **Filter**: Apply custom criteria
4. **Summarize**: Generate paper summaries
5. **Notify**: Send alerts via email/Slack
6. **Archive**: Store papers for future reference

### Perfect For:
- Research groups tracking their field
- PhD students monitoring specific topics
- Labs following competitor publications

## 📊 Basic Information

- **Workflow ID:** 7358
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 550
- **Downloads:** 55
- **Created:** 2025/8/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7358)

## 👤 Author

- **Name:** PDF Vector
- **Username:** @pdfvector

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** 
- **scheduleTrigger** 
- **set** 
- **code** (×3)
- **n8n-nodes-pdfvector.pdfVector** 
- **openAi** 
- **slack** 
- **emailSend** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
