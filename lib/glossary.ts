export type GlossaryTerm = {
  slug: string;
  term: string;
  definition: string;
  velaContext: string;
  related: string[];
};

/*
 * V14 - glossary source of truth. These definitions power /glossary and its
 * DefinedTermSet schema so machines can resolve Vela's core workflow terms.
 */
export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "workflow-automation",
    term: "Workflow automation",
    definition:
      "Workflow automation is the use of rules and triggers to move routine work forward without manual hand-offs.",
    velaContext:
      "In Vela, workflow automation connects projects, tasks, notifications, and external tools so repeated steps run when work changes state.",
    related: ["Automations", "Workflow templates", "Integrations"],
  },
  {
    slug: "automation-rule",
    term: "Automation rule",
    definition:
      "An automation rule is an if-this-then-that instruction that runs a specific action when a condition is met.",
    velaContext:
      "A Vela rule can post to Slack, update a task, create follow-up work, or sync a status when a task moves to a new stage.",
    related: ["Workflow automation", "Real-time updates"],
  },
  {
    slug: "single-source-of-truth",
    term: "Single source of truth",
    definition:
      "A single source of truth is a shared workspace where the current state of work is visible and consistent for the whole team.",
    velaContext:
      "Vela keeps projects, tasks, docs, and automation activity aligned so teams do not have to reconcile status across disconnected tools.",
    related: ["One workspace", "Cross-functional work"],
  },
  {
    slug: "cross-tool-sync",
    term: "Cross-tool sync",
    definition:
      "Cross-tool sync keeps related records in different apps updated when one system changes.",
    velaContext:
      "Vela syncs work between tools like Slack, GitHub, and Google Workspace so updates travel with the work instead of living in one app.",
    related: ["Integrations", "Real-time updates"],
  },
  {
    slug: "workflow-template",
    term: "Workflow template",
    definition:
      "A workflow template is a reusable set of steps, roles, and automations for a repeated team process.",
    velaContext:
      "Vela templates help teams launch sprint planning, product launches, reviews, and recurring operations without rebuilding the process each time.",
    related: ["Workflow automation", "Automation rule"],
  },
  {
    slug: "human-in-the-loop",
    term: "Human in the loop",
    definition:
      "Human in the loop means automation handles routine steps while people stay responsible for judgment, approvals, and exceptions.",
    velaContext:
      "Vela is designed to automate status updates, routing, and notifications while keeping decisions visible and reversible for the team.",
    related: ["Automation rule", "Activity feed"],
  },
];
