pipeline {
    agent {
        docker {
            image 'node:lts-alpine'
        }
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('test') {
            steps {
                sh '''
                  node -v
                  npm -v
                  npm install
                  npm run test  // <-- Should be 'npm run jest' or 'npx test'
                '''
            }
        }
    }
}
