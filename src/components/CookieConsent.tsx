
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Cookie } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto">
      <Card className="border-primary shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Cookie className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">
                Política de Cookies
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Utilizamos cookies esenciales para el funcionamiento del sitio web y mejorar tu experiencia. 
                Al continuar navegando, aceptas nuestro uso de cookies según nuestra política de privacidad.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button 
                  size="sm" 
                  onClick={acceptCookies}
                  className="bg-primary hover:bg-primary/90"
                >
                  Aceptar
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={rejectCookies}
                  className="border-gray-300"
                >
                  Rechazar
                </Button>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={rejectCookies}
              className="p-1 h-auto"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieConsent;
