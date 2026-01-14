pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install & Test') {
      agent {
        docker {
          image 'node:18'
          reuseNode true
        }
      }
      steps {
        sh 'npm install'
        sh 'npm test'
      }
    }
  }
}
