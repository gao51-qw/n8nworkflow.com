# Store chat data in Supabase PostgreSQL for WhatsApp/Slack chatbot

> # n8n Template: Store Chat Data in Supabase PostgreSQL for WhatsApp/Slack Integration

This n8n template captures chat data (like user ID, name, or address) and saves it to a Supabase PostgreSQL database. It’s built for testing now but designed to work with WhatsApp, Slack, or similar platforms later, where chat inputs aren’t predefined.
Guide with images can be found on: https://github.com/JimPresting/Supabase-n8n-Self-Hosted-Integration/

## Step 1: Configure Firewall Rules in Your VPC Network

To let your n8n instance talk to Supabase, add a firewall rule in your VPC network settings (e.g., Google Cloud, AWS, etc.).

1. Go to **VPC Network** settings.
2. Add a new firewall rule:
   - **Name**: `allow-postgres-outbound`
   - **Direction**: Egress (outbound traffic)
   - **Destination Filter**: IPv4 ranges
   - **Destination IPv4 Ranges**: `0.0.0.0/0` (allows all; restrict to Supabase IPs for security)
   - **Source Filter**: 
     - Pick `IPv4 ranges` and add the n8n VM’s IP range, or
     - Pick `None` if any VM can connect
   - **Protocols and Ports**:
     - Protocol: `TCP`
     - Port: `5432` (default PostgreSQL port)

3. Save the rule.

## Step 2: Get the Supabase Connection String

1. Log into your **Supabase Dashboard**.
2. Go to your project, click the **Connect** button in the header.
3. Copy the PostgreSQL connection string:

   ```
   postgresql://postgres.fheraruzdahjd:[YOUR-PASSWORD]@aws-0-eu-central-1.pooler.supabase.com:6543/postgres
   ```

   - Replace `[YOUR-PASSWORD]` with your Supabase account password (no brackets) and replace the string before that with your actual unique identifier.
   - Note the port (`6543` or `5432`)—use what’s in the string.

## Step 3: Set Up the n8n Workflow

This workflow takes chat data, maps it to variables, and stores it in Supabase. It’s built to handle messy chat inputs from platforms like WhatsApp or Slack in production.


### Workflow Steps

1. **Trigger Node**: "When clicking 'Test workflow'" (manual trigger).
   - For now, it’s manual. In production, this will be a WhatsApp or Slack message trigger, which won’t have a fixed input format.

2. **Set Node**: "Set sample input variables (manual)".
   - This node sets variables like `id`, `name`, `address` to mimic chat data.
   - **Why?** Chat platforms send unstructured data (e.g., a message with a user’s name or address). We map it to variables so we can store it properly. The `id` will be something unique like a phone number, account ID, or account number.

3. **Sample Agent Node**: Uses a model (e.g., GeminiFlash2.0 but doesn't matter).
   - This is a placeholder to process data (e.g., clean or validate it) before saving. You can skip or customize it.

4. **Supabase PostgreSQL Node**: "Supabase PostgreSQL Database".
   - Connects to Supabase using the connection string from Step 2.
   - Saves the variables (`id`, `name`, `address`) to a table.
   - **Why store extra fields?** The `id` (like a phone number or account ID) is the key. Extra fields like `name` or `address` let us keep all user info in one place for later use (e.g., analytics or replies).

5. **Output Node**: "Update additional values e.g., name, address".
   - Confirms the data is saved. In production, this could send a reply to the chat platform.

### Why This Design?

- **Handles Unstructured Chat Data**: WhatsApp or Slack messages don’t have a fixed format. The "Set" node lets us map any incoming data (e.g., `id`, `name`) to our database fields.
- **Scales for Production**: Using `id` as a key (phone number, account ID, etc.) with extra fields like `name` makes this workflow flexible for many use cases, like user profiles or support logs.
- **Future-Ready**: It’s built to swap the manual trigger for a real chat platform trigger without breaking.

## Step 4: Configure the Supabase PostgreSQL Node

1. In the n8n workflow, set up the **Supabase PostgreSQL** node:
   - **Host**: `aws-0-eu-central-1.pooler.supabase.com` (from the connection string)
   - **Port**: `6543` (or what’s in the connection string)
   - **Database**: `postgres`
   - **User**: `postgres.fhspudlibstmpgwqmumo` (from the connection string)
   - **Password**: Your Supabase password
   - **SSL**: Enable (Supabase usually requires it)

2. Set the node to **Insert** or **Update**:
   - Map `id` to a unique column in your Supabase table (e.g., phone number, account ID).
   - Map fields like `name`, `address` to their columns.

3. Test the workflow to confirm data saves correctly.

## Security Tips

- **Limit Firewall Rules**: Don’t use `0.0.0.0/0`. Find Supabase’s IP ranges in their docs and use those.
- **Hide Passwords**: Store your Supabase password in n8n’s environment variables.
- **Use SSL**: Enable SSL in the n8n node for secure data transfer.





## 📊 Basic Information

- **Workflow ID:** 3867
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 1081
- **Downloads:** 108
- **Created:** 2025/5/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3867)

## 👤 Author

- **Name:** JPres
- **Username:** @stardawnai

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.memoryPostgresChat** 
- **supabase** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
