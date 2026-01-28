# Automate Video Creation with Luma AI Dream Machine and Airtable (Part 2)

## **Description**  
This is the second part of the Luma AI Dream Machine automation. It captures the webhook response from Luma AI after video generation is complete, processes the data, and automatically updates Airtable with the video and thumbnail URLs. This completes the end-to-end automation for video creation and tracking.  

👉 [Airtable Base Template](https://airtable.com/invite/l?inviteId=invOr5AApOnDOtkhi&inviteToken=72a165d2df1c9a1c82a6144effc626f88ad501e9eaab10a1c2f279c3d7a6faff)  
👉 [Tutorial Video](https://youtu.be/yFCZYGHM9d8)  

---

## **Setup**  
### **1. Luma AI Setup**  
- Ensure you’ve created an account with **Luma AI** and generated an **API key**.  
- Confirm that the API key has permission to manage video requests.  

### **2. Airtable Setup**  
Make sure your Airtable base includes the following fields (set up in Part 1):  
- Use the **Airtable Base Template** linked above to simplify setup.  
- **Generation ID** – To match incoming webhook data.  
- **Status** – Workflow status (e.g., "Done").  
- **Video URL** – Stores the generated video URL.  
- **Thumbnail URL** – Stores the thumbnail URL.  

### **3. n8n Setup**  
- Ensure that the n8n workflow from **Part 1** is set up and configured.  
- Import this workflow and connect it to the webhook callback from Luma AI.  

---

## **How It Works**  
### 1. **Webhook Trigger**  
- The **Webhook** node listens for a POST response from Luma AI once video generation is finished.  
- The response includes:  
   - **Video URL** – Direct link to the video.  
   - **Thumbnail URL** – Link to the video thumbnail.  
   - **Generation ID** – Used to match the record in Airtable.  

### 2. **Process Webhook Data**  
- The **Set** node extracts the video data from the webhook response.  
- The **If** node checks if the video URL is valid before proceeding.  

### 3. **Store in Airtable**  
- The **Airtable** node updates the record with:  
   - **Video URL** – Direct link to the video.  
   - **Thumbnail URL** – Link to the video thumbnail.  
   - **Status** – Marked as "Done."  
- Uses the **Generation ID** to match and update the correct record.  

---

## **Why This Workflow is Useful**  
✅ Automates the completion step for video creation  
✅ Ensures accurate record-keeping by matching generation IDs  
✅ Simplifies the process of managing and organizing video content  
✅ Reduces manual effort by automating the update process  

---

## **Next Steps**  
- **Future Enhancements** – Adding more complex post-processing, video trimming, and multi-platform publishing.  
