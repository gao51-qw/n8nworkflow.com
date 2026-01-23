# Monitor GitHub repo access and push events with GitHub and Slack alerts

> 
## Monitor GitHub Repositories for Unauthorized Actions

### How it works:

This workflow monitors GitHub for high-risk activities to ensure that only authorized users can modify the repository. It periodically polls GitHub for events such as PushEvent, MemberEvent, and PublicEvent.

For each event, the workflow extracts the username of actor and looks it up in the it_whitelist data table to determine the user’s role. A Switch node then routes the event to the appropriate validation logic.

• Member & Public events: Only users with the admin role are allowed. Any non-admin action such as adding a repository member or changing a private repository to public triggers an alert.
• Push events: The user must exist in the whitelist. If no role is found, the user is treated as unknown and flagged.

All unauthorized actions are reported to Slack, including the event type, actor name, and repository details.

### Setup steps:
Credentials: Connect your GitHub Personal Access Token and Slack Bot Token.

Create a Data Table named it_whitelist with columns github_username and role. Add your GitHub username with the role admin to prevent self-alerts. Accordingly, add other developers and members in your organization with appropriate roles to white list them.

Switch Configuration: Use the expression {{ $item.json.type }} in 'Rules' mode to route events.

Logic: 
Configure the PushEvent IF node to flag users whose role is empty or missing.
Configure the Member and Public IF nodes to flag users whose role is not admin.

![image.png](fileId:3885)

## 📊 Basic Information

- **Workflow ID:** 12336
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 3
- **Downloads:** 0
- **Created:** 2026/1/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12336)

## 👤 Author

- **Name:** RamS
- **Username:** @rams1005

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **scheduleTrigger** 
- **code** 
- **dataTable** 
- **httpRequest** 
- **switch** 
- **if** (×3)
- **stickyNote** (×4)
- **slack** (×3)
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
