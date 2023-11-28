import type { Metadata } from "next";
import { LoginForm } from "~/components/login/login";

export const metadata: Metadata = {
  title: "Login",
  description: "Login forms built using the components.",
};

export default function LoginPage() {
  return <LoginForm />;
}
