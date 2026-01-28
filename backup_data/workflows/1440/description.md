This workflow handles the incoming call from Twitter and sends the required response for verification.

On registering the webhook with the Twitter Account Activity API, Twitter expects a signature in response. Twitter also randomly ping the webhook to ensure it is active and secure.

![workflow-screenshot](fileId:605)

**Webhook node:** Use the displayed URL to register with the Account Activity API.

**Crypto node:** In the ***Secret*** field, enter your API Key Secret from Twitter.

**Set node:** This node generates the response expected by the Twitter API.


Learn more about connecting n8n with Twitter in the [Getting Started with Twitter Webhook](https://harshil.dev/writings/getting-started-with-twitter-webhook) article.