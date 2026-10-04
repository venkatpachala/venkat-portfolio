export type SkillGroup = {
  name: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "AI / Agent Systems",
    items: [
      "Agentic AI",
      "Multi-Agent Systems",
      "Tool Calling",
      "RAG",
      "Agent Evaluation",
      "LLM Applications",
      "Prompt / Context Engineering",
    ],
  },
  {
    name: "Retrieval & Knowledge",
    items: [
      "Qdrant",
      "Neo4j",
      "BM25",
      "Hybrid Search",
      "RRF",
      "Reranking",
      "Vector Search",
      "Knowledge Graphs",
    ],
  },
  {
    name: "Backend",
    items: ["Python", "FastAPI", "REST APIs", "Pydantic", "AsyncIO", "PostgreSQL", "Docker"],
  },
  {
    name: "LLM / ML Infrastructure",
    items: [
      "Ollama",
      "Hugging Face",
      "Local LLMs",
      "Embeddings",
      "Cross Encoders",
      "Model Evaluation",
    ],
  },
  {
    name: "Observability / Production",
    items: ["LangSmith", "Langfuse", "Prometheus", "Grafana", "Evaluation Pipelines"],
  },
];

export const stack = [
  "siPython",
  "siFastapi",
  "siPydantic",
  "siPostgresql",
  "siDocker",
  "siLangchain",
  "siLanggraph",
  "siOllama",
  "siHuggingface",
  "siQdrant",
  "siNeo4j",
  "siGrafana",
  "siPrometheus",
] as const;
export const interests = [
  "Agent Harnesses",
  "Code Intelligence",
  "Self-Evolving Agents",
  "Retrieval Systems",
  "AI Evaluation",
  "Local-First AI",
];
