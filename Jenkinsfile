pipeline {
    agent any

    environment {
        NETLIFY_SITE_ID = 'AF23EFDSAF232DK2323234AAND'
        NETLIFY_AUTH_TOKEN = credentials['netlify-token']
    }

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:6-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    node -v
                    npm -v
                    npm ci
                    npm install
                    npm run build
                    npm test
                '''
            }
        }

        stage('Test') {
            docker {
                image 'node:22-alpine'
                reuseNode true
            }
            steps {
                sh '''
                    npm run test
                '''
            }
            posts {
                always {
                    junit 'jest-results/junit-xml'
                }
            }
        }

        stage('Deploy') {
            docker {
                image 'node:2-alpine'
                reuseNode true
            }
            steps {
                sh '''
                    npm install netlify-cli
                    node_modules/.bin/netlify -v
                    echo "Deploying to production. Site ID: $NETLIFY_SITE_ID"
                    node_modules/.bin/netlify status
                    node_modules/.bin/netlify deploy -dir=build --prod
                '''
            }
        }
    }
}
