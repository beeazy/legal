import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout title="T✓ App - Legal Documents">
      <div className="max-w-2xl mx-auto my-8 text-center">
        <h1 className="text-3xl font-bold mb-6">T✓ App Legal Documents</h1>
        <p className="mb-8">
          Welcome to the T✓ App legal documentation page. Here you can find our Privacy Policy and Terms of Service.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Privacy Policy</h2>
            <p className="mb-4">
              Learn about how we collect, use, and protect your data when you use our app.
            </p>
            <Link 
              href="/privacy-policy" 
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Read Privacy Policy
            </Link>
          </div>
          
          <div className="border p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Terms of Service</h2>
            <p className="mb-4">
              Understand the rules and guidelines for using our app and services.
            </p>
            <Link 
              href="/terms-of-service" 
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Read Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}