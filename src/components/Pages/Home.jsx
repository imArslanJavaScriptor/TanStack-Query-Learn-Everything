import { Link } from "react-router-dom";

const features = [
  {
    title: "Infinite Queries",
    description:
      "Learn how to fetch paginated data seamlessly using useInfiniteQuery.",
  },
  {
    title: "Mutations",
    description:
      "Master create, update, and delete operations with optimistic updates.",
  },
  {
    title: "Caching",
    description:
      "Understand automatic caching, invalidation, and background refetching.",
  },
  {
    title: "Pagination",
    description:
      "Implement scalable pagination patterns with modern UX.",
  },
  {
    title: "Optimistic UI",
    description:
      "Create lightning-fast interfaces with instant UI updates.",
  },
  {
    title: "Protected Routes",
    description:
      "Handle authentication and route protection in React apps.",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white">
      {/* ================================================= */}
      {/* BACKGROUND GLOW */}
      {/* ================================================= */}

      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

      {/* ================================================= */}
      {/* HERO SECTION */}
      {/* ================================================= */}

      <section className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-300 backdrop-blur-xl">
          🚀 TanStack Query Learning Project
        </div>

        <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">
          Master{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            TanStack Query
          </span>{" "}
          with Real World CRUD Applications
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
          Learn server-state management, caching, infinite
          scrolling, optimistic updates, mutations, pagination,
          and modern React patterns by building beautiful and
          scalable applications.
        </p>

        {/* ================================================= */}
        {/* CTA BUTTONS */}
        {/* ================================================= */}

        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <Link
            to="/posts"
            className="rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:scale-105 hover:bg-blue-700"
          >
            Explore Posts
          </Link>

          <a
            href="https://tanstack.com/query/latest"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold backdrop-blur-xl transition hover:border-purple-500/40 hover:bg-white/10"
          >
            Documentation
          </a>
        </div>

        {/* ================================================= */}
        {/* STATS */}
        {/* ================================================= */}

        <div className="mt-20 grid w-full max-w-5xl gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="text-5xl font-black text-blue-400">
              10+
            </h2>

            <p className="mt-3 text-zinc-400">
              TanStack Concepts Covered
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="text-5xl font-black text-purple-400">
              CRUD
            </h2>

            <p className="mt-3 text-zinc-400">
              Real-world API Operations
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="text-5xl font-black text-pink-400">
              React
            </h2>

            <p className="mt-3 text-zinc-400">
              Modern Frontend Architecture
            </p>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* FEATURES SECTION */}
      {/* ================================================= */}

      <section className="relative mx-auto mt-32 max-w-7xl px-6 pb-24">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-black md:text-5xl">
            Features You’ll Learn
          </h2>

          <p className="mt-5 text-lg text-zinc-400">
            Hands-on concepts used in production-grade React
            applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-white/10"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-2xl font-bold">
                {index + 1}
              </div>

              <h3 className="text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================================================= */}
      {/* FOOTER */}
      {/* ================================================= */}

      <footer className="border-t border-white/10 py-8 text-center text-zinc-500">
        Built with React, Tailwind CSS & TanStack Query ⚡
      </footer>
    </div>
  );
};

export default Home;