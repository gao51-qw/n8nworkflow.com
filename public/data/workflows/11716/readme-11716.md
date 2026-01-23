# Sync tasks between Notion and Todoist in both directions with Redis

> # Purpose

This solution enables you to manage all your Notion and Todoist tasks from different workspaces as well as your calendar events in a single place. This is 2 way sync with partial support for recurring 

# How it works

- The realtime sync consists of two workflows, both triggered by a registered webhook from either Notion or Todoist.
- To avoid overwrites by lately arriving webhook calls, every time the current task is retrieved from both sides.
- Redis is used to prevent from endless loops, since an update in one system triggers another webhook call again. Using the ID of the task, the trigger is being locked down for 80 seconds.
- Depending on the detected changes, the other side is updated accordingly .Generally Notion is treaded as the main source. Using an "Obsolete" Status, it is guaranteed, that tasks never get deleted entirely by accident.
- The Todoist ID is stored in the Notion task, so they stay linked together
- An additional full sync workflow daily fixes inconsistencies, if any of them occurred, since webhooks cannot be trusted entirely.
- Since Todoist requires a more complex setup, a tiny workflow helps with activating the webhook.
- Another tiny workflow helps generating a global config, which is used by all workflows for mapping purposes.

# Mapping (Notion &gt;&gt; Todoist)

- Name: Task Name
- Priority: Priority (1: do first, 2: urgent, 3: important, 4: unset)
- Due: Date
- Status: Section (Done: completed, Obsolete: deleted)
- &lt;page_link&gt;: Description (read-only)
- Todoist ID: &lt;task_id&gt;

# Current limitations

- Changes on the same task cannot be made simultaneously in both systems within a 15-20 second time frame.
- Subtasks are not linked automatically to their parent yet.
- Tasks names do not support URL’s yet.

## Credentials

Follow the video: 

- Setup credentials for Notion (access token), Todoist (access token) and Redis.

### Todoist

- Follow this video to get Todoist to obtain API Token.
    
    [Todoist Credentials.mp4](attachment:c9b434dc-98e8-44b9-b74f-a459395ef6a2:Todoist_Credentials.mp4)
    

### Notion

- Follow this video to get Notion Integration Secret.

[]()

### Redis

- Follow this video to get Redis

[]()

# Setup

*The setup involves quite a lot of steps, yet many of them can be automated for business internal purposes.*

Just follow the video or do the following steps:

- Setup credentials for Notion (access token), Todoist (access token) and Redis - you can also create empty credentials and populate these later during further setup
- Clone this workflow by clicking the "Use workflow" button and then choosing your n8n instance - otherwise you need to map the credentials of many nodes.
- Follow the instructions described within the bundle of sticky notes on the top left of the workflow

# How to use

- You can apply changes (create, update, delete) to tasks both in Notion and Todoist which then get synced over within a couple of seconds (this is handled by the differential realtime sync)
- The daily running full sync, resolves possible discrepancies in Todoist.

This workflow incorporates ideas and techniques inspired by Mario (https://n8n.io/creators/octionic/) whose expertise with specific nodes helped shape parts of this automation. Significant enhancements and customizations have been made to deliver a unique and improved solution.




## 📊 Basic Information

- **Workflow ID:** 11716
- **Complexity:** advanced
- **Node Count:** 85
- **Views:** 0
- **Downloads:** 0
- **Created:** 2025/12/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11716)

## 👤 Author

- **Name:** Yuvraj Singh
- **Username:** @yuvrajsingh

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **if** (×6)
- **filter** (×6)
- **redis** (×5)
- **notion** (×2)
- **set** (×5)
- **todoist** (×3)
- **httpRequest** (×8)
- **executionData** (×2)
- **stickyNote** (×24)
- **stopAndError** 
- **wait** 
- **noOp** 
- **code** (×8)
- **webhook** (×2)
- **switch** 
- **respondToWebhook** (×2)
- **form** (×5)
- **formTrigger** (×2)
- **crypto** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 85 nodes with 53 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
