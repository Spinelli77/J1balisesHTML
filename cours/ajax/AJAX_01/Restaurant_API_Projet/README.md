## Objectifs

Gros projet aujourd'hui ! On va voir les différentes requêtes existantes (GET - POST - PATCH - DELETE) au travers de la création d'une
petite application web complète.

  
Pour ce faire, on va se rendre dans la RestaurantAPI, ici: 

- *https://wf3-restaurant-api.herokuapp.com/api/v1*

## Documentation

#### Objet Restaurant : 

exemple : 

```
{
  id: 2,
  name: "Le Coq",
  address: "5 rue de la Garenne"
}
  
```

#### Requêtes possible

##### Voir la liste de tous les restaurants : ``(GET restaurants)``
- **GET** *https://wf3-restaurant-api.herokuapp.com/api/v1/restaurants.json*
- **Réponse :** Array (tableau) d'objets restaurants
- exemple :
````
[
  {
    id: 2,
    name: "Le Coq",
    address: "5 rue de la Garenne"
  },
  {
    id: 5,
    name: "Le Magma",
    address: "30 rue des Corbeaux"
  },
  {
    id: 2,
    name: "La jambe de bois",
    address: "11 rue du Mercenaire"
  }
]
````


##### Créer un restaurant : ``(POST restaurants)``
- **POST** *https://wf3-restaurant-api.herokuapp.com/api/v1/restaurants*
- **body :**
````
  {
    restaurant: {
      name: restaurantName,
      address: restaurantAddress
    }
  }
````
- **Réponse :** Object restaurant *(cf exemple)*


##### Voir un seul restaurant : ``(GET restaurant)``
- **GET** *https://wf3-restaurant-api.herokuapp.com/api/v1/restaurant/{{RESTAURANT_ID}}.json*
- **Réponse :** Object restaurant *(cf exemple)*


##### Modifier un restaurant : ``(PATCH restaurant)``
- **PATCH** *https://wf3-restaurant-api.herokuapp.com/api/v1/restaurants/{{RESTAURANT_ID}}.json*
- **body :**
````
  {
    restaurant: {
      name: restaurantName,
      address: restaurantAddress
    }
  }
````
- **Réponse :** Object restaurant *(cf exemple)*


##### Supprimer un restaurant : ``(DELETE restaurant)``
- **DELETE** *https://wf3-restaurant-api.herokuapp.com/api/v1/restaurants/{{RESTAURANT_ID}}.json*
- **Réponse :** Array (tableau) d'objets restaurants



## Consigne

Implémenter en AJAX les fonctionnalité suivantes :

- Lister tous les restaurants disponible dans l'API (dans l'encadré blanc)
- Créer des restaurants (la liste des restaurants devra automatiquement se mettre à jour une fois le restaurant créé)
- Supprimer des restaurants avec l'id, il devra se supprimer de la liste automatiquement
- Modifier des restaurants (le restaurant devra automatiquement se mettre à jour une fois modifié)


Bon courage ;)


**Remarque :**

Pour ceux qui ont un peu plus de mal, remplacer le HTML du #restaurants-container par
````
<div class="collapse border-2 border-red-800 rounded-xl mt-3">
  <div class="collapse-title bg-gray-900 text-primary-content">
      <h2 class="text-xl">
        Restaurant <small class="font-bold">#1</small> : Lyon
      </h2>
  </div>
</div>
````













