# AI agent that updates its own rules to modify behavior

> ## Video walkthrough

https://www.youtube.com/watch?v=OwIFK-r-NtQ

## Summary of agent
This agent can write and rewrite its own rules, allowing you to mold its behavior. It receives rules from a database as system instructions and has tools to create, edit, or delete them. This is a great baseline for new agent builds.

You can tell it things like "Next time, use present tense when talking about this subject" and it will use a tool to save this as a rule, then receive that instruction in all future iterations. 

## How to start using it

### Option 1: With a Postgres database (e.g., Supabase)
1.  **Supabase Schema:** Create a table (e.g., `agent_rules`) with the following columns:
    *   `id`: `bigint` (Primary Key, auto-incrementing)
    *   `created_at`: `timestamp with time zone` (Default: `now()`)
    *   `rule_text`: `text`
    *   `agent`: `text`
2.  **Workflow Updates:**
    *   Update the **Postgres credentials** in the "Get rules from database," "Insert rule into database," and "Execute query on rule database" nodes.
    *   Update the `agent` value (currently 'TestAgent') in the "Get rules from database" and "Insert rule into database" nodes if you want a different agent name.
    *   Update the **Anthropic API credentials**.

### Option 2: With Google Sheets
1.  **Google Sheet Setup:** Create a Google Sheet with columns for `rule_text` and `agent`.
2.  **Workflow Updates:**
    *   Example Google Sheets nodes are included. You will need to:
        *   Connect your **Google Sheets credentials**.
        *   Select your Google Sheet (with `rule_text` and `agent` columns) in all relevant Google Sheets nodes.
        *   Replace the existing Postgres nodes ("Get rules from database", "Insert rule into database", "Execute query on rule database") with the configured Google Sheets nodes.
    *   Update the `agent` value (currently 'TestAgent') in the Google Sheets nodes if you want a different agent name.
    *   Update the **Anthropic API credentials**.
    *   **Agent Instructions:** Update the agent's system message and remove the database schema section as it is no longer relevant

## 📊 Basic Information

- **Workflow ID:** 4694
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 1333
- **Downloads:** 133
- **Created:** 2025/6/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4694)

## 👤 Author

- **Name:** GiovanniSegar
- **Username:** @giosegar

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **postgres** 
- **merge** 
- **aggregate** 
- **postgresTool** (×2)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **stickyNote** (×2)
- **googleSheets** 
- **googleSheetsTool** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
