# Convert multiple binary files to base64 JSON arrays with no custom code

> ## No-Code: Convert Multiple Binary Files to Base64

### Introduction

This template provides a robust, purely **no-code** solution for a common integration challenge: converting multiple binary files contained within a single n8n item (e.g., after unzipping an archive) into a structured JSON array of Base64 encoded strings.

### Purpose

Many external APIs, especially those handling batch file uploads or complex data structures, require files to be submitted as a single JSON payload. This payload typically needs an array containing two elements for each file: the reconstructed file path/name and the Base64 encoded content. This template automatically handles the file isolation, encoding, path reconstruction, and final JSON aggregation, replacing the need for complex custom JavaScript Code nodes.

### Configuration Steps

1. **Input**: Connect your binary data source (e.g., an **HTTP Request** followed by a **Compression** node) to the first node in this template.
2. **Split Out**: This node automatically separates the multiple binary files into individual items.
3. **Extract From File**: This node uses the dynamic expression `{{ $binary.keys()[0] }}` to ensure the correct binary file is targeted and converted to Base64.
4. **Set**: This node uses a conditional expression to reconstruct the full `path` (including the directory, if present) for each file.
5. **Aggregate**: The final node merges all individual items into a single, clean JSON item containing a top-level `files` array, ready for your final API call.


For a detailed walkthrough, including the explanation behind the dynamic expressions and why this is superior to the custom code solution, check out the full blog post: [The No-Code Evolution: Base64 Encoding Multiple Files in n8n (Part 2)](https://n8nplaybook.com/post/2025/10/no-code-base64-encoding-in-n8n).

## 📊 Basic Information

- **Workflow ID:** 9481
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 306
- **Downloads:** 30
- **Created:** 2025/10/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9481)

## 👤 Author

- **Name:** Viktor Klepikovskyi
- **Username:** @vklepikovskyi

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **manualTrigger** 
- **compression** 
- **httpRequest** 
- **splitOut** 
- **extractFromFile** 
- **set** 
- **aggregate** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
