
#  🚀 AI-Powered WhatsApp Customer Support for Shopify Brands


This n8n template builds a WhatsApp support copilot that answers **order
status** and **product availability** from Shopify using LLM "agents,"
then replies to the customer in WhatsApp or routes to human support.

------------------------------------------------------------------------

## Use cases

-   "Where is my order?" → live status + tracking link
-   "What are your best-selling T-shirts?" → in-stock sizes & variants
-   Greetings / small talk → welcome message
-   Anything unclear → handoff to support channel

------------------------------------------------------------------------

## Good to know

-   WhatsApp Business conversations are billed by Meta/Twilio/Exotel;
    plan accordingly.
-   Shopify Admin API has rate limits (leaky bucket) --- stagger
    requests.
-   LLM usage incurs token costs; cap max tokens and enable caching
    where possible.
-   Avoid sending PII to the model; only pass minimal order/product
    fields.

------------------------------------------------------------------------

## How it works

1.  **WhatsApp Trigger**\
    Receives an incoming message (e.g., "Where is my order?").

2.  **Get Customer from Shopify → Customer Details → Normalize Input**\
    Looks up the customer by phone, formats the query (lower-case, emoji
    & punctuation normalization).

3.  **Switch (intent router)**\
    Classifies into `welcome`, `orderStatusQuery`, `productQuery`, or
    `supportQuery`.

4.  **Welcome path**\
    **Welcome message** → polite greeting → (noop placeholder).

5.  **Order status path (Orders Agent)**

    -   **Orders Agent (LLM + Memory)** interprets the user request and
        extracts needed fields.
    -   **Get Customer Orders (HTTP to Shopify)** fetches the user's
        latest order(s).
    -   **Structured Output Parser** cleans the agent's output into a
        strict schema.
    -   **Send Order Status (WhatsApp message)** returns status, ETA,
        and tracking link.

6.  **Products path (Products Agent)**

    -   **Products Agent (LLM + Memory)** turns the ask into a product
        query.
    -   **Get Products from Shopify (HTTP)** pulls best sellers /
        inventory & sizes.
    -   **Structured Output Parser** formats name, price, sizes, stock.
    -   **Send Products message (WhatsApp)** sends a tidy,
        human-readable reply

7.  **Support path**
    **Send a message to support** posts the transcript/context to your
    agent/helpdesk channel and informs the user a human will respond

------------------------------------------------------------------------

## How to use

-   Replace the **manual/WhatsApp trigger** with your live WhatsApp
    number/webhook.
-   Set env vars/credentials: Shopify domain + Admin API token, WhatsApp
    provider keys, LLM key (OpenAI/OpenRouter), and (optionally) your
    support channel webhook.
-   Edit message templates for tone, add your brand name, and localize
    if needed.
-   Test with samples: "Where is my order?", "Show best sellers", "Hi".

------------------------------------------------------------------------

## Requirements

-   WhatsApp Business API (Meta/Twilio/Exotel)
-   Shopify store + Admin API access
-   LLM provider (OpenAI/OpenRouter etc.)
-   Slack webhook for human handoff

------------------------------------------------------------------------

## Prerequisites

-   Active **WhatsApp Business Account** connected via API provider
    (Meta, Twilio, or Exotel).
-   **Shopify Admin API credentials** (API key, secret, store domain).
-   **Slack OAuth app** or webhook for human support escalation.
-   API key for your LLM provider (OpenAI, OpenRouter, etc.).

------------------------------------------------------------------------

## Customising this workflow

-   Add intents: returns/exchanges, COD confirmation, address changes.
-   Enrich product replies with images, price ranges, and "Buy" deep
    links.
-   Add multilingual support by detecting locale and templating
    responses.
-   Log all interactions to a DB/Sheet for analytics and quality
    review.
-   Guardrails: confidence thresholds → fallback to support; redact PII;
    retry on API errors.

