# Replace data in Google Docs from n8n form

> ## Who is this for?
This workflow is perfect for anyone looking to automate the process of replacing variables in Google Docs with data from form.

![Zrzut ekranu 20250314 o 21.25.04.png](fileId:1015)

## What problem does this workflow solve?
This workflow automates the process of filling Google Docs templates with data coming from n8n forms or other variables. It’s especially useful for generating documents like contracts, invoices, or reports quickly and efficiently without manual intervention.

## What does this workflow do?
The workflow receives data from a form in n8n.
It uses the form data to replace the corresponding variables (e.g., {{example_variable}}) in a Google Docs template.
The document is then generated with the new values, ready for further use, such as sending or archiving.

## How to set up this workflow?
1. Prepare the template: Create a Google Docs template with variables in the {{variable}} format that you want to replace with form data.
2. Modify the variables in the n8n form: Make sure the form fields correspond to the variables you want to replace in the Google Docs template.
3. Connect to Google Docs: Set up the connection to Google Docs in n8n using the appropriate authentication credentials.
4. Test the workflow: Run the workflow to ensure that the form data correctly replaces the variables in the Google Docs template.

## How to customize this workflow to your needs?
Change the data source: You can modify the form or other data sources (e.g., API) from which the replacement values will be fetched.
Customize the Google Docs template: Adapt the template to include additional fields for replacement as needed.
Integrate with other applications: You can expand the workflow to include actions like sending the generated document via email, saving it to Google Drive, or passing it to other systems.



## 📊 Basic Information

- **Workflow ID:** 3145
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 7860
- **Downloads:** 786
- **Created:** 2025/3/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3145)

## 👤 Author

- **Name:** Krzysztof Kuzara
- **Username:** @kuzry

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **formTrigger** 
- **stickyNote** (×3)
- **googleDrive** 
- **code** (×2)
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
