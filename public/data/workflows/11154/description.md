**Description:** Transform your health data into actionable meal plans with an Advanced AI Chain. 🥗🤖

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