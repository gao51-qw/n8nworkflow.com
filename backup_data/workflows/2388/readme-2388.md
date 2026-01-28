# Dynamically generate a webpage from user request using OpenAI structured output

> This workflow is a experiment to build HTML pages from a user input using the new Structured Output from OpenAI.

How it works:
- Users add what they want to build as a query parameter
- The OpenAI node generate an interface following a structured output defined in the body
- The JSON output is then converted to HTML along with a title
- The HTML is encapsulated in an HTML node (where the Tailwind css script is added)
- The HTML is rendered to the user via the Webhook response.

Set up steps
- Create an [OpenAI API Key](https://platform.openai.com/api-keys) 
- Create the OpenAI credentials
- Use the credentials for both nodes HTTP Request (as Predefined Credential type) and OpenAI
- Activate your workflow
- Once active, go to the production URL and add what you'd like to build as the parameter "query"
- Example: https://production_url.com?query=a%20signup%20form

Example of generated page![Screenshot 20240823 at 13.01.56.png](fileId:831)


## 📊 Basic Information

- **Workflow ID:** 2388
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 38472
- **Downloads:** 3847
- **Created:** 2024/8/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2388)

## 👤 Author

- **Name:** Agent Studio
- **Username:** @agentstudio

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **respondToWebhook** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **html** 
- **stickyNote** (×2)
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
