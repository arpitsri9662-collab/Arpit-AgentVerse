🧠 Multi-Agent AI Platform powered by MERN, LangGraph, RAG & Microservices

svg

Arpit-AgentVerse is a full-stack multi-agent AI platform that brings multiple specialized AI capabilities together into one intelligent workspace.

Built with React, Node.js, Express, MongoDB, Redis, LangChain, LangGraph, RAG and Microservices, the platform intelligently routes user requests to specialized AI agents for conversations, coding, document analysis, web search, vision, presentations and more.

One platform. Multiple AI agents. One intelligent workflow.

💡 Engineering Highlights

🧠 Multi-agent orchestration with LangGraph

🔎 RAG pipeline with embeddings and vector similarity search

📄 PDF intelligence for document-grounded Q&A

👨‍💻 Coding workflows with an integrated developer experience

👁️ Vision and image workflows

🧩 Microservice architecture for independent service deployment

⚡ Redis-backed sessions and caching

💳 Credit-based billing with Razorpay integration

🔐 Firebase + HTTP-only session authentication

🐳 Dockerized production services

☁️ AWS ECS + ALB + ECR + CloudWatch deployment

📊 Production-oriented cloud architecture

🌐 Live Demo

svg

🚀 Production Application

Frontend: https://agentverse-frontend.vercel.app

AWS Backend / API Gateway:
http://agentverse-lb-1755673582.ap-south-1.elb.amazonaws.com

GitHub Repository:
https://github.com/arpitsri9662-collab/Arpit-AgentVerse

☁️ Production Backend Services

Service

Platform

Status

🎨 Frontend

Vercel

🟢 Live

🚪 API Gateway

AWS ECS + Application Load Balancer

🟢 Live

🔐 Auth Service

AWS ECS

🟢 Live

💬 Chat Service

AWS ECS

🟢 Live

🤖 Agent Service

AWS ECS

🟢 Live

💳 Billing Service

AWS ECS

🟢 Live

⚡ Redis

AWS ElastiCache

🟢 Connected

🍃 MongoDB

MongoDB Atlas

🟢 Connected

🔎 Vector Database

Qdrant Cloud

🟢 Connected

🔥 Authentication

Firebase

🟢 Active

✨ Features

svg

🤖 Multi-Agent AI

svg

Specialized AI agents for different tasks

Intelligent request routing

LangGraph-based orchestration

Context-aware conversations

Modular agent architecture

Multiple LLM providers

Agent-specific credit consumption

💬 AI Chat

svg

ChatGPT-inspired interface

Persistent conversations

Conversation history

Markdown rendering

AI-generated responses

Animated AI thinking state

Backend conversation persistence

👨‍💻 Coding Agent

svg

Programming assistance

Code generation

Code explanation

Debugging assistance

Developer-focused AI workflows

Monaco Editor integration

📄 PDF & RAG

svg

PDF document upload

Document analysis

Document-based question answering

Text extraction

Document chunking

Embedding generation

Semantic vector search

Context-aware responses

🔎 AI Search

svg

Web search integration

Real-time information retrieval

Search-powered AI responses

Research-oriented workflows

AI-assisted web research

👁️ Vision Agent

svg

Image understanding

Visual question answering

Image analysis

AI-powered visual interpretation

📊 PPT Agent

svg

AI-powered presentation generation

Structured slide creation

Automated presentation content

AI-assisted slide workflows

💳 Credits & Billing

svg

Usage-based credit system

Free credits for users

Agent-specific credit costs

Automatic credit deduction

Subscription architecture

Razorpay integration

🔐 Authentication

svg

Firebase Authentication

Google Sign-In

Firebase ID token verification

HTTP-only session cookies

Redis-backed sessions

Protected API routes

Production cross-origin authentication

⚡ Microservices

svg

The backend is divided into independent services:

API Gateway

Authentication Service

Chat Service

Agent Service

Billing Service

Each service can be developed, deployed and scaled independently.

🏗️ System Architecture

