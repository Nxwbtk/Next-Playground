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
                sh 'cd app && pnpm install'
            }
        }

        stage('Build') {
            steps {
                sh 'cd app && pnpm run build'
            }
        }
    }
}