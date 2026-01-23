# Poll multiple Gmail accounts with unified data table storage & Discord notifications

> ![Screenshot 20251216 001014.png](fileId:3669)

This template lets you poll multiple Gmail accounts from a single workflow using n8n’s credential-aware execution. Instead of creating separate workflows for every inbox, this setup loops through all accounts stored in your data table and runs Gmail operations dynamically using the correct OAuth2 credential.

It’s built for cases like *cold-email systems, multi-client mail monitoring*, or anything that needs centralized polling and logging.

## ### What It Does

1. Pulls all email account records from the cold_email_accounts table.

2. For every account, the workflow:

3. Runs the Gmail “Get Many Messages” node for that account using "Run Node With Credentials X" community node.


4. Messages are reformatted into a clean JSON object (from, subject, preview text, body, labels, attachments, etc.).

5. Saved into the All Emails table using an upsert (avoids duplicates).

6. Sends a Discord notification like “15 new emails arrived”.

## ### How to Set It Up

1. Create Gmail OAuth2 credentials in n8n, one for each email account you want to poll.

2. Add those credentials into a Data Table named cold_email_accounts with columns:
cred_id
credentials_name
email
last_polled (datetime)

3. Import this workflow template into n8n.

4. Update:
DataTable references (if your names/IDs differ)
Discord channel/server IDs
Any domain filters inside the Gmail search query

5. Activate the workflow and it will automatically:
Poll each Gmail inbox every hour
Save all new emails
Notify you on Discord
Keep everything synced via last_polled.

## 📊 Basic Information

- **Workflow ID:** 11721
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 24
- **Downloads:** 2
- **Created:** 2025/12/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11721)

## 👤 Author

- **Name:** Jatin Khatri
- **Username:** @jatinkhatri

## 🏷️ Categories

- Ticket Management

## 🔗 Nodes Used

- **n8n-nodes-run-node-with-credentials-x.runNodeWithCredentialsX** 
- **scheduleTrigger** 
- **code** (×2)
- **dataTable** (×5)
- **splitInBatches** 
- **set** 
- **discord** 
- **stickyNote** (×6)
- **limit** 
- **if** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
