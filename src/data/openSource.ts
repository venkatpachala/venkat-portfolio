export type OpenSourceContribution = {
  name: string;
  label: string;
  description: string;
  focuses: string[];
  repositoryUrl: string;
  contributionsUrl?: string;
};

/**
 * Add a contribution by appending one object.
 * Empty slots are not rendered — the pending line covers work still in progress.
 */
export const openSource: OpenSourceContribution[] = [
  {
    name: "Graphify",
    label: "Open source contribution",
    description:
      "Graphify builds a local knowledge graph over a repository — tree-sitter structure, not just embeddings — so agents can query code relationships. My current patch stops PHP supertype edges (inherits, implements, mixes_in) from binding to a same-named symbol in another language.",
    focuses: [
      "Code intelligence",
      "Repository graphs",
      "Retrieval",
      "Tree-sitter",
    ],
    repositoryUrl: "https://github.com/Graphify-Labs/graphify",
    contributionsUrl: "https://github.com/venkatpachala/graphify/pull/1",
  },
];

export const openSourcePending = "More contributions in progress.";
