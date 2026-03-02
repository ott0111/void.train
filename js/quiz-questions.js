// ════════════════════════════════════════
// data/quiz-questions.js — Void Esports Practice Quiz
// 30 Multiple Choice Questions
// ════════════════════════════════════════

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What are the two primary ticket categories in Void Esports?",
    options: ["Support Ticket & Staff Ticket", "General Ticket & Roster Ticket", "Bug Report & Feature Request", "Member Ticket & VIP Ticket"],
    correct: 1
  },
  {
    id: 2,
    question: "What must be included at the start of every ticket response?",
    options: ["Server rules link", "Professional greeting and age inquiry", "Your Discord username", "A warning about misconduct"],
    correct: 1
  },
  {
    id: 3,
    question: "What is a Roster Ticket used for?",
    options: ["Reporting rule violations", "Requesting time off", "Applications to join Void Esports", "Server feedback"],
    correct: 2
  },
  {
    id: 4,
    question: "What does LOA stand for in the context of moderator responsibilities?",
    options: ["Level of Authority", "Leave of Absence", "List of Actions", "Logs of Activity"],
    correct: 1
  },
  {
    id: 5,
    question: "Which roster category requires applicants to already have a strong competitive record at the highest level?",
    options: ["Academy", "Semi-Pro", "Pro", "Grinder"],
    correct: 2
  },
  {
    id: 6,
    question: "When a Grinder+ member opens a ticket, what special instruction applies?",
    options: ["Immediately escalate to senior staff", "Give priority handling and note their Grinder+ status", "Deny their application automatically", "Skip age verification"],
    correct: 1
  },
  {
    id: 7,
    question: "What format should be used when blacklisting a member?",
    options: ["First name + offense", "Discord ID + reason + date", "Username + Discord ID + reason + date", "Only the Discord ID"],
    correct: 2
  },
  {
    id: 8,
    question: "How should a moderator handle a complex ticket that exceeds their authority?",
    options: ["Close the ticket and move on", "Ignore it until resolved", "Follow escalation procedures", "Deny the request immediately"],
    correct: 2
  },
  {
    id: 9,
    question: "Which roster category is specifically for players on a development path between Semi-Pro and Pro?",
    options: ["Junior Content Creator", "Streamer", "Academy", "GFX/VFX"],
    correct: 2
  },
  {
    id: 10,
    question: "What metric is tracked as part of Weekly Performance Metrics for moderators?",
    options: ["Discord XP gained", "Number of tickets handled and response times", "Hours played in games", "Friends added to server"],
    correct: 1
  },
  {
    id: 11,
    question: "A Content Creator applicant submits a Roster Ticket. What is your first step?",
    options: ["Request their social media links immediately", "Greet professionally and verify their age", "Ask for their winrate in ranked", "Ping a senior staff member"],
    correct: 1
  },
  {
    id: 12,
    question: "What is the minimum passing score to unlock the Certification Exam?",
    options: ["60%", "65%", "70%", "80%"],
    correct: 2
  },
  {
    id: 13,
    question: "How should shift management be handled when you are going to be inactive?",
    options: ["Just go offline without notice", "Submit a LOA and notify your supervisor", "Ask a friend to cover without official notice", "Close all active tickets"],
    correct: 1
  },
  {
    id: 14,
    question: "Which of these is part of the standard closing script for a ticket?",
    options: ["Warning the user about future violations", "A thank-you message and invitation to open a new ticket if needed", "A reminder about server rules", "Requesting a 5-star review"],
    correct: 1
  },
  {
    id: 15,
    question: "The GFX/VFX roster category is for members who...",
    options: ["Stream games on Twitch", "Create graphic design and visual effects content", "Play semi-professional ranked games", "Produce longform YouTube content"],
    correct: 1
  },
  {
    id: 16,
    question: "Which role should a Junior Content Creator be directed to upon application?",
    options: ["Directly to the Pro roster", "Appropriate onboarding channel for JCC applicants", "The Grinder channel", "The admin-only channel"],
    correct: 1
  },
  {
    id: 17,
    question: "What is the purpose of maintaining 'detailed records of all interactions'?",
    options: ["To gather data for monetization", "For accountability, escalation reference, and performance review", "So that Discord can audit the server", "To fill weekly quotas"],
    correct: 1
  },
  {
    id: 18,
    question: "If a user is found to be underage during a ticket interaction, what should you do?",
    options: ["Immediately ban them", "Redirect them to age-appropriate channels or deny roster application", "Ignore and proceed normally", "Ask them to wait until they are of age"],
    correct: 1
  },
  {
    id: 19,
    question: "What does the /warn command do in the context of mod responsibilities?",
    options: ["Sends a DM to the user", "Issues an official infraction on record for a user", "Locks the ticket channel", "Removes the user's roles"],
    correct: 1
  },
  {
    id: 20,
    question: "A Streamer applicant opens a Roster Ticket. What specific info should you request?",
    options: ["Their ranked win-loss record", "Platform, channel link, and average viewership", "Their gaming PC specs", "Number of Discord servers they're in"],
    correct: 1
  },
  {
    id: 21,
    question: "Which statement about the Semi-Pro category is correct?",
    options: ["Only for players above 21 years old", "For players with competitive experience below Pro level", "Only for console players", "Requires at least 1,000 Discord messages"],
    correct: 1
  },
  {
    id: 22,
    question: "Anti-cheat measures on the Certification Exam include which of the following?",
    options: ["Proctored video call", "Disabled copy/paste, disabled right-click, and refresh warning", "Randomized answer positions only", "A countdown timer with no other restrictions"],
    correct: 1
  },
  {
    id: 23,
    question: "What happens to an application once an admin clicks 'Deny' in the dashboard?",
    options: ["It is permanently deleted", "The status field is updated to 'denied' in the database", "The user is auto-banned", "Nothing — it must be manually deleted"],
    correct: 1
  },
  {
    id: 24,
    question: "Which Supabase table stores the results of the Practice Quiz?",
    options: ["applications", "users", "quiz_results", "certifications"],
    correct: 2
  },
  {
    id: 25,
    question: "What is the first thing you should do when a new ticket is opened?",
    options: ["Read all previous tickets from the user", "Greet them professionally and identify the ticket type", "Ask them to describe their issue in detail before saying hello", "Immediately ask for their Discord ID"],
    correct: 1
  },
  {
    id: 26,
    question: "How many scenario-based questions are on the Certification Exam?",
    options: ["10", "15", "20", "30"],
    correct: 2
  },
  {
    id: 27,
    question: "If a Roster Ticket applicant doesn't meet requirements, you should:",
    options: ["Approve them anyway if they seem motivated", "Politely decline and optionally provide guidance on improvement", "Ignore the ticket", "Escalate to the server owner immediately"],
    correct: 1
  },
  {
    id: 28,
    question: "The Creative roster category is primarily intended for:",
    options: ["Game coaches and analysts", "Members with artistic/creative skills outside of GFX/VFX", "Players with creative playstyles", "Social media managers only"],
    correct: 1
  },
  {
    id: 29,
    question: "What is the purpose of the Void Esports Moderator Training Platform?",
    options: ["To replace Discord bots", "To certify new moderators through interactive training and testing", "To manage server bans automatically", "To host community events"],
    correct: 1
  },
  {
    id: 30,
    question: "Who created the Void Mod Training platform?",
    options: ["The Void Admin Team", "Discord HQ", "Nicks Cold", "Supabase Support"],
    correct: 2
  }
];
