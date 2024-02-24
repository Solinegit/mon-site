# WebDev101 Telecom Paris par Rémi SHARROCK

:memo: [éditer cette page](https://gitlab.com/-/ide/project/webdev101/webdev101.gitlab.io/edit/main/-/README.md)

Site contenant les travaux pratiques du cours Typescript pour le développement web en première année à Telecom Paris par Rémi SHARROCK.

# site pédagogique

Le site pédagogique est hébergé sur eCampus, il contient des ressources théoriques pour vous aider à réaliser les travaux pratiques, des modalités d'organisation, des activités d'évaluation, des annonces, un forum, et des liens vers des ressources externes pour approfondir vos connaissances. Vous pouvez y accéder ici :
https://ecampus.paris-saclay.fr/course/view.php?id=118933

# Objectifs pédagogiques

1. Installer, configurer et utiliser un environnement de développement complet: IDE, outillage nécessaire comme tsconfig, npm, IA d'aide au codage, devtools et debugger, test, linter.

2. Développer en TypeScript en utilisant les concepts de programmation orientée objet (interfaces, abstraction, héritage, polymorphisme, generics) en appliquant les principes SOLID et les fondamentaux de la programmation fonctionnelle (fonctions fléchées, fonctions outils, opérations asynchrones) ou événementielle (exceptions, eventlisteners).

3. Intégrer des technologies web: HTML, CSS (flexbox), HTTP CRUD pour les API REST (avec et sans authentification), contourner les restrictions CORS avec un proxy.

4. Gérer le développement de projets logiciels avec le contrôle de version via Git et collaborer sur des forges telles que gitlab.telecom-paris.fr afin de réaliser une application de visualisation de données, utilisant une API (choisie, par exemple, sur data.gouv.fr), avec un focus sur l'analyse de données liées aux transitions sociales et environnementales.

# Modalités d'évaluation

Voici les modalités d'évaluation de cette unité d'enseignement:

1. Micro-projet 2048 : Les étudiants réaliseront un micro-projet basé sur le jeu 2048. Ils devront soumettre leur code accompagné d'un enregistrement vidéo d'explication de moins de 2 minutes. Cette vidéo devra détailler les choix de conception et les fonctionnalités implémentées. Cette partie est évaluée sur 1 point.
   
2. Exercices des travaux pratiques : Les étudiants réaliseront tous les exercices des travaux pratiques qui seront remis. Cette partie est évaluée sur 1 point.

3. Site internet de démonstration : Les étudiants devront créer un site internet regroupant toutes leurs productions: vidéos d'explication et de démonstration, applications développées: exercices des travaux pratiques, micro-projet, projet final. Ce site sera évalué sur sa fonctionnalité (tous les exercices doivent être fonctionnels), son design, et la facilité d'accès aux différents projets. Cette partie est évaluée sur 1 point.

4. Projet de développement final: Les étudiants travailleront sur un projet de développement plus important, nécessitant une application approfondie des connaissances acquises. L'évaluation portera sur la qualité du code rendu (3 points / 8), la fonctionnalité de l'application développée (2 points / 8), ainsi qu'une vidéo de démonstration de moins de 2 minutes (1 point / 8). La présentation entre pairs et le rendu sur la forge gitlab.telecom-paris.fr incluant l'intégralité du code source et de l'historique de modification après chaque séance de travail seront également pris en compte (1 point / 8). La documentation précise pour les utilisateurs (comment installer et utiliser l'application) et pour les développeurs (comment configurer tout l'environnement de développement pour qu'un autre contributeur puisse contribuer) devront être présents (1 point / 8). Cette partie est évaluée sur un total de 8 points.

5. Examen final sous forme de QCM : Un examen final composé de questions à choix multiples (QCM) portant sur l'ensemble du programme de l'unité d'enseignement. Les questions couvriront les aspects théoriques et pratiques de TypeScript, par rapport à tous les objectifs pédagogiques de l'unité d'enseignement. Cet examen est évalué sur 9 points.

Ces modalités d'évaluation sont conçues pour apprécier à la fois la compréhension théorique des étudiants et leur capacité à appliquer ces connaissances dans des projets pratiques, tout en valorisant la communication et la présentation de leurs travaux.

# code source du site

Le code source du site sur lequel vous vous trouvez actuellement (pour les travaux pratiques) est intégralement disponible sur plusieurs dépôts GIT ici :
https://gitlab.com/webdev101/

# contributions au site

Vous êtes invités à contribuer à ce site, en proposant des améliorations, des corrections, des ajouts, etc. Pour cela, vous pouvez cloner le dépôt de code source, apporter vos modifications, et soumettre une merge request. Pour plus d'informations sur comment contribuer à un projet hébergé sur gitlab, consultez la documentation ici : https://docs.gitlab.com/ee/user/project/repository/forking_workflow.html

Parfois, vous trouverez un bouton "éditer cette page", qui vous permettra de modifier directement le contenu de la page depuis votre navigateur, sans avoir à cloner le dépôt de code source, et qui vous permettra de soumettre une merge request directement depuis votre navigateur.

# préconisation de l'utilisation de l'éditeur Visual Studio Code

Nous vous recommandons d'utiliser l'éditeur de code source Visual Studio Code (VSCode) pour les travaux pratiques. C'est un éditeur de code source très populaire, qui est gratuit, open source, et qui est très bien intégré avec GIT, l'outil de gestion de version de code source que nous allons utiliser pour les travaux pratiques. Il est aussi très bien intégré avec l'outil d'Intelligence Artificielle que nous allons utiliser pour les travaux pratiques, github copilot. Pour l'installer, suivez les instructions ici : https://code.visualstudio.com/download

# utilisation de l'IA durant les travaux pratiques

Pour simuler les conditions d'un environnement de travail professionnel avant-gardiste, nous allons utiliser un outil d'Intelligence Artificielle pour vous aider à résoudre les problèmes que vous rencontrerez, pour vous guider lors de vos développements. Cet outil est un chatbot intégré à Visual Studio Code, qui s'appelle github copilot. Il est basé sur l'IA de OpenAI (chat-gpt), et il est capable de générer du code en fonction de ce que vous lui demandez. Il est aussi capable de comprendre le contexte de votre code, et de vous proposer des solutions pour le compléter, de vous proposer des explications sur des concepts, de vous aider à écrire des tests, générer la documentation, comprendre des erreurs, refactoriser du code (c'est à dire le réécrire pour le rendre plus lisible, plus performant, plus maintenable), etc.

La première chose à faire est de s'inscrire pour obtenir une licence gratuite pour les étudiants sur github education https://education.github.com/pack#offers, et de l'installer dans Visual Studio Code avec le plugin "github copilot", pour cela suivez les instructions ici : https://marketplace.visualstudio.com/items?itemName=GitHub.copilot

Le guide d'utilisation de github copilot dans Visual Studio Code est disponible ici : https://code.visualstudio.com/docs/copilot/overview

# utilisation de GIT intégré à visual studio code et de la forge gitlab de Télécom Paris

Pour travailler sur les TP, vous aurez besoin de GIT, un outil de gestion de version de code source. Pour l'installer, suivez les instructions ici : https://git-scm.com/book/fr/v2/D%C3%A9marrage-rapide-Installation-de-Git

La gestion de version avec git est intégrée à visual studio code (VSCode), la documentation est disponible ici : https://code.visualstudio.com/docs/sourcecontrol/overview

Vous devrez utiliser la forge https://gitlab.telecom-paris.fr pour héberger vos dépôts de code source, votre enseignant va vous créer un dépôt pour ce cours sur cette forge.
