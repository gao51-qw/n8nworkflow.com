# AI competitor review analyzer with Dumpling AI + GPT-4o + Google Sheets

> 
### Who is this for?

This workflow is perfect for marketers, SEO specialists, product teams, and competitive analysts who want to monitor and summarize public reviews of their competitors. It’s especially helpful for small teams who want fast insights from Google reviews without spending hours manually reading and sorting them.

---

### What problem is this workflow solving?

Manually going through competitor reviews is time-consuming and repetitive. You risk missing patterns or insights, and it’s hard to share summaries with your team quickly. This workflow automatically scrapes reviews from Google and generates a structured summary of pain points and positive feedback. That way, you can focus on strategy instead of sorting through dozens of reviews.

---

### What this workflow does

This automation watches for new competitor entries in a Google Sheet, then:

1. Uses **Dumpling AI** to scrape the latest Google reviews (up to 20) for each business.
2. Splits and cleans the reviews for analysis.
3. Sends them to **GPT-4o**, which summarizes the most common complaints and praises.
4. Saves the structured result back to the same Google Sheet.

You’ll instantly get an overview of what people are saying about any competitor.

---

### Setup

1. **Google Sheet Setup**
   - Create a Google Sheet with at least one column: `Business`
   - Add names or search queries for the competitors you want to analyze
   - Optional: Add columns for `Summary of Reviews` and `Pain Points`

2. **Connect Dumpling AI**
   - Sign up at [Dumpling AI](https://www.dumplingai.com/)
   - Create an agent using the `get-google-reviews` endpoint
   - Copy your agent key
   - Use it in the HTTP Request node in this workflow

3. **OpenAI Setup**
   - Use your API key with GPT-4o access
   - The prompt is already structured to generate grouped summaries from reviews

4. **Run the Workflow**
   - Trigger it manually or schedule it
   - Make sure your Google Sheets, OpenAI, and Dumpling AI connections are active

---

### How to customize this workflow to your needs

- You can expand the number of reviews retrieved by changing the Dumpling AI agent config
- Replace Google Sheets with Airtable if you want more robust data views
- Add more fields like star ratings or review dates in your agent for richer analysis
- Change the GPT prompt to highlight emotional tone, urgency, or feature mentions

---

### 🧠 Node Details

- **Google Sheets Trigger**: Watches for new competitor names
- **HTTP Request (Dumpling AI)**: Scrapes 20 recent reviews from Google
- **SplitOut Node**: Breaks review array into individual items
- **Code Node**: Extracts and combines review text
- **Edit Fields Node**: Structures the review content before GPT
- **GPT-4o Node**: Analyzes and summarizes top pain points and praise
- **Google Sheets Output**: Saves the summary back to the same sheet

---

### Dependencies

- Dumpling AI account and review scraping agent setup
- OpenAI API key with GPT-4o access
- Google Sheets OAuth2 credentials

---


## 📊 Basic Information

- **Workflow ID:** 4032
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 739
- **Downloads:** 73
- **Created:** 2025/5/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4032)

## 👤 Author

- **Name:** Yang
- **Username:** @yang

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **httpRequest** 
- **splitOut** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **googleSheets** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
