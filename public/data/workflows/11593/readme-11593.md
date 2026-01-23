# Sync Zoom webinar attendees to Mailchimp with double opt-in and email filtering

> ## Description

Use this workflow to automatically sync Zoom webinar registrants into Mailchimp, filter out internal contacts, and send double opt-in confirmation emails. Ideal for keeping your newsletter audiences clean, accurate, and enriched with new leads—without manual export/import steps.

## About Workflow

This workflow connects Zoom Webinars with Mailchimp via API to automate the onboarding of webinar attendees into your marketing audience.  
It retrieves registrant data from Zoom (based on Webinar ID and Occurrence ID), extracts attendee emails, filters out internal domains, checks whether the contact already exists in Mailchimp, and then creates or updates each record.  
New contacts receive a double opt-in confirmation email, and all newly added leads are tagged for segmentation inside Mailchimp.

## Use Case

Perfect for marketing teams running webinars who need to transfer participants into Mailchimp quickly and reliably.  
This automation streamlines attendee follow-up, ensures compliance with double opt-in requirements.

## How it works

- **Manual Trigger – Execute workflow**  
  The workflow starts manually. You can optionally replace the manual trigger with a Schedule Trigger if you want to automate recurring webinars.

- **Manual Input – Set Webinar ID and Occurrence ID**  
  The workflow includes a *Set* node that requires you to enter:
  - `webinar_id`
  - `occurence_id`  
  These define which Zoom webinar instance will be synced.

- **Zoom API – Get Webinar Attendees**  
  Retrieves registrants for the selected webinar occurrence using the Zoom API.

- **Code Node – Extract Registrant Emails**  
  Processes the Zoom API response and extracts the email addresses of all registrants.

- **Filter Node – Filter Out Internal Emails**  
  Removes internal/company email addresses by checking that they do *not* contain your domain.  
  (This is fully configurable.)

- **Mailchimp – Update a Member**  
  Attempts to update the contact in Mailchimp based on their email address.  
  This determines whether the contact already exists.

- **IF Node – If ID Doesn’t Exist**  
  Checks if Mailchimp returned an `id` during the update attempt.  
  If Mailchimp **did not return an ID**, the contact is treated as new and continues through the creation + confirmation path.

- **Code Node – MD5 Hash Email**  
  Hashes the email using MD5. Mailchimp uses this hash as the unique identifier for list members.

- **Mailchimp – Send Double Opt-In Email**  
  Creates the contact with “pending” status and sends a double opt-in email.

- **Mailchimp – Add Leads Tag**  
  Tags the contact with **"Leads"** immediately as part of the creation process.

## How to Use

1. **Import the workflow into your n8n instance**

2. **Configure credentials:**
   - Zoom OAuth2 credential  
   - Mailchimp HTTP Basic Auth credential

3. **Enter webinar details:**
   - Set `webinar_id` and `occurence_id` in the *Type in IDs* node

4. **Adjust internal email filtering:**
   - Update the domain in the “Filter Out Internal Emails” node (e.g., change `@yourcompanydomain.com`)

5. **Configure Mailchimp nodes:**
   - Replace `LIST_ID_HERE` with your Mailchimp Audience/List ID  
   - Adjust tags if needed

6. **Test the workflow:**
   - Run it with a real webinar and confirm behavior:
     - internal emails are excluded  
     - existing contacts are updated  
     - new contacts receive the double opt-in email  
     - tags are applied correctly

## Example Use Cases

- Automated lead generation from webinar attendance  
- Keeping marketing lists clean and external-only  
- Recurring webinars with scheduled syncing  
- Easy double opt-in compliance with no manual steps  

## Requirements

- **Zoom account** with API access  
- **Mailchimp account** with API access  
- **n8n instance** with correctly configured credentials  

## Optional Enhancements

- Replace the manual trigger with a Webhook for recurring syncs  
- Auto-detect the latest webinar ID using a Zoom API call  
- Add additional filters (e.g., job title, country, language)  
- Add Slack/email notifications summarizing new leads  
- Add error-handling paths for retrying failed API calls  


## 📊 Basic Information

- **Workflow ID:** 11593
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 20
- **Downloads:** 2
- **Created:** 2025/12/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11593)

## 👤 Author

- **Name:** Easy8.ai
- **Username:** @easy8ai

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **mailchimp** 
- **httpRequest** (×3)
- **code** (×2)
- **filter** 
- **if** 
- **stickyNote** (×2)
- **set** 
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
