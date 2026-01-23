# 🛠️ Process AI Output to Structured JSON with Robust JSON Parser

> ### How it works

This workflow is a robust and forgiving JSON parser designed to handle malformed or "dirty" JSON strings often returned by AI models or scraped from web pages. It takes a text string as input and attempts to extract and parse a valid JSON object from it.

1.  **Cleans Input:** It starts by trimming whitespace and removing common Markdown code fences (like ` ```json `) that might wrap the JSON.
2.  **Applies Multiple Fixes:** It systematically attempts to correct common JSON errors in a specific order:
    *   Escapes unescaped control characters (like newlines) within strings.
    *   Fixes invalid backslash escape sequences.
    *   Removes trailing commas.
    *   Intelligently attempts to fix unescaped double quotes inside string values.
3.  **Parses Strategically:** If a direct parse fails, it tries to extract a potential JSON object from the text (e.g., finding a `{...}` block inside a larger sentence) and then re-applies the cleaning logic to that extracted portion.
4.  **Outputs Clean Data:** If successful, it outputs the parsed JSON fields. By default, it removes the detailed `parsing_status` object, but you can deactivate the final "Set" node to keep it for debugging.

### Set up steps

**Setup time: ~1 minute**

This workflow is designed to be used as a sub-workflow and requires no internal setup.

1.  In your main workflow, add an **Execute Sub-Workflow** node where you need to parse a messy JSON string.
2.  In the **Workflow** parameter, select this "Robust JSON Parser" workflow.
3.  Ensure the data you send to the node is a JSON object containing a `text` field, where the value of `text` is the string you want to parse. For example: `{ "text": "{\\\"key\\\": \\\"some broken json...\\\"}" }`.
4.  The workflow will return the successfully parsed data. To see a detailed log of the cleaning process, simply deactivate the final `Remove parsing_status` node inside this workflow.

## 📊 Basic Information

- **Workflow ID:** 5146
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 3194
- **Downloads:** 319
- **Created:** 2025/6/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5146)

## 👤 Author

- **Name:** Lucas Peyrin
- **Username:** @lucaspeyrin

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **code** 
- **set** (×2)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
