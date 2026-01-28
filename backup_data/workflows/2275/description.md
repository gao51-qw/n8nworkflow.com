How it works:
* The workflow starts by sending a request to a website to retrieve its HTML content.
* It then parses the HTML extracting the relevant information
* The extracted data is storted and converted into a CSV file.
* The CSV file is attached to an email and sent to your specified address.
* The data is simultaneously saved to both Google Sheets and Microsoft Excel for further analysis or use.

Set-up steps:
1. Change the website to scrape in the "Fetch website content" node
2. Configure Microsoft Azure credentials with Microsoft Graph permissions (required for the Save to Microsoft Excel 365 node)
3. Configure Google Cloud credentials with access to Google Drive, Google Sheets and Gmail APIs (the latter is required for the Send CSV via e-mail node).