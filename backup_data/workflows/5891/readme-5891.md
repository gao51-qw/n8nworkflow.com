# Automate weekly SEO report with GPT-4 insights and Slack delivery

> ## What this workflow does
- Runs automatically every Monday morning at 8 AM
- Collects your Google Search Console from the last month and the month before that for a given url (date range is configurable)
- Formats the data, aggregating it by date, query, page, device and country
- Generates AI-driven analysis and insights on your results, providing actionable recommendations
- Renders the report as a visually appealing PDF with charts and tables
- Sends the report via Slack (you can also add email or WhatsApp)

**A sample for the first page of the report:**
![image.png](fileId:1744)

## Setup Guide
- [Create an account of pdf noodle](https://app.pdfnoodle.com/auth/sign-up) and use the pre-made Meta Ads template.
- Connect Google OAuth2 (guide on the template), OpenAI and Slack to n8n
- Set your site url and date range
- *(opcional)* Customize the scheduling date and time

👉🏻 **You can use our** [**detailed guide on how to setup this workflow**](https://pdfnoodle.com/blog/automate-seo-reports-using-n8n-and-pdforge).



## Requirements
- Google OAuth2 (via Google Search Console): [Documentation](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-generic)
- pdf noodle access: [Create an account](https://app.pdfnoodle.com/auth/sign-up)
- AI API access (e.g. via OpenAI, Anthropic, Google or Ollama)
- Slack acces (via OAuth2): [Documentation](https://docs.n8n.io/integrations/builtin/credentials/slack)





Feel free to [contact me via Linkedin](https://www.linkedin.com/in/marceloamiranda/), if you have any questions! 👋🏻

## 📊 Basic Information

- **Workflow ID:** 5891
- **Complexity:** advanced
- **Node Count:** 42
- **Views:** 2208
- **Downloads:** 220
- **Created:** 2025/7/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5891)

## 👤 Author

- **Name:** Marcelo Abreu
- **Username:** @mabreum

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **set** (×10)
- **stickyNote** (×4)
- **n8n-nodes-pdforge.pdforge** 
- **httpRequest** (×11)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **code** (×2)
- **slack** 
- **scheduleTrigger** 
- **splitOut** (×9)
- **merge** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 42 nodes with 37 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
