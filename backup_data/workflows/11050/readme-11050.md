# Automate Calendly user onboarding & offboarding with Google Sheets and human approval

> This workflow automates the entire **Calendly onboarding and offboarding process** for company users. It relies on form submissions, Google Sheets as a source of truth, AI-generated HR emails, man-in-the-loop approval steps, and direct API interactions with Calendly.

---

## **Key Advantages**

✅ **Full Automation of Routine HR Processes**

The workflow removes the need for HR to manually add or remove Calendly users. It handles data collection, checks eligibility, interacts with Calendly’s API, and updates records automatically.

✅ **Centralized Data Management**

All onboarding/offboarding data is stored and maintained in a **Google Sheet**, ensuring a single source of truth for user status and activity tracking.

✅ **Built-in Human Validation (Man-in-the-Loop)**

HR receives automated approval emails and must validate each action before a Calendly account is created or removed.
This ensures:

* security
* accuracy
* compliance with internal policies

✅ **AI-Generated Professional Communication**

OpenAI generates polished, consistent HTML emails for HR, improving communication quality and reducing manual writing time.

✅ **Clean Separation of Onboarding and Offboarding Paths**

Both processes are independent but structured similarly, making maintenance easier and ensuring consistent logic.

✅ **Direct Integration with Calendly’s API**

The workflow automatically:

* creates invitations
* retrieves organization membership
* deletes users

This eliminates manual operations inside Calendly, greatly reducing administrative workload.

✅ **Error Reduction & Traceability**

Since every action is logged in the Google Sheet, HR can easily track:

* when onboarding/offboarding occurred
* whether approval was given
* if Calendly access is active

✅ **Improved User Experience**

The final screens (“Onboarding complete”, “Offboarding complete”, “Not approved”) provide immediate feedback to the requester.

---



The workflow contains two parallel automation paths:


## **1. Onboarding Workflow**

### **How it works**

1. **User submits the Onboarding Form**
   The form collects *first name*, *last name*, and *email*.

2. **User is appended to the Google Sheet**
   A new record is added with date, name, email, and a placeholder for the Calendly status.

3. **AI-generated email is prepared**
   OpenAI generates a full HTML email notifying HR about the onboarding request.

4. **HR receives an approval request via email**
   Using Gmail’s “send and wait” feature, HR must approve or reject onboarding.

5. **If approved:**

   * The system calls Calendly’s API to **invite the user to the organization**.
   * The Google Sheet record is updated (`CALENDLY = on`).
   * The process ends with a confirmation page.

6. **If rejected:**

   * The workflow ends with a “Not approved” page.

---

## **2. Offboarding Workflow**

### **How it works**

1. **User submits the Offboarding Form**
   Only the email is required.

2. **The system checks the Google Sheet**
   It verifies if the email exists and if the user currently has Calendly access.

3. **If the user exists**, the workflow:

   * Uses AI to generate a professional offboarding request email.
   * Sends an approval prompt to HR.

4. **If HR approves:**

   * The workflow retrieves the user’s Calendly membership via API.
   * Deletes the user from the Calendly organization.
   * Updates Google Sheets (`CALENDLY = off`).
   * Ends with a confirmation page.

5. **If approval is denied:**

   * The workflow ends with a “Not approved” screen.

---

Here's a description of the Calendly Onboarding and Offboarding workflow for n8n:

## How It Works

This workflow automates user onboarding and offboarding processes for Calendly with human approval steps. The system operates through two parallel streams:

**Onboarding Process:**
- Users submit their information (first name, last name, email) through an onboarding form
- Data is automatically recorded in a Google Sheets spreadsheet
- An AI agent generates a professional HTML email notification for HR
- The email is sent to HR with a double-approval mechanism requiring manual confirmation
- If approved, the system automatically adds the user to Calendly organization via API
- The spreadsheet is updated to mark the user as "on" for Calendly access
- User receives a completion confirmation

**Offboarding Process:**
- Users submit their email through an offboarding form
- The system checks Google Sheets to verify the user exists and has Calendly access
- An AI agent generates an offboarding notification email for HR approval
- After HR double-approval, the system retrieves the user's Calendly membership via API
- The user is automatically removed from Calendly organization
- The spreadsheet is updated to mark Calendly access as "off"
- User receives offboarding completion confirmation

## Set Up Steps

**Prerequisites:**
- Google Sheets spreadsheet with columns: DATE, FIRST NAME, LAST NAME, EMAIL, CALENDLY
- Calendly organization ID and API access
- Gmail account for sending approval emails
- OpenAI API access for email generation

**Configuration Steps:**
1. **Google Sheets Setup:**
   - Create a spreadsheet with the required column structure
   - Configure Google Sheets OAuth credentials in n8n
   - Update the document ID in all Google Sheets nodes

2. **Calendly API Configuration:**
   - Replace "XXX" placeholders in HTTP Request nodes with actual Calendly API bearer tokens
   - Set the correct Calendly organization ID in the Set nodes
   - Verify API endpoints match your Calendly organization structure

3. **Email System Setup:**
   - Configure Gmail OAuth credentials for sending approval emails
   - Update recipient email address from "info@n3w.it" to your HR department's email
   - Adjust approval timeout settings as needed (currently 45 minutes)

4. **Form Configuration:**
   - Deploy both onboarding and offboarding forms
   - Test form submissions to ensure data flows correctly
   - Customize completion messages for both success and rejection scenarios

5. **AI Email Generation:**
   - Verify OpenAI API credentials are properly configured
   - Test email template generation for both onboarding and offboarding scenarios
   - Adjust system prompts if different email formatting is required

6. **Workflow Activation:**
   - Test both onboarding and offboarding flows end-to-end
   - Verify approval emails are received and functional
   - Confirm Google Sheets updates correctly
   - Activate the workflow once testing is complete


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 📊 Basic Information

- **Workflow ID:** 11050
- **Complexity:** advanced
- **Node Count:** 32
- **Views:** 132
- **Downloads:** 13
- **Created:** 2025/11/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11050)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- HR
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **merge** 
- **googleSheets** (×4)
- **if** (×3)
- **formTrigger** (×2)
- **set** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **gmail** (×2)
- **httpRequest** (×3)
- **form** (×4)
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 32 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