svg

                         ┌──────────────────────┐
                         │    React + Vite      │
                         │      Frontend        │
                         │       Vercel         │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │     API Gateway      │
                         │ AWS ECS + ALB        │
                         └──────────┬───────────┘
                                    │
              ┌─────────────────────┼─────────────────────┐
              │                     │                     │
              ▼                     ▼                     ▼
       ┌─────────────┐       ┌─────────────┐       ┌─────────────┐
       │    Auth     │       │    Chat     │       │   Billing   │
       │   Service   │       │   Service   │       │   Service   │
       │   Render    │       │   Render    │       │   Render    │
       └──────┬──────┘       └──────┬──────┘       └─────────────┘
              │                     │
              │                     │
              └──────────────┬──────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │  Agent Service   │
                    │    AWS ECS     │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │    LangGraph     │
                    │    Supervisor    │
                    └────────┬─────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              ▼              ▼              ▼
        Chat Agent     Coding Agent    Search Agent
              │              │              │
              └──────────────┼──────────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              ▼              ▼              ▼
          PDF/RAG        Vision Agent     PPT Agent
              │
              ▼
        Vector Database
              │
              ▼
          Embeddings


svg

☁️ Production Architecture

svg

Arpit-AgentVerse is deployed using a distributed cloud architecture.

                       USER
                         │
                         ▼
              ┌────────────────────┐
              │   Vercel Frontend  │
              │   React + Vite     │
              └─────────┬──────────┘
                        │
                        ▼
              ┌────────────────────┐
              │   Render Gateway   │
              └─────────┬──────────┘
                        │
          ┌─────────────┼─────────────┐
          │             │             │
          ▼             ▼             ▼
       AUTH           CHAT         BILLING
       Render         Render        Render
          │             │
          └──────┬──────┘
                 │
                 ▼
             AGENT
             Render
                 │
                 ▼
           LangGraph
           Supervisor
                 │
       ┌─────────┼─────────┐
       ▼         ▼         ▼
     Chat      Coding    Search
       │         │         │
       └─────────┼─────────┘
                 │
        ┌────────┼────────┐
        ▼        ▼        ▼
       PDF     Vision     PPT
        │
        ▼
    Vector Search
        │
        ▼
       LLM
        │
        ▼
    AI Response
        │
        ▼
      User


svg

Production Infrastructure

svg

Component

Technology

Frontend Hosting

Vercel

Backend Hosting

AWS ECS

Load Balancing

AWS Application Load Balancer

Container Registry

Amazon ECR

Compute Region

AWS ap-south-1 (Mumbai)

Database

MongoDB Atlas

Session Store

AWS ElastiCache for Redis

Vector Database

Qdrant Cloud

Authentication

Firebase

AI Orchestration

LangGraph

LLM Framework

LangChain

Search

Tavily

Payments

Razorpay

Containerization

Docker

Logging

Amazon CloudWatch

🧠 AI Agent Architecture

svg

Arpit-AgentVerse uses specialized agents instead of relying on a single AI workflow.

AgentResponsibility



💬 Chat Agent

General conversations

👨‍💻 Coding Agent

Programming and debugging

📄 PDF Agent

PDF understanding

🧠 PDF RAG Agent

Retrieval-augmented document Q&A

🔎 Search Agent

Web search and research

👁️ Vision Agent

Image understanding

📊 PPT Agent

Presentation generation

🖼️ Image Analyzer

Image analysis

🔄 Agent Workflow

svg

                         User Query
                              │
                              ▼
                       React Frontend
                              │
                              ▼
                         API Gateway
                              │
                              ▼
                       Authentication
                              │
                              ▼
                       Credit Validation
                              │
                              ▼
                       Agent Service
                              │
                              ▼
                     LangGraph Router
                              │
          ┌───────────────────┼───────────────────┐
          │                   │                   │
          ▼                   ▼                   ▼
       Chat Agent         Coding Agent       Search Agent
          │                   │                   │
          └───────────────────┼───────────────────┘
                              │
          ┌───────────────────┼───────────────────┐
          │                   │                   │
          ▼                   ▼                   ▼
       PDF Agent          Vision Agent        PPT Agent
                              │
                              ▼
                        LLM / RAG / Search
                              │
                              ▼
                         AI Response
                              │
                              ▼
                         Chat Service
                              │
                              ▼
                         User Interface


