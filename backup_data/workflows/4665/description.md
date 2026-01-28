**Usecase**: When a new service ticket is created in Taiga, it's often unclear whether it contains sufficient details to begin work. This workflow automates the triage process by:

1. Using an AI model to extract key information from the ticket description.
2. Automatically assigning values for:
   - **Type** (Bug, Enhancement, Onboarding, Question)
   - **Severity** (Wishlist, Minor, Normal, Important, Critical)
   - **Priority** (Low, Normal, High)
   - **Status** (New, Needs More Info, etc.)
3. Detecting missing critical data and blocking the ticket if incomplete.

Setup instructions here:
https://github.com/emooney/Service_Ticket_Triage_Helper
