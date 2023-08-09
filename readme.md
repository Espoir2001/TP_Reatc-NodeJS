# TP FULLSTACK API de Films


## Description

Ce projet est une Application d'ajout et de listing de film développée sous node js avec express et react . L'Application permet d'ajouter un film et de lister des films L'application utilise une base de données MongoDB pour stocker les informations sur les films.

## Prérequis

Avant de lancer l'application, assurez-vous d'avoir installé Docker sur votre système. Si vous n'avez pas encore installé Docker, vous pouvez le télécharger à partir du site officiel de Docker : [https://www.docker.com/](https://www.docker.com/)



## Lancement

1. Entrez dans le dossier TEST TP :

```bash
cd TEST TP
```

## IMPORTANT
Le back et le front du projet sont dans deux dossiers distinct ( client et server) .Avant de commencer vous trouverez un fichier .env à la racine du projet global.
il vous servira à definir les mots de passe de votre mongodb et les differents ports. port du server et port du server du container. Pour le moment j'ai laissé mes identifiants à moi dedans. Le backend tournera sur le port 3004 du coup.

2. Si vous voulez arreter les anciens containers:
```bash
docker-compose down 
```
3. Lancer les deux containers à la fois à travers le docker compose :
```bash
docker-compose up --build
```

L'application  sera maintenant accessible à l'adresse `http://localhost:3000` sur votre navigateur.

L'API qui fait fonctionner le frontend fournit les endpoints suivants pour l'entité Film par exemple :

-   `/add` : Ajouter un nouveau film à la base de données.
-   `/all` : Lister tous les films enregistrés.

## Auteur

Ce projet a été développé par Oswald Billy Finiss


