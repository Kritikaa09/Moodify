import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      {!session ? (
        <>
          <h1>Welcome to Moodify</h1>
          <button onClick={() => signIn("spotify")}>Login with Spotify</button>
        </>
      ) : (
        <>
          <h2>Hello, {session.user?.name}</h2>
          <button onClick={() => signOut()}>Logout</button>
        </>
      )}
    </div>
  );
}
