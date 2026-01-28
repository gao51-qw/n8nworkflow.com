# Automate job posting creation with Forms, Dropbox, and Foxit PDF generation

> ## This n8n template demonstrates how to add a tie form data to a new PDF. The idea is to automate the creation of a professional looking job posting.

Use cases would be organizations who need to automate the creation of job postings. 

### How it Works

* The trigger is a form that asks for job position, salary, office location, and responsiblities
* When the form is posted, it kicks off the workflow's next steps
* A Word document is downloaded from a Dropbox folder. This Word document is used as the template for the posting.
* The Word document is converted to base64.
* A call to Foxit's Document Generation endpoint includes the encoded Word document along with the form information.
* The resulting PDF is downloaded and converted from base64 into binary.
* At this point, the PDF is just there, but it could be emailed, sent to another workflow, etc.

### Requirements

* A Dropbox account. The workflow's first step points to a Word template. See our [doc gen](https://docs.developer-api.foxit.com/#document-generation-apis) APIs for information on how to craft the Word doc, but the easiest way is to copy text like so:

```
Job Position
We are pleased to announce the opening of a new job, {{ jobPosition }}. This job pays ${{ salary }} per year and is in our {{ office }} location. The details of this job are:

{{ responsibilities }}
```

* Foxit developer account (https://developer-api.foxit.com)

### Next Steps

As mentioned above, you could do anything with the resulting PDF when done. 

## 📊 Basic Information

- **Workflow ID:** 6144
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 330
- **Downloads:** 33
- **Created:** 2025/7/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6144)

## 👤 Author

- **Name:** Raymond Camden
- **Username:** @raymondcamden

## 🏷️ Categories

- HR
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **dropbox** 
- **httpRequest** 
- **extractFromFile** 
- **convertToFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
