This workflow allows you to scrape website content, clean the HTML, extract structured information using GPT-5-mini, and store the results along with SEO keywords into Airtable. Ideal for building keyword lists and organizing web content for SEO research.

---

## **Setup Instructions**

### **1. Prerequisites**

* n8n Community or Cloud instance
* Airtable account with a base and table ready
* OpenAI API Key with access to GPT-5-mini

---

### **2. Airtable Structure**

Ensure your Airtable table has the following fields:

| Field Name   | Type    | Notes                           |
| ------------ | ------- | ------------------------------- |
| Website Name | String  | Name or URL of the website      |
| Data         | String  | Cleaned website text            |
| Keyword      | String  | Extracted SEO keyword list      |
| Status       | Options | Values: Todo, In progress, Done |

---

### **3. Node Setup**

✅ **Form Trigger:**
Collects website URL from the user.

✅ **HTTP Request:**
Fetches the website content.

✅ **HTML Cleaner (Code Node):**
Strips out styles, tags, and whitespace to get clean text.

✅ **Topic Extractor (AI Agent + GPT-5-mini):**
Extracts topic-wise information from the cleaned website content.

✅ **Text Cleaner (Code Node):**
Removes unwanted symbols like `###` and `**`.

✅ **Keyword Extractor (AI Agent + GPT-5-mini):**
Generates a list of 90 important SEO keywords.

✅ **Airtable Upsert:**
Stores the cleaned data, keywords, and status in Airtable.

---

### **4. Key Features**

 ✅ Automatic website content scraping
 ✅ Clean HTML and extract plain text
 ✅ Use GPT-5-mini for topic-wise information extraction
 ✅ Generate 90-keyword SEO lists
 ✅ Store and manage data in Airtable

---

### **5. Use Cases**

* SEO Keyword Research
* Competitor Website Content Analysis
* Structured Website Data Collection

---

## **Additional Workflow Recommendations**

### **✅ Rename Nodes for Clarity**

| Current Name | Suggested Name                  |
| ------------ | ------------------------------- |
| Website Name | Website URL Input Form          |
| HTTP Request | Fetch Website Content           |
| Code         | HTML to Plain Text Cleaner      |
| Split Out1   | Clean Text Splitter             |
| AI Agent1    | Topic Extractor (GPT-5-mini)   |
| Code1        | Text Cleanup Formatter          |
| Split Out2   | Final Text Splitter             |
| AI Agent     | Keyword Extractor (GPT-5-mini) |
| Airtable     | Airtable Data Upsert            |
| Wait1        | Delay Before Merge              |
| Merge        | Combine Data for Airtable       |

---