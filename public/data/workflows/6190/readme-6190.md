# Postgres data freshness monitoring with email alerts

> # Monitor Postgres Data Freshness and Email Alert If Stale
This template monitors a set of tables inside a Postgres database to ensure they're getting updated.

If the table hasn't been updated in 3 days (configurable), an email alert is sent containing the tables that are stale.

## Requirements
You must have a Postgres database containing one or more tables that you'd like to monitor.

Each table to monitor must have a date or timestamp column that tracks when data was pushed.

For example, this might be:

- A `timestamp` column if your table holds event/timeseries data
- A `last_updated` column if your rows are expected to be modified

## Usage
1. Use this template
1. Add your Postgres and email credentials
1. Adjust the `Produce tables + date columns` node to produce pairs of `[table, date_column]` that should be monitored for freshness
    - 💁‍♂️ Note that a timestamp column also works
1. (Optional) Adjust the `Remove fresh tables` node for your desired staleness window (default is 3 days, but you can adjust as you please)
1. (Optional) Customize the `Send alerts` node to call whichever alerting workflow you please (I recommend [my alerting workflow](https://creators.n8n.io/workflows/6189) for easiest plug-and-play)

## How it works
This template works by:

1. Pulling the most recent row for each table
1. Calculating how out-of-date each table is, in days
1. Dropping fresh tables that have been updated within the past 3 days
1. Sending an email alert with the stale tables that haven't been updated within the past 3 days

## 📊 Basic Information

- **Workflow ID:** 6190
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 54
- **Downloads:** 5
- **Created:** 2025/7/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6190)

## 👤 Author

- **Name:** Kevin
- **Username:** @mieubrisse

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **scheduleTrigger** 
- **splitInBatches** 
- **aggregate** 
- **postgres** 
- **dateTime** 
- **set** 
- **stickyNote** (×4)
- **filter** 
- **code** 
- **executeWorkflow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
