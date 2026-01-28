# Post to an XMLRPC API via the HTTP Request node

> ## What this does

* Show you how to us XMLRPC APIs via the generic HTTP-Request-node, by the example of posting to a wordpress blog
* This is also a feasible workaround if a specific n8n integration does not work or stops working (which happens e.g. with the Wordpress node)

## How it works

* First, the XML payload for the request is being prepared (in a code node, which also properly escapes special character in the values that you want to send to the XMLRPC endpoint)
* Then, the HTTP Request node sends the request using the HTTP post method
* Last, the returned XML response is converted to JSON which a conditional node uses to determine whether th operation was successful or not

## Setup steps:

* Import workflow
* Ensure you have a wordpress blog with a user that has an [_app_-Password](https://wordpress.com/support/security/two-step-authentication/application-specific-passwords/)
* Edit the "Settings"-node and enter your individual values for url/user/app-pw

## 📊 Basic Information

- **Workflow ID:** 2888
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 926
- **Downloads:** 92
- **Created:** 2025/2/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2888)

## 👤 Author

- **Name:** Daniel Nolde
- **Username:** @dnolde

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **set** 
- **manualTrigger** 
- **stickyNote** (×3)
- **noOp** (×2)
- **code** 
- **httpRequest** 
- **if** 
- **xml** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
