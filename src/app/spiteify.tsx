import React from 'react';
import { signIn, getSession } from 'next-auth/react';

const Spiteify: React.FC = () => {
  const [session, setSession] = React.useState<any>(null);

  React.useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setSession(session);
    };

    fetchSession();
  }, []);

  const handleLogin = () => {
    signIn('spotify', { callbackUrl: '/spiteify' });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-4">Spiteify</h1>
        <p className="text-gray-600 text-center mb-8">music that you'll hate</p>

        {session ? (
          <div>
            {/* Render album selection or recommendations once logged in */}
            <p>Welcome, {session.user?.name}!</p>
          </div>
        ) : (
          <button
            className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
            onClick={handleLogin}
          >
            Log in with Spotify
          </button>
        )}

        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>SRGK</p>
        </div>
      </div>
    </div>
  );
};

export default Spiteify;