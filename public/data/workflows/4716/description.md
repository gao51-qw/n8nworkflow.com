**How it works**
- User submits a keyword through a form to trigger the workflow.
- Ads matching the keyword are scraped from Facebook Ads Library.
- Ads are filtered by media type (image or video).
- Images are analyzed using an AI model to describe visuals and text.
- Videos are downloaded, processed, and sent to Gemini for visual and spoken content analysis.
- Text, URLs, and media descriptions are compiled.
- All ad insights are saved into a Google Sheet for easy viewing.

**Set up steps**
- **Requires** Apify and Gemini API credentials, Google Sheets access, and OpenAI key.
- **Import** the workflow into n8n and connect accounts to form, HTTP, and Sheets nodes.
- Provide form trigger URL for user input; **no advanced config needed**.
- **Estimated setup time:** ~15–20 minutes for a user familiar with n8n.
- **Sticky notes** inside the workflow provide helpful guidance per section.