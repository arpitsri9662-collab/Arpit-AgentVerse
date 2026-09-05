# 🚀 Arpit-AgentVerse

### 🧠 Multi-Agent AI Platform powered by MERN, LangGraph, RAG & Microservices

**Arpit-AgentVerse** is a full-stack multi-agent AI platform that brings multiple specialized AI capabilities together into one intelligent workspace.

Built with **React, Node.js, Express, MongoDB, Redis, LangChain, LangGraph, RAG and Microservices**, the platform intelligently routes user requests to specialized AI agents for conversations, coding, document analysis, web search, vision, presentations and more.

> **One platform. Multiple AI agents. One intelligent workflow.**

---

## 🌐 Live Demo

### 🚀 Production Application

**Frontend:**
https://agentverse-frontend.vercel.app

**GitHub Repository:**
https://github.com/arpitsri9662-collab/Arpit-AgentVerse

### ☁️ Production Backend Services

| Service            | Platform      | Status       |
| ------------------ | ------------- | ------------ |
| 🎨 Frontend        | Vercel        | 🟢 Live      |
| 🚪 API Gateway     | Render        | 🟢 Live      |
| 🔐 Auth Service    | Render        | 🟢 Live      |
| 💬 Chat Service    | Render        | 🟢 Live      |
| 🤖 Agent Service   | Render        | 🟢 Live      |
| 💳 Billing Service | Render        | 🟢 Live      |
| 🍃 MongoDB         | MongoDB Atlas | 🟢 Connected |
| ⚡ Redis            | Upstash Redis | 🟢 Connected |
| 🔥 Authentication  | Firebase      | 🟢 Active    |

---

# ✨ Features

## 🤖 Multi-Agent AI

* Specialized AI agents for different tasks
* Intelligent request routing
* LangGraph-based orchestration
* Context-aware conversations
* Modular agent architecture
* Multiple LLM providers
* Agent-specific credit consumption

## 💬 AI Chat

* ChatGPT-inspired interface
* Persistent conversations
* Conversation history
* Markdown rendering
* AI-generated responses
* Animated AI thinking state
* Backend conversation persistence

## 👨‍💻 Coding Agent

* Programming assistance
* Code generation
* Code explanation
* Debugging assistance
* Developer-focused AI workflows
* Monaco Editor integration

## 📄 PDF & RAG

* PDF document upload
* Document analysis
* Document-based question answering
* Text extraction
* Document chunking
* Embedding generation
* Semantic vector search
* Context-aware responses

## 🔎 AI Search

* Web search integration
* Real-time information retrieval
* Search-powered AI responses
* Research-oriented workflows
* AI-assisted web research

## 👁️ Vision Agent

* Image understanding
* Visual question answering
* Image analysis
* AI-powered visual interpretation

## 📊 PPT Agent

* AI-powered presentation generation
* Structured slide creation
* Automated presentation content
* AI-assisted slide workflows

## 💳 Credits & Billing

* Usage-based credit system
* Free credits for users
* Agent-specific credit costs
* Automatic credit deduction
* Subscription architecture
* Razorpay integration

## 🔐 Authentication

* Firebase Authentication
* Google Sign-In
* Firebase ID token verification
* HTTP-only session cookies
* Redis-backed sessions
* Protected API routes
* Production cross-origin authentication

## ⚡ Microservices

The backend is divided into independent services:

* API Gateway
* Authentication Service
* Chat Service
* Agent Service
* Billing Service

Each service can be developed, deployed and scaled independently.

---

# 🏗️ System Architecture

```text
                         ┌──────────────────────┐
                         │    React + Vite      │
                         │      Frontend        │
                         │       Vercel         │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │     API Gateway      │
                         │       Render         │
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
                    │      Render      │
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
```

---

# ☁️ Production Architecture

Arpit-AgentVerse is deployed using a distributed cloud architecture.

```text
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
```

### Production Infrastructure

| Component        | Technology    |
| ---------------- | ------------- |
| Frontend Hosting | Vercel        |
| Backend Hosting  | Render        |
| Database         | MongoDB Atlas |
| Session Store    | Upstash Redis |
| Authentication   | Firebase      |
| AI Orchestration | LangGraph     |
| LLM Framework    | LangChain     |
| Search           | Tavily        |
| Payments         | Razorpay      |
| Containerization | Docker        |

