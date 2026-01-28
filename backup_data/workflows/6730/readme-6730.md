# Audit & monitor SEO performance with GPT-4 Advisor, PageSpeed Insights & Slack alerts

> Unleash the full potential of your website's search engine performance and user experience with this **all-in-one n8n automation template**. Designed for SEO professionals and webmasters, this suite provides **meticulous on-page and technical SEO auditing**, deep insights into **Core Web Vitals (LCP & INP)**, and an intelligent **AI-powered chatbot** for instant insights and troubleshooting.

**Key Features:**
- **Comprehensive On-Page SEO Audit**: Automatically checks for **missing or malformed titles, meta descriptions, H1s (including multiple H1s), missing alt text on images, and canonical tag issues.**
- **Detailed Technical SEO Scan**: Verifies **HTTPS implementation, robots.txt accessibility and content**, and **sitemap.xml** presence.
- **Core Web Vitals Monitoring**: Leverages **Google PageSpeed Insights** to continuously track and alert on critical performance metrics like **Largest Contentful Paint (LCP)** and **Interaction to Next Paint (INP)**.
- **AI-Powered Analysis & Recommendations**: Integrates advanced AI models (ChatGPT, Claude, or Gemini) to **analyze audit findings**, provide **actionable recommendations** for improvements, and even suggest better alt text for images based on content context.
- **Intelligent SEO Chatbot**: A dynamic chatbot triggered by webhooks understands natural language queries, extracts entities (URLs, keywords, SEO topics), and provides **instant, AI-generated answers** about SEO best practices, Core Web Vitals explanations, or even specific site data (via Google Search Console integration).
- **Automated Reporting & Alerts**: Logs all audit data to **Google Sheets** for historical tracking and sends **real-time Slack alerts** for critical SEO issues or performance degradations.

Streamline your SEO workflow, ensure optimal website health, and react swiftly to performance challenges. This template is your ultimate tool for staying ahead in the competitive digital landscape.

## 📊 Basic Information

- **Workflow ID:** 6730
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 187
- **Downloads:** 18
- **Created:** 2025/7/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6730)

## 👤 Author

- **Name:** Candra Reza
- **Username:** @candrareza

## 🏷️ Categories

- Market Research
- AI Chatbot

## 🔗 Nodes Used

- **start** 
- **cron** 
- **webhook** 
- **set** 
- **httpRequest** (×4)
- **cheerio** 
- **function** (×3)
- **openAi** (×2)
- **googlePageSpeedInsights** 
- **googleSheets** 
- **if** (×2)
- **slack** 
- **googleSearchConsole** 
- **respondToWebhook** 
- **executeWorkflow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
