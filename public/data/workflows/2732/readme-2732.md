# Csv to JSON converter with error handling and Slack notifications

> ## Who this template is for
This template is for developers or teams who need to convert CSV data into JSON format through an API endpoint, with support for both file uploads and raw CSV text input.

## Use case
Converting CSV files or raw CSV text data into JSON format via a webhook endpoint, with error handling and notifications. This is particularly useful when you need to transform CSV data into JSON as part of a larger automation or integration process.

## How this workflow works

1. Receives POST requests through a webhook endpoint at 
```
/tool/csv-to-json
```
2. Uses a Switch node to handle different input types:
    - File uploads (binary data)
    - Plain text CSV data
    - JSON format data
3. Processes the CSV data:
    - For files: Uses the Extract From File node
    - For raw text: Converts the text to CSV using a custom Code node that handles both comma and semicolon delimiters
4. Aggregates the processed data and returns:
    - Success response (200): Converted JSON data
    - Error response (500): Error message with details
5. In case of errors, sends notifications to a Slack error channel with execution details and a link to debug

## Set up steps

1. Configure the webhook endpoint by deploying the workflow
2. Set up Slack integration for error notifications:
    - Update the Slack channel ID (currently set to "C0832GBAEN4")
    - Configure OAuth2 authentication for Slack
3. Test the endpoint using either:
    - CURL for file uploads:
        
        ```bash
        bash
        Copy
        curl -X POST "https://yoururl.com/webhook-test/tool/csv-to-json" \
             -H "Content-Type: text/csv" \
             --data-binary @path/to/your/file.csv
        
        ```
        
    - Or send raw CSV data as text/plain content type

## 📊 Basic Information

- **Workflow ID:** 2732
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 3367
- **Downloads:** 336
- **Created:** 2025/1/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2732)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **stickyNote** (×4)
- **extractFromFile** 
- **respondToWebhook** (×3)
- **set** 
- **switch** 
- **slack** 
- **code** 
- **if** 
- **httpRequest** 
- **webhook** 
- **aggregate** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
