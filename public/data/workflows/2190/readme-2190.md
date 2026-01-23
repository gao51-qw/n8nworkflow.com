# Create new Clickup tasks from Slack commands

> ## Create new Clickup Tasks from Slack commands
This workflow aims to make it easy to create new tasks on Clickup from normal Slack messages using simple slack command. 

For example We can have a slack command as 

/newTask Set task to update new contacts on CRM and assign them to the sales team
This will have an new task on Clickup with the same title and description on Clickup 

For most teams, getting tasks from Slack to Clickup involves manually entering the new tasks into Clickup. What if we could do this with a simple slash command?

## Step 1
The first step is to Create an endpoint URL for your slack command by creating an events API from the link [below] https://api.slack.com/apps/)

## STEP 2 
Next step is defining the endpoint for your URL
Create a new webhook endpoint from your n8n with a POST and paste the endpoint URL to your event API. This will send all slash commands associated with the Slash to the desired endpoint

## Step 3
Log on to slack API (https://api.slack.com/) and create an application. This is the one we use to run all automation and commands from Slack. Once your app is ready, navigate to the Slash Commands and create a new command
 ![image.png](fileId:784)

This will include the command, the webhook URL and a description of what the slash command is all about
![image.png](fileId:786)

Now that this is saved you can do a test by sending a demo task to your endpoint
![image.png](fileId:785)
Once you have tested the webhook slash command is working with the webhook, create a new Clickup API that can be used to create new tasks in ClickUp



This workflow creates a new task with the start dates on Clikup that can be assigned to the respective team members

More details about the document setup can be found on this document [below](https://docs.google.com/document/d/1jw_UP6sXmGsIMktW0Z-b-yQB1leDLatUY2393bA4z8s/edit?usp=sharing)

   ####  Happy Productivity


## 📊 Basic Information

- **Workflow ID:** 2190
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 2406
- **Downloads:** 240
- **Created:** 2024/3/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2190)

## 👤 Author

- **Name:** Zacharia Kimotho
- **Username:** @imperolq

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **respondToWebhook** 
- **stickyNote** (×2)
- **webhook** 
- **set** 
- **clickUp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
