# Extract information from a logo sheet using forms, AI, Google Sheet and Airtable

> ## Instructions

This automation enables you to just **upload any Image (via Form)** of a Logo Sheet, containing multiple Images of Product Logos (most likely) which brings them in some context to one another. 

After submitting an **AI-Agent** eats **that Logo Sheet**, turning it into an List of "Productname" and "Attributes", also checks if Tools are kind of similar to another, given the Context of the Image.

We utilize AI Vision capabilities for that. **NOTE:** It might not be able to extract all informations. For a "upload and forget it" Workflow it works for me. You can even run it multiple times, to be sure. 

But if you need to make sure it extracts **everything** you might need to think about an Multi-Agent Setup with Validation-Agent Steps.

Once the Agent finishes the extraction, it will traditionally and deterministicly add those Attributes to Airtable (**Creates** those, if not already existing.) and also **Upserts** the Tool Informations.

It uses MD5 **Hashes** for turning Product Names into.. something fancy really, you could also use it without that, but I wanted to have something that looks atleast like an ID.  

### Setup

1. Set Up the Airtable like shown below.
2. Update and set Credentials for all Airtable Nodes.
3. Check or Adjust the Prompt of the Agent matching your use-case.
4. Activate the Workflow. 
5. Open the Form (default: https://your-n8n.io/form/logo-sheet-feeder)
6. Enjoy growing your Airtable.

![Image](https://cloud.let-the-work-flow.com/logo-64.png)  
Enjoy the workflow! ❤️  
[let the work flow](https://let-the-work-flow.com) — Workflow Automation & Development

## 📊 Basic Information

- **Workflow ID:** 2650
- **Complexity:** advanced
- **Node Count:** 44
- **Views:** 1347
- **Downloads:** 134
- **Created:** 2024/12/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2650)

## 👤 Author

- **Name:** Marcel Claus-Ahrens
- **Username:** @geckse

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **set** (×6)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **airtable** (×5)
- **merge** (×5)
- **splitInBatches** 
- **code** (×4)
- **stickyNote** (×11)
- **splitOut** (×3)
- **crypto** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **noOp** (×2)
- **html** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 44 nodes with 31 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
