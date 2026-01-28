## 🧠 About this workflow
This workflow automatically generates personalized B2B outreach email messages by combining AI-based company research and text generation.  
It’s designed to help sales and marketing professionals automate the creation of tailored cold emails for prospects.

---

## ⚙️ How it works
1. **Get rows from Google Sheets** — Retrieves companies marked as “ready” for outreach.  
2. **Loop Over Items** — Processes each company individually.  
3. **Company Research (LangChain Agent)** — Uses the Tavily search tool to collect key company insights such as overview, offerings, and recent news.  
4. **Generate Outreach Message (LLM Chain)** — Drafts a professional, concise, and fully personalized email body in English using the AI training context from YOUR_COMPANY_NAME.  
   This example uses an AI training and automation service context, but you can easily modify the prompt to fit your own company’s products, services, or industry. 
5. **Add to Google Sheets** — Writes the generated messages back into the sheet.  
6. *(Optional)* **Add to Instantly.ai** — Sends the finalized lead data to your Instantly campaign for cold email distribution.

---

## 👥Use Cases
**💼Sales & CRM**:Automatically build and update your client database from received business cards

**🏢Back Office & Admin**: Digitize incoming cards for unified company records

**📧Marketing Teams**: Collect and manage leads efficiently

**📚 AI / OCR Research**: Build structured datasets for training AI models or internal automation

---

## 🧩 Troubleshooting

If the workflow does not generate emails or data fails to appear in Google Sheets, please check the following:

1. **Google Sheets credentials** — Ensure that the connected account has edit permissions and the document ID and sheet name are correctly set.  
2. **API keys** — Verify that your OpenRouter and Tavily API credentials are valid and not expired.  
3. **Rate limits** — Tavily and OpenRouter may throttle requests when processing multiple records. Try lowering the batch size in the “Limit” node.  
4. **Empty company background** — If the “Company Research” node returns no output, make sure the input company name is correct and includes sufficient context (e.g., full company name, not abbreviation).  
5. **LLM output format** — Ensure the “Generate Outreach Message” node is set to return plain text, not JSON or markdown.  
6. **Instantly.ai integration (optional)** — If leads are not added, confirm that your API key and campaign ID are valid, and that the node is not disabled.  

If the issue persists, enable **“Always Output Data”** in key nodes (such as Company Research and Generate Outreach Message) to debug intermediate results.  
You can also use the **Execution Log** to inspect where the flow stops or returns an empty output.

---

## ⚠️ Disclaimer
This workflow uses AI language models and third-party APIs (OpenRouter, Tavily).  
Ensure that you add your own API credentials securely and verify all AI-generated content before sending emails.