*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Bypass Cloudflare Turnstile for Web Scraping with n8n
### How It Works
This workflow automatically solves Cloudflare Turnstile CAPTCHAs for legitimate web scraping and automation tasks. It extracts the Turnstile sitekey from target webpages, submits solving requests to [2captcha](https://2captcha.com/?from=26496602), and returns bypass tokens that can be used in automated form submissions or data collection workflows.

### Set Up Steps
1. [Create a 2captcha Account](https://2captcha.com/?from=26496602): Sign up and get your API clientKey for CAPTCHA solving.
2. Import the Workflow into n8n: Add the workflow to your n8n instance.
3. Configure Authentication: Set up custom HTTP authentication with your clientKey in the credential settings.
4. Test the Workflow: Run with the demo URL to verify Turnstile detection and solving works correctly.
5. Replace the sample destination_url with your target website and start automating!

Setup should take just a few minutes with your API credentials ready.

### Getting Started
Once configured, the workflow can extract sitekeys from any Turnstile-protected webpage and return solved tokens for seamless automation. The [API documentation](https://2captcha.com/api-docs/cloudflare-turnstile?from=26496602) provides additional technical details for advanced use cases.

### Customizing the Workflow
The workflow targets a demo page for testing. To adapt it, simply update the destination_url variable with your target website. You can also modify the sitekey extraction logic for sites that implement Turnstile differently, or integrate this as a subworkflow into larger scraping operations.

### API Reference
Uses the TurnstileTaskProxyless task type with REST-based HTTPS communication. Each solve costs approximately $0.002 USD and typically completes within 30-90 seconds depending on queue load.