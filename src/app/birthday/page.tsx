"use client"

import Image from "next/image";
import { useEffect, useState } from "react";


function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function AmmaPage() {
  useReveal();
  return (
    <main className="relative">
      <Masthead />
      <Marquee />
      <Issue />
      <Gallery />
      <Story />
      <Wishes />
      <Counter />
      <Letter />
      <Colophon />
    </main>
  );
}

/* ─────────── MASTHEAD / HERO ─────────── */
function Masthead() {
  return (
    <section className="relative bg-cream text-ink">
      {/* top bar — like a newspaper masthead */}
      <div className="border-b border-ink/15">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-3 flex items-center justify-between text-[10px] md:text-[11px] tracking-[.25em] uppercase font-mono">
          <span>Vol. LXIV · A Birthday Issue</span>
          <span className="hidden md:inline">Printed with love · No. 01</span>
          <span>{new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" })}</span>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-12 pt-10 md:pt-16 pb-20 md:pb-28">
        {/* Big editorial title */}
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-8">
            <p className="font-hand text-rust text-2xl md:text-3xl rotate-[-2deg] inline-block">
              for our Amma, with everything we have —
            </p>
            <h1 className="font-display ink-settle leading-[.82] tracking-[-0.04em] text-ink mt-2"
                style={{ fontSize: "clamp(4rem, 14vw, 13rem)" }}>
              Happy <span className="italic text-rust">Birth-</span>
              <span className="block italic">
                day<span className="font-serif not-italic text-ink-3 text-[.35em] align-top ml-3">, Amma.</span>
              </span>
            </h1>
          </div>

          <div className="col-span-12 md:col-span-4 md:pb-6">
            <div className="dotrule mb-4 text-ink" />
            <p className="font-serif italic text-ink-2 text-lg leading-relaxed">
              An issue dedicated, page by page, to the woman who taught us what a home actually is.
              Read slowly. There is no hurry today.
            </p>
            <div className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[.25em] font-mono text-ink-3">
              <span>Edited by</span>
              <span className="font-hand normal-case tracking-normal text-base text-rust">— the family, all of us</span>
            </div>
          </div>
        </div>

        {/* meta strip */}
        <div className="mt-14 md:mt-20 grid grid-cols-12 gap-6 border-y border-ink/15 py-5 text-sm">
          <div className="col-span-6 md:col-span-3">
            <div className="eyebrow text-ink-3">Featuring</div>
            <div className="font-display text-xl mt-1">Her, mostly.</div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="eyebrow text-ink-3">Pages</div>
            <div className="font-display text-xl mt-1 tabular">vii — letter to read aloud</div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="eyebrow text-ink-3">Weather</div>
            <div className="font-display text-xl mt-1 italic">warmer than yesterday</div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="eyebrow text-ink-3">Mood</div>
            <div className="font-display text-xl mt-1">soft, golden, full</div>
          </div>
        </div>

        {/* hero secondary: portrait + pull */}
        <div className="mt-16 md:mt-24 grid grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="col-span-12 md:col-span-5 relative reveal">
            <div className="polaroid drift max-w-[360px] mx-auto md:mx-0 relative" style={{ ["--r" as string]: "-3deg", transform: "rotate(-3deg)" }}>
              <div className="img">
                <Image
                  src="/1.jpeg"
                  alt="Amma — radiant"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="font-hand text-xl text-ink-2 mt-3 px-1">
                Amma — always radiant ✦
              </p>
              <span className="tape" style={{ top: -10, left: "50%", transform: "translateX(-50%) rotate(-4deg)" }} />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow text-rust">Opening note</p>
            <p className="press-cap font-serif text-[1.4rem] md:text-[1.55rem] leading-[1.55] text-ink-2 mt-4 first-letter:italic">
              The heart of a mother — someone once wrote — is a deep abyss at the bottom of which
              you will always find forgiveness. We didn't understand the line until we understood her.
              This issue is small recompense, but it is offered honestly, and it is offered with
              every part of us that knows how to love.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
              <a href="#story" className="font-hand text-2xl text-rust underline-hand">read her story →</a>
              <a href="#letter" className="font-mono uppercase tracking-[.25em] text-[11px] text-ink-3 hover:text-rust">the letter ◦ page vii</a>
            </div>
          </div>
        </div>
      </div>

      {/* bottom hairline ornament */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 pb-6 flex items-center gap-4 text-ink-3">
        <div className="rule flex-1" />
        <span className="font-display italic text-lg">✦ turn the page ✦</span>
        <div className="rule flex-1" />
      </div>
    </section>
  );
}

/* ─────────── MARQUEE ─────────── */
function Marquee() {
  const lines = [
    "the woman, the heart, the home",
    "happy birthday, Amma",
    "celebrating you today & every day",
    "with all our love",
    "the biryani is still the best we've ever had",
  ];
  return (
    <div className="bg-ink text-creamext-center justify-center py-5 overflow-hidden border-y border-ink/40">
      <div className="marquee-track font-display italic text-2xl md:text-3xl">
        {[...lines, ...lines, ...lines].map((l, i) => (
          <span key={i} className="flex items-center gap-12 whitespace-nowrap">
            {l}
            <span className="text-gold-2 not-italic">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────── GALLERY ─────────── */
function Gallery() {
  const captions = [
    "the morning kitchen, always",
    "her tea — exact, particular, perfect",
    "laughter at something we didn't catch",
    "hands that fixed everything",
    "the garden in monsoon",
    "her stillness",
    "a saree the colour of dusk",
  ];
  const frameSrcs = [
    "/1.jpeg",
    "/2.jpeg",
    "/3.jpeg",
    "/4.jpeg",
    "/5.jpeg",
    "/6.jpeg",
    "/7.jpeg",
  ];
  return (
    <section id="gallery" className="bg-paper-2 py-24 md:py-32 relative">
      <div className="mx-auto max-w-[1300px] px-6 md:px-12">
        <header className="grid grid-cols-12 gap-6 mb-16 items-end">
          <div className="col-span-12 md:col-span-7 reveal">
            <p className="eyebrow text-rust mb-3">Page i — her likeness</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[.95] tracking-[-.02em]">
              Seven frames of a<br /><span className="italic text-rust">very full</span> life.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 reveal">
            <p className="font-serif italic text-ink-2 text-lg leading-relaxed">
              Pictures of Amma, arranged the way memory actually works — not chronologically,
              but by how warm each one still feels. Hover for the small caption underneath.
            </p>
          </div>
        </header>

        {/* asymmetric scrapbook grid */}
        <div className="grid grid-cols-12 grid-rows-[repeat(6,minmax(80px,auto))] gap-4 md:gap-6">
          {[
            { c: "col-span-12 md:col-span-7 row-span-3", r: 1.5, tape: "left" },
            { c: "col-span-6 md:col-span-5 row-span-3", r: -1.2, tape: "right" },
            { c: "col-span-6 md:col-span-4 row-span-2", r: 1, tape: "left" },
            { c: "col-span-6 md:col-span-3 row-span-2", r: -.6 },
            { c: "col-span-12 md:col-span-5 row-span-2", r: 0, tape: "center" },
            { c: "col-span-7 md:col-span-5 row-span-2", r: -1.5 },
            { c: "col-span-5 md:col-span-7 row-span-2", r: .8, tape: "right" },
          ].map((t, i) => (
            <figure key={i} className={`${t.c} relative reveal group`}>
              <div className="h-full" style={{ transform: `rotate(${t.r}deg)`, padding: "10px 10px 36px" }}>
                <div className="img h-full">
                  <Image
                    src={frameSrcs[i]}
                    alt={captions[i]}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── ISSUE INDEX / TOC ─────────── */
function Issue() {
  const items: Array<[string, string, string]> = [
    ["i", "Her, in seven pictures", "#gallery"],
    ["ii", "A life lived in chapters", "#story"],
    ["iii", "Wishes we send forward", "#wishes"],
    ["iv", "Counting the day itself", "#counter"],
    ["v", "The letter — read slowly", "#letter"],
  ];
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1100px] px-6 md:px-12">
        <div className="flex items-baseline justify-between gap-6 mb-10">
          <h2 className="font-display text-4xl md:text-5xl">Contents</h2>
          <span className="font-mono text-[11px] tracking-[.25em] uppercase text-ink-3">an index of pages</span>
        </div>
        <ul className="divide-y divide-ink/15">
          {items.map(([n, title, href]) => (
            <li key={n} className="reveal">
              <a href={href} className="group flex items-baseline gap-6 py-5 hover:bg-paper-2/60 transition-colors px-2 -mx-2">
                <span className="font-mono text-xs tracking-[.2em] text-ink-4 w-10">{n}.</span>
                <span className="font-display text-2xl md:text-3xl italic flex-1 group-hover:text-rust transition-colors">{title}</span>
                <span className="text-ink-4 group-hover:text-rust transition-colors">→</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─────────── STORY / CHAPTERS ─────────── */
function Story() {
  const chapters = [
    {
      n: "I",
      kicker: "the way she enters a room",
      title: "Warmth, but quiet about it",
      body: "Some people walk in and the whole place becomes warmer. Amma is that person. Her presence is not loud — it is steady, deep, and completely reliable. It is home before home is even a word you know.",
      pull: "she is home, before home is a word you know.",
    },
    {
      n: "II",
      kicker: "what we never saw her carry",
      title: "Strength, mistaken for ease",
      body: "She carried things we never saw her carry. She was the one who held everything together when the world tried to pull it apart — quietly, without asking for credit, without ever once making it our burden to know.",
      pull: "quietly. without asking. without ever once making it ours.",
    },
    {
      n: "III",
      kicker: "the arithmetic of her love",
      title: "Love that does not run out",
      body: "Most things in life are finite. Amma's love is not. No matter how much she gives, there is always more in the next room, more in the next phone call, more in the food packed for the road. It is the most extraordinary thing about her — and there are many extraordinary things.",
      pull: "finite is a word that does not apply to her.",
    },
    {
      n: "IV",
      kicker: "today, exactly",
      title: "A birthday worth the fuss",
      body: "Today we celebrate not just another year, but a lifetime of beauty, wisdom and grace. Every grey hair a story. Every laugh line a memory worth keeping. Every single year — more precious than the last one.",
      pull: "every laugh line, a memory worth keeping.",
    },
  ];

  return (
    <section id="story" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <header className="text-center mb-20 reveal">
          <p className="eyebrow text-sage mb-3">Page ii — her chapters</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[1] tracking-[-.02em]">
            A life, lived with<br /><span className="italic text-sage">extraordinary</span> love.
          </h2>
          <div className="mt-8 flex items-center gap-4 justify-center text-ink-3">
            <div className="rule w-20" />
            <span className="font-display italic text-2xl">✿</span>
            <div className="rule w-20" />
          </div>
        </header>

        <div className="space-y-24 md:space-y-32">
          {chapters.map((ch, i) => (
            <article key={ch.n} className={`grid grid-cols-12 gap-8 md:gap-12 items-start reveal ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
              {/* numeral block */}
              <div className="col-span-12 md:col-span-5 relative">
                <div
                  className="font-display italic text-ink-2/10 leading-none select-none"
                  style={{ fontSize: "clamp(11rem, 22vw, 20rem)", WebkitTextStroke: "1px rgba(94,122,79,.45)", color: "transparent" }}
                >
                  {ch.n}
                </div>
                <p className="font-hand text-2xl text-rust absolute top-4 left-4 rotate-[-3deg]">
                  ch. {ch.n.toLowerCase()}
                </p>
                <div className="mt-4 max-w-sm md:absolute md:bottom-2 md:right-0">
                  <p className="font-display italic text-2xl md:text-3xl text-sage leading-snug">
                    "{ch.pull}"
                  </p>
                </div>
              </div>

              {/* text block */}
              <div className="col-span-12 md:col-span-7">
                <p className="eyebrow text-rust mb-3">{ch.kicker}</p>
                <h3 className="font-display text-3xl md:text-5xl leading-tight tracking-[-.01em] mb-6">
                  {ch.title}.
                </h3>
                <p className="font-serif text-lg md:text-xl text-ink-2 leading-[1.75] press-cap">
                  {ch.body}
                </p>
                <div className="mt-8 dotrule text-ink-3" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── WISHES ─────────── */
function Wishes() {
  const wishes = [
    { g: "🌿", t: "Health, above all", b: "May your body be strong, your mind clear, and every morning greet you with energy and ease." },
    { g: "☀︎", t: "Mornings that delight", b: "May every day start slowly and sweetly — a good cup of tea, the right light, and the quiet knowledge that today is yours." },
    { g: "☾", t: "Real, deep rest", b: "You spent years making sure everyone else could sleep. May this year gift you the kind of rest that actually restores." },
    { g: "♡", t: "To feel how loved you are", b: "Not just today. Every single day. Because you are so deeply, completely, unconditionally loved." },
    { g: "✿", t: "Laughter without reason", b: "The kind that makes your eyes water and your stomach hurt. May there be so much of it this year." },
    { g: "✦", t: "Every dream still left", b: "Whatever is still on your heart, whatever you quietly hope for — may this year be the one that brings it to you." },
  ];
  return (
    <section id="wishes" className="bg-rust text-cream py-24 md:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 relative">
        <header className="mb-16 grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-8 reveal">
            <p className="eyebrow text-cream/70 mb-3">Page iii — with all our hearts</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[.95] tracking-[-.02em]">
              Six small wishes,<br />sent ahead of you.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 reveal">
            <p className="font-serif italic text-cream/75 text-lg">
              The kind of things we hope catch you on a Tuesday — when you are not expecting them,
              and when you most need them.
            </p>
          </div>
        </header>

        <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {wishes.map((w, i) => (
            <li key={w.t} className="reveal flex gap-5 border-t border-cream/25 pt-6">
              <div className="font-mono text-xs tracking-[.2em] text-cream/55 pt-1 w-12">No. {String(i + 1).padStart(2, "0")}</div>
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-2xl text-gold-2">{w.g}</span>
                  <h3 className="font-display text-2xl md:text-3xl italic">{w.t}</h3>
                </div>
                <p className="font-serif text-cream/80 text-lg leading-relaxed max-w-prose">{w.b}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─────────── COUNTER ─────────── */
function Counter() {
  const targetDate = "2026-05-25";
  const [d, setD] = useState({ d: "--", h: "--", m: "--", s: "--" });

  useEffect(() => {
    const tick = () => {
      const t = new Date(targetDate);
      const now = new Date();
      t.setFullYear(now.getFullYear());
      if (t < now) t.setFullYear(now.getFullYear() + 1);
      const diff = +t - +now;
      const dd = Math.floor(diff / 86400000);
      const hh = Math.floor((diff / 3600000) % 24);
      const mm = Math.floor((diff / 60000) % 60);
      const ss = Math.floor((diff / 1000) % 60);
      setD({ d: String(dd), h: String(hh).padStart(2, "0"), m: String(mm).padStart(2, "0"), s: String(ss).padStart(2, "0") });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="counter" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-[1100px] px-6 md:px-12">
        <header className="text-center mb-14 reveal">
          <p className="eyebrow text-gold mb-3">Page iv — counting the day</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[1] tracking-[-.02em]">
            The day itself,<br /><span className="italic text-rust">in pieces.</span>
          </h2>
        </header>

        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-0 border border-ink/15 bg-cream divide-x divide-ink/15">
          {[
            ["days", d.d],
            ["hours", d.h],
            ["minutes", d.m],
            ["seconds", d.s],
          ].map(([lbl, val], i) => (
            <div key={lbl} className="px-6 py-10 text-center relative">
              <div className="font-mono text-[10px] tracking-[.3em] uppercase text-ink-3 absolute top-3 left-4">{String(i + 1).padStart(2, "0")}</div>
              <div className="font-display text-6xl md:text-7xl tabular tracking-[-.04em] text-ink leading-none">{val}</div>
              <div className="font-hand text-lg text-rust mt-3">{lbl}</div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center font-hand text-xl text-ink-3">
          counting down to 25 May — Amma's birthday
        </p>
      </div>
    </section>
  );
}

/* ─────────── LETTER ─────────── */
function Letter() {
  return (
    <section id="letter" className="bg-paper-2 py-24 md:py-32">
      <div className="mx-auto max-w-[720px] px-6 md:px-10 reveal">
        <div className="relative bg-cream shadow-[0_2px_4px_rgba(28,18,9,.04),_0_30px_60px_-30px_rgba(28,18,9,.25)] p-10 md:p-16">
          {/* corner stamps */}
          <div className="absolute -top-6 -left-6 stamp rotate-[-6deg] hidden md:block">
            <div className="w-20 h-24 border border-ink-3/20 flex flex-col items-center justify-center text-center px-2">
              <div className="font-display italic text-2xl text-rust leading-none">A</div>
              <div className="font-mono text-[8px] tracking-[.2em] uppercase mt-2 text-ink-3">posted<br />w/ love</div>
            </div>
          </div>

          <div className="flex items-start justify-between mb-10 font-mono text-[11px] tracking-[.2em] uppercase text-ink-3">
            <div>
              <div>To —</div>
              <div className="font-hand normal-case tracking-normal text-2xl text-ink mt-1">Amma</div>
            </div>
            <div className="text-right">
              <div>From —</div>
              <div className="font-hand normal-case tracking-normal text-2xl text-ink mt-1">all of us</div>
            </div>
          </div>

          <h3 className="font-display italic text-4xl md:text-5xl text-rust mb-8">Dear Amma,</h3>

          <div className="font-serif text-lg md:text-xl leading-[1.95] text-ink-2 space-y-5">
            <p className="press-cap">
              There are things we should have said more often. Things we thought, but let the busyness of
              days swallow. Today — your birthday — we say them all, slowly, in order.
            </p>
            <p>
              You are the reason we know what a home feels like. Not the building — the feeling.
              The smell of something cooking. The sound of you in the next room. The knowledge,
              deep and certain, that someone in this world loves us without condition or limit.
            </p>
            <p>
              We watched you carry things that would have broken other people. We watched you put
              everyone first, every time, without being asked and without complaint. We didn't always
              say it, but we saw it. We see it. We are in awe of you.
            </p>
            <p>
              On this birthday, more than anything, we want you to rest inside the love that surrounds
              you. To feel celebrated — not just today but every day. To know that the life you built,
              the people you raised, the home you made — it is your greatest and most beautiful work.
            </p>
            <p>We love you more than these words can hold.</p>
          </div>

          <div className="mt-12 text-right">
            <p className="font-hand text-3xl text-rust">— always, your family ♥</p>
          </div>

          <div className="mt-10 pt-6 border-t border-paper-3 font-hand text-lg text-ink-3">
            P.S. — the biryani is still, and will always be, the best we have ever tasted.
          </div>

          {/* folded corner */}
          <div className="absolute bottom-0 right-0 w-0 h-0 border-solid"
               style={{ borderWidth: "0 0 56px 56px", borderColor: "transparent transparent var(--paper-2) transparent" }} />
        </div>

        <p className="text-center font-mono text-[11px] tracking-[.3em] uppercase text-ink-3 mt-8">
          page vii · read this one out loud
        </p>
      </div>
    </section>
  );
}

/* ─────────── COLOPHON / FOOTER ─────────── */
function Colophon() {
  return (
    <footer className="bg-ink text-cream py-16 md:py-20">
      <div className="mx-auto max-w-[1300px] px-6 md:px-12 grid grid-cols-12 gap-8 items-end">
        <div className="col-span-12 md:col-span-6">
          <p className="font-hand text-2xl text-blush mb-2">a day that belongs entirely to her —</p>
          <h3 className="font-display italic text-6xl md:text-8xl leading-[.9] tracking-[-.03em]">
            Happy Birthday,<br />Amma.
          </h3>
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="eyebrow text-cream/40 mb-3">Colophon</div>
          <p className="font-serif italic text-cream/65 leading-relaxed">
            Set in Fraunces &amp; Cormorant. Handwriting by Caveat. Printed on warm paper, with love.
          </p>
        </div>
        <div className="col-span-6 md:col-span-3 md:text-right">
          <p className="font-hand text-lg text-cream/55 mt-1">made by everyone who loves you</p>
        </div>
      </div>
    </footer>
  );
}
