
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const PoliticaCookies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Política de Cookies
          </h1>
          
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                ¿Qué son las cookies?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. 
                Nos permiten recordar información sobre tu visita, como tu idioma preferido y otras opciones, 
                lo que puede facilitar tu próxima visita y hacer que el sitio te resulte más útil.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                ¿Cómo utilizamos las cookies?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                En afibromed.lovable.app utilizamos cookies para:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Asegurar el funcionamiento básico del sitio web</li>
                <li>Recordar tus preferencias de cookies</li>
                <li>Analizar el uso del sitio web para mejorarlo (solo si das tu consentimiento)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Tipos de cookies que utilizamos
              </h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Cookies Técnicas (Necesarias)</h3>
                  <p className="text-gray-700">
                    Son imprescindibles para el funcionamiento del sitio web y no pueden ser desactivadas. 
                    Incluyen cookies de sesión, preferencias de cookies y funcionalidades básicas.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Finalidad:</strong> Funcionamiento del sitio web<br/>
                    <strong>Duración:</strong> Sesión y hasta 1 año<br/>
                    <strong>Legitimación:</strong> Interés legítimo
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Cookies Analíticas</h3>
                  <p className="text-gray-700">
                    Nos ayudan a entender cómo interactúan los visitantes con el sitio web, 
                    proporcionando información sobre las páginas visitadas, el tiempo de permanencia y otros datos analíticos.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Finalidad:</strong> Análisis y mejora del sitio web<br/>
                    <strong>Duración:</strong> Hasta 2 años<br/>
                    <strong>Legitimación:</strong> Consentimiento del usuario
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Gestión de cookies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Puedes gestionar tus preferencias de cookies en cualquier momento:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>A través del banner de cookies que aparece en tu primera visita</li>
                <li>Desde la configuración de tu navegador</li>
                <li>Eliminando las cookies almacenadas en tu dispositivo</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Información de contacto
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Si tienes dudas sobre nuestra política de cookies, puedes contactarnos:
              </p>
              <div className="bg-green-50 p-4 rounded-lg mt-4">
                <p className="text-gray-700">
                  <strong>AFIBROMED</strong><br/>
                  Email: afibromed@gmail.com<br/>
                  Ubicación: El Vendrell (Tarragona), España
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Actualizaciones
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Esta política de cookies puede ser actualizada ocasionalmente. 
                Te recomendamos revisarla periódicamente para estar informado sobre cómo utilizamos las cookies.
              </p>
              <p className="text-sm text-gray-600 mt-4">
                <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES')}
              </p>
            </section>

          </div>
        </div>
      </div>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default PoliticaCookies;
