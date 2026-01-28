# Add product ideas to Notion via a Slack command

> ## Use Case
In most companies, employees have a lot of great ideas. That was the same for us at n8n. We wanted to make it as easy as possible to allow everyone to add their ideas to some formatted database - it should be somewhere where everyone is all the time and could add a new idea without much extra effort. Since we're using Slack, this seemed to be the perfect place to easily add ideas and collect them in Notion.
## What this workflow does
This workflow waits for a webhook call within Slack, that gets fired when users use the `/idea` command on a bot that you will create as part of this template. It then checks the command, adds the idea to Notion, and notifies the user about the newly added idea as you can see below:

![image 16.png](fileId:751)
## Creating your Slack bot
1. Visit https://api.slack.com/apps, click on `New App` and choose a name and workspace.
2. Click on `OAuth & Permissions` and scroll down to Scopes -&gt; Bot token Scopes
3. Add the `chat:write` scope
4. Head over to `Slash Commands` and click on `Create New Command`
5. Use `/idea` as the command
6. Copy the test URL from the **Webhook** node into `Request URL`
7. Add whatever feels best to the description and usage hint
8. Go to `Install app` and click install
## Setup
1. Add a Database in Notion with the columns `Name` and `Creator`
2. Add your Notion credentials and add the integration to your Notion page.
3. Fill the setup node below
4. Create your Slack app (*see other sticky*)
5. Click `Test` workflow and use the `/idea` comment in Slack
6. Activate the workflow and exchange the Request URL with the production URL from the webhook
## How to adjust it to your needs
- You can adjust the table in Notion and for example, add different types of ideas or areas that they impact
- You might wanna add different templates in Notion to make it easier for users to fill their ideas with details
- Rename the Slack command as it works best for you
## How to enhance this workflow
At n8n we use this workflow in combination with some others. E.g. we have the following things on top:
- We additionally have a `/bug` Slack command that adds a new bug to Linear. Here we're using AI to classify the bugs and move it to the right team. (see this template and this template)
- We also added other types, like `/pain` to be less solution-driven
- To make it easier for everyone to give input, we added a `Votes` column that allows everyone to vote on ideas/pain points in the list
- We're also running a workflow once a week that highlights the most popular new ideas and the most active voters (see here)

## 📊 Basic Information

- **Workflow ID:** 2140
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 1487
- **Downloads:** 148
- **Created:** 2024/2/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2140)

## 👤 Author

- **Name:** Niklas Hatje
- **Username:** @nik8n

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **webhook** 
- **stickyNote** (×3)
- **notion** 
- **switch** 
- **httpRequest** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
