This workflow allows you to collect tweets, store them in MongoDB, analyse their sentiment, insert them into a Postgres database, and post positive tweets in a Slack channel.

![workflow-screenshot](fileId:481)

**Cron node:** Schedule the workflow to run every day

**Twitter node**: Collect tweets

**MongoDB node:** Insert the collected tweets in MongoDB

**Google Cloud Natural Language node:** Analyse the sentiment of the collected tweets

**Set node:** Extract the sentiment score and magnitude

**Postgres node:** Insert the tweets and their sentiment score and magnitude in a Posgres database

**IF node:** Filter tweets with positive and negative sentiment scores

**Slack node:** Post tweets with a positive sentiment score in a Slack channel

**NoOp node:** Ignore tweets with a negative sentiment score

