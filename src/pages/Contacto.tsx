
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Globe, Building } from "lucide-react";

const Contacto = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contacta con Nosotros
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Estamos aquí para apoyarte. No dudes en contactarnos para cualquier 
              consulta, información o si deseas unirte a nuestra asociación.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            {/* Información de Contacto */}
            <Card className="border-green-200 w-full max-w-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center justify-center">
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Correo Electrónico</h3>
                    <a 
                      href="mailto:afibromed@gmail.com" 
                      className="text-primary hover:underline"
                    >
                      afibromed@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Ubicación</h3>
                    <p className="text-gray-600">
                      El Vendrell (Tarragona), España<br />
                      <span className="text-sm">
                        (La dirección específica se proporcionará a los miembros)
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Sitio Web</h3>
                    <p className="text-gray-600">
                      afibromed.org
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Información Legal</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Razón Social: AFIBROMED</p>
                      <p>NIF: G-55716971</p>
                      <p>Núm. inscripción Asociaciones de Catalunya: 61873</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Contacto;
