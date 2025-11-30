const LICENSE_KEYS = [
  {
    Key: 'DEMO26222',
    Username: 'robloxplahre',
    endingTime: '31-12-2025'
  },
  {
    Key: '8UZUNLUK',
    Username: 'aaaaaaaaaa',
    endingTime: '01-01-2026'
  },
  {
    Key: 'DEF456AAA',
    Username: '',
    endingTime: '15-06-2026'
  }
];

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const accept = req.headers['accept'] || '';
  const data = { keys: LICENSE_KEYS };
  if (accept.includes('text/html')) {
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html><html lang="en"><head><meta charset='UTF-8'><title>All Keys</title><style>body{background:#181c20;color:#eaeaea;font-family:monospace;padding:2rem;}pre{background:#23272b;padding:1.5rem;border-radius:10px;overflow:auto;font-size:1.1rem;}h1{font-size:2rem;margin-bottom:1rem;}</style></head><body><h1>All Keys</h1><pre>${JSON.stringify(data, null, 2)}</pre></body></html>`);
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data, null, 2));
  }

}
