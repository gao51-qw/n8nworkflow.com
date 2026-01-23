## Use Cases
-Personal or family budget tracking.

-Small business expense logging via Telegram

-Hands-free logging (using voice messages)

---

## How it works:

-Trigger receives text or voice.

-Optional branch transcribes audio to text.

-AI parses into a structured array (SOP enforces schema).

-Split Out produces 1 item per expense.

-Loop Over Items appends rows sequentially with a Wait, preventing missed writes.

-In parallel, Item Lists (Aggregate) builds a single summary string; Merge (Wait for Both) releases one final Telegram confirmation.

----

## Setup Instructions 

1. Connect credentials: Telegram, Google, OpenAI.
2. Sheets: Create a sheet with headers Date, Category, Merchant, Amount, Note. Copy Spreadsheet ID + sheet name.
3. Map columns in Append to Google Sheet.
4. Pick models: set Chat model (e.g., gpt-4o-mini) and Whisper for transcription if using audio.
5. Wait time: keep 500–1000 ms to avoid API race conditions.
6. Run: Send a Telegram message like:
Gas 34.67, Groceries 82.45, Coffee 6.25, Lunch 14.90.

----
## Customization ideas:

-Add categories map (Memory/Set) for consistent labeling.

-Add currency detection/formatting.

-Add error-to-Telegram path for invalid schema.