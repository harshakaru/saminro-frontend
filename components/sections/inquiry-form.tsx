"use client"

import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { useCreateInquiry } from "@/hooks/use-inquiries"
import { cn } from "@/lib/utils"
import { inquirySchema, type InquiryFormData } from "@/lib/schemas/inquiry"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Spinner } from "@/components/ui/spinner"
import { Field, FieldLabel, FieldError, FieldGroup } from "@/components/ui/field"
import { HugeiconsIcon } from "@hugeicons/react"
import { Mail01Icon, Call02Icon, Location01Icon, Clock01Icon } from "@hugeicons/core-free-icons"

const contactInfo = [
  { icon: Location01Icon, label: "Address", value: "123 Paradise Avenue, Saminro City" },
  { icon: Mail01Icon, label: "Email", value: "hello@saminrohotel.com" },
  { icon: Call02Icon, label: "Phone", value: "+94 11 234 5678" },
  { icon: Clock01Icon, label: "Reception", value: "24 hours, 7 days a week" },
]

export function InquiryForm() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  })

  const createInquiry = useCreateInquiry()

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const onSubmit = (data: InquiryFormData) => {
    createInquiry.mutate(data, {
      onSuccess: () => {
        toast.success("Inquiry sent successfully!", { description: "We'll get back to you within 24 hours." })
        reset()
      },
      onError: (error) => {
        toast.error("Failed to send inquiry", { description: error.message || "Please try again or contact us directly." })
      },
    })
  }

  return (
    <section id="contact" ref={sectionRef} className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className={cn("mb-16 text-center", visible ? "animate-fade-in-up" : "opacity-0")}>
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gold" /><span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Get in Touch</span><div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">Make an Inquiry</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">Have a question or ready to book? Send us a message and our team will respond promptly.</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-20">
          <div className={cn("flex flex-col gap-8 lg:col-span-2", visible ? "animate-fade-in-up delay-100" : "opacity-0")}>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <HugeiconsIcon icon={info.icon} strokeWidth={1.5} className="size-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{info.label}</p>
                    <p className="mt-0.5 text-sm font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-[4/3]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37675.590762939464!2d79.92570719695875!3d6.990586648823219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae257daa7afab33%3A0x39fcd67ba9b759d6!2sSaminro%20Grand%20Palace!5e0!3m2!1sen!2slk!4v1777706732547!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </div>

          <div className={cn("lg:col-span-3", visible ? "animate-fade-in-up delay-300" : "opacity-0")}>
            <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm md:p-8" noValidate>
              <FieldGroup>
                <div className="grid gap-6 md:grid-cols-2">
                  <Field>
                    <FieldLabel htmlFor="inquiry-name">Full Name</FieldLabel>
                    <Input id="inquiry-name" placeholder="John Doe" aria-invalid={!!errors.name} {...register("name")} />
                    {errors.name && <FieldError>{errors.name.message}</FieldError>}
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="inquiry-email">Email Address</FieldLabel>
                    <Input id="inquiry-email" type="email" placeholder="john@example.com" aria-invalid={!!errors.email} {...register("email")} />
                    {errors.email && <FieldError>{errors.email.message}</FieldError>}
                  </Field>
                </div>
                <Field>
                  <FieldLabel htmlFor="inquiry-phone">Phone Number</FieldLabel>
                  <Input id="inquiry-phone" type="tel" placeholder="+94 11 234 5678" aria-invalid={!!errors.phone} {...register("phone")} />
                  {errors.phone && <FieldError>{errors.phone.message}</FieldError>}
                </Field>
                <Field>
                  <FieldLabel htmlFor="inquiry-message">Message</FieldLabel>
                  <Textarea id="inquiry-message" placeholder="Tell us about your travel plans, preferred dates, or any special requests..." className="min-h-32" aria-invalid={!!errors.message} {...register("message")} />
                  {errors.message && <FieldError>{errors.message.message}</FieldError>}
                </Field>
                <Button type="submit" size="lg" disabled={createInquiry.isPending} className="w-full bg-gold text-white hover:bg-gold-dark border-gold/50 md:w-auto md:min-w-[200px]">
                  {createInquiry.isPending ? (<><Spinner className="mr-2" />Sending...</>) : "Send Inquiry"}
                </Button>
              </FieldGroup>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
