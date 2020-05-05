pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
    stage('Cloning Git') {
        steps {
        checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/swethacts/nodejs_examples.git']]])
      }
    }
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
         sh 'npm test'
      }
    }
  }
  post {
        always {
            junit 'test-reports/**/*.xml'
        }
    }
}