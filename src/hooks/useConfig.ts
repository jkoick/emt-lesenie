"use client";

import { useState, useEffect } from "react";

export interface ConfigType {
  images: {
    hero: {
      filename: string;
      alt: string;
    };
    about: {
      filename: string;
      alt: string;
    };
    gallery: Array<{
      filename: string;
      title: string;
      description: string;
    }>;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
    addressDescription: string;
    responseTime: string;
  };
  emailjs: {
    serviceId: string;
    templateId: string;
    publicKey: string;
  };
  socialMedia: {
    facebook: string;
    instagram: string;
  };
  pricing: {
    usedScaffolding: Array<{
      name: string;
      price: string;
    }>;
    newComponents: Array<{
      name: string;
      price: string;
    }>;
    sets: Array<{
      title: string;
      description: string;
      price: string;
    }>;
    notes: string[];
  };
}

export function useConfig() {
  const [config, setConfig] = useState<ConfigType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch("/config.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load config");
        return res.json();
      })
      .then((data) => {
        setConfig(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { config, loading, error };
}
