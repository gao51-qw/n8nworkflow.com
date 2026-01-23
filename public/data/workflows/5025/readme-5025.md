# XOR encryption and decryption with Base64 encoding for workflow data

> This workflow performs basic XOR-based encryption and decryption using a custom password. It is intended to be triggered by another workflow and processes structured input in JSON format.

### Input Structure

The workflow expects a single array of objects with the following fields:

- `action-type`: either `"encrypt"` or `"decrypt"`
- `key`: the password used for encryption and decryption
- `data`: the content to encrypt or decrypt

### Example: Encryption Input

```json
[
  {
    "action-type": "encrypt",
    "key": "Password",
    "data": "Hello, this is a secret message"
  }
]
```

### Example: Decryption Input

```json
[
  {
    "action-type": "decrypt",
    "key": "Password",
    "data": "ChwGAQceF15eE2QXFRcUagxGVgV8TBoNBA4VQVoQZkwVUhImU1FTEg=="
  }
]
```

### Output

The output returns an array of results, each containing either the encrypted string (base64 format) or the decrypted plain text.

### Use Case

This workflow is useful for simple internal message encoding, data obfuscation, or testing purposes. It is not recommended for securing sensitive or personal data, as XOR encryption is not cryptographically secure.

The workflow logic is written in JavaScript using n8n Function nodes, without any external dependencies.


## 📊 Basic Information

- **Workflow ID:** 5025
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 301
- **Downloads:** 30
- **Created:** 2025/6/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5025)

## 👤 Author

- **Name:** Tenkay
- **Username:** @tenkay

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **if** 
- **code** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
