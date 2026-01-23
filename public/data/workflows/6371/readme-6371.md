# Job scraping using LinkedIn, Indeed, Bright Data, Google Sheets

> # LinkedIn & Indeed Job Scraper with Bright Data & Google Sheets Export

## Overview

This n8n workflow automates the process of scraping job listings from both LinkedIn and Indeed platforms simultaneously, combining results, and exporting data to Google Sheets for comprehensive job market analysis. It integrates with Bright Data for professional web scraping, Google Sheets for data storage, and provides intelligent status monitoring with retry mechanisms.

## Workflow Components

### 1. 📝 **Trigger Input Form**
- **Type**: Form Trigger
- **Purpose**: Initiates the workflow with user-defined job search criteria
- **Input Fields**:
  - City (required)
  - Job Title (required)
  - Country (required)
  - Job Type (optional dropdown: Full-Time, Part-Time, Remote, WFH, Contract, Internship, Freelance)
- **Function**: Captures user requirements to start the dual-platform job scraping process

### 2. 🧠 **Format Input for APIs**
- **Type**: Code Node (JavaScript)
- **Purpose**: Prepares and formats user input for both LinkedIn and Indeed APIs
- **Processing**:
  - Standardizes location and job title formats
  - Creates API-specific input structures
  - Generates custom output field configurations
- **Function**: Ensures compatibility with both Bright Data datasets

### 3. 🚀 **Start Indeed Scraping**
- **Type**: HTTP Request (POST)
- **Purpose**: Initiates Indeed job scraping via Bright Data
- **Endpoint**: `https://api.brightdata.com/datasets/v3/trigger`
- **Parameters**:
  - Dataset ID: `gd_lpfll7v5hcqtkxl6l`
  - Include errors: true
  - Type: discover_new
  - Discover by: keyword
  - Limit per input: 2
- **Custom Output Fields**:
  - `jobid`, `company_name`, `job_title`, `description_text`
  - `location`, `salary_formatted`, `company_rating`
  - `apply_link`, `url`, `date_posted`, `benefits`

### 4. 🚀 **Start LinkedIn Scraping**
- **Type**: HTTP Request (POST)
- **Purpose**: Initiates LinkedIn job scraping via Bright Data (parallel execution)
- **Endpoint**: `https://api.brightdata.com/datasets/v3/trigger`
- **Parameters**:
  - Dataset ID: `gd_l4dx9j9sscpvs7no2`
  - Include errors: true
  - Type: discover_new
  - Discover by: keyword
  - Limit per input: 2
- **Custom Output Fields**:
  - `job_posting_id`, `job_title`, `company_name`, `job_location`
  - `job_summary`, `job_employment_type`, `job_base_pay_range`
  - `apply_link`, `url`, `job_posted_date`, `company_logo`

### 5. 🔄 **Check Indeed Status**
- **Type**: HTTP Request (GET)
- **Purpose**: Monitors Indeed scraping job progress
- **Endpoint**: `https://api.brightdata.com/datasets/v3/progress/{snapshot_id}`
- **Function**: Checks if Indeed dataset scraping is complete

### 6. 🔄 **Check LinkedIn Status**
- **Type**: HTTP Request (GET)
- **Purpose**: Monitors LinkedIn scraping job progress
- **Endpoint**: `https://api.brightdata.com/datasets/v3/progress/{snapshot_id}`
- **Function**: Checks if LinkedIn dataset scraping is complete

### 7. ⏱️ **Wait Nodes (60 seconds each)**
- **Type**: Wait Node
- **Purpose**: Implements intelligent polling mechanism
- **Duration**: 1 minute
- **Function**: Pauses workflow before rechecking scraping status to prevent API overload

### 8. ✅ **Verify Indeed Completion**
- **Type**: IF Condition
- **Purpose**: Evaluates Indeed scraping completion status
- **Condition**: `status === "ready"`
- **Logic**:
  - True: Proceeds to data validation
  - False: Loops back to status check with wait

### 9. ✅ **Verify LinkedIn Completion**
- **Type**: IF Condition
- **Purpose**: Evaluates LinkedIn scraping completion status
- **Condition**: `status === "ready"`
- **Logic**:
  - True: Proceeds to data validation
  - False: Loops back to status check with wait

### 10. 📊 **Validate Indeed Data**
- **Type**: IF Condition
- **Purpose**: Ensures Indeed returned job records
- **Condition**: `records !== 0`
- **Logic**:
  - True: Proceeds to fetch Indeed data
  - False: Skips Indeed data retrieval

### 11. 📊 **Validate LinkedIn Data**
- **Type**: IF Condition
- **Purpose**: Ensures LinkedIn returned job records
- **Condition**: `records !== 0`
- **Logic**:
  - True: Proceeds to fetch LinkedIn data
  - False: Skips LinkedIn data retrieval

### 12. 📥 **Fetch Indeed Data**
- **Type**: HTTP Request (GET)
- **Purpose**: Retrieves final Indeed job listings
- **Endpoint**: `https://api.brightdata.com/datasets/v3/snapshot/{snapshot_id}`
- **Format**: JSON
- **Function**: Downloads completed Indeed job data

### 13. 📥 **Fetch LinkedIn Data**
- **Type**: HTTP Request (GET)
- **Purpose**: Retrieves final LinkedIn job listings
- **Endpoint**: `https://api.brightdata.com/datasets/v3/snapshot/{snapshot_id}`
- **Format**: JSON
- **Function**: Downloads completed LinkedIn job data

