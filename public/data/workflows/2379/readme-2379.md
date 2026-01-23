# Validate TOTP token (without creating a credential)

> ## TOTP Validation with Function Node

This template allows you to verify if a 6-digit TOTP code is valid using the corresponding TOTP secret. It can be used in an authentication system.
The inputs need to be: 
- a base32 totp secret (String)
- a 6 digits code (String)

++Important:++ The 6-digit code must be in text format. If the code starts with zeros and is treated as a number, it could cause validation issues.

The function node will generate a 6-digit code from the TOTP secret, then compare it with the provided code. If they match, it will return `1` otherwise, it will return `0`.
## Example usage:

- You retrieve the user's TOTP secret from a database, then you want to verify if the 2FA code provided by the user is valid.

## Setup Guidelines
You only need the ==`TOTP VALIDATION`== node.
==You will need to modify lines `39` and `40`== of the node with the correct values for your specific context.

## Testing the Template
You can define a sample secret and code in the `EXAMPLE FIELDS` node of the template, then click `"Test Workflow"`.
If the code is valid for the provided secret, the flow will proceed to the `true` branch of the `IF CODE IS VALID` node. Otherwise, it will go to the `false` branch.

## 📊 Basic Information

- **Workflow ID:** 2379
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 603
- **Downloads:** 60
- **Created:** 2024/8/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2379)

## 👤 Author

- **Name:** Bazhard
- **Username:** @bazhard

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **manualTrigger** 
- **code** 
- **if** 
- **stickyNote** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
