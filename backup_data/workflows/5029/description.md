📄 Description:
This workflow helps you migrate customer records directly from Odoo v15 to Odoo v18 without the need for manual exports or intermediate files.

🔹 It connects to your v15 instance, retrieves customer (res.partner) records, and pushes them directly into your v18 database.
🔹 The workflow uses pagination (SplitInBatches) for efficient handling of large datasets.
🔹 Ideal for teams upgrading their Odoo infrastructure and looking to automate data replication between environments.

⚡️ Note: Country and state ID mapping is excluded in this version for faster migration. If needed, logic can be added to map based on name lookup.

🛠 Setup Instructions:
Configure Odoo API credentials for both v15 and v18. (https://docs.n8n.io/integrations/builtin/credentials/odoo/)
Adjust domain filters in the “Get Customers” node if needed.
Run the workflow to begin real-time customer syncing.

📌 Compatibility:
Works with Odoo Community & Enterprise
Tested on n8n v1.17+
Requires access to Odoo’s JSON-RPC API
