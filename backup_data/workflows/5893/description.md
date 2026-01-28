Boost Sales with Automated Magento 2 Product and Coupon Notifications
----------------------------------------------------

This n8n workflow automatically posts new Magento products & coupons to Telegram while preventing duplicates. Key benefits:

✅ **Increase conversions** with time-sensitive alerts (creates urgency)

✅ **Reduce missed opportunities** with 24/7 monitoring

✅ **Improve customer engagement** through rich media posts

✅ **Save hours per week** by automating manual posting

## Why This Works:

1.  **Triggers impulse buys** with real-time notifications
    
2.  **Eliminates human error** in duplicate posting
    
3.  **Scales effortlessly** as your catalog grows
    
4.  **Provides analytics** through database tracking

    

## **Perfect for e-commerce stores wanting to:**

*   Announce new arrivals instantly
    
*   Promote limited-time offers effectively
    
*   Maintain consistent social presence
    
*   Track performance through MySQL

## This workflow automatically:

✅ Detects new products AND coupons in Magento 

✅ Prevents duplicate postings with MySQL tracking

✅ Posts rich formatted alerts to Telegram

✅ Runs on a customizable schedule

✨ Key Features
--------------

**For Products**:

*   Product name, price, and image
    
*   Direct store link
    
*   Media gallery support
    

**For Coupons**:

*   Coupon code and status
    
*   Usage limits (times used/available)
    
*   Active/inactive status indicator
    

**Core System**:

🔒 MySQL duplicate prevention⏰ 1-hour schedule (customizable)📱 Telegram notifications with Markdown

🛠️ Configuration Guide
-----------------------

### Database Setup

```
CREATE TABLE IF NOT EXISTS posted_items (item_id INT PRIMARY KEY, item_type ENUM('product', 'coupon') NOT NULL, item_value VARCHAR(255), posted BOOLEAN DEFAULT FALSE, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);
```

### Required Credentials

1.  **Magento API** (HTTP Header Auth)
    
2.  **MySQL Database**
    
3.  **Telegram Bot**
    

### Sticky Notes

`❗ IMPORTANT SETUP NOTES ❗  

1. For products: Ensure 'url_key' exists in custom_attributes  

2. For coupons: Magento REST API must expose coupon rules  

3. MySQL user needs INSERT/SELECT privileges  

4. Telegram bot must be added to your channel first  

🔄 SCHEDULING:  - Default: Checks every 1 hours at :00 - Adjust in Schedule Trigger node   `

⚙️ Technical Details
--------------------

**Workflow Logic**:

1.  Checks for new products/coupons via Magento API
    
2.  Verifies against MySQL database
    
3.  Only posts if record doesn't exist
    
4.  Updates database after successful post
    

**Error Handling**:

*   Automatic skip if product/coupon exists
    
*   Empty result handling
    
*   Connection timeout protection
    

🌟 Why This Template?
---------------------

*   **Complete Solution**: Handles both products AND coupons
    
*   **Battle-Tested**: Prevents all duplicates reliably
    
*   **Ready-to-Use**: Just add your credentials
    
*   **Fully Customizable**: Easy to modify for different needs
    

Perfect for e-commerce stores using Magento 2 who want automated, duplicate-free social notifications!