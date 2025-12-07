import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { Button } from './ui/Button';
import { Send, MapPin, Mail, Phone, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-bg-primary/80 backdrop-blur-md border-t border-accent-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Establish Comms" subtitle="Contact" number="04" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <p className="text-lg text-text-secondary">
              Available for freelance contracts, consulting, or full-time deployment.
              Initiate transmission securely below.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center bg-bg-tertiary border border-accent-cyan/30 rounded-sm group-hover:border-accent-cyan group-hover:shadow-glow-cyan transition-all">
                  <Mail className="w-5 h-5 text-accent-cyan" />
                </div>
                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono">Email Frequency</div>
                  <div className="text-text-primary text-lg font-mono">knaebelseven@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center bg-bg-tertiary border border-accent-cyan/30 rounded-sm group-hover:border-accent-cyan group-hover:shadow-glow-cyan transition-all">
                  <svg className="w-5 h-5 text-accent-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                </div>
                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono">Digital Uplink</div>
                  <a href="https://linkedin.com/in/jason-knaebel-4673301b0" target="_blank" rel="noopener noreferrer" className="text-text-primary text-lg font-mono hover:text-accent-cyan transition-colors">
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center bg-bg-tertiary border border-accent-cyan/30 rounded-sm group-hover:border-accent-cyan group-hover:shadow-glow-cyan transition-all">
                  <Phone className="w-5 h-5 text-accent-cyan" />
                </div>
                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono">Secure Line</div>
                  <div className="text-text-primary text-lg font-mono">573-578-0113</div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center bg-bg-tertiary border border-accent-cyan/30 rounded-sm group-hover:border-accent-cyan group-hover:shadow-glow-cyan transition-all">
                  <MapPin className="w-5 h-5 text-accent-cyan" />
                </div>
                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono">Base of Operations</div>
                  <div className="text-text-primary text-lg font-mono">Orlando, FL</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="relative bg-bg-tertiary/50 p-8 border border-white/5 rounded-sm">
            <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-accent-muted/50 rounded-tl-sm pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-accent-muted/50 rounded-br-sm pointer-events-none" />

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs text-accent-cyan font-mono uppercase tracking-widest block">Identity</label>
                <input
                  type="text"
                  className="w-full bg-bg-primary border border-accent-muted/30 p-3 text-text-primary font-mono focus:border-accent-cyan focus:outline-none focus:shadow-glow-cyan transition-all"
                  placeholder="ENTER NAME"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-accent-cyan font-mono uppercase tracking-widest block">Return Address</label>
                <input
                  type="email"
                  className="w-full bg-bg-primary border border-accent-muted/30 p-3 text-text-primary font-mono focus:border-accent-cyan focus:outline-none focus:shadow-glow-cyan transition-all"
                  placeholder="ENTER EMAIL"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-accent-cyan font-mono uppercase tracking-widest block">Transmission</label>
                <textarea
                  rows={4}
                  className="w-full bg-bg-primary border border-accent-muted/30 p-3 text-text-primary font-mono focus:border-accent-cyan focus:outline-none focus:shadow-glow-cyan transition-all"
                  placeholder="ENTER MESSAGE DATA..."
                />
              </div>

              <Button type="submit" className="w-full justify-center">
                Send Transmission <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};