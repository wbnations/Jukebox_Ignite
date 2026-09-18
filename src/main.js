import './app.css'
import QRCode from 'qrcode'
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  ChevronLeft,
  Code2,
  GraduationCap,
  Lightbulb,
  Megaphone,
  RotateCcw,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Users,
  WandSparkles,
  Wrench,
  createIcons,
} from 'lucide'

const icons = {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  ChevronLeft,
  Code2,
  GraduationCap,
  Lightbulb,
  Megaphone,
  RotateCcw,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Users,
  WandSparkles,
  Wrench,
}

const steps = [
  {
    key: 'role', eyebrow: 'First, tell us about you', title: 'Where do you spend your time?',
    description: 'Choose the option that feels closest. There are no wrong answers.',
    options: [
      ['business', 'Business & leadership', 'Strategy, sales, finance, or operations', 'briefcase-business'],
      ['creative', 'Marketing & creative', 'Campaigns, content, and customer stories', 'megaphone'],
      ['technical', 'Technology & development', 'Code, cloud, security, and IT', 'code-2'],
      ['learner', 'Learning & career growth', 'School, job search, or a new direction', 'graduation-cap'],
    ],
  },
  {
    key: 'goal', eyebrow: 'Now choose your destination', title: 'What would you like AI to help you do?',
    description: 'Pick the outcome that would make the biggest difference today.',
    options: [
      ['create', 'Create something stronger', 'Write, present, brainstorm, and communicate', 'wand-sparkles'],
      ['analyze', 'Make sense of information', 'Find insights, summarize, and make decisions', 'chart-no-axes-combined'],
      ['automate', 'Save time on repeat work', 'Streamline tasks and improve workflows', 'wrench'],
      ['lead', 'Lead change with confidence', 'Adopt AI responsibly across a team', 'users'],
    ],
  },
  {
    key: 'theme', eyebrow: 'One final choice', title: 'Which AI theme sparks your curiosity?',
    description: 'This will tune your recommendation.',
    options: [
      ['copilot', 'Everyday Copilot', 'Practical help in the tools you use now', 'sparkles'],
      ['agents', 'AI agents', 'Systems that can plan and take action', 'bot'],
      ['responsible', 'Responsible AI', 'Security, trust, and human oversight', 'shield-check'],
      ['foundations', 'AI foundations', 'Build confidence from the basics', 'lightbulb'],
    ],
  },
]

const playlists = {
  business: {
    title: 'Make Your Case with Copilot',
    description: 'Turn priorities and numbers into a clear, compelling story that moves decisions forward.',
    url: 'https://aiskillsnavigator.microsoft.com/playlists/da1a49d6-a08a-46cc-a674-1a7f407792e3',
  },
  creative: {
    title: 'Launch Faster with Copilot',
    description: 'Move from an early idea to polished, campaign-ready content with practical Copilot skills.',
    url: 'https://aiskillsnavigator.microsoft.com/playlists/caeb6afa-cfd0-475f-a04d-0e0d48f9face',
  },
  technical: {
    title: 'Use AI-assisted coding with GitHub Copilot',
    description: 'Write, review, and understand code faster while improving quality and control.',
    url: 'https://aiskillsnavigator.microsoft.com/playlists/precreated/precreatedplaylist-203a497597c0f9a90f9c39aed6d16817763da05eb82173161461fe67a372d80a',
  },
  learner: {
    title: 'Starting with AI: The Basics',
    description: 'Build practical AI confidence for school, work, and your next big move.',
    url: 'https://aiskillsnavigator.microsoft.com/playlists/precreated/precreatedplaylist-7256d1f6e562537b830906cd28454732a31c2f4a45c4eca8f0b16bf8d51701ff',
  },
}

const app = document.querySelector('#app')
const RESULT_TIMEOUT_SECONDS = 15
let currentStep = -1
let answers = {}
let inactivityTimer
let resultTimer

const icon = (name, className = '') => `<i data-lucide="${name}" class="${className}" aria-hidden="true"></i>`

function renderShell(content, progress = 0) {
  app.innerHTML = `
    <main class="kiosk-shell">
      <header class="brand-bar">
        <div class="brand-mark" aria-label="AI Skills Jukebox">${icon('sparkles')}<span>AI Skills <strong>Jukebox</strong></span></div>
        <span class="brand-tag">Powered by AI Skills Navigator</span>
      </header>
      <div class="progress-track" aria-label="Journey progress"><span style="--progress: ${progress}%"></span></div>
      ${content}
    </main>`
  createIcons({ icons })
}

