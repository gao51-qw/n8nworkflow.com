# Generate & upload an audio summary of a WordPress (or Woocommerce) article

> This workflow automates the process of summarizing or transcribing a WordPress article, **converting the text into speech** using Eleven Labs API, and uploading the resulting MP3 file back to WordPress.

**How It Works**	
1.	Trigger – The workflow starts manually when the user clicks “Test Workflow”.
2.	Retrieve Article – It fetches a WordPress article based on a given post ID.
3.	Summarize or Transcribe – An LLM (GPT-4o-mini) generates either:
	•	A summary of the article, or
	•	A full transcription, depending on the chosen prompt.
4.	Generate Speech – The processed text (summary or transcription) is converted into an MP3 audio file using Eleven Labs API.
5.	Upload MP3 to WordPress – The generated MP3 file is uploaded to WordPress.
6.	Update WordPress Post – The article is updated with an embedded audio player, allowing users to listen to the summary or transcription.

**Set Up Steps**
	1.	WordPress API Credentials
	•	Configure your WordPress API credentials in n8n.
	2.	[Eleven Labs](https://try.elevenlabs.io/text-audio) API Key
	•	Obtain an API Key from Eleven Labs and configure it in n8n.
	3.	Choose Between Summary or Transcription
	•	Modify the AI prompt to either generate a summary or keep the full transcription.
	4.	Test the Workflow
	•	Run the workflow and ensure the MP3 file is correctly generated and uploaded.

**💡 Customization Options**
	•	Modify the AI prompt to switch between a summary and a transcription.
	•	Change the voice model in Eleven Labs for different speech styles.
	•	Adjust output format to higher/lower quality MP3.

🚀 This automation improves content accessibility and engagement by allowing users to listen to a summarized or full version of the article.


.

---
[Phil | Inforeole](https://inforeole.fr) | [Linkedin](https://www.linkedin.com/in/philippe-eveilleau-inforeole/)

🇫🇷 Contactez nous pour automatiser vos processus

## 📊 Basic Information

- **Workflow ID:** 3028
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 3081
- **Downloads:** 308
- **Created:** 2025/2/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3028)

## 👤 Author

- **Name:** phil
- **Username:** @phil

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **wordpress** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **httpRequest** (×2)
- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
