# Client proposal generator with GPT-4o, Tally.so, and Google Slides for agencies

> This workflow uses Tally.so to collect client input that you input yourself during the meeting or after from a simple form and send that data to n8n via an API webhook. Once received, n8n processes the information and uses OpenAI to expand on the provided details transforming the short client notes into a complete, well-structured proposal.

After generating the proposal, the workflow automatically:

Drafts a professional follow-up email using the generated proposal details.

Prepares the email inside Gmail, ready for your review and final send.

This creates a fast, automated process turning raw meeting notes into a polished, client-ready deliverable within minutes.

## 📊 Basic Information

- **Workflow ID:** 10777
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 334
- **Downloads:** 33
- **Created:** 2025/11/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10777)

## 👤 Author

- **Name:** Jason Stelo
- **Username:** @jasonstelo

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **googleSlides** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **gmail** 
- **googleDrive** 
- **code** 
- **set** 
- **stickyNote** (×10)
- **formTrigger** 
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
