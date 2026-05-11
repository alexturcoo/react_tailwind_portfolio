import Head from "next/head";
import { AiOutlineMail } from "react-icons/ai";

const contacts = [
  {
    label: "Academic",
    email: "alexander.turco@mail.utoronto.ca",
  },
  {
    label: "Personal",
    email: "alexanderturco1@gmail.com",
  },
];

const ContactCard = ({ label, email }) => (
  <a
    href={`mailto:${email}`}
    className="group relative flex items-start gap-4 overflow-hidden border border-teal-950/70 bg-[#0b1513]/80 p-5 shadow-[0_1px_0_rgba(255,255,255,0.04)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-amber-300/65 hover:shadow-[0_18px_50px_rgba(245,158,11,0.12)] sm:p-6"
  >
    <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-teal-300/70 via-amber-300/35 to-transparent" />
    <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-teal-900/70 bg-teal-950/20 text-2xl text-teal-200 transition-colors group-hover:border-amber-300/70 group-hover:text-amber-200">
      <AiOutlineMail />
    </span>
    <span>
      <span className="block text-sm text-gray-400">{label}</span>
      <span className="mt-2 block break-all text-gray-200">{email}</span>
    </span>
  </a>
);

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Contact | Alexander Turco</title>
      </Head>

      <section className="relative mx-auto grid min-h-[calc(100vh-150px)] max-w-5xl items-start gap-8 overflow-hidden px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-[220px_minmax(0,1fr)] md:items-center md:py-24">
        <div className="absolute inset-x-0 top-12 -z-10 h-px bg-gradient-to-r from-transparent via-teal-300/40 to-transparent animate-signal-line" />
        <div>
          <p className="mb-4 w-fit border border-teal-800/70 bg-teal-950/25 px-3 py-2 text-xs uppercase tracking-[0.18em] text-teal-200">
            connect
          </p>
          <h1 className="text-4xl tracking-tight text-white">Contact</h1>
        </div>

        <div className="grid gap-4">
          {contacts.map((contact) => (
            <ContactCard key={contact.email} {...contact} />
          ))}
        </div>
      </section>
    </div>
  );
}