### 14. 🔗 **Merge Results**
- **Type**: Merge Node
- **Purpose**: Combines Indeed and LinkedIn job results
- **Mode**: Merge all inputs
- **Function**: Creates unified dataset from both platforms

### 15. 📊 **Save to Google Sheet**
- **Type**: Google Sheets Node
- **Purpose**: Exports combined job data for analysis
- **Operation**: Append rows
- **Target**: "Compare" sheet in specified Google Sheet document
- **Data Mapping**:
  - Job Title, Company Name, Location
  - Job Detail (description), Apply Link
  - Salary, Job Type, Discovery Input

## Workflow Flow

```
Input Form → Format APIs → [Indeed Trigger] + [LinkedIn Trigger]
                              ↓                    ↓
                        Check Status         Check Status
                              ↓                    ↓
                         Wait 60s            Wait 60s
                              ↓                    ↓
                        Verify Ready        Verify Ready
                              ↓                    ↓
                       Validate Data       Validate Data
                              ↓                    ↓
                        Fetch Indeed       Fetch LinkedIn
                              ↓                    ↓
                              └─── Merge Results ───┘
                                       ↓
                               Save to Google Sheet
```

## Configuration Requirements

### API Keys & Credentials
- **Bright Data API Key**: Required for both LinkedIn and Indeed scraping
- **Google Sheets OAuth2**: For data storage and export access
- **n8n Form Webhook**: For user input collection

### Setup Parameters
- **Google Sheet ID**: Target spreadsheet identifier
- **Sheet Name**: "Compare" tab for job data export
- **Form Webhook ID**: User input form identifier
- **Dataset IDs**:
  - Indeed: `gd_lpfll7v5hcqtkxl6l`
  - LinkedIn: `gd_l4dx9j9sscpvs7no2`

## Key Features

### **Dual Platform Scraping**
- Simultaneous LinkedIn and Indeed job searches
- Parallel processing for faster results
- Comprehensive job market coverage
- Platform-specific field extraction

### **Intelligent Status Monitoring**
- Real-time scraping progress tracking
- Automatic retry mechanisms with 60-second intervals
- Data validation before processing
- Error handling and timeout management

### **Smart Data Processing**
- Unified data format from both platforms
- Intelligent field mapping and standardization
- Duplicate detection and removal
- Rich metadata extraction

### **Google Sheets Integration**
- Automatic data export and storage
- Organized comparison format
- Historical job search tracking
- Easy sharing and collaboration

### **Form-Based Interface**
- User-friendly job search form
- Flexible job type filtering
- Multi-country support
- Real-time workflow triggering

## Use Cases

### **Personal Job Search**
- Comprehensive multi-platform job hunting
- Automated daily job searches
- Organized opportunity comparison
- Application tracking and management

### **Recruitment Services**
- Client job search automation
- Market availability assessment
- Competitive salary analysis
- Bulk candidate sourcing

### **Market Research**
- Job market trend analysis
- Salary benchmarking studies
- Skills demand assessment
- Geographic opportunity mapping

### **HR Analytics**
- Competitor hiring intelligence
- Role requirement analysis
- Compensation benchmarking
- Talent market insights

## Technical Notes

- **Polling Interval**: 60-second status checks for both platforms
- **Result Limiting**: Maximum 2 jobs per input per platform
- **Data Format**: JSON with structured field mapping
- **Error Handling**: Comprehensive error tracking in all API requests
- **Retry Logic**: Automatic status rechecking until completion
- **Country Support**: Adaptable domain selection (indeed.com, fr.indeed.com)
- **Form Validation**: Required fields with optional job type filtering
- **Merge Strategy**: Combines all results from both platforms
- **Export Format**: Standardized Google Sheets columns for easy analysis

## Sample Data Output

| Field | Description | Example |
|-------|-------------|---------|
| Job Title | Position title | "Senior Software Engineer" |
| Company Name | Hiring organization | "Tech Solutions Inc." |
| Location | Job location | "San Francisco, CA" |
| Job Detail | Full description | "We are seeking a senior developer..." |
| Apply Link | Direct application URL | "https://company.com/careers/123" |
| Salary | Compensation info | "$120,000 - $150,000" |
| Job Type | Employment details | "Full-time, Remote" |

## Setup Instructions

1. **Import Workflow**: Copy JSON configuration into n8n
2. **Configure Bright Data**: Add API credentials for both datasets
3. **Setup Google Sheets**: Create target spreadsheet and configure OAuth
4. **Update References**: Replace placeholder IDs with your actual values
5. **Test Workflow**: Submit test form and verify data export
6. **Activate**: Enable workflow and share form URL with users

---

---

---

For any questions or support, please contact:  
[info@incrementors.com](mailto:info@incrementors.com)  
or fill out this form: [https://www.incrementors.com/contact-us/](https://www.incrementors.com/contact-us/)



## 📊 Basic Information

- **Workflow ID:** 6371
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 4214
- **Downloads:** 421
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6371)

## 👤 Author

- **Name:** Incrementors
- **Username:** @incrementors

## 🏷️ Categories

- HR

## 🔗 Nodes Used

- **formTrigger** 
- **stickyNote** (×17)
- **code** 
- **httpRequest** (×6)
- **if** (×4)
- **wait** (×2)
- **merge** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
