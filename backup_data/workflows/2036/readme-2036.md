# Domain extractor

> This node is designed to cleanse URLs and extract their domain names efficiently. 

It effectively handles a wide range of URL formats, including those with unconventional or complex top-level domains (TLDs), such as 'co.uk'.

You can also use it to extract the domain from an email. The node will also check if the domain is from a free email provider (gmail.com / outlook.com...etc) or not.

### How It Works
The node analyzes the provided URL, removing any unnecessary elements.

It then identifies and extracts the domain name, ensuring compatibility with a diverse array of TLDs.

The node utilizes an extensive list of TLDs to guarantee accurate domain extraction for virtually any URL. 

To view the complete list of supported top-level domains, please visit: [TLD List on GitHub](https://github.com/publicsuffix/list)


### How to use it
Call this workflow using the "execute workflow" node

You can pass either an email variable or a url variable. 

For email, the node also detect free mail provider such as Yahoo / Google...etc

## 📊 Basic Information

- **Workflow ID:** 2036
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 2998
- **Downloads:** 299
- **Created:** 2023/12/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2036)

## 👤 Author

- **Name:** Lucas Perret
- **Username:** @lucasperret

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **code** 
- **executeWorkflowTrigger** 
- **set** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
