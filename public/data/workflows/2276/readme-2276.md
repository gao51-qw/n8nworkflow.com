# Send HTTP requests to a list of URLs

> ## How it works
This workflow reads a list of URLs every 15 minutes, and sends an HTTP request to every URL on the list.

## Set up steps
1. Schedule the workflow to run at your desired frequency (default is every 15 minutes).
2. Add your desired URLs to the list. The list should be in the same format as the image below (Don't forget to have single quotes around every URL in the list, and separate each one with a comma!):

![urlslist.png](fileId:796)

3. Turn the workflow ON.

## Ideas to customize the workflow for your own use cases:
- Change the HTTP method
- Add headers
- Add a request body


## 📊 Basic Information

- **Workflow ID:** 2276
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 3269
- **Downloads:** 326
- **Created:** 2024/6/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2276)

## 👤 Author

- **Name:** Eric Francis
- **Username:** @ericfrancis

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **splitOut** 
- **scheduleTrigger** 
- **httpRequest** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
