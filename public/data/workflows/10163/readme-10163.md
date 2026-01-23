# Create verified user profiles with email validation, PDF generation & Gmail delivery

> # Verified User Profile Creation - Automated Email Validation & PDF Generation

---

**Overview**

This comprehensive automation workflow streamlines the user onboarding process by validating email addresses, generating professional profile PDFs, and delivering them seamlessly to verified users.

**🎯 What This Workflow Does:**

1. **Receives User Data** - Webhook trigger accepts user signup information (name, email, city, profession, bio)
2. **Validates Email Addresses** - Uses VerifiEmail API to ensure only legitimate email addresses proceed
3. **Conditional Branching** - Smart logic splits workflow based on email verification results
4. **Generates HTML Profile** - Creates beautifully styled HTML templates with user information
5. **Converts to PDF** - Transforms HTML into professional, downloadable PDF documents
6. **Email Delivery** - Sends personalized welcome emails with PDF attachments to verified users
7. **Data Logging** - Records all verified users in Google Sheets for analytics and tracking
8. **Rejection Handling** - Notifies users with invalid emails and provides guidance

**✨ Key Features:**

- ✅ **Email Verification** - Prevents fake registrations and maintains data quality
- 📄 **Professional PDF Generation** - Beautiful, branded profile documents
- 📧 **Automated Email Delivery** - Personalized welcome messages with attachments
- 📊 **Google Sheets Logging** - Complete audit trail of all verified users
- 🔀 **Smart Branching** - Separate paths for valid and invalid emails
- 🎨 **Modern Design** - Clean, responsive HTML/CSS templates
- 🔒 **Secure Webhook** - POST endpoint for seamless form integration

**🎯 Perfect Use Cases:**

- User registration systems
- Community membership verification
- Professional certification programs
- Event registration with verified attendees
- Customer onboarding processes
- Newsletter signup verification
- Educational platform enrollments
- Membership card generation

**📦 What's Included:**

- Complete workflow with 12 informative sticky notes
- Pre-configured webhook endpoint
- Email verification integration
- PDF generation setup
- Gmail sending configuration
- Google Sheets logging
- Error handling guidelines
- Rejection email template

**🛠️ Required Integrations:**

1. **VerifiEmail** - For email validation (https://verifi.email)
2. **HTMLcsstoPDF** - For PDF generation (https://htmlcsstopdf.com)
3. **Gmail OAuth2** - For email delivery
4. **Google Sheets OAuth2** - For data logging

**⚡ Quick Setup Time:** 15-20 minutes

**🎓 Skill Level:** Beginner to Intermediate
---

### **Benefits:**

✅ Reduces manual verification work by 100%
✅ Prevents spam and fake registrations
✅ Delivers professional branded documents automatically
✅ Maintains complete audit trail
✅ Scales effortlessly with user growth
✅ Provides excellent user experience
✅ Easy integration with any form or application

---

### **Technical Details:**

- **Trigger Type:** Webhook (POST)
- **Total Nodes:** 11 (including 12 documentation sticky notes)
- **Execution Time:** ~3-5 seconds per user
- **API Calls:** 3 external (VerifiEmail, HTMLcsstoPDF, Google Sheets)
- **Email Format:** HTML with binary PDF attachment
- **Data Storage:** Google Sheets (optional)

---
### **License:** MIT (Free to use and modify)

---

## 🎁 BONUS FEATURES:

- Comprehensive sticky notes explaining each step
- Beautiful, mobile-responsive email template
- Professional PDF styling with modern design
- Easily customizable for your branding
- Ready-to-use webhook endpoint
- Error handling guidelines included

---

**Perfect for:** Developers, No-code enthusiasts, Business owners, SaaS platforms, Community managers, Event organizers

**Start automating your user verification process today!** 🚀

## 📊 Basic Information

- **Workflow ID:** 10163
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 47
- **Downloads:** 4
- **Created:** 2025/10/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10163)

## 👤 Author

- **Name:** Jitesh Dugar
- **Username:** @jiteshdugar

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **stickyNote** (×11)
- **webhook** 
- **if** 
- **set** 
- **httpRequest** 
- **gmail** (×2)
- **googleSheets** 
- **n8n-nodes-verifiemail.verifiEmail** 
- **n8n-nodes-htmlcsstopdf.htmlcsstopdf** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
