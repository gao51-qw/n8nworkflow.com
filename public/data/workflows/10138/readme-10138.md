# Newsletter signup flow with Email Verification API, Gmail & Google Sheets tracking

> # Newsletter Sign-up with Email Verification & Welcome Email Automation

## 📋 Description

A complete, production-ready newsletter automation workflow that validates email addresses, sends personalized welcome emails, and maintains comprehensive logs in Google Sheets. Perfect for marketing teams, content creators, and businesses looking to build high-quality email lists with minimal manual effort.

## ✨ Key Features

### Email Verification
- **Real-time validation** using Verifi Email API
- Checks email format (RFC compliance)
- Verifies domain existence and MX records
- Detects disposable/temporary email addresses
- Identifies potential spoofed emails

### Automated Welcome Emails
- **Personalized HTML emails** with subscriber's first name
- Beautiful, mobile-responsive design with gradient headers
- Branded confirmation and unsubscribe links
- Sent via Gmail (or SMTP) automatically to valid subscribers

### Smart Data Handling
- **Comprehensive logging** to Google Sheets with three separate tabs
- Handles incomplete submissions gracefully
- Preserves original user data throughout verification process
- Tracks source attribution for multi-channel campaigns

### Error Management
- Automatic retry logic on API failures
- Separate logging for different error types
- Detailed technical reasons for invalid emails
- No data loss with direct webhook referencing

## 🎯 Use Cases

- **Newsletter sign-ups** on websites and landing pages
- **Lead generation** forms with quality control
- **Marketing campaigns** requiring verified email lists
- **Community building** with automated onboarding
- **SaaS product launches** with email collection
- **Content creator** audience building
- **E-commerce** customer list management

## 📊 What Gets Logged

### Master Log (All Subscribers)
- Timestamp, name, email, verification result
- Verification score and email sent status
- Source tracking, disposable status, domain info

### Invalid Emails Log
- Detailed rejection reasons
- Technical diagnostic information
- MX record status, RFC compliance
- Provider information for troubleshooting

### Invalid Submissions Log
- Incomplete form data
- Missing required fields
- Timestamp for follow-up

## 🔧 Technical Stack

**Trigger:** Webhook (POST endpoint)  
**Email Verification:** Verifi Email API  
**Email Sending:** Gmail OAuth2 (or SMTP)  
**Data Storage:** Google Sheets (3 tabs)  
**Processing:** JavaScript code nodes for data formatting

## 🚀 Setup Requirements

1. **Google Account** - For Sheets and Gmail integration
2. **Verifi Email API Key** - (https://verifi.email)
3. **Google Sheets** - Pre-configured with 3 tabs (template provided)
4. **5-10 minutes** - Quick setup with step-by-step instructions included

## 📈 Benefits

✅ **Improve Email Deliverability** - Remove invalid emails before sending campaigns  
✅ **Reduce Bounce Rates** - Only send to verified, active email addresses  
✅ **Save Money** - Don't waste email credits on invalid addresses  
✅ **Better Analytics** - Track conversion rates by source  
✅ **Professional Onboarding** - Personalized welcome experience  
✅ **Scalable Solution** - Handles high-volume sign-ups automatically  
✅ **Data Quality** - Build a clean, high-quality subscriber list  

## 🎨 Customization Options

- **Email Template** - Fully customizable HTML design
- **Verification Threshold** - Adjust score requirements
- **Brand Colors** - Match your company branding
- **Confirmation Flow** - Add double opt-in if desired
- **Multiple Sources** - Track different signup forms
- **Language** - Easily translate email content

## 📦 What's Included

- ✅ Complete n8n workflow JSON (ready to import)
- ✅ Google Sheets template structure
- ✅ Responsive HTML email template
- ✅ Setup documentation with screenshots
- ✅ Troubleshooting guide
- ✅ Customization examples

## 🔒 Privacy & Compliance

- GDPR-compliant with unsubscribe links
- Secure data handling via OAuth2
- No data shared with third parties
- Audit trail in Google Sheets
- Easy data deletion/export

## 💡 Quick Stats

- **12 Nodes** - Fully automated workflow
- **3 Data Paths** - Valid, invalid, and incomplete submissions
- **100% Uptime** - When properly configured
- **Instant Processing** - Real-time email verification
- **Unlimited Scale** - Based on your API limits

## 🏆 Perfect For

- Marketing Agencies
- SaaS Companies
- Content Creators
- E-commerce Stores
- Community Platforms
- Educational Institutions
- Membership Sites
- Newsletter Publishers

## 🌟 Why Use This Workflow?

Instead of manually verifying emails or dealing with bounce complaints, this workflow automates the entire process from sign-up to welcome email. Save hours of manual work, improve your email deliverability, and create a professional first impression with every new subscriber.

**Start building a high-quality email list today!**

---


## 📊 Basic Information

- **Workflow ID:** 10138
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 242
- **Downloads:** 24
- **Created:** 2025/10/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10138)

## 👤 Author

- **Name:** Jitesh Dugar
- **Username:** @jiteshdugar

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **webhook** 
- **stickyNote** (×13)
- **if** (×2)
- **googleSheets** (×3)
- **code** (×3)
- **gmail** 
- **n8n-nodes-verifiemail.verifiEmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
