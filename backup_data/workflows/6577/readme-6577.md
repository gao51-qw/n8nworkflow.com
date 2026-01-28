# Automate outbound voice calls with Vapi from form submissions

> This n8n automation connects your n8n form submissions to **[Vapi AI](https://vapi.ai/?aff=onenode)**, enabling you to **immediately call new respondents** with a personalized voice AI assistant, as soon as the form is submitted.

## 🧾 Requirements

### n8n Form
- An **n8n form** node published and accessible to users.
- The form must include a **phone number field**:
  - Accept full international phone number with `+` and country code.  
    Example: `+11234567890`
- (Optional) Add more form fields as needed for your use case.

### Vapi
- A [**Vapi**](https://vapi.ai/?aff=onenode) account with credit.
- A connected **phone number** for outbound calls.
- An **assistant** created and ready to make calls.
- Your **Vapi API key**.

### 🔗 Useful Link
- [Vapi calll endpoint](https://docs.vapi.ai/api-reference/calls/create)

---

## 🔄 Workflow Breakdown

### 1. **Trigger: Form Submission (n8n Form)**
- Starts when a submission is received from your form.

### 2. **Wait 2 Minutes**
- Inserts a 2-minute pause before the next steps.

### 3. **Set Vapi Fields (Manual Step)**

#### Step-by-Step: Configuring Vapi Parameters in the ‘Set fields’ Node

1. **Open the ‘Set’ node** where you map Vapi parameters.
2. **Add fields** (if not present):
    - `phone_number_id`: The sender phone number ID from your Vapi dashboard.
    - `assistant_id`: The ID of the Vapi AI assistant you want to use.
    - `api_key`: Paste your Vapi API key here (keep secure).
3. **(Optional) Add more fields** for personalization, such as:
    - `first_name`, `product`, `reason`, etc., if captured in your form.

### 4. **Start Outbound Vapi Call**
- Sends a **POST** request to `https://api.vapi.ai/call`.
- Payload includes:
    - Phone number from form
    - Chosen assistant ID
    - Vapi number ID
    - Any additional info you choose to pass for customizing the call

---

## 🎨 Customization

### How to Adapt for Different Use Cases

- **Collect More Info:**  
  Add fields to your n8n form for details such as name, product type, issue/context, preferred language, etc.  
- **Use Extra Data in Calls:**  
  In the HTTP request node, pass these fields in the API request body to Vapi. Tailor your assistant’s script to reference these for a personalized experience.
- **Conditional Calls:**  
  Add n8n logic nodes to filter/categorize submissions (e.g., only call if a checkbox is ticked or if value matches certain criteria).
- **Dynamic Assistant Selection:**  
  Select assistant or Vapi number based on user responses (e.g., route to different assistants by region or requested service).

---

## 📇 Using Additional Form Fields in Vapi Calls

- Any field collected on your n8n form can be included in the call payload,  simply add it in the HTTP request payload.
- Vapi can use these variables for dynamically constructing prompts, personalizing the call flow, or branching logic in the interaction.
- Example: If your form collects `first_name` and `appointment_time`, both can be sent to Vapi and referenced in the call script or as variables in your assistant’s logic.

---

## 🙋‍♂️ Need Help?

Feel free to contact us at [**1 Node**](https://1node.ai)  
Explore more [**free resources**](https://1node.ai/resources) created for automating n8n and Vapi.


## 📊 Basic Information

- **Workflow ID:** 6577
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 2013
- **Downloads:** 201
- **Created:** 2025/7/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6577)

## 👤 Author

- **Name:** Aitor | 1Node
- **Username:** @aitoralonso

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×2)
- **httpRequest** 
- **set** 
- **formTrigger** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
