# Fetch scriptures dynamically from get Bible API

> #### **Overview**
The **Get Bible Query Workflow** is a modular and self-standing workflow designed to retrieve scriptures dynamically based on structured input. It serves as an intermediary layer that extracts references, queries the **GetBible API**, and returns scriptures in a standardized JSON format.

This workflow is **fully prepared for integration**—simply call it from another workflow with the required JSON input, and it will return the requested scripture data.

---

### **Who Is This For?**
This workflow is ideal for **developers, Bible study apps, research tools, and dynamic scripture-based projects** that need seamless access to scriptural content without direct API interaction.

✅ **Use Cases:**
- **Bible Study Apps** → Embed scripture retrieval functionality.
- **Research & Theology Tools** → Fetch structured verse data.
- **Dynamic Content Generation** → Integrate real-time scripture references.
- **Sermon Preparation** → Automate scripture lookups.

---

### **How It Works**
1. **Trigger Workflow** → This workflow is designed to be called from another workflow with a structured JSON input.
2. **Receive Input** → Accepts a **JSON object** containing references, translation, and API version.
3. **Extract References** → Parses **single verses, comma-separated lists, and ranged passages**.
4. **Query API** → Sends structured requests to the **GetBible API**.
5. **Format Response** → Returns **structured JSON output**, maintaining API response consistency.

---

### **JSON Input Structure**
- **References** → Should include the book name, chapter, and verse(s).
- **Multiple Verses** → Separated by commas (e.g., `John 3:16,18`).
- **Verse Ranges** → Defined with a dash (e.g., `John 3:16-18`).
- **Translation** → Choose from the supported [translations](https://api.getbible.net/v2/translations.json).
- **API Version** → Currently supports `v2`.

### **Example JSON Input**
```json
{
  "references": [
    "1 John 3:16",
    "Jn 3:16",
    "James 3:16",
    "Rom 3:16"
  ],
  "translation": "kjv",
  "version": "v2"
}
```

---

### **Example API Response**
```json
{
  "result": {
    "kjv_62_3": {
      "translation": "King James Version",
      "abbreviation": "kjv",
      "book_name": "1 John",
      "chapter": 3,
      "ref": ["1 John 3:16"],
      "verses": [
        {
          "chapter": 3,
          "verse": 16,
          "name": "1 John 3:16",
          "text": "Hereby perceive we the love of God, because he laid down his life for us: and we ought to lay down our lives for the brethren."
        }
      ]
    }
  }
}
```

💡 **Fully structured and formatted response – ready for seamless integration.**

---

### **Integration and Usage**
The **GetBible Query Workflow** is designed for **immediate use**. Simply call it from another workflow and pass the appropriate JSON object as input, and it will return the requested scripture passages.

✔️ **No additional configuration is required.**
✔️ **Designed for fast, reliable, and structured scripture retrieval.**
✔️ **Fully compatible with GetBible API responses.**

---

### **Why Use This Workflow?**
✔️ **Fast & Reliable** → Direct API integration for efficient queries.
✔️ **Flexible Queries** → Supports **single, multi-verse, and ranged requests**.
✔️ **Agent-Compatible** → Easily integrates into automated workflows.
✔️ **No Code Needed** → Just configure the JSON input and run the workflow.

---

### **Next Steps**
🔗 **[API Support](https://git.vdm.dev/getBible/support)**
📖 **[API Documentation](https://getbible.net/docs)**
💬 Need help? **Join the community for support!** 🚀

## 📊 Basic Information

- **Workflow ID:** 2818
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 997
- **Downloads:** 99
- **Created:** 2025/1/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2818)

## 👤 Author

- **Name:** getBible
- **Username:** @christian

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **stickyNote** 
- **executeWorkflowTrigger** 
- **code** 
- **httpRequest** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
