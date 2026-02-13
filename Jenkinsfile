pipeline {
    agent any
    environment {
        APP_NAME = 'nextjs-app'
        ARTIFACT_DIR = 'artifact'
        VERSION = "${env.GIT_COMMIT.take(7)}-${env.BUILD_NUMBER}"
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                cd app && ls -la && pnpm install
                '''
            }
        }

        stage('Build') {
            steps {
                sh '''
                cd app && pnpm run build
                '''
            }
        }

        stage('Create Artifact') {
            steps {
                sh '''
                rm -rf ${ARTIFACT_DIR}
                mkdir -p ${ARTIFACT_DIR}/app

                cd app && cp -r .next public node_modules package.json ../${ARTIFACT_DIR}/app/
                echo ${VERSION} > ../${ARTIFACT_DIR}/VERSION
                '''
            }
        }

        stage('Pack Artifact') {
            steps {
                sh '''
                tar -czf ${APP_NAME}-${VERSION}.tar.gz ${ARTIFACT_DIR}
                '''
            }
        }

        stage('Deploy to Prod') {
            steps {
                sh '''
                ls -la
                rsync -az ${APP_NAME}-${VERSION}.tar.gz vagrant@192.168.56.10:/opt/apps/releases/${VERSION}
                '''
            }
        }

        stage('Activate Release') {
            steps {
                sh '''
                ssh vagrant@192.168.56.10 "
                    set -e &&
                    cd /opt/apps &&
                    tar -xzf releases/${APP_NAME}-${VERSION}.tar.gz -C releases/${VERSION} &&
                    ln -sfn releases/${VERSION}/${ARTIFACT_DIR} current &&
                    pm2 startOrReload /opt/apps/scripts/ecosystem.config.js
                "
                '''
            }
        }
    }
}
