# INST - the n8n installer: deploy workflows with automatic credential mapping

> ## INST: The n8n Workflow Installer

This workflow provides everything you need to package and deploy multiple workflows from a **single workflow you distribute**.

That's right, now you can package up dozens of workflows and send your client(s) a single workflow to run, that will create them all and auto-assign all the credentials.

This workflow installs 3 files when you run it, demonstrating the functionality. Just make your own mods to the system, repackage it, and you are ready to go!

---

## Requirements

- An n8n instance with API access enabled and an access key
- Optional: GitHub and OpenAI access keys

---

## What This Workflow Does

- Installs 3 additional workflows, demonstrating the functionality
- One of the workflows is a packager, that you configure for your own needs
- Two example workflows demonstrate functionality, and can be deleted

---

## Step-by-Step Setup

1. **Run the Workflow**  
   This will get the example and tool workflows on your instance.

2. **Package Your Content**  
   Configure the packager, then run it to produce a base64-compressed version of your files.

3. **Customize the Installer**  
   Make your own copy of the installer, and set the base64 payload.

4. **Deploy the Installer**  
   Export your installer script. Now, anyone you send it to will get all your packaged workflows when they execute it.

---

## How to Use This Workflow

This workflow is meant to be reused and adapted. You can:

- Integrate it into a deployment pipeline  
- Turn it into a subworkflow for dynamic installs  
- Extend it to include triggers, permission settings, or test runs  

If you frequently deploy or share n8n assets, this installer gives you a repeatable way to do it with confidence.



## 📊 Basic Information

- **Workflow ID:** 7028
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 104
- **Downloads:** 10
- **Created:** 2025/8/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7028)

## 👤 Author

- **Name:** Wyeth
- **Username:** @wyeth

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×4)
- **stickyNote** (×9)
- **convertToFile** 
- **n8n** (×2)
- **splitInBatches** 
- **extractFromFile** 
- **splitOut** 
- **if** (×2)
- **stopAndError** 
- **github** 
- **httpRequest** (×2)
- **code** 
- **merge** 
- **noOp** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
