# Automate NPM package installation and updates for self-hosted environments

> *Are you looking to install external libraries for your self-hosted N8N instance? This automated workflow makes adding npm packages to your N8N environment quick and effortless.*

![image.png](fileId:1043)

**Beware, this workflow only works on self-hosted instances.**
## What This Workflow Does
This solution automatically installs npm packages like axios, cheerio, or node-fetch in your self-hosted N8N Docker container, making them immediately available in Code nodes.
### Key features

✅ **Automated Installation:** No manual npm commands needed
✅ **Daily Updates:** Scheduled trigger keeps packages current
✅ **Smart Installation:** Only installs missing packages
✅ **Multiple Triggers:** Manual, scheduled, and on startup of the N8N instance so you can upgrade your N8N version without worrying about external libraries.

## How to install and update external libraries automatically
### Step 1: Setting Up Your Environment Variables
Before using external libraries in N8N Code nodes, configure these environment variables in your Docker comppose file.
#### Option A to allow specific external npm packages in N8N Code nodes
```
NODE_FUNCTION_ALLOW_EXTERNAL=axios,cheerio,node-fetch
```
#### Option B to allow all external npm packages in Code nodes
```
NODE_FUNCTION_ALLOW_EXTERNAL=*
```


### Step 2: Import the external packages workflow

Import the workflow into your N8N instance by copy pasting all nodes.

### Step 3: Input the list of external libraries you need

Edit the libraries_set node
Change the comma-separated list (e.g., axios,cheerio,node-fetch).

**If you chose Option A above**, update your NODE_FUNCTION_ALLOW_EXTERNAL variable with the same packages

### Step 4: Start the workflow!
Run the workflow manually or let it trigger automatically

## Why use this to install NPM packages in N8N?
Managing external packages manually in N8N can be time-consuming. This workflow automates the entire process, making sure your libraries are always installed and up-to-date.


## 📊 Basic Information

- **Workflow ID:** 3293
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 5917
- **Downloads:** 591
- **Created:** 2025/3/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3293)

## 👤 Author

- **Name:** Joachim Brindeau
- **Username:** @joachimbrindeau

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **set** (×2)
- **manualTrigger** 
- **splitOut** 
- **executeCommand** 
- **scheduleTrigger** 
- **n8nTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