---

# 🧠 AI Agent Architecture

Arpit-AgentVerse uses specialized agents instead of relying on a single AI workflow.

| Agent              | Responsibility                   |
| ------------------ | -------------------------------- |
| 💬 Chat Agent      | General conversations            |
| 👨‍💻 Coding Agent | Programming and debugging        |
| 📄 PDF Agent       | PDF understanding                |
| 🧠 PDF RAG Agent   | Retrieval-augmented document Q&A |
| 🔎 Search Agent    | Web search and research          |
| 👁️ Vision Agent   | Image understanding              |
| 📊 PPT Agent       | Presentation generation          |
| 🖼️ Image Analyzer | Image analysis                   |

---

# 🔄 Agent Workflow

```text
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
```

---

# 🧠 RAG Pipeline

Arpit-AgentVerse supports Retrieval-Augmented Generation for document-based AI workflows.

```text
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
```

---

# 🔐 Authentication Flow

```text
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
```

Production authentication uses:

* Firebase Authentication
* Google OAuth
* HTTP-only cookies
* Secure cookies in production
* Redis-backed sessions
* Protected Gateway routes

---

# 💳 Credit System

Arpit-AgentVerse uses a usage-based credit system.

| Agent        | Credit Cost |
| ------------ | ----------: |
| 💬 Chat      |           1 |
| 🔎 Search    |           5 |
| 👨‍💻 Coding |          10 |
| 📄 PDF       |          10 |
| 📊 PPT       |          10 |
| 👁️ Vision   |          10 |

### Credit Flow

```text
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
```

Credits are deducted **before AI execution** according to the selected agent.

---

# 🛠️ Tech Stack

## 🎨 Frontend

* React 19
* Vite
* Redux Toolkit
* Tailwind CSS
* Firebase Authentication
* Axios
* Monaco Editor
* React Markdown
* Lucide Icons
* Motion

## ⚙️ Backend

* Node.js
* Express.js
* REST APIs
* API Gateway
* Microservices Architecture
* Middleware-based authentication
* Axios-based service communication

## 🤖 AI & LLM

* LangChain
* LangGraph
* Retrieval-Augmented Generation
* Google Gemini
* Groq
* OpenRouter
* Vector Embeddings
* Tavily Search

## 🗄️ Database & Storage

* MongoDB
* MongoDB Atlas
* Mongoose
* Redis
* Upstash Redis
* Vector Database

## 🔥 Authentication

* Firebase Authentication
* Firebase Admin SDK
* Google Sign-In
* Redis Sessions
* HTTP-only Cookies

## 🐳 DevOps & Deployment

* Docker
* Docker Compose
* Git
* GitHub
* Render
* Vercel
* Environment-based configuration

## 💳 Payments

* Razorpay
* Credit-based usage system

---

# 📁 Project Structure

```text
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
```

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/arpitsri9662-collab/Arpit-AgentVerse.git

cd Arpit-AgentVerse
```

---

## 2. Install Frontend Dependencies

```bash
cd frontend

npm install
```

Start the frontend:

```bash
npm run dev
```

Frontend:

```text
http://localhost:5173
```

---

# ⚙️ Backend Setup

Open another terminal.

```bash
cd backend

npm install
```

Install service dependencies:

```bash
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
```

---

# 🐳 Redis with Docker

For local development, Redis can be started using Docker Compose.

From the backend directory:

```bash
docker compose up -d redis
```

Check the running container:

```bash
docker ps
```

Local Redis:

```text
localhost:6379
```

Production uses **Upstash Redis**.

---

# 🔌 Local Service Ports

| Service            |    Port |
| ------------------ | ------: |
| 🎨 Frontend        |  `5173` |
| 🚪 API Gateway     |  `5000` |
| 🔐 Auth Service    |  `5001` |
| 💬 Chat Service    |  `5002` |
| 🤖 Agent Service   |  `5003` |
| 💳 Billing Service |  `5004` |
| ⚡ Redis            |  `6379` |
| 🍃 MongoDB         | `27017` |

---

# 🔧 Environment Variables

Environment variables are configured separately for the frontend, gateway and backend services.

### Frontend

```env
VITE_SERVER_URL=http://localhost:5000
```

### Gateway

```env
PORT=5000
FRONTEND_URL=http://localhost:5173

