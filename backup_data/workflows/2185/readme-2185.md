# Automatically optimise images added to a Google drive folder

> **How it works**
- This workflow watches a selected Google Drive folder for any images added to it.
- It then takes that image, sends it the the tinypng.com service which optimises and reduces its size (where possible)
- Tinypng then returns the updated image which is then automatically saved in your chose Google Drive folder

**Setting things up**
- It's pretty simple to configure and should only take around 5-10mins. 
- You only need to set up credentials for Google Drive and Tinypng.com
- For Tinypng.com you can sign up for their free tier API access which gives you 500 optimisations per month
- Once you have those two things, you just need choose your 'input' folder to watch for images and your 'output' folder for where these images should be stored
- There are a few more optional things you can do such as the naming of your final image and also lots more you could do with the Tinypng API for more advanced image optimisation


## 📊 Basic Information

- **Workflow ID:** 2185
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 2029
- **Downloads:** 202
- **Created:** 2024/3/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2185)

## 👤 Author

- **Name:** Jonathan
- **Username:** @jcn8n

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **googleDrive** (×2)
- **httpRequest** (×2)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
