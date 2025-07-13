import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AlertCircle, Brain, Heart, Users, Activity, Shield } from "lucide-react";

const Fibromialgia = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Qué es la fibromialgia?
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              La fibromialgia es una condición crónica caracterizada por dolor muscular 
              generalizado, fatiga y otros síntomas que afectan significativamente la 
              calidad de vida de quienes la padecen.
            </p>
          </div>
        </div>
      </section>

      {/* Definición */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-green-200 slide-up">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-2xl text-gray-900">
                <AlertCircle className="mr-3 h-8 w-8 text-primary" />
                Definición Médica
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                La fibromialgia es un síndrome de dolor crónico generalizado que se caracteriza 
                por la presencia de dolor muscular y esquelético en múltiples puntos del cuerpo, 
                acompañado de fatiga, alteraciones del sueño y problemas cognitivos.
              </p>
              <p>
                Aunque no es una enfermedad degenerativa ni pone en peligro la vida, 
                la fibromialgia puede ser muy debilitante y afectar significativamente 
                la capacidad funcional y la calidad de vida de las personas.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Síntomas */}
      <section className="py-12 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Principales Síntomas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              La fibromialgia presenta una variedad de síntomas que pueden variar 
              en intensidad y manifestarse de diferentes formas en cada persona.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Activity className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Dolor Generalizado</h3>
                    <p className="text-sm text-gray-600">
                      Dolor muscular y en articulaciones que se extiende por todo el cuerpo, 
                      especialmente en puntos sensibles específicos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Brain className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Fatiga Crónica</h3>
                    <p className="text-sm text-gray-600">
                      Cansancio extremo y persistente que no mejora con el descanso 
                      y que interfiere con las actividades diarias.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Brain className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Problemas Cognitivos</h3>
                    <p className="text-sm text-gray-600">
                      Dificultades de concentración, memoria y claridad mental, 
                      conocidas como "niebla fibro".
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Alteraciones del Sueño</h3>
                    <p className="text-sm text-gray-600">
                      Dificultad para conciliar o mantener el sueño, sueño no reparador 
                      y despertares frecuentes durante la noche.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Rigidez Matutina</h3>
                    <p className="text-sm text-gray-600">
                      Sensación de rigidez y dificultad para moverse, especialmente 
                      al levantarse por la mañana.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <AlertCircle className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Otros Síntomas</h3>
                    <p className="text-sm text-gray-600">
                      Dolores de cabeza, síndrome del intestino irritable, sensibilidad 
                      a la luz, ruido y temperatura.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diagnóstico y Tratamiento */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-green-200 slide-up">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Diagnóstico</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  El diagnóstico de fibromialgia se basa principalmente en la evaluación clínica, 
                  ya que no existe una prueba específica para detectarla.
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Evaluación de puntos sensibles específicos</li>
                  <li>Historial médico detallado</li>
                  <li>Exclusión de otras condiciones</li>
                  <li>Análisis de síntomas durante al menos 3 meses</li>
                </ul>
                <p className="text-sm text-gray-600 italic">
                  Es importante consultar con profesionales especializados en dolor crónico 
                  y reumatología para un diagnóstico preciso.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 slide-up">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Tratamiento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  El tratamiento de la fibromialgia es multidisciplinario y se enfoca 
                  en el manejo de los síntomas y la mejora de la calidad de vida.
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Medicación para el dolor y otros síntomas</li>
                  <li>Ejercicio físico adaptado y fisioterapia</li>
                  <li>Terapias psicológicas y apoyo emocional</li>
                  <li>Técnicas de relajación y manejo del estrés</li>
                  <li>Educación sobre la condición</li>
                </ul>
                <p className="text-sm text-gray-600 italic">
                  Cada plan de tratamiento debe ser personalizado y adaptado 
                  a las necesidades específicas de cada persona.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vivir con fibromialgia */}
      <section className="py-12 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-green-200">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-gray-900 mb-4">
                Vivir con fibromialgia
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Aunque la fibromialgia es una condición crónica, es posible llevar una vida 
                plena y significativa con el apoyo adecuado, el tratamiento apropiado y 
                estrategias de manejo efectivas.
              </p>
              <p>
                <strong>El apoyo de la comunidad es fundamental.</strong> Conectar con otras 
                personas que entienden tu experiencia puede marcar una gran diferencia en 
                tu bienestar emocional y en tu capacidad para manejar la condición.
              </p>
              <p>
                En AFIBROMED, creemos que nadie debe enfrentar la fibromialgia en soledad. 
                Nuestro objetivo es proporcionar información, apoyo y recursos para ayudarte 
                a vivir de la mejor manera posible con esta condición.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Misión y Call to Action combinados */}
      <section className="py-12">
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
            <div className="bg-primary text-white p-8 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-6">
                ¿Necesitas Apoyo?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                No estás solo. Estamos para acompañarte en cada paso del camino.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Necesitas Más Información?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Estamos aquí para ayudarte. No dudes en contactarnos para recibir 
            apoyo, información adicional o unirte a nuestra comunidad.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
            <Link to="/contacto">
              Contáctanos Ahora
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Fibromialgia;
