**Description**  
This workflow, delivers real-time cryptocurrency market updates (default: Bitcoin) by fetching data from the CoinGecko API. It formats the information into a visually engaging message and shares it on X (formerly Twitter) and via email. The workflow is set to trigger hourly but is fully customizable to suit different schedules or cryptocurrencies.

### Key Features  
- **Real-Time Market Data Retrieval:** Fetches up-to-date cryptocurrency market data using CoinGecko API.  
- **AI-Driven Message Formatting:** Converts raw data into a structured, engaging message.  
- **Social Media Integration:** Posts updates to X with OAuth2 authentication.  
- **Email Notifications:** Sends updates via email to specified recipients.  
- **Flexible Customization:** Adaptable for tracking multiple cryptocurrencies or adding new notification channels.  

### Workflow Steps  
1. **Trigger Workflow:** Default is hourly, but the interval can be customized.  
2. **Fetch Cryptocurrency Data:** Retrieves market data using the CoinGecko API.  
3. **Format the Message:** Converts the data into a readable and visually appealing format.  
4. **Post Update on X:** Shares the message on X (formerly Twitter).  
5. **Send Email Notifications:** Sends the update to a specified email address.  
6. **Optional Notifications:** Expand to additional channels like Slack or Telegram.