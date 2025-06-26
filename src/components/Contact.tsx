
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "devendrarahire01@gmail.com",
      link: "mailto:devendrarahire01@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 9309554295",
      link: "tel:+919309554295"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "devendra-ahire",
      link: "https://www.linkedin.com/in/devendra-ahire"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "Dahire100",
      link: "https://github.com/Dahire100"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              Let's connect and discuss opportunities or collaborations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology and innovation. Feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="group hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <a 
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 group-hover:text-primary transition-colors duration-300"
                      >
                        <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                          {info.icon}
                        </div>
                        <div>
                          <div className="font-medium">{info.label}</div>
                          <div className="text-muted-foreground">{info.value}</div>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-2xl">
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="text-muted-foreground">Nashik, Maharashtra, India</p>
              </div>
            </div>

            {/* Contact Form */}
<Card className="animate-on-scroll">
  <CardHeader>
    <CardTitle className="text-2xl">Send a Message</CardTitle>
  </CardHeader>
  <CardContent>
    <form
      action="https://formsubmit.co/devendrarahire20@gmail.com"
      method="POST"
      className="space-y-6"
    >
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />
      <input type="text" name="_honey" style={{ display: "none" }} />

      <div>
        <Input name="name" placeholder="Your Name" required className="w-full" />
      </div>

      <div>
        <Input name="email" type="email" placeholder="Your Email" required className="w-full" />
      </div>

      <div>
        <Textarea name="message" placeholder="Your Message" required className="w-full min-h-[120px]" />
      </div>

      <Button type="submit" className="w-full">Send Message</Button>
    </form>
  </CardContent>
</Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
