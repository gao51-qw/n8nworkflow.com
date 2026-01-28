# Send monthly Toggl time tracking summary via Resend email

> ## Description
This workflow fetches Toggl Track summary data for the previous month, aggregates hours per client and project, and emails a clean HTML report via Resend.

## How it works
1) Compute previous month period.
2) Fetch Toggl summary (grouping=clients, sub_grouping=projects).
3) Fetch clients and projects for proper names.
4) Merge and aggregate seconds to hours.
5) Generate HTML raport. 
6) Send raport via Resend API.

## Requirements
- Toggl free account (Login, Pass, TOGGL_WORKSPACE_ID).
- Resend.com free account (RESEND_API_KEY).

## Customization
- Change trigger time in the Schedule Trigger node.
- Modify period calculation for weekly/quarterly in Get Toggle Summary node.
- Add archived projects by querying with active=false&archived=true and merging.

## Documentation
- [Toggle docs](https://engineering.toggl.com/docs/)
- [Resend.com docs](https://resend.com/docs/)

## Author
Krystian Syryca - [krsweb.pl](https://krsweb.pl/automatyzacja-raportow-toggl-w-n8n/)


## 📊 Basic Information

- **Workflow ID:** 9864
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 131
- **Downloads:** 13
- **Created:** 2025/10/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9864)

## 👤 Author

- **Name:** Krystian Syryca
- **Username:** @krsweb

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **httpRequest** (×3)
- **scheduleTrigger** 
- **stickyNote** (×6)
- **code** (×2)
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
