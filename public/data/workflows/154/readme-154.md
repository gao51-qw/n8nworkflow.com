# Listen on new emails on a IMAP mailbox

> Listen on new emails on a given IMAP mailbox. Converts the binary XML attachment to a stringified `xml`property on the `$data` object and converts it to JSON. The `Set`node could be replaced with `Function` nodes for example to do a conversion/mapping/transformation.

![workflow-screenshot](fileId:21)

The JSON is ultimately sent to a HTTP Endpoint via POST.

> This could be a starter for EDI purposes like receiving or transmitting XML data and conversion via JSON object property mapping.

## 📊 Basic Information

- **Workflow ID:** 154
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 8096
- **Downloads:** 809
- **Created:** 2019/11/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/154)

## 👤 Author

- **Name:** mail
- **Username:** @vuchl

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **emailReadImap** 
- **moveBinaryData** 
- **xml** 
- **httpRequest** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
