# Avoid Asking Redundant Questions with Dynamically Generated Forms using OpenAI 

> # Avoid Asking Redundant Questions with Dynamically Generated Forms using OpenAI 
## Target Audience
This workflow has been built for those who require a form to capture as much data as possible as well as the answers to predefined questions, whilst optimising the user experience by avoiding asking redundant questions.
## Use Case
When creating a form to capture information, it can be useful to give the user an opportunity to input a long answer to a large, open-ended question. We then want to drill down to answer specific questions that we require the answer to. When doing this, we don't want to ask duplicate questions. This particular scenario imagines an AI consultancy capturing leads.
## What it Does
This workflow requires users to input basic information and then answer an open ended question. The specific questions on the next page will only be those that weren't answered in the open-ended question.
## How it Works
1. The open-ended question (and relevant basic information) is analysed by an LLM to determine which specific questions have not been answered. Chain-of-thought reasoning is utilised and the output structure is specified with the **Structured Output Parser**.
2. Those questions that have already been answered are filtered out nodes. The remaining items are then used to generate the last page of the form.
3. Once the user has filled in the final page of the form, they are shown a form completion page.
## Setup
1. Add your **OpenAI** credentials
2. Go to the **Get Basic Information** node and click **Test Step**
3. Complete the form to test the generic use case
4. Modify the prompt in **Analyse Response** to fit your use case
## Next Steps
- Add additional nodes to send an email to the form owner
- Add a subsequent LLM call to analyse the form response - those that are qualified should be given the opportunity to book an appointment

## 📊 Basic Information

- **Workflow ID:** 3062
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 3049
- **Downloads:** 304
- **Created:** 2025/3/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3062)

## 👤 Author

- **Name:** Chris Carr
- **Username:** @chriscarr

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **form** (×3)
- **formTrigger** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **filter** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **splitOut** 
- **set** 
- **aggregate** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
