# Plan travel itineraries with Gemini AI, live Amadeus flights, and Airbnb stays

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

### Here is the Full Node-by-Node Breakdown of the workflow Workflow

**Execution Video:** [https://youtu.be/qkZ6UaO7aCE](https://youtu.be/qkZ6UaO7aCE)

---

#### 1. **Webhook** (`Webhook`)

* **Purpose**: Accepts incoming user queries via HTTP GET with the text parameter.
* **Example input**: `4 people from Germany to Bangkok @14th August 2025`

---

#### 2. **AI Agent** (`AI Agent`)

* **Type**: LangChain Agent
* **Model**: Google Gemini 2.5 Flash via Vertex AI
* **Prompt logic**:

  * Extracts structured travel info (origin city, destination, date, number of people)
  * Determines 3-letter IATA codes
  * Uses MCP’s Airbnb Tool to scrape listings starting from that date
* **Returns**:

  * A markdown + bullet-format response with:

    * Structured trip info
    * List of Airbnb listings with titles, price, rating, and link

---

#### 3. **MCP Client List Tool** (`MCP Client List Tool`)

* **Purpose**: Fetches a list of tools registered with MCP (Multi Channel Parser) client for the AI agent to select from
* **Used by**: AI Agent as part of `listTools()` phase

---

#### 4. **MCP Execute Tool** (`MCP Execute Tool`)

* **Purpose**: Executes the selected MCP tool (Airbnb scraper)
* **Tool input**: Dynamic — passed by AI Agent using `$fromAI('Tool_Parameters')`

---

#### 5. **Google Vertex Chat Model** (`Google Vertex Chat Model`)

* **Purpose**: Acts as the LLM behind the AI Agent
* **Model**: Gemini 2.5 Flash from Vertex AI
* **Used for**: Language understanding, extraction, decision-making

---

#### 6. **Grabbing Clean Data** (`Code Node`)

* **Purpose**: Parses AI output to extract:

  * Structured trip data
  * Airbnb listings (with title, rating, price, link)
* **Handles**:

  * Bullet (•) and asterisk (\*) formats
  * New and old markdown styles
  * Fallbacks for backward compatibility
* **Output**: Clean JSON:

  ```json
  {
    "tripInformation": {...},
    "listings": [...],
    "totalListings": X,
    ...
  }
  ```

---

#### 7. **Flight Search with fare** (`HTTP Request`)

* **API**: Amadeus Flight Offers API
* **Purpose**: Searches live flight offers using:

  * originIataCode
  * destinationIataCode
  * travelDate
  * numberOfPeople
* **Auth**: OAuth2

---

#### 8. **Flight Data + Airbnb Listings** (`Code Node`)

* **Purpose**:

  * Parses Amadeus flight offers
  * Formats date, time, and durations
  * Merges flight results with earlier Airbnb + trip info JSON
  * Sorts by cheapest total price
* **Output**:

  ```json
  {
    "tripInformation": {...},
    "listings": [...],
    "allFlightOffers": [...]
  }
  ```

---

#### 9. **Edit Fields** (`Set Node`)

* **Purpose**:

  * Assigns final response fields into clean keys:

    * `traveldetails`
    * `listings`
    * `flights`

---

#### 10. **Respond to Webhook**

* **Purpose**: Sends back the final structured JSON response to the caller.
* **Output**: Combined travel itinerary with flights + Airbnb

---

### Summary

This end-to-end workflow is a **fully autonomous travel query-to-itinerary engine**. From a plain text like “4 people from Vijayawada to Bangkok @14th August 2025,” it:

* Parses and understands the query using an AI agent
* Fetches Airbnb stays by scraping live listings
* Searches real-time flights via Amadeus
* Merges and formats everything into structured, digestible JSON

No manual parsing, no frontend — just AI + APIs + automation.



NOTE: I JUST USED A COMMUNITY NODE "n8n-nodes-mcp" + UNOFFICIAL AIRBNB MCP

## 📊 Basic Information

- **Workflow ID:** 6652
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 229
- **Downloads:** 22
- **Created:** 2025/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6652)

## 👤 Author

- **Name:** iamvaar
- **Username:** @iamvaar

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **n8n-nodes-mcp.mcpClientTool** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleVertex** 
- **webhook** 
- **respondToWebhook** 
- **set** 
- **httpRequest** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
