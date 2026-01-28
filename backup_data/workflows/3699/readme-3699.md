# Daily personalized air & pollen health alerts with Ambee API and AI via email

> This workflow fetches real-time air quality and pollen data using Ambee’s APIs and sends a friendly, personalized daily summary by email. It uses a scheduler to automate data collection, AI-generated health tips, and clear, actionable messages—perfect for sensitive users (e.g. kids with asthma, allergy sufferers).
 
**Use Case**: 
Ideal for individuals with respiratory conditions, allergies, or those who want to stay informed about environmental conditions affecting their health.​

**Set up steps**
Estimated time: 10–15 minutes
 You'll need:
- Ambee API key (free registration)
- OpenAI API key
- Email credentials (Gmail)
- User Profile

💡 Keep in mind:

You’ll need to input your location coordinates (we’ve pre-filled Braunschweig as an example).

The AI Agent node uses a ready-made prompt that’s tailored for email—but feel free to adapt it to other messaging platforms.


## 📊 Basic Information

- **Workflow ID:** 3699
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 404
- **Downloads:** 40
- **Created:** 2025/4/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3699)

## 👤 Author

- **Name:** Ange Russell 
- **Username:** @angerussell

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **gmailTool** 
- **scheduleTrigger** 
- **stickyNote** (×3)
- **set** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
