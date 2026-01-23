# Generate personalized BP meal plans with Gemini, Google Search, and QuickChart

> **Description:** Transform your health data into actionable meal plans with an Advanced AI Chain. 🥗🤖

This workflow goes beyond a simple prompt. It orchestrates a chain of Google Gemini agents to manage your blood pressure. It acts as a personal health assistant that analyzes your data, strategizes a diet plan, and finds real-world recipes.

## Key Features:

Dual AI Logic: Uses Gemini (1.5-flash) in two stages—first to decide the search strategy based on BP status (High/Normal), and second to synthesize a 5-day meal plan.

Real Recipe Search: Automatically searches Google for recipes that match the AI's dietary strategy (e.g., "Low sodium dinner").

Visual Tracking: Generates a blood pressure trend chart using QuickChart.io and attaches it to the email report.

Organized Layout: Nodes are clearly grouped into sections (Data Collection, AI Strategy, Execution, Synthesis) for easy customization.

## How it works:

Analyze: Fetches last 7 days of BP data from Google Sheets.

Decide: AI determines the best search keywords (e.g., "Dash diet recipes") based on your average BP.

Execute: Searches for recipes and generates a chart simultaneously.

Synthesize: AI combines the recipes and health stats into a weekly plan.

Deliver: Emails the plan and chart to you.

## Setup Requirements:

Google Sheets: Create headers: date, systolic, diastolic.

Google Gemini API Key

Google Custom Search API Key & Engine ID

Gmail

## 📊 Basic Information

- **Workflow ID:** 11154
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 9
- **Downloads:** 0
- **Created:** 2025/11/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11154)

## 👤 Author

- **Name:** NODA shuichi
- **Username:** @shuichi

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×5)
- **scheduleTrigger** 
- **set** 
- **googleSheets** 
- **code** (×2)
- **httpRequest** (×2)
- **merge** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.googleGemini** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
