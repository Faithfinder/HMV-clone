pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        git(url: 'https://github.com/Faithfinder/media-store-prototype.git', branch: 'master', poll: true)
        sh 'yarn'
      }
    }

  }
}