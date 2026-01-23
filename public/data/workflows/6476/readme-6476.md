# Generate business ideas from Reddit posts with DeepSeek AI and Google Sheets

> Are you looking for the next big startup idea? This powerful n8n workflow helps you mine Reddit posts for real-world pain points, AI-solvable problems, and high-potential business opportunities — without lifting a finger.



🧠 What It Does

This workflow taps into the power of Reddit + AI to:

✅ Scrape top posts from a subreddit of your choice (e.g., r/startups, r/Entrepreneur, r/SaaS).
✅ Filter posts with real engagement and actual user frustrations.
✅ Use AI to evaluate whether it's a real business-worthy problem.
✅ Automatically generate practical business ideas, insights, and implementation plans using LLMs.
✅ Save results to a connected Google Sheet with links, upvotes, and summaries.



🛠️ Built With





n8n (no-code automation)



Reddit API



LangChain & OpenRouter LLMs (DeepSeek integration)



Google Sheets API



Custom code nodes with intelligent error handling



🧾 Use Cases





🧠 Entrepreneurs hunting for idea validation or new pain points



📊 VCs & Analysts scanning real user needs



🤖 AI founders identifying automation opportunities



🎯 Makers building AI-first or SaaS tools



💡 Why It’s Special

Most idea generators are generic.
This one analyzes actual conversations, real pain, and filters based on AI-evaluable criteria — giving you battle-tested insights that people care about.



📦 What's Included





✅ Ready-to-run n8n JSON workflow (self-hosted or desktop)



✅ Setup instructions (Google Sheet + Reddit + LLM config)



✅ Example input/output sheet (Google Sheets)



✅ Tips on prompt customization to match your target niche



⚙️ Requirements





n8n (self-hosted or desktop)



Reddit account & API credentials



Google account (for Sheets)



OpenRouter API Key (for LLM access)



🎁 Bonus

→ Includes optimized AI prompts tailored to generate actionable business models — not just fluff.



📥 Get Started Now

Unlock hundreds of undiscovered business opportunities from Reddit — auto-processed, filtered, and AI-analyzed.





🧠 Built by a creator obsessed with turning real problems into real products.
🛠️ Verified on the n8n Creators Hub.
🌎 Used by solopreneurs, makers, and AI founders worldwide.
**Feel free to reach out or DM the me if you need help customizing: https://www.linkedin.com/in/gerald-akhidenor-1ab1a45/

Reddit Business Idea Generator — Full Documentation: https://drive.google.com/file/d/1ZCKtTS6GjaLQG0zKwY4qAvlXWIrjtlL3/view?usp=sharing**

## 📊 Basic Information

- **Workflow ID:** 6476
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 99
- **Downloads:** 9
- **Created:** 2025/7/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6476)

## 👤 Author

- **Name:** Gerald Denor
- **Username:** @dominixai

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **if** 
- **merge** (×2)
- **filter** 
- **stickyNote** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×3)
- **set** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **code** 
- **reddit** 
- **executeWorkflowTrigger** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
