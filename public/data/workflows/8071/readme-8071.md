# Process contact form submissions with validation and MongoDB storage

> This n8n workflow securely processes contact form submissions by validating user input, formatting the data, and storing it in a MongoDB database. The flow ensures data consistency, prevents unsafe entries, and provides a confirmation response back to the user.


**Workflow**

**1. Form Submission Node**

*Purpose*: Serves as the workflow’s entry point.

*Functionality*: Captures user input from the contact form, which typically includes:

```
name
```
```
last name
```
```
email
```
```
phone number
```


**2. Code Node (Validation Layer)**

*Purpose*: Ensures that collected data is valid and secure.

*Validations performed*: 

- Removes suspicious characters to mitigate risks like SQL injection or script injection.

- Validates the phone_number field format (numeric, correct length, etc.).

- If any field fails validation, the entry is marked as “is_not_valid” to block it from database insertion.

**3. Edit Fields Node (Data Formatting)**

*Purpose*: Normalizes data before database insertion.

*Transformations applied:*

- Converts field names to snake_case (*first_name, last_name, phone_number*).

- Standardizes field naming convention for consistency in MongoDB storage.

**4. MongoDB Node (Insert Documents)**

*Purpose*: Persists validated data in MongoDB Atlas.

*Process*:

- Inserts documents into the target collection with the cleaned and formatted fields.

- Connection is established securely using a MongoDB Atlas connection string (URI).


🔧 How to Set Up MongoDB Atlas Connection URL



a. Create a Cluster

b. Log in to [MongoDB Atlas](https://www.google.com/aclk?sa=L&ai=DChsSEwiD276cwbOPAxVpKkQIHTFOCpMYACICCAEQAxoCZHo&co=1&ase=2&gclid=Cj0KCQjwwsrFBhD6ARIsAPnUFD3UpSa_1KFmRsdiOYmSRl0oXmh3kC8g8ZhGf8TOhiUsLGbHnwf046AaAgufEALw_wcB&cce=2&category=acrcp_v1_32&sig=AOD64_36CMbBMVgqf0cvThw5lpmpl-cMcQ&q&nis=4&adurl&ved=2ahUKEwiVzbScwbOPAxUzuJUCHQCKMnUQqyQoAXoECBcQDw) and create a new cluster.

c. Configure Database Access: Add a database user with a secure username and password, Assign appropriate roles (e.g., Atlas Admin for full access or Read/Write for limited).

d. Obtain Connection String (URI)

From Atlas, go to Clusters → Connect → Drivers.

Copy the provided connection string, which looks like:

```
mongodb+srv://&lt;username&gt;:&lt;password&gt;@cluster0.abcd123.mongodb.net/myDatabase?retryWrites=true&w=majority
```

- Configure in n8n In the MongoDB node, paste the URI.

Replace &lt;username&gt;, &lt;password&gt;, and myDatabase with your actual credentials and database name.

- Test the connection to ensure it is successful.

**5. Form Ending Node**

*Purpose*: Provides closure to the workflow.

*Functionality*: Sends a confirmation response back to the user, indicating that their contact details were successfully submitted and stored.

✅ **Result**: With this workflow, all contact form submissions are safely validated, normalized, and stored in MongoDB Atlas, ensuring both data integrity and security basic.

## 📊 Basic Information

- **Workflow ID:** 8071
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 326
- **Downloads:** 32
- **Created:** 2025/8/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8071)

## 👤 Author

- **Name:** Samuel Heredia
- **Username:** @sheredia

## 🏷️ Categories

- Document Extraction
- Lead Generation

## 🔗 Nodes Used

- **stickyNote** (×11)
- **code** 
- **formTrigger** 
- **mongoDb** 
- **set** 
- **form** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
