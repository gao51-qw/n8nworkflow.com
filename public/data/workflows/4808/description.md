## How it works
- This workflow automates the conversion of various document formats (such as PDF, Word, and PPT) into Markdown. It connects to the MinerU API service, which leverages OCR, formula, and table recognition to produce high-quality output. Users can initiate the process by simply uploading a document through an n8n chat interface.

## Set up steps

- Ensure you have a local n8n instance running.
- Set up and run the MinerU MCP (MinerU Computing Platform) server locally.
- Import this workflow into your n8n instance.
- Configure your AI model credentials (e.g., for OpenAI, add your API Key and Base URL).
- Click the "Write Files from Disk" node and edit the file path to your desired local save location.
- Click the "MCP Client" node and input your MinerU MCP server address (e.g., http://localhost:8000/sse).
- Click the "Open Chat" button to upload a file, send a message, and test the workflow.