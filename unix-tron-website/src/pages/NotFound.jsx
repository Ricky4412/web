import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-9xl font-bold text-unix-primary">404</h1>
      <h2 className="text-2xl font-medium mt-4">Page Not Found</h2>
      <p className="mt-2 text-gray-600">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-unix-primary text-white rounded-md hover:bg-blue-600"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;