# Automate email follow-ups with Gmail & Google Sheets using multi-stage sequences

> # 🔄 Daily Follow-Up System with Multi-Stage Sequences

## What It Does
Automatically sends timed follow-up emails to leads based on a 4-stage sequence (Day 1, 3, 7, 14), updates tracking automatically, and calculates next follow-up dates. Set it once, add leads, and never manually track follow-ups again. Converts cold leads into warm opportunities through consistent, professional touchpoints.

## How It Works
1. **Schedule Trigger** → Runs daily at 9 AM
2. **Read Tracker Sheet** → Gets all leads from Follow-Up Tracker
3. **Filter Today's Follow-Ups** → Only processes leads where "Next Follow-Up Date" = Today
4. **Process Individually** → Handles each lead one at a time (prevents rate limits)
5. **Route by Stage** → Sends appropriate email based on Day 1/3/7/14 stage
6. **Send Stage Email** → 4 different templates for each follow-up milestone
7. **Update Last Sent** → Records when email was sent
8. **Calculate Next Date** → Automatically schedules next follow-up (or marks complete)

---

## 🚀 SETUP INSTRUCTIONS

### Step 1: Create Follow-Up Tracker Sheet
- Create Google Sheet with tab "Follow-Up Tracker"
- Add columns: `Name | Email | Project/Interest | Timeline | Next Step | Stage | Next Follow-Up Date | Last Sent Date | Status`
- Populate with leads: Set Stage = "Day 1", Status = "Active", Next Follow-Up Date = desired start date
- Update `YOUR_GOOGLE_SHEET_ID` in nodes 2, 7, and 8

### Step 2: Configure Email Templates
- Edit nodes 6-9 with your email templates
- Replace `YOUR_CALENDAR_LINK` with your actual booking link (Calendly, etc.)
- Replace `YOUR_RESOURCE_LINK` in Day 3 email with relevant content
- Customize sender name/signature in all templates

### Step 3: Setup Gmail Connection
- Add Gmail OAuth2 credentials to all email nodes
- Test workflow with one test lead first
- Monitor Gmail sending limits (500/day for free accounts)

### Step 4: Test the Sequence
- Add one test lead with Next Follow-Up Date = today
- Manually execute workflow to verify email sends
- Check that Google Sheet updates correctly
- Verify next stage is calculated properly

## 📊 Basic Information

- **Workflow ID:** 10696
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 143
- **Downloads:** 14
- **Created:** 2025/11/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10696)

## 👤 Author

- **Name:** Xavier Tai
- **Username:** @xaviertai

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleSheets** (×3)
- **filter** 
- **splitInBatches** 
- **switch** 
- **gmail** (×4)
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
