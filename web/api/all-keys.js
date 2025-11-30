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

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  res.json({ keys: LICENSE_KEYS });
}
