🧠 Reddit MVP Generator – Auto-Generate Startup Ideas from Real User Pain Points
The Reddit MVP Generator is a fully automated business idea mining system built in n8n. It scans trending posts and user comments on Reddit to identify real-world pain points and uses an AI-powered chain to generate detailed, structured MVP business ideas—including industry, business type, revenue potential, and startup cost estimates.

🚀 Key Features
Live Reddit Scraper: Select from a curated list of entrepreneur and business subreddits (e.g., r/smallbusiness, r/entrepreneur, r/marketing) to fetch top trending posts.

Comment Analysis: Pulls Reddit comments and flattens threads to extract community pain points.

AI Business Generator: Uses OpenRouter-compatible LLMs (like GPT-4o-mini or Gemini Flash) to analyze post content and comments. Outputs are structured JSON objects with MVP ideas.

Zero Duplicate Analysis: Automatically deduplicates previously analyzed Reddit posts using a dynamic blocklist.

Excel Integration: Saves each MVP idea directly into your Microsoft Excel 365 sheet, organized by MVP, Industry, Pain Point, Startup Costs, and Revenue potential.

Easy Subreddit Selection: User-friendly form trigger lets you choose your target subreddit without editing the workflow.

Offline-Friendly: All results are stored in Excel for later review or distribution—ideal for content creators, market researchers, or startup founders.

🛠️ Requirements
Free n8n account (self-hosted or cloud)

Reddit developer credentials

OpenRouter API key (supports Qwen, GPT-4o-mini, Gemini)

Microsoft Excel 365 with Azure OAuth2 app setup

📦 What You Get
Complete n8n workflow file

Setup notes inside the workflow (via Sticky Notes)

Instructions for Excel table formatting and OAuth2 setup

Output schema designed for downstream automation or AI agents