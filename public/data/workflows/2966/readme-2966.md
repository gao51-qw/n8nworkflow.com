# Upload multiple attachments from Gmail to Google Drive - without a code node

> ## Summary
This template uses the item handling nodes, and expression-support in n8n, **without using a `Code` node**, to extract **multiple** attachments from a GMail (trigger input) message/event, and (conditionally) upload each of them to Google Drive.

Note: There is another template titled [Get Multiple Attachments from Gmail and upload them to GDrive](&lt;https://n8n.io/workflows/2348-get-multiple-attachments-from-gmail-and-upload-them-to-gdrive/&gt;) that does basically the same thing, but it uses a `Code` node.

## Details
### Using `Split Out` instead of `Code`
The “secret” to how this works is that n8n supports a special input field name `$binary` that references the entire set of (multiple) binary data sub-elements in a single input item.  It may look like an expression, but in this case it is a “fixed” (literal) value used as the `Fields to Split Out` parameter value.

### Dealing with names that are prefixed/suffixed with an Index
The next challenge with multiple attachments from a GMail message is that **each one is still assigned different name** like "attachment_0", "attachment_1", etc.  This makes it tricky to reference them in a generic way.  However, **once n8n splits the items out**, the binary in **each item is always the first (i.e. index-zero / `[0]`) and ONLY key/value**.  So, that makes it possible get the key-name and attributes of the corresponding value indirectly with some clever expression syntax.
* `Input Data Field Name` -&gt; Expression: `{{ $binary.keys()[0] }}` - **This returns the name, regardless of whether it is "attachment_0", "attachment_1", or whatever else.**
* Attachment file name: -&gt; Expression: `{{ $binary.values()[0].fileName }}`
* Attachment file name extension: -&gt; Expression: `{{ $binary.values()[0].fileExtension }}`
* Attachment file type: -&gt; Expression: `{{ $binary.values()[0].fileType }}`
* Attachment file size (e.g. string "100 kB"): -&gt; Expression: `{{ $binary.values()[0].fileSize }}`
* Attachment file size (numeric): -&gt; Expression: `{{ $binary.values()[0].fileSize.split(' ')[0].toNumber() }}`
* Attachment mime type: -&gt; Expression: `{{ $binary.values()[0].mimeType }}`
* Attachment id (storage GUID): -&gt; Expression: `{{ $binary.values()[0].id }}`

## Flow Control
Since each of the attachments becomes a single item, it is relatively straightforward to introduce other n8n nodes like `If`, `Switch`, or `Filter` and route each single attachment item into different workflow paths.  The template demonstrates how each attachment binary could be routed based on its file size, as an example.

## 📊 Basic Information

- **Workflow ID:** 2966
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 3138
- **Downloads:** 313
- **Created:** 2025/2/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2966)

## 👤 Author

- **Name:** Hubschrauber
- **Username:** @hubschrauber

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **gmailTrigger** 
- **googleDrive** 
- **splitOut** 
- **stickyNote** (×2)
- **switch** 
- **noOp** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
