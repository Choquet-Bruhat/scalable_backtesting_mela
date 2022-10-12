# MLflow Pipelines
MLflow Pipelines is an opinionated framework for structuring MLOps workflows that simplifies and standardizes machine learning application development and productionization. MLflow Pipelines makes it easy for data scientists to follow best practices for creating production-ready ML deliverables, allowing them to focus on developing excellent models. MLflow Pipelines also enables ML engineers and DevOps teams to seamlessly deploy these models to production and incorporate them into applications.

MLflow Pipelines provides production-quality Pipeline Templates for common ML problem types, such as regression & classification, and MLOps tasks, such as batch scoring. Pipelines are structured as git repositories with YAML-based configuration files and Python code, offering developers a declarative approach to ML application development that reduces boilerplate.

MLflow Pipelines also implements a cache-aware executor for Pipeline Steps, ensuring that steps are only executed when associated code or configurations have changed. This enables data scientists, ML engineers, and DevOps teams to iterate very quickly within their domains of expertise. MLflow offers APIs and a CLI for executing pipelines and inspecting their results.

Installation
MLflow Pipelines is available as an extension of the MLflow Python library. You can install MLflow Pipelines from PyPI as follows:

        pip install mlflow[pipelines]  
        conda install -c conda-forge mlflow-pipelines  