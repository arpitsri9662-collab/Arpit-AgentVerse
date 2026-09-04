# 🚀 Arpit-AgentVerse

### 🧠 Multi-Agent AI Platform powered by MERN, LangGraph, RAG & Microservices

**Arpit-AgentVerse** is a full-stack multi-agent AI platform designed to bring multiple specialized AI capabilities together into one intelligent workspace.

Built with **React, Node.js, Express, MongoDB, Redis, LangChain, LangGraph, RAG and microservices**, the platform intelligently routes user requests to specialized AI agents for conversations, coding, document analysis, web search, vision, presentations and more.

> **One platform. Multiple AI agents. One intelligent workflow.**

---

## ✨ Features

### 🤖 Multi-Agent AI

* Specialized AI agents for different tasks
* Intelligent request routing
* LangGraph-based agent orchestration
* Context-aware conversations
* Modular and extensible agent architecture

### 💬 AI Chat

* ChatGPT-inspired interface
* Persistent conversations
* Conversation history
* Markdown rendering
* AI-generated responses
* Animated AI thinking state

### 👨‍💻 Coding Agent

* Programming assistance
* Code generation
* Code explanation
* Debugging assistance
* Monaco Editor integration

### 📄 PDF & RAG

* Upload and analyze PDF documents
* Document-based question answering
* Embedding generation
* Semantic vector search
* Context-aware responses

### 🔎 AI Search

* Web search integration
* Real-time information retrieval
* Search-powered AI responses
* Research-oriented workflows

### 👁️ Vision Agent

* Image understanding
* Visual question answering
* Image analysis
* AI-powered visual interpretation

### 📊 PPT Agent

* AI-powered presentation generation
* Structured slide creation
* Automated content generation

### 💳 Credits & Billing

* Usage-based credit system
* Free credits for users
* Subscription plans
* Razorpay integration
* Credit deduction based on agent usage

### 🔐 Authentication

* Firebase Authentication
* Google Sign-In
* Session-based authorization
* Protected API routes
* Redis-backed sessions

### ⚡ Microservices

The backend is divided into independent services:

* API Gateway
* Authentication Service
* Chat Service
* Agent Service
* Billing Service

This makes the application modular, scalable and easier to maintain.

---

# 🏗️ System Architecture

```text
                         ┌──────────────────┐
                         │   React + Vite   │
                         │    Frontend      │
                         └────────┬─────────┘
                                  │
                                  ▼
                         ┌──────────────────┐
                         │   API Gateway    │
                         │    Port 5000     │
                         └────────┬─────────┘
                                  │
             ┌────────────────────┼────────────────────┐
             │                    │                    │
             ▼                    ▼                    ▼
      ┌─────────────┐      ┌─────────────┐      ┌─────────────┐
      │    Auth     │      │    Chat     │      │   Billing   │
      │   Service   │      │   Service   │      │   Service   │
      │   :5001     │      │   :5002     │      │   :5004     │
      └──────┬──────┘      └──────┬──────┘      └─────────────┘
             │                    │
             └────────────┬───────┘
                          │
                          ▼
                  ┌───────────────┐
                  │ Agent Service │
                  │     :5003     │
                  └───────┬───────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │ LangGraph        │
                 │ Supervisor       │
                 └────────┬─────────┘
                          │
          ┌───────────────┼────────────────┐
          │               │                │
          ▼               ▼                ▼
      Chat Agent     Coding Agent      Search Agent
          │               │                │
          ├───────────────┼────────────────┤
          │               │                │
          ▼               ▼                ▼
      PDF/RAG        Vision Agent       PPT Agent
                          │
                          ▼
                  Vector Database
                          │
                          ▼
                    Embeddings
```

---

# 🧠 AI Agent Architecture

