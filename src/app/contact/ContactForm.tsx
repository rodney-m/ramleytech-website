"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

const projectTypes = [
  "Custom system",
  "Product or platform",
  "Automation / intelligence",
  "Infrastructure",
  "Financial system",
  "Rescue or modernisation",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const payload = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!res.ok) {
        setErrorMessage(
          payload.error ??
            "Something went wrong. Email us at projects@ramleytech.com."
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage(
        "Something went wrong. Email us at projects@ramleytech.com."
      );
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-surface-border bg-surface-raised p-10 flex flex-col items-center justify-center text-center min-h-80 gap-5">
        <div className="w-12 h-12 rounded-full bg-brand-primary/15 flex items-center justify-center text-brand-primary">
          <Send size={20} />
        </div>
        <div>
          <h2 className="font-display text-xl font-bold text-text-primary mb-2">
            Message received
          </h2>
          <p className="text-text-secondary text-sm max-w-xs">
            We&apos;ll get back within one business day.
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="text-brand-primary text-sm hover:underline"
        >
          Send another
        </button>
      </div>
    );
  }

  const fieldClass =
    "bg-surface-overlay border border-surface-border rounded-xl px-4 py-3.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-primary/40 transition-colors";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-surface-border bg-surface-raised p-8 flex flex-col gap-5"
      noValidate
    >
      {/* Honeypot — hidden from users */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-medium text-text-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Smith"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-xs font-medium text-text-muted"
          >
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="company"
          className="text-xs font-medium text-text-muted"
        >
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          autoComplete="organization"
          placeholder="Acme Corp"
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="type" className="text-xs font-medium text-text-muted">
          What do you need?
        </label>
        <select
          id="type"
          name="type"
          required
          defaultValue=""
          className={`${fieldClass} appearance-none`}
        >
          <option value="" disabled>
            Select one
          </option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="description"
          className="text-xs font-medium text-text-muted"
        >
          Tell us more
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          placeholder="What are you trying to achieve? Any constraints we should know?"
          className={`${fieldClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3">
          {errorMessage ||
            "Something went wrong. Email us at projects@ramleytech.com."}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-primary text-white font-semibold text-base hover:bg-[#2563eb] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send size={16} />
            Send message
          </>
        )}
      </button>
    </form>
  );
}
