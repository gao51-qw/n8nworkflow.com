# Generate AI Responses with Perplexity Sonar Models (Reusable Module)

> # Perplexity API Module

This reusable workflow allows you to interact with the [Perplexity API](https://docs.perplexity.ai/api-reference/async-chat-completions-post) using the `sonar` or `sonar-pro` models. It is designed to be triggered from other workflows and accepts dynamic prompts via input parameters.

## Features

- 🧱 Modular: Triggered using `Execute Workflow` from any other workflow
- 📥 Inputs:
  - `SystemPrompt`: Set your system-level instruction for the LLM
  - `UserPrompt`: The main user prompt for the conversation
- 🧠 Uses Perplexity’s `chat/completions` endpoint
- 🔐 Built with API authentication in mind (Bearer token or header auth)
- 🔁 Easily extendable for any model in the Perplexity suite

## Models supported
- `sonar`
- `sonar-pro`  
[See full model list and capabilities](https://docs.perplexity.ai/models/model-cards)

## Usage

1. Set up your credentials in n8n under HTTP Bearer or Header Auth.
2. Add this workflow as a subworkflow using the “Execute Workflow” node.
3. Pass the desired `SystemPrompt` and `UserPrompt` as input variables.
4. Receive the model response in return.

## Notes

- This template is inactive by default and safe to import.
- Includes sticky notes with API references and model info.

## 📊 Basic Information

- **Workflow ID:** 4978
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 408
- **Downloads:** 40
- **Created:** 2025/6/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4978)

## 👤 Author

- **Name:** Aleksey Panov
- **Username:** @ampanov

## 🏷️ Categories

- Engineering
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×3)
- **executeWorkflowTrigger** 
- **set** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
