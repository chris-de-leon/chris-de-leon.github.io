import { fadeIn } from 'apps/app/utils/variants'
import { motion } from 'framer-motion'
import { useReducer } from 'react'

interface ContactForm {
  readonly name: string
  readonly email: string
  readonly desc: string
}

export function Contact() {
  const [form, setForm] = useReducer(
    (state: Partial<ContactForm>, newState: Partial<ContactForm>) => {
      return {
        ...state,
        ...newState,
      }
    },
    {}
  )

  return (
    <section className="section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between gap-y-8 lg:flex-row lg:items-center">
          <motion.div
            className="flex items-center justify-start flex-1"
            variants={fadeIn('right', 0.1)}
            initial="hidden"
            whileInView={'visible'}
            viewport={{ once: false, amount: 0.7 }}
          >
            <div className="flex-1">
              <h4 className="text-3xl text-secondary">Get in touch</h4>
              <h1 className="max-w-sm text-6xl text-primary">
                Let&apos;s build something together
              </h1>
            </div>
          </motion.div>
          <motion.form
            className="flex flex-col items-start flex-1 p-4 pb-24 border rounded-2xl gap-y-6"
            variants={fadeIn('left', 0.1)}
            initial="hidden"
            whileInView={'visible'}
            viewport={{ once: false, amount: 0.7 }}
          >
            <input
              className="w-full py-3 transition-all bg-transparent border-b outline-none text-primary placeholder:text-primary focus:border-secondary"
              placeholder="What's your name?"
              type="text"
              minLength={1}
              maxLength={64}
              required
              onChange={(event) => setForm({ name: event.currentTarget.value })}
            />
            <input
              className="w-full py-3 transition-all bg-transparent border-b outline-none text-primary placeholder:text-primary focus:border-secondary"
              placeholder="What's your email?"
              minLength={1}
              required
              type="email"
              onChange={(event) =>
                setForm({ email: event.currentTarget.value })
              }
            />
            <textarea
              className="w-full py-3 mb-12 transition-all bg-transparent border-b outline-none resize-none text-primary placeholder:text-primary focus:border-secondary"
              placeholder="How can I be of service?"
              minLength={1}
              required
              onChange={(event) => setForm({ desc: event.currentTarget.value })}
            />
            <button
              className="rounded-btn-grad"
              onClick={async (event) => {
                event.preventDefault()
                const result = await fetch('/api/contact', {
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  method: 'POST',
                  body: JSON.stringify(form),
                })

                const data = await result.json()
                if (result.status !== 200) {
                  alert(data.error)
                } else {
                  alert(
                    'Your response has been recorded - I will reach out to you soon!'
                  )
                }
              }}
            >
              Submit
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
