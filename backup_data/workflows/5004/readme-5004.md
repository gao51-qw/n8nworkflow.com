# Automate GitHub Issue Assignments via Comment Commands

> # 🤖 GitHub Auto-Assign Bot

**Streamline your open source project** with intelligent issue assignment automation.

## ✨ What It Does
Automatically assigns GitHub issues to contributors who comment "assign me" - eliminating manual triage work and creating a fair, first-come-first-served system.

## 🔑 Key Features
- **Smart Detection**:  
  Monitors both new issues and comments for assignment requests
- **Conflict Prevention**:  
  Checks existing assignments before making new ones
- **Auto-Labeling**:  
  Adds "assigned" labels for better tracking
- **Self-Service Assignment**:  
  Contributors claim issues with simple "assign me" command
- **Polite Responses**:  
  Automatically notifies when issues are already assigned

## 🎯 Perfect For
- Open source maintainers
- Development teams managing GitHub repos
- Projects with active contributor communities
- Anyone reducing manual issue management

## ⚙️ Setup Requirements
1. GitHub repository with issues enabled
2. n8n instance with GitHub OAuth credentials
3. 5 minutes configuration time

## 🚀 How Contributors Use It
1. Find an unassigned issue
2. Comment `assign me` 
3. Get automatically assigned
4. Start coding immediately → no maintainer approval needed!

## ✅ Benefits
- **Reduces maintainer workload** - No manual assignments
- **Faster contributor onboarding** - Instant self-service
- **Prevents conflicts** - Built-in assignment checking
- **Scales automatically** - Works across unlimited issues
- **Improves contributor experience** - Simple, clear process

## ⚡ Workflow Triggers
- New GitHub issues containing "assign me"
- New comments with "assign me" on existing issues
- Automatic label management
- Conflict resolution responses

---

&gt; **Transform your GitHub workflow** - Perfect for growing open source projects and development teams!

## 📊 Basic Information

- **Workflow ID:** 5004
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 248
- **Downloads:** 24
- **Created:** 2025/6/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5004)

## 👤 Author

- **Name:** Roshan Ramani
- **Username:** @rawsun007

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **switch** 
- **if** (×3)
- **github** (×3)
- **githubTrigger** 
- **noOp** (×2)
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
