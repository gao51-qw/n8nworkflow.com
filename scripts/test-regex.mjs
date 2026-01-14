const txt = '<loc>https://n8n.io/workflows/12452-generate-3d-models/</loc><loc>https://n8n.io/workflows/1-insert-excel-data/</loc>';

const r1 = /https:\/\/n8n\.io\/workflows\/(\d+)-[^<>]+?\//g;
console.log('Regex 1:', [...txt.matchAll(r1)].map(m => m[0]));

const r2 = /workflows\/(\d+)-/g;
console.log('Simple regex match:', txt.match(r2));

const r3 = /workflows\/(\d+)/g;
let match;
const ids = [];
while ((match = r3.exec(txt)) !== null) {
  ids.push(match[1]);
}
console.log('IDs found:', ids);
