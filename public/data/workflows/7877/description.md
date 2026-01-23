*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# 🚀 Automating Google Maps Lead Generation with n8n + Apify

Finding quality leads can be time-consuming. What if you could *scrape restaurant data from Google Maps, filter the best ones, and email a Morning Brew–style newsletter automatically*?  

That’s exactly what this **n8n workflow** does.


## 🔎 What This Workflow Does

* Takes a location input (Bangkok or Bareilly in this case)  
* Runs a Google Maps scraper via [Apify Actor](https://apify.com/)  
* Extracts restaurant essentials (name, category, rating, reviews, address, phone, Google Maps link)  
* Sorts & filters results (only high-review, highly-rated places)  
* Saves data to Airtable for lead management  
* Uses AI to generate a newsletter in a Morning Brew–style HTML email  
* Emails the newsletter automatically to your chosen recipients  



## 🛠️ Workflow Breakdown

### 1. Form Trigger
* User selects location from a dropdown (Bangkok or Bareilly)  
* Submits form to kickstart the process  

### 2. Google Maps Scraper
* Powered by **Apify**  
* Collects up to *1,000 restaurants* with details:  
  * Name  
  * Category  
  * Price Range  
  * Rating  
  * Reviews  
  * Address  
  * Phone  
  * Google Maps URL  
* Skips closed places and pulls detailed contact data  

### 3. Extract & Transform Data
* n8n **Set node** extracts only the essentials  
* Formats them into a clean text block (`Restaurant_Data`)  

### 4. Sort & Filter
* **Sorted by**:  
  * Review Count (descending)  
  * Rating (descending)  
* **Filter**: Only restaurants with *500+ reviews*  

### 5. Airtable Lead Storage
* Each record is saved to **Google Map Leads - Restaurants** Airtable table  
* Fields include:  
  * Title  
  * Category  
  * Price Range  
  * Rating  
  * Review Count  
  * Address  
  * Phone  
  * Location  

### 6. AI-Powered Newsletter
* n8n’s **LangChain + OpenAI** node generates an HTML newsletter  
* **Tone**: Breezy, witty, like Morning Brew  
* **Content**: Sorted restaurant picks with ratings, reviews, and contact links  
* Output is JSON with `"Subject"` and `"Body"`  

### 7. Automatic Email
* Gmail node sends the newsletter directly to your inbox  
* Example recipient: `prath002@gmail.com`  



## 🎯 Why This Workflow Rocks

* **End-to-End Automation**: From scraping → filtering → emailing, no manual effort  
* **Lead Enrichment**: Only keeps high-quality restaurants with strong social proof  
* **Scalable**: Works for any city you plug into the form  
* **Engaging Output**: AI crafts the results into a ready-to-send newsletter  



## 🔮 Next Steps

* Add more cities to the dropdown for multi-location scraping  
* Customize the email template for branding  
* Integrate with **CRM tools** for automated outreach  



👉 With just a few clicks, you can go from **raw Google Maps data → polished newsletter → fresh leads in Airtable**.  

That’s the power of **n8n + Apify + AI**.
