
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Users, Phone, Calendar, HandHeart, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <img 
              src="/lovable-uploads/ce0326b6-2055-492c-aa7e-ebf4b46ef6fc.png" 
              alt="Logo AFIBROMED"
              className="h-24 w-auto mx-auto mb-8"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              AFIBROMED
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto">
              Asociación de fibromialgia gratuita para el diagnóstico y tratamiento médico multidisciplinar de la fibromialgia, asi como su divulgación social
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              LA FIBROMIALGIA NO NOS QUITARÁ LA ALEGRIA DE VIVIR
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/fibromialgia">
                  Conoce la Fibromialgia
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                <Link to="/contacto">
                  Únete a Nosotros
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos apoyo integral para mejorar la calidad de vida de las personas 
              con fibromialgia y sus familias.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-green-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Grupos de Apoyo
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Reuniones regulares donde compartir experiencias, consejos y 
                  apoyo emocional con otras personas que entienden tu situación.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Información y Recursos
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Proporcionamos información actualizada sobre tratamientos, 
                  investigaciones y recursos útiles para el manejo de la fibromialgia.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Defensa de Derechos
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Trabajamos para la defensa de los derechos de las personas con 
                  fibromialgia y la sensibilización de la sociedad.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nuestra Misión
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Mejorar la calidad de vida de las personas afectadas por fibromialgia 
                y sus familias, proporcionando apoyo, información y fomentando la 
                comprensión social de esta condición.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Creemos en el poder de la comunidad y en que nadie debe enfrentar 
                la fibromialgia en soledad. Juntos somos más fuertes.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white rounded-2xl flex items-center justify-center">
                <img 
                  src="/lovable-uploads/1b04b56a-f091-421c-b215-cb3f8fefc1a8.png"
                  alt="Ilustración de apoyo"
                  className="h-64 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Necesitas Apoyo?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            No estás solo. Estamos para acompañarte en cada paso del camino.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <Link to="/contacto">
                <Phone className="mr-2 h-5 w-5" />
                Contáctanos
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/fibromialgia">
                <Calendar className="mr-2 h-5 w-5" />
                Más Información
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
