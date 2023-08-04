import { fadeIn } from 'apps/app/utils/variants'
import { FormEvent, useReducer } from 'react'
import { motion } from 'framer-motion'

interface ContactForm {
  readonly name: string
  readonly email: string
  readonly msg: string
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (form.name == null || form.name.length === 0) {
      alert('Error - name is required')
    }

    if (form.email == null || form.email.length === 0) {
      alert('Error - email is required')
    }

    if (form.msg == null || form.msg.length === 0) {
      alert('Error - message is required')
    }

    try {
      // https://www.staticforms.xyz/
      const url = new URL('https://api.staticforms.xyz/submit')
      const key = '5a85889b-a82d-4adb-8330-79ce92acade1'
      const res = await fetch(url.href, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.msg,
          accessKey: key,
        }),
      })

      if (res.status !== 200) {
        throw new Error(await res.text())
      }

      console.log(await res.json())
      alert('Your response has been recorded - I will reach out to you soon!')
    } catch (err) {
      console.error(err)
      alert('Could not submit form - please try again later')
    }
  }

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
              <h4 className="text-md lg:text-3xl text-grad-solid">
                Get in touch
              </h4>
              <h1 className="max-w-md text-lg lg:text-4xl text-primary">
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
            onSubmit={handleSubmit}
          >
            <input
              className="w-full py-3 text-xs transition-all bg-transparent border-b outline-none lg:text-sm text-primary placeholder:text-primary focus:border-secondary"
              placeholder="What's your name?"
              type="text"
              minLength={1}
              maxLength={64}
              required
              onChange={(e) => setForm({ name: e.currentTarget.value })}
            />
            <input
              className="w-full py-3 text-xs transition-all bg-transparent border-b outline-none lg:text-sm text-primary placeholder:text-primary focus:border-secondary"
              placeholder="What's your email?"
              minLength={1}
              required
              type="email"
              onChange={(e) => setForm({ email: e.currentTarget.value })}
            />
            <textarea
              className="w-full py-3 mb-12 text-xs transition-all bg-transparent border-b outline-none resize-none lg:text-sm text-primary placeholder:text-primary focus:border-secondary"
              placeholder="How can I be of service?"
              minLength={1}
              required
              onChange={(e) => setForm({ msg: e.currentTarget.value })}
            />
            <button className="rounded-btn-grad">Submit</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
