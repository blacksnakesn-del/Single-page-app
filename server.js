

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const cors = require('cors');

const usersFile = path.join(__dirname, 'data', 'users.json');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

function readUsers() {
  try {
    const data = fs.readFileSync(usersFile, 'utf8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error('Lecture users.json échouée:', err);
    return [];
  }
}

function writeUsers(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2), 'utf8');
}

app.get('/users', (req, res) => {
  res.json(readUsers());
});

app.post('/users', (req, res) => {
  const { prenom, nom, email, password } = req.body;

  if (!prenom || !nom || !email || !password) {
    return res.status(400).json({ message: 'Tous les champs sont requis.' });
  }

  const users = readUsers();
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: 'Email déjà utilisé.' });
  }

  users.push({ prenom, nom, email, password });
  writeUsers(users);
  res.json({ message: 'Inscription réussie.' });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email et mot de passe sont requis.' });
  }

  const users = readUsers();
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    const { password: _password, ...safeUser } = user;
    return res.json({ message: 'Connexion réussie.', user: safeUser });
  }

  res.status(401).json({ message: 'Email ou mot de passe incorrect.' });
});

app.listen(3000, () => console.log('Serveur démarré sur http://localhost:3000'));
  