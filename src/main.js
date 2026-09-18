import './app.css'
import QRCode from 'qrcode'
import {
  ArrowRight,
  BarChart3,
  Boxes,
  BrainCircuit,
  ChevronLeft,
  Code2,
  Database,
  Gauge,
  Headphones,
  Lightbulb,
  ListMusic,
  LockKeyhole,
  Music2,
  Radio,
  RotateCcw,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Timer,
  Users,
  WandSparkles,
  Workflow,
  Zap,
  createIcons,
} from 'lucide'

const icons = {
  ArrowRight,
  BarChart3,
  Boxes,
  BrainCircuit,
  ChevronLeft,
  Code2,
  Database,
  Gauge,
  Headphones,
  Lightbulb,
  ListMusic,
  LockKeyhole,
  Music2,
  Radio,
  RotateCcw,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Timer,
  Users,
  WandSparkles,
  Workflow,
  Zap,
}

const steps = [
  {
    key: 'opening', eyebrow: 'Track 01 · Pick your opening track', title: 'What work moment are you trying to soundtrack?',
    description: 'Choose the outcome that would make the biggest difference right now.',
    options: [
      ['faster', 'Move faster', 'Clear the repeat work and keep ideas moving', 'zap', { ambition: 4, innovation: 1 }],
      ['build', 'Build something new', 'Turn a fresh idea into something real', 'code-2', { innovation: 4, intelligence: 1 }],
      ['decide', 'Make smarter decisions', 'Find the signal and act with confidence', 'brain-circuit', { intelligence: 4, data: 2 }],
      ['protect', 'Protect what matters', 'Strengthen trust, identity, and control', 'shield-check', { security: 5 }],
      ['data', 'Turn messy data into momentum', 'Connect information to useful action', 'database', { data: 5, intelligence: 2 }],
    ],
  },
  {
    key: 'genre', eyebrow: 'Track 02 · Choose your genre', title: 'What vibe should your learning mix have?',
    description: 'Pick the style that sounds most like how you want to learn.',
    options: [
      ['builder', 'Hands-on builder', 'Make it, test it, and learn by doing', 'boxes', { innovation: 3, data: 1 }],
      ['strategy', 'Strategy & leadership', 'Connect the technology to business impact', 'lightbulb', { ambition: 2, intelligence: 2 }],
      ['productivity', 'Everyday productivity', 'Practical gains in the flow of work', 'workflow', { ambition: 4 }],
      ['governed', 'Secure & governed', 'Adopt AI with confidence and control', 'lock-keyhole', { security: 4, data: 1 }],
      ['intelligence', 'Data-driven intelligence', 'Build context from connected data', 'bar-chart-3', { intelligence: 3, data: 3 }],
    ],
  },
  {
    key: 'tempo', eyebrow: 'Track 03 · Set the tempo', title: 'How deep do you want to go today?',
    description: 'We’ll tune the recommendation to your preferred pace.',
    options: [
      ['quick', 'Quick hit', 'A focused idea you can use today', 'timer', {}],
      ['practical', 'Practical walkthrough', 'Guided steps with useful examples', 'list-music', {}],
      ['technical', 'Deep technical set', 'Architecture, implementation, and detail', 'gauge', { innovation: 1, security: 1, data: 1 }],
      ['inspiration', 'Big-picture inspiration', 'A headliner mix for what comes next', 'sparkles', { ambition: 1, intelligence: 1 }],
    ],
  },
  {
    key: 'remix', eyebrow: 'Track 04 · Pick your remix', title: 'Where do you want the biggest upgrade?',
    description: 'One last choice, then we’ll press your learning mix.',
    options: [
      ['team', 'My team workflow', 'Help people collaborate and get more done', 'users', { ambition: 4 }],
      ['customer', 'My customer experience', 'Create better sales, service, and marketing moments', 'wand-sparkles', { ambition: 4, intelligence: 1 }],
      ['developer', 'My developer velocity', 'Build and ship software with AI', 'code-2', { innovation: 5 }],
      ['foundation', 'My data foundation', 'Connect, govern, and activate data', 'database', { data: 5, intelligence: 1 }],
      ['posture', 'My security posture', 'Protect access, information, and agents', 'shield-check', { security: 5 }],
    ],
  },
]

