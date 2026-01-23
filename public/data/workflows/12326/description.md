**How it Works?**

1. User Answers Questions Prompted by the Telegram Bot
2. Data Tables are updated to with relevant step of the process and a chat id
3. Upon Approval, the Title, Description and Slug are created and then Product is created on WooCommerce via API request.
4. Data Tables are reset and user is prompted to create another product.

**Setup Steps:** (25 Minutes)
1. Create a Telegram bot via @botfather on telegram
2. Setup 2 Data Tables with names WooCommerce Product Manager & User_Images
3. Add your  Preffered LLM Credentials and set credentials in telegram node 
4. In TelegramGroupMedia node and EditFields 1 node, add your bot token to replace {{your bot token}}
5. Voila! Your Workflow is now configured.