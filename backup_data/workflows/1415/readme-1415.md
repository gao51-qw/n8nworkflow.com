# Plex automatic QBittorent throttler

> Have you ever wanted to throttle Plex when connecting remotely to your server? Well here is the script for you! The instructions to deploy are below:

You will need: 
- A plex server with Plex Pass (for webhooks)
- n8n running locally (either in docker on via the desktop app)
- Qbittorent with WebUI enabled

1. Begin by installing n8n by visiting n8n.io. You can install the desktop version or the docker version, whichever works best for your but I'm doing this on my desktop version of n8n. 
2. Copy the code from this page into your n8n install canvas. You should see the script appear before your eyes. ![workflow-screenshot](fileId:596)
3. From there, you Double click on the Webhook node at the beginning of the script. Copy both the Test and Production URLs that appear there. ![Screen Shot 20220128 at 9.13.13 PM.png](fileId:595)
4. Now make your way to Plex and visit your settings. On the left, you should see the webhooks option if you have Plex Pass. ![Screen Shot 20220128 at 9.15.20 PM.png](fileId:597)This will setup your triggers.
5. Next visit your qBitTorrent instance and enable WebUI. Notate your Username, Password, and Port. You will also need to know the IP of the machine that qbittorent is running on. If you have an iPhone you can connect to the same wireless network as your computer and use the Fing app to scan the network for the IP.
6. Open up the script and edit the Global Variables to reflect the values you copied. ![Screen Shot 20220128 at 9.20.14 PM.png](fileId:598)
7. Hit save at the top right, and then activate the script. 
8. Enjoy!! 


## 📊 Basic Information

- **Workflow ID:** 1415
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 1626
- **Downloads:** 162
- **Created:** 2022/1/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1415)

## 👤 Author

- **Name:** Angel Menendez
- **Username:** @djangelic

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **webhook** 
- **switch** 
- **noOp** (×9)
- **if** (×3)
- **httpRequest** (×6)
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
