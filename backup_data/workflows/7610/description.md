**Description**

This workflow lets you upload a PDF document and automatically analyze it with AI. It extracts the text, summarizes the content, flags key clauses or risks, and then delivers the results via Gmail while also storing them in Google Sheets for tracking.

It’s designed for legal, compliance, or contract review use cases, but can be adapted for any document analysis scenario.
**Test it here:** [PDF Document Assistant](https://swot-ai25.github.io/pdf-document-assistant/)

🔹 **Instructions / Setup**

1. Webhook Input

- Upload a PDF document by sending it to the webhook URL.

2. Extract from File

- The workflow extracts text from the uploaded PDF.

3. Pre-processing (Code Node)

- Cleans and formats extracted text to remove unwanted line breaks or artifacts.

4. Basic LLM Chain (OpenAI)

- Summarizes or restructures document content using OpenAI.

- Adjust the prompt inside to fit your analysis needs (summary, risk flags, clause extraction).

5. Post-processing (Code Node)

- Further structures the AI output into a clean format (JSON, HTML, or plain text).

6. AI Agent (OpenAI)

- Runs deeper analysis, answers questions, and extracts insights.

7. Gmail

- Sends the results to a recipient.

- Configure Gmail credentials and set your recipient address.

8. Google Sheets

- Appends results to a Google Sheet for record-keeping or audits.

9. Respond to Webhook

- Sends a quick acknowledgment back to confirm the document was received.

🔹 **Credentials Needed**

- OpenAI API key (for Chat Model + Agent)

- Gmail account (OAuth2)

- Google Sheets account (OAuth2)

🔹 **Example Use Case**

Upload a contract PDF → workflow extracts clauses → AI flags risky terms → Gmail sends formatted summary → results stored in Google Sheets.