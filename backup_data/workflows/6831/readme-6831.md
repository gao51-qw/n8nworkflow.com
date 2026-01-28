# Real-time ClickUp time tracking to HubSpot project sync

> ### **Real-Time ClickUp Time Tracking to HubSpot Project Sync**

This workflow automates the synchronization of time tracked on ClickUp tasks directly to a custom project object in HubSpot, ensuring your project metrics are always accurate and up-to-date.

---

### **Use Case & Problem**

This workflow is designed for teams that use a **custom object in HubSpot** for high-level project overviews (tracking scoped vs. actual hours per sprint) but manage daily tasks and time logging in **ClickUp**. The primary challenge is the constant, manual effort required to transfer tracked hours from ClickUp to HubSpot, a process that is both time-consuming and prone to errors. This automation eliminates that manual work entirely.

---

### **How It Works**

* **Triggers on Time Entry:** The workflow instantly starts whenever a user updates the time tracked on any task in a specified ClickUp space. ⏱️
* **Fetches Task & Time Details:** It immediately retrieves all relevant data about the task (like its name and custom fields) and the specific time entry that was just updated.
* **Identifies the Project & Sprint:** The workflow processes the task data to determine which HubSpot project it belongs to and categorizes the work into the correct sprint (e.g., Sprint 1, Sprint 2, Additional Requests).
* **Updates HubSpot in Real-Time:** It finds the corresponding project record in HubSpot and updates the master `actual_hours_tracked` property. It then intelligently updates the specific field for the corresponding sprint (e.g., `actual_sprint_1_hours`), ensuring your reporting remains granular and accurate.

---

### **Requirements**

✅ **ClickUp Account** with the following custom fields on your tasks:
* A **Dropdown** custom field named `Sprint` to categorize tasks.
* A **Short Text** custom field named `HubSpot Deal ID` or similar to link to the HubSpot record.

✅ **HubSpot Account** with:
* A **Custom Object** used for project tracking.
* **Custom Properties** on that object to store total and sprint-specific hours (e.g., `actual_hours_tracked`, `actual_sprint_1_hours`, `total_time_remaining`, etc.).

&gt; **Note:** Since this workflow interacts with a **custom HubSpot object**, it uses flexible HTTP Request nodes instead of the standard n8n HubSpot nodes.

---

### **Setup Instructions**

1.  **Configure Credentials:** Add your ClickUp (OAuth2) and HubSpot (Header Auth with a Private App Token) credentials to the respective nodes in the workflow.
2.  **Set ClickUp Trigger:** In the **`Time Tracked Update Trigger`** node, select your ClickUp team and the specific space you want to monitor for time updates.
3.  **Update HubSpot Object ID:** Find the ID of your custom project object in HubSpot. In the HubSpot HTTP Request nodes (e.g., `OnProjectFolder`), replace the placeholder ID `objectTypeId` in the URL with your own objectTypeId

---

### **How to Customize**

* Adjust the **`Code: Extract Sprint & Task Data`** node to change how sprint names are mapped or how time is calculated.
* Update the URLs in the HubSpot HTTP Request nodes if your custom object or property names differ.

## 📊 Basic Information

- **Workflow ID:** 6831
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 194
- **Downloads:** 19
- **Created:** 2025/8/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6831)

## 👤 Author

- **Name:** Stephan Koning
- **Username:** @reklaim

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **clickUp** (×2)
- **merge** 
- **code** 
- **clickUpTrigger** 
- **httpRequest** (×3)
- **stickyNote** (×2)
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
