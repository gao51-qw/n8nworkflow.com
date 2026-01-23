# What Most People Miss When Using Switch Nodes (and How to Fix It)

## Switch Node Best Practice

The Switch node is powerful — but easy to misconfigure. Without a proper fallback, things can silently break. 🧨

Common pitfalls:
- The value is null or undefined due to earlier workflow errors
- Case mismatches ("Yes" vs "yes")
- Type mismatches (3 as number vs "3" as string)
- Forgotten or outdated conditions

## ➡️ Best Practice:
Always enable the **“Fallback” option** and connect it to an Error or Notify node. This ensures misrouted executions don't silently fail — they alert you instead.

**Protect your workflow logic, and save yourself hours of debugging. 🛠️**

## 🚧 Reminder

If you run this workflow **it fails by design** — this is the intended behaviour as explained above. 
Change the Dummy Data Node to one of the valid values to make it succeed.

---
