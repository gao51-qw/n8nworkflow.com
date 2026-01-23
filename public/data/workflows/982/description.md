This workflow ensures gender inclusive language in Mattermost channels. If someone addresses the group with “guys” or “gals”, a bot promptly replies with: "May I suggest “folks” or “y'all”? We use gender inclusive language here. 😄".
![workflow-screenshot](fileId:441)
* **Webhook node**: triggers the workflow when a new message is posted in Mattermost.
* **IF node**: verifies if the message includes the words "guys" or "gals". If false, it does not take any action. If true, it triggers the Mattermost node.
* **Mattermost node**: posts the language warning message in the Mattermost channel.
