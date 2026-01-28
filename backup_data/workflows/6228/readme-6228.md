# Simple SMS messaging system with Textbelt API integration

> This n8n workflow sends SMS messages through the Textbelt API by accepting phone numbers, messages, and API keys as inputs. It uses a manual trigger to start the process, sets the necessary data, and executes an HTTP POST request to deliver the SMS.

Step-by-Step Explanation:
1. Manual Trigger: Starts the workflow manually by clicking ‘Execute workflow’.
2. Set Data Node: Defines the required input parameters (phone, message, and key) that will be sent to the SMS API. You can populate these fields with your target phone number, the text message, and your Textbelt API key.
3. HTTP Request Node: Sends a POST request to https://textbelt.com/tex with the phone number, message, and API key in the request body to send the SMS. The response from the API confirms whether the message was successfully sent.


## 📊 Basic Information

- **Workflow ID:** 6228
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 365
- **Downloads:** 36
- **Created:** 2025/7/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6228)

## 👤 Author

- **Name:** Sarfaraz Muhammad Sajib
- **Username:** @sarfarazmuhammad

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** 
- **set** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
