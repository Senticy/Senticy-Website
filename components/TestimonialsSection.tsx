const testimonials: Record<string, Array<{name:string;title:string;company:string;quote:string;initials:string}>> = {
  law: [
    { name:'Marcus Reynolds', title:'Managing Partner', company:'Reynolds & Associates LLP', initials:'MR', quote:'We were spending 15+ hours a week on IT issues that had nothing to do with practicing law. SentiCy deployed their AI agents and within 30 days our intake process was fully automated and help desk tickets dropped 80%. Our attorneys focus on clients now, not computers.' },
    { name:'Jennifer Nakamura', title:'IT Director', company:'Pacific Coast Legal Group', initials:'JN', quote:'The ABA compliance piece alone was worth every penny. SentiCy built automated audit trails and policy enforcement into our infrastructure. Our last bar association review went flawlessly — first time in 6 years we had zero findings.' },
    { name:'David Okafor', title:'Partner', company:'Okafor Litigation', initials:'DO', quote:'A ransomware attack hit our old provider\'s network. We watched other firms go down for weeks. Our SentiCy-protected environment was untouched. That\'s when I understood the difference between IT and real cybersecurity.' },
  ],
  finance: [
    { name:'Sarah Chen', title:'Chief Operating Officer', company:'Meridian Capital Partners', initials:'SC', quote:'Our LPs started asking detailed cybersecurity questions during due diligence. With SentiCy\'s security stack we could answer every question with confidence. We closed two new investors who specifically cited our security posture as a differentiator.' },
    { name:'Thomas Whitfield', title:'Chief Compliance Officer', company:'Westlake Asset Management', initials:'TW', quote:'SEC examination prep used to take weeks and cost hundreds of thousands in consultant fees. SentiCy\'s automated compliance monitoring changed that completely. Our last examination took three days. No findings.' },
    { name:'Priya Sharma', title:'VP of Operations', company:'Elevation Ventures', initials:'PS', quote:'We had a wire fraud attempt that looked completely legitimate. SentiCy\'s AI flagged the anomaly before anyone acted on it. The potential loss was $2.3M. The cost of our security package for the entire year was a fraction of that.' },
  ],
  healthcare: [
    { name:'Dr. Michael Torres', title:'Medical Director', company:'Coastal Medical Group', initials:'MT', quote:'Our EHR was constantly crashing during peak hours and our IT team was overwhelmed. SentiCy stabilized everything, automated patient intake, and built HIPAA compliance into every layer. Our clinical staff noticed the difference within days.' },
    { name:'Linda Watkins', title:'Practice Administrator', company:'Summit Health Partners', initials:'LW', quote:'We passed our HIPAA audit with zero findings for the first time in our practice history. SentiCy\'s compliance management system caught and resolved issues we didn\'t even know existed.' },
    { name:'Dr. James Kim', title:'CEO', company:'Pacific Telehealth Services', initials:'JK', quote:'Telehealth creates enormous security complexity. SentiCy built our entire infrastructure from the ground up. We\'ve had zero security incidents and zero compliance issues since launch.' },
  ],
}
export default function TestimonialsSection({ industry }: { industry: 'law'|'finance'|'healthcare' }) {
  const items = testimonials[industry] || testimonials.law
  return (
    <section style={{ padding:'100px 48px', background:'linear-gradient(to bottom,#010D12,#071E26,#010D12)' }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <p style={{ fontSize:11, letterSpacing:4, textTransform:'uppercase', color:'#09A3B2', textAlign:'center', marginBottom:16 }}>Client Results</p>
        <h2 style={{ fontSize:'clamp(28px,3.5vw,44px)', fontWeight:700, color:'#fff', textAlign:'center', marginBottom:60, lineHeight:1.2 }}>What Our Clients Say</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:24 }}>
          {items.map((t,i) => (
            <div key={i} style={{ background:'rgba(4,58,75,0.2)', border:'1px solid rgba(9,163,178,0.12)', borderRadius:12, padding:32, display:'flex', flexDirection:'column', gap:20 }}>
              <p style={{ fontSize:14, color:'rgba(255,255,255,0.6)', lineHeight:1.8, fontStyle:'italic', flex:1 }}>&ldquo;{t.quote}&rdquo;</p>
              <div style={{ display:'flex', alignItems:'center', gap:12, paddingTop:16, borderTop:'1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ width:44, height:44, borderRadius:'50%', background:'linear-gradient(135deg,#09A3B2,#043A4B)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:13, fontWeight:700, color:'#fff', flexShrink:0 }}>{t.initials}</div>
                <div><div style={{ fontSize:14, fontWeight:600, color:'#fff' }}>{t.name}</div><div style={{ fontSize:12, color:'rgba(255,255,255,0.35)' }}>{t.title}, {t.company}</div></div>
              </div>
            </div>
          ))}
        </div>
        <p style={{ textAlign:'center', fontSize:11, color:'rgba(255,255,255,0.2)', marginTop:32, letterSpacing:1 }}>* Testimonials are representative examples. Names changed for client confidentiality.</p>
      </div>
    </section>
  )
}
