# User verification and login using Auth0

>   ***Release yourself from the pain of user login with this simple solution!***
 ## Who this is for
 This is for everyone that wants to provide a simple login solution to their users/colleagues
 
 ## What this template does
- This workflow utilizes Auth0 to provide a simple and easy authentication page that allows login via gmail or any email address.

## Setup
To use this workflow, simply sign up at https://auth0.com and create a new Single Page Application, then from Dashboard/Applications, copy the values as instructed in the workflow. It should not take more than ten minutes to setup.
1. First, go to https://auth0.com and create a Single Page Application. 
2. From Dashboard/Applications, click on your new app settings. 
3. The first step is to add the following to allowed callback URLs: http://localhost:5678, http://localhost:5678/webhook/receive-token (If you do not run n8n locally, replace localhost with your server where you run n8n. You must also replace it in **Set Application Details** 'my_server' field)
4. From the same settings page,  retrieve the Domain, Client_ID, and Client_Secret of your application.
5. Fill in Set Application Details and Set Application Details1
6. **Login from https://<n8n server address>/webhook/login!**

- It can also be extended to allow login via Github, Facebook, and other socials.



## 📊 Basic Information

- **Workflow ID:** 2408
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 17648
- **Downloads:** 1764
- **Created:** 2024/9/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2408)

## 👤 Author

- **Name:** Jay Hartley
- **Username:** @jay

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **httpRequest** (×2)
- **if** 
- **stopAndError** 
- **respondToWebhook** 
- **stickyNote** (×7)
- **set** (×2)
- **webhook** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
