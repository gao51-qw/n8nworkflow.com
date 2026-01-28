# Extract meeting details with GPT-4.1-mini and evaluate accuracy in Google Sheets

> ## Who's it for

Developers building AI-powered workflows who want to ensure their agents work reliably. If you need to validate AI outputs, test agent behavior systematically, or build maintainable automation, this template shows you how.

## What it does

This subworkflow extracts structured meeting details (title, date, time, location, links, attendees) from natural language messages using an AI agent. It demonstrates production-ready patterns:

- **Structured output validation**: JSON schema enforcement prevents malformed responses
- **Error handling**: Graceful failures with full execution traceability
- **Automated evaluation**: Test agent accuracy against expected outputs using Google Sheets
- **Dual execution modes**: Normal extraction + evaluation/testing mode

The AI resolves relative time ("tomorrow", "next Friday") using timezone context and handles incomplete data gracefully.

## How to set it up

1. Connect OpenAI API credential to the AI agent node
2. Copy the test data sheet: https://docs.google.com/spreadsheets/d/1U89nPsasM2WNv1D7gEYINhDwylyxYw7BOd_i8ipFC0M/edit?usp=sharing
3. Update Google Sheet IDs in `load_eval_data` and `record_eval_output` nodes
4. Test normal mode: Execute workflow "from trigger"
5. Test evaluation mode: Execute workflow "from load_eval_data"

## Requirements

- OpenAI API key
- Google Sheets OAuth credential


## Why subworkflow architecture?

**Reusability**: Wrap AI agents in subworkflows to call them from multiple parent workflows. Extract meetings from Slack, email, or webhooks—same agent, consistent results.

**Testability**: This pattern enables isolated testing for each AI component. Set up evaluation datasets, run automated tests, and validate accuracy before deploying to production. You can't do this easily with inline agents.

**Maintainability**: Update the agent logic once, and all parent workflows benefit. Error handling and validation are built-in, so failures are traceable with execution IDs.

**This framework includes**:
- Dual-trigger pattern (normal + evaluation modes)
- Output validation that catches silent AI failures
- Error bubbling with execution metadata for debugging
- Evaluation framework with semantic/exact matching
- Proper routing that returns output to parent workflows

## Following this pattern for other agents

To adapt this for any AI task (contact extraction, invoice processing, sentiment analysis, etc.):

1. Replace `extract_meeting_details` with your AI agent (add tools, memory, etc. as needed)
2. Update `Structured Output Parser` schema to match your data structure
3. Modify `evaluate_match` prompt for your validation criteria
4. Create test cases in Google Sheets with your inputs/expected outputs
5. Adjust `normalize_eval_data` timezone/reference time if needed

The validation, error handling, and evaluation infrastructure stays the same regardless of what your agent does.

## 📊 Basic Information

- **Workflow ID:** 12527
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 3
- **Downloads:** 0
- **Created:** 2026/1/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12527)

## 👤 Author

- **Name:** Sergey Filippov
- **Username:** @sergey-filippov

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **set** (×3)
- **evaluationTrigger** 
- **noOp** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **if** (×2)
- **stopAndError** 
- **evaluation** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
