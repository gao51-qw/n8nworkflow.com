# Automatically correct wrong shipping addresses in Billbee orders

> # **Address Validation Workflow**

## **About**
This workflow automates the process of validating and correcting client shipping addresses in Billbee, ensuring accurate delivery information. It's ideal for e-commerce businesses looking to save time and reduce errors in their order fulfillment process. The workflow uses Billbee, an order management platform for small to medium-sized online retailers, and the Endereco API for address validation.

## **Who Is This For?**
- **E-Commerce Businesses**: Streamline order fulfillment by automatically correcting common shipping address errors.
- **Warehouse Teams**: Reduce manual work and ensure packages are shipped to the correct address.
- **Small to Medium-Sized Retailers**: Businesses using Billbee to manage orders and requiring efficient, automated solutions for address validation.

## **How it Works**
1. **Trigger**: Workflow starts via a Billbee Webhook when an order is imported.  
2. **Fetch Data**: Retrieve the client's shipping address using the Order ID.  
3. **Validate Address**: Send the address to the Endereco API for validation and correction (e.g., house number errors).  
4. **Conditional Actions**:  
   - **Valid Address**: Update the address in Billbee.  
   - **Invalid Address**: Tag the order with "Validation Error."  
5. **Track Status**: Add tags in Billbee for processed orders.

## **Setup Steps**
1. **API Keys**: Obtain Billbee Developer/User API Keys and Endereco API Key.  
2. **Billbee Rule**: Create an automation rule:  
   - **Trigger**: Order imported.  
   - **Action**: Call External URL with `OrderId` to trigger n8n workflow.  
3. **Optional**: Use a secondary trigger (e.g., order state changes to "gepackt") for manual corrections.

## **Customization Options**
1. **Filter Delivery Addresses**:  
   - Customize filters to exclude specific delivery types, such as pickup shops ("Postfiliale," "Paketshop," or "Packstation").  
   - Filters can be adjusted within Billbee or in the workflow.

2. **Error Handling**:  
   - Configure additional actions for orders that fail validation, such as notifying your team or flagging orders for manual review.

3. **Order Tags**:  
   - Define custom tags in Billbee to better track order statuses (e.g., "Address Corrected," "Validation Error").

4. **Trigger Types**:  
   - Use additional triggers such as changes to order states (e.g., "gepackt" or "In Fulfillment") for manual corrections or validations.

5. **Address Fields**:  
   - Modify the workflow to focus on specific address components, such as postal codes, city names, or country codes.

6. **Validation Rules**:  
   - Adjust Endereco API settings or add custom logic to refine validation criteria based on your business needs.

### **API Documentation**
- **Endereco**: [Endereco API Docs](https://github.com/Endereco/enderecoservice_api)  
- **Billbee**: [Billbee API Docs](https://app.billbee.io//swagger/ui/index)


## 📊 Basic Information

- **Workflow ID:** 2609
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 905
- **Downloads:** 90
- **Created:** 2024/12/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2609)

## 👤 Author

- **Name:** Simon
- **Username:** @simonfes

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **httpRequest** (×6)
- **splitOut** (×2)
- **set** (×4)
- **wait** (×2)
- **if** (×4)
- **stickyNote** (×10)
- **filter** (×2)
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
