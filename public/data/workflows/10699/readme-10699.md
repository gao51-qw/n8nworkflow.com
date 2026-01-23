# Automate service package recommendations with Google Workspace sales pipeline tracking

> # 💰 Package Recommender with Sales Pipeline Tracking

## What It Does
Automatically recommends the right service package based on budget, sends beautifully formatted proposal emails with case studies, logs everything to a sales pipeline tracker, and schedules your follow-up reminders. Converts inquiries into booked calls without manual proposal writing.

## How It Works
1. **Form Trigger** → Lead submits budget and challenge details
2. **Log to Pipeline** → All inquiry data saved to tracking sheet
3. **Budget Router** → Directs to Basic ($0-3K), Standard ($3-6K), or Premium ($6K+)
4. **Set Package Variables** → Loads appropriate features, pricing, case study
5. **Send Proposal Email** → Gorgeous HTML email with personalized package details
6. **Update Pipeline** → Marks "Package Sent" and sets follow-up date (+3 days)
7. **Calendar Reminder** → Creates event in 3 days reminding you to follow up

---

## 🚀 SETUP INSTRUCTIONS

### Step 1: Create Sales Pipeline Sheet
- Create Google Sheet with tab "Package Inquiries"
- Add columns: `Timestamp | Name | Email | Phone | Budget | Timeline | Challenge | Package Recommended | Package Price | Status | Date Sent | Follow-Up Date`
- Update `YOUR_GOOGLE_SHEET_ID` in nodes 2, 7, and calendar description

### Step 2: Customize Package Details
- Edit nodes 4, 5, 6 (Set Package Details nodes)
- Update pricing, features, and case studies for your services
- Replace booking links with your actual Calendly/scheduling URLs
- Adjust package names if needed

### Step 3: Configure Email Template
- Edit node 7 email design/branding
- Update "Your Name" and signature
- Customize colors (currently: purple gradient, green CTA)
- Test email rendering across devices

### Step 4: Setup Calendar Integration
- Add Google Calendar OAuth2 credentials
- Verify follow-up timing (currently +3 days)
- Customize reminder description with your workflow
- Update Google Sheet link in calendar event

## 📊 Basic Information

- **Workflow ID:** 10699
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 15
- **Downloads:** 1
- **Created:** 2025/11/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10699)

## 👤 Author

- **Name:** Xavier Tai
- **Username:** @xaviertai

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **formTrigger** 
- **googleSheets** (×2)
- **switch** 
- **set** (×3)
- **gmail** 
- **googleCalendar** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
