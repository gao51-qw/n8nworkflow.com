## 📈 YouTube Trend Finder Workflow using n8n & RapidAPI

**Description:**  
Easily discover trending YouTube videos by country and language using this automated n8n workflow. The flow leverages the [**YouTube Trend Finder API**](https://rapidapi.com/PrineshPatel/api/youtube-trend-finder) and logs insights to Google Sheets — ideal for content creators, marketers, and researchers.

---

## 🔗 Node-by-Node Explanation

| Node Name                    | Type               | Description                                                                 |
|-----------------------------|--------------------|-----------------------------------------------------------------------------|
| **1. On form submission**    | `Form Trigger`     | Captures user input for `country` and `language` through a web form.        |
| **2. Trend Finder API Request** | `HTTP Request`     | Sends a request to [**YouTube Trend Finder API**](https://rapidapi.com/PrineshPatel/api/youtube-trend-finder) with the form data. |
| **3. Re format output**      | `Code`             | Extracts and reshapes API response data like `title`, `link`, and `tags`.  |
| **4. Google Sheets**         | `Google Sheets`    | Appends the trending video data into a structured spreadsheet.             |

---

## 🎯 Use Cases

- 🔍 **Content Research:** Find top-trending videos in any region or language for idea inspiration.
- 📈 **Marketing Intelligence:** Track video trends to tailor your video marketing strategy.
- 📰 **Trend Monitoring:** Journalists and analysts can quickly surface viral video topics.

---

## ✅ Benefits of this Workflow

- **No Coding Required:** Easy-to-use form interface for non-technical users.
- **Real-Time Trends:** Instantly access trending YouTube content with the [**YouTube Trend Finder API**](https://rapidapi.com/PrineshPatel/api/youtube-trend-finder).
- **Automated Logging:** Stores data directly in Google Sheets for future analysis or sharing.
- **Customizable:** Easily modify for more inputs like `video category`, `max results`, or add filters.

---

Create your **free n8n account** and set up the workflow in just a few minutes using the link below:

👉 [Start Automating with n8n](https://n8n.partnerlinks.io/7fuarh1e6dz5)

Save time, stay consistent, and grow your LinkedIn presence effortlessly!
