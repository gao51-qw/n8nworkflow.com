# Automate docker container updates with Telegram approval system

> #### Who is this for?
This workflow is for DevOps engineers, system administrators, and Docker users who want to automate the process of checking for updates, verifying them, and applying updates to their Docker-based deployment in a controlled manner.
For example, this workflow is used to update the n8n Docker image.

#### What does this workflow do?
- Fetches the latest Docker image version from GitHub.
- Compares it with the currently running version on the server.
- Sends a Telegram message requesting confirmation if an update is available.
- If confirmed, pulls the latest n8n Docker image, updates the container, and restarts it.
- Sends a Telegram message confirming the update is completed.
- Schedules automatic checks, Uses a cron trigger in n8n to check for updates at regular intervals.


#### Setup
- Ensure n8n is installed and running in a Docker container.
- Create a Telegram bot using BotFather.
- Set up Telegram credentials. 
- Set up SSH credentials (ensure the SSH user has sudo access).
- Obtain the bot token and chat ID.
- Set the Default variable node
   - telegram-id (You can find it by messaging @get_id_bot).
   - n8n-container-name (Specify the name of the n8n container.)
   - working-directory (The directory where your docker-compose.yml is).
 - You can use a manual trigger or a schedule trigger to update (for n8n, I use Cron every 3 days to check for a new version).

#### How to customize this workflow
- Change the update mechanism: Modify the Docker commands if using a different container runtime or orchestration tool.
- Modify the confirmation flow: Add extra validation steps, such as checking for breaking changes before updating.
- Use a different notification method: Replace Telegram with Slack, email, or another notification service.



## 📊 Basic Information

- **Workflow ID:** 3386
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 3075
- **Downloads:** 307
- **Created:** 2025/3/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3386)

## 👤 Author

- **Name:** Jaber Zare
- **Username:** @j4b3r

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **ssh** (×4)
- **manualTrigger** 
- **scheduleTrigger** 
- **stickyNote** (×13)
- **set** (×2)
- **httpRequest** 
- **merge** 
- **if** 
- **telegram** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
