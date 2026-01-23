# Generate random mock data with no code and zero dependencies

> ## 🎲 Random Data Generator 🎲

This beginner-friendly workflow allows you to generate random mock data effortlessly, without any programming or external dependencies. 🚀

Here's how it works:

1. 📝 Provide some default values for the random generator using the "Code" node. Don't worry, no coding is needed, it's just a simple JSON! You can even use the "Ask AI" in the cloud version of n8n to generate mock values for you. These values are permanently stored in the workflow ensuring swift and reliable execution.

2. 🔀 The "Firstname," "Lastname," and "Occupation" nodes extract invividual variables. Two Merge nodes create a combination of all possible values. Adapt this section based on your needs.

3. 🎲 The "Random" node shuffles the generated data.

4. 🔢 Use the "Limit" node to control the number of output items.

5. ✨ Perform additional post-processing, such as deriving email addresses based on the user's name and surname.

And there you have it! With just a few clicks, you'll have a set of realistic mock data ready to test your workflows. 🎉

Want to learn more? Check out the full tutorial on YouTube! 📺

[![Click to watch the video](https://i.ytimg.com/vi/3AVJFk3uXBg/hqdefault.jpg)](https://www.youtube.com/watch?v=3AVJFk3uXBg)

Happy data generating! 😄


## 📊 Basic Information

- **Workflow ID:** 1802
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 935
- **Downloads:** 93
- **Created:** 2022/10/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1802)

## 👤 Author

- **Name:** Eduard
- **Username:** @eduard

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **manualTrigger** 
- **code** 
- **set** (×4)
- **sort** 
- **limit** 
- **stickyNote** (×5)
- **merge** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
