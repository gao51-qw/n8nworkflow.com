## 🔎 Automated Keyword Research Workflow with Google sheet logging & Semrush API
**Description:**  
Easily collect keywords and country input, run automated keyword research via the [**Semrush Keyword Research**](https://rapidapi.com/PrineshPatel/api/semrush-keyword-research-tool) API on RapidAPI, and store results in Google Sheets for seamless tracking and analysis.

---

## ⚙️ Node-by-Node Explanation

### 🟢 On form submission (`formTrigger`)  
- Collects `keyword` and `country` inputs from the user via a simple form to start the research process.  
- Triggers the workflow execution upon submission.

### 🌐 Keyword Research (`httpRequest`)  
- Sends a POST request with user inputs (`keyword` and `country`) to the [**Semrush Keyword Research**](https://rapidapi.com/PrineshPatel/api/semrush-keyword-research-tool).  
- Retrieves keyword suggestions, search volume, and related data for comprehensive keyword insights.

### 📄 Append Data to Google Sheet (`googleSheets`)  
- Automatically appends the keyword research results into a connected Google Sheets document.  
- Enables easy tracking, sharing, and further analysis of keyword data.

---
## 📈 Example Spreadsheet Structure

| Keyword       | Country | Search Volume | CPC  | Competition | Keyword Difficulty | Related Keywords                   | Date of Research |
|---------------|---------|---------------|------|-------------|--------------------|-------------------------------------|------------------|
| keyword1      | US      | 10,000        | $2.50| 0.75        | 45                 | keyword2, keyword3                 | 2025-09-09       |
| example term  | UK      | 15,000        | $1.80| 0.60        | 38                 | term1, example keyword             | 2025-09-09       |
## 🌟 Benefits

- 🚀 **Powered by [**Semrush Keyword Research**](https://rapidapi.com/PrineshPatel/api/semrush-keyword-research-tool) API on RapidAPI:** Reliable, up-to-date keyword insights accessible via a simple API integration.  
- 🔄 **Fully Automated:** From user input to data storage, the process is seamless and requires no manual handling.  
- 📊 **Centralized Data Storage:** Storing results in Google Sheets ensures accessibility and easy collaboration.  
- 📈 **Scalable & Repeatable:** Run keyword research on-demand for multiple keywords and countries effortlessly.

---

## 🚀 Use Cases

- 🏢 **SEO Agencies:** Quickly gather keyword data for clients in different markets using the [**Semrush Keyword Research**](https://rapidapi.com/PrineshPatel/api/semrush-keyword-research-tool).  
- 📱 **Digital Marketing Teams:** Monitor and expand keyword strategies by collecting keyword ideas and volume regularly through the [**Semrush Keyword Research**](https://rapidapi.com/PrineshPatel/api/semrush-keyword-research-tool).  
- 🔎 **Content Creators:** Identify trending and high-traffic keywords tailored by country to optimize content via the [**Semrush Keyword Research API**](https://rapidapi.com/PrineshPatel/api/semrush-keyword-research-tool).  
- 📅 **Automated Reporting:** Generate scheduled keyword research reports by integrating this workflow into larger marketing automation pipelines.

---
## 🔑 How to Get Your API Key for **Semrush Keyword Research**

1. **Visit the API Page:**  
   Go to the [**Semrush Keyword Research**](https://rapidapi.com/PrineshPatel/api/semrush-keyword-research-tool) on RapidAPI.

2. **Sign Up/Login:**  
   Create an account or log in if you already have one.

3. **Subscribe to the API:**  
   Click **"Subscribe to Test"** and choose a plan (free or paid).

4. **Copy Your API Key:**  
   After subscribing, your **API Key** will be available in the **"X-RapidAPI-Key"** section under "Endpoints".

5. **Use the Key:**  
   Include the key in your API requests like this:

   ```bash
   -H "X-RapidAPI-Key: YOUR_API_KEY"

## 🛠 **Customizing the Workflow**

To modify the automated workflow and adapt it to your specific use case, follow these guidelines:

1. **Adjust the Data Retrieval Process**:  
   You can modify the data you want to receive from the Semrush API. For example, if you’re only interested in **search volume** and **CPC**, you can filter out the other results in the API request.

2. **Add More Countries**:  
   If you work with multiple regions, modify the workflow to accept multiple country inputs. You could either pass in a list of countries or have a dropdown on the form that lets users select their country of choice.

3. **Expand Keyword Types**:  
   The workflow can be expanded to collect data for different types of keywords, such as **long-tail** or **LSI (Latent Semantic Indexing)** keywords, depending on your SEO needs.

4. **Set Up Scheduled Keyword Reporting**:  
   To automate reporting, you can schedule keyword research reports to run at regular intervals, such as monthly, using **Google Apps Script** or another task scheduler. This way, you’ll always have fresh data on hand for analysis.
## ✅ Tips for Smooth Workflow Integration

1. **Test Your API Integration**:  
   Run a test to check if data is properly flowing into your Google Sheet before automating the process.

2. **Set Up Notifications**:  
   Use **Google Sheets' built-in notifications** or an external automation tool (e.g., Zapier, Integromat) to notify you when new data is added or if there’s an issue with the workflow.

3. **Handle Errors Gracefully**:  
   Add error handling in your automated process to prevent issues like missing data or API request failures from disrupting your workflow.

