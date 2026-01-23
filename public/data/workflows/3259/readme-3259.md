# Automate LinkedIn candidates sourcing with Google X-ray Boolean search

> ## **Auto Source LinkedIn Candidates with GPT-4 Boolean Search & Google X-ray**  

## **How It Works:**  

1. **User Input:**  
   - The user pastes a **job description** or **ideal candidate specifications** into the workflow.  

2. **Boolean Search String Generation:**  
   - OpenAI processes the input and generates a **precise LinkedIn Boolean search string** formatted as:  
     `site:linkedin.com/in ("Job Title" AND "Skill1" AND "Skill2")`  
   - This search string is optimized to find relevant LinkedIn profiles matching the provided criteria.  

3. **Google Sheet Creation:**  
   - A **new Google Sheet** is automatically created within a specified document to store extracted LinkedIn profile URLs.  

4. **Google Search Execution:**  
   - The workflow sends a **search request to Google** using an **HTTP node** with the generated Boolean string.  

5. **Iterative Search & Data Extraction:**  
   - The workflow retrieves **the first 10 results** from Google.  
   - If the **desired number of LinkedIn profiles** has not been reached, the workflow **loops**, fetching **the next set of 10 results** until the **if condition** is met.  

6. **Data Storage:**  
   - The workflow **extracts** LinkedIn profile URLs from the search results and **saves them** to the newly created **Google Sheet** for further review.  

---

## **Setup Steps:**  

### **1. API Key Configuration**  
- Under **"Credentials"**, add your **OpenAI API key** from your OpenAI account settings.  
- This key is used to generate the LinkedIn Boolean search string.  

### **2. Adjust Search Parameters**  
- Navigate to the **"If" node** and update the condition to define the **desired number of LinkedIn profiles** to extract.  
- The **default is 50**, but you can set it to any number based on your needs.  

### **3. Establish Google Sheets Connection**  
- **Connect your Google Sheets account** to the workflow.  
- **Create a document** to store the sourced LinkedIn profiles.  
- The workflow **automatically creates a new sheet** for each new search, so no manual setup is needed.  

### **4. Authenticate Google Search**  
- **Google search requires authentication** for better results.  
- Use the **Cookie-Editor browser extension** to **export your header string** and enable authenticated Google searches within the workflow.  

### **5. Run the Workflow**  
- **Execute** the workflow and monitor the **Google Sheet** for newly added LinkedIn profiles.  

---

## **Benefits:**  
✅ **Automates profile sourcing**, reducing manual search time.  
✅ **Generates precise LinkedIn Boolean search strings** tailored to job descriptions.  
✅ **Extracts and saves LinkedIn profiles efficiently** for recruitment efforts.  

This solution leverages **OpenAI and advanced search techniques** to enhance your **talent sourcing process**, making it faster and more accurate! 🚀


## 📊 Basic Information

- **Workflow ID:** 3259
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 4103
- **Downloads:** 410
- **Created:** 2025/3/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3259)

## 👤 Author

- **Name:** Abdullah Maftah
- **Username:** @abdullah

## 🏷️ Categories

- HR
- Multimodal AI

## 🔗 Nodes Used

- **wait** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **stickyNote** (×6)
- **googleSheets** (×3)
- **code** (×4)
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
