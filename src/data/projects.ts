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
    slug: "codeturtle",
    index: "01",
    name: "CodeTurtle",
    repo: "venkatpachala/CodeTurtle",
    featured: true,
    category: "Agentic code review / developer infrastructure",
    status: "Active",
    summary:
      "A local-first CLI that reviews a GitHub pull request against the repository. Policy, not the model, makes the review decision.",
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
    slug: "d2c-support",
    index: "02",
    name: "D2C AI Customer Support",
    repo: "venkatpachala/AI-Customer-Support-",
    featured: true,
    category: "Multi-agent support backend",
    status: "Built",
    summary:
      "A multi-agent backend for returns, refunds, cancellations, and policy questions. Retrieval, tools, checks, and human escalation stay separate steps.",
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
    links: [
      {
        label: "GitHub",
        href: "https://github.com/venkatpachala/AI-Customer-Support-",
      },
    ],
  },
  {
    slug: "harnesslab",
    index: "03",
    name: "HarnessLab",
    repo: "venkatpachala/HarnessLab",
    featured: false,
    category: "Agent harness / evaluation",
    status: "Experiment",
    summary:
      "A lab that keeps the model, tasks, and budget fixed and changes only the execution harness. Scores come from the resulting world state, not an LLM judge.",
    pipeline: ["Task", "Harness", "Tools", "Oracle", "Compare"],
    points: [
      "Direct, planner, and recovery loops on the same task set",
      "Tool faults are injected; recovery is a retry budget",
      "Runs are logged and scored by deterministic state oracles",
    ],
    tech: ["Python", "Agent traces", "Evaluation", "Fault injection", "Harness design"],
    links: [
      { label: "GitHub", href: "https://github.com/venkatpachala/HarnessLab" },
      {
        label: "Notes",
        href: "https://github.com/venkatpachala/HarnessLab/blob/main/RESEARCH_NOTE.md",
      },
    ],
  },
  {
    slug: "opensearch",
    index: "04",
    name: "OpenSearch",
    repo: "venkatpachala/OpenSearch",
    featured: false,
    category: "Self-correcting experiments",
    status: "Research",
    summary:
      "A goal-driven agent for multi-step experiments. After every tool call it checks execution against a frozen goal, then recovers inside a bounded budget.",
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
