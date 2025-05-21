import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center font-mono">
      <div className="flex flex-col items-center w-full max-w-md px-4 py-12">
        <div className="mb-8">
          <Image
            src="/icon.png" 
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
        <div className="flex flex-col items-center gap-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.goodworkevans.TODOCLI"
            target="_blank"
            rel="noopener noreferrer"
            className="my-4"
          >
            <Image
              src="/badge.png"
              alt="Get it on Google Play"
              width={162}
              height={64}
              priority
            />
          </a>
          <Link
            href="https://t-check.expo.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 text-sm flex items-center gap-4 my-4"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            Try Web Version
          </Link>
        </div>

        <div className="flex gap-6 text-sm text-green-400 mt-4">
          <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
          <span>|</span>
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-gray-500">
        Inspired by the dead simple todo list app by{' '}
        <a
          href="https://x.com/joshuawolk?lang=en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:underline"
        >
          @joshuawolk
        </a>
        {' '}(
        <a
          href="https://todocli.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:underline"
        >
          todocli.vercel.app
        </a>
        ).
      </div>
    </main>
  );
}
