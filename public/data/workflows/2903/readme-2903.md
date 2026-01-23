# Youtube outlier detector (find trending content based on your competitors)

> [Video explanation](https://www.youtube.com/watch?v=pIfT9e-zPO0)

This n8n workflow helps you identify trending videos within your niche by detecting outlier videos that significantly outperform a channel's average views. It automates the process of monitoring competitor channels, saving time and streamlining content research.

## Included in the Workflow

- Automated Competitor Video Tracking
Monitors videos from specified competitor channels, fetching data directly from the YouTube API.

- Outlier Detection Based on Channel Averages
Compares each video’s performance against the channel’s historical average to identify significant spikes in viewership.

- Historical Video Data Management
Stores video statistics in a PostgreSQL database, allowing the workflow to only fetch new videos and optimize API usage.

- Short Video Filtering
Automatically removes short videos based on duration thresholds.

- Flexible Video Retrieval
Fetches up to 3 months of historical data on the first run and only new videos on subsequent runs.

- PostgreSQL Database Integration
Includes SQL queries for database setup, video insertion, and performance analysis.

- Configurable Outlier Threshold
Focuses on videos published within the last two weeks with view counts at least twice the channel's average.

- Data Output for Analysis
Outputs best-performing videos along with their engagement metrics, making it easier to identify trending topics.

## Requirements

- n8n installed on your machine or server

- A valid YouTube Data API key

- Access to a PostgreSQL database

This workflow is intended for educational and research purposes, helping content creators gain insights into what topics resonate with audiences without manual daily monitoring.

## 📊 Basic Information

- **Workflow ID:** 2903
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 7458
- **Downloads:** 745
- **Created:** 2025/2/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2903)

## 👤 Author

- **Name:** Leonardo Grigorio
- **Username:** @leonardogrig

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **splitInBatches** 
- **httpRequest** 
- **manualTrigger** 
- **executeWorkflowTrigger** 
- **postgres** (×6)
- **youTube** 
- **if** (×2)
- **code** (×4)
- **set** (×2)
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
