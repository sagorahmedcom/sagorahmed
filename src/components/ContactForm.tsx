"use client";

import { useRef, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { contactFormSchema, budgetOptions, type ContactFormValues } from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full rounded-lg border border-border bg-bg-soft px-4 py-3 text-sm text-fg placeholder:text-fg-faint outline-none transition-colors focus:border-accent/50";

export default function ContactForm() {
  const turnstileRef = useRef<TurnstileInstance>(null);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", budget: undefined, message: "", turnstileToken: "" },
  });

  const turnstileToken = useWatch({ control, name: "turnstileToken" });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };

      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      toast.success("Message sent", {
        description: "Thanks for reaching out — I'll reply within a day.",
      });
      reset();
      turnstileRef.current?.reset();
    } catch (err) {
      toast.error("Couldn't send your message", {
        description: err instanceof Error ? err.message : "Please try again in a moment.",
      });
      turnstileRef.current?.reset();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    // eslint-disable-next-line react-hooks/refs -- turnstileRef is only read inside the async submit callback, never during render
    <form onSubmit={handleSubmit(onSubmit)} className="card-surface flex flex-col gap-5 rounded-xl p-6 sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input {...register("name")} type="text" placeholder="Jane Doe" className={inputClass} />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input {...register("email")} type="email" placeholder="jane@company.com" className={inputClass} />
        </Field>
      </div>

      <Field label="Project budget" error={errors.budget?.message}>
        <select {...register("budget")} defaultValue="" className={inputClass}>
          <option value="" disabled>
            Select a range
          </option>
          {budgetOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Project details" error={errors.message?.message}>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Tell me a bit about your project, timeline, and goals..."
          className={cn(inputClass, "resize-none")}
        />
      </Field>

      <div>
        <Turnstile
          ref={turnstileRef}
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ""}
          onSuccess={(token) => setValue("turnstileToken", token, { shouldValidate: true })}
          onExpire={() => setValue("turnstileToken", "", { shouldValidate: true })}
          onError={() => setValue("turnstileToken", "", { shouldValidate: true })}
          options={{ theme: "auto" }}
        />
        {errors.turnstileToken && <p className="mt-2 text-xs text-red-400">{errors.turnstileToken.message}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting || !turnstileToken}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 font-mono text-sm font-medium text-accent-contrast transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {submitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send message
            <Send size={15} />
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block font-mono text-xs text-fg-muted">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}
