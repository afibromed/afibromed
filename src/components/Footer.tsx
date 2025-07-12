
import { Heart, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-50 border-t border-green-100 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/ce0326b6-2055-492c-aa7e-ebf4b46ef6fc.png" 
                alt="Logo AFIBROMED"
                className="h-8 w-auto"
              />
              <span className="text-lg font-bold text-primary">AFIBROMED</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              ASOCIACIÓN DE FIBROMIALGIA PARA EL DIAGNÓSTICO Y TRATAMIENTO MÉDICO MULTIDISCIPLINAR DE LA FIBROMIALGIA, ASI COMO SU DIVULGACIÓN SOCIAL
            </p>
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
                  Qué es la Fibromialgia
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Contacto
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
                  href="mailto:info@afibromed.org" 
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  info@afibromed.org
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-200 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            © 2024 AFIBROMED. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-1 text-xs text-gray-500 mt-2 sm:mt-0">
            <span>Hecho con</span>
            <Heart className="h-3 w-3 text-red-500" />
            <span>para nuestra comunidad</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
