# Create personalized diet plans from health reports with Ollama AI and email automation

> This n8n workflow transforms uploaded health details or lab reports received via email into a customized diet plan using AI analysis, then sends the plan back to the user via email, optimizing nutrition based on individual health data.

## Why Use It

This workflow automates the creation of personalized diet plans from health data, saving time for nutritionists, improving patient outcomes with AI-driven insights, and providing a convenient email delivery system for users.

## How to Import It

1. **Download the Workflow JSON**: Obtain the workflow file from the n8n template or create it based on this document.
2. **Import into n8n**: In your n8n instance, go to "Workflows," click the three dots, select "Import from File," and upload the JSON.
3. **Configure Credentials**: Set up email (e.g., IMAP for receiving, SMTP for sending), AI model, and optional Google Sheets credentials in n8n.
4. **Run the Workflow**: Test with a sample email containing health data and verify the diet plan delivery.

## System Architecture

- **Data Input Pipeline**:
  - **Email Trigger**: Initiates the workflow when a health report email is received.
  - **Extract Health Data**: Parses uploaded health details or lab reports from the email.
- **AI Analysis Flow**:
  - **Send to AI Model**: Analyzes health data using an AI model.
  - **Generate Diet Plan**: Creates a customized diet plan based on AI output.
- **Delivery Flow**:
  - **Prepare Email Content**: Formats the diet plan for email delivery.
  - **Send Diet Plan Email**: Sends the plan to the user via SMTP.
  - **Update Log (Optional)**: Logs the process in a Google Sheet.

## Google Sheet Structure
- **Columns**:
  - `timestamp`: Date and time of the diet plan generation.
  - `user_email`: User’s email address for receiving the plan.
  - `health_data`: Extracted health metrics or lab report summary.
  - `condition`: AI-identified health condition.
  - `diet_plan`: Generated diet plan summary.
  - `sent_status`: Status of email delivery (e.g., Sent, Failed).

## Customization
- **Add SMS Alerts**: Integrate Twilio or WhatsApp for additional notifications.
- **Enhance AI**: Train the AI model with more nutritional data for better plans.
- **Include Recipes**: Add a node to suggest recipes based on the diet plan.
- **Multilingual Support**: Adapt email content for different languages.
- **Integration with Apps**: Connect to fitness apps (e.g., MyFitnessPal) for tracking.

## Requirements
- **Email Service**: IMAP (e.g., Gmail) for receiving health data emails and SMTP for sending diet plans.
- **AI Model**: Ollama or similar for health analysis and diet plan generation (requires API access).
- **n8n Instance**: With email (IMAP/SMTP) and AI connectors configured.
- **Internet Connection**: To access email and AI APIs.
- **Optional Google Sheets Account**: For logging health data and diet plans.
- **User Consent**: Ensure compliance with data privacy laws (e.g., HIPAA) for health data.

Want a tailored workflow for your business? Our experts can craft it quickly [Contact our team](https://www.oneclickitsolution.com/contact-us/)



## 📊 Basic Information

- **Workflow ID:** 7181
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 824
- **Downloads:** 82
- **Created:** 2025/8/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7181)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **emailReadImap** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmOllama** 
- **wait** 
- **emailSend** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
