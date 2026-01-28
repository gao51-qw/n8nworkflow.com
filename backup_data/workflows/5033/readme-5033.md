# Compare lists and identify common items & differences using custom keys

> This workflow compares two lists of objects (List A and List B) using a user-specified key (e.g. `email`, `id`, `domain`) and returns:

- Items common to both lists (based on the key)
- Items only in List A
- Items only in List B

### How it works:
1. Accepts a JSON input containing:
   - `listA`: the first list of items
   - `listB`: the second list of items
   - `key`: the field name to use for comparison
2. Performs a field-based comparison using the specified key
3. Returns a structured output:
   - `common`: items with matching keys (only one version retained)
   - `onlyInA`: items found only in List A
   - `onlyInB`: items found only in List B

### Example Input:
```json
{
  "key": "email",
  "listA": [
    { "email": "alice@example.com", "name": "Alice" },
    { "email": "bob@example.com", "name": "Bob" }
  ],
  "listB": [
    { "email": "bob@example.com", "name": "Bobby" },
    { "email": "carol@example.com", "name": "Carol" }
  ]
}
```

### Output:
- `common`: `[ { "email": "bob@example.com", "name": "Bob" } ]`
- `onlyInA`: `[ { "email": "alice@example.com", "name": "Alice" } ]`
- `onlyInB`: `[ { "email": "carol@example.com", "name": "Carol" } ]`

### Use Cases:
- Deduplicate data between two sources
- Find overlapping records
- Identify new or missing entries across systems

This workflow is useful for internal data auditing, list reconciliation, transaction reconciliation, or pre-processing sync jobs.

## 📊 Basic Information

- **Workflow ID:** 5033
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 372
- **Downloads:** 37
- **Created:** 2025/6/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5033)

## 👤 Author

- **Name:** Tenkay
- **Username:** @tenkay

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **code** 
- **stickyNote** 
- **switch** 
- **set** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
