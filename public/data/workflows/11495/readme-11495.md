# Automatically optimize AI prompts with OpenAI using OPRO & DSPy methodology

> This workflow implements cutting-edge concepts from **Google DeepMind's OPRO** (Optimization by PROmpting) and **Stanford's DSPy** to automatically refine AI prompts. It iteratively generates, evaluates, and optimizes responses against a ground truth, allowing you to "compile" your prompts for maximum accuracy.

## Why this is powerful

Instead of manually tweaking prompts (trial and error), this workflow treats prompt engineering as an **optimization problem**:
- **OPRO-style Optimization**: The "Optimizer" LLM analyzes past performance scores and reasons to mathematically deduce a better prompt.
- **DSPy-style Logic**: It separates the "Logic" (Workflow) from the "Parameters" (Prompts), allowing the system to self-correct until it matches the Ground Truth.

## How it works

- **Define**: Set your initial prompt and a test case with the expected answer (Ground Truth).
- **Generate**: The workflow generates a response using the current prompt.
- **Evaluate**: An AI Evaluator scores the response (0-100) based on accuracy and format.
- **Optimize**: If the score is low, the Optimizer AI analyzes the failure and rewrites the prompt.
- **Loop**: The process repeats until the score reaches 95/100 or the loop limit is hit.

## Setup steps

1. **Configure OpenAI**: Ensure you have an OpenAI credential set up in the `OpenAI Chat Model` node.
2. **Customize**: Open the `Define Initial Prompt & Test Data` node and set your `initial_prompt`, `test_input`, and `ground_truth`.
3. **Run**: Execute the workflow and check the `Manage Loop & State` node output for the optimized prompt.


## 📊 Basic Information

- **Workflow ID:** 11495
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 247
- **Downloads:** 24
- **Created:** 2025/12/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11495)

## 👤 Author

- **Name:** Shun Nakayama
- **Username:** @nakayama

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×4)
- **manualTrigger** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **code** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **if** 
- **noOp** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
