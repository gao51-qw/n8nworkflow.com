# Automate droplet snapshots on DigitalOcean

> This workflow automates the management of DigitalOcean Droplet snapshots by listing all droplets, filtering based on the number of snapshots, and deleting excess snapshots before creating new ones. It ensures your droplet snapshots stay organized and within a manageable limit, preventing unnecessary storage costs due to an excess of snapshots.

### Who is this for?
This workflow is perfect for users managing DigitalOcean Droplets and looking to automate the process of snapshot creation and cleanup to save on storage costs and maintain efficient resource management. It’s useful for DevOps teams, cloud administrators, or any developer leveraging DigitalOcean for their infrastructure.

### What problem is this workflow solving?
When managing multiple DigitalOcean Droplets, snapshots can quickly accumulate, taking up space and increasing storage costs. Manually deleting and creating snapshots can be time-consuming and inefficient. This automation solves this problem by automating the snapshot management process, ensuring that no more than a defined number of snapshots are kept per droplet.

### What this workflow does
1. **Runs every 48 hours**: The workflow is triggered by a cron node that runs every 48 hours, ensuring timely snapshot management.
2. **List all droplets**: The workflow retrieves all droplets in the DigitalOcean account.
3. **Retrieve snapshots**: For each droplet, the workflow retrieves a list of existing snapshots.
4. **Filter snapshots**: If the number of snapshots exceeds 4, the workflow filters for snapshots that need to be deleted.
5. **Delete snapshots**: Excess snapshots are automatically deleted based on the filter criteria.
6. **Create new snapshot**: After cleaning up, the workflow creates a new snapshot for each droplet, ensuring that backups are always up-to-date.

### Setup
1. **DigitalOcean API Key**: You’ll need to configure the HTTP Request nodes with your DigitalOcean API key. This key is required for authenticating requests to list droplets, retrieve snapshots, delete snapshots, and create new ones.
2. **Snapshot Threshold**: By default, the workflow is set to keep no more than 4 snapshots per droplet. This can be adjusted by modifying the filter node conditions.
3. **Set Execution Frequency**: The cron node is set to run every 48 hours, but you can adjust the timing to suit your needs.

### How to customize this workflow
- **Adjust Snapshot Limit**: Change the value in the filter node if you want to keep more or fewer snapshots.
- **Modify Run Frequency**: The workflow runs every 48 hours by default. You can change the frequency in the cron node to run more or less often.
- **Enhance with Notifications**: You can add a notification node (e.g., Slack or email) to alert you when snapshots are deleted or created.

### Workflow Summary
This workflow automates the management of DigitalOcean Droplet snapshots by keeping the number of snapshots under a defined limit, deleting the oldest ones, and ensuring new snapshots are created at regular intervals.


## 📊 Basic Information

- **Workflow ID:** 2485
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 689
- **Downloads:** 68
- **Created:** 2024/10/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2485)

## 👤 Author

- **Name:** Darryn Balanco
- **Username:** @optimus01

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **filter** 
- **httpRequest** (×4)
- **cron** 
- **stickyNote** (×11)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
