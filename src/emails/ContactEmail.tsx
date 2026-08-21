import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

const brand = {
  indigo: "#2B2D8F",
  violet: "#4F52FF",
  black: "#0D0E1A",
  white: "#F7F7FB",
};

type ContactEmailProps = {
  name: string;
  email: string;
  budgetLabel: string;
  message: string;
};

export default function ContactEmail({ name, email, budgetLabel, message }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>
        New project inquiry from {name} — {budgetLabel}
      </Preview>
      <Body style={{ backgroundColor: brand.white, fontFamily: "Helvetica, Arial, sans-serif", margin: 0, padding: "32px 16px" }}>
        <Container style={{ maxWidth: 560, margin: "0 auto" }}>
          <div
            style={{
              background: `linear-gradient(135deg, ${brand.indigo}, ${brand.violet})`,
              borderRadius: "16px 16px 0 0",
              padding: "28px 32px",
            }}
          >
            <Text style={{ color: brand.white, fontSize: 13, letterSpacing: 1, margin: 0, opacity: 0.85 }}>
              SAGOR AHMED — PORTFOLIO
            </Text>
            <Heading style={{ color: "#ffffff", fontSize: 22, margin: "6px 0 0" }}>New project inquiry</Heading>
          </div>

          <Section
            style={{
              background: "#ffffff",
              border: `1px solid #e7e7f1`,
              borderTop: "none",
              borderRadius: "0 0 16px 16px",
              padding: "28px 32px",
            }}
          >
            <Row label="Name" value={name} />
            <Row label="Email" value={email} />
            <Row label="Budget" value={budgetLabel} />

            <Hr style={{ borderColor: "#e7e7f1", margin: "20px 0" }} />

            <Text style={{ fontSize: 13, color: "#90909f", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: 0.5 }}>
              Message
            </Text>
            <Text style={{ fontSize: 15, lineHeight: "24px", color: brand.black, whiteSpace: "pre-wrap", margin: 0 }}>
              {message}
            </Text>
          </Section>

          <Text style={{ fontSize: 12, color: "#90909f", textAlign: "center", marginTop: 20 }}>
            Sent from the contact form at your portfolio site. Reply directly to this email to respond to {name}.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0" }}>
      <Text style={{ fontSize: 14, color: "#5a5a6a", margin: 0 }}>{label}</Text>
      <Text style={{ fontSize: 14, color: "#0D0E1A", fontWeight: 600, margin: 0 }}>{value}</Text>
    </div>
  );
}
