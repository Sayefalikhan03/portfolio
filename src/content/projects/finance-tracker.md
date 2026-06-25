---
title: "€ Ledger: a local-first money tracker I built for myself"
titleDe: "€ Ledger: ein lokaler Finanztracker, den ich für mich gebaut habe"
summary: "I've always tracked my spending by hand, but every app I tried was paid, manual, didn't auto-categorize, or just wasn't built for European banks. So I built my own: import German bank & credit-card PDF statements, teach-it-once auto-categorization, recurring-charge detection, a debt-payoff planner, and a 12-month what-if forecast — all running locally, nothing ever leaving my computer. Four years of spending in one view, so I can actually make better decisions."
summaryDe: "Ich verfolge meine Ausgaben schon immer von Hand, aber jede App, die ich ausprobiert habe, war kostenpflichtig, manuell, kategorisierte nicht automatisch oder war einfach nicht für europäische Banken gemacht. Also habe ich meine eigene gebaut: deutsche Bank- und Kreditkartenauszüge als PDF importieren, einmal angelernte automatische Kategorisierung, Erkennung wiederkehrender Zahlungen, einen Tilgungsplaner und eine 12-Monats-Prognose mit Was-wäre-wenn-Reglern — alles lokal, nichts verlässt jemals meinen Computer. Vier Jahre Ausgaben auf einen Blick, damit ich wirklich bessere Entscheidungen treffen kann."
tags: ["Next.js", "TypeScript", "SQLite", "Python", "PDF Parsing", "Privacy-first"]
image: "finance-tracker.png"
imageAlt: "€ Ledger dashboard: monthly spending breakdown, savings rate, and category charts"
featured: true
status: "live"
repo: "https://github.com/Sayefalikhan03/finance-tracker"
order: 2
---

A private, local-only personal finance tracker. Import bank and credit-card PDF statements, and see
where the money goes by month — spending breakdown, budgets, credit-card payoff, savings goals, and a
12-month forecast with what-if sliders. Built because every off-the-shelf option was paid, manual,
didn't auto-categorize, or wasn't made for European banks. Next.js + React + TypeScript on the front,
a Python (pdfplumber) parser for statements, and local SQLite for storage — nothing leaves the machine
unless you explicitly ask for AI advice.
