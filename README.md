# 🚀 AgentVerse AI

> **Multi-Agent AI Platform powered by MERN, LangGraph, RAG, Microservices, Docker & AWS**

AgentVerse AI is a scalable, production-ready multi-agent AI platform that combines modern full-stack development with Retrieval-Augmented Generation (RAG), intelligent agent orchestration, semantic search, and cloud-native microservices.

The platform enables users to interact with specialized AI agents for conversational assistance, coding, document understanding, image analysis, semantic search, and more through a unified, ChatGPT-inspired interface.

---

## ✨ Features

### 🤖 Multi-Agent AI Architecture
- Specialized AI agents for different tasks
- Intelligent request routing using LangGraph
- Modular agent orchestration
- Context-aware conversations

### 🧠 Retrieval-Augmented Generation (RAG)
- PDF document understanding
- Semantic search using vector embeddings
- Context-aware response generation
- Efficient retrieval pipeline

### 💬 Conversational AI
- Real-time chat interface
- Conversation history
- Persistent memory
- Markdown support

### 📄 Intelligent Document Processing
- PDF analysis
- PowerPoint generation
- AI-generated reports
- Document summarization

### 👁️ Vision Intelligence
- Image understanding
- Visual question answering
- Image analysis

### 🌐 AI Search
- Internet search integration
- Real-time information retrieval
- AI-assisted web research

### 💳 Subscription & Billing
- Razorpay payment integration
- Subscription plans
- Usage tracking

### 🔒 Authentication
- Firebase Authentication
- Secure JWT authorization
- Protected APIs

### ☁️ Cloud Native
- Dockerized microservices
- AWS S3 integration
- Redis caching
- MongoDB persistence

---

# 🏗️ System Architecture

```text
                        React + Vite
                             │
                             ▼
                    Express API Gateway
                             │
        ┌────────────────────┼─────────────────────┐
        │                    │                     │
        ▼                    ▼                     ▼
 Authentication         Chat Service        Billing Service
        │                    │                     │
        └──────────────┬─────┴─────────────────────┘
                       │
                       ▼
                 Agent Service
                       │
          LangGraph Supervisor
                       │
      ┌────────┬────────┬────────┬────────┐
      │        │        │        │        │
   Chat     Coding     PDF    Vision   Search
   Agent     Agent     RAG     Agent    Agent
                       │
                Vector Database
                       │
                 Embedding Models
```

---

# 🛠️ Tech Stack

## Frontend

- React 19
- Vite
- Redux Toolkit
- Tailwind CSS
- Firebase Authentication
- Axios
- Monaco Editor
- React Markdown

---

## Backend

- Node.js
- Express.js
- API Gateway
- Microservices Architecture

---

## AI Stack

- LangChain
- LangGraph
- Retrieval-Augmented Generation (RAG)
- Google Gemini
- Groq
- OpenRouter

---

## Database

- MongoDB
- Redis

---

## Cloud & DevOps

- Docker
- Docker Compose
- AWS S3
- GitHub Actions

---

## Payments

- Razorpay

---

# 📁 Project Structure

```text
AgentVerse-AI

├── frontend/
│
├── backend/
│   ├── gateway/
│   │
│   ├── services/
│   │      ├── auth/
│   │      ├── chat/
│   │      ├── billing/
│   │      └── agent/
│   │
│   └── shared/
│
└── .github/
```

---

# 🤖 AI Agents

| Agent | Responsibility |
|--------|----------------|
| Chat Agent | General conversations |
| Coding Agent | Programming assistance |
| PDF RAG Agent | Document understanding |
| Search Agent | Internet search |
| Vision Agent | Image understanding |
| PPT Agent | Presentation generation |
| Image Analyzer | AI image analysis |

---

# 🔄 RAG Pipeline

```text
User Query
      │
      ▼
Embedding Generation
      │
      ▼
Vector Database Search
      │
      ▼
Relevant Context Retrieval
      │
      ▼
Large Language Model
      │
      ▼
AI Response
```

---

# 🔐 Authentication Flow

```text
User

↓

Firebase Authentication

↓

JWT Verification

↓

API Gateway

↓

Microservices
```

---

# 🚀 Getting Started

## Clone the repository

```bash
git clone https://github.com/Nv18/agentverse-ai.git
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Backend

```bash
cd backend
npm install
```

Start individual services or use Docker Compose.

---

## Docker

```bash
docker-compose up --build
```

---

# 🔧 Environment Variables

Create a `.env` file for each service.

Example:

```env
MONGODB_URI=

REDIS_URL=

JWT_SECRET=

FIREBASE_API_KEY=

AWS_ACCESS_KEY_ID=

AWS_SECRET_ACCESS_KEY=

AWS_BUCKET_NAME=

RAZORPAY_KEY_ID=

RAZORPAY_SECRET=

GOOGLE_API_KEY=
```

---

# 🤝 Contributing

Contributions, feature requests, and bug reports are welcome.

Please fork the repository and submit a pull request.

---

# 📜 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Nikhil Singh**

GitHub: https://github.com/Nv18

---

⭐ If you found this project useful, consider giving it a star.
