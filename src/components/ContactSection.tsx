import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("https://formspree.io/f/xvgqejpy", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      const errorData = await response.json();
      toast({
        title: "Error",
        description: errorData.error || "Something went wrong. Please try again later.",
      });
    }
  } catch (error) {
    toast({
      title: "Error",
      description: "Network issue. Please try again later.",
    });
  }
};


  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "muttinenivahini@gmail.com",
      href: "mailto:muttinenivahini@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9848134223",
      href: "tel:+919848134223"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Chillakallu, India",
      href: "https://www.google.com/maps/place/Padmavathi+Enclave/@16.895429,80.1381217,17z/data=!3m1!4b1!4m6!3m5!1s0x3a35a9b7efe381e5:0x1376f4e773a2578d!8m2!3d16.8954239!4d80.1429926!16s%2Fg%2F11h1f2flx3?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
          Get In Touch
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? I'd love to hear from you. 
          Let's create something amazing together.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-display font-semibold gradient-text mb-6">
              Let's Connect
            </h3>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              I'm always excited to discuss new opportunities, innovative projects, 
              or simply chat about the latest developments in AI and machine learning. 
              Feel free to reach out through any of the channels below.
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center p-4 glass-card rounded-xl hover-lift hover-target transition-all duration-300 group"
              >
                <div className="p-3 bg-gradient-primary rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-medium text-foreground">{info.title}</div>
                  <div className="text-sm text-muted-foreground">{info.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Social Media */}
          <div className="pt-8">
            <h4 className="text-lg font-display font-semibold gradient-text mb-4">
              Follow Me
            </h4>
            <div className="flex space-x-4">
              {[
                { name: 'Github', Icon: Github, href: 'https://github.com/MuttineniVahini' },
                { name: 'LinkedIn', Icon: Linkedin, href: 'https://in.linkedin.com/in/vahini-muttineni-374222326' },
                { name: 'Instagram', Icon: Instagram, href: 'https://www.instagram.com/vahini_.06/' }
              ].map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover-lift hover-target glow transition-all duration-300"
                >
                  <platform.Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-card rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="example@gmail.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Tell me about your project or idea..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-primary text-primary-foreground font-medium py-4 px-6 rounded-xl hover-lift hover-target glow transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};