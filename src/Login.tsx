export default function Login({
  setLoggedIn,
}: {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        className="rounded-lg bg-pink-600 px-6 py-3 text-white"
        onClick={() => setLoggedIn(true)}
      >
        Login
      </button>
    </div>
  );
}