import Image from "next/image";



export default function Home() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      

      <nav className="relative z-10 flex items-center justify-between px-6 py-5 md:px-12 lg:px-20 animate-fade-in-up">
        <a href="#" className="flex items-center gap-2.5">
          <Image
            src="/App Icon.svg"
            alt="Let's Walk"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="font-display text-lg font-semibold tracking-tight text-zinc-900">
            Let&apos;s Walk
          </span>
        </a>
        <div className="flex items-center gap-6">
          <a href="#features" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Features</a>
          <a href="https://github.com/jothachil/jotbook/releases" target="_blank" rel="noopener" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Changelog</a>
          <a href="https://github.com/jothachil/jotbook" target="_blank" rel="noopener" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">GitHub</a>
        
        </div>
      </nav>


      <main className="relative z-10">
        <section className="flex min-h-[calc(100vh-68px)] flex-col items-center justify-center px-6 lg:flex-row lg:items-center lg:justify-between lg:px-20">
          <div className="max-w-xl text-center lg:text-left">
            <div className="animate-fade-in-up-delay-1">
             
                
            </div>
            <h1 className="mt-8 font-display text-4xl font-bold leading-tight tracking-tight text-zinc-900 md:text-5xl animate-fade-in-up-delay-2">
              Every step counts              
            </h1>
            <p className="mt-2 max-w-md text-lg leading-relaxed text-zinc-500 mx-auto lg:mx-0 animate-fade-in-up-delay-3">
              Track your walks, monitor your health, and build habits that last.
              A beautifully simple way to stay active, every day.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start animate-fade-in-up-delay-4">
              <a
                href="#download"
                className="group relative flex h-13 items-center gap-3 rounded-full bg-brand-500 px-6 font-medium text-white transition-all duration-300 hover:bg-brand-400 hover:shadow-[0_0_30px_rgba(255,73,10,0.3)]"
              >
                <Image
                  src="/apple-icon.svg"
                  alt="Apple"
                  width={20}
                  height={20}
                />
                Download for iOS
              </a>
              
            </div>
          </div>

          <div className="absolute bottom-0 right-0 lg:right-24 xl:right-48 animate-fade-in-up-delay-3">
            
            <Image
              src="/hero.png"
              alt="Let's Walk app showing step tracking, health metrics, and walk trends"
              width={2354}
              height={2188}
              priority
              className="relative max-h-[90vh] w-auto object-contain object-bottom drop-shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
            />
          </div>
        </section>

        

       
      </main>

      
    </div>
  );
}
