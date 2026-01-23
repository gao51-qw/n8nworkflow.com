# Get Scaleway server info with dynamic filtering

> # Get Scaleway Server Info with Dynamic Filtering

## Description

This workflow is designed for developers, system administrators, and DevOps engineers who need to retrieve and filter Scaleway server information quickly and efficiently. It gathers data from Scaleway instances and baremetal servers across multiple zones and is ideal for:
- Quickly identifying servers by tags, names, public IPs, or zones.
- Automating server status checks in production, staging, or test environments.
- Integrating Scaleway data into broader monitoring or inventory systems.

## High-Level Steps

- **Webhook Trigger:**
  Receives an HTTP POST request (with basic authentication) containing the search criteria (`search_by` and `search`).

- **Server Data Collection:**
  Fetches server data from Scaleway’s API endpoints for both instances and baremetal servers across defined zones.

- **Data Processing:**
  Aggregates and normalizes the fetched data using a Code node with helper functions.

- **Dynamic Filtering:**
  Routes data to dedicated filtering routines (by tags, name, public_ip, or zone) based on the input criteria.

- **Response:**
  Returns the filtered data (or an error message) via a webhook response.

## Set Up Steps

1. **Insert Your Scaleway Token:**
   In the “Edit Fields” node, replace the placeholder `Your personal Scaleway X Auth Token` with your Scaleway API token.

2. **Configure Zones:**
   Review or update the zone lists (`ZONE_INSTANCE` and `ZONE_BAREMETAL`) to suit your environment.

3. **Send a Request:**
   Make a POST request to the workflow’s webhook endpoint with a JSON payload, for example:
   ```json
   {
     "search_by": "tags",
     "search": "Apiv1"
   }
   ```

4. **View the Results:**
   The workflow returns a JSON array of servers matching your criteria, including details like name, tags, public IP, type, state, zone, and user.

## 📊 Basic Information

- **Workflow ID:** 3571
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 291
- **Downloads:** 29
- **Created:** 2025/4/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3571)

## 👤 Author

- **Name:** Pablo
- **Username:** @pablobarrier

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **code** (×5)
- **set** 
- **switch** 
- **webhook** 
- **respondToWebhook** (×6)
- **stickyNote** (×3)
- **httpRequest** (×3)
- **splitInBatches** (×2)
- **splitOut** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
