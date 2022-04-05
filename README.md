# Ionic-web-app
movies
get /movies   vedere tutti i film(query con title e genre)
get /movies/:id  vedere singolo film

auth
post auth/signup    registrazione
post auth/signin    login
get auth/me   prendere dati utente(serve autenticazione)

users
get  users/favorites  vedere i favoriti(serve autenticazione)
post  users/favorites  aggiungere ai favoriti(serve autenticazione)
delete  users/:id/favorites/:movieId  rimuovere dai favoriti(serve autenticazione)

admin
post  admins/:username/movies   aggiungere nuovo film(serve autenticazione admin(campo admin:true nel db))
delete  admins/:username/movies/:movieId  rimuovere film(serve autenticazione admin(campo admin:true nel db))
put   admins/:username/user/:username1   dare ad altro utente permessi admin(serve autenticazione admin(campo admin:true nel db))