AUTH_SERVICE=http://localhost:5001
CHAT_SERVICE=http://localhost:5002
AGENT_SERVICE=http://localhost:5003
BILLING_SERVICE=http://localhost:5004

REDIS_URL=your_redis_url
```

### Auth

```env
PORT=5001

MONGODB_URI=your_mongodb_uri
REDIS_URL=your_redis_url
FIREBASE_SERVICE_ACCOUNT=your_firebase_service_account
```

Additional environment variables may be required by individual AI agents and integrations.

> ⚠️ **Never commit `.env` files, API keys, Firebase service-account credentials or private keys to GitHub.**

---

# 🧪 Development

During local development, the services can be run individually.

### Gateway

```bash
cd backend/gateway
npm start
```

### Auth

```text
5001
```

### Chat

```text
5002
```

### Agent

```text
5003
```

### Billing

```text
5004
```

### Gateway

```text
5000
```

### Frontend

```bash
cd frontend
npm run dev
```

---

# 🔄 Request Flow

A typical request follows this architecture:

```text
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
```

---

# ☁️ Deployment

Arpit-AgentVerse is currently deployed using free-tier cloud infrastructure where possible.

### Frontend

**Vercel**

```text
https://agentverse-frontend.vercel.app
```

### Backend

The backend microservices are deployed independently on **Render**:

```text
Gateway
Auth
Chat
Agent
Billing
```

### Database

```text
MongoDB Atlas
```

### Redis

```text
Upstash Redis
```

### Authentication

```text
Firebase Authentication
```

This architecture allows each backend service to be deployed and managed independently.

---

# 🛡️ Security

The project implements several security mechanisms:

* Firebase Authentication
* Google Sign-In
* Firebase ID token verification
* Protected API Gateway routes
* HTTP-only session cookies
* Secure production cookies
* Redis session storage
* CORS configuration
* Environment-based configuration
* `.gitignore` protection for secrets
* Microservice-level API separation
* Credit validation before AI execution

> 🔒 Production secrets are stored in hosting-platform environment variables and are not committed to the repository.

---

# 🎯 Project Goals

Arpit-AgentVerse was built to explore modern AI application architecture by combining:

```text
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
```

The goal is to build a platform that is not just an AI chatbot, but a **multi-agent AI ecosystem** capable of selecting and executing the right AI workflow for different types of tasks.

---

# 🚧 Future Improvements

* Streaming AI responses
* More specialized AI agents
* Advanced agent memory
* Improved RAG pipelines
* Multiple vector database providers
* Agent marketplace
* Team/workspace support
* Advanced analytics dashboard
* Automated testing
* CI/CD pipeline
* Rate limiting
* Observability and monitoring
* Improved production scalability
* Advanced billing and subscription management

---

# 🤝 Contributing

Contributions, suggestions, feature requests and bug reports are welcome.

### Development Workflow

```text
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
```

---

# 📜 License

This project is licensed under the **MIT License**.

See the `LICENSE` file for more information.

---

# 👨‍💻 Author

## Arpit Srivastava

**B.Tech Computer Science & Engineering**

Interested in:

* Full-Stack Development
* MERN Stack
* Artificial Intelligence
* Generative AI
* Multi-Agent Systems
* Backend Architecture
* Cloud & DevOps

### GitHub

https://github.com/arpitsri9662

### Project Repository

https://github.com/arpitsri9662-collab/Arpit-AgentVerse

---

# ⭐ Support

If you find **Arpit-AgentVerse** interesting or useful, consider giving the repository a ⭐ on GitHub.

---

# 🧠 Arpit-AgentVerse

> **Build agents. Connect intelligence. Create possibilities.**

**A full-stack multi-agent AI platform built to explore the future of intelligent software systems.**
