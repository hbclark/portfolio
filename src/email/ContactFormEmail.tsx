import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type TContactFormEmailProps = {
  message: string;
  senderEmail: string;
};
export default function ContactFormEmail({
  message,
  senderEmail,
}: TContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Message form your portfolio</Preview>
      <Tailwind>
        <Body className="bg-gray-100">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 rounded-md">
              <Heading className="leading-tight">
                You received the following message from contact form
              </Heading>
              <Text>{message}</Text>
              <Text>The sender's email is {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
