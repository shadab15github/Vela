/*
 * V12 — authored, dated content with outbound citations. Each post has a real
 * author, publish/modified dates, and references to reputable external sources,
 * tying the site into the knowledge graph and adding freshness signals.
 *
 * NOTE: authors and dates are illustrative placeholders for the experiment.
 */
export type Citation = { label: string; href: string };

export type Post = {
  slug: string;
  title: string;
  description: string;
  author: string;
  authorRole: string;
  date: string; // ISO 8601, used for datePublished
  updated: string; // ISO 8601, used for dateModified
  dateLabel: string;
  readingTime: string;
  body: { heading: string; paragraphs: string[] }[];
  citations: Citation[];
};

export const posts: Post[] = [
  {
    slug: "workflow-automation-saves-teams-hours",
    title: "How workflow automation gives teams back hours every week",
    description:
      "Manual hand-offs and constant context switching quietly drain a team's week. Here's how automating routine workflows reclaims that time.",
    author: "Maya Chen",
    authorRole: "Co-founder & CEO",
    date: "2026-05-12",
    updated: "2026-05-12",
    dateLabel: "May 12, 2026",
    readingTime: "5 min read",
    body: [
      {
        heading: "The hidden cost of manual hand-offs",
        paragraphs: [
          "Every time a task moves between people or tools, someone has to notice, copy details across, and notify the next person. Individually these steps take seconds; across a week, across a team, they add up to hours of invisible work.",
          "Research on knowledge work has repeatedly found that frequent context switching carries a real cognitive cost — it takes time to refocus after each interruption, and that recovery time compounds over a day.",
        ],
      },
      {
        heading: "What automation actually removes",
        paragraphs: [
          "Workflow automation targets the predictable, rules-based steps between the work itself: updating a status, posting a notification, creating the next task, or syncing a record across tools. When those steps run automatically, people stop being the glue between systems.",
          "The goal is not to remove judgment — it's to remove the busywork around judgment, so the time people spend is spent on decisions, not data entry.",
        ],
      },
      {
        heading: "Where to start",
        paragraphs: [
          "Pick one workflow your team repeats every week and map the manual steps in it. Automate the hand-offs first — the notifications and status updates — then layer in cross-tool syncs. Most teams see time savings within the first week.",
        ],
      },
    ],
    citations: [
      {
        label: "American Psychological Association — the cost of task switching",
        href: "https://www.apa.org/topics/research/multitasking",
      },
      {
        label: "McKinsey & Company — operations and automation insights",
        href: "https://www.mckinsey.com/capabilities/operations/our-insights",
      },
    ],
  },
  {
    slug: "single-source-of-truth-for-teams",
    title: "Building a single source of truth for cross-functional teams",
    description:
      "When product, engineering, and marketing each track work in different tools, status gets lost. A connected workspace keeps everyone aligned.",
    author: "Priya Nair",
    authorRole: "Co-founder & Head of Product",
    date: "2026-06-03",
    updated: "2026-06-03",
    dateLabel: "June 3, 2026",
    readingTime: "6 min read",
    body: [
      {
        heading: "Why status gets lost",
        paragraphs: [
          "Cross-functional work spans tools that were never designed to talk to each other. A decision made in a chat thread, a task tracked in a board, and a doc updated somewhere else drift out of sync the moment they're created.",
          "The result is a familiar tax: status meetings to reconcile what's actually true, and decisions made on stale information.",
        ],
      },
      {
        heading: "What a source of truth looks like",
        paragraphs: [
          "A single source of truth doesn't mean one tool for everything. It means the systems a team already uses stay in sync, so the same fact is the same everywhere — and updates propagate automatically instead of by hand.",
          "When work flows between tools automatically, the workspace reflects reality without anyone maintaining it manually.",
        ],
      },
    ],
    citations: [
      {
        label: "Harvard Business Review — collaboration and coordination research",
        href: "https://hbr.org/topic/collaboration",
      },
      {
        label: "Atlassian — the state of teamwork and tooling",
        href: "https://www.atlassian.com/work-management",
      },
    ],
  },
  {
    slug: "automating-without-losing-judgment",
    title: "Automating workflows without losing human judgment",
    description:
      "Automation is at its best when it handles the routine and leaves the decisions to people. Here's where to draw the line.",
    author: "Daniel Okafor",
    authorRole: "Co-founder & CTO",
    date: "2026-06-18",
    updated: "2026-06-18",
    dateLabel: "June 18, 2026",
    readingTime: "5 min read",
    body: [
      {
        heading: "Automate the rules, not the calls",
        paragraphs: [
          "A good rule of thumb: automate anything that follows a predictable rule, and keep a human in the loop wherever a judgment call is required. Status updates, notifications, and routing follow rules. Deciding whether work is actually done does not.",
          "When teams automate the judgment calls too, they trade small time savings for larger trust problems — and quietly stop relying on the automation at all.",
        ],
      },
      {
        heading: "Design for visibility and reversibility",
        paragraphs: [
          "Every automated action should be easy to see and easy to undo. An activity feed that shows what ran, and a one-click way to reverse it, keeps people confident that automation is helping rather than hiding work.",
          "Start narrow, make each rule observable, and expand only once the team trusts the ones already running.",
        ],
      },
    ],
    citations: [
      {
        label: "Nielsen Norman Group — automation and user control in UX",
        href: "https://www.nngroup.com/articles/",
      },
      {
        label: "MIT Sloan Management Review — humans and automation at work",
        href: "https://sloanreview.mit.edu/",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
