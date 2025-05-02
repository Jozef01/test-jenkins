pipeline {
  agent {
    docker {
     image 'node:lts-alpine'
    }

  stages {
    stage('test') {
      steps {
        sh '''
          node -v
          npm -v
          npm install
          npm jest
        '''
      }
    }
  }
  }
