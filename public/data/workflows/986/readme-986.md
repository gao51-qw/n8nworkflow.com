# Weather check workflow for bash-dash

> This workflow returns the current weather at a predefined or given city and returns it so that it can be displayed with [bash-dash](https://github.com/n8n-io/bash-dash).

![workflow-screenshot](fileId:444)[](Link)

By default does it return the weather in Berlin if no city got defined. That default can be changed in the "Set City" node.

**Example usage:**
\- weather london

**Example bash-dash config:**
commands[weather]="http://localhost:5678/webhook/weather"


## 📊 Basic Information

- **Workflow ID:** 986
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 1418
- **Downloads:** 141
- **Created:** 2021/3/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/986)

## 👤 Author

- **Name:** Jan Oberhauser
- **Username:** @jan

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **openWeatherMap** 
- **webhook** 
- **set** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
