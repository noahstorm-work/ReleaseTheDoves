"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { works, stateText, groups, glows } from "./data";

function ArtworkSlot({ work, index, large = false, active = false, onClick }: {
  work: { id: string; title: string; state: string };
  index: number;
  large?: boolean;
  active?: boolean;
  onClick: () => void;
}) {
  const label = `${work.id}: ${work.title}, ${work.state}`;

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.75, delay: Math.min(index * 0.035, 0.25) }}
      aria-label={label}
      className={`group relative w-full text-left overflow-hidden rounded-[2rem] border transition-all duration-500 ${
        active
          ? "border-zinc-200 shadow-[0_0_80px_rgba(255,255,255,0.16)]"
          : "border-zinc-800/80 hover:border-zinc-500/80"
      } ${large ? "aspect-[3/4]" : "aspect-[4/5]"}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${glows[work.state]}`} />

      <div className="absolute inset-0 opacity-[0.32] bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,0.45),transparent_13%),radial-gradient(circle_at_46%_48%,rgba(255,255,255,0.12),transparent_12%),radial-gradient(circle_at_32%_70%,rgba(255,160,70,0.18),transparent_20%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.08),transparent)] translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="relative w-28 h-36 md:w-32 md:h-44 rounded-full border border-white/10 bg-black/20 blur-[0.2px] shadow-[0_0_60px_rgba(255,255,255,0.08)]" />
        <div className="absolute text-center">
          <p className="text-[10px] uppercase tracking-[0.42em] text-zinc-500 mb-3">
            {work.id}
          </p>
          <p className="text-zinc-200 text-lg font-light">{work.title}</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 via-black/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <p className="text-[10px] uppercase tracking-[0.34em] text-zinc-400">
          {work.state}
        </p>
      </div>
    </motion.button>
  );
}

