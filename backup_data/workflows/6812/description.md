## Who’s it for
This template is ideal for YouTube video creators who spend a lot of time manually generating SEO assets like descriptions, tags, titles, keywords, and thumbnails. If you're looking to automate your YouTube SEO workflow, this is the perfect solution for you.

## How it works / What it does
Connect a Google Sheet to n8n and pull in the Hindi script (or any language).
Use OpenAI to generate SEO content:
- Video description
- Tags
- Keywords
- Titles
- Thumbnail titles etc.

Use the generated description as input to create a thumbnail image using an image generation API.
Store all outputs in the same Google Sheet in separate columns.
Optionally, use tools like VidIQ or TubeBuddy to test the SEO strength of generated titles, tags, and keywords.
```
💡 Note: This example uses Runway’s image generation API, but you can plug in any other image-generation service of your choice.

```
## Requirements
1. A Google Sheet with clearly named columns
2. Hindi, English, or other language scripts in the sheet
3. OpenAI API key
4. Runway API key (or any other image generation API)

## How to set up
- You can set up this workflow in 15 minutes by following the pre-defined steps.
- Replace the manual Google Sheet trigger with a scheduled trigger for daily or timed automation.
- You may also swap Google Sheets with any database or data source of your choice.
- No Google Sheets API required.
- Requires minimal JavaScript or Python knowledge for advanced customizations.