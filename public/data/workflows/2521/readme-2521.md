# Transfer credentials to other n8n instances using a multi-form

> ## Purpose

This workflow allows you to transfer credentials from one n8n instance to another.

![Image](https://i.imgur.com/uqAjqZ6.png)
![Image](https://i.imgur.com/vZcTTvX.png)

## How it works

- A multi-form setup guides you through the entire process
- You get to choose one of your predefined (in the Settings node) remote instances first
- Then all credentials of the current instance are being retrieved using the Execute Command node
- On the next form page you can select one of the credentials by their name and initiate the transfer
- Finally the credential is being created on the remote instance using the n8n API. A final form ending indicates if that action succeeded or not.

## Setup

- Select your credentials in the nodes which require those
- Configure your remote instance(s) in the Settings node
    - Every instance is defined as object with the keys *name*, *apiKey* and *baseUrl*. Those instances are then wrapped inside an array. You can find an example described within a note on the workflow canvas.

## How to use

- Grab the (production) URL of the Form from the first node
- Open the URL and follow the instructions given in the multi-form

## Disclaimer

- Please note, that this workflow can only run on self-hosted n8n instances, since it requires the Execute Command Node.
- Security: Beware, that all credentials are being decrypted and processed within the workflow. Also the API keys to other n8n instances are stored within the workflow.
- This solution is primarily meant for transferring data between testing environments. For production use consider the n8n enterprise edition which provides a **reliable** way to manage credentials across different environments.

## 📊 Basic Information

- **Workflow ID:** 2521
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 2999
- **Downloads:** 299
- **Created:** 2024/11/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2521)

## 👤 Author

- **Name:** Mario
- **Username:** @octionic

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **form** (×4)
- **httpRequest** 
- **code** (×3)
- **set** 
- **executeCommand** 
- **readWriteFile** 
- **extractFromFile** 
- **stickyNote** (×9)
- **formTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
