// Admin User ID'lerini dönen endpoint
const ADMIN_USER_IDS = [
  "9531355056",
  "987654321",
  "1122334455"
];

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const data = { adminUserIds: ADMIN_USER_IDS };
  const accept = req.headers['accept'] || '';
  if (accept.includes('text/html')) {
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html><html lang=\"en\"><head><meta charset='UTF-8'><title>Admin User IDs</title><style>body{background:#181c20;color:#eaeaea;font-family:monospace;padding:2rem;}pre{background:#23272b;padding:1.5rem;border-radius:10px;overflow:auto;font-size:1.1rem;}h1{font-size:2rem;margin-bottom:1rem;}</style></head><body><h1>Admin User IDs</h1><pre>${JSON.stringify(data, null, 2)}</pre></body></html>`);
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data, null, 2));
  }
}

