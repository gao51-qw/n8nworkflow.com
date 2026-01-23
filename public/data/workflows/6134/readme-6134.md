# Automate PostgreSQL & MySQL database management on Linux servers

> This automated n8n workflow efficiently manages the setup, creation, and deletion of PostgreSQL and MySQL databases on a Linux server, executing tasks in approximately 10 seconds. It automates installation, configuration, and user management with support for remote access.

## Core Elements
- **Set Parameters** - Defines server details, database type, action, and credentials
- **Type Check** - Confirms the selected database type
- **PostgreSQL Action Check** - Identifies the action for PostgreSQL
- **PostgreSQL Create Check** - Validates creation conditions for PostgreSQL
- **Install PostgreSQL** - Sets up and configures PostgreSQL
- **Create PostgreSQL DB** - Establishes a new PostgreSQL database with user access
- **Delete PostgreSQL DB** - Removes a PostgreSQL database and user
- **MySQL Action Check** - Identifies the action for MySQL
- **MySQL Create Check** - Validates creation conditions for MySQL
- **Install MySQL** - Sets up and configures MySQL
- **Create MySQL DB** - Establishes a new MySQL database with user access
- **Delete MySQL DB** - Removes a MySQL database and user
- **Format Output** - Structures the final workflow output

## Getting Started Guide
- Import the workflow into n8n
- Adjust parameters in the Set Parameters node
- Execute the workflow
- Confirm the database operation on the server

## Necessary Requirements
- SSH-enabled Linux server
- Root-level access rights

## Customization Options
- Switch db_type between PostgreSQL and MySQL
- Select action (install, create, delete) via the action parameter
- Tailor database_name, db_user, and db_password as needed

## Features
- Install Database Server - Deploys PostgreSQL or MySQL with optimal configuration
- Create Database - Generates new databases with assigned users and permissions
- Delete Database - Eliminates databases and their associated users

## Parameters to Configure
- server_host: Your Linux server IP address
- server_user: SSH username (typically 'root')
- server_password: SSH password
- db_type: Select 'postgresql' or 'mysql'
- action: Select 'install', 'create', or 'delete'
- database_name: Name of the database to create or delete
- db_user: Database username
- db_password: Database password

## How to Use
- Copy the JSON code from the artifact
- Access your n8n workspace
- Choose "Import from JSON" or "+" → "From JSON"
- Insert the JSON code
- Set parameters in the "Set Parameters" node with your server information
- Run the workflow

## Workflow Actions
- Install: Sets up the database server, enables remote access, and initializes the database
- Create: Establishes a new database with a specific user
- Delete: Erases the database and its associated user

## The workflow automatically manages
- Ubuntu/Debian package setup
- Service initialization and configuration
- Remote access setup
- User and permission assignments
- Authentication configuration

Update the parameters in the "Set Parameters" node with your server specifics and execute the workflow!

## 📊 Basic Information

- **Workflow ID:** 6134
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 352
- **Downloads:** 35
- **Created:** 2025/7/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6134)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×2)
- **if** (×5)
- **ssh** (×6)
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
