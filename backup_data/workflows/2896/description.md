# N8N for Beginners: Looping Over Items

## Description

This workflow is designed for **n8n beginners** to understand how n8n handles **looping (iteration)** over multiple items. It highlights two key behaviors:

- **Built-In Looping:** By default, most n8n nodes iterate over each item in an input array.
- **Explicit Looping:** The **Loop Over Items** node allows controlled iteration, enabling **custom batch processing** and multi-step workflows.

This workflow demonstrates the difference between processing an **unsplit array of strings (single item)** vs. **a split array (multiple items)**.

---

## Setup

### 1. Input Data

To begin, **paste the following JSON** into the **Manual Trigger** node:

```json
{
  "urls": [
    "https://www.reddit.com",
    "https://www.n8n.io/",
    "https://n8n.io/",
    "https://supabase.com/",
    "https://duckduckgo.com/"
  ]
}
```

📌 **Steps to Paste Data:**
- **Double-click** the "Manual Trigger" node.
- Click **"Edit Output"** (top-right corner).
- Paste the JSON and **Save**.
- The node **turns purple**, indicating that test data is pinned.

### 1. Click "Test Workflow" button at the bottom of the canvas


---

## Explanation of the n8n Nodes in the Workflow

| Node Name | Purpose | Documentation Link |
|-----------|---------|--------------------|
| **[Manual Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.manualtrigger/)** | Starts the workflow manually and sends test data | [Docs](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.manualtrigger/) |
| **[Split Out](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.splitout/)** | Converts an array of strings into separate JSON objects | [Docs](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.splitout/) |
| **[Loop Over Items (Loop Over Items 1)](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.splitinbatches/)** | Demonstrates how an **unsplit** array is treated as one item | [Docs](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.splitinbatches/) |
| **[Loop Over Items (Loop Over Items 2)](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.splitinbatches/)** | Iterates over **each item separately** | [Docs](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.splitinbatches/) |
| **[Wait](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.wait/)** | Introduces a delay per iteration (set to 1 second) | [Docs](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.wait/) |
| **[Code](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.code/)** | Adds a constant parameter (`param1`) to each item | [Docs](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.code/) |
| **[NoOp (Result Nodes)](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.noop/)** | Displays output for inspection | [Docs](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.noop/) |

---

## Execution Details

### 1. How the Workflow Runs

- **Manual Trigger starts execution** with the pasted JSON data.
- The workflow follows **two paths**:
  1. **Unsplit Array Path** → **Loop Over Items 1**  
     - Processes the entire array as **a single item**.
     - **Result1 & Result5:** Show that the array was **not split**.
  
  2. **Split Array Path** → **Split Out → Loop Over Items 2**
     - **Splits** the array into **separate objects**.
     - **Result2, Result3, Result4:** Show that each item is processed **individually**.
     - A **Wait node (1 sec delay)** demonstrates **controlled execution**.
     - Code nodes modify the JSON, adding a parameter (`param1`).

### 2. What You Will See

| Node | Expected Output |
|------|---------------|
| **Result1 & Result5** | The entire array is processed **as one item**. |
| **Result2, Result3, Result4** | The array is **split and processed** as **individual items**. |
| **Wait Node** | Adds a **1-second delay per item** in **Loop Over Items 2**. |

---

## Use Cases

This workflow is useful for:

✅ **API Data Processing:** Loop through **API responses** containing arrays.  
✅ **Web Scraping:** Process **multiple URLs** individually.  
✅ **Task Automation:** Execute **a sequence of actions per item**.  
✅ **Workflow Optimization:** Control execution order, delays, and dependencies.

---

## Notes

- Sticky notes are included in the workflow **for easy reference**.
- The **Wait node** is **optional**—remove it for faster execution.
- This template is structured for **beginners** but serves as a **building block** for more advanced automations.

---

