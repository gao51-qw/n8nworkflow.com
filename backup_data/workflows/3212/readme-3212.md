# Deploy Docker Immich, API backend for WHMCS/WISECP

> # Setting up n8n workflow

## Overview

The **Docker Immich WHMCS module** uses a specially designed workflow for **n8n** to automate deployment processes. The workflow provides an API interface for the module, receives specific commands, and connects via SSH to a server with Docker installed to perform predefined actions.

## Prerequisites

- You must have your own **n8n** server.
- Alternatively, you can use the official **n8n** cloud installations available at: [n8n Official Site](https://n8n.partnerlinks.io/o692v7cg297k)

## Installation Steps

### Install the Required Workflow on n8n

You have two options:

#### **Option 1: Use the Latest Version from the n8n Marketplace**

- The latest workflow templates for our modules are available on the official n8n marketplace.
- Visit our profile to access all available templates: [PUQcloud on n8n](https://n8n.io/creators/puqcloud/)

#### **Option 2: Manual Installation**

- Each module version comes with a workflow template file.  
    [![image-1742323788556.png](https://doc.puq.info/uploads/images/gallery/2025-03/scaled-1680-/image-1742323788556.png)](https://doc.puq.info/uploads/images/gallery/2025-03/image-1742323788556.png)
- You need to manually import this template into your n8n server.  
    [![image-1741284912356.png](https://doc.puq.info/uploads/images/gallery/2025-03/scaled-1680-/image-1741284912356.png)](https://doc.puq.info/uploads/images/gallery/2025-03/image-1741284912356.png)

## n8n Workflow API Backend Setup for WHMCS/WISECP

### Configure API Webhook and SSH Access

- Create a **Basic Auth Credential** for the Webhook API Block in n8n.  
    [![image-1742323836025.png](https://doc.puq.info/uploads/images/gallery/2025-03/scaled-1680-/image-1742323836025.png)](https://doc.puq.info/uploads/images/gallery/2025-03/image-1742323836025.png)
    
      
      
    [![image-1742323899841.png](https://doc.puq.info/uploads/images/gallery/2025-03/scaled-1680-/image-1742323899841.png)](https://doc.puq.info/uploads/images/gallery/2025-03/image-1742323899841.png)
    
      
      
    [![image-1742323927094.png](https://doc.puq.info/uploads/images/gallery/2025-03/scaled-1680-/image-1742323927094.png)](https://doc.puq.info/uploads/images/gallery/2025-03/image-1742323927094.png)
- Create an **SSH Credential** for accessing a server with Docker installed.  
    [![image-1741285118412.png](https://doc.puq.info/uploads/images/gallery/2025-03/scaled-1680-/image-1741285118412.png)](https://doc.puq.info/uploads/images/gallery/2025-03/image-1741285118412.png)
    
    [![image-1741285147192.png](https://doc.puq.info/uploads/images/gallery/2025-03/scaled-1680-/image-1741285147192.png)](https://doc.puq.info/uploads/images/gallery/2025-03/image-1741285147192.png)
    
    [![image-1741285198822.png](https://doc.puq.info/uploads/images/gallery/2025-03/scaled-1680-/image-1741285198822.png)](https://doc.puq.info/uploads/images/gallery/2025-03/image-1741285198822.png)

### Modify Template Parameters

In the **Parameters** block of the template, update the following settings:

[![image-1742323964634.png](https://doc.puq.info/uploads/images/gallery/2025-03/scaled-1680-/image-1742323964634.png)](https://doc.puq.info/uploads/images/gallery/2025-03/image-1742323964634.png)

[![image-1741285412110.png](https://doc.puq.info/uploads/images/gallery/2025-03/scaled-1680-/image-1741285412110.png)](https://doc.puq.info/uploads/images/gallery/2025-03/image-1741285412110.png)

- `server_domain` – Must match the domain of the WHMCS/WISECP Docker server.
- `clients_dir` – Directory where user data related to Docker and disks will be stored.
- `mount_dir` – Default mount point for the container disk (recommended not to change).

**Do not modify** the following technical parameters:

- `screen_left`
- `screen_right`

### **Deploy-docker-compose**

In the **Deploy-docker-compose** element, you have the ability to modify the Docker Compose configuration, which will be generated in the following scenarios:

- When the service is created
- When the service is unlocked
- When the service is updated

[![image-1741875704524.png](https://doc.puq.info/uploads/images/gallery/2025-03/scaled-1680-/image-1741875704524.png)](https://doc.puq.info/uploads/images/gallery/2025-03/image-1741875704524.png)

[![image-1742324015958.png](https://doc.puq.info/uploads/images/gallery/2025-03/scaled-1680-/image-1742324015958.png)](https://doc.puq.info/uploads/images/gallery/2025-03/image-1742324015958.png)

### **nginx**

In the **nginx** element, you can modify the configuration parameters of the web interface proxy server.

- The **main** section allows you to add custom parameters to the **server** block in the proxy server configuration file.
- The **main\_location** section contains settings that will be added to the **location /** block of the proxy server configuration. Here, you can define custom headers and other parameters specific to the root location.

[![image-1741875960357.png](https://doc.puq.info/uploads/images/gallery/2025-03/scaled-1680-/image-1741875960357.png)](https://doc.puq.info/uploads/images/gallery/2025-03/image-1741875960357.png)

[![image-1742324044762.png](https://doc.puq.info/uploads/images/gallery/2025-03/scaled-1680-/image-1742324044762.png)](https://doc.puq.info/uploads/images/gallery/2025-03/image-1742324044762.png)

### **Bash Scripts**

Management of Docker containers and all related procedures on the server is carried out by executing Bash scripts generated in **n8n**. These scripts return either a JSON response or a string.

- All scripts are located in elements directly connected to the **SSH** element.
- You have full control over any script and can modify or execute it as needed.

[![image-1741876353319.png](https://doc.puq.info/uploads/images/gallery/2025-03/scaled-1680-/image-1741876353319.png)](https://doc.puq.info/uploads/images/gallery/2025-03/image-1741876353319.png)

## 📊 Basic Information

- **Workflow ID:** 3212
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 309
- **Downloads:** 30
- **Created:** 2025/3/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3212)

## 👤 Author

- **Name:** PUQcloud
- **Username:** @puqcloud

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **if** (×2)
- **set** (×23)
- **webhook** 
- **respondToWebhook** (×2)
- **code** 
- **ssh** 
- **switch** (×4)
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 32 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