Arpit-AgentVerse uses specialized agents rather than relying on a single AI workflow.

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
                       API Gateway
                              │
                              ▼
                       Agent Service
                              │
                              ▼
                     LangGraph Router
                              │
             ┌────────────────┼────────────────┐
             │                │                │
             ▼                ▼                ▼
          Chat            Coding            Search
          Agent            Agent             Agent
             │                │                │
             └────────────────┼────────────────┘
                              │
             ┌────────────────┼────────────────┐
             │                │                │
             ▼                ▼                ▼
           PDF             Vision             PPT
           Agent            Agent            Agent
                              │
                              ▼
                         AI Response
```

---

# 🧠 RAG Pipeline

Arpit-AgentVerse includes Retrieval-Augmented Generation for document-based AI workflows.

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

## 🤖 AI & LLM

* LangChain
* LangGraph
* Retrieval-Augmented Generation
* Google Gemini
* Groq
* OpenRouter
* Vector Embeddings

## 🗄️ Database & Storage

* MongoDB
* Mongoose
* Redis
* Vector Database

## 🐳 DevOps

* Docker
* Docker Compose
* Git
* GitHub

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

Open another terminal:

```bash
cd backend
npm install
```

Install dependencies for each service if required:

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

Arpit-AgentVerse uses Redis for session management and caching.

From the backend directory:

```bash
docker compose up -d redis
```

Check the container:

```bash
docker ps
```

Redis runs on:

```text
localhost:6379
```

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

Create separate `.env` files for the required services.

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
```

### Auth

```env
PORT=5001
MONGODB_URI=mongodb://127.0.0.1:27017/agentverse_auth
```

Additional environment variables may be required depending on the enabled AI agents, database, authentication, search, storage and payment integrations.

> ⚠️ Never commit `.env` files, API keys, private keys or service-account credentials to GitHub.

---

# 🧪 Development

Run the required services individually during development.

Example:

```bash
cd backend/gateway
npm start
```

Then start the individual backend services:

```text
Auth     → 5001
Chat     → 5002
Agent    → 5003
Billing  → 5004
Gateway  → 5000
```

Start the frontend:

```bash
cd frontend
npm run dev
```

---

# 🔄 Request Flow

A typical user request follows this architecture:

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
Agent Service
      │
      ▼
LangGraph Router
      │
      ▼
Specialized AI Agent
      │
      ▼
LLM / RAG / Search / Vision
      │
      ▼
AI Response
      │
      ▼
React Frontend
```

---

# 📊 Credit System

Arpit-AgentVerse uses a usage-based credit model.

| Agent        | Credit Cost |
| ------------ | ----------: |
| 💬 Chat      |           1 |
| 🔎 Search    |           5 |
| 👨‍💻 Coding |          10 |
| 📄 PDF       |          10 |
| 📊 PPT       |          10 |
| 👁️ Vision   |          10 |

Credits are validated and deducted through the backend before performing AI operations.

---

# 🛡️ Security

The project implements several security mechanisms:

* Firebase Authentication
* Protected API Gateway routes
* HTTP-only session cookies
* Redis session storage
* Environment-based configuration
* CORS configuration
* `.gitignore` protection for secrets
* Microservice-level API separation

---

# 🎯 Project Goals

Arpit-AgentVerse was built to explore and demonstrate modern AI application architecture combining:

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
```

The goal is to build a platform that is not just an AI chatbot, but a **multi-agent AI ecosystem** capable of selecting the right agent for different types of tasks.

---

# 🚧 Future Improvements

* [ ] Streaming AI responses
* [ ] More specialized AI agents
* [ ] Advanced agent memory
* [ ] Improved RAG pipelines
* [ ] Multiple vector database providers
* [ ] Agent marketplace
* [ ] Team/workspace support
* [ ] Advanced analytics dashboard
* [ ] Production deployment
* [ ] Automated testing
* [ ] CI/CD pipeline
* [ ] Rate limiting
* [ ] Observability and monitoring

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

https://github.com/arpitsri9662-collab

---

# ⭐ Support

If you find **Arpit-AgentVerse** interesting or useful, consider giving the repository a ⭐ on GitHub.

---

## 🧠 Arpit-AgentVerse

> **Build agents. Connect intelligence. Create possibilities.**

**A full-stack multi-agent AI platform built to explore the future of intelligent software systems.**
