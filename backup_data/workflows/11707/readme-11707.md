# Generate B2B leads by industry & location with Google Places API and Google Sheets

> **How it works**
1. A form trigger accepts an Industry + Location query (e.g. Accountants London).
2. Text Search Page 1 calls Google Places Text Search to return results and a next_page_token.
3. Conditional checks + 5s wait nodes fetch page 2 and page 3 when a next page exists.
4. All pages are merged, split into individual place results, and each place_id is passed to Place Details.
5. Place Details returns name, formatted_phone_number, website, formatted_address.
6. Results are formatted and appended to a Google Sheet.

**Setup steps**
- Enable Google Cloud project billing and Places API (Text Search + Details).
- Create an API key and add it to the three Text Search and Place Details HTTP request nodes (&lt;YOUR KEY&gt;).
- Add Google Sheets OAuth credentials to the Google Sheets node.
- Create a Google Sheet with columns: Company Name, Phone Number, Website, Address
- Update the Google Sheets node documentId and sheetName to your spreadsheet.
- Import/paste this workflow into n8n and test with a small query.

**Customization**
- Edit Place Details fields to retrieve more/less info (address_components, opening_hours, etc.).
- Adjust the number of pages fetched (workflow currently supports up to 3 pages).
- Alter output mapping in the code node to add/remove columns or change column order.
- Add further nodes after the sheet (e.g., email scraper/ sender, CRM integration, enrichment API)

**Use cases**
- B2B lead generation for targeted industries and locations.
- Building outreach lists for sales teams and agencies.
- Enriching CRM with phone, website, and address data from Google Places.
- Rapid market mapping for local competitors, vendors, or partners.

**Troubleshooting tips**
- No results / invalid API key: verify API key is correct, not restricted incorrectly, and Places API is enabled.
- next_page_token not working: the token can take a couple of seconds to activate. Keep the 5s wait nodes; if still failing, increase to ~10s+
- Quota / billing errors: confirm billing is enabled on the Google Cloud project and check your Places API quota.
- Missing phone/website: not all places provide all fields; fallback handling is already included (nulls).
- Duplicates in Sheets: run tests on small queries and inspect the Merge/Split logic; add a dedupe step before appending if needed.
- Place Details rate limits: if you plan high volume, throttle requests or add longer waits to avoid quota/rate-limit errors.
- Permissions / OAuth: ensure the Google Sheets OAuth user has edit access to the target spreadsheet.

## 📊 Basic Information

- **Workflow ID:** 11707
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 307
- **Downloads:** 30
- **Created:** 2025/12/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11707)

## 👤 Author

- **Name:** Ayis Saliaris Fasseas
- **Username:** @ayissf

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **httpRequest** (×4)
- **wait** (×2)
- **if** (×2)
- **merge** 
- **stickyNote** (×6)
- **formTrigger** 
- **splitOut** 
- **code** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
