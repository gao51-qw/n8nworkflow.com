This workflow gives you the ability to reply to a long email with a voice note, rather than having to type everything out. 

ChatGPT will format your audio response and create an email draft for you.


### How it works
When a new email arrives in your inbox, the workflow checks if it needs a response, and it it does, it sends a message to you on Telegram via a VoiceEmailer bot.

When you reply to that message with an audio message, the second part of this workflow is triggered. It checks if the message is in the right format, transcribes the audio, and creates a draft response that shows up in the same email thread.

### Set up steps
- Add your credentials for Gmail and OpenAI
- Create an Telegram bot following the instructions [here](https://core.telegram.org/bots/tutorial).
- Connect your telegram credentials so the workflow will use your bot.
- Turn on the workflow, and message the bot from your telegram. Find the Chat ID from the Executions tab of your workflow, and enter it in as a variable.

![Screenshot 20250508 at 12.23.57.png](fileId:1296)
