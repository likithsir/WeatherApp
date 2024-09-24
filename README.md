# Project Overview

This repository contains the infrastructure and application setup for a weather application, including Terraform scripts, Kubernetes configurations, and the frontend and backend components.

## Folders

### terraform
This folder contains Terraform configuration files used to provision the necessary infrastructure on AWS. It allows for automated resource management and deployment.

### k8s
This folder includes Kubernetes  files for deploying the weather application's frontend and backend services. 

### weather-app-frontend
This folder holds the frontend application code, built with React. It interacts with the backend service to fetch and display weather data.

### backend
This folder contains the backend service code, developed with Node.js. It provides the API endpoints for retrieving weather information based on user input.

## Commands

### Initialize Terraform
Navigate to the terraform directory and run the following command to initialize the Terraform configuration:
```bash
cd terraform
terraform init
terraform validate
terraform apply 
```

**OUTPUT** : Terraform will display a plan of changes to be applied and prompt for confirmation. After confirmation, it provisions resources on AWS.

### Deploy Kubernetes

Navigate to the k8s directory and apply the Kubernetes configurations using:

```bash
kubectly apply -f frontend-service.yml
kubectly apply -f backend-service.yml
kubectly apply -f db-service.yml
```

**Output** : Kubernetes creates the services and deployments as defined in the files

### Access the Application


After deployment, you can access the weather application through the Load Balancer URL:

**Output** : The weather application interface should be visible, allowing you to input city names to fetch weather data.