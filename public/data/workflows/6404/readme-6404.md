# Respond to inbound leads with personalized videos using Heygen AI and GPT-4

> 🎥 AI-Powered Inbound Sales Rep Video Agent – Auto-Respond to Leads with Personalized Videos
Description:

This workflow helps you instantly respond to inbound leads with a hyper-personalized video and email—fully automated using n8n, Heygen API, and OpenAI.

Watch the step-by-step Tutorial Build here:
https://www.youtube.com/@Automatewithmarc

When a visitor submits a form on your website, this AI agent dynamically:

Creates a video script tailored to the lead's input using an AI prompt agent
Generates a video using the Heygen API with a branded avatar
Crafts a contextual follow-up email embedding the video
Sends it to the lead’s inbox with a call-to-action

This is ideal for:

Marketing agencies looking to impress new prospects
Sales teams aiming to boost inbound conversions
Founders and freelancers building trust through instant video touchpoints

📥 How It Works:

Form Trigger
 Captures user inputs like name, email, business URL, and marketing pain points.

AI Video Prompt Agent
 Uses LangChain + OpenAI to write a short, personalized script (e.g., “Hey this is Jason from Purple Unicorn Marketing...”).

Video Generation (Heygen API)
 Triggers a video using a selected avatar and voice style.

Video Status & Wait Logic
 Monitors the video generation status until completed.

Get Final Video URL & Thumbnail
 Retrieves the finished video and prepares for embedding.

Email Writer (GPT-4)
 Generates an HTML-based outreach email including the lead's info and embedded video thumbnail with a booking link.

Email Delivery (Gmail Node)
 Sends the full message to the inbound lead automatically.

⚙️ Tools & Integrations:
n8n (self-hosted or cloud)

Heygen API – for video generation

LangChain + OpenAI GPT-4 – for script writing and email creation

Gmail Node – for automated outreach delivery

🔧 Setup Instructions:
Heygen API Key
 Create a Heygen account and retrieve your API key. Set it up as a credential in n8n (httpHeaderAuth).

OpenAI Key
 Add your OpenAI API key under OpenAI credentials.

Gmail OAuth2
 Connect your Gmail account using OAuth2 for sending emails.

Customize the Prompt
 Modify the system message in the LangChain Agent node to reflect your brand tone or CTA.

Calendly Link
 Update the call-to-action links in both the video prompt and email generator nodes with your real booking URL.

💡 Use Cases:
Automating welcome sequences for new signups

Personalized video lead responses for agencies

AI-driven inbound sales agent for bootstrapped startups

## 📊 Basic Information

- **Workflow ID:** 6404
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 1284
- **Downloads:** 128
- **Created:** 2025/7/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6404)

## 👤 Author

- **Name:** Automate With Marc
- **Username:** @marconi

## 🏷️ Categories

- Lead Nurturing
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **httpRequest** (×2)
- **wait** (×2)
- **if** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** (×6)
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
