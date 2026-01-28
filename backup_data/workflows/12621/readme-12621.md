# Analyze post-event survey feedback from Google Forms with GPT-4o, Slack and Google Docs

> ## 🎉 AI Event Feedback Analyzer → Instant Slack Alerts + Google Docs Reports

**Turn raw Google Forms into actionable insights**—AI extracts sentiment, themes, testimonials → posts Slack digests + builds running Doc report. Perfect for conferences, webinars, workshops.

### 🎯 Use Cases
- Event planners tracking NPS + improvements live
- Webinar hosts surfacing testimonials automatically
- Conference organizers sharing #event-feedback in Slack
- Marketing teams building case studies from attendee quotes

### 🔧 How It Works
📝 Webhook catches Google Form → Typeform submissions

🧠 AI analyzes: Sentiment 😍/😞, Likes, Improvements, Testimonial quote

💬 Posts Slack #event-feedback: "4/5 ⭐ Marketing Pro: 'Loved networking' → Add more breaks"

📄 Appends Google Doc: "{{EventName}} Feedback Log" with bullets + aggregates

🔄 Optional: Manual aggregate last 50 → "Avg 4.2⭐ Top 3 actions: ..."

text

### ⚙️ Setup (3 min)
✅ Google Forms → Sheets (auto)
✅ Slack #channel + OpenAI key
✅ Google Docs (variable ID)
✅ No hardcodes—plug & play


**💰 Impact**: 30% faster feedback loops → 15% better next events.

**Keywords**: event survey analysis, Google Forms AI, post-event feedback automation, Slack NPS alerts, conference testimonial generator

## 📊 Basic Information

- **Workflow ID:** 12621
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 13
- **Downloads:** 1
- **Created:** 2026/1/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12621)

## 👤 Author

- **Name:** Milo Bravo
- **Username:** @milobravo1

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×10)
- **googleSheetsTrigger** 
- **set** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **googleDocs** (×2)
- **if** (×2)
- **googleSheets** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.informationExtractor** (×2)
- **slack** (×3)
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
