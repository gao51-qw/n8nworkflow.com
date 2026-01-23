## 📧 What It Does
This n8n workflow sends **personalized marketing or outreach emails** using **predefined templates** stored in **Google Sheets**, with **SendGrid** as the email delivery provider.
Instead of relying on dynamic AI content, this setup selects a ready-made template and merges it with business-specific lead data — delivering consistent and fast email personalization at scale.


## 💡 Why This Workflow?
Sometimes, you don’t need the overhead or variability of AI-generated content. Predefined templates give you:
- ⚡ **Faster execution** — no calls to AI models
- 🎯 **Total control** over tone, formatting, and structure
- 🛠️ **Easy customization** using variables like `[BusinessName]`, `[Location]`, etc.
- 💰 **Zero additional cost per email**


## 👤 Who It’s For
- **Freelancers** or **Agencies** running outreach campaigns
- **Startups** or **SMBs** with lead data in Google Sheets
- Anyone who wants to automate email sending with **consistency, control, and low cost**.


## ⚙️ How It Works
1. **Manual Trigger** starts the workflow.
2. **Google Sheets (Leads tab)** supplies a list of businesses with fields like name, location, email, category, etc.
3. Loop started to execute each item.
4. **Google Sheets (Email Template tab)** holds predefined subject and body templates (HTML supported).
5. A **random template** is selected for each email.
6. Placeholders like `[BusinessName]` or `[Category]` are replaced with actual lead info using the `Fix Variable` (Set) node.
7. The formatted message is sent via **SendGrid**, using your authenticated sender email.
8. A **1-second wait** is added between emails to manage rate limits and avoid spam flags.
9. Loop continues until all leads have been emailed.


## 🛠 How to Set It Up
1. Import the `.json` file into your n8n instance.
2. Connect the required credentials:
   - **SendGrid API Key** (ensure sender domain and identity is verified)
   - **Google Sheets OAuth2**
3. Create or duplicate this [sample sheet](https://docs.google.com/spreadsheets/d/1UGarQNCplIfKKPSInxZlIC72oosZ45ul5jAQjYfpWrs/edit?usp=sharing), which contains two tabs and modify to your business interest:
   - `Leads`
   - `Email Template`
4. Update the leads and email templates to match your campaign.
5. Click **“Execute Workflow”** to begin sending emails.


## 🚀 Want to Scale This?
Add additional workflows:
- 📬 **SendGrid Webhook integration** to track status & engagements like bounces, opens, and clicks
- 🔁 **Reply tracker** via **Gmail** to update lead status
- 🤖 **AI-based Email Router** to label replies as *Interested*, *Not Interested*, *Others*, **Forward emails** to appropriate department for further engagements.
- 📆 **Follow-up Emails** (when there's no email reply) for D+5, D+10 days sequences


## 📬 Need Help?
Feel free to reach out via email: [buzanalytics@gmail.com](mailto:buzanalytics@gmail.com)
Thanks for using this workflow

