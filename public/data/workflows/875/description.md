This workflow executes every minute and fetches the recent tweets from Twitter with the search query `n8n_io`. The workflow is built on the concept of polling.

![workflow-screenshot](fileId:369)

**Cron node:** The Cron node triggers the workflow every minute. Based on your use-case you can configure the time. You can even use the Interval node to trigger the workflow at a certain time interval.

**Twitter node:** The Twitter node searches for the tweets that contain `n8n_io` and returns the most recent tweets. You can specify a different search query based on your use-case.

**Set node:** The Set node sets the data that we pass on to the next nodes in the workflow. You can set only the values that you require in your workflow.

**Function node:** All the magic happens in this node. The Twitter node returns all the recent tweets, including the ones which were returned earlier. The Function node, using the `getWorkflowStaticData()` method, only returns the tweets that are new, i.e., the tweets that were not returned in the previous workflow.

**Mattermost node:** The Mattermost node sends the tweets from the Function node to the Twitter notifications channel. If you don't use Mattermost and want to share this data on a different platform, replace this node with the appropriate node.