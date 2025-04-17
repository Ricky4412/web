import { useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';
import { AnimatedSection, AnimatedDiv } from '../components/common/AnimatedSection';

const Portal = () => {
  const [user, loading] = useAuthState(auth);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [signOut] = useSignOut(auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  if (loading) return <div className="text-center py-12">Loading...</div>;

  return (
    <AnimatedSection className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {user ? (
          <AnimatedDiv className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-3xl font-bold">Welcome to Your Portal</h1>
                <p className="text-gray-600 mt-2">Signed in as {user.email}</p>
              </div>
              <button
                onClick={signOut}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Sign Out
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Your Projects</h3>
                <p className="text-gray-600 mb-4">
                  View and manage your current projects with UnixTron.
                </p>
                <button className="text-unix-primary hover:underline">
                  View Projects →
                </button>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Support Tickets</h3>
                <p className="text-gray-600 mb-4">
                  Check the status of your support requests.
                </p>
                <button className="text-unix-primary hover:underline">
                  View Tickets →
                </button>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Billing</h3>
                <p className="text-gray-600 mb-4">
                  Access invoices and payment information.
                </p>
                <button className="text-unix-primary hover:underline">
                  View Billing →
                </button>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Account Settings</h3>
                <p className="text-gray-600 mb-4">
                  Update your profile and preferences.
                </p>
                <button className="text-unix-primary hover:underline">
                  Settings →
                </button>
              </div>
            </div>
          </AnimatedDiv>
        ) : (
          <AnimatedDiv className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Customer Portal</h1>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-unix-primary focus:border-unix-primary"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-unix-primary focus:border-unix-primary"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-unix-primary text-white rounded-md hover:bg-blue-600"
              >
                Sign In
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Need access?{' '}
                <a href="/contact" className="text-unix-primary hover:underline">
                  Contact support
                </a>
              </p>
            </div>
          </AnimatedDiv>
        )}
      </div>
    </AnimatedSection>
  );
};

export default Portal;