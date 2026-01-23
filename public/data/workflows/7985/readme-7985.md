# Detect unused Android feature flags with GitLab, LaunchDarkly, Jira & Slack

> # Android Feature Flag Cleanup Bot (GitLab + LaunchDarkly)

This n8n automation detects unused (“dead”) feature flags in an Android Kotlin/Java codebase by comparing your GitLab repository code against LaunchDarkly’s feature flag list.

It logs results in Google Sheets, creates Jira tickets for cleanup and sends Slack alerts automatically.


## Who’s it for
* Android engineering teams using **Kotlin/Java**.
* Teams managing feature flags in **LaunchDarkly**.
* DevOps/QA teams wanting to **reduce technical debt** from stale flags.


## How it works

1. **Weekly Trigger** runs the process.
2. **GitLab Node** fetches repository code.
3. **Regex Extraction** finds all feature flags in code.
4. **LaunchDarkly API** retrieves all configured flags.
5. **Comparison Logic** marks flags as “dead” if unused in code **and** archived or off in production.
6. **Google Sheets** stores flagged results.
7. **Jira** creates a ticket for each dead flag.
8. **Slack** notifies the team.


## How to set up

1. **Import JSON** into n8n.
2. Connect credentials for:

	* GitLab OAuth2
	* Google Sheets
	* Jira
	* Slack webhook URL
3. Update:
	* GitLab repo details in the GitLab node.
	* LaunchDarkly API key in HTTP Request node.
	* Google Sheet ID in Google Sheets node.
	* Jira project & issue type in Jira node.
	* Slack message formatting in Slack node.
4. Activate workflow.

## Requirements

* **n8n** (self-hosted or cloud)
* GitLab repository with Kotlin/Java code
* LaunchDarkly account + API token
* Google Sheets API access
* Jira API access
* Slack incoming webhook

## How to customize

* Change **regex pattern** in “Detect flags” node if your flag naming convention differs.
* Adjust **dead flag logic** in “Find dead flags” node (e.g., treat test env separately).
* Modify **Slack message** to include more details (e.g., description from LaunchDarkly).
* Add **email notifications** for broader distribution.

## Add-ons

* **Email Alerts** via Gmail/SMTP.
* **GitHub / GitLab MR** to remove dead flags automatically.
* **Confluence Integration** to document flag cleanup history.


## Use Case Examples

* Weekly automated cleanup alerts for large engineering teams.
* Maintaining clean feature flag lists in high-traffic apps.
* Compliance-driven projects requiring flag lifecycle tracking.


## Common troubleshooting

| Issue | Possible Cause | Solution |
| ------------------------------------ | --------------------------------------------- | -------------------------------------------------------- |
| Workflow fails at GitLab node | Invalid repo path or missing OAuth scope | Update repo path & check GitLab OAuth permissions |
| LaunchDarkly API request returns 401 | Invalid or expired API key | Generate a new API key in LaunchDarkly & update node |
| Google Sheets node fails | Wrong Sheet ID or missing sharing permissions | Confirm Sheet ID and share with connected Google account |
| Jira ticket not created | Missing required fields | Set project key, issue type, and summary in Jira node |
| Slack alert not sent | Webhook URL invalid or revoked | Regenerate Slack webhook and update in node |


## Need Help?

If you’d like, we can **help set up and customize this workflow** for your exact repo, flag rules and team notification preferences — including regex adjustments, extra reporting or adding automatic cleanup PRs.

Contact our [n8n automation team](https://www.weblineindia.com/hire-n8n-developers/) at WeblineIndia.

## 📊 Basic Information

- **Workflow ID:** 7985
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 72
- **Downloads:** 7
- **Created:** 2025/8/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7985)

## 👤 Author

- **Name:** WeblineIndia
- **Username:** @weblineindia

## 🏷️ Categories

- DevOps
- Multimodal AI

## 🔗 Nodes Used

- **if** 
- **scheduleTrigger** 
- **gitlab** 
- **googleSheets** 
- **slack** 
- **jira** 
- **httpRequest** 
- **code** (×2)
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
