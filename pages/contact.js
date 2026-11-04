import Head from "next/head";
import { useState } from "react";
import { AiOutlineCheck, AiOutlineCopy, AiOutlineMail } from "react-icons/ai";

const contacts = [
  { label: "Academic", email: "alexander.turco@mail.utoronto.ca" },
  { label: "Personal", email: "alexanderturco1@gmail.com" },
];

function ContactCard({ label, email }) {
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setMessage("Email address copied.");
    } catch {
      setCopied(false);
      setMessage("Select the email address to copy it, or use the link to open your email app.");
    }
  }

  return (
    <article className="contact-card">
      <div className="contact-card-heading"><AiOutlineMail aria-hidden="true" /><h2 className="eyebrow">{label}</h2></div>
      <a href={`mailto:${email}`} className="contact-email">{email}</a>
      <div className="contact-actions">
        <a href={`mailto:${email}`} className="text-link" aria-label={`Send an email to ${email}`}>Send an email <span aria-hidden="true">↗</span></a>
        <button type="button" className="copy-button" onClick={copyEmail} aria-label={`Copy ${label.toLowerCase()} email address`}>
          {copied ? <AiOutlineCheck aria-hidden="true" /> : <AiOutlineCopy aria-hidden="true" />}
          {copied ? "Copied" : "Copy email"}
        </button>
      </div>
      <p className="copy-status" role="status">{message}</p>
    </article>
  );
}

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Alexander Turco</title>
        <meta name="description" content="Get in touch with Alexander Turco about research, collaborations, computational genomics, and machine learning." />
      </Head>
      <section className="page-container standalone-section contact-section">
        <p className="eyebrow">Get in touch</p>
        <h1 className="page-title">Let’s connect<span className="accent">.</span></h1>
        <p className="section-description">For research, collaborations, or just a conversation. I’d be happy to hear from you.</p>
        <div className="contact-grid">{contacts.map((contact) => <ContactCard key={contact.email} {...contact} />)}</div>
      </section>
    </>
  );
}
