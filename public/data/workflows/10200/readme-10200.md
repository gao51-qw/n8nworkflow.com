# Perform Multi-type DNS Lookups with Google's Free Public DNS Service

> # This n8n template makes it easy to perform DNS lookups directly within your n8n workflow using dns.google, without any API credentials.

## Use Cases

* **Track changes:** Schedule execution and log DNS answers to track changes to records over time.

* **Monitoring and alerts:** Schedule execution for DNS monitoring to detect misconfiguration and to trigger immediate alerts.

* **Prerequisite checks:** Use in more extensive workflows to ensure DNS resolves correctly before running a website crawl or other sensitive tasks.

## Good to Know
* Requires **no API credentials**. You do not need to sign up for any third party service for DNS resolution.

* Can easily be modified to use with a **webhook** instead of the default **Forms** node for external triggering.

* By default performs lookup for: 
A
CNAME
AAAA
MX
TXT
NS

## How It Works

1. The workflow checks the input for a specified DNS type. If none is found, it uses all types in a predefined list.

2. It splits the data into separate items for each DNS type.

3. It loops through all items and executes DNS resolution via the highly reliable _dns.google_ service.

4. It aggregates all results into a single, easy-to-use output structure.

## How to Use

1. Import the template and execute the workflow to enter the domain you want to look up in the Form interface.

2. Connect the final output node to your specific use case (logging, alerting, subsequent workflow steps, etc.).

## 📊 Basic Information

- **Workflow ID:** 10200
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 1869
- **Downloads:** 186
- **Created:** 2025/10/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10200)

## 👤 Author

- **Name:** Ossian Madisson
- **Username:** @ossian

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **splitOut** 
- **httpRequest** 
- **code** (×2)
- **set** (×2)
- **if** 
- **splitInBatches** 
- **stickyNote** (×3)
- **formTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
