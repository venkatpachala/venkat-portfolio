import type { Contribution, GithubActivity } from "@/data/github";
import { githubUser } from "@/data/github";

const GAP = 2;
const LEVEL = ["var(--heat-0)", "var(--heat-1)", "var(--heat-2)", "var(--heat-3)", "var(--heat-4)"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function weeksOf(days: Contribution[]) {
  const byDate = new Map(days.map((day) => [day.date, day]));
  const start = new Date(`${days[0].date}T00:00:00Z`);
  const end = new Date(`${days[days.length - 1].date}T00:00:00Z`);
  const cursor = new Date(start);
  cursor.setUTCDate(cursor.getUTCDate() - cursor.getUTCDay());

  const weeks: (Contribution | null)[][] = [];
  while (cursor <= end) {
    const week: (Contribution | null)[] = [];
    for (let i = 0; i < 7; i += 1) {
      const key = cursor.toISOString().slice(0, 10);
      const inside = key >= days[0].date && key <= days[days.length - 1].date;
      week.push(inside ? (byDate.get(key) ?? { date: key, count: 0, level: 0 }) : null);
      cursor.setUTCDate(cursor.getUTCDate() + 1);
    }
    weeks.push(week);
  }
  return weeks;
}

function monthLabels(weeks: (Contribution | null)[][]) {
  const labels: { index: number; text: string }[] = [];
  let previous = -1;
  weeks.forEach((week, index) => {
    const day = week.find((cell) => cell);
    if (!day) return;
    const month = Number(day.date.slice(5, 7)) - 1;
    if (month === previous) return;
    const last = labels[labels.length - 1];
    if (!last || index - last.index >= 3) {
      labels.push({ index, text: MONTHS[month] });
    }
    previous = month;
  });
  return labels;
}

export function Activity({ activity }: { activity: GithubActivity | null }) {
  const profile = `https://github.com/${githubUser}`;

  return (
    <section id="activity" className="scroll-mt-24 pt-6 pb-2" aria-label="GitHub activity">
      {activity ? (
        <Graph activity={activity} profile={profile} />
      ) : (
        <p className="mt-3 text-sm text-muted">
          Contribution graph is unavailable right now.{" "}
          <a href={profile} className="underline" target="_blank" rel="noreferrer">
            See GitHub
          </a>
          .
        </p>
      )}
    </section>
  );
}

function Graph({ activity, profile }: { activity: GithubActivity; profile: string }) {
  const weeks = weeksOf(activity.contributions);
  const months = monthLabels(weeks);
  const total = activity.total;

  return (
    <figure className="mt-2">
      <div className="flex gap-2">
        <div className="mt-5 grid shrink-0 grid-rows-7 gap-0.5 text-[9px] leading-none text-faint">
          <span />
          <span className="flex items-center">Mon</span>
          <span />
          <span className="flex items-center">Wed</span>
          <span />
          <span className="flex items-center">Fri</span>
          <span />
        </div>
        <div className="min-w-0 flex-1 overflow-x-auto">
          <div style={{ width: `max(100%, ${weeks.length * 12}px)` }}>
            <div className="relative mb-1 h-4">
              {months.map((month) => (
                <span
                  key={`${month.text}-${month.index}`}
                  className="absolute text-[9px] tracking-wide text-faint uppercase sm:text-[10px]"
                  style={{ left: `${(month.index / weeks.length) * 100}%` }}
                >
                  {month.text}
                </span>
              ))}
            </div>
            <div
              className="grid"
              style={{
                gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))`,
                gap: GAP,
              }}
              aria-hidden="true"
            >
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="grid grid-rows-7" style={{ gap: GAP }}>
                  {week.map((day, dayIndex) => (
                    <span
                      key={day?.date ?? `empty-${weekIndex}-${dayIndex}`}
                      title={
                        day
                          ? `${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`
                          : undefined
                      }
                      className="aspect-square w-full rounded-[2px]"
                      style={{ background: day ? LEVEL[Math.min(day.level, 4)] : "transparent" }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] tracking-wide text-faint uppercase">
        <figcaption>
          <a href={profile} target="_blank" rel="noreferrer" className="hover:text-fg">
            {total.toLocaleString("en-US")} contributions · {activity.year}
          </a>
        </figcaption>
        <div className="flex items-center gap-1">
          <span>Less</span>
          {LEVEL.map((color) => (
            <span key={color} className="block size-2.5 rounded-[2px]" style={{ background: color }} />
          ))}
          <span>More</span>
        </div>
      </div>
    </figure>
  );
}
