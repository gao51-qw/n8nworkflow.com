If you previously upgraded to n8n version `0.214.3`, some of your workflows might have been accidentally rewired in the wrong way. This issue affected nodes with more than one output, such as `If`, `Switch`, and `Compare Datasets`.

This workflow helps you identify potentially affected workflows and nodes that you should check.

**❗️Please ensure that you run this workflow as the instance owner.❗️**