# Complete LAMP stack (Linux, Apache, MySQL, PHP) automated server setup

> This automated n8n workflow enables the rapid setup of a complete LAMP (Linux, Apache, MySQL, PHP) stack on a Linux server, executing the entire process in approximately 10 seconds. It configures the server, installs necessary components, and sets up a development user for seamless operation.

## Fundamental Aspects
- **Start** - Initiates the workflow
- **Set Parameters** - Configures server parameters
- **System Preparation** - Prepares the system for LAMP installation
- **Update System** - Updates the system and installs essential packages
- **Install Apache** - Sets up the Apache web server
- **Install MySQL** - Installs MySQL and phpMyAdmin
- **Install PHP & Extensions** - Installs PHP with required extensions
- **Install Development Tools** - Adds development utilities
- **Create Development User** - Creates a dedicated user for development
- **Final Setup & Configuration** - Finalizes configurations
- **Setup Completion** - Provides a summary of the setup

## Setup Instructions
- Import the workflow into n8n
- Configure parameters in the Set Parameters node
- Run the workflow
- Verify the LAMP stack setup on the server

## Required Resources
- Linux server with SSH access
- Root-level administrative privileges

## Features
- Install Database Server - Deploys MySQL with phpMyAdmin
- Configure Web Server - Sets up Apache for web hosting
- Install PHP - Includes PHP with essential extensions
- Create Development User - Establishes a user for development tasks

## Parameters to Configure
- server_host: Your Linux server IP address
- server_user: SSH username (typically 'root')
- server_password: SSH password
- php_extensions: List of PHP extensions to install
- dev_tools: List of development tools to install
- username: Development username
- user_password: Password for the development user

## Workflow Actions
- Install: Deploys the LAMP stack, configures Apache, MySQL, and PHP
- Create User: Sets up a development user with appropriate permissions
- Configure: Finalizes server settings and tool installations

## The workflow automatically manages
- Ubuntu/Debian package installation
- Service startup and configuration
- Web server and database setup
- User and permission management
- Development tool integration

Update the parameters in the "Set Parameters" node with your server specifics and run the workflow!

## 📊 Basic Information

- **Workflow ID:** 6136
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 533
- **Downloads:** 53
- **Created:** 2025/7/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6136)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×2)
- **ssh** (×7)
- **stickyNote** (×10)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
