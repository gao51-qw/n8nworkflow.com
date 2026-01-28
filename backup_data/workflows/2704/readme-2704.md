# ServiceNow incident notifications to Slack workflow

> ### Who is this for?

This workflow is ideal for IT operations teams or system administrators who use ServiceNow to track incidents and Slack for team communication. It provides real-time updates on new ServiceNow incidents directly in a designated Slack channel, ensuring timely response and collaboration.

### What problem is this workflow solving? / Use case

Manually monitoring ServiceNow for new incidents can be time-consuming and prone to delays. This workflow automates the process, ensuring that team members are instantly notified of new incidents, complete with all relevant details, in a Slack channel. It enhances operational efficiency and incident response time.

### What this workflow does

1. **Schedule or Manual Trigger**: The workflow can be triggered manually or set to run automatically every 5 minutes.
2. **Retrieve New Incidents**: Fetches incidents created in ServiceNow within the last 5 minutes.
3. **Error Handling**: Posts an error message in Slack if there are issues connecting to ServiceNow.
4. **Incident Processing**:
    - If new incidents are found, they are sorted in ascending order by their number.
    - Detailed incident information is formatted and sent to a specified Slack channel.
5. **No Incidents**: If no new incidents are found, the workflow does nothing.

### Setup

1. **ServiceNow API Credentials**: Configure ServiceNow Basic Authentication in the workflow to connect to your ServiceNow instance.
2. **Slack API Credentials**: Add your Slack API credentials to enable message posting.
3. **Slack Channel Configuration**:
    - Define the Slack channel where notifications should be sent.
    - Ensure the channel ID is correctly set in the Slack node.
4. **Adjust the Schedule**: Modify the schedule in the `Schedule Trigger` node to suit your requirements.

### How to customize this workflow to your needs

1. **Notification Format**:
    - Customize the Slack message format to include additional or fewer details.
    - Update the `Blocks` section in the Slack node for personalized messages.
2. **Incident Query Parameters**:
    - Adjust the `sysparm_query` parameter in the ServiceNow node to filter incidents based on specific criteria.
3. **Error Handling**:
    - Modify the error message in the Slack node for more detailed troubleshooting information.

### Features

- **Real-Time Notifications**: Immediate updates on new ServiceNow incidents.
- **Error Handling**: Alerts in Slack if the workflow encounters issues connecting to ServiceNow.
- **Customizable Notifications**: Flexibility to modify incident details sent to Slack.

This workflow streamlines incident management and fosters collaboration by delivering actionable updates directly to your team.

## 📊 Basic Information

- **Workflow ID:** 2704
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 2994
- **Downloads:** 299
- **Created:** 2025/1/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2704)

## 👤 Author

- **Name:** Angel Menendez
- **Username:** @djangelic

## 🏷️ Categories

- Ticket Management

## 🔗 Nodes Used

- **manualTrigger** 
- **scheduleTrigger** 
- **dateTime** 
- **serviceNow** 
- **if** 
- **slack** (×2)
- **sort** 
- **noOp** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
