# Verify emails & generate resume cards with VerifiEmail, HTML CSS to image & Gmail

> ## Resume Email Verifier & Visual Card Generator
### **Overview**
Verify candidate emails and auto-generate beautiful resume cards. Validates deliverability, creates professional PNG cards, and emails them instantly.

## What This Workflow Does

Automatically validate candidate email addresses and generate stunning, personalized resume snapshot cards delivered instantly via email. Perfect for recruitment platforms, job boards, HR automation, and career services.

## Key Features

✅ **Advanced Email Verification** - Validates deliverability, checks MX records, detects disposable emails
✅ **Beautiful Visual Cards** - Generates professional 600x400px PNG resume cards with gradient backgrounds
✅ **Smart Routing** - Separate paths for valid/invalid emails with appropriate notifications
✅ **Professional Emails** - HTML-formatted emails with personalized content and attachments
✅ **Ready to Use** - Comprehensive documentation with sticky notes explaining each step

## Perfect For

- Recruitment platforms verifying applicant emails
- Job boards creating visual resume confirmations
- HR departments streamlining candidate verification
- Career fairs generating instant digital resume cards
- Portfolio sites validating users and creating shareable snapshots
- Educational institutions providing students with verified digital resumes

## What You'll Need

1. **VerifiEmail Account** - Email verification (https://verifi.email)
2. **htmlcsstoimage.com Account** - Image generation (https://htmlcsstoimg.com)
3. **Gmail Account** - Email delivery (free with Gmail API)

## Quick Start

1. Import workflow into n8n
2. Set up three credentials (Gmail OAuth2, VerifiEmail API, htmlcsstoimg API)
3. Activate workflow and copy webhook URL
4. Send POST requests with resume data
5. Candidates receive beautiful resume cards via email!

## Sample Input

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "role": "Frontend Developer",
  "skills": "React, JavaScript, Tailwind CSS, Git"
}
```

## Sample Output

- Valid emails: Professional email with resume card PNG attachment
- Invalid emails: Helpful error notification with troubleshooting tips
- Average processing time: 3-5 seconds

## Workflow Includes

- 9 pre-configured nodes with detailed sticky notes
- Complete documentation explaining each step
- Error handling for both valid and invalid paths
- Customizable HTML template for branding
- Professional email templates ready to use

## Easy Customization

- Change card colors and branding in HTML template
- Modify email templates for your company style
- Adjust validation rules in Set node
- Add additional data fields as needed

Perfect for startups, agencies, and enterprises looking to automate resume processing and email verification!
```

## 📊 Basic Information

- **Workflow ID:** 10133
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 122
- **Downloads:** 12
- **Created:** 2025/10/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10133)

## 👤 Author

- **Name:** Jitesh Dugar
- **Username:** @jiteshdugar

## 🏷️ Categories

- HR

## 🔗 Nodes Used

- **webhook** 
- **stickyNote** (×11)
- **set** 
- **if** 
- **merge** 
- **gmail** (×2)
- **n8n-nodes-verifiemail.verifiEmail** 
- **httpRequest** 
- **n8n-nodes-htmlcsstoimage.htmlCssToImage** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
