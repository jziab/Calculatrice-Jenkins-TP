FROM selenium/standalone-chrome:latest

USER root

# Installer Node.js 18
RUN apt-get update && apt-get install -y curl gnupg \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de l'application et des tests
COPY . .

# Installer les dépendances nécessaires
RUN npm install selenium-webdriver http-server

# Exposer le port de l'application
EXPOSE 8080

# Lancer le serveur statique puis exécuter les tests
CMD ["sh", "-c",  "npx http-server -p 8080 & sleep 5 && node test_calculatrice.js"]




