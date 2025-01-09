"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"

const formSchema = z.object({
  name: z.string().min(1).max(50),
  email: z.string().min(1).email(),
  msg: z.string().max(200),
})

export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // https://www.staticforms.xyz/
      const url = new URL("https://api.staticforms.xyz/submit")
      const key = "84781742-72e2-48ff-90c5-21999253885d"
      const res = await fetch(url.href, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.msg,
          accessKey: key,
        }),
      })

      if (res.status !== 200) {
        throw new Error(await res.text())
      }

      console.log(await res.json())
      alert("Your response has been recorded - I will reach out to you soon!")
    } catch (err) {
      console.error(err)
      alert("Could not submit form - please try again later")
    }
  }

  return (
    <div id="contact" className="section bg-muted text-primary-foreground">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 md:flex-row md:justify-around md:gap-y-0">
          <div className="flex flex-col gap-y-5 md:w-1/4">
            <span className="text-orange-glow text-center font-bold text-foreground md:text-left">
              Contact
            </span>
            <span className="text-center text-4xl md:text-left">
              Let&apos;s Build Something Together
            </span>
            <p className="text-center md:text-left">
              Have an idea or project you&apos;d like to bring to life? I&apos;m
              here to help! Whether it&apos;s designing, developing, or
              brainstorming, I&apos;m excited to collaborate with you to create
              something truly remarkable.
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 rounded border border-foreground p-5 md:w-1/2"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john.doe@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="msg"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button variant="outline" type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
