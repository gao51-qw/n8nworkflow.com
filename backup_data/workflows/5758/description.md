*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# 🎉 n8n Workflow: Meetup Registration & Giveaway Picker

This n8n workflow is designed to handle **both participant registration** and **giveaway winner selection**, fully integrated with a frontend experience.

![Preview](https://raw.githubusercontent.com/Ficky-Dev/images/refs/heads/main/Meetup%20Giveaway.gif)


## 📋 Participant Registration Flow

This part of the workflow automates the registration process for meetup attendees.

### 🔄 Steps:
1. **📝 Participant Form (Webhook Trigger)**
   - Triggered when a user submits the form.
   - Captures fields like `nama_lengkap`, `email`, `whatsapp`, `discord_username`, and more.

2. **🛠️ Data Mapping**
   - Maps raw form inputs into a structured format.
   - Supports trimming, validation, and transformation as needed.

3. **💾 Save to Database**
   - Performs an *upsert* operation to store participant info in PostgreSQL.
   - Prevents duplicate entries based on unique ID (e.g., WhatsApp or email).

4. **✅ Confirmation Screen**
   - Returns a success message or thank-you page after registration is complete.


## 🎁 Giveaway App

This section serve frontend app to display and select random winners.

### 🔄 Steps:
1. **🌐 Webhook GET (Giveaway App)**
   - Exposes a public endpoint that delivers a ready-to-use HTML app.
   - Can be opened in a browser or projected during the event.

2. **📥 Fetch Participants**
   - Executes a SQL query to retrieve all participant records from the database.

3. **🧮 Format Participant Data**
   - Redacts personal details (e.g., masks WhatsApp numbers).
   - Encodes the `id` using Base64 for privacy and uniqueness.

4. **📤 Render Giveaway App**
   - Returns an HTML-based Single Page Application with the participant list included.
   - Allows the host to click a button to pick random winners live.

## ✅ Use Case Highlights

- Streamlined participant collection and storage using n8n workflows
- Secure data handling with redaction and ID encoding
- Frontend integration for a fun, interactive giveaway experience
- Reusable for other community events, workshops, or internal team draws


