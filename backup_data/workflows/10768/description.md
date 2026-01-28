# Verified Gym Trial Pass with Photo ID

## Overview

Automate gym trial pass generation with email verification, photo ID integration, QR codes, and professional PDF passes. This workflow handles the complete member onboarding process - from signup to verified pass delivery - in under 10 seconds.

## What This Workflow Does

1. **Receives signup data** via webhook (name, email, photo URL, validity dates)
2. **Verifies email authenticity** using VerifiEmail API (blocks disposable emails)
3. **Generates unique Pass ID** in format `GYM-{timestamp}`
4. **Creates QR code** for quick check-in at gym entrance
5. **Builds branded pass design** with gradient styling, member photo, and validity dates
6. **Exports to PDF format** for mobile-friendly viewing
7. **Sends email** with PDF attachment and welcome message
8. **Logs all registrations** in Google Sheets for record-keeping
9. **Returns API response** with complete pass details

## Key Features

✅ **Email Verification** - Blocks fake and disposable email addresses  
✅ **Photo ID Integration** - Displays member photo on digital pass  
✅ **QR Code Generation** - Instant check-in scanning capability  
✅ **Professional Design** - Gradient purple design with modern styling  
✅ **PDF Export** - Mobile-friendly format that members can save  
✅ **Automated Emails** - Welcome message with pass attachment  
✅ **Spreadsheet Logging** - Automatic record-keeping in Google Sheets  
✅ **Error Handling** - Proper 400 responses for invalid signups  
✅ **Success Responses** - Detailed JSON with all pass information  

## Use Cases

- **Gyms & Fitness Centers** - Trial pass management for new members
- **Yoga Studios** - Week-long trial class passes
- **Sports Clubs** - Guest pass generation with photo verification
- **Wellness Centers** - Temporary access cards for trial periods
- **Co-working Spaces** - Day pass generation with member photos
- **Swimming Pools** - Verified trial memberships with photo IDs

## What You Need

### Required Credentials

1. **VerifiEmail API** - Email verification service
   - Get API key: https://verifi.email

2. **HTMLCSSToImage API** - PNG image generation
   - Get credentials: https://htmlcsstoimg.com

3. **HTMLCSSToPDF API** - PDF conversion
   - Get credentials: https://pdfmunk.com

4. **Gmail OAuth2** - Email delivery
   - Connect your Google account
   - Enable Gmail API in Google Cloud Console

5. **Google Sheets API** - Data logging
   - Connect your Google account
   - Same OAuth2 as Gmail

## Setup Instructions

### Step 1: Create Google Sheet

1. Create a new Google Sheet named "Gym Trial Passes 2025"
2. Add these column headers in Row 1:
   - Pass ID
   - Name
   - Email
   - Start Date
   - Valid Till
   - Issued At
   - Email Verified
   - Status

### Step 2: Configure Credentials

1. Add **VerifiEmail API** credentials
2. Add **HTMLCSSToImage** credentials
3. Add **HTMLCSSToPDF** credentials
4. Connect **Gmail OAuth2**
5. Connect **Google Sheets OAuth2**

### Step 3: Update Google Sheets Node

1. Open "Log to Google Sheets" node
2. Select your "Gym Trial Passes 2025" sheet
3. Confirm column mappings match your headers

### Step 4: Test the Workflow

1. Copy the webhook URL from the Webhook node
2. Open Postman and create a POST request
3. Use this test payload:

```json
{
  "name": "Rahul Sharma",
  "email": "your-email@gmail.com",
  "photo_url": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400",
  "start_date": "2025-11-15",
  "valid_till": "2025-11-22"
}
```

4. Send the request and check:
   - ✅ Email received with PDF pass
   - ✅ Google Sheet updated with new row
   - ✅ Success JSON response returned

### Step 5: Activate & Use

1. Click "Active" toggle to enable the workflow
2. Integrate webhook URL with your gym's website form
3. Members receive instant verified passes upon signup

## Expected Responses

### ✅ Success Response (200 OK)

```json
{
  "status": "success",
  "message": "Gym trial pass verified and sent successfully! 🎉",
  "data": {
    "pass_id": "GYM-1731398400123",
    "email": "member@example.com",
    "name": "Rahul Sharma",
    "valid_from": "November 15, 2025",
    "valid_till": "November 22, 2025",
    "email_verified": true,
    "recorded_in_sheets": true,
    "pass_sent_to_email": true
  },
  "timestamp": "2025-11-12T10:30:45.123Z"
}
```

### ❌ Error Response (400 Bad Request)

```json
{
  "status": "error",
  "message": "Invalid or disposable email address. Please use a valid email to register.",
  "email_verified": false,
  "email_provided": "test@tempmail.com"
}
```

## Customization Options

### Modify Pass Design

Edit the **Build HTML Pass** node to customize:
- Colors and gradient (currently purple gradient)
- Layout and spacing
- Fonts and typography
- Logo placement (add your gym logo)
- Additional branding elements

### Change Email Template

Edit the **Send Email with Pass** node to modify:
- Subject line
- Welcome message
- Instructions
- Branding elements
- Footer content

### Adjust Validity Period

Workflow accepts custom start_date and valid_till from webhook payload. You can also hardcode validity periods in the **Generate Pass Details** node.

### Add Additional Fields

Extend the workflow to capture:
- Phone number
- Emergency contact
- Medical conditions
- Membership preferences
- Referral source

## Performance

- **Average execution time**: 8-12 seconds
- **Handles**: 100+ passes per hour
- **PDF size**: ~150-250 KB
- **Email delivery**: Instant (Gmail API)
- **Success rate**: 99%+ with valid emails

## Security & Privacy

✅ Email verification prevents fake signups  
✅ Unique Pass IDs prevent duplication  
✅ All data logged in your private Google Sheet  
✅ No data stored in n8n (passes through only)  
✅ HTTPS webhook for secure data transmission  
✅ OAuth2 authentication for Google services  

---

## Tags

`gym` `fitness` `trial-pass` `email-verification` `qr-code` `pdf-generation` `member-onboarding` `automation` `verification` `photo-id`

---