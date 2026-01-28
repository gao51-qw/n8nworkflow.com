# Generate trend-based video marketing ideas with GPT-4, Tavily and Veo 3

> This workflow contains community nodes that are only compatible with the self-hosted version of n8n.

Automate your entire video content creation pipeline with this AI-powered, no-code workflow built in n8n.
Watch Step-by-step video guide here: https://www.youtube.com/watch?v=x7nHpcggpX8&t=5s
 
This template connects a suite of smart tools to help you generate scroll-stopping short video ideas based on daily trending topics and auto-deliver them via email—ready for production in Veo 3.

🔧 How it works:
Scheduled Trigger (Daily)
Kicks off the process each day at your chosen time.

Tavily Agent (Web Search)
Searches the latest trends, viral moments, or market news based on your e-commerce brand (e.g. “Sally’s Closet”).

OpenAI GPT-4 Agent (Creative Brainstorming)
Generates high-conversion marketing video ideas based on your brand’s tone and what’s trending.

Prompt Formatter for Veo 3
Converts the idea into a cinematic-style prompt, optimized for Veo’s video generation engine (via FAL API).

Send via Gmail
The final Veo 3 prompt is emailed to you or your creative team for immediate use or manual refinement.

Watch full step-by-step Tutorial Build Video: https://youtu.be/x7nHpcggpX8

🧠 Use Cases:
E-commerce brands that need fresh daily content

Marketing teams looking to automate creative ideation

Solopreneurs building a lean video production engine

Anyone experimenting with Veo 3 prompt-based storytelling

🛠️ Tools used:
n8n Scheduled Trigger

Tavily Node (for real-time web search)

Langchain Agent (GPT-4 via OpenAI)

FAL API (Veo 3 prompt delivery)

Gmail Node (send final output)

⚡️ Ready-to-use. Fully editable. Zero coding required.

💡 Pro Tip: You can hook this up with the Veo 3 generation API (FAL) to complete the automation end-to-end!

## 📊 Basic Information

- **Workflow ID:** 4921
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 3351
- **Downloads:** 335
- **Created:** 2025/6/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4921)

## 👤 Author

- **Name:** Automate With Marc
- **Username:** @marconi

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **@tavily/n8n-nodes-tavily.tavilyTool** 
- **httpRequest** (×3)
- **wait** 
- **if** 
- **gmail** 
- **scheduleTrigger** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
