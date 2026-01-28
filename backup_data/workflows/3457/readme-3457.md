# Classify emails & extract structured data from job applications with GPT-4o

> ## Who is this template for?
This workflow template is designed for business owners and HR professionals to automatically detect and structure unstructured job applications received through email. Additionally, other email categories can be added, each with it's own workflow.

## How it works
- Every time a new email is received, an OpenAI model classifies it into a predefined category by analyzing the plain text of the email and the extracted content from the attachment.
- If the email is classified as a job application, an OpenAI model uses the email’s plain text and extracted attachment content to populate predefined fields such as age and study.
- A relevant additional step would be to directly push the applicant and their structured job application into a CRM or ATS like Hubspot or Recruitee.

## Set up steps
1. Configure your IMAP credentials to connect your email account. Use [this n8n documentation page](https://docs.n8n.io/integrations/builtin/credentials/imap/#related-resources) for quickstart guides for common email providers.
2. Connect your OpenAI account in the *'Classify email'* node.
	* And add or remove any category for classification in this node. Make sure the description is clear and concise.

	![Scherm­afbeelding 20250409 om 11.51.52.png](fileId:1093)
2. Connect your OpenAI account in the *'Extract variables - email & attachment'* node.
	* And add or remove any predefined fields that should be populated for job applications in this node. Make sure the description is clear and concise.

	![Scherm­afbeelding 20250409 om 11.54.48.png](fileId:1094)![Scherm­afbeelding 20250409 om 11.51.52.png](fileId:1093)

## 📊 Basic Information

- **Workflow ID:** 3457
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 722
- **Downloads:** 72
- **Created:** 2025/4/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3457)

## 👤 Author

- **Name:** Sleak
- **Username:** @sleak

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **emailReadImap** 
- **stickyNote** 
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **noOp** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
