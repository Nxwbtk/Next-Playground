pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'node -v'
                sh 'cd app'
                sh 'pnpm install'
            }
        }

        stage('Build') {
            steps {
                sh 'pnpm run build'
            }
        }
    }
}