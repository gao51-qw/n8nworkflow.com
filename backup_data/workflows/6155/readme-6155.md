# Extract marketing insights from Google Reviews using Dumpling AI + GPT-4

> ## 📄 What this workflow does

This workflow helps you analyze Google reviews of any business to generate powerful marketing insights. By simply submitting a business name and its Google Place ID, it fetches the top 30 reviews and uses GPT-4 (via LangChain Agent) to extract valuable customer insights such as marketing angles, customer motivations, product pain points, and voice of customer (VOC) quotes. The output is stored automatically in a connected Google Sheet.

---

## 👤 Who is this for

- Marketing teams looking for messaging inspiration  
- Founders or product managers exploring customer feedback  
- Brand strategists gathering real-world insights  
- Agencies running VOC or sentiment analysis

---

## 🛠️ Requirements

- **Dumpling AI API key**  
- **OpenAI GPT-4 or GPT-4o access**  
- **Google Sheets connection**  
- A form or manual input with:
  - Business Name  
  - Google Place ID

---

## ⚙️ How to set up

1. **Connect Credentials**  
   - Dumpling AI (via HTTP Header Auth)  
   - OpenAI (GPT-4)  
   - Google Sheets (OAuth2)

2. **Prepare your Google Sheet**  
   - Create columns:  
     `Business Name`, `Place ID`, `Marketing Angles`, `Customer Motivations`,  
     `Frictions and Barriers`, `Product Opportunities`, `VOC Snippets`

3. **Update Nodes**  
   - Replace the Google Sheets `Document ID` and `Tab Name` with yours  
   - Check that the Dumpling API node is linked to your credential  
   - Optional: tweak the prompt in the LangChain Agent node to fit your tone or goals

---

## 🤖 How it works (Workflow Steps)

1. User submits business name + Google Place ID  
2. Dumpling AI fetches top 30 reviews  
3. Workflow aggregates review text  
4. GPT-4 via LangChain analyzes the reviews  
5. Insights are parsed and logged to Google Sheets

---

## 💡 Customization Ideas

- Push output to Notion, Airtable, or Slack  
- Add sentiment scoring to prioritize themes  
- Create summaries for each insight category  
- Schedule insights to be emailed weekly

---


This is a plug-and-play VOC research workflow — great for founders, marketers, and product teams who want actionable data from real customers without doing manual review scraping or summarizing.


## 📊 Basic Information

- **Workflow ID:** 6155
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 617
- **Downloads:** 61
- **Created:** 2025/7/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6155)

## 👤 Author

- **Name:** Yang
- **Username:** @yang

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.toolThink** 
- **formTrigger** 
- **httpRequest** 
- **splitOut** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleSheets** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
