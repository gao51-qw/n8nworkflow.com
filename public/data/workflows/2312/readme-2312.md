# Attach a default error handler to all active workflows

> **How it works:**

Did you ever miss any errors in your workflow executions? I did! And I usually only realised a few days or weeks later. 🙈

This template attaches a default error workflow to all your active workflows. From now on, you'll receive a notification whenever a workflow errors and you'll have peace of mind again.

It runs every night at midnight so you never have to think of this again. Of course, you can also run it manually.

**Steps to set up:**

1. Update the Gmail note with your own email address, or replace it with any other notification mechanism. You can also use Slack, Discord, Telegram or text messages.. 
2. Activate the workflow.
3. Relax.

**Caveats:**

I did not add any rate limiting, so if you have a workflow that runs very frequently and it errors... well let's say your mailbox will not be a nice place anymore.

**Ideas for improvement?**

If you have any suggestions for improvement, feel free to reach out to me at bart@n8n.io.

Enjoy!

## 📊 Basic Information

- **Workflow ID:** 2312
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 4586
- **Downloads:** 458
- **Created:** 2024/7/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2312)

## 👤 Author

- **Name:** bartv
- **Username:** @bartv

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **errorTrigger** 
- **n8n** (×3)
- **gmail** 
- **code** 
- **stickyNote** (×3)
- **scheduleTrigger** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
