pipeline {
    agent any
    environment {
        PROD_HOST = "192.168.56.10"
        PROD_PATH = "/opt/apps/nextjs-app"
    }
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

        stage('Deploy') {
            steps {
                sshagent(credentials: ['prod-ssh']) {
                    sh """
                    cd app && \
                    rsync -az --delete \
                        --exclude=node_modules \
                        ./ \
                        vagrant@${PROD_HOST}:${PROD_PATH}

                    ssh vagrant@${PROD_HOST} '
                        cd ${PROD_PATH} &&
                        npm install --production &&
                        pm2 startOrReload ecosystem.config.js
                    '
                    """
                }
            }
        }
    }
}