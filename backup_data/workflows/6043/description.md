## What it does
This workflow scrapes the top 10 pages on SERP and conducts an in-depth analysis of the keyword intent for each ranking keyword, saving the information to a Google Sheet for further analysis.


## How does this workflow work?

- We add our keywords and country code to a Google sheet that we need to monitor and research on
- Run the system
- Scrape the top 10 pages
- Analyze the intents of the top 10 and update to a Google sheet

## Technical Setup
1. Make a copy of this [G sheet](https://docs.google.com/spreadsheets/d/1QU9rwawCZLiYW8nlYYRMj-9OvAUNZoe2gP49KbozQqw/edit?usp=sharing)
2. Add your desired keywords to the Google sheet
3. Map keyword and country code 
4. Update the Zone name to match your zone on Bright Data
5. Run the scraper

Upon successful scraping, we run an intent classifier to determine the intents for each ranking page and update the G sheet.

## Setting up the Serp Scraper in Bright Data

1. On Bright Data, go to the [Proxies & Scraping](https://brightdata.com/cp/zones) tab
2. Under SERP API, create a new zone
3. Give it a suitable name and description. The default is `serp_api`
3. Add this to your account
4. Add your credentials as a header credential