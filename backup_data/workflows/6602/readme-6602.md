# Daily sync of NFL players from Sleeper API to Airtable for fantasy football

> # Sleeper NFL Players Sync 

This template uses the [Sleeper API](https://docs.sleeper.app/) to fetch the complete list of NFL players and stores them in an Airtable base. It’s built to run **daily** and ensures you have the most up-to-date player list for fantasy football workflows 

---

## What it Does

- Maintain a current player list for fantasy league automations for Sleeper app users / NFL fantasy football managers
- Pull Sleeper player IDs once daily instead of every request
- Build smarter workflows using Airtable as your structured dataset
- Create a subworkflow in n8n for even more Sleeper app workflows
---

## Setup Instructions

1. **Install n8n** (Cloud or self-hosted)
2. **Import the template JSON**
3. Create **Airtable Credentials**:
   - Generate an API key at [airtable.com/account](https://airtable.com/account)
   - Connect your base and table (you’ll be prompted to do this in n8n)
   - If you would like to customize how you store data please feel free to use what works best for you
4. Match your fields with the data you're storing:
   - `player_id` (text/number)
   - `full_name`
   - `position`
   - `team`
   - etc.

5. Activate your workflow 

Remember, you can customize how you trigger this workflow and where you store the data if you choose to do so.

---

## Notes

- Sleeper's player API returns 6,000+ entries, including inactive players, retired players, etc. You can **filter this down** as needed via position, status, or metadata.
- Airtable record limit on the free tier is 1,000 rows per base — consider upgrading or filtering further.
- Be careful of rate limits: both Sleeper and Airtable have them (but this workflow stays well within safe boundaries).
- The Airtable node can be replaced with other data storage nodes (Google Sheets, Excel, etc) if you prefer

---

## Difficulty Rating & Comment (from the author)

- 2 out of 10 if this ain't you're first rodeo, respectfully.
- If you use Sleeper for fantasy football, lets go win some games!

---


## 📊 Basic Information

- **Workflow ID:** 6602
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 349
- **Downloads:** 34
- **Created:** 2025/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6602)

## 👤 Author

- **Name:** Patrick Jennings
- **Username:** @patjennings916

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **httpRequest** 
- **function** (×2)
- **stickyNote** (×3)
- **manualTrigger** 
- **airtable** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
