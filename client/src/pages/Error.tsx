import { ServerCrash } from 'lucide-react';

const ErrorFallback = ({ error }: { error: Error }) => {
  console.error(error);
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="max-w-lg w-full text-center space-y-6">
        {/* Error Icon */}
        <div className="flex justify-center">
          <ServerCrash size={64} className="text-blue-500" />
        </div>

        {/* Error Message */}
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-white">
            Server Temporarily Unavailable
          </h1>
          <p className="text-gray-400 text-lg">
            We're experiencing technical difficulties. Our team has been
            notified and is working on the issue.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <main className="inline-flex items-center px-12 py-3 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-900/75 hover:text-white transition-colors duration-200">
            Try To Visit Your Website Later
          </main>
        </div>
      </div>
    </div>
  );
};

export default ErrorFallback;
