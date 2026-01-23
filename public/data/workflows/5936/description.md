This n8n workflow automatically detects high‑spending hotel guests after checkout and emails them a personalized, one‑time reward offer.

---

### **🔧 What it does**
- Watches Salesforce `Guest__c` custom object for checkout updates.
- Pulls guest spend data on optional paid amenities:
  - Room Service
  - Minibar
  - Laundry
  - Late Checkout
  - Extra Bed
  - Airport Transfer
- Calculates total spend to identify VIP guests (≥ **$50**).
- Uses AI to:
  - Spot unused services.
  - Randomly pick one unused service.
  - Generate a realistic, short promo like:  
    _"Free late checkout on your next stay"_
- Parses AI output into JSON.
- Sends a polished HTML email to the guest with their personalized offer.

---

### **📦 Key nodes**
- `Salesforce Trigger` → monitors new checkouts.
- `Salesforce` → fetches detailed spend data.
- `Function` → sums up total amenity spend.
- `IF` → filters for VIP guests.
- `LangChain LLM` + `Google Vertex AI` → drafts the offer text.
- `Structured Output Parser` → cleans AI output.
- `Brevo` → delivers branded email.

---

### **📊 Example output**
&gt; _Subject:_ `John, We Have Something Special for Your Next Stay`  
&gt; _Offer in email:_ `Enjoy a complimentary minibar selection on your next stay.`

---

### **✨ Why it matters**
Rewarding guests who already spend boosts loyalty and repeat bookings — without generic discounts. The offer feels personal, relevant, and exclusive.
