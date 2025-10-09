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

  return (
    <section className="py-24 bg-background text-foreground" id="kontakt">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Kontakt
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Kontaktujte nás a my vám pripravíme nezáväznú cenovú ponuku.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <ScrollReveal className="h-full" delay={0}>
              <Card className="bg-card border-2 border-border hover:border-primary/50 transition-colors h-full">
                <CardContent className="p-8 space-y-4">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Telefón</h3>
                      <a
                        href="tel:+421904350340"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +421 904 350 340
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal className="h-full" delay={120}>
              <Card className="bg-card border-2 border-border hover:border-primary/50 transition-colors h-full">
                <CardContent className="p-8 space-y-4">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">E-mail</h3>
                      <a
                        href="mailto:emtlesenie@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors break-all"
                      >
                        emtlesenie@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal className="h-full" delay={240}>
              <Card className="bg-card border-2 border-border hover:border-primary/50 transition-colors h-full">
                <CardContent className="p-8 space-y-4">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Adresa</h3>
                      <p className="text-muted-foreground">
                        Petrovce nad Laborcom
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Sklad máme v súkromných priestoroch kde vieme flexibilne
                        reagovať.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <Card className="bg-card border-2 border-border">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
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
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
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
                        className="bg-background"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Telefón
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+421 XXX XXX XXX"
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Správa *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Napíšte nám vašu správu alebo požiadavku..."
                      rows={6}
                      className="bg-background resize-none"
                    />
                  </div>
                  <div className="text-center">
                    <Button
                      type="submit"
                      size="lg"
                      className="text-lg px-12 py-6 bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Odoslať správu
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
