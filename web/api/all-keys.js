const LICENSE_KEYS = [
  {
    Key: 'DEMO26222',
    Username: 'developmenat1',
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
  res.json({ keys: LICENSE_KEYS });
}





