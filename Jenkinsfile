pipeline {
  agent any
  stages {
    stage('checkout code') {
      steps {
        git(url: 'https://github.com/SSJalal/jenkins-learn', branch: 'main')
      }
    }

    stage('install dependency') {
      steps {
        sh '''
          curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
          apt-get install -y nodejs
        '''
      }
    }

    stage('npm') {
      steps {
        sh 'npm install'
        sh 'npm test'
      }
    }
  }
}
