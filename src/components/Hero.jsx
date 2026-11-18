import { motion } from 'framer-motion'
import TiltCard from './TiltCard.jsx'
import { IconArrow, IconWhatsApp, IconUsers, IconZap } from '../data.jsx'
import { mailLink } from '../config.js'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } }
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const flow = [
  { icon: IconArrow, title: 'New enquiry from your website', sub: 'Form details captured instantly' },
  { icon: IconUsers, title: 'Added to your CRM', sub: 'Assigned to the right person' },
  { icon: IconWhatsApp, title: 'WhatsApp follow-up sent', sub: 'Client hears back without waiting' },
]

const trust = [
  {
    label: ['Innovative', 'Solutions'],
    icon: (
      <path d="M14 4c4 0 6 2 6 6-2 3-5 6-8 8l-4-4c2-3 3-6 6-10zM8 14l-3 1 1-3M10 18l-1 3 3-1M15 9.5h.01" />
    ),
  },
  {
    label: ['Reliable', 'Support'],
    icon: <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3zM9 12l2.2 2.2L15.5 10" />,
  },
  {
    label: ['Scalable', 'for Growth'],
    icon: <path d="M4 20h16M6 16l4-4 3 3 6-7M15 8h4v4" />,
  },
]

// Bars shift from blue to purple, like the reference design.
const bars = [18, 40, 46, 100, 40, 46, 34, 30]
const mix = (a, b, t) => Math.round(a + (b - a) * t)
const barColor = (t) =>
  `linear-gradient(to top, rgb(${mix(60, 120, t)},${mix(130, 90, t)},255), rgb(${mix(47, 150, t)},${mix(120, 95, t)},${mix(245, 250, t)}))`

const chipBase =
  'absolute flex items-center gap-2 rounded-2xl border border-line bg-white px-4 py-2.5 text-sm font-medium text-ink shadow-[0_14px_40px_-14px_rgba(47,95,240,0.4)]'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#f7f9ff] pt-20 lg:flex lg:min-h-[min(56.3vw,900px)] lg:items-center">
      {/* background taken from the approved reference design */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{ backgroundImage: 'url(/hero-bg.webp)', backgroundPosition: '80% center' }}
        />
        <div className="absolute inset-0 bg-white/45 lg:hidden" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1480px] items-center gap-16 px-6 pb-24 pt-14 lg:grid-cols-[1.05fr_1fr] lg:px-8 lg:pb-16 lg:pt-10">
        {/* left: copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-3 rounded-full border border-line bg-white/80 px-4 py-2 text-sm text-ink shadow-sm backdrop-blur"
          >
            <span className="bg-linear-to-r from-[#1f66f2] via-[#7a5af8] to-[#e056c8] bg-clip-text font-display font-extrabold text-transparent">
              Build. Automate. Scale.
            </span>
            <span className="text-muted/60">·</span>
            <span className="hidden sm:inline">Technology partner – South Africa</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 font-display text-5xl font-extrabold leading-[1.03] tracking-[-0.035em] text-ink sm:text-6xl lg:text-[4.9rem]"
          >
            Build the <span className="text-brand">digital engine</span> behind your business
            <span className="text-brand">.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-[34rem] text-xl leading-[1.55] text-ink">
            We design and build websites, custom software, business automation and AI solutions that help
            businesses work smarter and grow.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <a
              href={mailLink('Free consultation request', "Hi Otarel Solutions,\n\nI'd like to book a free consultation.\n\n")}
              className="group inline-flex h-14 items-center gap-3 rounded-2xl bg-linear-to-r from-brand to-violet px-8 text-base font-semibold text-white shadow-[0_18px_40px_-14px_rgba(70,90,245,0.85)] transition-transform hover:scale-[1.04]"
            >
              Book a free consultation
              <IconArrow className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.ul variants={item} className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-y-6">
            {trust.map((t, i) => (
              <li
                key={t.label[0]}
                className={`flex items-center gap-3 sm:pr-6 ${i > 0 ? 'sm:border-l sm:border-line sm:pl-6' : ''}`}
              >
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-white/70 shadow-[0_8px_24px_-12px_rgba(31,102,242,0.5)]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7 text-brand"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {t.icon}
                  </svg>
                </span>
                <span className="text-[15px] leading-tight text-ink">
                  {t.label[0]}
                  <br />
                  {t.label[1]}
                </span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* right: automation dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-6 w-full max-w-md lg:max-w-none"
        >
          <TiltCard intensity={5}>
            <div className="relative rounded-3xl border border-white bg-white/90 p-6 shadow-[0_40px_100px_-30px_rgba(47,95,240,0.45)] backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3.5 py-1.5 text-sm font-semibold text-brand">
                  <IconZap className="h-4 w-4" /> Automated
                </span>
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Enquiry to follow-up
              </p>

              <div className="mt-5 flex flex-col">
                {flow.map((s, idx) => (
                  <div key={s.title}>
                    <motion.div
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + idx * 0.3, duration: 0.6 }}
                      className="flex items-center gap-4"
                    >
                      <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-brand/10 text-brand">
                        <s.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-base font-semibold text-ink">{s.title}</div>
                        <div className="text-sm text-muted">{s.sub}</div>
                      </div>
                    </motion.div>
                    {idx < flow.length - 1 && <div className="my-1 ml-6 h-4 w-0.5 bg-line" />}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex h-24 items-end gap-2.5 rounded-2xl bg-surface p-3.5">
                {bars.map((h, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.9, delay: 1 + idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full rounded-md"
                    style={{ background: barColor(idx / (bars.length - 1)) }}
                  />
                ))}
              </div>
            </div>
          </TiltCard>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className={`${chipBase} -top-11 left-0 sm:-left-7`}
          >
            <IconZap className="h-5 w-5 text-brand" />
            <span className="font-semibold">Business automation workflow</span>
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            className={`${chipBase} right-0 top-[58%] hidden sm:flex sm:-right-6`}
          >
            <span className="h-2 w-2 rounded-full bg-brand" />
            CRM updated
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
            className={`${chipBase} -bottom-6 right-14`}
          >
            <span className="h-2 w-2 rounded-full bg-brand" />
            Reply sent
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}