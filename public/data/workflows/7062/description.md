How it works:

- Accesses a target website, searches for new PDFs, and downloads them automatically.
- Extracts content from each PDF and sends it to an AI for summarization.
- Delivers the AI-generated summary directly to a Discord channel.
- Marks processed URLs in Google Sheets to avoid duplicates.

Set up steps:

- Configure the website URL in the HTTP Request node.
- Connect to Google Cloud API (enable Drive & Sheets) and link your spreadsheet.
- Set up an OpenRouter API key and choose your preferred AI model.
- Create a Discord webhook for notifications.

