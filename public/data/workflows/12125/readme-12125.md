# Generate multiple profile picture avatars with free public APIs (no keys)

> ## Simple Profile Picture Generator (No API Keys Needed)

Finding the perfect profile picture can be time-consuming and frustrating. Whether you need avatars for testing, placeholder images for development, or simply want to explore different styles before committing to a design, browsing multiple avatar services one by one is tedious. This workflow solves that universal problem by generating 12 different avatar styles instantly from a single trigger, giving you a complete gallery to choose from in seconds.

### How it works
1. Trigger the workflow manually.
2. The workflow generates a unique seed (random number or custom keyword) and randomly selects a gender.
3. The simple JavaScript code generates 12 different avatar URLs from multiple free APIs using the same seed for consistency.
4. All avatar URLs are passed to an HTML generator that creates a responsive gallery.
5. The final HTML displays all 12 avatar styles in a grid with metadata (seed and gender).
6. Each avatar includes a download button for easy saving.

### How to Set Up
1. No API keys required. All avatar services used are completely free and public.
2. Simply import the workflow and click "Execute Workflow" to generate your avatar gallery.
3. The workflow works immediately without any configuration needed.
4. The JavaScript code is beginner-friendly, meaning you can understand it just by reading through it.

### Customize
1. If you are an advanced user, you can **use custom seed instead of random**: In the "Generate APIs" node (line 1), change `const userInput = '';` to `const userInput = 'your-name';` to generate consistent avatars based on your chosen keyword.
2. **Set fixed gender**: In the "Generate APIs" node (line 4), change `const gender = Math.random() &gt; 0.5 ? 'male' : 'female';` to `const gender = 'female';` or `const gender = 'male';` for consistent gender across compatible APIs.
3. **Add or remove avatar APIs**: Edit the `apis` array in the "Generate APIs" node to include your preferred avatar services or remove unwanted styles.
4. **Change avatar size**: Replace `size=200` or `&size=200` with your desired dimensions (e.g., `size=300`) in the API URLs within the "Generate APIs" node.


## 📊 Basic Information

- **Workflow ID:** 12125
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 53
- **Downloads:** 5
- **Created:** 2025/12/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12125)

## 👤 Author

- **Name:** Wan Dinie
- **Username:** @wandinie

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **code** (×2)
- **html** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