svg

🧠 RAG Pipeline

svg

Arpit-AgentVerse supports Retrieval-Augmented Generation for document-based AI workflows.

PDF Document
     │
     ▼
Document Processing
     │
     ▼
Text Extraction
     │
     ▼
Chunking
     │
     ▼
Embedding Generation
     │
     ▼
Vector Database
     │
     ▼
User Query
     │
     ▼
Similarity Search
     │
     ▼
Relevant Context
     │
     ▼
Large Language Model
     │
     ▼
Context-Aware Response


svg

🔐 Authentication Flow

svg

User
 │
 ▼
Firebase Authentication
 │
 ▼
Google Sign-In
 │
 ▼
Firebase ID Token
 │
 ▼
API Gateway
 │
 ▼
Session Validation
 │
 ▼
Redis Session
 │
 ▼
Protected Microservice


svg

Production authentication uses:

Firebase Authentication

Google OAuth

HTTP-only cookies

Secure cookies in production

Redis-backed sessions

Protected Gateway routes

💳 Credit System

svg

Arpit-AgentVerse uses a usage-based credit system.

AgentCredit Cost



💬 Chat

1

🔎 Search

5

👨‍💻 Coding

10

📄 PDF

10

📊 PPT

10

👁️ Vision

10

Credit Flow

svg

User Request
     │
     ▼
API Gateway
     │
     ▼
Agent Service
     │
     ▼
Auth Service
     │
     ▼
Check User Credits
     │
     ├── Insufficient ──► Reject Request
     │
     ▼
Deduct Credits
     │
     ▼
Execute AI Agent
     │
     ▼
Generate Response


svg

Credits are deducted before AI execution according to the selected agent.

🛠️ Tech Stack

svg

🎨 Frontend

svg

React 19

Vite

Redux Toolkit

Tailwind CSS

Firebase Authentication

Axios

Monaco Editor

React Markdown

Lucide Icons

Motion

⚙️ Backend

svg

Node.js

Express.js

REST APIs

API Gateway

Microservices Architecture

Middleware-based authentication

Axios-based service communication

🤖 AI & LLM

svg

LangChain

LangGraph

Retrieval-Augmented Generation

Google Gemini

Groq

OpenRouter

Vector Embeddings

Tavily Search

🗄️ Database & Storage

svg

MongoDB

MongoDB Atlas

Mongoose

Redis

Upstash Redis

Vector Database

🔥 Authentication

svg

Firebase Authentication

Firebase Admin SDK

Google Sign-In

Redis Sessions

HTTP-only Cookies

🐳 DevOps & Deployment

svg

Docker

Docker Compose

Git

GitHub

Render

Vercel

Environment-based configuration

💳 Payments

svg

Razorpay

Credit-based usage system

📁 Project Structure

svg

Arpit-AgentVerse/
│
├── frontend/
│   │
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── features/
│   │   ├── pages/
│   │   ├── redux/
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   │
│   ├── gateway/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── utils/
│   │   └── index.js
│   │
│   ├── services/
│   │   │
│   │   ├── auth/
│   │   │   ├── config/
│   │   │   ├── controllers/
│   │   │   ├── models/
│   │   │   ├── routes/
│   │   │   └── index.js
│   │   │
│   │   ├── chat/
│   │   │   ├── config/
│   │   │   ├── controllers/
│   │   │   ├── models/
│   │   │   ├── routes/
│   │   │   └── index.js
│   │   │
│   │   ├── agent/
│   │   │   ├── agents/
│   │   │   ├── config/
│   │   │   ├── controllers/
│   │   │   ├── graph/
│   │   │   ├── routes/
│   │   │   └── index.js
│   │   │
│   │   └── billing/
│   │       ├── config/
│   │       ├── controllers/
│   │       ├── models/
│   │       ├── routes/
│   │       └── index.js
│   │
│   ├── shared/
│   │   └── redis/
│   │
│   ├── docker-compose.yml
│   └── package.json
│
├── .gitignore
├── LICENSE
└── README.md


