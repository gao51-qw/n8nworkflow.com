# Generate & email personalized certificates from Google Forms with score threshold

> ### Description
This workflow automatically generates personalized certificates in Google Slides and emails them to respondents only if they meet a minimum score threshold, using data submitted via Google Forms (stored in Google Sheets).

### Ideal for:
* Online courses
* Quizzes and workshops
* Event participation certificates

### Sheet Requirements
* Your connected Google Sheet (from the Google Form) must contain:
* Full Name – The name to appear on the certificate.
* Email – Recipient’s email address.
* Score – The test/quiz score used for threshold logic.


### Setup Instructions
1. Connect Google Sheets – Make sure your Form responses are linked to a Sheet with the columns mentioned above.
2. Set Score Threshold – Modify the If node to your desired minimum score (e.g., &gt;= 80).
3. Customize Certificate Template – Use a Google Slides file with text placeholders like {{Full Name}}.
4. Connect Gmail & Google Drive – For sending emails and saving generated certificates.
5. Update File IDs – Replace any placeholder Slide and Drive file IDs with your own.

### Services Used
* Google Sheets (Form responses)
* Google Slides (Certificate template)
* Google Drive (Storage)
* Gmail (Email delivery)

### Troubleshooting
* Issue: "Cannot read property 'Score'" → Ensure your column names match exactly (Score, Full Name, etc.).
* Slides not replacing placeholders → Double-check placeholder format ({{Full Name}}) and capitalization.
* Emails not sending → Verify Gmail authentication and make sure the If node is correctly filtering results.



## 📊 Basic Information

- **Workflow ID:** 3771
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 1027
- **Downloads:** 102
- **Created:** 2025/4/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3771)

## 👤 Author

- **Name:** Jakkrapat Ampring
- **Username:** @guitarpmacc

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **noOp** 
- **stickyNote** (×9)
- **set** 
- **if** 
- **googleDrive** (×2)
- **googleSlides** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
