# Automate personalized assignment reminders for students with Canvas

> ## Canvas: Send students their pending assignments

### How it works
1. Trigger the workflow and set the Canvas base URL and target course name.
2. Fetch all instructor courses and locate the course ID that matches the name.
3. Retrieve enrolled students and their unsubmitted submissions for the course, handling paginated results.
4. Merge student records with submission data, convert due dates to local time, and build a per-student summary.
5. Send a Canvas conversation to each student with a personalized list of pending assignments and links.

### Setup
- [ ] Connect Canvas API credentials (Bearer and header auth used by the workflow).
- [ ] Enter your Canvas base URL (e.g. https://your_educational_institution.instructure.com).
- [ ] Set the exact course name to check for pending work.
- [ ] Confirm the teacher account can view students and send conversations.
- [ ] Run the workflow manually to verify output and delivery.
- [ ] Edit the message subject or body template if you need different wording.


## 📊 Basic Information

- **Workflow ID:** 11746
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 102
- **Downloads:** 10
- **Created:** 2025/12/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11746)

## 👤 Author

- **Name:** Alysson Neves
- **Username:** @alysson

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×2)
- **stickyNote** (×7)
- **filter** 
- **httpRequest** (×4)
- **code** (×5)
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