svg

🚀 Getting Started

svg

1. Clone the Repository

svg

git clone https://github.com/arpitsri9662-collab/Arpit-AgentVerse.git

cd Arpit-AgentVerse

svg

2. Install Frontend Dependencies

svg

cd frontend

npm install

svg

Start the frontend:

npm run dev

svg

Frontend:

http://localhost:5173


svg

⚙️ Backend Setup

svg

Open another terminal.

cd backend

npm install

svg

Install service dependencies:

cd gateway
npm install

cd ../services/auth
npm install

cd ../chat
npm install

cd ../agent
npm install

cd ../billing
npm install

svg

🐳 Redis with Docker

svg

For local development, Redis can be started using Docker Compose.

From the backend directory:

docker compose up -d redis

svg

Check the running container:

docker ps

svg

Local Redis:

localhost:6379


svg

Production uses Upstash Redis.

🔌 Local Service Ports

svg

ServicePort



🎨 Frontend

5173

🚪 API Gateway

5000

🔐 Auth Service

5001

💬 Chat Service

5002

🤖 Agent Service

5003

💳 Billing Service

5004

⚡ Redis

6379

🍃 MongoDB

27017

🔧 Environment Variables

svg

Environment variables are configured separately for the frontend, gateway and backend services.

Frontend

svg

VITE_SERVER_URL=http://localhost:5000

svg

Gateway

svg

PORT=5000
FRONTEND_URL=http://localhost:5173

AUTH_SERVICE=http://localhost:5001
CHAT_SERVICE=http://localhost:5002
AGENT_SERVICE=http://localhost:5003
BILLING_SERVICE=http://localhost:5004

REDIS_URL=your_redis_url

svg

Auth

svg

PORT=5001

MONGODB_URI=your_mongodb_uri
REDIS_URL=your_redis_url
FIREBASE_SERVICE_ACCOUNT=your_firebase_service_account

svg

Additional environment variables may be required by individual AI agents and integrations.

⚠️ Never commit .env files, API keys, Firebase service-account credentials or private keys to GitHub.

🧪 Development

svg

During local development, the services can be run individually.

Gateway

svg

cd backend/gateway
npm start

svg

Auth

svg

5001


svg

Chat

svg

5002


svg

Agent

svg

5003


svg

Billing

svg

5004


svg

Gateway

svg

5000


svg

Frontend

svg

cd frontend
npm run dev

svg

🔄 Request Flow

svg

A typical request follows this architecture:

React Frontend
      │
      ▼
API Gateway
      │
      ▼
Authentication
      │
      ▼
Credit Validation
      │
      ▼
Agent Service
      │
      ▼
LangGraph Router
      │
      ▼
Specialized Agent
      │
      ▼
LLM / RAG / Search / Vision
      │
      ▼
AI Response
      │
      ▼
Chat Service
      │
      ▼
React Frontend


svg

☁️ Deployment

Arpit-AgentVerse uses a containerized cloud deployment with the frontend hosted on Vercel and the backend microservices running on AWS ECS.

AWS Production Backend

AWS Region

ap-south-1 (Mumbai)

ECS Cluster

Arpit-AgentVerse-AI

The backend is organized as independent microservices and deployed as containers:

                    Internet
                       │
                       ▼
          ┌─────────────────────────┐
          │ AWS Application         │
          │ Load Balancer (ALB)     │
          └────────────┬────────────┘
                       │
                       ▼
          ┌─────────────────────────┐
          │ AWS ECS                 │
          │ Arpit-AgentVerse-AI     │
          └────────────┬────────────┘
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
      Auth           Chat           Agent
      Service        Service        Service
        │              │              │
        └──────────────┼──────────────┘
                       ▼
                   Billing
                   Service

          Supporting Infrastructure
        ┌────────────┼─────────────┐
        ▼            ▼             ▼
   ElastiCache    MongoDB      Qdrant Cloud
      Redis        Atlas

