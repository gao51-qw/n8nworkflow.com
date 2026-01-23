# Convert an XML file to JSON via webhook call

> ## Who this template is for
This template is for everyone who needs to work with XML data a lot and wants to convert it to JSON instead.

## Use case
Many products still work with XML files as their main language. Unfortunately, not every software still supports XML, as many switched to more modern storing languages such as JSON. This workflow is designed to handle the conversion of XML data to JSON format via a webhook call, with error handling and Slack notifications integrated into the process. 

## How this workflow works
1. **Triggering the workflow:**
    - This workflow initiates upon receiving an HTTP POST request at the webhook endpoint specified in the "POST" node. The endpoint, designated as <WEBHOOK_URL>, can be accessed externally by sending a POST request to that URL.
2. **Data routing and processing:**
    - Upon receiving the POST request, the Switch node routes the workflow's path based on conditions determined by the content type of the incoming data or any encountered errors.
    - The Extract From File and Edit Fields (Set) nodes manage XML input processing, adapting their actions according to the data's content type.
3. **XML to JSON conversion**:
    - The XML data extracted from the input is passed through the "XML" node, which performs the conversion process, transforming it into JSON format.
4. **Response handling:**
- If the XML-to-JSON conversion is successful, a success response is sent back with a status of "OK" and the converted JSON data.
- If there are any errors during the XML-to-JSON conversion process, an error response is sent back with a status of "error" and an error message.
- Error handling: in case of an error during processing, the workflow sends a notification to a Slack channel designated for error reporting.

## **Set up steps**
1. Set up your own <WEBHOOK_URL> in the Webhook node. While building or testing a workflow, use a test webhook URL. When your workflow is ready, switch to using the production webhook URL. 
2. Set credentials for Slack.

## 📊 Basic Information

- **Workflow ID:** 2222
- **Complexity:** beginner
- **Node Count:** 0
- **Views:** 4667
- **Downloads:** 466
- **Created:** 2024/4/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2222)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **stickyNote** (×3)
- **extractFromFile** 
- **respondToWebhook** (×2)
- **webhook** 
- **xml** 
- **set** (×2)
- **switch** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
