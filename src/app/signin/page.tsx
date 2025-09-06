"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = (e.target as any).email.value;
    const password = (e.target as any).password.value;

    const res = await signIn("credentials", { email, password, redirect: false });
    if (res?.error) alert(res.error);
    else window.location.href = "/home";
  };

  return (
    <form onSubmit={handleLogin} className="p-4 flex flex-col gap-2">
      <input name="email" type="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
      <button type="button" onClick={() => signIn("google")}>Login with Google</button>
    </form>
  );
}
