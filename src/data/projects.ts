export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  index: string;
  name: string;
  repo: string;
  featured: boolean;
  category: string;
  status: string;
  summary: string;
  pipeline: string[];
  principle?: {
    quote: string;
    detail: string;
  };
  points: string[];
  tech: string[];
  moreTech?: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "typellm",
    index: "01",
    name: "TypeLLM",
    repo: "venkatpachala/TypeLLM",
    featured: true,
    category: "AI inference backend",
    status: "Building",
    summary:
      "A production-oriented inference backend in Python for scalable, fault-tolerant LLM workloads. Currently building the async engine: admission, timeouts, and cancellation-safe execution.",
    pipeline: ["Request", "Admission", "Engine", "Providers", "Metrics"],
    points: [
      "Concurrency control, request admission, timeouts, and cancellation",
      "Retries, backoff, circuit breakers, and backpressure",
      "Multi-provider routing, streaming, and usage tracking",
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "Workers"],
    links: [{ label: "GitHub", href: "https://github.com/venkatpachala/TypeLLM" }],
  },
  {
    slug: "codeturtle",
    index: "02",
    name: "CodeTurtle",
    repo: "venkatpachala/CodeTurtle",
    featured: true,
    category: "Local-first code review",
    status: "Active",
    summary:
      "A local-first, multi-agent code review system with repository intelligence, persistent memory, and observability. Policy, not the model, makes the review decision.",
    pipeline: ["PR", "Change units", "Graphify", "Agent", "Proof", "Policy", "Decision"],
    principle: {
      quote: "LLMs reason. Policy decides.",
      detail:
        "The model produces evidence and findings. decide() maps coverage, tests, and verification into MERGE, COMMENT, or REQUEST_CHANGES.",
    },
    points: [
      "Hunks are reviewed as impl + test bundles, not as an isolated diff",
      "Optional Graphify graph supplies repository context to the agent and the verify loop",
      "A proof gate drops findings that are not fully supported",
      "Deterministic rules run before any model call; agent steps are capped",
    ],
    tech: ["Python", "CLI", "Ollama", "Graphify", "Evaluation"],
    moreTech: ["Local LLMs", "Diff index", "Proof gate"],
    links: [
      { label: "GitHub", href: "https://github.com/venkatpachala/CodeTurtle" },
      {
        label: "Architecture",
        href: "https://github.com/venkatpachala/CodeTurtle/blob/main/docs/CURRENT_ARCHITECTURE.md",
      },
    ],
  },
  {
    slug: "resolv",
    index: "03",
    name: "Resolv",
    repo: "venkatpachala/Resolv",
    featured: true,
    category: "D2C customer support",
    status: "Built",
    summary:
      "A multi-agent support platform for D2C brands. It handles returns, refunds, cancellations, and policy questions with planning, tools, policy-grounded RAG, and human escalation.",
    pipeline: ["User", "Guardrails", "Supervisor", "Planner", "Tools / RAG", "Verifier", "HITL", "Response"],
    principle: {
      quote: "Agents can reason — but sensitive actions remain controlled.",
      detail:
        "Shopify and Stripe calls retry and time out. A verifier and human escalation sit in front of high-risk actions. An output guard blocks unsupported claims.",
    },
    points: [
      "Supervisor routes intent and risk; the planner emits a structured plan",
      "Policy questions can answer from Pinecone RAG before tools run",
      "Shopify and Stripe executions retry, time out, and can run in parallel",
      "LangSmith traces the run; Prometheus and Grafana expose the metrics",
    ],
    tech: ["Python", "FastAPI", "LangGraph", "RAG", "Shopify", "Stripe"],
    moreTech: ["Pinecone", "LangSmith", "Prometheus", "Grafana", "Ollama", "Guardrails"],
    links: [{ label: "GitHub", href: "https://github.com/venkatpachala/Resolv" }],
  },
  {
    slug: "opensearch",
    index: "04",
    name: "OpenSearch",
    repo: "venkatpachala/OpenSearch",
    featured: false,
    category: "Self-correcting research agent",
    status: "Research",
    summary:
      "A self-correcting agent for multi-step research and experiments. After every tool call it checks a frozen goal, then recovers inside a bounded budget. The evaluator, not the planner, declares success.",
    pipeline: ["Goal", "Plan", "Tool", "Evaluate", "Recover"],
    principle: {
      quote: "The evaluator declares success. The planner does not.",
      detail:
        "GoalContract stays immutable for the run, so a high score that breaks a constraint is not a win. Typed tools reject bad arguments before they execute.",
    },
    points: [
      "Working memory keeps experiments, failures, and recovery records",
      "One recovery strategy per failure type, inside a budget",
      "Local Ollama planner; real training runs, not showcase stubs",
    ],
    tech: ["Python", "Ollama", "Pydantic", "Evaluation", "Recovery"],
    links: [
      { label: "GitHub", href: "https://github.com/venkatpachala/OpenSearch" },
      {
        label: "Architecture",
        href: "https://github.com/venkatpachala/OpenSearch/blob/main/docs/ARCHITECTURE.md",
      },
    ],
  },
];
