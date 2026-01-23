# Generate weekly Meta Ads report with GPT-4 insights and Slack delivery

> ## What this workflow does
- Runs automatically every Monday morning at 8 AM
- Collects your Meta Ads data from the last 7 days for a given account (date range is configurable)
- Formats the data, aggregating it at the campaign, ad set, and ad levels
- Generates AI-driven analysis and insights on your results, providing actionable recommendations
- Renders the report as a visually appealing PDF with charts and tables
- Sends the report via Slack (you can also add email or WhatsApp)

**A sample for the first page of the report:**
![image.png](fileId:1590)

## Setup Guide
- [Create an account of pdf noodle](https://app.pdfnoodle.com/auth/sign-up) and use the pre-made Meta Ads template.
- Connect Meta Ads, OpenAI and Slack to n8n
- Set your Ad Account Id and date range (choose from 'last_7d', 'last_14d', 'last30d')
- *(opcional)* Customize the scheduling date and time


## Requirements
- Meta Ads (via Facebook Graph API): [Documentation](https://docs.n8n.io/integrations/builtin/credentials/facebookgraph/)
- pdf noodle access: [Integration guide](https://pdfnoodle.com/blog/how-to-automate-pdf-generation-with-n8n-and-pdforge)
- AI API access (e.g. via OpenAI, Anthropic, Google or Ollama)
- Slack acces (via OAuth2): [Documentation](https://docs.n8n.io/integrations/builtin/credentials/slack)


Feel free to [contact me via Linkedin](https://www.linkedin.com/in/marceloamiranda/), if you have any questions! 👋🏻

## 📊 Basic Information

- **Workflow ID:** 5386
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 3533
- **Downloads:** 353
- **Created:** 2025/6/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5386)

## 👤 Author

- **Name:** Marcelo Abreu
- **Username:** @mabreum

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **splitOut** 
- **httpRequest** (×2)
- **set** 
- **stickyNote** (×2)
- **n8n-nodes-pdforge.pdforge** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **slack** 
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
