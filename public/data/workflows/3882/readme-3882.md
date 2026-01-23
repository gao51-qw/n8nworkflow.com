# Error handling system with PostgreSQL logging and rate-limited notifications

> # Log errors and avoid sending too many emails

## Use case

Most of the time, it’s necessary to log all errors that occur. However, in some cases, a scheduled task or service consuming excessive resources might trigger a surge of errors.

To address this, we can log all errors but limit alerts to a maximum of one notification every 5 minutes.

## What this workflow does

This workflow can be configured to receive error events, or you can integrate it **before your own error-handling logic.**  

If used as the **primary error handler**, note that this flow will **only add a database log entry** and take no further action. You’ll need to add your own alerts (e.g., email or push notifications). Below is an example of a notification setup I prefer to use.  

At the end, there’s an **error cleanup** option. This feature is particularly useful in development environments.  

If you already have an error-handling workflow, you can call this one as a **sub-workflow**. Its final steps include cleanup logic to reset the execution state and terminate the workflow.

## Setup

**Verify all Postgres nodes and credentials when using the 'Error Handling Sample'**

## How to adjust it to your needs

1) You can set this workflow as a sub-workflow within your existing error-handling setup.

2) Alternatively, you can add the "Error Handling Sample" at the end of this workflow, which sends email and push notifications.

Configuration Requirements:

⚠️ You must create a database table for this to work!



DDL of this sample:

create table p1gq6ljdsam3x1m."N8Err"
(
    id         serial
        primary key,
    created_at timestamp,
    updated_at timestamp,
    created_by varchar,
    updated_by varchar,
    nc_order   numeric,
    title      text,
    "URL"      text,
    "Stack"    text,
    json       json,
    "Message"  text,
    "LastNode" text
);

alter table p1gq6ljdsam3x1m."N8Err"
    owner to postgres;

create index "N8Err_order_idx"
    on p1gq6ljdsam3x1m."N8Err" (nc_order);

by Davi Saranszky Mesquita
https://www.linkedin.com/in/mesquitadavi/

## 📊 Basic Information

- **Workflow ID:** 3882
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 630
- **Downloads:** 63
- **Created:** 2025/5/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3882)

## 👤 Author

- **Name:** Davi Saranszky Mesquita
- **Username:** @frkr

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **errorTrigger** 
- **postgres** (×3)
- **stickyNote** (×3)
- **emailSend** (×2)
- **pushover** 
- **manualTrigger** 
- **executeWorkflow** 
- **executeWorkflowTrigger** 
- **if** 
- **code** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