// Published playlist catalog sourced from slides 8-9 of the Team and Conversations Walking Deck.
const mixes = {
  ambition: {
    genre: 'Human ambition', title: 'Using Copilot Agents at Work',
    description: 'Turn everyday work into forward motion with Copilot, agents, and practical workflow improvements.',
    outcome: 'Leave with a focused way to save time and amplify the work that matters.',
    url: 'https://aiskillsnavigator.microsoft.com/playlists/precreated/precreatedplaylist-5bbaf4744c4517161c33ba3778431df71b30b538b28e2ec485394261bc85df51', icon: 'workflow', accent: 'coral',
    tracks: [
      { title: 'Vibe coding – Real Microsoft Workflows', url: 'https://aiskillsnavigator.microsoft.com/playlists/precreated/precreatedplaylist-95607f24a0bb94af1ad8d40d8450bf6ff9961bf866feeb404f00c74b2d78eab8' },
      { title: 'Accessibility in Practice', url: 'https://aiskillsnavigator.microsoft.com/playlists/precreated/precreatedplaylist-10656598e0d0678c911471008c8fc6a3fbb30b9dc3ea20655ad0e648b75072a1' },
      { title: 'Save time with Azure Copilot', url: 'https://aiskillsnavigator.microsoft.com/playlists/precreated/precreatedplaylist-df7f9faf4e25dba62e300b7644d1705e3d3e0e8efccb8f809347de02119b9080' },
    ],
  },
  innovation: {
    genre: 'Ubiquitous innovation', title: 'Use AI-assisted coding with GitHub Copilot',
    description: 'Explore AI-assisted coding, enterprise agents, and developer workflows built for experimentation and scale.',
    outcome: 'Find a practical next step for building and shipping with AI.',
    url: 'https://aiskillsnavigator.microsoft.com/playlists/precreated/precreatedplaylist-203a497597c0f9a90f9c39aed6d16817763da05eb82173161461fe67a372d80a', icon: 'code-2', accent: 'purple',
    tracks: [
      { title: 'Develop agentic AI systems with GitHub', url: 'https://aiskillsnavigator.microsoft.com/playlists/precreated/precreatedplaylist-c6b94c46f109a3eba698fbd71a1620a5f5e90085e75a9a48ab2033dd13ebaed6' },
      { title: 'Develop your first agent in Microsoft Foundry', url: 'https://aiskillsnavigator.microsoft.com/playlists/precreated/precreatedplaylist-d6aee0a201d1379e93b2ee538937a6910069fab0d5d4fa184ae49ed172ad763b' },
      { title: 'Optimize agentic DevOps with Azure DevOps and GitHub Copilot', url: 'https://aiskillsnavigator.microsoft.com/playlists/precreated/precreatedplaylist-2ac826fc3b9ee504a221b56bd0b135495bdb064846a4fb169f266c01ea7c7134' },
    ],
  },
  intelligence: {
    genre: 'Amplify your intelligence', title: 'Architect Context-Aware Agents with the Microsoft IQ Stack',
    description: 'Discover context-aware agents and connected intelligence that help people act on the right information.',
    outcome: 'See how context can turn scattered signals into useful decisions.',
    url: 'https://aiskillsnavigator.microsoft.com/playlists/precreated/precreatedplaylist-9a93962ed918bc4342f75f6d2491649683208f0ad9d23f071fba0c367980991c', icon: 'brain-circuit', accent: 'lilac',
    tracks: [
      { title: 'Transform your Data Into Context with Microsoft Fabric IQ', url: 'https://aiskillsnavigator.microsoft.com/playlists/precreated/precreatedplaylist-c93cbfc55d077e0d2dfc921ff45945bfa98d79be6e1bdd0306d992d0432a7165' },
    ],
  },
  security: {
    genre: 'Secure and trusted AI', title: 'Strengthen security foundations',
    description: 'Strengthen identity, information protection, governance, and visibility across your AI estate.',
    outcome: 'Identify the controls that help AI adoption move forward securely.',
    url: 'https://aiskillsnavigator.microsoft.com/playlists/precreated/precreatedplaylist-37dacc653aae9f335343fd111dc46d6b109c7cfdaff7f01d388a4c8c2dd9e6b1', icon: 'shield-check', accent: 'lime',
    tracks: [
      { title: 'Manage identity security for AI with Entra', url: 'https://aiskillsnavigator.microsoft.com/playlists/precreated/precreatedplaylist-99bc2bb08b6907bd71f1535c49f19035327ec7275198007316ba76b96c6a79ac' },
      { title: 'Protect information used by AI with Purview', url: 'https://aiskillsnavigator.microsoft.com/playlists/precreated/precreatedplaylist-f5eac64571e0406677992108712928e76166cf5650d41bc1a6d25398208d5037' },
      { title: 'Get visibility with Microsoft Agent 365, the control plane for agents', url: 'https://aiskillsnavigator.microsoft.com/playlists/precreated/precreatedplaylist-6ef0e3c341c8de23cbe657369dae34e604f5a209e72b77ee51ca2cc3bd756ade' },
    ],
  },
  data: {
    genre: 'Unified data and AI estate', title: 'Implement Data Engineering solutions using Microsoft Fabric',
    description: 'Connect governed data foundations to analytics, agents, and AI experiences that create measurable value.',
    outcome: 'Map a path from trusted data foundations to useful AI outcomes.',
    url: 'https://aiskillsnavigator.microsoft.com/playlists/precreated/precreatedplaylist-552c6ab2bd2af85876fd8722e5d962794bf02a9586bd9fa9fb9e84772a27ea83', icon: 'database', accent: 'teal',
    tracks: [
      { title: 'Build and orchestrate agents with Microsoft Foundry', url: 'https://aiskillsnavigator.microsoft.com/playlists/precreated/precreatedplaylist-8438ed3f08b4683a0c873ba00218a690a91aafee6f749fcd92846167ad11404d' },
      { title: 'Implement AI capabilities in SQL Server solutions', url: 'https://aiskillsnavigator.microsoft.com/playlists/precreated/precreatedplaylist-2d0848fe6b19c96618cd184928ed12b422d503ffc8ca6e8377bf047c48723219' },
      { title: 'Understand Azure Databricks integrations', url: 'https://aiskillsnavigator.microsoft.com/playlists/precreated/precreatedplaylist-aa4c9b4550a118f4e46fc56f0dbff511840ee302b8a30ffa2c4f8ffa153faf5d' },
    ],
  },
}

