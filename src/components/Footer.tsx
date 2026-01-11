import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Mail, Clock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="footer" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-display text-2xl font-bold text-primary mb-4">Kontakt Oss</h3>
            <div className="space-y-3 text-foreground/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Kvernhusmyrane 3, 5914 Knarvik</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:tokatterpaloftet@gmail.com" className="hover:text-primary transition-colors">
                  tokatterpaloftet@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-display text-2xl font-bold text-primary mb-4">Åpningstider</h3>
            <div className="space-y-2 text-foreground/80">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <p>Man - Tor: 12:00 - 20:30</p>
                  <p>Fre - Lør: 12:00 - 02:30</p>
                  <p>Søn: 14:00 - 20:30</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Branding */}
          <div>
            <h3 className="font-display text-2xl font-bold text-primary mb-4">Følg Oss</h3>
            <div className="flex gap-4 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground/80 hover:text-primary hover:bg-secondary/80 transition-all duration-300 hover:shadow-glow"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground/80 hover:text-primary hover:bg-secondary/80 transition-all duration-300 hover:shadow-glow"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
            {/* Logo - matching Navbar exactly */}
            <Link to="/" className="flex flex-col">
              <div className="flex items-center">
                <span className="font-display text-2xl font-bold text-foreground">2 Katter</span>
                <span className="font-display text-2xl font-bold text-primary ml-2">på Loftet</span>
              </div>
              <span className="text-xs text-muted-foreground tracking-widest">bar • restaurant • kultur</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center text-foreground/50 text-sm">
          <p>© {new Date().getFullYear()} 2 Katter på Loftet. 100% lokalt eierskap. Alle rettigheter reservert.</p>
        </div>
      </div>
    </footer>
  );
};
