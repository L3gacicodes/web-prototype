import { useState } from "react";
import { Twitter, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Twitter, label: "Twitter", href: "#", color: "hover:text-[#1DA1F2]" },
    { icon: MessageCircle, label: "WhatsApp", href: "#", color: "hover:text-[#25D366]" },
    { icon: Mail, label: "Email", href: "#", color: "hover:text-primary" },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            Say Hello to Festus
          </h2>
          <p className="text-center text-foreground/70 mb-8">
            Get in touch for collaborations, speaking engagements, or inquiries
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className={`flex items-center justify-center w-14 h-14 rounded-full bg-muted transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg`}
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="h-12 rounded-2xl border-2 border-border focus:border-primary transition-colors"
              />
            </div>

            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="h-12 rounded-2xl border-2 border-border focus:border-primary transition-colors"
              />
            </div>

            <div>
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={6}
                className="rounded-2xl border-2 border-border focus:border-primary transition-colors resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
