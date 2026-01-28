## How this works:

This workflow contains a webhook that receives updates from Reply.io when one of your connections sends you a message via either Email or LinkedIn.
The workflow also includes utility nodes to create the necessary webhook subscriptions.

## Setup steps:

1. Configure the body of the utility nodes to create subscriptions for the correct URL — retrieve it from the "Webhook" node in the workflow (use the production URL)

2. Obtain your Reply.io API key. Documentation: https://apidocs.reply.io/

3. Create a Telegram bot

4. Set your Reply.io API key in the HTTP nodes using Header Authentication

5. Enter your Telegram credentials in the Telegram node

6. Activate the workflow