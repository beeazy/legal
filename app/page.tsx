import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center font-mono">
      <div className="flex flex-col items-center w-full max-w-md px-4 py-12">
        <div className="mb-8">
          <Image
            src="/icon.png" // Place your app icon in public/icon.png
            alt="T✓ App Icon"
            width={128}
            height={128}
            className="rounded-2xl shadow-lg"
            priority
          />
        </div>
        {/* <h1 className="text-5xl font-bold text-green-400 mb-2 tracking-tight">T<span >✓</span></h1> */}
        <h2 className="text-xl text-green-300 mb-6">Terminal-inspired Task Manager</h2>
        <p className="text-gray-300 text-center mb-8">
          Organize your tasks with a retro terminal look.<br />
          Minimal, fast, and focused on productivity.
        </p>
        {/* <Link
          href="/main" // Change to your main app route
          className="bg-green-400 hover:bg-green-300 text-black font-bold py-3 px-8 rounded transition-colors text-lg shadow-md mb-8"
        >
          Get Started
        </Link> */}
        <div className="flex gap-6 text-sm text-green-400 mt-4">
          <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
          <span>|</span>
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </main>
  );
}
