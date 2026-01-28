This workflow will allow you to get the latest twitter mentions and send those mentions to Rocket.Chat. 

To ensure that we don't resend the same tweets as before, we use the Function Node and `getWorkflowStaticData()` to persist the ids of the tweets which have already been sent and filter those out. This leaves us with only the newest tweets. 