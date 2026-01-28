# OAuth2 settings finder with OpenRouter chat model and Llama 3.3

> ## Find OAuth URIs with AI Llama

**Overview:**
The AI agent identifies:
- Authorization URI
- Token URI
- Audience

**Methodology:**
Confidence scoring is utilized to assess the trustworthiness of extracted data:
- Score Range: 0 &lt; x ≤ 1
- Score Granularity: 0.01 increments

**Model Details:**
Leveraging the Wayfarer Large 70b Llama 3.3 model.
## How it works:
This template is designed to assist users in obtaining OAuth2 settings using AI-powered insights. It is ideal for developers, IT professionals, or anyone working with APIs that require OAuth2 authentication. By leveraging the AI agent, users can simplify the process of extracting and validating key details such as the `authorization_url`, `token_url`, and `audience`.

## Set up instructions:
### 1. Configuration Nodes
- **Structured Output Node**: Parses the AI model's output using a predefined JSON schema. This ensures the data is structured for downstream processing.
- **Code Node**:  If the AI model’s output does not match the required format, use the Code node to re-arrange and transform the data. Example code snippets are provided below for common scenarios.
### 2. AI Model Prompt
The prompt for the AI model includes:
- A detailed structure and objectives of the query.
- Flexibility for the model to improvise when accurate results cannot be determined.
### 3. Confidence Scoring
The AI model assigns a confidence score (0 &lt; x ≤ 1) to indicate the reliability of the extracted data. Scores are provided in increments of 0.01 for granularity.
## Adaptability
**Customize** this template:
* Update the AI model prompt with details specific to your API or OAuth2 setup.
* Adjust the JSON schema in the Structured Output node to match the data format.
* Modify the Code logic to suit the application's requirements. 

## 📊 Basic Information

- **Workflow ID:** 3279
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 522
- **Downloads:** 52
- **Created:** 2025/3/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3279)

## 👤 Author

- **Name:** Hendriekus
- **Username:** @h3rx

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **code** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
