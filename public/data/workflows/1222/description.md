**Note:** This workflow uses the internal API which is not official. This workflow might break in the future.

The workflow executes every night at 23:59. You can configure a different time bin the Cron node.

Configure the GitHub nodes with your username, repo name, and the file path.

In the HTTP Request nodes (making a request to `localhost:5678`), create Basic Auth credentials with your n8n instance username and password.
