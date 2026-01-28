## 📥 Download Slideshare and Store in Drive

### ⚙️ Automate the download of Slideshare presentations and save them to Google Drive using the [Slideshare Downloader Pro API](https://rapidapi.com/skdeveloper/api/slideshare-downloader-pro).

---

## 🔄 Workflow Overview: Node by Node

1. **📝 On Form Submission**  
   → Displays a form for users to input the Slideshare URL.

2. **🌐 Slideshare Downloader**  
   → Sends the submitted URL to the [Slideshare Downloader Pro API](https://rapidapi.com/skdeveloper/api/slideshare-downloader-pro) to fetch a downloadable PDF link.

3. **✅ If (API Success?)**  
   → Checks if the API response returns a `200` status (success).

4. **⬇️ Download PDF**  
   → Downloads the actual PDF file from the media URL received in the API response.

5. **☁️ Upload to Google Drive**  
   → Uploads the downloaded PDF into a specific Google Drive folder.

6. **🔓 Google Drive Set Permission**  
   → Sets the file’s permission to "Anyone with the link can view".

7. **⏱️ Wait (Error Handling)**  
   → Adds a small delay before logging errors to prevent rapid multiple logs.

8. **📄 Google Sheets Append Row**  
   → Logs failed attempts with the original Slideshare URL and "N/A" for tracking.

---

## 💡 Use Case

A content curator or student often downloads Slideshare presentations for archiving, referencing, or sharing.  
Instead of repeatedly copy-pasting URLs, downloading files, and uploading them manually, this automated workflow streamlines the process from input to storage.

It leverages the [Slideshare Downloader Pro API](https://rapidapi.com/skdeveloper/api/slideshare-downloader-pro) to handle the heavy lifting — ensuring reliable PDF extraction.

---

## ✅ Benefits

- **🕒 Save Time:** Automates multi-step tasks in one seamless flow.
- **📂 Organized Storage:** PDFs are directly saved in Google Drive with public access enabled.
- **📉 Track Failures:** Failed downloads are logged for review via Google Sheets.
- **🔗 Easy Sharing:** Uploaded files are made instantly accessible via shareable links.
- **🧩 API Integration:** Integrates smoothly with the [Slideshare Downloader Pro API](https://rapidapi.com/skdeveloper/api/slideshare-downloader-pro), ensuring robust and scalable automation.

---
---
### 🔑 How to Get API Key from RapidAPI [Slideshare Downloader Pro](https://rapidapi.com/skdeveloper/api/slideshare-downloader-pro)

Follow these steps to get your API key and start using it in your workflow:

1. **Visit the API Page**  
   [👉 Click here to open Slideshare Downloader Pro API on RapidAPI](https://rapidapi.com/skdeveloper/api/slideshare-downloader-pro)

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
