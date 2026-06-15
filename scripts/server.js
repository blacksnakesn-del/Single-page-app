

const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

// Charger les utilisateurs
app.get('/users', (req, res) => {
  const users = JSON.parse(fs.readFileSync('./data/users.json'));
  res.json(users);
});

// Ajouter un utilisateur
app.post('/users', (req, res) => {
  const users = JSON.parse(fs.readFileSync('./data/users.json'));
  const { prenom, nom, email, password } = req.body;

  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: "Email déjà utilisé" });
  }

  users.push({ prenom, nom, email, password });
  fs.writeFileSync('./data/users.json', JSON.stringify(users, null, 2));
  res.json({ message: "Inscription réussie" });
});

// Vérifier connexion
app.post('/login', (req, res) => {
  const users = JSON.parse(fs.readFileSync('./data/users.json'));
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.json({ message: "Connexion réussie", user });
  } else {
    res.status(401).json({ message: "Email ou mot de passe incorrect" });
  }
});

app.listen(3000, () => console.log("Serveur démarré sur http://localhost:3000"));
  