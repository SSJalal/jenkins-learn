pipeline {
  agent {
    docker {
      image 'node:18'
    }
  }
  stages {
    stage('checkout code') {
      steps {
        git(url: 'https://github.com/SSJalal/jenkins-learn', branch: 'main')
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
