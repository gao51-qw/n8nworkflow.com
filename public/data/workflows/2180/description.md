The [News Site](https://www.colt.net/resources/type/news/) from Colt, a telecom company, does not offer an RSS feed, therefore web scraping is the choice to extract and process the news.

The goal is to get only the newest posts, a summary of each post and their respective (technical) keywords.

Note that the news site offers the links to each news post, but not the individual news. We collect first the links and dates of each post before extracting the newest ones.

The result is sent to a SQL database, in this case a NocoDB database.

This process happens each week thru a cron job.

**Requirements**:
- Basic understanding of CSS selectors and how to get them via browser (usually: right click &rarr; inspect)
- ChatGPT API account - normal account is not sufficient
- A NocoDB database - of course you may choose any type of output target

**Assumptions**:
- CSS selectors work on the news site
- The post has a date with own CSS selector - meaning date is not part of the news content

**"Warnings"**
- Not every site likes to be scraped, especially not in high frequency
- Each website is structured in different ways, the workflow may then need several adaptations.