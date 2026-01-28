# Set up complete MERN stack development environment on Linux server

> This automated n8n workflow sets up a complete MERN Stack development environment on a Linux server by installing core technologies, development tools, package managers, global npm packages, deployment tools, build tools, and security configurations. It creates a dedicated developer user and configures essential settings for MERN projects.

## What is MERN Stack Setup?
MERN Stack setup involves installing and configuring Node.js, MongoDB, Express.js, and React, along with additional tools and packages, to create a fully functional development environment for building MERN-based applications on a Linux system.

## Good to Know
- The workflow triggers manually and takes 10-15 minutes to complete
- A dedicated developer user with proper permissions is created
- Firewall configuration secures development ports
- The environment variables template is provided
- All tools are installed and ready for immediate use

## How It Works
- **Set Parameters** - Configures server host, user, password, setup type, Node.js version, MongoDB version, username, and user password
- **System Preparation** - Prepares the system for installation
- **Install Node.js** - Installs Node.js (v20 by default) with npm
- **Install MongoDB** - Installs MongoDB (v7.0 by default) with Compass & Shell
- **Install Git & GitHub CLI** - Installs Git and GitHub CLI
- **Install Development Tools** - Installs VS Code, Docker, Docker Compose, Postman, Nginx, Redis, and PostgreSQL
- **Create Dev User** - Creates a development user account
- **Install Additional Tools** - Installs package managers (npm, Yarn, pnpm), global npm packages, deployment tools, build tools, and security tools
- **Final Configuration** - Configures firewall, SSH keys, and environment variables template
- **Setup Complete** - Marks the completion of the setup process

## How to Use
- Import the workflow into n8n
- Configure parameters in the Set Parameters node (server_host, server_user, server_password, setup_type, node_version, mongodb_version, username, user_password)
- Run the workflow
- SSH into the server as the new developer user
- Start building MERN applications

## Requirements
- Linux server access with SSH
- Administrative privileges (root access)

## Customizing This Workflow
- Adjust the setup_type parameter to customize the installation scope
- Modify node_version or mongodb_version to use different versions
- Change the username and user_password for the developer account

## 📊 Basic Information

- **Workflow ID:** 6131
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 246
- **Downloads:** 24
- **Created:** 2025/7/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6131)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×2)
- **ssh** (×8)
- **stickyNote** (×11)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
