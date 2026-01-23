# Collect & store restaurant customer feedback with Google Sheets and email forms

> This n8n template demonstrates how to create an automated customer feedback collection system for restaurants. The workflow triggers when new customer emails are added to an Excel sheet, automatically sends personalized feedback forms, and stores all responses in a separate Excel tracking sheet. Perfect for restaurants wanting to systematically gather customer insights and improve service quality.

**Good to know**
* Each feedback form is personalized with the customer's name and email
* All responses are automatically timestamped and organized in Excel sheets
* The system handles form validation and ensures complete data capture
* Email notifications keep your team updated on new feedback submissions

## How it works

### Email Distribution Workflow
* New customer entries are detected in Excel Sheet-1 (customer database) containing customer names and email addresses
* The system automatically generates personalized feedback forms for each new customer
* Customized feedback emails are sent with embedded forms tailored to restaurant experience evaluation
* Wait nodes ensure proper processing timing before sending emails

### Feedback Collection Workflow  
* Customer form submissions trigger the data collection process
* All feedback responses are captured including ratings, comments, and contact information
* Data is automatically appended to Excel Sheet-2 (feedback responses) with complete timestamps
* The system handles multiple concurrent submissions without data loss

## Excel Sheet Structure

### Sheet-1 (Customer Database)
* `Name` - Customer's full name
* `Email` - Customer's email address for form distribution

### Sheet-2 (Feedback Responses)
* `Timestamp` - Date and time of form submission
* `Name` - Customer's full name
* `E-Mail` - Customer's email address
* `Contact Number` - Customer's phone number
* `How was the cleanliness of the dining area?` - Cleanliness rating/feedback
* `Did you like the taste of the food?` - Food taste evaluation
* `What dish did you enjoy the most?` - Favorite dish identification
* `Was your order accurate and timely?` - Service accuracy rating
* `Was our staff polite and helpful?` - Staff service evaluation
* `Was the food presentation appealing?` - Food presentation rating
* `How would you rate your overall dining experience?` - Overall experience score
* `Any additional comments or suggestions?` - Open-ended feedback field

## How to use

* Import the workflow into your n8n instance and configure Excel integration
* Set up Sheet-1 with customer names and emails for feedback distribution
* Configure the feedback form with your restaurant's specific questions and branding
* Add new customer entries to Sheet-1 to automatically trigger feedback emails
* Monitor Sheet-2 for incoming responses and analyze customer satisfaction trends
* The system scales automatically with your customer database growth

## Requirements

* Google Sheets account for data storage and management
* Email service integration (Gmail, SMTP, or similar)
* n8n instance with Google Sheets and email connectors

## Customising this workflow

* Customer feedback automation can be adapted for different restaurant types and service models
* Try popular use-cases such as post-dining follow-ups, seasonal menu feedback, or special event evaluations
* The workflow can be extended to include automated response analysis, sentiment scoring, and management dashboard integration

## 📊 Basic Information

- **Workflow ID:** 5848
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 811
- **Downloads:** 81
- **Created:** 2025/7/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5848)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **code** 
- **emailSend** 
- **formTrigger** 
- **wait** 
- **googleSheets** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
