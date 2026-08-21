import { z } from "zod";

export const budgetOptions = [
  { value: "under-500", label: "Under $500" },
  { value: "500-1500", label: "$500 – $1,500" },
  { value: "1500-5000", label: "$1,500 – $5,000" },
  { value: "5000-plus", label: "$5,000+" },
] as const;

const budgetValues = budgetOptions.map((o) => o.value) as [
  (typeof budgetOptions)[number]["value"],
  ...(typeof budgetOptions)[number]["value"][],
];

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(100),
  email: z.email("Enter a valid email address"),
  budget: z.enum(budgetValues, { message: "Select a budget range" }),
  message: z.string().trim().min(10, "Tell me a bit more about your project").max(2000),
  turnstileToken: z.string().min(1, "Please complete the verification"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
