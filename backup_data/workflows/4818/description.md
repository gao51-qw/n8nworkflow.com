🔧 How it works:
• The workflow triggers when a new order is created in WooCommerce.
• It extracts order details including ID, status, total, and products list.
• Sends a formatted message via Telegram to the store admin.
• Includes a clickable button that links directly to the order view page.

⚙️ Set up steps:
• Estimated setup time: 5–10 minutes.
• Requires active WooCommerce REST API credentials.
• Requires a Telegram bot and your admin chat ID.
• Replace the Telegram `chatId` and WooCommerce credentials in the workflow.
• Make sure your WooCommerce site allows external API access.
