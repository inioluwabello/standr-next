import Link from "next/link";

export default function Index() {
  return (
    <>
      <p>This project is in progress<br />
      You are on the index page.<br />
      You can see the following pages</p>
      <ul>
        <li><Link target="_blank" href="https://linkedin-lemon-xi.vercel.app/">LinkedIn Clone (Mobile, Tablet, Desktop)</Link></li>

        <br />
        <li><Link target="_blank" href="/product">E:Shop | Product Page (Desktop Only)</Link></li>
        <li><Link target="_blank" href="/authentication/login">E:Shop | Login</Link></li>
        <li><Link target="_blank" href="/authentication/register">E:Shop | Register</Link></li>
        <li><Link target="_blank" href="/authentication/forgot-password">E:Shop | Forgot Password</Link></li>
        <li><Link target="_blank" href="/authentication/password-sent">E:Shop | Password Sent</Link></li>
      </ul>
      
    </>
  );
}