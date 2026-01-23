# Create a secure MongoDB data retrieval API with input validation and HTTP responses

> **Data Extraction from MongoDB**

**Overview**
This workflow exposes a public HTTP GET endpoint to read all documents from a MongoDB collection, with:

- Strict validation of the collection name

- Error handling with proper 4xx codes

- Response formatting (e.g., _id → id) and a consistent 2XX JSON envelope


**Workflow Steps**
1. **Webhook Trigger: *A public GET endpoint receives requests with the collection name as a parameter***. 

The workflow begins with a webhook that listens for incoming HTTP GET requests.

The endpoint follows this pattern:

```
https://{{your-n8n-instance}}/webhook-test/{{uuid&gt}}/:nameCollection
```



The **:nameCollection** parameter is passed directly in the URL and specifies the MongoDB collection to be queried.

Example:
```
https://yourdomain.com/webhook-test/abcd1234/orders
```

would attempt to fetch all documents from the orders collection.

2. **Validation: *The collection name is checked against a set of rules to prevent invalid or unsafe queries***.

Before querying the database, the collection name undergoes validation using a regular expression:

```
^(?!system\.)[a-zA-Z0-9._]{1,120}$
```

**Purpose of validation:**

Blocks access to MongoDB’s reserved system.* collections.

Prevents injection attacks by ensuring only alphanumeric characters, underscores, and dots are allowed.

Enforces MongoDB’s length restrictions (max 120 characters).

This step ensures the workflow cannot be exploited with malicious input.

3. **Conditional Check: *If the validation fails, the workflow stops and returns an error message. If it succeeds, it continues.***

The workflow checks if the collection name passes validation.

If valid ✅: proceeds to query MongoDB.

If invalid ❌: immediately returns a structured HTTP 400 response, adhering to RESTful standards:

```
{
  "code": 400,
  "message": "{{ $json.message }}"
}
```


4. **MongoDB Query: *The workflow connects to MongoDB and retrieves all documents from the specified collection.***

To use the MongoDB node, a proper database connection must be configured in n8n. This is done through MongoDB Credentials in the node settings:

Create MongoDB Credentials in n8n

**Go to n8n → Credentials → New.**

Select MongoDB and Fill in the following fields:

**Host:** The MongoDB server hostname or IP (e.g., cluster0.mongodb.net).

**Port:** Default is 27017 for local deployments.

**Database:** Name of the database (e.g., myDatabase).

**User:** MongoDB username with read permissions.

**Password:** Corresponding password.

**Connection Type:** Standard for most cases, or Connection String if using a full URI.

**Replica Set / SRV Record:** Enable if using MongoDB Atlas or a replica cluster. 

**Using a Connection String (recommended for MongoDB Atlas)**

Example URI:

```
mongodb+srv://&lt;username&gt;:&lt;password&gt;@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority
```

Paste this into the Connection String field when selecting *"Connection String"* as the type.

**Verify the Connection**

After saving, test the credentials to confirm n8n can connect successfully to your MongoDB instance.

Configure the MongoDB Node in the Workflow

**Operation:** Find (to fetch documents).

**Collection:** Dynamic value passed from the workflow *(e.g., {{$json["nameCollection"]}}).*

**Query:** Leave empty to fetch all documents, or define filters if needed.

**Result:**
The MongoDB node will retrieve all documents from the specified collection and pass the dataset as JSON to the next node for processing.


5. **Data Formatting: *The retrieved documents are processed to adjust field names.***

By default, MongoDB returns its unique identifier as _id.

To align with common API conventions, this step renames _id → id.

This small transformation simplifies downstream usage, making responses more intuitive for client applications.


6. **Response: *The cleaned dataset is returned as a structured JSON response to the original request.***

The processed dataset is returned as the response to the original HTTP request.

Clients receive a clean JSON payload with the expected format and renamed identifiers.

**Example response:**
```
[
  {
    "id": "64f13c1e2f1a5e34d9b3e7f0",
    "name": "John Doe",
    "email": "john@example.com"
  },
  {
    "id": "64f13c1e2f1a5e34d9b3e7f1",
    "name": "Jane Smith",
    "email": "jane@example.com"
  }
]
```

**Workflow Summary**

Webhook (GET) 
   → Code (Validation) 
       → IF (Validation Check) 
           → MongoDB (Query) 
               → Code (Transform IDs) 
                   → Respond to Webhook

**Key Benefits**
✅ Security-first design: prevents unauthorized access or injection attacks.

✅ Standards compliance: uses HTTP status codes (400) for invalid requests.

✅ Clean API response: transforms MongoDB’s native _id into a more user-friendly id.

✅ Scalability: ready for integration with any frontend, third-party service, or analytics pipeline.

## 📊 Basic Information

- **Workflow ID:** 7674
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 383
- **Downloads:** 38
- **Created:** 2025/8/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7674)

## 👤 Author

- **Name:** Samuel Heredia
- **Username:** @sheredia

## 🏷️ Categories

- Engineering
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **mongoDb** 
- **respondToWebhook** (×2)
- **stickyNote** (×15)
- **if** 
- **code** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
