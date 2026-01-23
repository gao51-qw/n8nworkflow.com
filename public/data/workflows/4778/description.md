**How it works**
- Listens for new or updated events in your chosen Google Calendar.
- Extracts key details like event name, date, time, description, and attendees.
- Adds each event as a new row in your connected Google Sheet.
- Prevents duplicates by checking for existing Event IDs before inserting.

✨ Open your spreadsheet to instantly see a clean, structured list of all scheduled events—perfect for reports, planning, or sharing with others who don’t use Google Calendar.

![image.png](fileId:1455)

**Set up steps**
1. Connect your Google Calendar and Google Sheets accounts in n8n.
2. Select the calendar you want to monitor and the spreadsheet you want to write to.
3. Set up your Google Sheet with appropriate columns (e.g. Event ID, Title, Description, Start Time, End Time, Location).
4. Customize your node to match the event fields with spreadsheet columns.
5. Enable the workflow and run it once to test.

⏱️ Setup Time: ~10–20 minutes depending on familiarity with n8n and Google integrations.

🔧 No coding required—just drag, drop, and configure nodes.