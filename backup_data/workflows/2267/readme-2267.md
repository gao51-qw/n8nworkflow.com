# Extract Title tag and Meta description from url for SEO analysis with Airtable

> Extract Title tag and meta description from url for SEO analysis.

## How it works
The workflows takes records from Airtable, get the url in the records and extract from the related webpage the title tag (&lt;title&gt;) and meta description (&lt;meta name="description" content="Some content"&gt;). 

If title tag and/or meta description tag isn't available on the webpage, the result will be empty.

## Setup
1. Set a Base in Airtable with a table with the following structure:
  `url` (field type url), `title tag` (field type text string), `meta desc` (field type text field)

Minimum suggested table structure is:

**url** (https://example.com), **title** (Title example), *meta desc** (This is the meta description of the example page)

2. Connect Airtable to both Airtable nodes in the template and, with the following formula, get all the records that miss `title tag` and `meta desc`.
Formula: 
```
AND(url != "", {title tag} = "", {meta desc} = "")
```

3. Insert the url to be analyzed in the table in the field `url` and let the workflow do the rest. 


## Extra

* You can also calculate the length for title tag and meta desc using formula field inside Airtable. This is the formula:
  `LEN({title tag})` or `LEN({meta desc})`
* You can automate the process calling a Webhook from Airtable. For this, you need an Airtable paid plan.


## 📊 Basic Information

- **Workflow ID:** 2267
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 3809
- **Downloads:** 380
- **Created:** 2024/5/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2267)

## 👤 Author

- **Name:** Giacomo Lanzi
- **Username:** @giacomolanzi

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **manualTrigger** 
- **airtable** (×2)
- **httpRequest** 
- **html** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
