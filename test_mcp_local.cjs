const { spawn } = require('child_process');

const env = {
    ...process.env,
    CLOUDFLARE_API_TOKEN: 'lMbcSBjDGqufCSSVou3JlPchLBDO_T_lCxMqWEz2',
    CLOUDFLARE_ACCOUNT_ID: '60c42c93e257775692373da4a7d406f4'
};

const child = spawn('npx', ['-y', '@cloudflare/mcp-server-cloudflare', 'run', '60c42c93e257775692373da4a7d406f4'], { env, shell: true });

child.stdout.on('data', (data) => {
    console.log(`STDOUT: ${data}`);
});

child.stderr.on('data', (data) => {
    console.error(`STDERR: ${data}`);
});

child.on('close', (code) => {
    console.log(`Process exited with code ${code}`);
});

// Send a JSON-RPC initialize request
const initRequest = {
    jsonrpc: '2.0',
    id: 1,
    method: 'initialize',
    params: {
        protocolVersion: '2024-11-05',
        capabilities: {},
        clientInfo: { name: 'test-client', version: '1.0.0' }
    }
};

child.stdin.write(JSON.stringify(initRequest) + '\n');

setTimeout(() => {
    child.kill();
}, 5000);
