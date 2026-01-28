# User-friendly technical support portal for GLPI ticket management

> # Custom Interface for GLPI with n8n

Transform your GLPI system's user experience with a modern, optimized web interface that simplifies technical support ticket creation.
How it works

Unified entry portal: Users access an intuitive web form where they select between "Request" or "Incident"
Custom data collection: Specific forms adapt fields based on ticket type, requesting only relevant information
Automatic processing: The system automatically maps categories and priorities, creates tickets in GLPI via REST API
File management: Allows document attachments that are automatically linked to the created ticket
Confirmation and tracking: Provides the generated ticket ID for future follow-up

## Key benefits

✅ More user-friendly interface than native GLPI interface
✅ Adaptive forms based on request type
✅ Error reduction through automatic validations
✅ Mobile-optimized user experience
✅ Seamless integration with existing GLPI

## Setup steps
⏱️ Estimated time: 15-20 minutes
Prerequisites

GLPI server with REST API enabled
User with application administrator privileges
Application token generated in GLPI

## Basic configuration

Connection variables: Update GLPI server URL and application token in the "Configuration Variables" node
Authentication credentials: Configure HTTP Basic Auth credentials for GLPI connection
Category IDs: Identify and map ITIL category IDs in the processing nodes
Form customization: Adapt fields, options, and categories according to organizational needs

## Activation

Activate the workflow and obtain web form URLs
Share the portal link with end users
Perform ticket creation tests

## Ideal use cases

Companies looking to improve GLPI user experience
Organizations needing more intuitive support forms
IT teams wanting to reduce miscategorized tickets
Companies requiring mobile-friendly support interfaces

## Technologies used

n8n (orchestration and web forms)
GLPI REST API
HTTP Basic Authentication
Automatic session management

## 📊 Basic Information

- **Workflow ID:** 7392
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 1804
- **Downloads:** 180
- **Created:** 2025/8/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7392)

## 👤 Author

- **Name:** Luis Hernandez
- **Username:** @integropen

## 🏷️ Categories

- Ticket Management
- Multimodal AI

## 🔗 Nodes Used

- **noOp** 
- **formTrigger** 
- **form** (×5)
- **switch** 
- **code** (×2)
- **httpRequest** (×8)
- **set** 
- **if** (×4)
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
