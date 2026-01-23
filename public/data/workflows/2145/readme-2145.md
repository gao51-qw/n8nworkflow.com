# When specific event created in Google Calendar, duplicate & rename Google file

> # Who is this template for?

This template is for everyone who has to take notes during a call:
- Talent Acquisition Managers / Talent Acquisition Specialists / Recruiters
- HR professionals
- Sales teams, customer success teams
- Product teams / User Experience Designers / anyone conducting user research interviews

# Use case

This workflow allows specific events created on Google Calendar (or any other meeting scheduling tool like Calendly) to trigger the duplication and renaming of a specific template document. 

Example: 
For each new screening call that is scheduled in your calendar, you want to create a draft of your screening interview template for the role, titled "{Name of the candidate} | {Date of the interview}", and located in your Google Drive in a specific folder

This workflow could then be extended to copy the link to the file on a Notion database that is shared with the team (check "To go further" section). 

This workflow ensures that if you're jumping from calls to calls, you're already set up to take notes, and every document is tidied up and sorted in a structured way!

# How it works

- The workflow starts when a new event is created in Google Calendar
- The Filter node then selects a specific type of events, depending on a chosen pattern (title includes a specific term, organizer is X, attendees include Y, etc.)
- The workflow then searches for a specific folder in your Google Drive, where the file you want to duplicate is located
- The workflow then searches for the specific file you want to duplicate
- The last step allows to duplicate and rename the file with variables from your Google Calendar event 

# Set up

- Set up credentials for **Google Calendar**, **Google Drive**, and **Google File**. You'll need a Google Workspace account. 
- Set up the **Filter** node with the pattern you want to look for to retreive specific events in your calendar 
- Set up the **Google Drive** you want to search in
- Set up the **Google File** you want to duplicate
- Set up variable at the last step to rename your duplicated file however you want it, or add a description

# To go further

Here's a few idea to enhance this workflow depending on your specific needs:
- Instead of a filter, separate your flow depending on your use case (ex: you have want to fetch different templates depending on the type of call it'll be). 
- Switch Google Calendar for another trigger (Calendly, Hubspot..)
- 10 minutes before the event, send the duplicate Google File to the meeting organizer through Slack 
- The day after the event, if the event hasn't been cancelled, add the link to the Google File to your ATS, Hubspot, etc. 

## 📊 Basic Information

- **Workflow ID:** 2145
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 2619
- **Downloads:** 261
- **Created:** 2024/2/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2145)

## 👤 Author

- **Name:** Candice Capelle
- **Username:** @candicecpl

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **filter** 
- **googleCalendarTrigger** 
- **googleDrive** (×3)
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
