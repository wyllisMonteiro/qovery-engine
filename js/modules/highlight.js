const highlight = require('highlightjs/highlight.pack.min.js');

module.exports = {

    rust: function() {
        const code = `
        let engine = Engine::new(
            context, // parameters
            local_docker, // initialize Docker as a Build Platform
            ecr, // initialize Elastic Container Registry
            aws, // initialize AWS account
            cloudflare, // initialize Cloudflare as DNS Nameservers
        );
        
        let session = match engine.session() {
            Ok(session) => session, // get the session
            Err(config_error) => panic!("configuration error {:?}", config_error),
        };
        
        let mut tx = session.transaction();
        
        // create EKS (AWS managed Kubernetes cluster)
        tx.create_kubernetes(&eks);
        
        // create the infrastructure and wait for the result
        match tx.commit() { 
            TransactionResult::Ok => println!("OK"),
            TransactionResult::Rollback(commit_err) => println!("ERROR but rollback OK"), 
            TransactionResult::UnrecoverableError(commit_err, rollback_err) => println!("FATAL ERROR")
        };
        `;
        document.getElementById("rust").append(code)
        highlight.initHighlightingOnLoad()

    }
}