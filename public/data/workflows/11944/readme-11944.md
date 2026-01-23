# Automate event registration and reminder emails with Forms, Sheets & Gmail

> ## How it works  
This workflow automates event registrations and attendee communication from initial signup to event day. It captures form submissions, prevents duplicate entries, and stores registrations in Google Sheets. Confirmed attendees receive immediate confirmation emails, while failures trigger admin alerts. A scheduled process then sends pre-event and event-day reminders, with all communication tracked to ensure emails are sent only once.

## Step-by-step  
- **Step 1: Capture and process registration**  
  - **Event Registration Form** – Collects attendee details through a public registration form.  
  - **Edit Fields** – Normalizes and prepares form data for processing.  
  - **Read Existing Registrations** – Fetches existing attendee records from Google Sheets.  
  - **Check for Duplicate Email** – Compares the submitted email against stored records.
  - **If Not Duplicate** – Stops the workflow when a duplicate email is detected and continues only for new registrations.  
  - **Store Registration (Google Sheets)** – Appends the new registration only when no duplicate is found.  

- **Step 2: Confirm registration and send notifications**  
  - **Add Status & Event Date** – Assigns confirmed status and event date to the registration.  
  - **Check Registration Success** – Verifies whether the registration is confirmed.  
  - **Send Welcome Email** – Sends a confirmation email to the attendee.  
  - **Send Admin Alert** – Sends an alert email to the admin if registration fails. 
  - **Code in JavaScript** – Confirms email delivery and prepares tracking data.  
  - **Update Welcome Email Status** – Updates the welcome email status in Google Sheets.  
 

- **Step 3: Scheduled trigger and reminder routing**  
  - **Schedule Trigger** – Runs daily to initiate reminder processing.  
  - **Edit Fields** – Marks the execution source as a scheduled run.  
  - **Switch** – Ensures the workflow runs only for scheduled executions.  
  - **Get Confirmed Aptitude Candidates** – Retrieves confirmed event registrations from Google Sheets.  
  - **Filter Reminder Candidates** – Calculates remaining days until the event.  
  - **Switch Reminder Type** – Routes attendees to 3-day or event-day reminder flows.  

- **Step 4: Send reminders and update event communication status**  
  - **Loop 3-Day** – Iterates through attendees eligible for the 3-day reminder.  
  - **Send 3-Day Reminder** – Sends a personalized pre-event reminder email.  
  - **Prepare 3-Day Update** – Prepares reminder status data.  
  - **Wait** – Adds delay to control email sending rate.  
  - **Update 3-Day Status** – Updates the 3-day reminder status in Google Sheets.  
  - **Loop Event-Day** – Iterates through attendees eligible for the event-day reminder.  
  - **Send Event-Day Reminder** – Sends final event-day instructions and check-in details.  
  - **Prepare Event-Day Update** – Prepares event-day reminder tracking data.  
  - **Wait** – Adds delay between event-day emails.  
  - **Update Event-Day Status** – Updates the event-day reminder status in Google Sheets.  

## Why use this?  
- Blocks duplicate registrations automatically at submission time.  
- Sends instant confirmation emails to attendees.  
- Alerts admins immediately when a registration fails.  
- Delivers perfectly timed reminders without manual follow-ups.  
- Keeps a complete communication log inside Google Sheets.  


## 📊 Basic Information

- **Workflow ID:** 11944
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 30
- **Downloads:** 3
- **Created:** 2025/12/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11944)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **googleSheets** (×6)
- **if** (×2)
- **formTrigger** 
- **code** (×5)
- **gmail** (×4)
- **set** (×3)
- **switch** (×2)
- **splitInBatches** (×2)
- **wait** (×2)
- **scheduleTrigger** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 26 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
