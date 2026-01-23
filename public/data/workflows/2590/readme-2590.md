# Daily GitHub release notification by email

> Automating daily notifications of the latest releases from a GitHub repository. This template is ideal for developers and project managers looking to stay up-to-date with software updates.

**How it Works:**

- Daily Trigger: The workflow initiates daily using the Schedule Trigger node.
- Fetch Repository Data: The HTTP Request node retrieves the latest release details from the specified GitHub repository.
- Check if new: The IF node check if the release was done in the last 24 hours.
- Split Content: The Split Out node processes the JSON response to extract and structure relevant data.
- Convert Markdown: The Markdown node converts release notes from Markdown format to HTML, making them ready to use in emails.
- Send a notification by email

**Key Features:**

- Simple to customize by modifying the GitHub URL.
- Automatically processes and formats release notes for better readability.
- Modular design, allowing integration with other workflows like Gmail or Slack notifications.

**Setup Steps:**

- Modify Repository URL: Update the Sticky Note node with the URL of the repository you want to monitor.
- Modify SMTP details: Update the Send Email node with your SMTP details.


## 📊 Basic Information

- **Workflow ID:** 2590
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 1972
- **Downloads:** 197
- **Created:** 2024/11/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2590)

## 👤 Author

- **Name:** Dionysus
- **Username:** @dionysus

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **httpRequest** 
- **splitOut** 
- **markdown** 
- **scheduleTrigger** 
- **stickyNote** (×2)
- **emailSend** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
