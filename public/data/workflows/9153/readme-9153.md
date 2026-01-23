# Collect LinkedIn profiles with SerpAPI Google Search and Sheets

> # [LI] – Search Profiles

&gt; **⚠️ Self-hosted disclaimer:**  
&gt; This workflow uses the **SerpAPI community node**, which is available only on **self-hosted n8n instances**.  
&gt; For **n8n Cloud**, you may need to use an HTTP Request node with the SerpAPI REST API instead.

---
![Screenshot From 20251020 130253.png](fileId:3020)


---

## Who’s it for
Recruiters, talent sourcers, SDRs, and anyone who wants to **automatically gather public LinkedIn profiles** from Google search results based on keywords — across **multiple pages** — and log them to a Google Sheet for further analysis.

---

## What it does / How it works
This workflow extends the standard LinkedIn profile search to include **pagination**, allowing you to fetch results from **multiple Google result pages** in one go.

Here’s the step-by-step process:

1. **Form Trigger – “LinkedIn Search”**
   - Collects:
     - **Keywords (comma separated)** – e.g., `python, fintech, warsaw`
     - **Pages to fetch** – number of Google pages to scrape (each page ≈ 10 results)
   - Triggers the workflow when submitted.

2. **Format Keywords (Set)**
   - Converts the keywords into a Google-ready query string:
     ```
     ("python") ("fintech") ("warsaw")
     ```
   - These parentheses improve relevance in Google searches.

3. **Build Page List (Code)**
   - Creates a **list of pages** to iterate through.
   - For example, if “Pages to fetch” = 3, it generates 3 search batches with proper `start` offsets (`0`, `10`, `20`).
   - Keeps track of:
     - Grouped keywords (`keywordsGrouped`)
     - Raw keywords
     - Submission timestamp

4. **Loop Over Items (Split In Batches)**
   - Loops through the page list one batch at a time.
   - Sends each batch to **SerpAPI Search** and continues until all pages are processed.

5. **SerpAPI Search**
   - Queries Google with:
     ```
     site:pl.linkedin.com/in/ ("keyword1") ("keyword2") ("keyword3")
     ```
   - Fixed to the **Warsaw, Masovian Voivodeship, Poland** location.
   - The `start` parameter controls pagination.

6. **Check how many results are returned (Switch)**
   - If **no results** → Triggers **No profiles found**.
   - If **results found** → Passes data forward.

7. **Split Out**
   - Extracts each LinkedIn result from the `organic_results` array.

8. **Get Full Name to property of object (Code)**
   - Extracts a clean full name from the search result title (text before “–” or “|”).

9. **Append profile in sheet (Google Sheets)**
   - Saves the following fields into your connected sheet:
     | Column | Description |
     |---------|-------------|
     | **Date** | Submission timestamp |
     | **Profile** | Public LinkedIn profile URL |
     | **Full name** | Extracted candidate name |
     | **Keywords** | Original keywords from the form |

10. **Loop Over Items (continue)**
    - After writing each batch, it loops to the next Google page until all pages are complete.

11. **Form Response (final step)**
    - Sends a confirmation back to the user after all pages are processed:
      ```
      Check linked file
      ```

---

## 🧾 Google Sheets Setup

Before using the workflow, prepare your Google Sheet with these columns in **row 1**:

| Column Name | Description |
|--------------|-------------|
| **Date** | Automatically filled with the form submission time |
| **Profile** | LinkedIn profile link |
| **Full name** | Extracted name from search results |
| **Keywords** | Original search input |

&gt; You can expand the sheet to include optional fields like **Snippet**, **Job Title**, or **Notes** if you modify the mapping in the `Append profile in sheet` node.

---

## Requirements
- **SerpAPI account** – with API key stored securely in **n8n Credentials**.  
- **Google Sheets OAuth2 credentials** – connected to your target sheet with edit access.  
- **n8n instance (Cloud or self-hosted)**  
  &gt; Note: SerpAPI node is part of the **Community package** and may require **self-hosted n8n**.

---

## How to set up
1. Import the `[LI] - Search profiles` workflow into n8n.  
2. Connect your credentials:
   - **SerpAPI** – use your API key.
   - **Google Sheets OAuth2** – ensure you have write permissions.
3. Update the **Google Sheets node** to point to your own spreadsheet and worksheet.
4. (Optional) Edit the `location` field in **SerpAPI Search** for different regions.
5. Activate the workflow and open the public form (via webhook URL).
6. Enter your keywords and specify the number of pages to fetch.

---

## How to customize the workflow
- **Change search region:** Modify the `location` in the SerpAPI node or change the domain to `site:linkedin.com/in/` for global searches.  
- **Add pagination beyond 3–4 pages:** Increase “Pages to fetch” — but note that excessive pages may trigger Google rate limits.  
- **Avoid duplicates:** Add a **Google Sheets → Read** + **IF** node before appending new URLs.  
- **Add notifications:** Add **Slack**, **Discord**, or **Email nodes** after Google Sheets to alert your team when new data arrives.  
- **Capture more data:** Map additional fields like `title`, `snippet`, or `position` into your Sheet.

---

## Security notes
- Never store API keys directly in nodes — always use **n8n Credentials**.  
- Keep your Google Sheet **private** and limit edit access.  
- Remove identifying data before sharing your workflow publicly.

---

## 💡 Improvement suggestions

| Area | Recommendation | Benefit |
|-------|----------------|----------|
| **Dynamic location** | Add a “Location” field to the form and feed it to SerpAPI dynamically. | Broader and location-specific searches |
| **Rate limiting** | Add a short **Wait** node (e.g., 1–2s) between page fetches. | Prevents API throttling |
| **De-duplication** | Check for existing URLs before appending. | Prevents duplicates |
| **Logging** | Add a second sheet or log file with timestamps per run. | Easier debugging and tracking |
| **Data enrichment** | Add a LinkedIn or People Data API enrichment step. | Collect richer candidate data |

---

✅ **Summary:**  
This workflow automates the process of searching public LinkedIn profiles from Google across multiple pages. It formats user-entered keywords into advanced Google queries, iterates through paginated SerpAPI results, extracts profile data, and stores it neatly in a Google Sheet — all through a single, user-friendly form.

## 📊 Basic Information

- **Workflow ID:** 9153
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 163
- **Downloads:** 16
- **Created:** 2025/10/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9153)

## 👤 Author

- **Name:** Piotr Sikora
- **Username:** @argone

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **formTrigger** 
- **set** 
- **code** (×2)
- **n8n-nodes-serpapi.serpApi** 
- **switch** 
- **form** (×2)
- **splitOut** 
- **googleSheets** 
- **splitInBatches** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
