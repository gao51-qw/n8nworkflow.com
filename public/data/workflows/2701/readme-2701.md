# Reschedule overdue Asana tasks and clean up completed tasks

> ## Description

Boost your productivity and keep your **Asana** workspace clutter-free with this n8n workflow. 

It automatically scans for **tasks whose due dates have passed** and **reschedules them to the current date**, ensuring no important to-dos slip through the cracks. 

Additionally, any completed tasks in Asana with an overdue date are removed, maintaining a clear, organized task list.


## Key Benefits

- **Streamline Task Management**: No more manual updates—let the workflow reschedule overdue tasks for you.
- **Optimize Workspace Organization**: Eliminate finished tasks to focus on active priorities and reduce clutter.
- **Save Time and Effort**: Automate repetitive maintenance, freeing you to concentrate on what truly matters.


## Configuration Steps

1. Add your **Asana** credentials
2. Schedule the workflow to run at desired intervals (e.g., daily or weekly).
3. Select your **Workspace Name** and your **Assignee Name** (user) in the **Get user tasks** node
4. *(Optional) Tailor filtering conditions to match your preferred due-date rules and removal criteria.*
5. **Activate the workflow** and watch your Asana workspace stay up to date and clutter-free. 

## 📊 Basic Information

- **Workflow ID:** 2701
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 2730
- **Downloads:** 273
- **Created:** 2025/1/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2701)

## 👤 Author

- **Name:** Bastien Laval
- **Username:** @bastien-laval

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **scheduleTrigger** 
- **asana** (×4)
- **if** (×2)
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
