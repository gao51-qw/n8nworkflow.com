# Enhance AI prompts with GPT-4o-mini and Telegram delivery

> # Workflow Documentation

## Description:
This workflow is designed to optimize prompts by enhancing user inputs for clarity and specificity using AI. The workflow takes a user-provided prompt as input and uses a Natural Language Processing (NLP) model to refine and improve the prompt. The optimized prompt is then sent back to the user, ready for use in further workflows or processes.

## Setup:
1. This workflow is suitable for users who want to improve their prompts for better communication and understanding in their workflows.
2. The workflow utilizes an AI Agent powered by an OpenAI Chat Model to enhance user prompts.

## Expected Outcomes:
- Users can provide vague or imprecise prompts as input to the workflow.
- The AI Agent will refine and optimize the prompt, adding clarity and specific details.
- The optimized prompt will be delivered back to the user via Telegram or can be input for the next nodes.

## Extra Information:
A. A Telegram node is used to deliver the optimized prompt back to the user.
B. Ensure you have the necessary credentials set up for Telegram and OpenAI accounts.
C. Customize the workflow's settings, such as the AI model used for prompt optimization, to suit your requirements.
D. Activate the workflow once all configurations are set to start optimizing prompts efficiently.


## 📊 Basic Information

- **Workflow ID:** 3496
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 778
- **Downloads:** 77
- **Created:** 2025/4/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3496)

## 👤 Author

- **Name:** Jesse Davids
- **Username:** @cultrix

## 🏷️ Categories

- Engineering
- Multimodal AI

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **telegram** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **code** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
