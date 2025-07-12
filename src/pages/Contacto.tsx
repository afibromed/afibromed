
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { useState } from "react";

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulamos el envío del formulario
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarnos. Te responderemos pronto.",
    });
    
    // Limpiar formulario
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      mensaje: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Formulario de Contacto */}
            <Card className="border-green-200 slide-up">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Mail className="mr-3 h-6 w-6 text-primary" />
                  Envíanos un Mensaje
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre Completo *</Label>
                    <Input 
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      className="border-green-200 focus:border-primary"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico *</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="border-green-200 focus:border-primary"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono (Opcional)</Label>
                    <Input 
                      id="telefono"
                      name="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="border-green-200 focus:border-primary"
                      placeholder="Tu número de teléfono"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensaje">Mensaje *</Label>
                    <Textarea 
                      id="mensaje"
                      name="mensaje"
                      required
                      value={formData.mensaje}
                      onChange={handleChange}
                      className="border-green-200 focus:border-primary min-h-[120px]"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90"
                    size="lg"
                  >
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Información de Contacto */}
            <div className="space-y-6 slide-up">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <Phone className="mr-3 h-6 w-6 text-primary" />
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
                        href="mailto:info@afibromed.org" 
                        className="text-primary hover:underline"
                      >
                        info@afibromed.org
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
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Horario de Atención</h3>
                      <p className="text-gray-600 text-sm">
                        Lunes a Viernes: 10:00 - 18:00<br />
                        Sábados: 10:00 - 14:00<br />
                        <span className="italic">Respuesta por email en 24-48h</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Preguntas Frecuentes
            </h2>
          </div>
          
          <div className="space-y-4">
            <Card className="border-green-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  ¿Cómo puedo unirme a AFIBROMED?
                </h3>
                <p className="text-gray-600 text-sm">
                  Puedes contactarnos a través de este formulario o enviando un email a 
                  info@afibromed.org. Te proporcionaremos toda la información necesaria 
                  sobre los requisitos y beneficios de ser miembro.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  ¿Ofrecen servicios gratuitos?
                </h3>
                <p className="text-gray-600 text-sm">
                  Sí, muchos de nuestros servicios son gratuitos para los miembros, 
                  incluyendo grupos de apoyo, información y recursos educativos. 
                  Algunos talleres especializados pueden tener un costo simbólico.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  ¿Dónde se realizan las reuniones?
                </h3>
                <p className="text-gray-600 text-sm">
                  Nuestras reuniones se realizan en El Vendrell (Tarragona). La ubicación específica 
                  se comunica a los miembros registrados. También ofrecemos algunas 
                  actividades online para mayor accesibilidad.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;
