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
    className="group flex items-start gap-4 border border-gray-800 bg-gray-950/70 p-5 transition-colors hover:border-teal-400/50 sm:p-6"
  >
    <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-gray-800 text-2xl text-teal-300 transition-colors group-hover:border-teal-400/60">
      <AiOutlineMail />
    </span>
    <span>
      <span className="block text-sm text-gray-500">{label}</span>
      <span className="mt-2 block break-all text-gray-300">{email}</span>
    </span>
  </a>
);

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Contact | Alexander Turco</title>
      </Head>

      <section className="mx-auto grid min-h-[calc(100vh-150px)] max-w-5xl items-start gap-8 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-[220px_minmax(0,1fr)] md:items-center md:py-24">
        <div>
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
