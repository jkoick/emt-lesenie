"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to your backend
    alert("Ďakujeme za vašu správu! Čoskoro vás budeme kontaktovať.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Tel",
      value: "+421 904 350 340",
      href: "tel:+421904350340",
      description: "",
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "emtlesenie@gmail.com",
      href: "mailto:emtlesenie@gmail.com",
      description: "",
    },
    {
      icon: MapPin,
      title: "Adresa",
      value: "Petrovce nad Laborcom",
      href: undefined,
      description:
        "Sklad máme v súkromných priestoroch kde vieme flexibilne reagovať.",
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-secondary/70 py-20 md:py-24 text-foreground"
      id="kontakt"
    >
      <div className="absolute inset-x-0 top-[-240px] h-[440px] bg-gradient-to-b from-yellow-200/30 via-transparent to-transparent blur-3xl" />
      <div className="absolute inset-y-0 left-[-24%] hidden w-[40%] bg-gradient-to-r from-yellow-200/20 via-transparent to-transparent blur-3xl xl:block" />

      <div className="container relative mx-auto max-w-6xl px-4">
        <ScrollReveal className="mx-auto max-w-3xl text-center space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/25 bg-yellow-500/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-yellow-800">
            Kontakt
          </span>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Sme pripravení pomôcť vašej stavbe rásť
          </h2>
          <p className="text-sm md:text-lg leading-relaxed text-muted-foreground">
            Pošlite nám základné informácie o projekte – ozveme sa do 24 hodín s
            návrhom lešenia a cenovou kalkuláciou.
          </p>
        </ScrollReveal>

        <div className="mt-14 space-y-8">
          <ScrollReveal className="relative overflow-hidden rounded-[28px] border border-border/70 bg-card/90 shadow-[0_34px_80px_-55px_rgba(15,23,42,0.6)]">
            <div className="absolute -top-24 left-8 h-44 w-44 rounded-full bg-yellow-500/20 blur-3xl" />
            <div className="relative space-y-6 p-7">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-yellow-700">
                  Priamy kontakt
                </p>
                <h3 className="mt-3 text-xl font-semibold text-foreground md:text-2xl">
                  Spájame sa s vami osobne
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Radi vám poradíme, ako vyskladať lešenie, aby ste ušetrili čas
                  aj rozpočet. Ozvite sa ktoroukoľvek z nižšie uvedených ciest.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {contactMethods.map((method, index) => (
                  <div
                    key={method.title}
                    className="rounded-[22px] border border-border/60 bg-background/85 p-5 shadow-sm"
                  >
                    <div className="flex flex-col gap-3">
                      <div className="rounded-xl bg-yellow-500/15 p-2.5 w-fit">
                        <method.icon className="size-5 text-yellow-600" />
                      </div>
                      <div className="space-y-1.5">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow-700">
                          {method.title}
                        </p>
                        {method.href ? (
                          <a
                            href={method.href}
                            className="block text-base font-semibold text-foreground transition hover:text-yellow-700"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="text-base font-semibold text-foreground">
                            {method.value}
                          </p>
                        )}
                        {method.description && (
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {method.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal
            delay={120}
            className="relative overflow-hidden rounded-[28px] border border-border/70 bg-card/95 shadow-[0_34px_80px_-55px_rgba(15,23,42,0.6)]"
          >
            <div className="absolute -top-28 right-14 h-56 w-56 rounded-full bg-yellow-500/15 blur-3xl" />
            <div className="relative p-7">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2.5">
                    <label
                      htmlFor="name"
                      className="text-[11px] font-semibold uppercase tracking-[0.25em] text-yellow-700"
                    >
                      Meno *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Vaše meno"
                      className="rounded-2xl border border-border/60 bg-background/90 px-4 py-3 text-sm h-auto"
                    />
                  </div>
                  <div className="space-y-2.5">
                    <label
                      htmlFor="email"
                      className="text-[11px] font-semibold uppercase tracking-[0.25em] text-yellow-700"
                    >
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="vas@email.sk"
                      className="rounded-2xl border border-border/60 bg-background/90 px-4 py-3 text-sm h-auto"
                    />
                  </div>
                </div>

                <div className="space-y-2.5">
                  <label
                    htmlFor="phone"
                    className="text-[11px] font-semibold uppercase tracking-[0.25em] text-yellow-700"
                  >
                    Telefón
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+421 XXX XXX XXX"
                    className="rounded-2xl border border-border/60 bg-background/90 px-4 py-3 text-sm h-auto"
                  />
                </div>

                <div className="space-y-2.5">
                  <label
                    htmlFor="message"
                    className="text-[11px] font-semibold uppercase tracking-[0.25em] text-yellow-700"
                  >
                    Správa *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Napíšte nám vašu požiadavku, typ objektu a približný termín..."
                    rows={6}
                    className="rounded-2xl border border-border/60 bg-background/90 px-4 py-3 text-sm leading-relaxed resize-none"
                  />
                </div>

                <div className="rounded-xl border border-border/60 bg-background/80 px-5 py-3.5 text-xs leading-relaxed text-muted-foreground">
                  Odoslaním správy súhlasíte so spracovaním osobných údajov pre
                  účely prípravy cenovej ponuky.
                </div>

                <div className="flex flex-col items-center gap-3 pt-2 text-center">
                  <Button
                    type="submit"
                    size="default"
                    className="w-full sm:w-auto rounded-full bg-yellow-500 px-10 py-5 text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-yellow-400"
                  >
                    Odoslať správu
                  </Button>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                    odpovieme do 24 hodín
                  </p>
                </div>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
