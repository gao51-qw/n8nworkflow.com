# Automate JotForm submissions via HTTP without API keys

> 

This guide explains how to send form data from **n8n** to a **JotForm** form submission endpoint using the **HTTP Request** node.
It avoids the need for API keys and works with standard `multipart/form-data`.

---

## 📌 Overview

With this workflow, you can automatically submit data from any source (Google Sheets, databases, webhooks, etc.) directly into JotForm.

✅ Useful for:

* Pushing information into a form without manual entry.
* Avoiding API authentication.
* Syncing external data into JotForm.

---

## 🛠 Requirements

* A [JotForm account](https://www.jotform.com/signup/).
* An existing [JotForm form](https://www.jotform.com/myforms/).
* Access to the form’s **direct link**.
* Basic understanding of JotForm’s **field naming convention**.

---

## ⚙️ Setup Instructions

### 1. Get the JotForm Submission URL

1. Open your form in JotForm.
2. Go to **Publish → Quick Share → Copy Link**.
   Example form URL: [sample form](https://form.jotform.com/252217969519065)
3. Convert it into a submission endpoint by replacing `form` with `submit`:
   Example: [submit url](https://submit.jotform.com/submit/252217969519065)

---

### 2. Identify Field Names

Each JotForm field has a unique identifier like `q3_name[first]` or `q4_email`.

Steps to find them:

* Right-click a field in your [published form](https://www.jotform.com/help/401-how-to-find-field-ids-and-names/) → choose **Inspect**.
* Locate the `name` attribute in the `&lt;input&gt;` tag.
* Copy those values into the HTTP Request node in n8n.

**Example mappings:**

* First Name → `q3_name[first]`
* Last Name → `q3_name[last]`
* Email → `q4_email`

---

### 3. Configure HTTP Request Node in n8n

* **Method:** `POST`
* **URL:** Your JotForm submission URL (from Step 1).
* **Content Type:** `multipart/form-data`
* **Body Parameters:** Add field names and values.

**Example Body Parameters:**

```json
{
  "q3_name[first]": "John",
  "q3_name[last]": "Doe",
  "q4_email": "john.doe@example.com"
}
```

---

### 4. Test the Workflow

1. Trigger the workflow (manually or with a trigger node).
2. Submit test data.
3. Check **JotForm → Submissions** to confirm the entry appears.

---

## 🚀 Use Cases

* Automating lead capture from CRMs or websites into JotForm.
* Syncing data from Google Sheets, Airtable, or databases.
* Eliminating manual data entry when collecting responses.

---

## 🎛 Customization Tips

* Replace placeholder values (`John`, `Doe`, `john.doe@example.com`) with dynamic values.
* Add more fields by following the same naming convention.
* Use n8n expressions (`{{$json.fieldName}}`) to pass values dynamically.




## 📊 Basic Information

- **Workflow ID:** 7458
- **Complexity:** beginner
- **Node Count:** 2
- **Views:** 244
- **Downloads:** 24
- **Created:** 2025/8/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7458)

## 👤 Author

- **Name:** moosa
- **Username:** @moosa

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
