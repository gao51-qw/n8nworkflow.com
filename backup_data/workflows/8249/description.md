## 🌐 Bulk Domain Authority (DA/PA) Checker And Google Sheet Logging

Easily check **Domain Authority (DA)** and **Page Authority (PA)** for multiple domains using this automated **n8n workflow** powered by the [**Bulk DA PA Checker API**](https://rapidapi.com/skdeveloper/api/bulk-da-pa-checker2) on **RapidAPI**.  
Simply submit your domains via a web form, and the workflow fetches detailed SEO metrics and logs the data into Google Sheets.

---

## 🚀 What This Workflow Does

This automation leverages the [**Bulk DA PA Checker API**](https://rapidapi.com/skdeveloper/api/bulk-da-pa-checker2) from RapidAPI to:

- Accept multiple domains via a user-friendly form  
- Send bulk requests to the Bulk DA PA Checker API for fast SEO metric retrieval  
- Process and reformat the API response for easy consumption  
- Append the domain authority data directly into Google Sheets for tracking and analysis

Perfect for SEO pros, marketers, and agencies looking to streamline their domain analysis with the power of RapidAPI.

---

## ⚙️ Workflow Highlights

| 🧩 Node | 🔍 Description |
|--------|----------------|
| **📝 Form Trigger** | User submits comma-separated domains through a simple form. |
| **🌐 Check DA PA Bulk (RapidAPI)** | Sends a POST request to the Bulk DA PA Checker API to fetch DA/PA and related SEO metrics. |
| **🛠️ Re Format** | Parses and extracts each domain’s data from the API response. |
| **📊 Append in Google Sheets** | Logs all metrics in a structured Google Sheet for easy review and reporting. |

---

## 🧠 Key SEO Metrics Retrieved

- Domain Authority  
- Page Authority  
- Spam Score  
- HTTP Status Code  
- Last Crawled Date  
- External URLs and Redirects  
- And many more from the Bulk DA PA Checker API response

---

## ✅ Why Use This Workflow with the Bulk DA PA Checker API?

- Bulk checking saves time compared to manual domain lookups  
- Reliable data powered by a trusted RapidAPI service  
- Seamless integration with Google Sheets for reporting  
- Easily repeatable and scalable for large domain lists

---
### 🔑 How to Get API Key from RapidAPI [Bulk DA PA Checker API](https://rapidapi.com/skdeveloper/api/bulk-da-pa-checker2)

Follow these steps to get your API key and start using it in your workflow:

1. **Visit the API Page**  
   [👉 Click here to open Bulk DA PA Checker API on RapidAPI](https://rapidapi.com/skdeveloper/api/bulk-da-pa-checker2)

2. **Log in or Sign Up**  
   - Use your **Google**, **GitHub**, or email account to sign in.  
   - If you're new, complete a quick sign-up.

3. **Subscribe to a Pricing Plan**  
   - Go to the **Pricing** tab on the API page.  
   - Select a plan (free or paid, depending on your needs).  
   - Click **Subscribe**.

4. **Access Your API Key**  
   - Navigate to the **Endpoints** tab.  
   - Look for the `X-RapidAPI-Key` under **Request Headers**.  
   - Copy the value shown — this is your API key.

5. **Use the Key in Your Workflow**  
   - In your n8n workflow (HTTP Request node), replace:
     ```text
     "x-rapidapi-key": "your key"
     ```
     with:
     ```text
     "x-rapidapi-key": "YOUR_ACTUAL_API_KEY"
     ```

---
