**Description:**

Turn raw sales deal outcomes into actionable insights with this smart n8n workflow template! Automatically pull deal data from Google Sheets, analyze won/lost reasons with AI, generate structured insights, and deliver polished weekly reports—no manual effort needed.

This automation connects to your sales feedback sheet, processes deal outcomes with an AI model, classifies win/loss reasons, summarizes key patterns, and creates professional HTML email digests. The enriched insights are stored in Google Sheets and shared via automated email reports—giving sales, product, and leadership teams a clear view of what drives success or loss.

**What This Template Does:**
 📊 Captures sales deal outcomes from Google Sheets
 🧠 Uses AI to analyze win/loss reasons and extract themes
 📂 Categorizes top won & lost patterns for each deal
 📝 Summarizes deal insights into structured JSON
 📈 Stores enriched insights in a dedicated Google Sheet
 📧 Generates and sends a polished HTML weekly digest email
 🌟 100% automated: from data collection to insights reporting

**Built-in Logic Ensures:**

 ✔️ Clean JSON-based AI output (won reasons, lost reasons, patterns)
 ✔️ Original deal details remain tied to AI insights
 ✔️ Weekly digest emails include structured summaries & recommendations

**Requirements:**

- Google Sheets with deal outcome data (won/lost + reasons)
- Google Sheets account for storing enriched insights
- Azure OpenAI (or compatible) account for AI analysis
- n8n instance (self-hosted or cloud)

**Setup Instructions:**
- Google Sheets Node: Connect to your sales feedback sheet and fetch all deal data.
- Clean Data: Use a Code or Set node to remove extra fields and format data.
- Loop Over Deals: Add a Loop Over Items node for individual analysis.
- AI Analysis: Use Azure OpenAI Chat Model to extract win/loss reasons and patterns.
- Parse Results: Add a Parse AI Response node to structure insights.
- Store Insights: Save enriched results back to Google Sheets.
- Generate Report: Fetch processed data and use AI to create an HTML email summary.
- Send Email: Deliver the report using an Email node.
 
**Perfect For:**
- Sales teams analyzing why deals are won or lost
- Product managers learning from customer objections & success drivers
- Leadership teams tracking patterns in deal performance
- Analysts turning unstructured feedback into scalable insights