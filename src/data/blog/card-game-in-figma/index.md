---
previewImages: ./author.png
author_image: dinesh_img.jpg
author: Fidisys Technologies
bio: We are a digital product design and development company.
title: CI/CD from Github to AWS Ec2 — Complete Nodejs Deployment
date: 2021-12-02T18:30:00.000Z
previewImage: group-494.png
excerpt: In this guide we will build a code deploys setup that takes our commits
  from github repo for our source codes and deploys it automatically on our
  servers. CICD practices in the most simplest form. This guide will focus more
  on CICD practices.
linkdin: https://www.linkedin.com/feed/?trk=homepage-basic_google-one-tap-submit
tags:
  - AWS
  - CI/CD
  - GitHub
seo:
  keywords:
    - gatsby
    - gatsbyjs
    - fidisys
    - web development
    - Chennai Startup
  description: We design and develop beautiful applications, experience and brands
    that breaks the barriers of time and burn into the memories of customers
    love.
  title: Gatsby+Fidisys
---
**What is AWS EC2 Instance?**

EC2 instance is just a virtual server in AWS’s data center. It provides a resizable compute capacity in the cloud. You can quickly scale it up and down as per your requirements changes.

**What is CICD ?**

In this guide we will build a code deploys setup that takes our commits from github repo for our source codes and deploys it automatically on our servers. CICD practices in the most simplest form. This guide will focus more on CICD practices.

This guide assumes that you have an intention of understanding how GitHub can be integrated into code deploy as a source.

![Continuous integration and continuous development.](cicd.png "Continuous integration and continuous development.")





# **Table of Contents:**

1. The Requirements
2. Create IAM Role
3. Create and Launch EC2 Instance
4. Installation of Apache Web
5. Install Mysql Database
6. Install Nodejs and NPM
7. Create Github Repository
8. Create Nodejs Project
9. Configure AWS CodeDeploy Service
10. Running the Complete Pipeline



### **1. The Requirements**

To create the CI/CD pipeline, make sure to create these accounts first:

1. Go to Amazon Web Services Website. ([link](https://aws.amazon.com/))
2. Sign in to your AWS account using Root user if you don’t have account please create
3. For Sign In Click on My Account -> AWS Management Console.
4. Create Github Account. ([link](https://github.com/join))

### **2. Create IAM Role**

There are two types of role we need. one is EC2 instance role and CodeDeploy service role

***(i) EC2 Instance Role:***

IAM role for EC2 instances allows EC2 instances to call AWS services on your behalf and also we need to create one for code deploy

Select the IAM Services in the drop down list of aws services in your console

Go to roles -> create roles -> (choose the service that will use this role)EC2 -> next

In the search box search for ec2 role as in the image below

![create role](create_role.png)

Click tags and fill in the details as you wish. In this case I will chose to leave the tags blank. Click next

Give it a Role name and leave description as it is then click create role.

![Create role with EC2codedeploy](create_role2.png)

Click roles in the left panel and you should find the newly created role in the existing list

Navigate Navigate to the newly created role and click on it.

![Created role summary](created_role.png)

Click to trust relationship tap. (You can customize trust relationships by editing the following access control policy document).

![Policy document](policy_document.png)

Once edited, click on **Update Trust Policy.**

> *We need to repeat the same process again but this time for code deploy to integrate with others aws services.*

***(ii) CodeDeploy Role:***

Select the IAM Service in the drop down list of aws services in your console

Go to roles -> create role > (choose the service that will use this tole) EC2 -> next

In the search box search for codedeploy as in the images below.

Create IAM for codeDeploy.

![Create IAM for codeDeploy.](code_deploy_role.png)

click roles in the left pane and you should find the newly created role in the existing list.

> So we have to set our policy with the same region as our ec2 instance we will be creating hence this syntax. So all we need to do is create our instances in the same region.

Navigate to the newly created role and click on it.

In Permissions tap click to attach policies -> add [AWSCodeDeployFullAccess](https://console.aws.amazon.com/iam/home#/policies/arn%3Aaws%3Aiam%3A%3Aaws%3Apolicy%2FAWSCodeDeployFullAccess)

![Created codeDeploy summary](code_deploy_role_sumary.png)

Click to trust relationship tap. (You can customize trust relationships by editing the following access control policy document.)

![CodeDeploy policy document](code_deploy_role_access_doc.png)

Once edited, click on **Update Trust Policy.**

All set! Now IAM roles are done.