pipeline {
    agent any

    stages {
        stage('Cloner le code') {
            steps {
                // On clone le repo Github
<<<<<<< HEAD
                git branch: 'main', url: 'https://github.com/jziab/Calculatrice-Jenkins-TP'

=======
>>>>>>> 4f4aad85eb305f7cded6232602fb8117bc665644
            }
        }

        stage('Construire et tester') {
            steps {
                    // Construire l'image
<<<<<<< HEAD
                    bat "docker build --no-cache -t calculatrice:${env.BUILD_ID} ."

                    // Lancer le container → il démarre http-server + exécute test_calculatrice.js
                    bat "docker run --rm calculatrice:${env.BUILD_ID}"
                }
        }
        

        stage('Déployer en production') {
             when{
                expression {currentBuild.result == null || currentBuild.result == 'SUCCESS'}
            }
            steps {
                script{
                    // Poser la question : Voulez-vous déployer ? Oui/Non
                    input(message: 'Voulez-vous déployer en production ?', ok: 'Oui')
                    echo "🚀 Déploiement en cours..."

                    // Supprimer un ancien container prod s’il existe
                    bat 'docker rm -f calculatrice-prod || true'
                    
                    // Lancer l’appli en prod (pas les tests, juste le serveur statique)
                    bat "docker run -d -p 8081:8080 --name calculatrice-prod calculatrice:${env.BUILD_ID} npx http-server -p 8080"
                }
                
=======

                    // Lancer le container → il démarre http-server + exécute test_calculatrice.js
                }
            }
        }

        stage('Déployer en production') {
            steps {
                    // Poser la question : Voulez-vous déployer ? Oui/Non
              
                    // Supprimer un ancien container prod s’il existe
              
                    // Lancer l’appli en prod (pas les tests, juste le serveur statique)
                }
>>>>>>> 4f4aad85eb305f7cded6232602fb8117bc665644
            }
        }
    }
}
