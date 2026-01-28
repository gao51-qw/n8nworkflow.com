This workflow streamlines accounts receivable management by automatically monitoring invoices in Google Sheets and sending scheduled payment reminders. It is designed for businesses using Gmail and Google Sheets that need a scalable alternative to complex accounting software.

**How it works**
1. **Watches for invoices:** Triggers daily or via form submission to check for new entries.
2. **First Follow-up (Day 7):** Checks payment status one week after the invoice date. If unpaid, it sends a friendly email (and optional SMS).
3. **Second Follow-up (Day 9):** Re-checks status and sends a firmer reminder if funds are still not received.
4. **Final Notice (Day 12):** Sends a final urgent reminder before closing the cycle.
5. **Smart Stopping:** The workflow checks the 'Payment Status' column before every single message to ensure clients who have already paid are never disturbed.

**Setup time:** About 20 minutes.

**Prerequisites:** A Google Sheet with columns for Date, Email, and Payment Status.