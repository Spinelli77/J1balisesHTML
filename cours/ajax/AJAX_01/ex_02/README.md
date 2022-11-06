lea
## Objectifs

Ceci est notre premier exercice AJAX. Nous allons créer un dictionnaire en ligne.

Dès que vous soumetter un mot dans le formulaire, vous obtenez la définition de ce mot. (Attention aux gestions d'erreurs)

  

##### C'est toujours le même procédé **(3 étapes)** :

-  **Sélectionner** l'élément avec lequel vous voulez intéragir.

-  **Écoutez** (listen) l'évènement sur l'élément.

- Écrivez la fonction de **callback** (le code qui s'executera lorsque l'évènement aura lieu)

- Le callback devra contenir la fonction ``fetch`` en Javascript

  

#### Consignes

  

Lancez votre serveur local

``yarn install`` (ou ``npm install``)

``yarn start`` (ou ``npm start``)

Ouvrez ensuite le `localhost:1234`

  

Vous devrez voir un formulaire.

  

L'objectif de cette exercice est d'afficher la définition du mot que l'utilisateur à soumis. *int : submit*.
Pour cela, on va utiliser la **Dictionary API** *(disponible ici : https://dictionaryapi.dev/)*
Et plus particulièrement ce lien : *https://api.dictionaryapi.dev/api/v2/entries/en/:word* (remplacez ":word" par n'importe quel mot et vous aurez un jolie format JSON avec toutes les infos nécessaire).

*Exemple : Si vous cliquez sur ce lien : https://api.dictionaryapi.dev/api/v2/entries/en/goodbye, vous aurez la jolie définition de ce mot au format JSON, contenant la phonétique, des exemples d'utilisation etc... Il vous faudra donc ``fetch`` ces urls **(/!\ les urls varieront en fonction du mot entré dans le formulaire)** pour donner une définition convaincante à l'utilisateur.*

#### Étapes
- Dans un premier temps, **vous n'afficherez qu'une seule définition par mot entré dans le formulaire (le premier élément de *meaning* dans le résultat JSON)** (*on y va mollo*😉)
- On créer une **fonction qui gère les erreurs**, lorsque l'API ne trouve pas la définition du mot.
- Ensuite, **vous afficherez les détails supplémentaire pour ce mot précis** *(sa catégorie grammaticale, sa phonétique, un exemple d'utilisation et ses 5 premiers synonymes)*
- Enfin, **Vous afficherez toutes les définitions que l'API vous renvoie**, avec bien sur les détails supplémentaire.

Par exemple, si vous allez ici : *https://api.dictionaryapi.dev/api/v2/entries/en/pirate* On voit que ``meaning``est une array qui contient 3 objets. Tout devra être affiché sur votre site.

#### Optionnel (pour les plus bouillants)
- On intègre un beau design (*Bootstrap tu coco*🤔)
- On trie en fonction des catégories grammaticales (*Tous les adverbes dans le même panier*)
- On ajoute une option pour écouter l'audio du mot qu'on à entré (*Google Trad en sueur tqt*)

### Ressources :
https://github.com/meetDeveloper/freeDictionaryAPI (documentation de l'API sur Github)
https://dictionaryapi.dev/ (lien du site DictionaryAPI)
https://api.dictionaryapi.dev/api/v2/entries/en/:word (lien de l'API)