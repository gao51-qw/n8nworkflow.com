## Google Dorks with SerpAPI

How it Works:
- Accepts a domain from a web form
- Generates a list of Google dorks targeting that domain
- Scrapes Google search results for each dork using SerpAPI
- Filters out junk links (Google internal, non-http)
- Formats valid results as a markdown report
- Converts the report to PDF using PDF4me
- Emails the report to your inbox with Gmail

----

# How To Use:
**Step 1.** Double Click the SerpAPI node and configure the API key
**Step 2.** Double Click each PDF4me node and configure the API key
**Step 3.** (Optional) Double Click and configure your OAuth credentials and gmail settings on the Gmail node.
**Step 4.** Click 'Execute Workflow' and wait for your report to be generated.