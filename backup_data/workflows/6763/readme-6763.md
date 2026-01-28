# Auto-generate GitHub release notes and notify via Slack

> ## Auto-Generate GitHub Release Notes and Notify via Slack (n8n Workflow)

This n8n workflow automates the process of:
- Generating structured GitHub release notes from merged pull requests since the last tag.
- Creating a **draft GitHub release** using the latest tag and PR info.
- Sending a formatted summary to a Slack channel.

All of this is **triggered manually via a form**, where the user inputs the repository, owner and target branch.

## Who's It For

This flow is perfect for:
- **Open-source maintainers** looking to automate changelog management.
- **DevOps engineers** handling release cycles.
- **Engineering teams** maintaining structured, consistent GitHub releases.
- **Technical writers** who prepare release notes.

## How It Works

### Node Summary:

| Node No | Node Name                          | Description                                                   |
|---------|------------------------------------|---------------------------------------------------------------|
| 1       | **GitHub Release Input Form**      | Takes user inputs (owner, repo, branch).                      |
| 2       | **Config**                         | Extracts input and defines PR label grouping config.          |
| 3       | **Get Latest Git Tag**             | Fetches latest Git tag (used as reference point).            |
| 4       | **Get Commit Date of Latest Tag**  | Gets the exact timestamp of the latest tag's commit.          |
| 5       | **Fetch All Merged PRs Since Last Tag** | Queries GitHub for PRs merged after that timestamp.   |
| 6       | **Group PRs & Generate Release Notes** | Organizes PRs by label and generates markdown notes.    |
| 7       | **GitHub Pre-release**             | Creates a draft GitHub release with those notes.              |
| 8       | **Send Message to Slack**          | Sends the final release summary to Slack.                     |

## How to Set Up

1. Clone or import this workflow into your n8n instance.
2. Configure the following **credentials**:
    - GitHub OAuth or PAT (Personal Access Token)
    - Slack Webhook URL or OAuth credentials
3. Open the form node and fill in:
    - `owner`: GitHub username/org
    - `repo`: GitHub repository name
    - `branch`: Base branch (e.g., `main`)
4. Run the workflow manually and observe the release note being:
    - Created as a draft on GitHub
    - Sent to Slack

## Requirements

| Requirement     | Description                                         |
|-----------------|-----------------------------------------------------|
| n8n version     | Cloud or Self-Hosted                                  |
| GitHub Access   | A token with `repo` and `write:repo_hook` permissions |
| Slack Access    | Webhook URL or Slack OAuth app                      |
| Git Tags        | Semantic versioning tags pushed to the repo         |
| Labels          | PRs should be labeled (e.g., `feature`, `bug`, `other`) for grouping |

## How to Customize

| Feature             | How to Customize                                              |
|---------------------|---------------------------------------------------------------|
| Label Grouping      | Modify the config map in the `Config` node (step 2).          |
| PR Filtering        | Adjust the search query in node 5 to fit your repo's conventions. |
| Markdown Template   | Tweak markdown generation logic in node 6.                    |
| Slack Message Format| Customize the Slack text in node 8.                           |
| Tag Format          | Switch from semantic versioning if needed in node 3 logic.    |
| Release Type        | Change `draft: true` to `false` in node 7 for immediate publishing. |

## Add‑ons

You can extend the flow by:
- Adding a cron scheduler for periodic releases.
- Sending release notes via email (use the Email node).
- Publishing directly to Jira or Confluence.
- Posting GitHub release links to Discord.

## Use Case Examples

| Scenario                  | Description                                                   |
|---------------------------|---------------------------------------------------------------|
| OSS Team Weekly Releases  | Automatically publish weekly release notes summarizing merged PRs. |
| Sprint Review Reports     | Use it at the end of each sprint to generate change summaries. |
| CI/CD Pipelines           | Integrate with GitHub Actions or Jenkins for automated tagging + release. |

## Common Troubleshooting

| Issue                                   | Possible Cause                            | Solution                                                             |
|----------------------------------------|-------------------------------------------|----------------------------------------------------------------------|
| `No data found for item-index: "1"`    | GitHub Search returned no PRs             | Ensure PRs were merged after the last tag and branch name is correct |
| `Cannot access $node in code`          | Wrong script execution context            | Ensure JavaScript is selected and variables are accessed properly    |
| `draft must be boolean`                | Draft field passed as string              | Use `true` (not `"true"`) in JSON input of HTTP node                 |
| `PR labels not grouped`                | PRs have no matching labels               | Update your label config map or ensure labels exist on PRs          |
| Empty Slack message                    | Slack node not receiving data             | Ensure `$json.release_notes` is being passed correctly               |

---

## Need Help?

Need help setting this up for your team or extending it for more features (e.g., JIRA, auto-tagging, changelog export)? 
We're here to help you **customize, debug and scale** this flow.

Feel free to reach out WeblineIndia if you need:
- One-on-one setup assistance.
- Custom n8n nodes or scripts.
- Advanced GitHub/Slack integrations.

## 📊 Basic Information

- **Workflow ID:** 6763
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 247
- **Downloads:** 24
- **Created:** 2025/8/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6763)

## 👤 Author

- **Name:** WeblineIndia
- **Username:** @weblineindia

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **set** 
- **httpRequest** (×5)
- **code** 
- **formTrigger** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
