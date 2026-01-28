# Standardize US phone numbers with multiple format options and validation

> ## Workflow Overview:

This n8n workflow template takes a US phone number as input, validates it, and returns it in multiple standard formats, including handling extensions. It's designed to streamline the process of standardizing phone number data within your automations.

## How it Works:

**Input:** Accepts a phone number string as input. This number can be in various common formats (e.g., `(555) 123-4567`, `555.123.4567`, `+15551234567`, `5551234567x890`).

**Formatting Removal:** Strips all non-numeric characters to isolate the core number and any potential extension.

**Validation:**

- **Country Code Check:** Verifies if the number starts with the US country code (`+1` or `1`) or assumes US if no country code is present and the length is correct.

- **Length Check:** Ensures the main number component consists of exactly 10 digits after stripping formatting and the country code.

**Output Generation (if valid):** If the number passes validation, the workflow outputs the phone number in several standardized formats:

- **Number Only:** 5551234567

- **E.164 Standard:** +15551234567

- **National Standard:** (555) 123-4567

- **Full National Standard:** 1 (555) 123-4567

- **International Standard:** 00-1-555-123-4567

**Extension Handling:** If an extension is detected in the input, it is separated and provided as:

- **Extension (Number):** 890

- **Extension (String):** "890"

**Use Cases:**

- Cleaning and standardizing phone number data in CRM systems.

- Formatting numbers before sending SMS messages via APIs.

- Validating user input from forms.

- Ensuring consistent phone number representation across different applications.

## 📊 Basic Information

- **Workflow ID:** 3812
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 399
- **Downloads:** 39
- **Created:** 2025/5/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3812)

## 👤 Author

- **Name:** Sunny Thaper
- **Username:** @sunnythaper

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **if** 
- **set** (×4)
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
