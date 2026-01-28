# Build a restaurant voice assistant with VAPI and PostgreSQL for bookings & orders

> This n8n template demonstrates how to create a comprehensive voice-powered restaurant assistant that handles table reservations, food orders, and restaurant information requests through natural language processing. The system uses VAPI for voice interaction and PostgreSQL for data management, making it perfect for restaurants looking to automate customer service with voice AI technology.

**Good to know**
* Voice processing requires active VAPI subscription with per-minute billing
* Database operations are handled in real-time with immediate confirmations
* The system can handle multiple simultaneous voice requests
* All customer data is stored securely in PostgreSQL with proper indexing

## How it works

### Table Booking & Order Handling Workflow
* Voice requests are captured through VAPI triggers when customers make booking or ordering requests
* The system processes natural language commands and extracts relevant details (party size, time, food items)
* Customer data is immediately saved to the `bookings` and `orders` tables in PostgreSQL
* Voice confirmations are sent back through VAPI with booking details and estimated wait times
* All transactions are logged with timestamps for restaurant management tracking

### Restaurant Info Provider Workflow  
* Info requests trigger when customers ask about hours, menu, location, or services
* Restaurant details are retrieved from the `restaurant_info` table containing current information
* Wait nodes ensure proper data loading before voice response generation
* Structured restaurant information is delivered via VAPI in natural, conversational format

## Database Schema

### Bookings Table
* `booking_id` (PRIMARY KEY) - Unique identifier for each reservation
* `customer_name` - Customer's full name
* `phone_number` - Contact number for confirmation
* `party_size` - Number of guests
* `booking_date` - Requested reservation date
* `booking_time` - Requested time slot
* `special_requests` - Dietary restrictions or special occasions
* `status` - Booking status (confirmed, pending, cancelled)
* `created_at` - Timestamp of booking creation

### Orders Table
* `order_id` (PRIMARY KEY) - Unique order identifier
* `customer_name` - Customer's name
* `phone_number` - Contact for order updates
* `order_items` - JSON array of food items and quantities
* `total_amount` - Calculated order total
* `order_type` - Delivery, pickup, or dine-in
* `special_instructions` - Cooking preferences or allergies
* `status` - Order status (received, preparing, ready, delivered)
* `created_at` - Order timestamp

### Restaurant_Info Table
* `info_id` (PRIMARY KEY) - Information entry identifier
* `category` - Type of info (hours, menu, location, contact)
* `title` - Information title
* `description` - Detailed information content
* `is_active` - Whether info is currently valid
* `updated_at` - Last modification timestamp

## How to use

* The manual trigger can be replaced with webhook triggers for integration with existing restaurant systems
* Import the workflow into your n8n instance and configure VAPI credentials
* Set up PostgreSQL database with the required tables using the schema provided above
* Configure restaurant information in the `restaurant_info` table
* Test voice commands such as "Book a table for 4 people at 7 PM" or "What are your opening hours?"
* Customize voice responses in VAPI nodes to match your restaurant's tone and branding
* The system can handle multiple concurrent voice requests and scales with your restaurant's needs

## Requirements

* VAPI account for voice processing and natural language understanding
* PostgreSQL database for storing booking, order, and restaurant information
* n8n instance with database and VAPI integrations enabled

## Customising this workflow

* Voice AI automation can be adapted for various restaurant types - from quick service to fine dining establishments
* Try popular use-cases such as multi-location booking management, dietary restriction handling, or integration with existing POS systems
* The workflow can be extended to include payment processing, SMS notifications, and third-party delivery platform integration

## 📊 Basic Information

- **Workflow ID:** 5847
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 3499
- **Downloads:** 349
- **Created:** 2025/7/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5847)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **webhook** (×2)
- **postgres** (×2)
- **respondToWebhook** (×2)
- **wait** (×2)
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
