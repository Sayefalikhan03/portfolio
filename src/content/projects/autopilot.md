---
title: "Autopilot: AI Agents that Plan, Build & Open MRs"
summary: "A personal Kanban board that fires Claude agents to plan and implement a change, commit and push it, then open a GitLab merge request — with a human approval gate before any code is written."
tags: ["Next.js", "Supabase", "Claude API", "GitLab", "TypeScript", "Automation"]
featured: true
status: "live"
order: 0
---

A personal issue tracker that turns a card on a board into a shipped merge request. Create an issue
→ a local daemon picks it up and asks Claude to write a plan → you review and approve → Claude
implements the plan, commits, pushes, and opens a GitLab MR. Built as a Next.js 14 board (Vercel),
a Node.js daemon running as a macOS LaunchAgent, a shared TypeScript package, and Supabase for state
and migrations. A practical take on directing AI to do real work — with a human approval gate kept
firmly in the loop.
