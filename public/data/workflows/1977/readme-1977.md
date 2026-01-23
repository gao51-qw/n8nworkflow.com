# Weekly Shodan query - report accidents

> This n8n workflow, which runs every Monday at 5:00 AM, initiates a comprehensive process to monitor and analyze network security by scrutinizing IP addresses and their associated ports. It begins by fetching a list of watched IP addresses and expected ports through an HTTP request. Each IP address is then processed in a sequential loop.

For every IP, the workflow sends a GET request to Shodan, a renowned search engine for internet-connected devices, to gather detailed information about the IP. It then extracts the data field from Shodan's response, converting it into an array. This array contains information on all ports Shodan has data for regarding the IP.

A filter node compares the ports returned from Shodan with the expected list obtained initially. If a port doesn't match the expected list, it is retained for further processing; otherwise, it's filtered out. For each such unexpected port, the workflow assembles data including the IP, hostnames from Shodan, the unexpected port number, service description, and detailed data from Shodan like HTTP status code, date, time, and headers.

This collected data is then formatted into an HTML table, which is subsequently converted into Markdown format. Finally, the workflow generates an alert in TheHive, a popular security incident response platform. This alert contains details like the title indicating unexpected ports for the specific IP, a description comprising the Markdown table with Shodan data, medium severity, current date and time, tags, Traffic Light Protocol (TLP) set to Amber, a new status, type as 'Unexpected open port', the source as n8n, a unique source reference combining the IP with the current Unix time, and enabling follow and JSON parameters options. This comprehensive workflow thus aids in the proactive monitoring and management of network security.

## 📊 Basic Information

- **Workflow ID:** 1977
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 12427
- **Downloads:** 1242
- **Created:** 2023/11/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1977)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **httpRequest** (×2)
- **itemLists** 
- **filter** 
- **set** 
- **html** 
- **markdown** 
- **splitInBatches** 
- **stickyNote** (×5)
- **scheduleTrigger** 
- **theHive** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
