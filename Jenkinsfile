pipeline {
  agent {
    docker {
      image 'node:18'
      reuseNode true
    }
  }

  stages {
    stage('Checkout code') {
      steps {
        checkout scm
      }
    }

    stage('Install & Test') {
      steps {
        sh 'npm install'
        sh 'npm test'
      }
    }
  }
}
