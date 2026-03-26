"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

const projectTypes = [
  "Custom software development",
  "Web application",
  "Mobile application",
  "AI / automation system",
  "Cloud infrastructure",
  "Fintech / payment system",
  "System rescue / modernisation",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate submission — wire up to your API route / form service here
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="glass rounded-2xl p-10 flex flex-col items-center justify-center text-center min-h-80 gap-5">
        <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
          <Send size={24} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-text-primary mb-2">
            Message received
          </h2>
          <p className="text-text-secondary text-sm max-w-xs">
            We&apos;ll review your project details and get back to you within one
            business day.
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="text-brand-primary text-sm hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass rounded-2xl p-8 flex flex-col gap-6"
      noValidate
    >
      <div>
        <h2 className="font-semibold text-text-primary text-lg mb-1">
          Project enquiry
        </h2>
        <p className="text-text-muted text-sm">
          All fields are required unless marked optional.
        </p>
      </div>

      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="name"
            className="text-xs font-semibold text-text-secondary uppercase tracking-wide"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Smith"
            className="bg-surface-overlay border border-surface-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/30 transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-xs font-semibold text-text-secondary uppercase tracking-wide"
          >
            Work Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            className="bg-surface-overlay border border-surface-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/30 transition-colors"
          />
        </div>
      </div>

      {/* Company */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="company"
          className="text-xs font-semibold text-text-secondary uppercase tracking-wide"
        >
          Company / Organisation
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          autoComplete="organization"
          placeholder="Acme Corp"
          className="bg-surface-overlay border border-surface-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/30 transition-colors"
        />
      </div>

      {/* Project type */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="type"
          className="text-xs font-semibold text-text-secondary uppercase tracking-wide"
        >
          Project Type
        </label>
        <select
          id="type"
          name="type"
          required
          defaultValue=""
          className="bg-surface-overlay border border-surface-border rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/30 transition-colors appearance-none"
        >
          <option value="" disabled>
            Select a category
          </option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Project description */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="description"
          className="text-xs font-semibold text-text-secondary uppercase tracking-wide"
        >
          Project Description
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          placeholder="Describe the system you need built. Include the problem it solves, rough scale, and any constraints or existing systems we'd need to integrate with."
          className="bg-surface-overlay border border-surface-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/30 transition-colors resize-none"
        />
      </div>

      {/* Budget (optional) */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="budget"
          className="text-xs font-semibold text-text-secondary uppercase tracking-wide"
        >
          Budget Range{" "}
          <span className="font-normal text-text-muted normal-case tracking-normal">
            (optional)
          </span>
        </label>
        <select
          id="budget"
          name="budget"
          defaultValue=""
          className="bg-surface-overlay border border-surface-border rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/30 transition-colors appearance-none"
        >
          <option value="">Prefer not to say</option>
          <option>Under $10,000</option>
          <option>$10,000 – $30,000</option>
          <option>$30,000 – $75,000</option>
          <option>$75,000 – $150,000</option>
          <option>$150,000+</option>
        </select>
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-primary text-surface-base font-semibold text-base hover:opacity-90 hover:scale-[1.01] active:scale-100 transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 glow-primary"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send size={17} />
            Start Your Project
          </>
        )}
      </button>
    </form>
  );
}
