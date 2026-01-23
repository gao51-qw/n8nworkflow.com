# Monitor if a page is alive and notify via Twilio SMS if not

> ## Workflow Purpose

This workflow periodically checks a service's availability and sends an SMS notification if the service is down.

## High-Level Steps

Schedule Trigger: The workflow is triggered at a specified interval, such as every minute.
HTTP Request: An HTTP request is sent to the URL of the service being monitored.
If: The HTTP status code of the response is checked.
If the status code is 200 (OK), the workflow ends.
If the status code is not 200, indicating a potential issue, an SMS notification is sent using Twilio.

## Setup
Setting up this workflow is relatively straightforward and should only take a few minutes:

1. Create a new n8n workflow.
2. Add the nodes: Schedule Trigger, HTTP Request, If, and Twilio.
3. Configure the nodes:
- Schedule Trigger: Specify the desired interval.
- HTTP Request: Enter the URL of the service to be monitored.
- If: Set the condition to check for a status code other than 200.
4. Twilio: Enter the Twilio account credentials and the phone numbers for sending and receiving the SMS notification.
5. Connect the nodes: Connect the nodes as shown in the workflow diagram.
6. Activate the workflow: Save the workflow and activate it.


## Additional Notes

- The workflow can be customized by changing the interval, the URL, the Twilio credentials, and the SMS message.
- This workflow is a simple example, and more complex workflows can be created to meet specific needs.

## 📊 Basic Information

- **Workflow ID:** 2524
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 2818
- **Downloads:** 281
- **Created:** 2024/11/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2524)

## 👤 Author

- **Name:** Rui Borges
- **Username:** @rpb-dev

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** 
- **twilio** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
