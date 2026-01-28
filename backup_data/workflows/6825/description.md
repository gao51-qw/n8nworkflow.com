## How it works
- Fetches a blog post HTML from your blog URL using an HTTP request node  
- Extracts readable content using Cheerio (code node)  
- Saves the raw blog text to Airtable  
- Translates the content to a language of your choice using Google Translate  
- Updates the same Airtable record with the translated version in a different column  

## Set up steps
- **Estimated setup time:** 15–20 minutes (includes connecting Airtable and Google Translate credentials)  
- You’ll need an Airtable base with `HTML` and `TRANSLATED` fields  
  - Or use this pre-made base: [Airtable Template](https://airtable.com/appP62U5MtSww1eeP/shrXwvTYdN7EXPvsp)  
- Simply add your blog post URL inside the **HTTP Request** node  
