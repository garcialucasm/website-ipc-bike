import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <a
          href="https://github.com/garcialucasm/ipc-alumni-bike"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="fixed left-0 top-0 flex w-full justify-center border-b bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30 hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30">
            Github project 👉
            <code className="font-mono font-bold text-blue-500 ps-1">
              github/ipc-alumni-bike
            </code>
          </p>
        </a>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            rel="noopener noreferrer"
          >
            By{" "}
            <a
              href="https://github.com/garcialucasm"
              className="hover:text-blue-500"
            >
              <span className="font-bold">Lucas</span>
            </a>
            &
            <a
              href="https://github.com/felipedreis"
              className="hover:text-blue-500"
            >
              <span className="font-bold">Felipe</span>
            </a>
          </div>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-blue-700 before:opacity-10 after:from-sky-900 after:via-[#0141ff] after:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/logo-ipc-alumni-bike-white.png"
          alt="IPC Bike Logo"
          width={220}
          height={74}
          priority
        />
      </div>

      <a
        href="http://bikes.felipedu.art/"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors  text-blue-200 hover:text-blue-500 hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`font-semibold`}>
          Try now
          <span className="ps-1 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
      </a>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScVMcb64zo40oHOvnjtm2sT7N8sNCRJpY4e1EPDuo8Hz5iLSg/viewform?usp=sf_link"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Feedback Form{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] inline text-sm opacity-50`}>
            Help us with your feedback using this Google form.
          </p>
          <span className="ps-1">🚀</span>
        </a>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScXNfkNSFDAaBfxreMgxxN5GcD58SIxPmGQher0-JtWq1u7Fw/viewform"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`text-2xl font-semibold`}>
            Feedback Form{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="mb-3 text-sm italic">(to send screenshots)</p>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 inline`}>
            To send us screenshots, please use this form instead.
          </p>
          <span className="ps-1">🖼️</span>
        </a>

        <a
          href="/planning"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Next features{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 inline`}>
            See the next features in the queue for development.
          </p>
          <span className="ps-1">⚙️</span>
        </a>

        <a
          href="/contacts"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Get in touch{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance inline`}
          >
            Please feel free to contact us.
          </p>
          <span className="ps-1">😊</span>
        </a>
      </div>
    </main>
  );
}