function StateGlyph({ state }: { state: string }) {
  return (
    <div className="relative h-28 w-28 shrink-0 rounded-full border border-zinc-800 flex items-center justify-center overflow-hidden" role="img" aria-label={state}>
      <div className="absolute inset-4 rounded-full border border-zinc-700/70" />
      <div className="absolute inset-0 bg-[conic-gradient(from_90deg,transparent,rgba(255,255,255,.18),transparent,rgba(255,128,64,.16),transparent)] animate-spin [animation-duration:18s]" />
      <div className="relative h-3 w-3 rounded-full bg-zinc-300 shadow-[0_0_22px_rgba(255,255,255,0.7)]" />
      <span className="sr-only">{state}</span>
    </div>
  );
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <div className="min-h-screen bg-black text-zinc-400 flex items-center justify-center p-12 text-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.55em] mb-6">Error</p>
            <p className="text-2xl font-light">Something went wrong loading the archive.</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function StormXStudio() {
  const [selected, setSelected] = useState(works[0]);

  const selectedIndex = useMemo(
    () => works.findIndex((work) => work.id === selected.id),
    [selected]
  );

  return (
    <main className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-zinc-200 selection:text-black overflow-hidden">
      <ErrorBoundary>
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,122,45,0.13),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(82,153,255,0.12),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.07),transparent_28%)]" />
          <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <nav className="fixed top-0 left-0 right-0 z-50 px-5 py-5 md:px-10 flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-zinc-500 mix-blend-screen">
          <a href="#home" className="hover:text-zinc-100 transition-colors">
            Storm X Studio
          </a>
          <div className="hidden md:flex gap-7">
            <a href="#collection" className="hover:text-zinc-100 transition-colors">
              Sequence
            </a>
            <a href="#archive" className="hover:text-zinc-100 transition-colors">
              Archive
            </a>
            <a href="#contact" className="hover:text-zinc-100 transition-colors">
              Contact
            </a>
          </div>
        </nav>

        <section
          id="home"
          className="relative min-h-screen flex items-center px-6 py-24 md:px-12"
        >
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.05fr_.95fr] gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
            >
              <p className="text-[11px] uppercase tracking-[0.6em] text-zinc-500 mb-10">
                First Public Sequence
              </p>

              <h1 className="text-[17vw] leading-[0.78] md:text-8xl lg:text-[8.8rem] font-extralight tracking-[-0.08em] mb-10">
                Release
                <br />
                the Doves
              </h1>

              <p className="text-2xl md:text-4xl font-extralight text-zinc-300 leading-tight mb-12">
                Instinct made.
                <br />
                Instantly released.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <a
                  href="#collection"
                  className="inline-flex justify-center rounded-full border border-zinc-700/90 px-7 py-4 text-[11px] uppercase tracking-[0.32em] text-zinc-300 hover:border-zinc-200 hover:text-white transition-colors"
                >
                  Enter the Archive
                </a>

                <p className="text-sm text-zinc-600 max-w-xs">
                  Sixteen works. Four conditions. One first doorway.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.25 }}
              className="relative max-w-md mx-auto w-full"
            >
              <div className="absolute -inset-10 rounded-full bg-white/5 blur-3xl" />
              <ArtworkSlot
                work={works[0]}
                index={0}
                large
                active
                onClick={() => {}}
              />
              <p className="mt-6 text-center text-[10px] uppercase tracking-[0.4em] text-zinc-600">
                Opening Image / RTD-01
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative min-h-screen px-6 py-28 md:px-12 border-t border-zinc-900/80">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[.8fr_1.2fr] gap-12 items-center">
            <div>
              <p className="text-[11px] uppercase tracking-[0.55em] text-zinc-600 mb-8">
                The Rule
              </p>
              <h2 className="text-5xl md:text-7xl font-extralight tracking-[-0.06em] leading-none mb-8">
                No revision.
                <br />
                No retention.
              </h2>
            </div>

            <p className="text-2xl md:text-4xl font-extralight leading-tight text-zinc-300">
              Only an archive of states,
              <br />
              captured as they occurred.
            </p>
          </div>
        </section>

        <section
          id="collection"
          className="relative px-6 py-24 md:px-12 border-t border-zinc-900/80"
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
              <div>
                <p className="text-[11px] uppercase tracking-[0.55em] text-zinc-600 mb-7">
                  Sequence 001
                </p>
                <h2 className="text-5xl md:text-8xl font-extralight tracking-[-0.07em] leading-none">
                  Release the Doves
                </h2>
              </div>

              <p className="max-w-md text-zinc-500 leading-relaxed">
                A first public sequence from the Instinct Archive. The work is not
                explained here. It is entered.
              </p>
            </div>

            {groups.map((group) => (
              <section
                key={group}
                className="relative py-24 border-t border-zinc-900/80"
              >
                <div className="grid lg:grid-cols-[.9fr_2.1fr] gap-12">
                  <div className="lg:sticky lg:top-28 self-start flex gap-7 items-start">
                    <StateGlyph state={group} />
                    <div>
                      <h3 className="text-3xl md:text-5xl font-extralight tracking-[-0.05em] mb-6">
                        {group}
                      </h3>
                      <p className="text-xl font-light text-zinc-300 leading-snug mb-4">
                        {stateText[group].line}
                      </p>
                      <p className="text-zinc-500 leading-relaxed mb-5">
                        {stateText[group].words}
                      </p>
                      <p className="text-xs uppercase tracking-[0.32em] text-zinc-700">
                        {stateText[group].note}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    {works
                      .filter((work) => work.state === group)
                      .map((work, index) => (
                        <div key={work.id}>
                          <ArtworkSlot
                            work={work}
                            index={index}
                            active={selected.id === work.id}
                            onClick={() => setSelected(work)}
                          />
                          <div className="mt-4 flex items-baseline justify-between gap-3 text-sm">
                            <span className="text-zinc-300">{work.id}</span>
                            <span className="text-zinc-600 truncate">
                              {work.title}
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="relative px-6 py-28 md:px-12 border-t border-zinc-900/80">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-16 items-center">
            <div>
              <p className="text-[11px] uppercase tracking-[0.55em] text-zinc-600 mb-8">
                Selected Work
              </p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 18 }}
                  transition={{ duration: 0.45 }}
                >
                  <h2 className="text-6xl md:text-8xl font-extralight tracking-[-0.07em] leading-none mb-7">
                    {String(selectedIndex + 1).padStart(2, "0")}
                  </h2>

                  <p className="text-2xl text-zinc-300 mb-2">{selected.id}</p>

                  <p className="text-zinc-600 mb-8">
                    {selected.title} / {selected.state}
                  </p>

                  <p className="text-2xl md:text-3xl font-extralight leading-tight text-zinc-400 max-w-lg">
                    {stateText[selected.state].note}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="max-w-md mx-auto w-full">
              <ArtworkSlot work={selected} index={0} large active onClick={() => {}} />
            </div>
          </div>
        </section>

        <section
          id="archive"
          className="relative px-6 py-28 md:px-12 border-t border-zinc-900/80"
        >
          <div className="max-w-5xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.55em] text-zinc-600 mb-8">
              Statement
            </p>

            <h2 className="text-5xl md:text-7xl font-extralight tracking-[-0.07em] leading-none mb-12">
              Instinct Archive
            </h2>

            <p className="text-2xl md:text-4xl font-extralight text-zinc-300 leading-tight">
              My work is created through instinct.
              <br />
              It is not planned, and it is not constructed.
              <br />
              It happens.
              <br />
              <br />
              Each piece is released immediately after it is made.
              <br />
              No revision. No emotional holding.
              <br />
              <br />
              What remains is an archive —
              <br />
              a structured record of states
              <br />
              as they appeared in real time.
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="relative px-6 py-28 md:px-12 border-t border-zinc-900/80"
        >
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1fr] gap-12">
            <div>
              <p className="text-[11px] uppercase tracking-[0.55em] text-zinc-600 mb-8">
                Final Door
              </p>

              <h2 className="text-5xl md:text-7xl font-extralight tracking-[-0.07em] leading-none">
                Collect / Enquiries
              </h2>
            </div>

            <div className="rounded-[2rem] border border-zinc-800/80 bg-zinc-950/60 p-8 md:p-10 shadow-2xl">
              <p className="text-xl text-zinc-400 leading-relaxed mb-10">
                For collection enquiries, exhibition proposals, or private viewing
                access, please make contact.
              </p>

              <div className="border-t border-zinc-800 pt-7">
                <p className="text-[10px] uppercase tracking-[0.38em] text-zinc-600 mb-4">
                  Contact
                </p>
                <p className="text-zinc-300">Add your email or contact form here.</p>
              </div>
            </div>
          </div>
        </section>
      </ErrorBoundary>
    </main>
  );
}
