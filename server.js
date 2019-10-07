const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.get("/api/accounts", (req,res) => {
  db.select('*').from('accounts')
    .then(accounts => res.status(200).json(accounts))
    .catch(err => res.send(err));
})

server.get("/api/accounts/:id", (req,res) => {
  const { id } = req.params;
  db('accounts').where({ id })
    .then(account => {
      if (account.length) { 
        res.status(200).json(account[0])
      } else {
        res.status(400).json({message: "Account with specified ID not found"})
      }
    })
    .catch(err => res.status(500).json(err));
});

server.post("/api/accounts", (req,res) => {
  if (!req.body) {
    res.status(400).json({message:"Body required"})
  } else if (!req.body.name || !req.body.budget) {
    res.status(400).json({message:"Name and budget required"})
  } else {
    db('accounts').insert(req.body)
      .then(id => res.status(201).json({id: id}))
      .catch(err => res.status(500).json(err));
  }
})

server.put("/api/accounts/:id", (req,res) => {
  const { id } = req.params;
  db('accounts').where({ id }).update(req.body)
    .then(count => {
      if (count) {
        res.status(201).json({id: id, ...req.body});
      } else {
        res.status(400).json({message: "Account with specified ID not found"});
      }
    })
    .catch(err => res.status(500).json(err));
});

server.delete("/api/accounts/:id", (req,res) => {
  const { id } = req.params;
  db('accounts').where({ id }).del()
    .then(count => {
      if (count) {
        res.status(201).json({message: "Successful deletion"});
      } else {
        res.status(400).json({message: "Account with specified ID not found"});
      }
    })
    .catch(err => res.status(500).json(err));
});

module.exports = server;