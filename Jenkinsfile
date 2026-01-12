pipeline {
  agent any
  stages {
    stage('checkout code') {
      steps {
        git(url: 'https://github.com/SSJalal/jenkins-learn', branch: 'dev')
      }
    }

    stage('echo') {
      steps {
        sh 'ls -a'
      }
    }

  }
}