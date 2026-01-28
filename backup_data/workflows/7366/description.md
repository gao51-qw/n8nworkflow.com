## 🚀 Automated Keyword Analysis with On-Page SEO Workflow 

## 📌 Description
Boost your SEO strategy by automating keyword research and on-page SEO analysis with n8n. This workflow uses user input (keyword + country), retrieves essential data using the powerful [**SEO On-Page API**](https://rapidapi.com/PrineshPatel/api/seo-on-page), and saves it directly into Google Sheets. Ideal for marketers, content strategists, and SEO agencies looking for efficiency.

---

## 🔁 Node-by-Node Flow explanation 
### 1. **🟢 On form submission**
Triggers the workflow when a user submits a keyword and country via a simple form.

### 2. **📦 Global Storage**
Captures and stores the submitted keyword and country for use across the workflow.

### 3. **🌍 Keyword Insights Request**
Sends a POST request to the [**SEO On-Page API**](https://rapidapi.com/PrineshPatel/api/seo-on-page) to fetch keyword suggestions (broad match keywords).

### 4. **🧾 Re-Format**
Extracts the relevant `broadMatchKeywords` array from the keyword API response.

### 5. **📊 Keyword Insights**
Appends extracted keyword suggestions into the **"Keyword Insights"** tab in Google Sheets.

### 6. **📉 KeyWord Difficulty Request**
Sends a second POST request to the [**SEO On-Page API**](https://rapidapi.com/PrineshPatel/api/seo-on-page) to fetch keyword difficulty and SERP data.

### 7. **📈 Re-Format 2**
Extracts the `keywordDifficultyIndex` value from the API response.

### 8. **📄 KeyWord Difficulty**
Saves the keyword difficulty score into the **"KeyWord Difficulty"** sheet for reference.

### 9. **🔍 Re -Format 5**
Extracts SERP result data from the difficulty API response.

### 10. **🗂️ SERP Result**
Appends detailed SERP data into the **"Serp Analytics"** sheet in Google Sheets.

---

## 🎯 Benefits

- ✅ **Fully Automated SEO Research** – No manual data entry or API calls required.
- 🔁 **Real-time Data Collection** – Powered by [**SEO On-Page API on RapidAPI**](https://rapidapi.com/PrineshPatel/api/seo-on-page), ensuring fresh and reliable results.
- 📊 **Organized Insights** – Data is cleanly categorized into separate Google Sheets tabs.
- ⏱️ **Time Saver** – Instantly analyze keywords without switching between tools.

---

## 💡 Use Cases

- 📌 **SEO Agencies** – Generate keyword reports for clients automatically.
- 📝 **Content Writers** – Discover keyword difficulty and SERP competition before drafting.
- 🧑‍💻 **Digital Marketers** – Monitor keyword trends and search visibility in real-time.
- 📈 **Bloggers & Influencers** – Choose better keywords to rank faster on search engines.

---

## 🔗 API Reference

This workflow is powered by the **[SEO On-Page API](https://rapidapi.com/PrineshPatel/api/seo-on-page)** available on RapidAPI. It offers keyword research, difficulty metrics, and SERP analytics through simple endpoints, making it ideal for automation with n8n.

---

&gt; ⚠️ **Note:** Make sure to replace `"your key"` with your actual RapidAPI key in both HTTP Request nodes for successful API calls.

Create your **free n8n account** and set up the workflow in just a few minutes using the link below:

👉 [Start Automating with n8n](https://n8n.partnerlinks.io/7fuarh1e6dz5)

Save time, stay consistent, and grow your LinkedIn presence effortlessly!
