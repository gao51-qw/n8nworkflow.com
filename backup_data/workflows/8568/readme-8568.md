# Create structured logging system with Supabase and Log4j2-style levels

> Create centralized, structured logs directly from your n8n workflows, using Supabase as your scalable log database.

Whether you're debugging a workflow, monitoring execution status, or tracking error events, this template makes it easy to log messages in a consistent, structured format inspired by Log4j2 levels (DEBUG, INFO, WARN, ERROR, FATAL).

You’ll get a reusable sub-workflow that lets you log any message with optional metadata, tied to a workflow execution and a specific node.

## What this template does

- Provides a sub-workflow that inserts log entries into Supabase.

- Each log entry supports the following fields:
   - workflow_name: Your n8n workflow identifier
   - node_name: last executed node
   - execution_id: n8n execution ID for correlation
   - log_level: One of DEBUG, INFO, WARN, ERROR, FATAL
   - message: Textual message for the log
   - metadata: Optional JSON metadata (flexible format)

- Comes with examples for diffrerent log levels:
Easily call the sub-workflow from any step with a Execute Workflow node and pass dynamic parameters.


## Use Cases

- Debug complex workflows without relying on internal n8n logs.
- Catch and trace errors with contextual metadata.
- Integrate logs into external dashboards or monitoring tools via Supabase SQL or APIs.
- Analyze logs by level, time, or workflow.


## Requirements

To use this template, you'll need:
- A Supabase project with:
  - A log_level_type enum
  - A logs table matching the expected structure 
- A service role key or supabase credentials available in n8n.

The table shema and SQL scripts are given in the template file.

## How to Use This Template

- Clone the sub-workflow into your n8n instance.
- Set up Supabase credentials (in the Supabase node).
- Call the sub-workflow using the Execute Workflow node.
- Provide input values like:

```
{
  "workflow_name": "sync_crm_to_airtable",
  "execution_id": {{$execution.id}},
  "node_name": "Airtable Insert",
  "log_level": "INFO",
  "message": "New contact pushed to Airtable successfully",
  "metadata": {
    "recordId": "rec123",
    "fields": ["email", "firstName"]
  }
}
```

- Repeat anywhere you need to log custom events.

## 📊 Basic Information

- **Workflow ID:** 8568
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 149
- **Downloads:** 14
- **Created:** 2025/9/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8568)

## 👤 Author

- **Name:** Elodie Tasia
- **Username:** @ladypixl

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **stickyNote** (×4)
- **executeWorkflowTrigger** 
- **supabase** 
- **errorTrigger** 
- **code** (×2)
- **executeWorkflow** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
