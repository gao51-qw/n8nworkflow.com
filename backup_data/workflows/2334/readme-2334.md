# Organise your local file directories with AI

> If you have a shared or personal drive location with a high frequency of files created by humans, it can become difficult to organise. This may not matter... until you need to search for something!

This n8n workflow works with the local filesystem to target the messy folder and categorise as well as organise its files into sub directories automatically.

## Disclaimer
Unfortunately due to the intended use-case, this workflow will not work on n8n Cloud and a self-hosted version of n8n is required.

## How it works
* Uses the local file trigger to activate once a new file is introduced to the directory
* The new file's filename and filetype are analysed using AI to determine the best location to move this file.
* The AI assess the current subdirectories as to not create duplicates. If a relevant subdirectory is not found, a new subdirectory is suggested.
* Finally, an Execute Command node uses the AI's suggestions to move the new file into the correct location.

## Requirements
* Self-hosted version of n8n. The nodes used in this workflow only work in the self-hosted version.
* If you are using docker, you must create a [bind mount](https://docs.docker.com/storage/bind-mounts/) to a host directory.
* Mistral.ai account for LLM model

## Customise this workflow

If the frequency of files created is high enough, you may not want the trigger to active on every new file created event. Switch to a timer to avoid concurrency issues.

## Want to go fully local?

A version of this workflow is available which uses Ollama instead. You can download this template here:
https://drive.google.com/file/d/1iqJ_zCGussXpfaUBYGrN5opziEFAEQMu/view?usp=sharing

## 📊 Basic Information

- **Workflow ID:** 2334
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 16926
- **Downloads:** 1692
- **Created:** 2024/7/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2334)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- File Management
- AI Summarization

## 🔗 Nodes Used

- **localFileTrigger** 
- **executeCommand** (×2)
- **set** (×2)
- **@n8n/n8n-nodes-langchain.lmChatMistralCloud** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** (×6)
- **if** 
- **splitOut** 
- **@n8n/n8n-nodes-langchain.chainLlm** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
