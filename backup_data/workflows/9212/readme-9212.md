# Extract contact information from business cards with Mistral OCR and GPT-4o-mini

> ![Bildschirmfoto 20251010 um 22.54.19.png](fileId:2819)

# 🧠 Business Card Scanner – Automate Contact Extraction

This workflow automates the process of extracting **contact details from business cards** (PDF or image) and saving them directly into an **n8n Data Table**.  
No more manual data entry — just upload a card and let AI do the rest.

---

## ⚙️ How It Works

1. **Upload the business card** via a web form (PDF or image).  
2. The uploaded file is **converted to Base64** for processing.  
3. The Base64 data is sent to the **Mistral OCR API**, which extracts text from the image.  
4. The **OCR output** is parsed into JSON.  
5. An **AI Agent (OpenAI GPT-4o-mini)** interprets the extracted text and converts it into structured business card information (e.g., name, company, email, phone).  
6. The **Structured Output Parser** validates and aligns the data with a predefined schema.  
7. The workflow **upserts** (inserts or updates) the contact details into an **n8n Data Table** named `business cards`, using the email address as the unique identifier.

✅ **Result:** Seamless digitization of business cards into structured, searchable contact data.

---

## 🧩 Prerequisites

Before importing the workflow, make sure you have the following:

1. **n8n Instance** with access to the **Data Table** feature  
2. **[OpenAI Platform](https://platform.openai.com/docs/overview)** account and API key (configured in n8n)  
3. **[Mistral AI](https://console.mistral.ai/home)** account and API key (configured in n8n)

---

## 🛠️ Setup Steps

1. **Import the Workflow**  
   - Download and import the JSON file into your n8n instance.

2. **Create a Data Table**  
   - Name it `business_cards` (or adjust the workflow accordingly).  
   - Add the following fields:  
     ```text
     firstname
     name
     company
     jobdescription
     phone
     mobil
     email
     street
     postcode
     place
     web
     ```

3. **Configure API Credentials**  
   - **Mistral OCR API** → Add your API key under *HTTP Bearer Auth*.  
   - **OpenAI API** → Add your API key under *OpenAI Credentials*.  
     - Model: `gpt-4o-mini` (recommended for speed and low cost).

4. **Activate the Web Form Trigger**  
   - Enable the trigger node to make the business card upload form accessible via a public URL.

5. **Test the Workflow**  
   - Upload a sample business card.  
   - Confirm that extracted contact data automatically appears in your Data Table.

---

## 💡 Example JSON Output

```json
{
  "firstname": "Anna",
  "name": "Müller",
  "company": "NextGen Tech GmbH",
  "jobdescription": "Head of Marketing",
  "email": "anna.mueller@nextgen.tech",
  "phone": "+49 821 1234567",
  "mobil": "+49 170 9876543",
  "street": "Schillerstraße 12",
  "postcode": "86150",
  "place": "Augsburg",
  "web": "https://nextgen.tech"
}

## 📊 Basic Information

- **Workflow ID:** 9212
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 584
- **Downloads:** 58
- **Created:** 2025/10/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9212)

## 👤 Author

- **Name:** Wolfgang Renner
- **Username:** @naviqo

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **httpRequest** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **dataTable** 
- **formTrigger** 
- **extractFromFile** (×2)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
