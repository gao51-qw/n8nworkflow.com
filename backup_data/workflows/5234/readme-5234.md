# Narrative threat / opportunity detection (AskRally)

> This workflow turns news monitoring into an early-warning demand engine. It continuously ingests Google Alert RSS feeds, extracts the full text of every article, and runs real-time purchase-intent modeling to predict which stories will sway your buyers—positively or negatively. The moment a spike in intent is detected, it triggers an early warning email so you can run with the right playbooks: amplify favorable narratives to accelerate deal cycles, or counter harmful ones before they dent your pipeline. Ideal for revenue teams that want to harness media signals instead of reacting to them after the fact.

📝 Step-by-Step Instructions
1. RSS Triggers - RSS trigger checks for news every [enter time] 
2. Extract content- using the RSS link, run a HTTP request.
3. Structure Output - Parse out article content and format simulation query 
4. Rally Simulation Testing - AI personas get content as memory, and are asked (in voting mode) to answer how it impacts interest in spending money on [synthetic research] (swap for your category)
5. Extract Individual Votes - Splits Rally's response array to process each persona's individual voting decision for detailed analysis
6. Calculate Responses - Custom code processes all votes, counts selections for each variation, calculates percentages
7. Alert trigger- Depending on count thresholds, triggers emails.

## 📊 Basic Information

- **Workflow ID:** 5234
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 309
- **Downloads:** 30
- **Created:** 2025/6/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5234)

## 👤 Author

- **Name:** Rhys
- **Username:** @virtual-rf

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **code** (×4)
- **httpRequest** (×2)
- **gmail** 
- **stickyNote** (×3)
- **rssFeedRead** 
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
