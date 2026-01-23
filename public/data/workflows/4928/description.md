This workflow contains community nodes that are only compatible with the self-hosted version of n8n.

# Your n8n Command Center in a Telegram Chat
Remotely manage and operate your n8n instance from Telegram with powerful admin commands.

This workflow connects your n8n instance with a Telegram Bot, giving you remote control over key admin operations through simple chat commands.

## 📱 You can

- List your workflows (**workflows**)

- Execute a workflow (**execute** [name])

- Activate/deactivate workflows (**activate** [name], **deactivate** [name])

- List past executions (**executions** [name])

- Permanently delete archived workflows (**cleanup**)

- Create backups of all your workflows and credentials (**backup**)

- Get help (**help**)

- Get notified when a workflow fails and when n8n instance starts.


This is especially useful for self-hosted instances when you want quick access to your automation environment from your mobile device.


## 📌 Notes

- **backup** only works on self-hosted setups.
- **execute**, **activate**, **deactivate**, and **executions** require the workflow name as argument.
- Workflows must contain the appropriate trigger nodes to be executed or activated.
- Commands and arguments are not case sensitive, there is no need to prefix with slash and spaces in the argument name are supported.

## ⚙️ Setup
- Create your credentials for Telegram API and n8n API.
- Edit all Telegram and n8n nodes. Select your credentials on them. On telegram nodes provide your chatid.
- Detailed step-by-step instructions are available in the workflow notes.
- In each workflow that fails and you want to receive a warning, configure this workflow as Error Workflow in its settings.