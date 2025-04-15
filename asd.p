pipeline {
    agent any
    environment {
        GIT_BRANCH_NAME = 'nueva-rama-desde-jenkins'
        GIT_REMOTE = 'origin'
        GIT_MAIN_BRANCH = 'main'
    }
    stages {
        stage('Clonar repositorio') {
            steps {
                git branch: "${env.GIT_MAIN_BRANCH}",
                    credentialsId: 'Jenkins',
                    url: 'https://github.com/kevoEC/Repositorio-IA.git'
            }
        }
        stage('Crear nueva rama') {
            steps {
                bat """
                    git checkout -b %GIT_BRANCH_NAME%
                    git push %GIT_REMOTE% %GIT_BRANCH_NAME%
                """
            }
        }
    }
}
