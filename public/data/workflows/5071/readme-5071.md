# Google Play review intelligence with Bright Data & Telegram alerts

> # Google Play Review Intelligence with Bright Data & Telegram Alerts

## Overview
This n8n workflow automates the process of scraping Google Play Store reviews, analyzing app performance, and sending alerts for low-rated applications. It integrates with Bright Data for web scraping, Google Sheets for data storage, and Telegram for notifications.

## Workflow Components

### 1. **✅ Trigger Input Form**
- **Type:** Form Trigger
- **Purpose:** Initiates the workflow with user input
- **Input Fields:**
  - URL (Google Play Store app URL)
  - Number of reviews to fetch
- **Function:** Captures user requirements to start the scraping process

### 2. **🚀 Start Scraping Request**
- **Type:** HTTP Request (POST)
- **Purpose:** Sends scraping request to Bright Data API
- **Endpoint:** `https://api.brightdata.com/datasets/v3/trigger`
- **Parameters:**
  - Dataset ID: `gd_m6zagkt024uwvvwuyu`
  - Include errors: `true`
  - Limit multiple results: `5`
- **Custom Output Fields:**
  - `url`, `review_id`, `reviewer_name`, `review_date`
  - `review_rating`, `review`, `app_url`, `app_title`
  - `app_developer`, `app_images`, `app_rating`
  - `app_number_of_reviews`, `app_what_new`
  - `app_content_rating`, `app_country`, `num_of_reviews`

### 3. **🔄 Check Scrape Status**
- **Type:** HTTP Request (GET)
- **Purpose:** Monitors the progress of the scraping job
- **Endpoint:** `https://api.brightdata.com/datasets/v3/progress/{snapshot_id}`
- **Function:** Checks if the dataset scraping is complete

### 4. **⏱️ Wait for Response 45 sec**
- **Type:** Wait Node
- **Purpose:** Implements polling mechanism
- **Duration:** 45 seconds
- **Function:** Pauses workflow before checking status again

### 5. **🧩 Verify Completion**
- **Type:** IF Condition
- **Purpose:** Evaluates scraping completion status
- **Condition:** `status === "ready"`
- **Logic:**
  - **True:** Proceeds to fetch data
  - **False:** Loops back to status check

### 6. **📥 Fetch Scraped Data**
- **Type:** HTTP Request (GET)
- **Purpose:** Retrieves the final scraped data
- **Endpoint:** `https://api.brightdata.com/datasets/v3/snapshot/{snapshot_id}`
- **Format:** JSON
- **Function:** Downloads completed review and app data

### 7. **📊 Save to Google Sheet**
- **Type:** Google Sheets Node
- **Purpose:** Stores scraped data for analysis
- **Operation:** Append rows
- **Target:** Specified Google Sheet document
- **Data Mapping:**
  - URL, Review ID, Reviewer Name, Review Date
  - Review Rating, Review Text, App Rating
  - App Number of Reviews, App What's New, App Country

### 8. **⚠️ Check Low Ratings**
- **Type:** IF Condition
- **Purpose:** Identifies poor-performing apps
- **Condition:** `review_rating &lt; 4`
- **Logic:**
  - **True:** Triggers alert notification
  - **False:** No action taken

### 9. **📣 Send Alert to Telegram**
- **Type:** Telegram Node
- **Purpose:** Sends performance alerts
- **Message Format:**
  ```
  ⚠️ *Low App Performance Alert*
  📱 *App:* {app_title}
  🧑‍💻 *Developer:* {app_developer}
  ⭐ *Rating:* {app_rating}
  📝 *Reviews:* {app_number_of_reviews}
  🔗 [View on Play Store]({url})
  ```

## Workflow Flow

```
Input Form → Start Scraping → Check Status → Wait 45s → Verify Completion
                                    ↑              ↓
                                    └──── Loop ────┘
                                           ↓
                          Fetch Data → Save to Sheet & Check Ratings
                                                      ↓
                                              Send Telegram Alert
```

## Configuration Requirements

### API Keys & Credentials
- **Bright Data API Key:** Required for web scraping
- **Google Sheets OAuth2:** For data storage access
- **Telegram Bot Token:** For alert notifications

### Setup Parameters
- **Google Sheet ID:** Target spreadsheet identifier
- **Telegram Chat ID:** Destination for alerts
- **N8N Instance ID:** Workflow instance identifier

## Key Features

### Data Collection
- Comprehensive app metadata extraction
- Review content and rating analysis
- Developer and country information
- App store performance metrics

### Quality Monitoring
- Automated low-rating detection
- Real-time performance alerts
- Continuous data archiving

### Integration Capabilities
- Bright Data web scraping service
- Google Sheets data persistence
- Telegram instant notifications
- Polling-based status monitoring

## Use Cases

1. **App Performance Monitoring**
   - Track rating trends over time
   - Identify user sentiment patterns
   - Monitor competitor performance

2. **Quality Assurance**
   - Early warning for rating drops
   - Customer feedback analysis
   - Market reputation management

3. **Business Intelligence**
   - Review sentiment analysis
   - Performance benchmarking
   - Strategic decision support

## Technical Notes

- **Polling Interval:** 45-second status checks
- **Rating Threshold:** Alerts triggered for ratings &lt; 4
- **Data Format:** JSON with structured field mapping
- **Error Handling:** Includes error tracking in dataset requests
- **Result Limiting:** Maximum 5 multiple results per request

For any questions or support, please contact:
info@incrementors.com
or fill out this form https://www.incrementors.com/contact-us/

## 📊 Basic Information

- **Workflow ID:** 5071
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 322
- **Downloads:** 32
- **Created:** 2025/6/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5071)

## 👤 Author

- **Name:** Incrementors
- **Username:** @incrementors

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **stickyNote** (×9)
- **formTrigger** 
- **httpRequest** (×3)
- **wait** 
- **if** (×2)
- **googleSheets** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
