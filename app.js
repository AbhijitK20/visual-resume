const SOURCES = {
  resume: "Resume",
  github: "GitHub",
  linkedin: "LinkedIn",
  site: "This page"
};

const answers = [
  {
    keys: ["strongest", "best proof", "best project", "ai proof", "impressive"],
    text: "The strongest AI proof is the Qwen3-4B tool-calling work: 90.0% on BFCL v4 Irrelevance Detection and 90.7% hard-abstention versus 53.5% for Qwen3-8B. It shows Abhijit can fine-tune a model, build the evaluation loop, and measure whether it knows when not to act.",
    sources: [SOURCES.github, SOURCES.resume]
  },
  {
    keys: ["qwen", "tool", "lora", "bfcl", "abstention", "fine-tune", "finetune"],
    text: "In the Qwen3-4B project, Abhijit built a stack of LoRAs for calibrated tool use and terminal agency. Measured results include 90.0% on BFCL v4 Irrelevance Detection, 90.7% hard-abstention, 86.0 BFCL parallel, and a 25-task bash suite improvement from 11/25 to 15/25 after GRPO.",
    sources: [SOURCES.github]
  },
  {
    keys: ["ngaita", "ngai", "erpnext", "frappe", "software development intern"],
    text: "At NGAITA Corporation, Abhijit develops Frappe Framework and ERPNext solutions: data models, workflows, integrations, backend services, role-based access, partner isolation, API/event contracts, and auditability for a partner ecosystem platform.",
    sources: [SOURCES.resume]
  },
  {
    keys: ["dynamo", "project dynamo", "evaluation", "benchmark"],
    text: "At Project Dynamo, he designed benchmark tasks across debugging, security, and ML infrastructure using Docker, then built reference solutions with artifact validation and anti-cheat protections, iterated through CI and QC gates.",
    sources: [SOURCES.resume]
  },
  {
    keys: ["winzera", "data operations", "etl", "reporting"],
    text: "At Winzera, he built Python/PostgreSQL ETL workflows and FastAPI reporting services for operational analytics. The resume states this improved reporting accuracy by 20%.",
    sources: [SOURCES.resume]
  },
  {
    keys: ["trustbridge", "trust bridge", "verification", "payments", "escrow"],
    text: "TrustBridge is a verification and protected-payment workspace. Abhijit built a four-state verification model (VERIFIED, VERIFIED_WITH_CONDITIONS, CONTRADICTED, UNDETERMINED), per-claim evidence tiers, a referee chat, protected deals, and a browser extension. Stack: Next.js, TypeScript, Prisma, PostgreSQL, Auth.js.",
    sources: [SOURCES.github, SOURCES.resume]
  },
  {
    keys: ["sentinel", "code review", "security", "sarif", "41 rules"],
    text: "Sentinel is a verify-first code review engine. Its Rust/PyO3 core implements 41 security, correctness, and compliance rules; every finding carries a reproduction test, fix suggestion, and confidence score. It ships as a CLI, SARIF output, GitHub Action, and pre-commit hook.",
    sources: [SOURCES.github, SOURCES.resume]
  },
  {
    keys: ["ai interviewer", "interviewer", "interview platform", "adaptive interview"],
    text: "AI Interviewer is a live adaptive technical interview platform with a React frontend, Spring Boot backend, and FastAPI AI service. It includes JWT auth, AI question generation, text/voice/coding modes, and PDF report export.",
    sources: [SOURCES.github, SOURCES.resume]
  },
  {
    keys: ["ananta", "discovery", "local", "recommendation"],
    text: "ANANTA is a context-aware local discovery engine for Mumbai and Navi Mumbai. It ranks places and events against time, budget, route feasibility, access needs, weather, and season, using a deterministic TypeScript decision engine with MapLibre and OSRM.",
    sources: [SOURCES.github, SOURCES.resume]
  },
  {
    keys: ["skills", "stack", "tech", "technologies", "tools"],
    text: "Core stack: Python, TypeScript, JavaScript, Rust, SQL; FastAPI, Node.js, Frappe/ERPNext, REST, JWT, RBAC; React, Next.js, Tailwind; PostgreSQL, Redis; AWS (EC2, S3, IAM), Docker, Linux, Git, GitHub Actions; AI/ML with GRU, scikit-learn, drift monitoring, and static analysis.",
    sources: [SOURCES.resume]
  },
  {
    keys: ["education", "college", "university", "degree", "gpa", "student"],
    text: "Abhijit is studying B.Tech in Computer Science and Engineering (Data Science) at Saraswati College of Engineering, with a GPA of 8.82/10 and an expected graduation year of 2028.",
    sources: [SOURCES.resume]
  },
  {
    keys: ["fit", "why hire", "why should", "good fit", "role", "internship", "looking for"],
    text: "He is targeting an AI / Data Engineer internship. The fit is strongest where model behavior, evaluation, and full-stack delivery meet: he has shipped an AI interview product, measured a fine-tuned model against BFCL, and built production-style systems in TypeScript and Python.",
    sources: [SOURCES.resume, SOURCES.site]
  },
  {
    keys: ["contact", "email", "reach", "linkedin", "github", "resume"],
    text: "You can reach Abhijit at abhijitchandrakantkapure@gmail.com, connect on LinkedIn at linkedin.com/in/abhijit-kapure-0a380b312, or review his code at github.com/AbhijitK20. The public resume is available as a PDF on this page.",
    sources: [SOURCES.resume, SOURCES.linkedin, SOURCES.github]
  },
  {
    keys: ["location", "where", "based", "mumbai", "remote", "relocate"],
    text: "He is based in Mumbai, India. The resume lists his current roles as remote, and this page describes him as remote-friendly. I do not have verified information about relocation or visa status.",
    sources: [SOURCES.resume]
  },
  {
    keys: ["award", "recognition", "achievement", "first place", "1st place"],
    text: "He won 1st Place at Business Model Masters, Institution's Innovation Council, Saraswati College of Engineering, in 2025–26.",
    sources: [SOURCES.resume]
  },
  {
    keys: ["project", "projects", "work", "portfolio", "built"],
    text: "Selected projects: Qwen3-4B tool-calling and terminal agent; Sentinel, a verify-first code review engine; TrustBridge, a verification and protected-payment workspace; and AI Interviewer, a live adaptive interview platform. ANANTA, AdaptIQ, and a network-attack forecasting platform are also on GitHub.",
    sources: [SOURCES.github, SOURCES.resume, SOURCES.site]
  }
];

