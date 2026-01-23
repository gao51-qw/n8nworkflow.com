Make your n8n instance faster, cleaner, and more efficient by deleting old workflow executions — while keeping only the most recent ones you actually need. Whether you're using n8n Cloud or self-hosted, this lightweight workflow helps reduce database/storage usage and improves UI responsiveness, using only official n8n nodes.

## 🔍 Description
Automatically clean up old executions in your n8n instance using only official nodes — no external database queries required. Whether you're on the Cloud version or running self-hosted, this workflow helps you optimize performance and keep your instance tidy by maintaining only the most recent executions per workflow.

Ideal for users managing dozens or hundreds of workflows, this solution reduces storage usage and improves the responsiveness of the n8n UI, especially in environments where execution logs can accumulate quickly.

✅ What It Does
* Retrieves up to 250 recent executions across all workflows
* Groups executions by workflow
* Keeps only the most recent N executions per workflow (value  is configurable)
* Deletes all older executions (regardless of their status: success, error, etc.)
* Works entirely with native n8n nodes — no external database access required
* Optionally: set the number of executions to keep as 0 to delete all past executions from your instance in a single run

## 🛠️ How to Set Up
🔑 Create a Personal API Key in your n8n instance:
Go to Settings → API Keys → Create a new key

🔧 Create a new n8n API Credential (used by both nodes):
In your n8n credentials panel:

Name: anything you like (e.g., “Internal API Access”)

API Key: paste the Personal API Key you just created

Base URL: your full n8n instance URL with the /api/v1 path, e.g.
https://your-n8n-instance.com/api/v1

✅ Use this credential in both:

The Get Many Executions node (to fetch recent executions)

The Delete Many Executions node (to remove outdated executions)

🧩 In the “Set Executions to Keep” node:

Edit the variable executionsToKeep and set the number of most recent executions to retain per workflow (e.g. 10)

Tip: Set it to 0 to delete all executions

📦 Note: The “Get Many Executions” node will retrieve up to 250 executions per run — this is the maximum allowed by the n8n API.

🧠 No further setup is required — the filtering and grouping logic is handled inside the Code Node automatically.


## 🧪 Included Nodes Overview
🕒 Schedule Trigger → Set to run daily, weekly, etc.

📥 Get Many Executions → Fetches past executions via n8n API

🛠️ Set Executions to Keep → Set how many recent ones to keep

🧠 Code Node → Filters out executions to delete per workflow

🗑️ Delete Executions → Deletes outdated executions

## 💡 Why Use This?
Reduce clutter and improve performance in your n8n instance

Maintain execution logs only when they’re useful

Avoid bloating your storage or database with obsolete data

Compatible with both n8n Cloud and self-hosted setups

Uses only official, supported n8n nodes — no SQL, no extra setup

🔒 This workflow modifies and deletes execution data. Always review and test it first on a staging instance or on a limited set of workflows before using it in production.

