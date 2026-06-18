 

# if [ -z "$1"]; then
#     echo "Usage: Création de Projets";
#     echo "Exemple: Veiller saisir un nom pour votre projet!";
#     exit 1;
# fi

# NAME=$1
# TARGET="$HOME/$NAME"

# echo "Création de $NAME dans $HOME"

# mkdir -p "$TARGET"/{css, src}

# #partie html!
# cat >"$TARGET/index.html"<< 'EOF'
# <!DOCTYPE html>
# <html lang = "fr">
# <head>
#     <meta charset ="UTF-8">
#     <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
#     <title>DOUBI<title>
#     <link rel="stylesheet" href="css/style.css">
# </head>
# <body>

#     <div class="app"></div>

#     <script src="src/app.js"></script>
# </body>
# </html>
# EOF

# #partie css!
# cat > "$TARGET/css/style.css" << 'EOF'
# body { font-family: Arial; margin: 0; background: #F5F5F5; }
# header { background: #0A3D62; color: white; padding: 1rem }
# .card { background: white; padding: 1rem; margin: 1rem; border-radius: 8px; }
# .btn { background: #0A3D62; color: white; border: none; padding: 10px 20px; cursor: pointer; }
# input { width: 100%; padding: 8px; margin: 8px 0px; box-sizing: border-box; }
# EOF

# #partie js!
# cat >"$TARGET/src/app.js"<< 'EOF'
# const page = {
#     login = () => `
#         <header><h2>DOUBI</h2></header>
#         <div class="card" style="max-width: 400px; margin: 2rem auto">
#             <h1>BIENVENUE CHEZ DOUBI</h1>
#             <input type="email" placeholder="email">
#             <input type="password" placeholder="password">
#             <button class="btn" onclick="navigate('accueil')" style="width: 100%">Se Connecter</button>
#         </div>
#     `,
#     accueil: () => `
#         <header>
#             <h1>DOUBI</h1>
#             <button class="btn-back" onclick="navigate('login')" style="float: right;">Déconection</button>
#         </header>
#         <div style="padding: 2rem">
#             <h1>Nos Services!</h1>
#             <div class="display: flex; gap: 1rem; flex-wrap: wrap;">
#                 <div class=""card><h3>SEN-TOUR</h3><p>Bus inter Urbain</p></div>
#                 <div class=""card><h3>TATA</h3><p>petit déplacement</p></div>
#                 <div class=""card><h3>BADJIENE</h3><p>transport personnel</p></div>
#             </div>
#         </div>
#     `
# }

# function navigate(page) {
#     docuemnt.getElementById('app').innerHTML = pages[page]();
# }

# navigate('login');
# EOF

# echo : "Projets $NAME crée dans $TARGET"
# echo : "Executer dans $TARGET/index.html"