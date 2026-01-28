# AI-powered credit card recommendation system with OpenAI GPT, Telegram & Google Sheets

> Overview

Confused which credit card to actually get or swipe? With 100+ cards in the market, hidden caps, and milestone rules, most people end up leaving rewards, perks, and cashback on the table.

This workflow uses n8n + GPT + Google Sheets + Telegram to recommend the best credit card for each user’s lifestyle in under 3 seconds, while keeping the logic transparent with a ₹-value breakdown.

What does this workflow do?

This workflow:

Captures User Inputs – Users answer a 7-question lifestyle quiz via Telegram.

Stores Responses – Google Sheets logs all answers for resumption & deduplication.

Scores Answers – n8n Function nodes map single & multi-select inputs into scores.

Generates Recommendations – GPT analyses profile vs. 30+ card dataset.

Breaks Down Value – Outputs a transparent table of rewards, milestones, lounge value.

Delivers Results – Top 3 card picks returned instantly on Telegram.

Why is this useful?

Most card comparison tools only list features — they don’t personalise or calculate actual value. This workflow builds a decision engine:

🔍 Personalised → matches lifestyle to best-fit cards

💸 Transparent → shows value in real currency (rewards, milestones, lounges)

⏱ Fast → answers in under 3 seconds

🗂 Organised → Google Sheets keeps audit trail of every user + dedupe

Tools used

n8n (Orchestrator): Orchestration + logic branching

Telegram: User-facing quiz bot

Google Sheets: Database of credit cards + logs of user answers

OpenAI (GPT): Analyses user profile & generates recommendations

Who is this for?

🧑‍💻 Fintech product builders → see how AI can power recommendation engines

💳 Cardholders → understand which card fits their lifestyle best

⚙️ n8n makers → learn how to combine Sheets + GPT + chat interface into one workflow

🌍 How to adapt it for your country/location

This workflow uses a credit card dataset stored in Google Sheets. To make it work for your country:

Build your dataset → scrape or collect card details from banks, comparison sites, or official portals

Fields to include: Fees, Reward rate, Lounge access, Forex markup, Reward caps, Milestones, Eligibility.

You can use web crawlers (e.g., Apify, PhantomBuster) to automate data collection.

Update the Google Sheet → replace the India dataset with your country’s cards.

Adjust scoring logic → modify Function nodes if your cards use different reward structures (e.g., cashback %, miles, points value).

Run the workflow → GPT will analyse against the new dataset and generate recommendations specific to your country.

This makes the workflow flexible for any geography.

Workflow Highlights

✅ End-to-end credit card recommendation pipeline (quiz → scoring → GPT → result)
✅ Handles single + multi-select inputs fairly with % match scoring
✅ Transparent value breakdown in local currency (rewards, milestones, lounge access)
✅ Google Sheets for persistence, dedupe & audit trail
✅ Delivers top 3 cards in &lt;3 seconds on Telegram
✅ Fully customisable for any country by swapping the dataset

## 📊 Basic Information

- **Workflow ID:** 7714
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 322
- **Downloads:** 32
- **Created:** 2025/8/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7714)

## 👤 Author

- **Name:** Nishant
- **Username:** @pandita

## 🏷️ Categories

- AI Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **code** (×8)
- **telegram** (×3)
- **if** (×2)
- **googleSheets** (×4)
- **set** (×3)
- **telegramTrigger** 
- **merge** (×3)
- **switch** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
