# Spotify: discover weekly archive

> This updated workflow will automatically archive your Spotify `Discover Weekly` tracks to another **manually created** playlist, without the nuisance of duplicate tracks. It utilizes the latest verisons of n8n's [`Schedule trigger`](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/), [`Spotify`](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.spotify/), [`Switch`](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.switch/), [`Merge`](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.merge/), and [`IF`](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.if/) nodes.

Special thanks to [trey](https://community.n8n.io/u/trey) for their original version of the workflow, as well as [ihortom](https://community.n8n.io/u/ihortom) for their [help with navigating the `Switch` node's outputs](https://community.n8n.io/t/targeting-previous-switch-node-outputs/34919).

#### To use this workflow, you'll need to:
- Create a playlist for use as the archive playlist within your Spotify account
- Create and select your Spotify credentials within each Spotify node within the workflow

See workflow `README` for additional information and optional setup steps.


## 📊 Basic Information

- **Workflow ID:** 2044
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 1977
- **Downloads:** 197
- **Created:** 2024/1/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2044)

## 👤 Author

- **Name:** JYLN
- **Username:** @jyln

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **scheduleTrigger** 
- **spotify** (×4)
- **switch** 
- **merge** 
- **stickyNote** (×3)
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
