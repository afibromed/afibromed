
import { MapPin, Mail, Globe, Building } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-50 border-t border-green-100 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
              LEGAL
            </h3>
            <div className="text-sm text-gray-600 leading-relaxed">
              <div>AFIBROMED</div>
              <div>NIF: G-55716971</div>
              <div>Núm. inscripción Asociaciones de Catalunya: 61873</div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/fibromialgia" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  ¿Qué es la fibromialgia?
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/politica-cookies" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Política de cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm text-gray-600">El Vendrell (Tarragona), España</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <a 
                  href="mailto:afibromed@gmail.com" 
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  afibromed@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-primary" />
                <span className="text-sm text-gray-600">afibromed.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-200 mt-8 pt-8 flex justify-center">
          <p className="text-xs text-gray-500">
            © AFIBROMED. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
