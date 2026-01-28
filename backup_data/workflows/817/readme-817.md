# Save your workflows into a GitHub repository

> ## Basics

Provides a mechanism to save all your workflows into a github repository and path (of your choosing).  These can then be shared through your entire org and used to track changes (if you make any sad 'oopsies'.

## Flow

1. Obtains and creates listing of currently configured workflows.
2. Iterates through each workflow looking at the following
	1. Github source (if present)
	2. Actual workflow code (from N8N)
3. Workflow code is sorted and compared for any changes
4. If changed (or new) the workflows are saved / archived into github.

## Configuration

Most of the configuration is done in the `Globals` node which houses the repo detail for github nodes.  The only other dependency is that it by default looks for a `GitHub` credential, if you use something other than that precise wording you will need to change the credential used on the respective nodes.  We gave it 'Manage' rights, but that was only so that it was able to override a requirement for checks to complete?  Most would probably only need 'Write' privileges.

## Background

Well, so we initially started using N8N just as a kubernetes-based service housed with its DB running inside the pod.  Worked great for getting to know N8N and we jut kept all our workflows and credentials listed in a readme.  Fast forward about a year...

We have migrated this into our 'production' toolsets and maintain a bunch of team worflows inside it (not company-wide, but LOTS of team fun).  While trying to spin a copy of our production RDS database, the ++actual++ production database was deleted, and in doing so AWS was nice enough to wipe our snapshots too!! Yea!

Thankfully it only took us a few hours to get everything back up and running thanks to this, so I'm sharing it for everyone to benefit.  We have used it to restore old workflows, changes, and now to test our full DR proceedures! (Ok, I might have taken that a bit far)

## 📊 Basic Information

- **Workflow ID:** 817
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 12956
- **Downloads:** 1295
- **Created:** 2020/12/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/817)

## 👤 Author

- **Name:** Brian Burnett
- **Username:** @hikerspath

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **function** (×2)
- **httpRequest** (×2)
- **github** (×3)
- **merge** 
- **switch** 
- **noOp** (×3)
- **cron** 
- **splitInBatches** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
