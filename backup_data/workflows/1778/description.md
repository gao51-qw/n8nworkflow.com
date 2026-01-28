This workflow checks if the task in Todoist has a specific label and based on that creates a new database page in Notion.

## Prerequisites

- Todoist account and [Todoist credentials](https://docs.n8n.io/integrations/builtin/credentials/todoist/)
- Notion account and [Notion credentials](https://docs.n8n.io/integrations/builtin/credentials/notion/)

## How it works

1. To start the workflow add a task to Todoist and mark it with a label, e.g. “send-to-n8n”.
2. Wait a maximum of 30 seconds.
3. Todoist node identifies the tasks marked as “send-to-n8n”.
4. Notion node creates a new Notion database page. Notice Notion has a new task now with the same name as in Todoist.