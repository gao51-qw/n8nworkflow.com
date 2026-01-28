# Automated email inquiry processing & routing with Gmail and Gemini AI

> This automated n8n workflow processes any inquiry emails using AI-powered intelligence to determine customer intent and provide appropriate responses. The system analyzes incoming emails, performs availability checks or direct booking processing, and sends personalized responses based on the customer's specific requirements across any industry vertical.

## **Good to Know**

* Uses Google Gemini Chat Model for intelligent email analysis and response generation
* Automatically detects customer intent (availability check vs direct booking request)
* Includes conditional routing for different response types based on AI analysis
* Integrates with external booking systems through HTTP requests
* Provides seamless email automation with personalized customer communication

## **How It Works**

1.  **Gmail Trigger**: Initiates the workflow upon receiving a new email.
2.  **AI Agent**: Analyzes the email content to determine the customer's intent (availability check or direct booking).
3.  **Code**: Parses the JSON output from the AI Agent.
4. **Wait for Data** - Ensures proper data synchronization before proceeding with conditional logic
5.  **If**: Routes the workflow based on the detected intent.
6.  **Gmail Nodes**: Sends appropriate responses or forwards booking details.


## **How to Use**

* Import workflow into n8n
* Configure Gmail API credentials for email monitoring and sending
* Set up Google Gemini Chat Model API access
* Customize AI prompts based on your industry and booking requirements
* Test with sample inquiry emails to verify intent detection accuracy
* Configure external booking system integration if needed
* Monitor email processing and response quality

## **Requirements**

* Gmail API credentials
* Google Gemini Chat Model API access
* Email monitoring and sending permissions
* Optional: External booking system API integration

## **Customizing This Workflow**

* Modify AI prompts for different industries (hotels, restaurants, services, appointments)
* Adjust conditional logic based on specific business requirements
* Configure custom email templates for various response scenarios
* Add integration with CRM or booking management systems
* Set up additional data processing nodes for complex booking workflows
* Implement custom validation rules for booking requests

## 📊 Basic Information

- **Workflow ID:** 6633
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 747
- **Downloads:** 74
- **Created:** 2025/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6633)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **gmailTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **httpRequestTool** 
- **code** 
- **if** 
- **gmail** (×2)
- **stickyNote** (×3)
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
