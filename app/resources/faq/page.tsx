import type { Metadata } from 'next'
import '@/app/page-styles.css'
import InnerNav from '@/components/InnerNav'
import InnerCTA from '@/components/InnerCTA'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | SentiCy',
  description: "Answers to common questions about SentiCy's managed IT, cybersecurity, and AI automation services.",
}

const faqs = [
  {
    category: 'General',
    questions: [
      { q: 'What makes SentiCy different from other IT companies?', a: 'SentiCy is built for the AI era. While traditional MSPs focus on fixing computers and closing tickets, we deploy AI agents that eliminate the need for manual intervention in the first place. Our clients get an AI-powered workforce that handles intake, compliance, threat detection, help desk, and billing automatically. The result is 3× cost savings versus in-house staffing and 210+ hours saved per month.' },
      { q: 'What industries do you specialize in?', a: 'We specialize in three highly regulated industries where IT failures have real consequences: law firms (ABA/HIPAA compliance, case management, client confidentiality), financial firms (SEC/FINRA compliance, investor-grade security, wire fraud prevention), and healthcare (HIPAA compliance, EHR support, ransomware prevention). We serve businesses across California and Nevada.' },
      { q: 'Do you require long-term contracts?', a: "No. We don't believe in locking clients into contracts they can't exit. We earn your business every month based on results — not contract language. If you ever decide to leave, we'll help with the transition." },
      { q: 'How quickly can you get started?', a: 'Most clients are fully onboarded within 30 days. We start with a comprehensive assessment of your current environment, then design and deploy your managed IT, security, and AI automation program. AI agents go live within the first 30 days for most firms.' },
    ]
  },
  {
    category: 'AI Agents',
    questions: [
      { q: 'What exactly does an AI agent do?', a: "An AI agent is a purpose-built software system that performs a specific business function autonomously. Our intake agent receives new client inquiries, collects information, runs conflict checks, generates engagement letters, and routes the matter — without any human involvement. Each agent integrates with your existing tools and follows your firm's specific processes." },
      { q: 'How long does it take to deploy AI agents?', a: 'Most AI agent deployments take 2–4 weeks from kickoff to go-live. We start with a process audit, configure the agents to your specific requirements, integrate them with your existing systems, and test thoroughly before launch.' },
      { q: 'Will AI agents replace my staff?', a: "No — AI agents replace specific tasks, not people. The goal is to free your team from repetitive, low-value work so they can focus on what only humans can do: client relationships, complex decisions, and business development. Most clients don't reduce headcount — they redirect their team to higher-value work." },
      { q: "What happens when an AI agent encounters something it can't handle?", a: 'Every AI agent has defined escalation procedures. When it encounters an edge case outside its parameters, it flags the item for human review and routes it to the appropriate person. The agent learns from these escalations over time, reducing exceptions each month.' },
    ]
  },
  {
    category: 'Cybersecurity',
    questions: [
      { q: 'How do you protect against ransomware?', a: 'Ransomware protection requires multiple layers. SentiCy deploys endpoint protection, email security, network monitoring, multi-factor authentication, access controls, and automated backups that together stop ransomware at every entry point. Our AI monitoring detects ransomware behavior patterns before encryption begins, isolating affected systems in milliseconds.' },
      { q: 'What compliance frameworks do you support?', a: 'We support ABA Model Rules and HIPAA for law firms, SEC Regulation S-P and FINRA requirements for financial firms, HIPAA and HITECH for healthcare organizations, SOC2 for professional services, and CMMC for government contractors.' },
      { q: 'How quickly do you respond to security incidents?', a: 'For active incidents, our AI monitoring detects and begins automated response in under 1 second. Critical incidents are escalated to our security team within 5 minutes. Engineers are available 24/7/365 for business-disrupting incidents.' },
      { q: 'Do you offer security awareness training?', a: 'Yes. Our program includes role-based video modules, simulated phishing attacks, real-time coaching, and progress tracking. Training is AI-personalized based on each employee\'s risk profile. The average firm sees 90% reduction in phishing susceptibility within 90 days.' },
    ]
  },
  {
    category: 'Managed IT',
    questions: [
      { q: 'What is your average response time for IT support?', a: 'Our target response time is under 5 minutes for all support requests. Most tier-1 issues are resolved by our AI help desk agent in under 60 seconds. Complex issues are escalated to engineers with full context from the AI system.' },
      { q: 'Do you provide onsite support in CA and NV?', a: 'Yes. We provide both remote and onsite support across Los Angeles, Orange County, San Diego, San Francisco Bay Area, Las Vegas, Henderson, and surrounding areas. Onsite visits are included for issues that cannot be resolved remotely.' },
      { q: 'Can you take over from our current IT provider?', a: 'Yes, and we specialize in clean transitions. We assess your current environment, document everything, and execute a migration plan that minimizes disruption. Most transitions take 30–45 days with zero downtime.' },
      { q: 'Do you manage Microsoft 365?', a: 'Yes — complete Microsoft 365 management is a core part of our managed IT service, including user and license management, security policy configuration, Teams, SharePoint, OneDrive, Exchange, and Microsoft Copilot readiness.' },
    ]
  },
]

export default function FAQPage() {
  return (
    <>
      <InnerNav />
      <div className="page-hero" style={{ minHeight: '35vh' }}>
        <div className="page-hero-inner">
          <span className="page-eyebrow">FAQ</span>
          <h1 className="page-title">Answers to Your<br /><span>Most Common Questions.</span></h1>
          <p className="page-sub">Everything you need to know about SentiCy&apos;s AI agents, cybersecurity, managed IT, and how we work.</p>
        </div>
      </div>
      <div className="page-body">
        <div className="divider" />
        <div style={{ padding: '100px 48px' }}>
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            {faqs.map((section, si) => (
              <div key={si} style={{ marginBottom: 72 }}>
                <h2 style={{ fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', color: '#09A3B2', marginBottom: 32 }}>{section.category}</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {section.questions.map((faq, qi) => (
                    <div key={qi} style={{ padding: '28px 0', borderBottom: '1px solid rgba(9,163,178,0.08)' }}>
                      <h3 style={{ fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 12, lineHeight: 1.3 }}>{faq.q}</h3>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8 }}>{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="divider" />
        <InnerCTA headline="Still Have Questions?" sub="Talk to one of our experts. We'll answer any question about our services, pricing, and what SentiCy can do for your firm — no sales pressure." />
      </div>
    </>
  )
}
