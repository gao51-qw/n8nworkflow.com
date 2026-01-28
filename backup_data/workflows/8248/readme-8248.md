# Track free Udemy courses automatically with RapidAPI and Google Sheets

> This workflow fetches free Udemy courses hourly via the [Udemy Coupons and Courses API on RapidAPI](https://rapidapi.com/skdeveloper/api/udemy-coupons-and-courses), filters them, and updates a Google Sheet. It sends alerts on errors for smooth monitoring.

---

## Node-by-Node Explanation

1. **Schedule Trigger:** Runs the workflow every hour automatically.
2. **Fetch Udemy Coupons:** Sends POST request to the [Udemy Coupons and Courses API on RapidAPI](https://rapidapi.com/skdeveloper/api/udemy-coupons-and-courses) to get featured courses.
3. **Check API Success:** Verifies if the API response is successful; routes accordingly.
4. **Filter Free Courses:** Selects only courses with `sale_price` of zero (free courses).
5. **Send Error Notification:** Emails admin if API fetch fails for quick action.
6. **Sync Courses to Google Sheet:** Appends or updates the filtered free courses into Google Sheets.

---

## Google Sheets Columns

* `id`
* `name`
* `price`
* `sale_price`
* `image`
* `lectures`
* `views`
* `rating`
* `language`
* `category`
* `subcategory`
* `slug`
* `store`
* `sale_start`

---

## Google Sheets Setup & Configuration Steps

1. **Create Google Sheet:** Create or open a Google Sheet where you want to sync courses.
2. **Set Headers:** Add columns headers matching the fields synced (`id`, `name`, `price`, etc.).
3. **Enable Google Sheets API:** Go to Google Cloud Console, enable Google Sheets API for your project.
4. **Create Service Account:** In Google Cloud Console, create a Service Account with editor access.
5. **Download Credentials:** Download the JSON credentials file from the service account.
6. **Share Sheet:** Share your Google Sheet with the Service Account email (found in JSON file).
7. **Configure n8n Google Sheets Node:** Use the service account credentials, set operation to “Append or Update”, provide Sheet URL and sheet name or `gid`.
8. **Match Columns:** Map the course fields to your sheet columns and set `id` as the unique key for updates.

---

## How to Obtain RapidAPI Key & Setup API Request

1. **Sign up/Login:** Visit [RapidAPI Udemy Coupons and Courses API](https://rapidapi.com/skdeveloper/api/udemy-coupons-and-courses) and create an account or log in.
2. **Subscribe to API:** Subscribe to the Udemy Coupons and Courses API plan (free or paid).
3. **Get API Key:** Navigate to your dashboard and copy your `x-rapidapi-key`.
4. **Configure HTTP Request:** In your workflow’s HTTP Request node:

   * Set method to `POST`.
   * URL: `https://udemy-coupons-and-courses.p.rapidapi.com/featured.php`
   * Add headers:

     * `x-rapidapi-host`: `udemy-coupons-and-courses.p.rapidapi.com`
     * `x-rapidapi-key`: your copied API key
   * Set content type to `multipart/form-data`.
   * Add body parameter: `page=1` (or as needed).
5. **Test API:** Run the node to ensure the API responds with data successfully before continuing workflow setup.

---

## Use Cases & Benefits 

* Automates daily updates of free Udemy courses in your sheet using the [Udemy Coupons and Courses API on RapidAPI](https://rapidapi.com/skdeveloper/api/udemy-coupons-and-courses).
* Saves manual effort in tracking coupons and deals.
* Enables quick error alerts to maintain data accuracy.
* Ideal for course aggregators, affiliate marketers, or learning platforms needing fresh course data.

---

## Who This Workflow Is For

* Content curators and edtech platforms tracking free courses.
* Affiliate marketers promoting Udemy deals.
* Anyone needing real-time access to updated free Udemy coupons.


## 📊 Basic Information

- **Workflow ID:** 8248
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 357
- **Downloads:** 35
- **Created:** 2025/9/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8248)

## 👤 Author

- **Name:** Sk developer 
- **Username:** @skdeveloper

## 🏷️ Categories

- Market Research
- Personal Productivity

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** 
- **if** 
- **code** 
- **emailSend** 
- **googleSheets** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