AWS Backend URL

Production API / Load Balancer:

http://agentverse-lb-1755673582.ap-south-1.elb.amazonaws.com

Containerization & Registry

Docker containers for backend services

Amazon ECR for container images

Amazon ECS for production workloads

Application Load Balancer for public HTTP traffic

Amazon CloudWatch for service logs

Redis

Production session/cache infrastructure uses AWS ElastiCache for Redis.

Agent Service

The Agent Service runs specialized LangGraph workflows for:

Chat

Coding

PDF analysis

PDF-RAG

Web search

Vision/image workflows

PPT generation

Image analysis

The production Agent container uses a pinned Node.js runtime for predictable compatibility.

FROM node:20

Pinning the runtime prevents unexpected changes caused by a floating node:latest base image.

Frontend

The React/Vite frontend is currently available at:

https://agentverse-frontend.vercel.app

The frontend communicates with the production backend through the AWS Application Load Balancer.

Deployment Stack

Layer

Technology

Frontend

React 19 + Vite + Vercel

API Gateway

Node.js + Express + AWS ECS

Microservices

AWS ECS

Load Balancer

AWS Application Load Balancer

Container Registry

Amazon ECR

Compute Region

AWS Mumbai (ap-south-1)

Database

MongoDB Atlas

Redis

AWS ElastiCache

Vector Database

Qdrant Cloud

Authentication

Firebase

AI Orchestration

LangGraph

LLM Framework

LangChain

Search

Tavily

Payments

Razorpay

Logs

Amazon CloudWatch

Containers

Docker

🛡️ Security

svg

The project implements several security mechanisms:

Firebase Authentication

Google Sign-In

Firebase ID token verification

Protected API Gateway routes

HTTP-only session cookies

Secure production cookies

Redis session storage

CORS configuration

Environment-based configuration

.gitignore protection for secrets

Microservice-level API separation

Credit validation before AI execution

🔒 Production secrets are stored in hosting-platform environment variables and are not committed to the repository.

🎯 Project Goals

svg

Arpit-AgentVerse was built to explore modern AI application architecture by combining:

MERN
 +
Microservices
 +
LangChain
 +
LangGraph
 +
RAG
 +
Vector Search
 +
Redis
 +
Firebase
 +
Docker
 +
Cloud Deployment


svg

The goal is to build a platform that is not just an AI chatbot, but a multi-agent AI ecosystem capable of selecting and executing the right AI workflow for different types of tasks.

🚧 Future Improvements

svg

Streaming AI responses

More specialized AI agents

Advanced agent memory

Improved RAG pipelines

Multiple vector database providers

Agent marketplace

Team/workspace support

Advanced analytics dashboard

Automated testing

CI/CD pipeline

Rate limiting

Observability and monitoring

Improved production scalability

Advanced billing and subscription management

🤝 Contributing

svg

Contributions, suggestions, feature requests and bug reports are welcome.

Development Workflow

svg

Fork
  │
  ▼
Clone
  │
  ▼
Create Feature Branch
  │
  ▼
Make Changes
  │
  ▼
Test
  │
  ▼
Commit
  │
  ▼
Push
  │
  ▼
Pull Request


svg

📜 License

svg

This project is licensed under the MIT License.

See the LICENSE file for more information.

👨‍💻 Author

svg

Arpit Srivastava

svg

B.Tech Computer Science & Engineering

Interested in:

Full-Stack Development

MERN Stack

Artificial Intelligence

Generative AI

Multi-Agent Systems

Backend Architecture

Cloud & DevOps

GitHub

svg

https://github.com/arpitsri9662

Project Repository

svg

https://github.com/arpitsri9662-collab/Arpit-AgentVerse

⭐ Support

svg

If you find Arpit-AgentVerse interesting or useful, consider giving the repository a ⭐ on GitHub.

🧠 Arpit-AgentVerse

svg

Build agents. Connect intelligence. Create possibilities.

A full-stack multi-agent AI platform built to explore the future of intelligent software systems.
