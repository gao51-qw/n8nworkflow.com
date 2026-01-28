# Implement recursive algorithms with sub-workflows: Towers of Hanoi demo

> ## How it works

This is an **example of using sub-workflow nodes** and a proof of concept showing that it’s possible to **solve and explain recursive problems with n8n**.

### Towers of Hanoi - Task
Move a stack of n disks from rod A to rod C, using rod B as auxiliary. Only one disk can be moved at a time, and no disk may be placed on a smaller disk.

### Example
```
n=4
     |          |          |
     =          |          |
    ===         |          |
   =====        |          |
  =======       |          |
 ---------  ---------  ---------
     A          B          C
```
### Algorithm
```
procedure Hanoi(n, X, Y, Z):
  if n == 1:
    move disk from X to Z
  else:
    Hanoi(n-1, X, Z, Y)
    move disk from X to Z
    Hanoi(n-1, Y, X, Z)
```

### Notes
- This is a learning example. In a real scenario, you would probably use an iterative approach with only a single code node.
- When experimenting with recursion, make sure to define a termination condition first. Also, be aware of the "Restart workspace" link in the [n8n Dashboard](https://app.n8n.cloud/manage).
- Learn more about [Recursion on Wikipedia](https://en.wikipedia.org/w/index.php?title=Recursion_(computer_science)&oldid=1301600240#Towers_of_Hanoi).

## Set up steps
- Optional: Set "*numberOfDiscs*" in node "*Set number of discs*"
- Execute workflow

## 📊 Basic Information

- **Workflow ID:** 8656
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 144
- **Downloads:** 14
- **Created:** 2025/9/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8656)

## 👤 Author

- **Name:** Adrian
- **Username:** @adrian

## 🏷️ Categories

- Engineering
- Multimodal AI

## 🔗 Nodes Used

- **set** 
- **if** 
- **executeWorkflow** (×3)
- **executeWorkflowTrigger** 
- **code** (×6)
- **stickyNote** (×8)
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