const unknown = {
  text: "I don't have verified information about that. I can only answer from Abhijit's resume, public GitHub, LinkedIn, and the project notes on this page. For anything else, email him directly.",
  sources: [SOURCES.resume]
};

const privatePatterns = [
  "salary", "compensation", "pay", "visa", "sponsorship", "work authorization",
  "phone", "mobile", "address", "home", "aadhaar", "passport", "date of birth",
  "age", "marital", "religion", "caste", "background check"
];

function normalise(value) {
  return value.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function answerQuestion(question) {
  const q = normalise(question);
  if (!q) return unknown;
  if (privatePatterns.some((word) => q.includes(word))) {
    return {
      text: "I don't have verified information about that, and private details like salary expectations, phone number, address, or work authorization are intentionally not published. Please contact Abhijit directly.",
      sources: [SOURCES.site]
    };
  }
  let best = null;
  let bestScore = 0;
  for (const item of answers) {
    const score = item.keys.reduce((total, key) => total + (q.includes(key) ? key.split(" ").length + 1 : 0), 0);
    if (score > bestScore) {
      best = item;
      bestScore = score;
    }
  }
  return best || unknown;
}

const log = document.querySelector("#chat-log");
const form = document.querySelector("#chat-form");
const input = document.querySelector("#chat-input");
const suggestions = document.querySelector("#suggestions");

function addMessage(role, text, sources = []) {
  const message = document.createElement("div");
  message.className = `msg ${role}`;
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = text;
  if (sources.length) {
    const sourceRow = document.createElement("div");
    sourceRow.className = "sources";
    sources.forEach((source) => {
      const chip = document.createElement("span");
      chip.textContent = source;
      sourceRow.appendChild(chip);
    });
    bubble.appendChild(sourceRow);
  }
  message.appendChild(bubble);
  log.appendChild(message);
  log.scrollTop = log.scrollHeight;
}

function ask(question) {
  const trimmed = question.trim();
  if (!trimmed) return;
  addMessage("user", trimmed);
  const result = answerQuestion(trimmed);
  window.setTimeout(() => addMessage("bot", result.text, result.sources), 240);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  ask(input.value);
  input.value = "";
  input.focus();
});

suggestions.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  ask(button.textContent);
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
