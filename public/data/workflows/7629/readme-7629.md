# Extract YouTube Channel Metadata to Google Docs using RapidAPI

> ## Automate YouTube Channel Metadata Extraction to Google Docs

**Description:**  
This workflow leverages the powerful [**YouTube Metadata API**](https://rapidapi.com/PrineshPatel/api/youtube-metadata1) to automatically extract detailed metadata from any YouTube channel URL. Using the [**YouTube Metadata API**](https://rapidapi.com/PrineshPatel/api/youtube-metadata1), it collects information like subscribers, views, keywords, and banners, reformats it for readability, and saves it directly to Google Docs for easy sharing and record-keeping. Ideal for marketers, content creators, and analysts looking to streamline YouTube channel data collection.

By integrating the [**YouTube Metadata**](https://rapidapi.com/PrineshPatel/api/youtube-metadata1), this workflow ensures accurate and up-to-date channel insights fetched instantly from the source.

---

## Node-by-Node Explanation

### 1. On form submission  
Triggers the workflow when a user submits a YouTube channel URL via a web form, starting the metadata extraction process.

### 2. YouTube Channel Metadata (HTTP Request)  
Calls the [**YouTube Metadata API**](https://rapidapi.com/PrineshPatel/api/youtube-metadata1) with the provided channel URL to retrieve comprehensive channel details like title, subscriber count, and banner images.

### 3. Reformat (Code)  
Transforms the raw API response into a clean, formatted string with emojis and markdown styling for easy reading and better presentation.

### 4. Add Data in Google Docs  
Appends the formatted channel metadata into a specified Google Docs document, providing a centralized and accessible record of the data.

---

## Benefits of This Workflow

- **Automated Data Collection:** Eliminates manual effort by automatically extracting YouTube channel data via the [**YouTube Metadata API**](https://rapidapi.com/PrineshPatel/api/youtube-metadata1).  
- **Accurate & Reliable:** Ensures data accuracy by using a trusted API source, keeping metadata current.  
- **Improved Organization:** Saves data in Google Docs, allowing for easy sharing, editing, and collaboration.  
- **User-Friendly:** Simple form-based trigger lets anyone gather channel info without technical knowledge.  
- **Scalable & Flexible:** Can process multiple URLs easily, perfect for marketing or research teams handling numerous channels.

---

## Use Cases

- **Marketing Teams:** Track competitor YouTube channel stats and trends for strategic planning.  
- **Content Creators:** Monitor channel growth metrics and optimize content strategy accordingly.  
- **Researchers:** Collect and analyze YouTube channel data for academic or market research projects.  
- **Social Media Managers:** Automate reporting by documenting channel performance metrics in Google Docs.  
- **Businesses:** Maintain up-to-date records of brand or partner YouTube channels efficiently.

---

By leveraging the [**YouTube Metadata**](https://rapidapi.com/PrineshPatel/api/youtube-metadata1), this workflow provides an efficient, scalable solution to extract and document YouTube channel metadata with minimal manual input.

---
## 🔑 How to Get Your API Key for **YouTube Metadata API**

1. **Visit the API Page:**  
   Go to the [**YouTube Metadata**](https://rapidapi.com/PrineshPatel/api/youtube-metadata1) on RapidAPI.

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

Create your **free n8n account** and set up the workflow in just a few minutes using the link below:

👉 [Start Automating with n8n](https://n8n.partnerlinks.io/7fuarh1e6dz5)



## 📊 Basic Information

- **Workflow ID:** 7629
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 85
- **Downloads:** 8
- **Created:** 2025/8/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7629)

## 👤 Author

- **Name:** Evoort Solutions
- **Username:** @evoortsolutions

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **code** 
- **googleDocs** 
- **stickyNote** (×5)
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
