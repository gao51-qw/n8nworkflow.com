# Create Dynamic Workflows Programmatically via Webhooks & n8n API

> ## Overview

This workflow exposes an HTTP endpoint (webhook) that accepts a JSON definition of an n8n workflow, validates it, and—if everything is correct—dynamically creates that workflow in the n8n instance via its internal API. If any validation fails or the API call encounters an error, an explanatory message with details is returned.

## Workflow Diagram

```text
Webhook
   │
   ▼
Validate JSON ── fails validation ──► Validation Error
   │
   └─ passes ─► Validation Successful?
                           │
                           ├─ true ─► Create Workflow ──► API Successful? ──► Success Response
                           │                                 │
                           │                                 └─ false ─► API Error
                           └─ false ─► Validation Error
```

## Step-by-Step Details

### 1. Webhook

* **Type**: Webhook (POST)
* **Path**: `/webhook/create-workflow`
* **Purpose**: Expose a URL to receive a JSON definition of a workflow.
* **Expected Input**: JSON containing the main workflow fields (`name`, `nodes`, `connections`, `settings`).

### 2. Validate JSON

* **Type**: Code Node (JavaScript)
* **Validations Performed**:

  * Ensure that `payload` exists and contains both `name` and `nodes`.
  * Verify that `nodes` is an array with at least one item.
  * Check that each node includes the required fields: `id`, `name`, `type`, `position`.
  * If missing, initialize `connections`, `settings`, `parameters`, and `typeVersion`.
* **Output if Error**:

  ```json
  { "success": false, "message": "&lt;error description&gt;" }
  ```
* **Output if Valid**:

  ```json
  {
    "success": true,
    "apiWorkflow": {
      "name": payload.name,
      "nodes": payload.nodes,
      "connections": payload.connections,
      "settings": payload.settings
    }
  }
  ```

### 3. Validation Successful?

* **Type**: IF Node
* **Condition**: `$json.success === true`
* **Branches**:

  * **true**: proceed to **Create Workflow**
  * **false**: route to **Validation Error**

### 4. Create Workflow

* **Type**: HTTP Request (POST)
* **URL**: `http://127.0.0.1:5678/api/v1/workflows`
* **Authentication**: Header Auth with internal credentials
* **Body**: The `apiWorkflow` object generated earlier
* **Options**: `continueOnFail: true` (to handle failures in the next IF)

### 5. API Successful?

* **Type**: IF Node
* **Condition**: `$response.statusCode &lt;= 299`
* **Branches**:

  * **true**: proceed to **Success Response**
  * **false**: route to **API Error**

### 6. Success Response

* **Type**: SET Node
* **Output**:

  ```json
  {
    "success": "true",
    "message": "Workflow created successfully",
    "workflowId": "{{ $json.data[0].id }}",
    "workflowName": "{{ $json.data[0].name }}",
    "createdAt": "{{ $json.data[0].createdAt }}",
    "url": "http://localhost:5678/workflow/{{ $json.data[0].id }}"
  }
  ```

### 7. API Error

* **Type**: SET Node
* **Output**:

  ```json
  {
    "success": "false",
    "message": "Error creating workflow",
    "error": "{{ JSON.stringify($json) }}",
    "statusCode": "{{ $response.statusCode }}"
  }
  ```

### 8. Validation Error

* **Type**: SET Node
* **Output**:

  ```json
  { "success": false, "message": "{{ $json.message }}" }
  ```

## Example Webhook Request

```bash
curl --location --request POST 'http://localhost:5678/webhook/create-workflow' \
--header 'Content-Type: application/json' \
--data-raw '{
  "name": "My Dynamic Workflow",
  "nodes": [
    {
      "id": "start-node",
      "name": "Start",
      "type": "n8n-nodes-base.manualTrigger",
      "typeVersion": 1,
      "position": [100, 100],
      "parameters": {}
    },
    {
      "id": "set-node",
      "name": "Set",
      "type": "n8n-nodes-base.set",
      "typeVersion": 1,
      "position": [300, 100],
      "parameters": {
        "values": {
          "string": [
            { "name": "message", "value": "Hello from a webhook-created workflow!" }
          ]
        }
      }
    }
  ],
  "connections": {
    "Start": {
      "main": [
        [ { "node": "Set", "type": "main", "index": 0 } ]
      ]
    }
  },
  "settings": {}
}'
```

### Expected Success Response

```json
{
  "success": "true",
  "message": "Workflow created successfully",
  "workflowId": "abcdef1234567890",
  "workflowName": "My Dynamic Workflow",
  "createdAt": "2025-05-31T12:34:56.789Z",
  "url": "http://localhost:5678/workflow/abcdef1234567890"
}
```

### Validation Error Response

```json
{
  "success": false,
  "message": "The 'name' field is required in the workflow"
}
```

### API Error Response

```json
{
  "success": "false",
  "message": "Error creating workflow",
  "error": "{ ...full API response details... }",
  "statusCode": 401
}
```


## 📊 Basic Information

- **Workflow ID:** 4544
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 1375
- **Downloads:** 137
- **Created:** 2025/6/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4544)

## 👤 Author

- **Name:** Mauricio Perera
- **Username:** @rckflr

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **stickyNote** (×3)
- **webhook** 
- **code** 
- **if** (×2)
- **httpRequest** 
- **set** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
