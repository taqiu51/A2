import Image from "next/image";

export default function TaqiProfile() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Header for Taqi */}
      <header className="bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg w-full">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Profile Section: Taqi</h1>
          <nav className="space-x-6">
            <a href="/portfolio" className="hover:text-gray-200">Portfolio</a>
            <a href="/about" className="hover:text-gray-200">About</a>
            <a href="/contact" className="hover:text-gray-200">Contact Us</a>
          </nav>
        </div>
      </header>

      {/* Main Content for Taqi */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        {/* Profile Section for Taqi */}
        <section className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
          <p><strong>Name:</strong> Taqi</p>
          <p><strong>education:</strong> inter</p>
          <p><strong>gender:</strong>male</p>
          <p><strong>Age:</strong> 20</p>
        </section>

        {/* Footer for Taqi */}
      </main>
        <footer className="bg-gradient-to-r from-red-500 to-orange-500 text-white w-full p-4 mt-auto">
          <div className="container  mx-auto text-center">
            <p>&copy; 2024 Taqi's Profile Page. All rights reserved.</p>
          </div>
        </footer>
    </div>
  );
}
