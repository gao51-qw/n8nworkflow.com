# Create secure interactive applications with WhatsApp flows end-to-end encryption

> # WhatsApp Flows Encrypted Data Exchange Workflow

## Summary
This workflow enables secure end-to-end encrypted data exchange with WhatsApp Flows for interactive applications inside Whatsapp.  It implements the WhatsApp Business Encryption protocol using RSA for key exchange and AES-GCM for payload encryption, providing a secure channel for sensitive data transmission while interfacing with WhatsApp's Business API. This follows the official WhatsApp Business Encryption specifications to establish an encrypted GraphQL-powered data exchange channel between your business and the WhatsApp consumer client.

## How It Works

### Encryption Flow
1. **Webhook Reception**: Receives encrypted data from WhatsApp containing:
   - `encrypted_flow_data`: The AES-encrypted payload
   - `encrypted_aes_key`: The RSA-encrypted AES key
   - `initial_vector`: Initialization vector for AES decryption

2. **Decryption Process**:
   - The workflow decrypts the AES key using an RSA private key
   - Then uses this AES key to decrypt the payload data
   - The inverted IV is used for response encryption

3. **Data Processing**:
   - The workflow parses the decrypted JSON data
   - Routes requests based on the `screen` parameter.
 

4. **Response Generation**:
   - Generates appropriate response data based on the request type
   - Encrypts the response using the same AES key and inverted IV
   - Returns the base64-encoded encrypted response

### Key Components
- **Webhook Endpoint**: Entry point for encrypted WhatsApp requests
- **Decryption Pipeline**: RSA and AES decryption components
- **Business Logic Router**: Screen-based routing for different functionality
- **Encryption Pipeline**: Secure response encryption

## How to Use

1. **Deploy the Workflow**:
   - Import the workflow JSON into your n8n instance

2. **Set Up WhatsApp Integration**:
   - Configure your WhatsApp Business API to send requests to your n8n webhook URL
   - Ensure your WhatsApp integration is set up to encrypt data using the public key pair of the private key used in this workflow

3. **Test the Flow**:
   - Send an encrypted test message from WhatsApp to verify connectivity
   - Check if appointment data is being retrieved correctly
   - Validate that seat selection is functioning as expected

4. **Production Use**:
   - Monitor the workflow performance in production
   - Set up error notification if needed

## Requirements

Authentication Keys

RSA Private Key: Required for decrypting the AES key (included in the workflow)
WhatsApp Business Public Key: Must be registered with the WhatsApp Business API
PostgreSQL Credentials: For accessing appointment data from the database

WhatsApp Business Encryption Setup
As specified in the WhatsApp Business Encryption documentation:

Generate a 2048-bit RSA Key Pair:

The private key remains with your business (used in this workflow)
The public key is shared with WhatsApp


Register the Public Key with WhatsApp:

Use the WhatsApp Cloud API to register your public key
Set up the public key using the /v17.0/{WhatsApp-Business-Account-ID}/whatsapp_business_encryption endpoint


Key Registration API Call:
POST /v17.0/{WhatsApp-Business-Account-ID}/whatsapp_business_encryption
{
  "business_public_key": "YOUR_PUBLIC_KEY"
}

Verification:

Verify your public key is registered using a GET request to the same endpoint
Ensure the key status is "active"



## 📊 Basic Information

- **Workflow ID:** 3973
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 972
- **Downloads:** 97
- **Created:** 2025/5/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3973)

## 👤 Author

- **Name:** Flavio Angeleu
- **Username:** @flavioangeleu

## 🏷️ Categories

- Support Chatbot

## 🔗 Nodes Used

- **webhook** 
- **code** (×7)
- **switch** 
- **respondToWebhook** (×2)
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
