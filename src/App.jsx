import { useMemo, useState } from 'react'
import { FaBrain, FaCode, FaDatabase, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiFirebase, SiFlutter, SiPytorch, SiSupabase, SiUnity } from 'react-icons/si'
import { FaArrowUpRightFromSquare, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6'
import { SiNotion } from 'react-icons/si'
import './App.css'

const profileLinks = {
  github: 'https://github.com/leeseungmin1013',
  email: 'mailto:hello@adenlee.dev',
  notion: 'https://www.notion.so/',
  linkedin: 'https://www.linkedin.com/',
}

const labels = {
  ko: {
    heroTitle: 'AdenLee',
    tagline: '바이브 코더~~',
    keywordTitle: '주요 키워드',
    ctaGithub: 'GitHub',
    ctaContact: '연락하기',
    aboutTitle: 'About Me',
    aboutIntro:
      '아이디어를 빠르게 프로토타이핑하고 실제 동작하는 제품으로 연결하는 개발자입니다.',
    aboutPhilosophy:
      '개발 철학은 작게 만들고 빠르게 검증하기입니다. 완벽한 설계보다 사용자 반응을 기반으로 개선합니다.',
    interests: '관심 분야',
    focus: '현재 집중',
    focusText: 'AI + 인터랙티브 경험 + 게임형 UI를 결합한 프로젝트 제작',
    stackTitle: 'Tech Stack',
    stackNote: 'ALL with Vibe coding',
    projectsTitle: 'Projects',
    projectsNote: 'GIF/썸네일을 카드 상단에 배치했습니다.',
    githubRepo: 'GitHub Repo',
    githubProfile: 'GitHub Profile',
    demo: 'Demo',
    contactTitle: 'Contact',
    language: 'Language',
    navAbout: 'About',
    navStack: 'Stack',
    navProjects: 'Projects',
    navContact: 'Contact',
    vibeTitle: 'ALL STACKS, ONE FLOW',
    vibeDesc: 'React부터 Unity, LLM, Backend까지 전부 Vibe Coding 워크플로우로 빠르게 설계하고 구현합니다.',
  },
  en: {
    heroTitle: 'AdenLee',
    tagline: 'Vibe Coder~~',
    keywordTitle: 'Key Focus',
    ctaGithub: 'GitHub',
    ctaContact: 'Contact',
    aboutTitle: 'About Me',
    aboutIntro:
      'I am a developer who ships fast prototypes and turns them into usable products.',
    aboutPhilosophy:
      'My philosophy is to build small and validate quickly, then iterate based on real feedback.',
    interests: 'Interests',
    focus: 'Current Focus',
    focusText: 'Building projects that combine AI, interactive experience, and game-style UI.',
    stackTitle: 'Tech Stack',
    stackNote: 'ALL with Vibe coding',
    projectsTitle: 'Projects',
    projectsNote: 'GIF/thumbnail previews are now applied to each card.',
    githubRepo: 'GitHub Repo',
    githubProfile: 'GitHub Profile',
    demo: 'Demo',
    contactTitle: 'Contact',
    language: 'Language',
    navAbout: 'About',
    navStack: 'Stack',
    navProjects: 'Projects',
    navContact: 'Contact',
    vibeTitle: 'ALL STACKS, ONE FLOW',
    vibeDesc:
      'From React to Unity, LLM, and backend, everything is designed and shipped through a Vibe Coding workflow.',
  },
}

const keywords = ['Unity', 'React', 'LLM', 'AI', 'Vibe Coding']

const stackGroups = [
  {
    title: 'Frontend',
    items: ['React', 'Flutter'],
  },
  {
    title: 'Game',
    items: ['Unity (2D / 3D)', 'ML-Agents'],
  },
  {
    title: 'AI',
    items: ['PyTorch', 'LLM API', 'Reinforcement Learning'],
  },
  {
    title: 'Backend',
    items: ['Firebase', 'Supabase', 'Node.js'],
  },
]

const stackIcons = {
  React: { icon: FaReact, colorClass: 'icon-react' },
  Flutter: { icon: SiFlutter, colorClass: 'icon-flutter' },
  'Unity (2D / 3D)': { icon: SiUnity, colorClass: 'icon-unity' },
  'ML-Agents': { icon: FaBrain, colorClass: 'icon-ml' },
  PyTorch: { icon: SiPytorch, colorClass: 'icon-pytorch' },
  'LLM API': { icon: FaCode, colorClass: 'icon-llm' },
  'Reinforcement Learning': { icon: FaBrain, colorClass: 'icon-rl' },
  Firebase: { icon: SiFirebase, colorClass: 'icon-firebase' },
  Supabase: { icon: SiSupabase, colorClass: 'icon-supabase' },
  'Node.js': { icon: FaNodeJs, colorClass: 'icon-node' },
}

const interestItems = [
  { name: 'unity', icon: SiUnity, colorClass: 'icon-unity' },
  { name: 'react', icon: FaReact, colorClass: 'icon-react' },
  { name: 'llm', icon: FaCode, colorClass: 'icon-llm' },
  { name: 'AI', icon: FaBrain, colorClass: 'icon-ml' },
  { name: 'Vibe coding', icon: FaDatabase, colorClass: 'icon-vibe' },
]

const vibeBadges = ['Rapid Prototype', 'Cross-Stack Build', 'AI Assisted', 'Ship Fast']

const contactItems = [
  { name: 'Email', href: profileLinks.email, icon: FaEnvelope },
  { name: 'GitHub', href: profileLinks.github, icon: FaGithub, external: true },
  { name: 'Notion', href: profileLinks.notion, icon: SiNotion, external: true },
  { name: 'LinkedIn', href: profileLinks.linkedin, icon: FaLinkedin, external: true },
]

const projects = [
  {
    title: 'Socrates Diary App',
    description: {
      ko: '생각을 기록하고 회고를 돕는 일기형 웹 앱 프로젝트',
      en: 'A reflective diary-style web app for recording thoughts and tracking growth.',
    },
    tech: ['React', 'Supabase', 'Vibe Coding'],
    demo: 'https://socrates-diary-app.vercel.app/',
    github: 'https://github.com/leeseungmin1013/diary-relay-server',
    githubType: 'repo',
    thumbnail: '/projects/socrates-diary.png',
  },
  {
    title: 'Yutnori Delta',
    description: {
      ko: '전통 게임 요소를 디지털 플레이 경험으로 만든 프로젝트',
      en: 'A project that transforms Korean traditional board-game mechanics into digital play.',
    },
    tech: ['React', 'Game Logic', 'Vibe Coding'],
    demo: 'https://yutnori-delta.vercel.app/',
    github: 'https://github.com/leeseungmin1013',
    githubType: 'profile',
    thumbnail: '/projects/yutnori-delta.png',
  },
  {
    title: 'Party Play Hub',
    description: {
      ko: '여러 사람이 함께 즐기는 파티형 미니게임 허브',
      en: 'A multi-game party hub for quick group play sessions.',
    },
    tech: ['React', 'UI/UX', 'Vibe Coding'],
    demo: 'https://party-play-hub-five.vercel.app/',
    github: 'https://github.com/leeseungmin1013',
    githubType: 'profile',
    thumbnail: '/projects/party-play-hub.png',
  },
  {
    title: 'Mind Walk',
    description: {
      ko: '생각 정리와 몰입을 돕는 인터랙티브 실험 프로젝트',
      en: 'An interactive experiment for focused reflection and mental flow.',
    },
    tech: ['React', 'Supabase', 'Vibe Coding'],
    demo: 'https://mind-walk.vercel.app/',
    github: 'https://github.com/leeseungmin1013',
    githubType: 'profile',
    thumbnail: 'https://mind-walk.vercel.app/logo.png',
  },
  {
    title: 'Minners',
    description: {
      ko: 'Unity 기반 인디 게임 프로젝트',
      en: 'An indie game project built with Unity.',
    },
    tech: ['Unity', 'C#', 'Vibe Coding'],
    demo: 'https://adenlee.itch.io/minners',
    github: 'https://github.com/adenlee',
    githubType: 'profile',
    thumbnail: 'https://img.itch.zone/aW1nLzI1NjcwNjIxLnBuZw==/508x254%23mb/tpJWx0.png',
  },
  {
    title: 'TankSurvival',
    description: {
      ko: '생존 액션 중심의 Unity 게임 프로젝트',
      en: 'A Unity survival-action game project.',
    },
    tech: ['Unity', 'Game Design', 'Vibe Coding'],
    demo: 'https://adenlee.itch.io/tanksurvival',
    github: 'https://github.com/adenlee',
    githubType: 'profile',
    thumbnail: '/projects/tanksurvival.png',
  },
]

function App() {
  const [language, setLanguage] = useState('ko')
  const t = labels[language]
  const nextLanguage = useMemo(() => (language === 'ko' ? 'en' : 'ko'), [language])

  return (
    <div className="site">
      <header className="top-header">
        <a href="#" className="brand">
          AdenLee
        </a>
        <nav className="top-nav" aria-label="Section navigation">
          <a href="#about">{t.navAbout}</a>
          <a href="#stack">{t.navStack}</a>
          <a href="#projects">{t.navProjects}</a>
          <a href="#contact">{t.navContact}</a>
        </nav>
        <button className="lang-toggle" onClick={() => setLanguage(nextLanguage)}>
          {language === 'ko' ? 'EN' : 'KO'}
        </button>
      </header>

      <header className="hero section">
        <p className="eyebrow">Developer Profile</p>
        <h1 className="hero-name">{t.heroTitle}</h1>
        <p className="tagline">{t.tagline}</p>
        <p className="section-note">{t.keywordTitle}</p>
        <div className="keyword-row">
          {keywords.map((keyword) => (
            <span key={keyword} className="chip">
              {keyword}
            </span>
          ))}
        </div>
        <div className="cta-row">
          <a className="btn primary" href={profileLinks.github} target="_blank" rel="noreferrer">
            {t.ctaGithub}
          </a>
          <a className="btn ghost" href="#contact">
            {t.ctaContact}
          </a>
        </div>
      </header>

      <section className="section about" id="about">
        <h2>{t.aboutTitle}</h2>
        <p>{t.aboutIntro}</p>
        <p>{t.aboutPhilosophy}</p>
        <div className="about-grid">
          <div className="about-card">
            <h3>{t.interests}</h3>
            <div className="interest-items">
              {interestItems.map((item) => {
                const Icon = item.icon
                return (
                  <span key={item.name} className="stack-item">
                    <span className={`icon-dot ${item.colorClass}`} aria-hidden="true">
                      <Icon />
                    </span>
                    {item.name}
                  </span>
                )
              })}
            </div>
          </div>
          <div className="about-card">
            <h3>{t.focus}</h3>
            <p>{t.focusText}</p>
          </div>
        </div>
      </section>

      <section className="section" id="stack">
        <h2>{t.stackTitle}</h2>
        <p className="section-note">{t.stackNote}</p>
        <div className="vibe-highlight" role="note" aria-label="Vibe coding stack highlight">
          <div className="vibe-headline">
            <span className="vibe-pill">VIBE MODE</span>
            <strong>{t.vibeTitle}</strong>
          </div>
          <p>{t.vibeDesc}</p>
          <div className="vibe-badges">
            {vibeBadges.map((badge) => (
              <span key={badge} className="vibe-badge">
                {badge}
              </span>
            ))}
          </div>
        </div>
        <div className="stack-grid">
          {stackGroups.map((group) => (
            <article key={group.title} className="stack-card">
              <h3>{group.title}</h3>
              <div className="stack-items">
                {group.items.map((item) => {
                  const iconMeta = stackIcons[item] || { icon: FaCode, colorClass: 'icon-default' }
                  const Icon = iconMeta.icon
                  return (
                    <span className="stack-item" key={item}>
                      <span className={`icon-dot ${iconMeta.colorClass}`} aria-hidden="true">
                        <Icon />
                      </span>
                      {item}
                    </span>
                  )
                })}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <h2>{t.projectsTitle}</h2>
        <p className="section-note">{t.projectsNote}</p>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <a href={project.demo} className="thumb" target="_blank" rel="noreferrer">
                <img src={project.thumbnail} alt={`${project.title} preview`} loading="lazy" />
              </a>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description[language]}</p>
                <div className="keyword-row">
                  {project.tech.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a className="project-btn ghost" href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub aria-hidden="true" />
                    {project.githubType === 'repo' ? t.githubRepo : t.githubProfile}
                  </a>
                  <a className="project-btn primary" href={project.demo} target="_blank" rel="noreferrer">
                    <FaArrowUpRightFromSquare aria-hidden="true" />
                    {t.demo}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <h2>{t.contactTitle}</h2>
        <div className="contact-grid">
          {contactItems.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.name}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
              >
                <span className="contact-icon" aria-hidden="true">
                  <Icon />
                </span>
                <span>{item.name}</span>
              </a>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default App
