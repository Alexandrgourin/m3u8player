import type React from 'react';

const WelcomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f6f6f7] flex items-center justify-center p-4 sm:p-6 md:p-8">
      <main className="max-w-4xl mx-auto text-center">
        {/* Main Title Section */}
        <section className="mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2f3e4d] mb-6 md:mb-8 leading-tight">
            M3U8 Player Installed
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#2f3e4d] leading-relaxed max-w-3xl mx-auto font-medium px-4">
            Click the puzzle piece (1) in the top right of your browser. Then, click the little pin (2) next to the extension:
          </p>
        </section>

        {/* First Screenshot */}
        <section className="mb-8 md:mb-12">
          <div className="flex justify-center">
            <img
              src="/browser-extension-setup-1.webp"
              alt="Browser extension puzzle piece and pin instructions"
              className="max-w-full h-auto rounded-lg md:rounded-xl shadow-lg md:shadow-xl"
            />
          </div>
        </section>

        {/* Middle Instructions */}
        <section className="mb-8 md:mb-12">
          <p className="text-lg sm:text-xl md:text-2xl text-[#2f3e4d] leading-relaxed max-w-3xl mx-auto font-medium px-4">
            Open the extension (3) on any page to start using M3U8 Player:
          </p>
        </section>

        {/* Second Screenshot */}
        <section className="mb-8">
          <div className="flex justify-center">
            <img
              src="/browser-extension-setup-2.webp"
              alt="M3U8 Player extension interface"
              className="max-w-full h-auto rounded-lg md:rounded-xl shadow-lg md:shadow-xl"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default WelcomePage;
