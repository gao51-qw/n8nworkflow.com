# Service scheduling & route planner for deliveries with Notion, Telegram and Maps

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

**🌸 Graceful Deliveries — Service Scheduling & Route Planner (Notion + Telegram)
What this template does**

Turn new bookings into a graceful, automated delivery plan—with geocoded addresses, a one-tap Google Maps route, owner alerts on Telegram, and sweet pre-arrival updates to your clients (email/SMS). Optional Notion/Sheets logging gives you a beautiful **“Delivery Day Planner”** you can filter by day or status.

**Perfect for:** florists, mobile dog groomers, massage therapists, cleaners, and any home-visit service that loves systems with a feminine touch. ✨


💗 **Warm: on-brand, human copy clients adore**

🧭 **Clear logistics: route links, timing, and notes—without chaos**

🧰 **No-code friendly: plug-and-play nodes, optional storage**

🔐 **Safe: no API keys in JSON; credentials live in n8n**

**Requirements**

n8n account (self-hosted or cloud)

Telegram Bot (for owner alerts)

Email (Gmail OAuth2 or SMTP) for client messages

(Optional) Notion or Google Sheets for storing bookings

Geocoding: OpenStreetMap Nominatim (no API key required)

Setup (5–10 minutes)

Import the JSON into n8n.

Open Webhook (Bookings) → copy its Test URL (then Production URL when ready).

In your booking tool (Calendly, Tally/Typeform/Airtable, Google Forms via Apps Script), POST bookings to the webhook with the fields below.

Add Telegram credential to “Telegram → Owner Alert.”

Add Email credential to “Email → Client (Pre-arrival).”

(Optional) Connect Notion or Google Sheets and add a “Create Page / Append Row” step.

**Sample Payload (copy for testing)**
{
  "name": "Sarah Bloom",
  "email": "sarah@example.com",
  "phone": "+1 555-1234",
  "address": "123 Maple St, Austin, TX 78701",
  "datetime": "2025-09-01T10:30:00-05:00",
  "service": "Mobile Grooming – Full Bath",
  "notes": "Max is shy; prefers lavender shampoo",
  "pet_name": "Max",
  "pet_photo_url": "https://example.com/max.jpg"
}


**Fallbacks supported:** client_name, full_name, appointment, date + time, booking_type, special_notes, street/line1 + city + state + zip.



**How it works (flow)**

Webhook (Bookings): receives the booking payload.

Parse Booking (Function): normalizes fields, derives ISO datetime if possible.

Geocode (HTTP → OSM Nominatim): looks up lat/lng (no API key).

Format Geocode (Function): extracts coordinates.

Merge Data: combines parsed booking + coordinates.

Build Summary & Links (Function):

Creates a Google Maps route link

Calculates pre-arrival time = 1 hour before datetime

Composes the owner alert text

Telegram → Owner Alert: sends “🚗 Route ready!” with map link.

Wait until 1h before: schedules pre-arrival message.

Email → Client (Pre-arrival): warm, on-brand message with ETA + route link.

Respond to Webhook: returns status + route to your booking tool.

**Optional:** Notion / Google Sheets schema

Notion DB: Delivery Day Planner

Date (Date), Client (Title), Email (Email), Phone (Phone), Address (Rich Text),
Service (Select), Notes (Rich Text), Lat (Number), Lng (Number), Status (Select: Planned / On the way / Done)

Google Sheets columns:
DateTime, Client, Email, Phone, Address, Service, Notes, Lat, Lng, Status

**Customize (ideas)**

✉️ Swap Email for Twilio SMS (or add both).

🗂️ Log every booking to Notion/Sheets for day and route views.

🧾 Generate a Driver PDF (Google Docs API → export PDF).

🧮 Multi-stop routes: add a Function node (nearest-neighbor) to sort stops.

🎨 Keep copy on-brand (Playfair Display + Lato; Blush #F7D6DC, Gold #F5E1A4, Taupe #D8CFC4, Slate #4A4A4A).

Testing

In Webhook node, click Test and POST the sample JSON.

Confirm Telegram alert arrives with the route link.

Set a near-future datetime to quickly test the Wait → Email path.

If datetime missing/invalid, the pre-arrival node sends immediately (intended fallback).

**Troubleshooting & Rate Limits**

No Telegram message? Start a chat with your bot first; bots can’t initiate. Check you used the correct chat ID.

Email didn’t send? Ensure credential is attached to the Email node and the “to” address is valid.

Geocode failed? Try a more complete address (street, city, state, ZIP). OSM is free but rate-limited—avoid rapid bulk tests.

Timezone drift? datetime should include timezone if possible (e.g., 2025-09-01T10:30:00-05:00).

**Keywords (SEO)**

service scheduling, delivery route planner, booking automation, n8n workflow, Notion CRM, mobile business, florist delivery, pet grooming, client reminders, Telegram alerts, pre-arrival updates, geocoding, Google Maps link

**Made with love by The Workflow Muse** 💖

Elegant automation for those who run heart-led businesses.

## 📊 Basic Information

- **Workflow ID:** 8077
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 214
- **Downloads:** 21
- **Created:** 2025/8/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8077)

## 👤 Author

- **Name:** Shelly-Ann Davy
- **Username:** @SheCodesFlow

## 🏷️ Categories

- Project Management
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×5)
- **webhook** 
- **function** (×3)
- **httpRequest** 
- **merge** 
- **telegram** 
- **wait** 
- **emailSend** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
