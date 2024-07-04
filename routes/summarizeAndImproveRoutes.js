const express = require('express');
const { summarizeAndImprove } = require('./services/summarizeAndImprove.js');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({ error: 'Query is required' });
    }

    const result = await summarizeAndImprove(query);
    res.json(result);
  } catch (error) {
    console.error('Error in summarize route:', error);
    res.status(500).json({ error: 'An error occurred while processing your request' });
  }
});

module.exports = router;