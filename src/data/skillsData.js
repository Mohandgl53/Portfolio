// =========================================================================
// MOHAN KUMAR T — VERIFIED SKILLS & IMPLEMENTATION DATABASE
// Grounded in real projects: Persevex Internship, Zugora, AptIQ, iMessage,
// MahathRishi Traders, LocalMind AI, Focus YT, and verified coursework.
// =========================================================================

export const SKILL_DATABASE = {
  python: {
    name: 'Python',
    category: 'PROGRAMMING & MACHINE LEARNING',
    badge: 'NPTEL 75% Elite · Persevex Intern',
    description: 'Primary language utilized during the 3-month Persevex Data Science Internship for data wrangling, exploratory data analysis (EDA), and machine learning model training. Also used for automated data ingestion scripts and backend prototyping.',
    project: 'Persevex Internship / Data Pipelines',
    application: 'Automated EDA, Data Cleaning & Predictive Modeling',
    verification: 'Persevex Internship Certificate + NPTEL Elite (75%)',
    stack: 'Pandas, NumPy, scikit-learn, Matplotlib, Seaborn',
    codeSnippet: `# Persevex Data Pipeline: Preprocessing & Model Evaluation
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report

df = pd.read_csv('enterprise_telemetry.csv')
X = df.drop(columns=['target_label'])
y = df['target_label']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = RandomForestClassifier(n_estimators=100, max_depth=12)
model.fit(X_train, y_train)
predictions = model.predict(X_test)`
  },

  java: {
    name: 'Java',
    category: 'OBJECT-ORIENTED ARCHITECTURE',
    badge: 'NPTEL 86% Elite Gold (Top 5% India)',
    description: 'Core foundation in object-oriented architecture, collections framework, memory management, and multithreaded concurrency. Validated through IIT Kharagpur national proctored examination, ranking in the top 5% nationwide with 86% score.',
    project: 'Academic Core Systems & Algorithmic Design',
    application: 'High-Throughput Multithreading & OOP Design Patterns',
    verification: 'NPTEL Elite Certificate (IIT Kharagpur, Score: 86%)',
    stack: 'Java SE, JVM Tuning, ExecutorService, Collections API',
    codeSnippet: `// Thread Pool Executor with Concurrent State Handling
public class CoreEvaluationEngine {
    private final ExecutorService executor = Executors.newFixedThreadPool(4);

    public CompletableFuture<AnalysisResult> evaluateState(SystemState state) {
        return CompletableFuture.supplyAsync(() -> {
            return processDeepAnalysis(state);
        }, executor);
    }
}`
  },

  typescript: {
    name: 'TypeScript',
    category: 'TYPE-SAFE CLIENT & SERVER',
    badge: 'Strict Mode Production Contracts',
    description: 'Enforces compile-time type safety, interface contracts, and schema validation across modern web applications. Applied in Zugora for Stockfish Web Worker message passing and in AptIQ to eliminate runtime null pointer exceptions.',
    project: 'Zugora Chess Engine & AptIQ Exam Platform',
    application: 'Web Worker Message Passing & Strict API Boundaries',
    verification: 'Production Builds in Zugora & AptIQ Repositories',
    stack: 'TypeScript 5, Strict Null Checks, Generics, Zod',
    codeSnippet: `// Zugora Web Worker Protocol Contract
export interface WorkerAnalysisRequest {
  type: 'EVALUATE_FEN';
  fen: string;
  depth: number;
  options: { multiPv: number; threads: number };
}

export interface EngineScore {
  type: 'cp' | 'mate';
  value: number;
  bestMove: string;
}`
  },

  javascript: {
    name: 'JavaScript (ES6+)',
    category: 'MODERN WEB RUNTIME',
    badge: 'IBM SkillsBuild Certified',
    description: 'Deep mastery of asynchronous event loops, promise composition, DOM mutation observers, and modern ES6+ paradigms. Powers the core browser interactions in iMessage messenger, Focus YT extension, and client-side application logic.',
    project: 'iMessage WebSockets & Focus YT Extension',
    application: 'Asynchronous Event Handling & DOM Content Injections',
    verification: 'IBM SkillsBuild JavaScript Credential',
    stack: 'ES6+, Async/Await, MutationObserver, Web Workers',
    codeSnippet: `// Focus YT: Zero-Latency DOM Mutation Observer
const stripAlgorithmicSidebar = () => {
  const sidebar = document.querySelector('#secondary.ytd-watch-flexy');
  if (sidebar) sidebar.remove();
};

const observer = new MutationObserver(() => stripAlgorithmicSidebar());
observer.observe(document.body, { childList: true, subtree: true });`
  },

  sql: {
    name: 'SQL (MySQL & PostgreSQL)',
    category: 'RELATIONAL DATA QUERYING',
    badge: 'HackerRank Certified · Elite Honors',
    description: 'Relational data modeling, ACID transactions, complex JOIN operations, indexing, and query optimization. Utilized to structure transactional order lifecycles and query student examination submissions with minimal latency.',
    project: 'MahathRishi Traders & AptIQ Exam Platform',
    application: 'Relational Schema Design & Query Indexing',
    verification: 'HackerRank SQL (Basic & Intermediate) Verified',
    stack: 'PostgreSQL, MySQL, Prisma ORM, B-Tree Indexes',
    codeSnippet: `-- Transactional Order Lifecycle Query with Inventory Check
SELECT 
    o.order_id,
    o.customer_name,
    SUM(oi.quantity * oi.unit_price) AS order_total,
    o.payment_status
FROM orders o
JOIN order_items oi ON o.order_id = oi.order_id
WHERE o.created_at >= NOW() - INTERVAL '7 days'
GROUP BY o.order_id, o.customer_name, o.payment_status
ORDER BY order_total DESC;`
  },

  react: {
    name: 'React 18 & 19',
    category: 'CLIENT-SIDE COMPONENT ARCHITECTURE',
    badge: '4 Production Projects Shipped',
    description: 'Primary library for building reactive single-page user interfaces. Architected custom hooks, context providers, and virtual DOM rendering pipelines across Zugora, AptIQ, iMessage Messenger, and MahathRishi Traders.',
    project: 'Zugora, AptIQ, iMessage & MahathRishi Traders',
    application: 'Modular State Management, Custom Hooks & Reactive Telemetry',
    verification: 'Integrated Across 4 Verified Full-Stack Repositories',
    stack: 'React 18/19, Custom Hooks, Context API, GSAP',
    codeSnippet: `// Reactive Web Worker Hook for Stockfish Engine
export const useChessEngine = (fen) => {
  const [evalScore, setEvalScore] = useState(0);
  const workerRef = useRef(null);

  useEffect(() => {
    workerRef.current = new Worker(new URL('../workers/engine.js', import.meta.url));
    workerRef.current.onmessage = (e) => setEvalScore(e.data.score);
    return () => workerRef.current.terminate();
  }, []);

  return { evalScore };
};`
  },

  tailwind: {
    name: 'Tailwind CSS',
    category: 'DESIGN SYSTEMS & UI ARCHITECTURE',
    badge: 'Glassmorphism & Responsive Layouts',
    description: 'Utility-first styling system used to architect dark-mode design tokens, adaptive viewports, micro-interactions, and glassmorphic dashboards across AptIQ, iMessage, and Zugora.',
    project: 'iMessage Messenger, AptIQ & Portfolio',
    application: 'Responsive Design Tokens, Theme Modes & Micro-Animations',
    verification: 'Implemented Across 3 Production UI Systems',
    stack: 'Tailwind CSS, PostCSS, CSS Grid/Flexbox, Dark Tokens',
    codeSnippet: `/* Tailwind Glassmorphic Container Class */
@layer components {
  .glass-card-elevated {
    @apply bg-slate-900/80 backdrop-blur-md border border-cyan-500/20 
           rounded-2xl shadow-2xl p-6 transition-all duration-300;
  }
}`
  },

  vite: {
    name: 'Vite Bundler',
    category: 'DEVELOPMENT WORKFLOW & BUNDLING',
    badge: 'Single-File Production Toolchain',
    description: 'Fast HMR development environment and Rollup-based production bundler. Utilized with custom plugins to build standalone, self-contained single-file HTML distributions with zero external asset dependencies.',
    project: 'Client Tooling & Standalone Portfolios',
    application: 'Zero-Latency ESM Bundling & Single-File Asset Inlining',
    verification: 'Single-File Build Architecture (470ms compilation)',
    stack: 'Vite 6, Rollup, PostCSS, vite-plugin-singlefile',
    codeSnippet: `// vite.config.js: Standalone Self-Contained Inliner
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: { target: 'esnext', assetsInlineLimit: 10000000 }
});`
  },

  node: {
    name: 'Node.js & Express',
    category: 'BACKEND SERVICES & APIS',
    badge: 'REST APIs & WebSocket Gateways',
    description: 'Event-driven server runtime for REST APIs, middleware pipelines, JWT authentication, and WebSocket session dispatching. Powers the server architectures of MahathRishi Traders, AptIQ, and E-Commerce Platform.',
    project: 'MahathRishi Traders & AptIQ Server',
    application: 'RESTful API Routing, Role-Based Auth & Session Caching',
    verification: 'Production Node Server Backends with 14/14 Test Passes',
    stack: 'Node.js, Express, JWT, CORS, helmet, express-rate-limit',
    codeSnippet: `// Express JWT Authentication & Role-Based Guard Middleware
const verifyRole = (requiredRole) => (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) return res.status(401).json({ error: 'Unauthorized' });

  const token = authHeader.split(' ')[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (decoded.role !== requiredRole) return res.status(403).json({ error: 'Forbidden' });
  req.user = decoded;
  next();
};`
  },

  socketio: {
    name: 'Socket.io',
    category: 'REAL-TIME WEBSOCKETS',
    badge: 'Sub-Second Real-Time Telemetry',
    description: 'Full-duplex bi-directional communication layer providing sub-second message delivery in iMessage Messenger and live synchronized test countdown telemetry in AptIQ.',
    project: 'iMessage Real-Time Chat & AptIQ Live Exams',
    application: 'Real-Time Message Broadcasting & Active Presence Tracking',
    verification: 'Live Production Messenger with Active Sockets',
    stack: 'Socket.io Server/Client, WebSocket Protocol, Heartbeats',
    codeSnippet: `// Socket.io Server: Broadcast Messaging & Room Join
io.on('connection', (socket) => {
  socket.on('join_chat', (chatId) => {
    socket.join(chatId);
  });

  socket.on('send_message', (payload) => {
    io.to(payload.chatId).emit('receive_message', {
      ...payload,
      timestamp: new Date().toISOString()
    });
  });
});`
  },

  postgres: {
    name: 'PostgreSQL & Prisma ORM',
    category: 'RELATIONAL DATABASE ARCHITECTURE',
    badge: 'ACID Transactions & Strict Schema',
    description: 'Structured enterprise database management with relational integrity, foreign key cascading, and type-safe migrations via Prisma ORM for Zugora and MahathRishi Traders.',
    project: 'Zugora AI Chess Coach & MahathRishi Platform',
    application: 'Relational Schemas, Type-Safe Queries & ACID Safety',
    verification: 'Prisma Schema Models Implemented in Production',
    stack: 'PostgreSQL 16, Prisma ORM, SQL Migrations, Connection Pooling',
    codeSnippet: `// Prisma Schema: User Game State & Evaluation History
model ChessMatch {
  id          String   @id @default(uuid())
  userId      String
  user        User     @relation(fields: [userId], references: [id])
  fenHistory  String[]
  pgnString   String   @db.Text
  accuracy    Float
  createdAt   DateTime @default(now())
}`
  },

  redis: {
    name: 'Redis',
    category: 'IN-MEMORY CACHE & DATA STORE',
    badge: 'Sub-10ms Cache Hit Latency',
    description: 'High-speed in-memory key-value store used to cache Stockfish position analysis results in Zugora and maintain transient user session state in MahathRishi Traders.',
    project: 'Zugora Position Caching & MahathRishi Sessions',
    application: 'Position Hash Caching, Rate Limiting & Transient Sessions',
    verification: 'Integrated into Production Backend Workflows',
    stack: 'Redis 7, ioredis Client, TTL Expiration, Key Hashing',
    codeSnippet: `// Redis Evaluation Cache Lookup by FEN Hash
const getCachedEvaluation = async (fenHash) => {
  const cached = await redis.get(\`eval:\${fenHash}\`);
  if (cached) return JSON.parse(cached);

  const freshEval = await computeStockfishAnalysis(fenHash);
  await redis.setex(\`eval:\${fenHash}\`, 3600, JSON.stringify(freshEval));
  return freshEval;
};`
  },

  mongo: {
    name: 'MongoDB & Mongoose',
    category: 'DOCUMENT DATA STORE',
    badge: 'Flexible Schema Architecture',
    description: 'NoSQL document database utilized to store dynamic e-commerce product catalogs, nested order line items, and shopping cart states in the MERN E-Commerce Platform.',
    project: 'Full-Stack MERN E-Commerce Platform',
    application: 'Flexible Document Catalogs & Nested Line-Item Orders',
    verification: 'Working MERN Stack Production Application',
    stack: 'MongoDB Atlas, Mongoose ODM, BSON Schemas, Aggregations',
    codeSnippet: `// Mongoose Order Schema with Dynamic Nested Items
const OrderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, required: true },
    priceAtPurchase: { type: Number, required: true }
  }],
  totalAmount: { type: Number, required: true },
  orderStatus: { type: String, default: 'Processing' }
});`
  },

  datascience: {
    name: 'scikit-learn & Data Science',
    category: 'APPLIED MACHINE LEARNING & EDA',
    badge: 'Persevex Verified Internship',
    description: 'Practical machine learning pipeline implementation executed during the Persevex Data Science Internship. Spanned data cleaning, outlier imputation, exploratory visualization, and model hyperparameter tuning.',
    project: 'Persevex Internship / Data Science Analytics',
    application: 'Exploratory Data Analysis, Feature Engineering & ML Models',
    verification: 'Persevex 3-Month Industry Internship Certificate',
    stack: 'scikit-learn, Pandas, NumPy, Matplotlib, Seaborn',
    codeSnippet: `# Persevex EDA Pipeline: Correlation Matrix & Modeling
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.metrics import mean_squared_error, r2_score

corr = df.corr()
plt.figure(figsize=(10, 8))
sns.heatmap(corr, annot=True, cmap='coolwarm')

mse = mean_squared_error(y_test, predictions)
r2 = r2_score(y_test, predictions)
print(f"Model Benchmarks -> MSE: {mse:.4f}, R2: {r2:.4f}")`
  },

  ollama: {
    name: 'Ollama & Local LLMs',
    category: 'LOCAL-FIRST AI INFERENCE',
    badge: 'Privacy-First Architecture',
    description: 'Local-first runtime running quantized open-source models (such as Qwen 2.5) on-device without external cloud API dependencies or data leakage in LocalMind AI.',
    project: 'LocalMind AI Autonomous Agent',
    application: 'On-Device Zero-Leakage LLM Inference & Local Chat',
    verification: 'LocalMind AI Working Autonomous Architecture',
    stack: 'Ollama API, Qwen 2.5, Quantized GGUF, Local Context',
    codeSnippet: `// LocalMind AI: Direct Ollama Local Stream Inference
const generateLocalCompletion = async (prompt) => {
  const response = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: 'qwen2.5:7b', prompt, stream: false })
  });
  const data = await response.json();
  return data.response;
};`
  },

  langgraph: {
    name: 'LangGraph & LangChain',
    category: 'CYCLICAL AGENT ORCHESTRATION',
    badge: 'Stateful Agent Workflows',
    description: 'Graph-based framework for orchestrating cyclical agent loops, dynamic tool selection, memory persistence, and multi-step reasoning nodes in LocalMind AI.',
    project: 'LocalMind AI Autonomous Agent',
    application: 'Multi-Step Node Graphs, Cyclical Reasoning & Agent Memory',
    verification: 'LocalMind AI Multi-Node Tool Pipeline',
    stack: 'LangGraph, LangChain Core, StateGraph, Dynamic Routing',
    codeSnippet: `// StateGraph: Cyclical Reasoning Node with Tool Routing
const workflow = new StateGraph({ channels: agentStateChannels })
  .addNode("agent", callModelNode)
  .addNode("tools", toolExecutorNode)
  .addEdge("tools", "agent")
  .addConditionalEdges("agent", shouldContinueRouter, {
    continue: "tools",
    end: END
  });`
  },

  mcp: {
    name: 'Model Context Protocol (MCP)',
    category: 'TOOL INTEGRATION PROTOCOL',
    badge: 'Human-in-the-Loop Safety Gates',
    description: 'Standardized protocol connecting AI agents to local machine tools and databases with mandatory human approval gates for critical actions in LocalMind AI.',
    project: 'LocalMind AI Tool Interface',
    application: 'Standardized Tool Calling & Explicit Approval Safeguards',
    verification: 'MCP Server Specification Implementation',
    stack: 'Model Context Protocol, JSON-RPC, Safety Gate Handlers',
    codeSnippet: `// MCP Human-in-the-Loop Authorization Gate
const executeWithSafetyGate = async (toolRequest) => {
  if (toolRequest.isDestructive) {
    const approved = await requestUserConfirmation(toolRequest);
    if (!approved) throw new Error("Execution aborted by user");
  }
  return await mcpClient.callTool(toolRequest.toolName, toolRequest.params);
};`
  },

  git: {
    name: 'Git & GitHub',
    category: 'VERSION CONTROL & COLLABORATION',
    badge: '7 Verified Active Repositories',
    description: 'Version control workflows spanning trunk-based branching, pull request reviews, commit hygiene, and open-source publication across 7 verified repositories.',
    project: 'All 7 Engineering Repositories (@Mohandgl53)',
    application: 'Semantic Versioning, Feature Branching & Release Management',
    verification: 'GitHub Profile: https://github.com/Mohandgl53',
    stack: 'Git CLI, GitHub Actions, Semantic Releases, Branch Rules',
    codeSnippet: `# Git Branching & Clean Rebase Workflow
git checkout -b feature/stockfish-worker-optimization
git add src/workers/engine.js
git commit -m "feat(engine): offload Stockfish 19 analysis to isolated Web Worker"
git checkout main && git merge --no-ff feature/stockfish-worker-optimization`
  },

  docker: {
    name: 'Docker & Containers',
    category: 'CONTAINERIZATION & DEVOPS',
    badge: 'Multi-Stage Microservice Builds',
    description: 'Containerizing application runtimes, isolating database services (PostgreSQL, Redis), and generating lightweight multi-stage production deployment images.',
    project: 'Local Service Isolation & Microservice Stacks',
    application: 'Multi-Stage Dockerfiles, Service Compositions & Health Checks',
    verification: 'Dockerized Local Stacks for Database Services',
    stack: 'Docker CLI, Docker Compose, Alpine Linux, Health Checks',
    codeSnippet: `# Multi-Stage Dockerfile for Production Node Service
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
CMD ["node", "dist/index.js"]`
  }
};
