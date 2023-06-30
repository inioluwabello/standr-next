import Link from "next/link";
import Google from "../../components/auth/google/google";
import AuthLayout from "../../components/auth/auth-layout";
import OrLine from "../../components/auth/utils/OrLine";
import styles from "../../styles/utils.module.css";
import RegisterForm from "../../components/auth/register-form/RegisterForm";

const title = "StandR: Login";
export default function Login() {
  return (
    <>
      <AuthLayout>
        <h4>Sign up to continue</h4>
        <p className={styles.lead}>The no. 1 Sales Management Tool</p>
        <br />
        <Google />
        <OrLine />
        <RegisterForm />

        <p className={`${styles.lead} mt-3`}>
          Already have an account?&nbsp;
          <Link href="/authentication/login" class="link btn-register">
            Login
          </Link>
        </p>
      </AuthLayout>
    </>
  );
}
