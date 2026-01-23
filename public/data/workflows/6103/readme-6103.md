# Comprehensive contact enrichment with Apollo, LinkedIn, and GPT-4o for HubSpot

> ### Summary
Turns a plain name + email into a fully-enriched HubSpot contact by matching the person in Apollo, pulling their latest LinkedIn activity, summarising the findings with GPT-4o, and upserting the clean data into HubSpot

### Key use-cases
SDRs enriching inbound demo requests before routing

RevOps teams keeping executive records fresh

Marketers building highly-segmented email audiences

### Inputs
|Field	|Type|	Example|
|-|-|-|
name	|string|	“Jane Doe”
email|	string	|“jane@acme.com”

### Required credentials
|Service	|Node	|Notes|
|-|-|-|
Apollo.io API key |	HTTP Request – “Enrich with Apollo”	|Set in header x-api-key
RapidAPI key| (Fresh-LinkedIn-Profile-Data)	“Get recent posts”|	Header x-rapidapi-key
OpenAI	3 LangChain nodes|	Supply an API key| default model gpt-4o-mini
HubSpot OAuth2|	“Enrich in HubSpot”|	Add/create any custom contact properties referenced

High-level flow
Trigger – Runs when another workflow passes name & email.

Clean – JS Code node normalises & deduplicates emails.

Apollo match – Queries /people/match; skips if no person.

LinkedIn fetch – Grabs up to 3 original posts from last 30 days.

AI summary chain

OpenAI → Structured/Auto-fixing parsers

Produces a strict JSON block with job title, location, summaries, etc.

HubSpot upsert – Maps every key (plus five custom properties) into the contact record.

Sticky-notes annotate the canvas; error-prone bits have retry logic.

## 📊 Basic Information

- **Workflow ID:** 6103
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 693
- **Downloads:** 69
- **Created:** 2025/7/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6103)

## 👤 Author

- **Name:** Interlock GTM
- **Username:** @interlockgtm

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **httpRequest** (×2)
- **if** 
- **hubspot** 
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **stickyNote** (×5)
- **merge** 
- **splitOut** 
- **filter** 
- **limit** 
- **sort** 
- **aggregate** 
- **splitInBatches** 
- **set** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
