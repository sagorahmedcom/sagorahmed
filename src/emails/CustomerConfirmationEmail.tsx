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

type CustomerConfirmationEmailProps = {
  name: string;
  budgetLabel: string;
  message: string;
};

export default function CustomerConfirmationEmail({ name, budgetLabel, message }: CustomerConfirmationEmailProps) {
  const firstName = name.split(" ")[0];

  return (
    <Html>
      <Head />
      <Preview>Thanks for reaching out, {firstName} — I&apos;ll reply within a day.</Preview>
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
            <Heading style={{ color: "#ffffff", fontSize: 22, margin: "6px 0 0" }}>Message received</Heading>
          </div>

          <Section
            style={{
              background: "#ffffff",
              border: "1px solid #e7e7f1",
              borderTop: "none",
              borderRadius: "0 0 16px 16px",
              padding: "28px 32px",
            }}
          >
            <Text style={{ fontSize: 15, lineHeight: "24px", color: brand.black, margin: "0 0 16px" }}>
              Hi {firstName},
            </Text>
            <Text style={{ fontSize: 15, lineHeight: "24px", color: brand.black, margin: "0 0 20px" }}>
              Thanks for reaching out through my portfolio site. I&apos;ve received your project details below and
              I&apos;ll get back to you within a day.
            </Text>

            <Hr style={{ borderColor: "#e7e7f1", margin: "20px 0" }} />

            <Text style={{ fontSize: 13, color: "#90909f", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: 0.5 }}>
              Your submission
            </Text>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0" }}>
              <Text style={{ fontSize: 14, color: "#5a5a6a", margin: 0 }}>Budget</Text>
              <Text style={{ fontSize: 14, color: brand.black, fontWeight: 600, margin: 0 }}>{budgetLabel}</Text>
            </div>

            <Text style={{ fontSize: 14, color: "#5a5a6a", margin: "16px 0 6px" }}>Message</Text>
            <Text style={{ fontSize: 15, lineHeight: "24px", color: brand.black, whiteSpace: "pre-wrap", margin: 0 }}>
              {message}
            </Text>

            <Hr style={{ borderColor: "#e7e7f1", margin: "20px 0" }} />

            <Text style={{ fontSize: 14, lineHeight: "22px", color: "#5a5a6a", margin: 0 }}>
              Need to add anything? Just reply directly to this email — it goes straight to my inbox.
            </Text>
          </Section>

          <Text style={{ fontSize: 12, color: "#90909f", textAlign: "center", marginTop: 20 }}>
            Sagor Ahmed — WordPress &amp; Frontend Developer
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
