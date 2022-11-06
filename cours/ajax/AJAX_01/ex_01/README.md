## Objectifs
Petit exercice de rappel sur le DOM et les events en Javascript.

##### C'est toujours le même procédé **(3 étapes)** :
- **Sélectionner** l'élément avec lequel vous voulez intéragir.
- **Écoutez** (listen) l'évènement sur l'élément.
- Écrivez la fonction de **callback** (le code qui s'executera lorsque l'évènement aura lieu)

#### Consignes

Lancez votre serveur local
``yarn install`` (ou ``npm install``)
``yarn start`` (ou ``npm start``)
Ouvrez ensuite le `localhost:1234`

Vous devrez voir un boutton **"Click me"**.

L'objectif de cet exercice est d'afficher une alerte avec écrit "Thank you" lorsqu'un utilisateur clique dessus.

Une fois ceci fait, ajoutez un deuxième bouton en dessous du premier. Les 2 boutons devront afficher la même alerte ("Thank you") lorsque les utilisateurs cliqueront dessus.
**Remarque :** Ne dupliquez pas le code. Indice : utilisez ``querySelectorAll(CSS_SELECTOR)``




