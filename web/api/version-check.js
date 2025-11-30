const VERSION = "2.0"; // Güncel plugin versiyonu

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const clientVersion = req.query.version;
  const accept = req.headers['accept'] || '';
  if (!clientVersion) {
    // Sadece güncel versiyonu göster
    const data = { version: VERSION };
    if (accept.includes('text/html')) {
      res.setHeader('Content-Type', 'text/html');
      res.end(`<!DOCTYPE html><html lang=\"en\"><head><meta charset='UTF-8'><title>Current Version</title><style>body{background:#181c20;color:#eaeaea;font-family:monospace;padding:2rem;}pre{background:#23272b;padding:1.5rem;border-radius:10px;overflow:auto;font-size:1.1rem;}h1{font-size:2rem;margin-bottom:1rem;}</style></head><body><h1>Current Version</h1><pre>${JSON.stringify(data, null, 2)}</pre></body></html>`);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data, null, 2));
    }
    return;
  }
  let data;
  if (clientVersion === VERSION) {
    data = { upToDate: true, version: VERSION };
  } else {
    data = { upToDate: false, latest: VERSION };
  }
  if (accept.includes('text/html')) {
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html><html lang=\"en\"><head><meta charset='UTF-8'><title>Version Check</title><style>body{background:#181c20;color:#eaeaea;font-family:monospace;padding:2rem;}pre{background:#23272b;padding:1.5rem;border-radius:10px;overflow:auto;font-size:1.1rem;}h1{font-size:2rem;margin-bottom:1rem;}</style></head><body><h1>Version Check</h1><pre>${JSON.stringify(data, null, 2)}</pre></body></html>`);
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data, null, 2));
  }
}
