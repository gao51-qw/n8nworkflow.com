This is the first of 4 workflows for a Mattermost Standup Bot. This workflow will create a default configuration file.

You can set the default configuration in the Set node (Use Default Config) the values are:

**config.slashCmdToken** - The token Mattermost provides when you make a new Slash Command
**config.mattermostBaseUrl** - The base URL for your Mattermost instance
**config.botUserToken** - The User token for your Mattermost bot
**config.n8nWebhookUrl** - The URL for your "Action from MM" webhook in the "Standup Bot - Worker" workflow
**config.botUserId** - The UserID for your Mattermost Bot user

The config file is saved under `/home/node/.n8n/standup-bot-config.json`

This workflow only needs to be run once manually as part of the setup .