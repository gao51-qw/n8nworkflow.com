# Handling job application submissions with AI and n8n forms

> This n8n template leverages n8n's multi-form feature to build a 2 part job application submission journey which aims to eliminate the need for applicants to re-enter data found on their CVs/Resumes.

## How it works
* The application submission process starts with an n8n form trigger to accept CV files in the form of PDFs.
* The PDF is validated using the text classifier node to determine if it is a valid CV else the applicant is asked to reupload.
* A basic LLM node is used to extract relevant information from the CV as data capture. A copy of the original job post is included to ensure relevancy.
* Applicant's data is then sent to an ATS for processing. For our demo, we used airtable because we could attach PDFs to rows.
* Finally, a second form trigger is used for the actual application form. However, it is prefilled to save the applicant's time and allow them to amend any of the generated application fields.

## How to use
* Ensure to change the redirect URL in the **form ending** node to use the host domain of your n8n instance.

## Requirements
* OpenAI for LLM
* Airtable to capture applicant data

## Customising the workflow
* Application form is pretty basic for this demonstration but could be extended to ask more in-depth questions.
* If it fits the job, why not ask applicants to upload portfolio works and have AI describe/caption them.

## 📊 Basic Information

- **Workflow ID:** 2579
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 12370
- **Downloads:** 1237
- **Created:** 2024/11/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2579)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **formTrigger** (×2)
- **airtable** (×2)
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **httpRequest** 
- **form** (×4)
- **stickyNote** (×8)
- **@n8n/n8n-nodes-langchain.chainLlm** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
