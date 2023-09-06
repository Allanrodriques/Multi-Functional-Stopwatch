@Library('my-shared-library') _             
pipeline{
parameters{

        choice(name: 'action', choices: 'create\ndelete', description: 'Choose create/Destroy')
}

    agent any
    stages{
         stage('Git Checkout'){
                    when { expression {  params.action == 'create' } }
            steps{
            gitCheckout(
                branch: "main",
                url: "https://github.com/Allanrodriques/Multi-Functional-Stopwatch.git"
            )
            }
        }
        // stage('Clone Repository') {
        //     steps {
        //         sh 'git clone https://github.com/Allanrodriques/Multi-Functional-Stopwatch.git'
        //     }
        // }
        // stage('Static code analysis: Sonarqube'){
        //  when { expression {  params.action == 'create' } }
        //     steps{
        //        script{
        //            def SonarQubecredentialsId = 'updated-api'
        //            staticCodeAnalysis(SonarQubecredentialsId)
        //         }
        //     }
        // }
        // stage('Quality Gate Status Check: Sonarqube'){
        //  when { expression {  params.action == 'create' } }
        //     steps{
        //        script{
                   
        //            def SonarQubecredentialsId = 'updated-api'
        //            QualityGateStatus(SonarQubecredentialsId)
        //         }
        //     }
        // }
 
}  
}