import AuthPage from './AuthPage';
import AuthProvider from './AuthContext';
function Register() {
  return (
    <>
        <AuthProvider>
          <AuthPage/>
        </AuthProvider>
    </>
  );
}

export default Register;