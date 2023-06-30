import AuthLayout from "../../components/auth/auth-layout";
import styles from "../../styles/utils.module.css";
import Link from "next/link";

const title = "StandR: Login";
export default function Login() {
  return (
    <>
      <AuthLayout>
        <h4>Password reset</h4>
        <p className={styles.lead}>
          An email containing a reset link has been sent to your email. Please
          check your email and follow the link to continue
        </p>
        <br />

        <div class="d-grid gap-2">
          <Link href="/authentication/login" class="btn btn-primary" type="button">
            Back to login
          </Link>
        </div>
      </AuthLayout>
    </>
  );
}
