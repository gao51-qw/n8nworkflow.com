# Send private welcome messages to new WhatsApp group members with Evolution API

> ## Who's it for

This template is perfect for community managers, business owners, and WhatsApp group administrators who want to create a welcoming experience for new members. Whether you're running a support group, managing a business community, or moderating a hobby group, this automation ensures every new member feels valued from the moment they join.

## How it works

The workflow automatically detects when someone joins your WhatsApp group and sends them a personalized welcome message directly to their private chat. It uses Evolution API to interface with WhatsApp Business and includes a natural delay to make the interaction feel more human. The entire process is hands-off once configured, ensuring consistent engagement with new members 24/7.

## What it does

1. **Monitors group activity** - Receives real-time notifications when members join or leave
2. **Filters for your specific group** - Ensures messages are only sent for your designated group
3. **Validates new joins** - Confirms the event is a member joining (not leaving)
4. **Adds natural timing** - Waits a customizable period before sending the message
5. **Sends private welcome** - Delivers your welcome message directly to the new member's chat

## Requirements

- **Evolution API instance** (self-hosted or cloud service)
- **WhatsApp Business account** connected to Evolution API
- **Group admin permissions** for the WhatsApp group
- **n8n instance** (self-hosted or cloud)

## How to set up

1. **Import the workflow** into your n8n instance
2. **Configure the Set Variables node** with:
   - Your WhatsApp group ID (format: xxxxxxxxxxxxx@g.us)
   - Evolution API key
   - Instance name from Evolution API
   - Evolution API URL
   - Custom welcome message
   - Delay time in minutes

3. **Copy the webhook URL** from the Webhook node
4. **Configure Evolution API** to send group notifications to your webhook URL
5. **Test the workflow** by having someone join your group
6. **Activate the workflow** for continuous operation

For a detailed video tutorial on setting up this workflow, check out: https://youtu.be/WO2MJoQqLvo

## How to customize the workflow

- **Welcome message**: Edit the message in the Set Variables node to match your group's tone
- **Timing**: Adjust the wait time to send messages immediately or after several minutes
- **Multiple groups**: Duplicate the workflow and change the group ID for each group
- **Rich media**: Extend the HTTP Request node to send images or documents with the welcome
- **Conditional messages**: Add IF nodes to send different messages based on time of day or member count
- **Follow-up sequence**: Chain additional HTTP Request nodes to create a welcome series

## 📊 Basic Information

- **Workflow ID:** 6462
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 1653
- **Downloads:** 165
- **Created:** 2025/7/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6462)

## 👤 Author

- **Name:** Anderson Adelino
- **Username:** @andersonadelino

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **stickyNote** (×4)
- **webhook** 
- **set** 
- **filter** 
- **if** 
- **wait** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
