// Tüm lisans anahtarlarını dönen endpoint (güvenlik için header kontrolü)
app.get('/api/all-keys', (req, res) => {
  const adminKey = req.header('x-admin-key');
  if (adminKey !== 'supersecret') {
    return res.status(403).json({ error: 'no access' });
  }
  res.json({ keys: LICENSE_KEYS });
});
const express = require('express');
const path = require('path');
const app = express();

// Lisans anahtarları obje yapısında
const LICENSE_KEYS = [
  {
    Key: 'DEMO262',
    Username: 'Arsenalplayer191763',
    endingTime: '31-12-2025'
  },
  {
    Key: 'ABC123',
    Username: '',
    endingTime: '01-01-2026'
  },
  {
    Key: 'DEF456',
    Username: '',
    endingTime: '15-06-2026'
  }
];

// Ana sayfa (statik dosya)
app.use(express.static(path.join(__dirname, 'public')));

// Lisans API endpointi
app.get('/api/license', (req, res) => {
  // Sadece özel header ile erişim
  const apiKey = req.header('x-plugin-key');
  if (!apiKey) {
    return res.status(403).json({ error: 'no access' });
  }
  // Lisans anahtarı kontrolü
  const found = LICENSE_KEYS.find(lk => lk.Key === apiKey);
  if (found) {
    return res.json({ valid: true, license: found });
  } else {
    return res.status(401).json({ valid: false, error: 'invalid key' });
  }
});

// Diğer tüm istekler ana sayfaya yönlendirilsin (SPA desteği için)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;
