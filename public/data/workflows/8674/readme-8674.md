# IP geolocation & HTTP port scanning with Google Sheets

> # Automate IP geolocation and HTTP port scanning with Google Sheets trigger

This n8n template automatically enriches IP addresses with geolocation data and performs HTTP port scanning when new IPs are added to a Google Sheets document. Perfect for network monitoring, security research, or maintaining an IP intelligence database.

## Who's it for

Network administrators, security researchers, and IT professionals who need to:
- Track IP geolocation information automatically
- Monitor HTTP service availability across multiple ports
- Maintain centralized IP intelligence in spreadsheets
- Automate repetitive network reconnaissance tasks

## How it works

The workflow triggers whenever a new row containing an IP address is added to your Google Sheet. It then:

1. **Fetches geolocation data** using the ip-api.com service to get country, city, coordinates, ISP, and organization information
2. **Updates the spreadsheet** with the geolocation details
3. **Scans common HTTP ports** (80, 443, 8080, 8000, 3000) to check service availability
4. **Records port status** back to the same spreadsheet row, showing which services are accessible

The workflow handles both successful connections and various error conditions, providing a comprehensive view of each IP's network profile.

## Requirements

- **Google Sheets API access** - for reading triggers and updating data
- **Google Sheets document** with at least an "IP" column header

## How to set up

1. **Create a Google Sheet** with columns: IP, Country, City, Lat, Lon, ISP, Org, Port_80, Port_443, Port_8000, Port_8080, Port_3000
2. **Configure Google Sheets credentials** in both the trigger and update nodes
3. **Update the document ID** in the Google Sheets Trigger and both Update nodes to point to your spreadsheet
4. **Test the workflow** by adding an IP address to your sheet and verifying the automation runs

## How to customize the workflow

- **Modify port list**: Edit the "Edit Fields" node to scan different ports by changing the ports array
- **Add more geolocation fields**: The ip-api.com response includes additional fields like timezone, zip code, and AS number
- **Change trigger frequency**: Adjust the polling interval in the Google Sheets Trigger for faster or slower monitoring
- **Add notifications**: Insert Slack, email, or webhook nodes to alert when specific conditions are detected
- **Filter results**: Add IF nodes to process only certain IP ranges or geolocation criteria

## 📊 Basic Information

- **Workflow ID:** 8674
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 430
- **Downloads:** 43
- **Created:** 2025/9/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8674)

## 👤 Author

- **Name:** IranServer.com
- **Username:** @iranserver

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **googleSheets** (×2)
- **splitOut** 
- **set** 
- **httpRequest** (×2)
- **code** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
