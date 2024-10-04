const express = require('express');
const router = express.Router();

let messages = [
  { id: 0, user: 'Pikachu', text: 'nodejs isn’t hard, or is it?' },
  { id: 1, user: 'Charmander', text: 'I love JavaScript!' }
];

// GET /api/v1/messages
router.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'GET messages',
    data: { messages }
  });
});

// GET /api/v1/messages/:id
router.get('/:id', (req, res) => {
  const message = messages.find(m => m.id == req.params.id);
  if (message) {
    res.json({
      status: 'success',
      message: 'GET message',
      data: { message }
    });
  } else {
    res.status(404).json({
      status: 'fail',
      message: 'Message not found'
    });
  }
});

// POST /api/v1/messages
router.post('/', (req, res) => {
  const newMessage = {
    id: messages.length,
    user: req.body.message.user,
    text: req.body.message.text
  };
  messages.push(newMessage);
  res.json({
    status: 'success',
    message: 'Message added',
    data: { message: newMessage }
  });
});

// PUT /api/v1/messages/:id
router.put('/:id', (req, res) => {
  const message = messages.find(m => m.id == req.params.id);
  if (message) {
    message.text = req.body.message.text;
    res.json({
      status: 'success',
      message: 'Message updated',
      data: { message }
    });
  } else {
    res.status(404).json({
      status: 'fail',
      message: 'Message not found'
    });
  }
});

// DELETE /api/v1/messages/:id
router.delete('/:id', (req, res) => {
  const index = messages.findIndex(m => m.id == req.params.id);
  if (index !== -1) {
    messages.splice(index, 1);
    res.json({
      status: 'success',
      message: 'Message deleted'
    });
  } else {
    res.status(404).json({
      status: 'fail',
      message: 'Message not found'
    });
  }
});

module.exports = router;