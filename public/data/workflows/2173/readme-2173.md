# Auto document your n8n workflows

> ## Who is this for?

This workflow is designed for n8n users and developers who need to automate the documentation process of their n8n workflows. It's particularly useful for teams looking to streamline their documentation efforts and ensure consistency across their workflow documentation.

## What problem is this workflow solving? / Use case

The primary problem this workflow addresses is the manual and time-consuming process of creating documentation for n8n workflows. It automates the generation of concise, clear, and comprehensive documentation directly from the workflow's JSON, making it easier for both technical and non-technical users to understand what the workflow does and how it operates.

## What this workflow does

Upon receiving a form submission with the workflow title and JSON, this workflow automatically generates documentation that includes:
- A brief introduction to the workflow.
- The trigger mechanism (webhook URLs for test and production environments, or cron schedules).
- Setup requirements, including necessary credentials and external dependencies.


## Setup

1. **Credentials Setup**: Ensure you have OpenAI API credentials configured in n8n to use the GPT model for generating documentation text.
2. **Form Submission**: Users must submit the form with the workflow title and JSON. The form is accessible via:
   - Test URL: `domain/form-test/{webhookId}`
   - Production URL: `domain/form/{webhookId}`

## How to customize this workflow to your needs

- **Modify Trigger URLs**: Adjust the webhook or form URLs based on your domain and specific n8n setup.
- **Customize Documentation Template**: Edit the OpenAI node's prompt to change the structure or details of the generated documentation.
- **Extend Functionality**: Add nodes to integrate with other systems (e.g., automatically publishing the documentation to a wiki or sending it via email).

This workflow simplifies the documentation process, making it accessible and manageable for teams of all sizes and technical abilities. By automating documentation, it ensures that all workflows are properly documented, enhancing understanding and efficiency within teams.

## 📊 Basic Information

- **Workflow ID:** 2173
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 11016
- **Downloads:** 1101
- **Created:** 2024/3/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2173)

## 👤 Author

- **Name:** Marvin Wu
- **Username:** @marvinwu

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **set** (×2)
- **openAi** 
- **respondToWebhook** 
- **formTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
