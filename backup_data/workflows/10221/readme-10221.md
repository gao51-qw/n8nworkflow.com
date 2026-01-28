# Generate event speaker recommendations with Claude AI and Google Sheets

> Simplify event planning with this automated n8n workflow. Triggered by incoming requests, it fetches speaker and audience data from Google Sheets, analyzes profiles and preferences, and generates optimized session recommendations. The workflow delivers formatted voice responses and updates tracking data, ensuring organizers receive real-time, tailored suggestions. 🎙️📊

### Key Features  
- Real-time analysis of speaker and audience data for personalized recommendations.  
- Generates optimized session lineups based on profiles and preferences.  
- Delivers responses via voice agent for a seamless experience.  
- Logs maintain a detailed recommendation history in Google Sheets.  

### Workflow Process  
- The **Webhook Trigger** node initiates the workflow upon receiving voice agent or external system requests.  
- **Parse Voice Request** processes incoming voice data into actionable parameters.  
- **Fetch Database** retrieves speaker ratings, past sessions, and audience ratings from Google Sheets.  
- **Calculate & Analyze** combines voice request data with speaker profiles and audience insights for comprehensive matching.  
- **AI Optimization Engine** analyzes speaker-audience fit and recommends optimal session lineups.  
- **Format Recommendations** structures the recommendations for voice agent response.  
- **Voice Agent Response** returns formatted recommendations to the user with natural language summary and structured data.  
- **Update Tracking Sheet** saves recommendation history and analytics to Google Sheets.  
- If errors occur, the **Check for Errors** node branches to:  
  - **Format Error Response** prepares an error message.  
  - **Send Error Response** delivers the error notification.  

### Setup Instructions  
- Import the workflow into n8n and configure Google Sheets OAuth2 for data access.  
- Set up the Webhook Trigger with your voice agent or external system's API credentials.  
- Configure the AI Optimization Engine node with a suitable language model (e.g., Anthropic Chat Model).  
- Test the workflow by sending sample voice requests and verifying recommendations.  
- Adjust analysis parameters as needed for specific event requirements.  

### Prerequisites  
- Google Sheets OAuth2 credentials  
- Voice agent API or integration service  
- AI/LLM service for optimization (e.g., Anthropic)  
- Structured speaker and audience data in a Google Sheet  

**Google Sheet Structure:**  
1. Create a sheet with columns:  
   - Speaker Name  
   - Rating  
   - Past Sessions  
   - Audience Rating  
   - Preferences  
   - Updated At  

### Modification Options  
- Customize the **Calculate & Analyze** node to include additional matching criteria (e.g., topic expertise).  
- Adjust the **AI Optimization Engine** to prioritize specific session formats or durations.  
- Modify voice response templates in the **Voice Agent Response** node with branded phrasing.  
- Integrate with event management tools (e.g., Eventbrite) for live data feeds.  
- Set custom error handling rules in the **Check for Errors** node.  

**Discover more workflows – [Get in touch with us](https://www.oneclickitsolution.com/contact-us/)**

## 📊 Basic Information

- **Workflow ID:** 10221
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 101
- **Downloads:** 10
- **Created:** 2025/10/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10221)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Miscellaneous
- AI Chatbot

## 🔗 Nodes Used

- **webhook** 
- **stickyNote** (×7)
- **code** (×4)
- **googleSheets** (×3)
- **respondToWebhook** (×2)
- **if** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
