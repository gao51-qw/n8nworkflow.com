# Convert multiple files to base64 with JavaScript code

> ## Base64 Encode Multiple Binary Files with a Code Node
This template demonstrates how to handle multiple binary files in n8n by using a Code node to convert them into a Base64 encoded string. It's particularly useful when an API requires file uploads in this format and the standard 'Extract From File' node is not sufficient for batch processing. The workflow starts by downloading a ZIP file, unzipping it to get multiple binary files, and then uses a Code node with custom JavaScript to encode each file individually.
### Instructions
1. Download and import this template into your n8n instance.
2. Run the workflow once to see how it downloads, unzips, and then encodes multiple files.
3. Modify the 'HTTP Request' node to download your own binary file or a ZIP file containing multiple files.
4. Update the 'Code' node if you need to adjust the output format or file paths.
5. Use the output of the 'Code' node in a subsequent node, such as another 'HTTP Request' to send the Base64-encoded files to your desired API.

A link to the full blog post is available [here](https://n8nplaybook.com/post/2025/08/from-binary-to-base64-in-n8n/).


## 📊 Basic Information

- **Workflow ID:** 6885
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 579
- **Downloads:** 57
- **Created:** 2025/8/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6885)

## 👤 Author

- **Name:** Viktor Klepikovskyi
- **Username:** @vklepikovskyi

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** 
- **compression** 
- **code** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
