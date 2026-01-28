# Automated demo scheduling system with Outlook Calendar and Zoom integration

> ## Live Demo Booking Form with Outlook Calendar and Zoom link

### Who’s it for
This workflow is designed for SaaS companies, consultants, or sales teams that regularly run live demos. It helps automate demo scheduling, ensuring clients can only book from available time slots while instantly generating Zoom links and calendar invitations.

### How it works / What it does
1. **Client fills demo request form** → Collects company, contact details, and a preferred date.  
2. **Check Outlook calendar availability** → Searches for pre-created “Online Meeting Slot” events.  
3. **Time slot selection** → If the date has slots, the client chooses from up to 3 nearest available times. If not, they’re asked to pick another date.  
4. **Create Zoom meeting** → Once a date & time are confirmed, a Zoom link is automatically generated.  
5. **Update Outlook calendar** → The chosen slot is updated with the client’s details and Zoom link, marked as “Booked Live Demo” so it can’t be double-booked.  
6. **Send confirmation** → The client receives a styled confirmation screen, and both parties get the calendar invite.

### How to set up
1. Import the workflow JSON into your n8n instance.  
2. Configure the following credentials:  
   - **Microsoft Outlook OAuth2 API** (for calendar access).  
   - **Zoom OAuth2 API** (for automatic meeting creation).  
3. Pre-create “Online Meeting Slot” events in your Outlook calendar to define available demo times.  
4. Publish the form via n8n’s webhook URL (embed it in your website or share the link).  
5. Test by submitting a request to ensure slots update correctly and Zoom links are created.

### Requirements
- n8n self-hosted or cloud account.  
- Microsoft Outlook account with calendar access.  
- Zoom account with OAuth2 credentials.  
- Pre-created calendar slots named **“Online Meeting Slot”**.

### How to customize the workflow
- **Form fields**: Adjust the client details form to capture additional data (e.g., industry, product interest).  
- **Email/notification**: Add an Email or Slack node to notify your sales team of new demo bookings.  
- **Custom branding**: Update the CSS in the form nodes to match your company’s style.  
- **Capacity rules**: Modify the IF nodes to limit the number of bookings per day or adjust the slot-checking logic.  


## 📊 Basic Information

- **Workflow ID:** 8456
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 368
- **Downloads:** 36
- **Created:** 2025/9/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8456)

## 👤 Author

- **Name:** Lenouar
- **Username:** @aureusr

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×5)
- **form** (×5)
- **formTrigger** 
- **httpRequest** (×2)
- **code** (×2)
- **merge** (×2)
- **if** (×2)
- **zoom** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
