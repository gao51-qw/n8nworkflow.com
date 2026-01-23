# Convert JSON objects to base64 strings with file processing

> ## Encode JSON to Base64 String in n8n

This example workflow demonstrates how to convert a JSON object into a base64-encoded string using n8n’s built-in file processing capabilities. This is a common requirement when working with APIs, webhooks, or SaaS integrations that expect payloads to be base64-encoded.

&gt; **Tip:** The three green-highlighted nodes (Stringify → Convert to File → Extract from File) can be wrapped in a Subworkflow to create a reusable Base64 encoder in your own projects.

---

## 🔧 Requirements
- Any running n8n instance (local or cloud)
- No credentials or external services required

---

## What This Workflow Does
1. Generates example JSON data
2. Converts the JSON to a string
3. Saves the string as a binary file
4. Extracts the file’s contents as a base64 string
5. Outputs the base64 string on the final node

---

## Step-by-Step Setup

1. **Manual Trigger**  
   Start the workflow using the `Manual Execution` node. This is useful for testing and development.

2. **Create JSON Data**  
   The `Create Json Data` node uses raw mode to construct a sample object with all major JSON types: strings, numbers, booleans, nulls, arrays, nested objects, etc.

3. **Convert to String**  
   The `Convert to String` node uses the expression `={{ JSON.stringify($json) }}` to flatten the object into a single string field named `json_text`.

4. **Convert to File**  
   The `Convert to File` node takes the `json_text` value and saves it to a UTF-8 encoded binary file in the property `encoded_text`.

5. **Extract from File**  
   This node takes the binary file and extracts its contents as a base64-encoded string. The result is saved in the `base64_text` field.

---

## Customization Tips
- Replace the sample JSON in the `Create Json Data` node with your own payload structure.
- To make this reusable, extract the three core nodes into a Subworkflow or wrap them in a custom Function.
- Use the `base64_text` output field to post to APIs, store in databases, or include in webhook responses.



## 📊 Basic Information

- **Workflow ID:** 6008
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 491
- **Downloads:** 49
- **Created:** 2025/7/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6008)

## 👤 Author

- **Name:** Wyeth
- **Username:** @wyeth

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **stickyNote** (×4)
- **set** (×2)
- **manualTrigger** 
- **extractFromFile** 
- **convertToFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
