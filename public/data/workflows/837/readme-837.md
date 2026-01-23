# Track changes of product prices

> This workflow automatically tracks changes on specific websites, typically in e-commerce where you want to get information about price changes. 

## Prerequisites

- Basic knowledge of HTML and JavaScript

## Nodes

- [Execute Command nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.executecommand/) create a file named `kopacky.json` in the `/data/` folder (Make sure that n8n has the permissions to make changes to the folder in your setup) and clean data.
- [Cron node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.cron/) triggers the workflow at regular intervals (default is 15 minutes), depending on how often you want to crawl URLs of your watchers. 
- [Function Item node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.functionItem/) **(Change me)** adds the URL watchers. You can put as many URLs (watchers) as you want by changing the JavaScript code in the node. There are four properties for each watcher:

|Property|Meaning|
|-|-|
|slug|Unique identifier for the watcher.|
|link|URL of the website where you want to track changes.|
|selector|CSS selector of the HTML tag, where your price is placed. You can use browser web tools to get a specific selector.|
|currency|Currency code in which your price is set.|

- [Function Item node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.functionItem/) **(Init item)** saves all required data from each watcher to the `kopacky.json` file.
- [HTTP Request node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.httpRequest/) fetches data from the website.
- [HTML Extract node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.htmlExtract/) extracts the required information from the webpage.
- [Send Email nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.sendemail/) **(NotifyBetterPrice)** send you an email  when there is an issue with getting the price, and when a better price is available (this could happen if the website is down, your tracking product is not available anymore, or the owner of the website changed the selector or HTML).
- [IF nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.if/) filter the incoming data and route the workflow.
- [Move Binary Data nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.movebinarydata/) convert the JSON file to binary data.
- [Write Binary File nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.writebinaryfile/) write the product prices in the file.

NOTE: This is the first (beta) version of this workflow, so it could have some issues. For example, there is an issue with getting content of those websites, where the owner of the website blocks any calls from unknown foreign services - it's typical protection against crawlers.


## 📊 Basic Information

- **Workflow ID:** 837
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 14486
- **Downloads:** 1448
- **Created:** 2020/12/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/837)

## 👤 Author

- **Name:** sthosstudio
- **Username:** @stehos

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **htmlExtract** 
- **cron** 
- **functionItem** (×7)
- **httpRequest** 
- **writeBinaryFile** (×2)
- **moveBinaryData** (×3)
- **if** (×5)
- **executeCommand** (×2)
- **readBinaryFile** 
- **emailSend** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 24 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
