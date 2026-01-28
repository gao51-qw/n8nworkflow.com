# Scrape Shopify store data with RapidAPI and save to Google Sheets

> 
An automated workflow that scrapes Shopify store information and product data using the [**Shopify Scraper API**](https://rapidapi.com/skdeveloper/api/shopify-scraper4) from RapidAPI, triggered by a user submitting a website URL, then logs data into Google Sheets for easy access and analysis.

---

### Node-by-Node Explanation

- **On form submission**  
  Triggers when a user submits a Shopify store website URL.

- **Store Info Scrap Request**  
  Sends a POST request to [`shopify-scraper4.p.rapidapi.com/shopinfo.php`](https://rapidapi.com/skdeveloper/api/shopify-scraper4)  to fetch store metadata (name, location, domain, etc.).

- **Products Scarp Request**  
  Sends a POST request to [`shopify-scraper4.p.rapidapi.com/products.php`](https://rapidapi.com/skdeveloper/api/shopify-scraper4)  to retrieve detailed product data (titles, prices, tags, etc.).

- **Append Store Info Google Sheets**  
  Appends store metadata into the "Shop Info" sheet in Google Sheets.

- **Append Products Data In Google Sheets**  
  Appends product data into the "Products" sheet in Google Sheets.

---

## Use Case  
Ideal for businesses or analysts who want to quickly gather Shopify store insights and product catalogs without manual data collection, enabling data-driven decision-making or competitive analysis.

---

## Benefits  
- Automates Shopify data extraction with the powerful [**Shopify Scraper API on RapidAPI**](https://rapidapi.com/skdeveloper/api/shopify-scraper4).  
- Saves time by collecting and organizing data automatically into Google Sheets.  
- Easily scalable and adaptable for multiple Shopify stores.
---
### 🔑 How to Get API Key from RapidAPI [Shopify Scraper](https://rapidapi.com/skdeveloper/api/shopify-scraper4) 

Follow these steps to get your API key and start using it in your workflow:

1. **Visit the API Page**  
   [👉 Click here to open Shopify Scraper API on RapidAPI](https://rapidapi.com/skdeveloper/api/shopify-scraper4) 

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

## 📊 Basic Information

- **Workflow ID:** 8049
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 288
- **Downloads:** 28
- **Created:** 2025/8/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8049)

## 👤 Author

- **Name:** Sk developer 
- **Username:** @skdeveloper

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **formTrigger** 
- **httpRequest** (×2)
- **googleSheets** (×2)
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