function renderWelcome() {
  window.clearInterval(resultTimer)
  currentStep = -1
  answers = {}
  renderShell(`
    <section class="screen welcome-screen">
      <div class="record-stage" aria-hidden="true">
        <div class="record-rings"><span>${icon('sparkles')}</span></div>
        <div class="sound-bars">${Array.from({ length: 18 }, (_, index) => `<span style="--bar: ${index % 5}"></span>`).join('')}</div>
      </div>
      <div class="welcome-copy">
        <p class="eyebrow">Find your next AI skill</p>
        <h1>What should you learn next?</h1>
        <p>Make three quick choices. We’ll match you with an AI Skills Navigator playlist built for where you want to go.</p>
      </div>
      <button class="primary-button" id="start-button" type="button">Start the mix ${icon('arrow-right')}</button>
      <p class="touch-hint">Tap to begin · About 30 seconds</p>
    </section>`)
  document.querySelector('#start-button').addEventListener('click', () => renderStep(0))
}

function renderStep(index) {
  window.clearInterval(resultTimer)
  currentStep = index
  const step = steps[index]
  const options = step.options.map(([value, label, detail, optionIcon]) => `
    <button class="choice-button" type="button" data-value="${value}">
      <span class="choice-icon">${icon(optionIcon)}</span>
      <span class="choice-copy"><strong>${label}</strong><small>${detail}</small></span>
      ${icon('arrow-right', 'choice-arrow')}
    </button>`).join('')

  renderShell(`
    <section class="screen question-screen">
      <div class="step-heading"><p class="eyebrow">${step.eyebrow}</p><h1>${step.title}</h1><p>${step.description}</p></div>
      <div class="choice-list">${options}</div>
      <footer class="screen-footer">
        <button class="text-button" id="back-button" type="button">${icon('chevron-left')} Back</button>
        <span>Step ${index + 1} of ${steps.length}</span>
      </footer>
    </section>`, ((index + 1) / (steps.length + 1)) * 100)

  document.querySelectorAll('.choice-button').forEach((button) => {
    button.addEventListener('click', () => {
      answers[step.key] = button.dataset.value
      if (index === steps.length - 1) renderResult()
      else renderStep(index + 1)
    })
  })
  document.querySelector('#back-button').addEventListener('click', () => index === 0 ? renderWelcome() : renderStep(index - 1))
}

async function renderResult() {
  currentStep = steps.length
  const result = playlists[answers.role]
  const goal = steps[1].options.find(([value]) => value === answers.goal)?.[1]
  const theme = steps[2].options.find(([value]) => value === answers.theme)?.[1]

  renderShell(`
    <section class="screen result-screen">
      <div class="result-heading">
        <div class="result-badge">${icon('sparkles')} Your playlist is ready</div>
        <h1>${result.title}</h1><p>${result.description}</p>
      </div>
      <div class="result-tags" aria-label="Your choices"><span>${goal}</span><span>${theme}</span></div>
      <div class="qr-panel">
        <div class="qr-frame"><canvas id="qr-code" aria-label="QR code for ${result.title}"></canvas></div>
        <div class="scan-copy">${icon('scan-line')}<strong>Scan to keep learning</strong><span>Open your camera and point it at the code.</span></div>
      </div>
      <button class="secondary-button" id="restart-button" type="button">${icon('rotate-ccw')} Find another playlist</button>
      <p class="result-timer" role="timer">Returning to start in <strong id="countdown">${RESULT_TIMEOUT_SECONDS}</strong> seconds</p>
    </section>`, 100)

  await QRCode.toCanvas(document.querySelector('#qr-code'), result.url, { width: 360, margin: 2, errorCorrectionLevel: 'H' })
  document.querySelector('#restart-button').addEventListener('click', renderWelcome)

  window.clearTimeout(inactivityTimer)
  let secondsRemaining = RESULT_TIMEOUT_SECONDS
  resultTimer = window.setInterval(() => {
    secondsRemaining -= 1
    const countdown = document.querySelector('#countdown')
    if (countdown) countdown.textContent = secondsRemaining
    if (secondsRemaining <= 0) renderWelcome()
  }, 1000)
}

function resetInactivityTimer() {
  if (currentStep === steps.length) return
  window.clearTimeout(inactivityTimer)
  inactivityTimer = window.setTimeout(() => {
    if (currentStep !== -1) renderWelcome()
  }, 90000)
}

for (const eventName of ['pointerdown', 'keydown']) {
  window.addEventListener(eventName, resetInactivityTimer, { passive: true })
}

renderWelcome()
resetInactivityTimer()
