import Head from "next/head";
import { AiOutlineMail } from "react-icons/ai";

const contacts = [
  { label: "Academic", email: "alexander.turco@mail.utoronto.ca" },
  { label: "Personal", email: "alexanderturco1@gmail.com" },
];

export default function Contact() {
  return (
    <>
      <Head><title>Contact | Alexander Turco</title></Head>
      <section className="page-container standalone-section contact-section">
        <p className="eyebrow">Get in touch</p>
        <h1 className="page-title">Let’s connect<span className="accent">.</span></h1>
        <p className="section-description">For research, collaborations, or just a conversation.</p>
        <div className="contact-grid">{contacts.map(({ label, email }) => <a key={email} href={`mailto:${email}`} className="contact-card"><AiOutlineMail aria-hidden="true" /><span><span className="eyebrow">{label}</span><span className="contact-email">{email}</span></span><span aria-hidden="true">↗</span></a>)}</div>
      </section>
    </>
  );
}
