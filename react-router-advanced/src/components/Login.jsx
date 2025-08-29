export default function Login({ onLogin }) {
    return (
      <div className="p-4">
        <h2>Login Page</h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onLogin}
        >
          Login
        </button>
      </div>
    );
  }
  