const app = document.querySelector('#app')
const RESULT_TIMEOUT_SECONDS = 45
let currentStep = -1
let answers = {}
let inactivityTimer
let resultTimer

const icon = (name, className = '') => `<i data-lucide="${name}" class="${className}" aria-hidden="true"></i>`

function recordMetric(name) {
  const key = `skillsQuest.${name}`
  const nextValue = Number.parseInt(window.localStorage.getItem(key) || '0', 10) + 1
  window.localStorage.setItem(key, String(nextValue))
}

function renderShell(content, progress = 0) {
  app.innerHTML = `
    <main class="kiosk-shell">
      <header class="brand-bar">
        <div class="brand-mark" aria-label="Skills Quest AI Jukebox">${icon('radio')}<span><strong>Skills Quest</strong><small>AI Jukebox</small></span></div>
      </header>
      <div class="progress-track" aria-label="Mix progress"><span style="--progress: ${progress}%"></span></div>
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
      <div class="quest-art" aria-hidden="true">
        <div class="record-stage">
          <div class="record-rings"><span>${icon('music-2')}</span></div>
          <div class="facet facet-one">${icon('zap')}</div>
          <div class="facet facet-two">${icon('brain-circuit')}</div>
          <div class="facet facet-three">${icon('shield-check')}</div>
        </div>
      </div>
      <div class="welcome-copy">
        <p class="eyebrow">Your next skill is on deck</p>
        <h1>Build your AI learning mix.</h1>
        <p>Pick four tracks. We’ll press a personalized playlist for the work you want to move forward.</p>
      </div>
      <button class="primary-button" id="start-button" type="button">Drop the needle ${icon('arrow-right')}</button>
      <p class="touch-hint">Tap to begin · About 60 seconds</p>
    </section>`)
  document.querySelector('#start-button').addEventListener('click', () => {
    recordMetric('activations')
    renderStep(0)
  })
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
        <span>Track ${String(index + 1).padStart(2, '0')} / ${String(steps.length).padStart(2, '0')}</span>
      </footer>
    </section>`, ((index + 1) / (steps.length + 1)) * 100)

  document.querySelectorAll('.choice-button').forEach((button) => {
    button.addEventListener('click', () => {
      answers[step.key] = button.dataset.value
      if (index === steps.length - 1) renderLoading()
      else renderStep(index + 1)
    })
  })
  document.querySelector('#back-button').addEventListener('click', () => index === 0 ? renderWelcome() : renderStep(index - 1))
}

function getRecommendation() {
  const scores = Object.fromEntries(Object.keys(mixes).map((key) => [key, 0]))
  steps.forEach((step) => {
    const selected = step.options.find(([value]) => value === answers[step.key])
    Object.entries(selected?.[4] || {}).forEach(([genre, score]) => { scores[genre] += score })
  })
  const [key] = Object.entries(scores).sort((left, right) => right[1] - left[1])[0]
  return { key, ...mixes[key] }
}

function renderLoading() {
  currentStep = steps.length
  const result = getRecommendation()
  recordMetric('mixesCreated')
  recordMetric(`recommendations.${result.key}`)
  renderShell(`
    <section class="screen loading-screen" aria-live="polite">
      <div class="pressing-record"><span>${icon(result.icon)}</span></div>
      <p class="eyebrow">Reading your tracks</p>
      <h1>Pressing your mix...</h1>
      <div class="equalizer" aria-hidden="true">${Array.from({ length: 9 }, (_, index) => `<span style="--bar: ${index % 4}"></span>`).join('')}</div>
    </section>`, 100)
  window.setTimeout(() => renderResult(result), 1800)
}

async function renderResult(result) {
  const tempo = steps[2].options.find(([value]) => value === answers.tempo)?.[1]
  const remix = steps[3].options.find(([value]) => value === answers.remix)?.[1]
  renderShell(`
    <section class="screen result-screen">
      <div class="now-playing">${icon('headphones')} Now Playing: Your AI Learning Mix</div>
      <div class="result-layout">
        <div class="album-sleeve accent-${result.accent}">
          <span class="album-label">Skills Quest · Ignite 2026</span>
          <div class="album-icon">${icon(result.icon)}</div>
          <span class="album-genre">${result.genre}</span>
          <strong>${result.title}</strong>
          <div class="album-number">SQ-${String(Object.keys(mixes).indexOf(result.key) + 1).padStart(2, '0')}</div>
        </div>
        <div class="result-copy">
          <p class="eyebrow">Your headliner</p>
          <h1>${result.title}</h1>
          <p>${result.description}</p>
          <div class="result-tags"><span>${tempo}</span><span>${remix}</span></div>
          <p class="learning-outcome"><strong>What you’ll take away</strong>${result.outcome}</p>
        </div>
      </div>
      <div class="result-actions">
        <div class="qr-frame"><canvas id="qr-code" aria-label="QR code for ${result.title}"></canvas></div>
        <div class="scan-copy">${icon('scan-line')}<strong>Queue this playlist</strong><span>Scan to save your mix and continue learning.</span></div>
        <div class="supporting-tracks"><span>Up next</span>${result.tracks.map((track, index) => `<div data-url="${track.url}"><b>${String(index + 1).padStart(2, '0')}</b><p>${track.title}</p></div>`).join('')}</div>
      </div>
      <footer class="result-footer">
        <button class="secondary-button" id="restart-button" type="button">${icon('rotate-ccw')} Start another mix</button>
        <p class="result-timer" role="timer">Resetting in <strong id="countdown">${RESULT_TIMEOUT_SECONDS}</strong> seconds</p>
      </footer>
    </section>`, 100)

  await QRCode.toCanvas(document.querySelector('#qr-code'), result.url, { width: 320, margin: 2, errorCorrectionLevel: 'H' })
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
  if (currentStep >= steps.length) return
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