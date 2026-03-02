// ════════════════════════════════════════
// data/cert-questions.js — Void Esports Certification Exam
// 20 Scenario-Based Questions with Keyword Scoring
// ════════════════════════════════════════

const CERT_QUESTIONS = [
  {
    id: 1,
    scenario: "A user opens a General Ticket and immediately starts typing in all-caps, demanding an immediate unban. They are using profane language. How do you respond?",
    keywords: ["professional", "greeting", "calm", "greet", "policy", "escalate", "compose", "warning", "reason", "respectful"],
    minKeywords: 3,
    guidance: "Respond with a professional greeting, acknowledge their concern calmly, explain the appeals process, and warn them that abusive language may complicate their case."
  },
  {
    id: 2,
    scenario: "A user submits a Roster Ticket claiming they are 19 years old and want to join as a Pro player. They have not provided any proof of their competitive history. What are your next steps?",
    keywords: ["age", "verify", "competitive", "history", "proof", "portfolio", "requirement", "request", "evidence", "record"],
    minKeywords: 3,
    guidance: "Acknowledge the application, note the age stated, and request proof of competitive history/record before proceeding."
  },
  {
    id: 3,
    scenario: "During shift handoff, you realize a ticket has been sitting open for 6 hours with no response. It is a Roster Ticket from a Streamer applicant. What do you do?",
    keywords: ["respond", "apologize", "delay", "greet", "platform", "channel", "viewership", "follow-up", "handle", "escalate"],
    minKeywords: 3,
    guidance: "Respond immediately, apologize for the delay, greet professionally, and ask for their streaming platform, channel link, and average viewer count."
  },
  {
    id: 4,
    scenario: "You are reviewing a blacklist submission but it only includes the user's display name and offense — no Discord ID or date. What should you do?",
    keywords: ["format", "discord id", "date", "incomplete", "reject", "request", "correct", "require", "id", "standards"],
    minKeywords: 3,
    guidance: "The format is incomplete. Request the submitter provide the Discord ID and the exact date of the offense per blacklist format standards."
  },
  {
    id: 5,
    scenario: "A Grinder+ member submits a Roster Ticket wanting to move from Semi-Pro to Pro. Walk through your complete handling process.",
    keywords: ["grinder", "priority", "greeting", "age", "verify", "pro", "requirements", "record", "competitive", "note"],
    minKeywords: 4,
    guidance: "Note Grinder+ status for priority handling, greet professionally, verify age, request competitive record, review Pro requirements, and escalate if criteria are met."
  },
  {
    id: 6,
    scenario: "A user claims they were wrongly warned by another moderator. They have screenshot evidence. How do you proceed?",
    keywords: ["escalate", "senior", "review", "evidence", "screenshots", "investigate", "fair", "process", "appeal", "note"],
    minKeywords: 3,
    guidance: "Do not reverse the warning yourself. Acknowledge their concern, collect the screenshots, and escalate to a senior moderator for investigation."
  },
  {
    id: 7,
    scenario: "You are about to take a 3-day break from moderating. Outline the proper LOA procedure.",
    keywords: ["loa", "leave", "absence", "notify", "supervisor", "submit", "coverage", "handoff", "tickets", "return"],
    minKeywords: 3,
    guidance: "Submit a formal LOA request, notify your supervisor, ensure ticket coverage is arranged, hand off any open tickets, and note your return date."
  },
  {
    id: 8,
    scenario: "A Junior Content Creator applicant says they create YouTube Shorts but have no long-form content. Do they qualify and how do you handle this?",
    keywords: ["jcc", "junior", "content", "shorts", "qualify", "channel", "link", "review", "direct", "appropriate"],
    minKeywords: 3,
    guidance: "Review the JCC requirements. If Shorts qualify, direct them to the appropriate onboarding. If unsure, escalate for senior review and do not make promises."
  },
  {
    id: 9,
    scenario: "You receive 4 tickets simultaneously at the start of your shift. How do you prioritize them?",
    keywords: ["prioritize", "urgent", "type", "grinder", "review", "triage", "first", "acknowledge", "respond", "queue"],
    minKeywords: 3,
    guidance: "Acknowledge all tickets quickly so users know they are seen. Prioritize by urgency and ticket type — Grinder+ and escalation-flagged tickets get priority. Triage in order."
  },
  {
    id: 10,
    scenario: "A user wants to join as a GFX/VFX member but their portfolio link is broken. How do you proceed?",
    keywords: ["portfolio", "broken", "request", "new link", "cannot review", "follow-up", "deadline", "respond", "polite", "resubmit"],
    minKeywords: 3,
    guidance: "Inform the user their portfolio link is inaccessible, politely request they resubmit a working link, and give a reasonable deadline for follow-up."
  },
  {
    id: 11,
    scenario: "During a ticket, you identify the user is under 13 years old. What action do you take?",
    keywords: ["underage", "deny", "policy", "decline", "age", "minimum", "close", "redirect", "protect", "requirement"],
    minKeywords: 3,
    guidance: "Politely inform the user they do not meet the minimum age requirement. Decline the application and close the ticket following proper protocol."
  },
  {
    id: 12,
    scenario: "You see a pattern: 3 tickets this week have all been spam requests from the same user using different accounts. What do you do?",
    keywords: ["ban", "evade", "ban evasion", "report", "escalate", "investigate", "document", "multiple accounts", "flag", "senior"],
    minKeywords: 3,
    guidance: "Document the pattern, flag it as suspected ban evasion, and escalate to senior staff with all relevant Discord IDs and evidence."
  },
  {
    id: 13,
    scenario: "A Semi-Pro applicant asks if they can skip the roster process and be placed directly into the Pro category. How do you respond?",
    keywords: ["process", "cannot", "policy", "requirements", "pro", "criteria", "pathway", "deny", "explain", "escalate"],
    minKeywords: 3,
    guidance: "Explain that bypassing the roster process is not within moderator authority. They must meet Pro requirements and go through proper channels."
  },
  {
    id: 14,
    scenario: "An applicant is rude to you in a ticket, then deletes their messages. How should you document and respond?",
    keywords: ["document", "screenshot", "evidence", "professional", "compose", "note", "record", "report", "calm", "log"],
    minKeywords: 3,
    guidance: "Screenshot or log the messages before deletion if possible, remain professional, document the behavior in your interaction log, and report to senior staff."
  },
  {
    id: 15,
    scenario: "It is the end of the week and you need to submit your weekly performance metrics. What key data points are required?",
    keywords: ["tickets", "response time", "handled", "warnings", "loa", "shift", "performance", "report", "submit", "weekly"],
    minKeywords: 3,
    guidance: "Include number of tickets handled, average response times, warnings issued, any LOA periods, shift completion rate, and any notable incidents."
  },
  {
    id: 16,
    scenario: "A user opens a ticket saying they were blacklisted but they believe it was a mistake. They provide no evidence. What is the correct process?",
    keywords: ["appeal", "evidence", "request", "escalate", "review", "senior", "documentation", "cannot", "unilateral", "process"],
    minKeywords: 3,
    guidance: "Inform the user of the appeals process. Request they provide evidence of their claim. You cannot unilaterally reverse a blacklist — escalate to senior staff with evidence."
  },
  {
    id: 17,
    scenario: "You are training a new moderator who just closed a ticket without greeting the user or verifying their age. How do you address this?",
    keywords: ["protocol", "greeting", "age verification", "correct", "remind", "training", "procedure", "constructive", "retrain", "standard"],
    minKeywords: 3,
    guidance: "Address it constructively. Remind them of the standard protocol: greeting first, then age verification. Walk through the correct workflow and provide the guidelines."
  },
  {
    id: 18,
    scenario: "A Creative applicant's ticket has been open for 2 days without resolution. When you review it, you find the previous moderator left incomplete notes. What do you do?",
    keywords: ["review", "notes", "incomplete", "greet", "resume", "apologize", "delay", "continue", "document", "follow-up"],
    minKeywords: 3,
    guidance: "Apologize for the delay, review all existing notes, greet the user, and continue from where the process left off. Document the gap and flag for process improvement."
  },
  {
    id: 19,
    scenario: "You receive a Roster Ticket from someone wanting to join as an Academy player. Describe the complete intake process from open to close.",
    keywords: ["greet", "age", "verify", "requirements", "competitive", "pathway", "pro", "record", "onboard", "close", "thank"],
    minKeywords: 5,
    guidance: "Greet professionally → verify age → explain Academy pathway → request competitive record → review requirements → approve/deny or escalate → provide next steps → close with thank-you."
  },
  {
    id: 20,
    scenario: "An admin asks you to approve an application that you believe does not meet requirements, pressuring you to 'just do it'. What is the ethical response?",
    keywords: ["deny", "escalate", "policy", "requirements", "integrity", "document", "report", "standards", "cannot", "ethics"],
    minKeywords: 3,
    guidance: "Maintain integrity. Decline to approve an application that doesn't meet standards. Document the request, escalate to a higher authority, and follow proper policy."
  }
];
