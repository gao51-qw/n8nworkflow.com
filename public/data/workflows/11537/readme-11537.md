# Convert CDP network topology to Lucidchart prompts with AWX and Gemini AI

> # AI NETWORK DIAGRAM PROMPT GENERATOR


## Template Description

This workflow automates the creation of network diagram prompts using AI. It retrieves Layer-2 topology data from AWX, parses device relationships, and generates a clean, structured prompt ready for Lucidchart’s AI diagram generator.

## How It Works

The workflow triggers an AWX Job Template that runs commands such as show cdp neighbors detail. After the job completes, n8n fetches the stdout, extracts neighbor relationships through a JavaScript parser, and sends the structured data to an LLM (Gemini). The LLM transforms the topology into a formatted prompt you can paste directly into Lucidchart to instantly generate a visual network diagram.

## Setup Steps
1. Configure AWX:
- Ensure your Job Template runs the required network commands and produces stdout.
- Obtain your AWX base URL, credentials, and Job Template ID.
2. Add Credentials in n8n:
- Create AWX API credentials.
- Add Google Gemini credentials for the LLM node.
3. Update Workflow Nodes:
- Insert your AWX URL and Job Template ID in the “Launch Job” node.
- Verify endpoints in the “Job Status” and “Job Stdout” nodes.
4. Run the workflow:
- After execution, copy the generated Lucidchart prompt and paste it into Lucidchart’s AI to produce the network diagram.

## 📊 Basic Information

- **Workflow ID:** 11537
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 81
- **Downloads:** 8
- **Created:** 2025/12/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11537)

## 👤 Author

- **Name:** Mr Shifu
- **Username:** @gustavo-dorantes

## 🏷️ Categories

- Engineering
- Multimodal AI

## 🔗 Nodes Used

- **if** 
- **wait** 
- **httpRequest** (×3)
- **set** 
- **manualTrigger** 
- **code** (×3)
- **@n8n/n8n-nodes-langchain.googleGemini** (×2)
- **googleDocs** (×2)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
