# Analyze images from forms using GPT-4o-mini Vision and deliver to Telegram

> ## This workflow analyzes images submitted via a form using OpenAI Vision, then delivers the analysis result directly to your Telegram chat.

✅ **Use case examples**:
	•	Users submit screenshots for instant AI interpretation
	•	Automated document or receipt analysis with Telegram delivery
	•	Quick OCR or image classification workflows

⸻

**⚙️ Setup Guide**
	1.	Form Submission Trigger
	•	Connect your form app (e.g. Typeform, Tally, or n8n’s own webhook form) to the On form submission trigger node.
	•	Ensure it sends the image file or URL as input.
	2.	OpenAI Vision Analysis
	•	In the OpenAI node, select Analyze Image operation.
	•	Provide your OpenAI API key and configure the prompt to instruct the model on what to analyze (e.g. “Describe this receipt in detail”).
	3.	Set Telegram Chat ID
	•	Use this manual node to input your Telegram Chat ID for delivery.
	•	Alternatively, automate this with a database lookup or user session if building for multiple users.
	4.	Telegram Delivery Node
	•	Connect your Telegram Bot to n8n using your bot token.
	•	Set up the sendMessage operation, using the analysis result from the previous node as the message text.
	5.	Testing
	•	Click Execute workflow.
	•	Submit an image via your form and confirm it delivers to your Telegram as expected.

## 📊 Basic Information

- **Workflow ID:** 5507
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 3738
- **Downloads:** 373
- **Created:** 2025/7/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5507)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **set** 
- **telegram** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
