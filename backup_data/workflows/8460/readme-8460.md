# Extract invoice data from PDFs to JSON with Gemini AI and XML transformation

> This n8n workflow converts invoices in PDF format into a **structured, ready-to-use JSON**, using **AI and XML transformation** — without writing any code.

#### 🚀 How it works

1. **Upload form** → The user uploads a PDF file.
2. **Text extraction** → The PDF content is extracted as plain text.
3. **XML schema definition** → A standard invoice structure is defined with fields such as:

   * Invoice number
   * Customer and issuer details
   * Items with description, quantity, and price
   * Totals and taxes
   * Bank account details
4. **AI (Gemini)** → The model rewrites the PDF text into a **valid XML** following the predefined schema.
5. **XML cleanup** → Removes extra tags, line breaks, and unnecessary formatting.
6. **JSON conversion** → The XML is transformed into a clean, structured JSON object, ready for integrations, APIs, or storage.

#### ✨ Benefits

* Transforms **unstructured PDFs** into **normalized JSON data**.
* No coding required, only n8n nodes.
* Scalable to different invoice formats with minimal adjustments.
* Leverages AI to interpret complex textual content.

#### 🛠️ Use cases

* Automating invoice data capture.
* Integration with ERPs, CRMs, or databases.
* Generating financial reports from PDFs.

## 📊 Basic Information

- **Workflow ID:** 8460
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 990
- **Downloads:** 99
- **Created:** 2025/9/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8460)

## 👤 Author

- **Name:** Mauricio Perera
- **Username:** @rckflr

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **set** (×2)
- **xml** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
