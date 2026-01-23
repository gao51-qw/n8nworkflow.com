This workflow provides a simple approach to counting the items returned by a node.

It uses a Set node with the Execute Once option:

![image.png](fileId:704)

The expression uses `$input.all()` (documented [here](https://docs.n8n.io/code-examples/methods-variables-reference/)) to fetch all incoming items at once, and `.length` (documented for example [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)) to count them.