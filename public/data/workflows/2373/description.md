This n8n template is one of a 3-part series exploring use-cases for clustering vector embeddings:
* Survey Insights
* Customer Insights
* Community Insights

This template demonstrates the Customer Insights scenario where Trustpilot reviews can be quickly grouped by similarity and an AI agent can generate insights on those groupings.

With this workflow, marketers can save days and even weeks of work breaking down their own or competitor reviews and identify frequently mentioned positives and negatives.

Sample Output: https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6ipJnXWXgr5wlUJnhioNpeYrxaIpsRYZCwN3C-fFXumkbh9TAsA_JzE0kbv7DcGAVIP7az0L46_2P/pubhtml

### How it works
* Trustpilot reviews are scraped for a particular company using the HTTP request node.
* Reviews are then inserted into a Qdrant collection carefully tagged with the question and Trustpilot metadata.
* Reviews are fetched and put through a clustering algorithm using the Python Code node. The Qdrant points are returned in clustered groups.
* Each group is looped to fetch the payloads of the points and feed them to the AI agent to summarise and generate insights for.
* The resulting insights and raw responses are then saved to the Google Spreadsheet for further analysis by the marketer.

### Requirements
* Qdrant Vectorstore for storing embeddings.
* OpenAI account for embeddings and LLM.

### Customising the Template
* Adjust clustering parameters which make sense for your data.
* Consider expanding date range of reviews for insights over common intervals: 3mth, 6mth and YTD.