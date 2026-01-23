# Spot workplace discrimination patterns with AI

> ![Spot Workplace Discrimination Patterns with AI.png](fileId:924)

## How It Works:
• Scrapes company review data from Glassdoor using ScrapingBee.
• Extracts demographic-based ratings using AI-powered text analysis.
• Calculates workplace disparities with statistical measures like z-scores, effect sizes, and p-values.
• Generates visualizations (scatter plots, bar charts) to highlight patterns of discrimination or bias.


### Example Visualizations:
![twilio_effect_size.png](fileId:922)![twilio_scatter_plot.png](fileId:923)

## Set Up Steps:
*Estimated time: ~20 minutes.*
• Replace ScrapingBee and OpenAI credentials with your own.
• Input the company name you want to analyze (best results with large U.S.-based organizations).
• Run the workflow and review the AI-generated insights and visual reports.

This workflow empowers users to identify potential workplace discrimination trends, helping advocate for greater equity and accountability.

#### Additional Credit: [Wes Medford](https://medium.com/@wryanmedford/an-open-letter-to-twilios-leadership-f06f661ecfb4)
For algorithms and inspiration

## 📊 Basic Information

- **Workflow ID:** 2825
- **Complexity:** advanced
- **Node Count:** 38
- **Views:** 4797
- **Downloads:** 479
- **Created:** 2025/1/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2825)

## 👤 Author

- **Name:** Ludwig
- **Username:** @ludwig

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **merge** 
- **set** (×7)
- **httpRequest** (×4)
- **html** (×4)
- **@n8n/n8n-nodes-langchain.informationExtractor** (×2)
- **code** (×2)
- **quickChart** 
- **stickyNote** (×12)
- **@n8n/n8n-nodes-langchain.chainLlm** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 38 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
