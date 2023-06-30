import Link from "next/link";
import Google from "../../components/auth/google/google";
import AuthLayout from "../../components/auth/auth-layout";
import OrLine from "../../components/auth/utils/OrLine";
import styles from '../../styles/utils.module.css'
import LoginForm from "../../components/auth/login-form/LoginForm";
import { useSession, signIn, signOut } from "next-auth/react"

const title = "StandR: Login";
export default function Login() {
  const { data: session } = useSession()

  return (
    <>
      <AuthLayout>
        <h4>Sign in to continue</h4>
        <p className={styles.lead}>The no. 1 Sales Management Tool</p>
        <br />
        <Google />
        <OrLine />
        <LoginForm signIn={signIn} />
        <p className={`${styles.lead} mt-3`} >Don't have an account?&nbsp;
          <Link href="/authentication/register" className="link btn-register">Sign Up</Link>
        </p>

      </AuthLayout>
    </>
  );
}
