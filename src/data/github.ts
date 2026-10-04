export const githubUser = "venkatpachala";
export const activityYear = 2026;

export type Contribution = {
  date: string;
  count: number;
  level: number;
};

export type GithubActivity = {
  year: number;
  total: number;
  contributions: Contribution[];
};

export async function fetchGithubActivity(): Promise<GithubActivity | null> {
  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${githubUser}?y=${activityYear}`,
      { headers: { accept: "application/json" } },
    );
    if (!response.ok) return null;
    const data = (await response.json()) as {
      total?: Record<string, number>;
      contributions?: Contribution[];
    };
    if (!data.contributions?.length) return null;
    const total =
      data.total?.[String(activityYear)] ??
      data.contributions.reduce((sum, day) => sum + day.count, 0);
    return { year: activityYear, total, contributions: data.contributions };
  } catch {
    return null;
  }
}
