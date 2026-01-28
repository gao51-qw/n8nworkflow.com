*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

![Pull references from Google's AI Overview with DataForSEO.png](fileId:2132)

## Who’s it for

SEOs and digital marketers who want to track the sources Google cites in its AI Overview SERP feature for specific keywords, monitor competitor visibility, or their website’s presence in AI-generated snippets.

***Note: this template uses DataForSEO community node and works for self-hosted n8n instances only.***

## What it does

This workflow automatically collects all source references from Google’s AI Overview results using the DataForSEO SERP API. It extracts the source title, URL, and domain, and logs that data in Google Sheets for easy filtering and analysis. You can use this template to monitor how often your site appears in AI-generated summaries or to discover high-authority domains mentioned for your target keywords.

## How it works

Triggers on your chosen schedule (default: every 7 days).
Calls the DataForSEO SERP API for your keyword.
Parses AI Overview results to extract source citations.
Saves the structured data in a Google Sheet.

## Requirements

* Self-hosted n8n instance 
* DataForSEO account
* A Google Sheet that contains the Source, Domain, URL, Title, and Text columns (as in the example: [https://docs.google.com/spreadsheets/d/1XCjkjyVxrtpTUQenHeR3B07xfEZ489mhuVidjhGOO7I/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1XCjkjyVxrtpTUQenHeR3B07xfEZ489mhuVidjhGOO7I/edit?usp=sharing)).

## Customization

You can change the schedule or swap the Google Sheet for BI dashboards or reporting tools.