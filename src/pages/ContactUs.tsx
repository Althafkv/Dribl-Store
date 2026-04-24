import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, User, MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // ✅ install this

const ContactUs: React.FC = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const phoneNumber = "917902360099";

  const handleWhatsApp = () => {
    if (!form.name.trim() || !form.message.trim()) {
      toast({
        title: "Please fill name and message",
        variant: "destructive",
      });
      return;
    }

    const text = `Hello, my name is ${form.name}%0AEmail: ${form.email}%0A%0AMessage:%0A${form.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(url, "_blank");
  };

  return (
    <MainLayout>
      <div className="container py-16 md:py-24 max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-display text-3xl md:text-4xl mb-3">Contact Us</h1>
          <p className="text-muted-foreground">
            Reach us instantly via WhatsApp.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <User className="h-4 w-4" /> Name
            </Label>
            <Input
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> Email (optional)
            </Label>
            <Input
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" /> Message
            </Label>
            <Textarea
              placeholder="How can we help?"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={6}
            />
          </div>
          <Button
            onClick={handleWhatsApp}
            className="w-full h-12 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white"
          >
            <FaWhatsapp className="h-5 w-5" />
            Contact on WhatsApp
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactUs;
