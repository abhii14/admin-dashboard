
export default function handler(req, res) {
  if (req.method === 'POST') {
    // Logic to send notification
    res.status(200).json({ message: 'Notification sent' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
