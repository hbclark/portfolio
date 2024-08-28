"use server";
import { validateString } from "@/src/lib/utils";

import { Resend } from "resend";
import ContactFormEmail from "@/src/email/ContactFormEmail";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    return error.message;
  }
  return "An error occurred";
};

export default async function sendEmail(preState: any, formData: FormData) {
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "arcaneade@gmail.com",
      subject: "Message from Portfolio",
      reply_to: senderEmail as string,

      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });

    console.log(data);
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    } else if (error && typeof error === "object" && "message" in error) {
      return {
        error: error.message,
      };
    }
  }
  return {
    data,
  };
}
