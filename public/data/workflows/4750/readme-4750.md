# Fetch the public IP addresses of your n8n instance

> ## Why
If you need to use n8n to connect to service providers of yours,  some of which happen to  rely on firewall white-listing as part of their access control, you'll need to determine or verify the public IP addresses of your n8n instance(s).

## How does it work
* The webhook, upon invocation, will use **Http Request** node to request public IP address information from ++api.ipify.org++ in json format, for 10 times, then **aggregate** results to an array.
  * The reason to repeat, is to get all the potential public IP addresses of your n8n instance.
  * Often than not, enterprises or network providers deploy at least a pair of gateway devices at the border for redundancy.
* built-in array functions in a javascript expression are used to **pluck** all the values under 'ip' key, and to dedup to an array as response body.

## How to set it up
* import the workflow
* set up your own header-auth credential
* update the workflow to use the new credential
* test or activate workflow as usual.

## example invocation
```
$ curl -H "api-key: super-long-api-token" http://localhost:5678/webhook-test/4879bc79-d6f8-48df-bfe4-613366c7f399
["88.88.88.66", "88.88.88.88"]
```



## 📊 Basic Information

- **Workflow ID:** 4750
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 1096
- **Downloads:** 109
- **Created:** 2025/6/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4750)

## 👤 Author

- **Name:** Ger Longstacks
- **Username:** @dims3body

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **httpRequest** 
- **webhook** 
- **respondToWebhook** 
- **stickyNote** 
- **aggregate** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
