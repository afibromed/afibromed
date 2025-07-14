
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { X, Cookie, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    } else {
      const preferences = localStorage.getItem("cookie-preferences");
      if (preferences) {
        setCookiePreferences(JSON.parse(preferences));
      }
    }
  }, []);

  const acceptAllCookies = () => {
    const preferences = {
      necessary: true,
      analytics: true,
    };
    localStorage.setItem("cookie-consent", "accepted");
    localStorage.setItem("cookie-preferences", JSON.stringify(preferences));
    setCookiePreferences(preferences);
    setIsVisible(false);
  };

  const savePreferences = () => {
    localStorage.setItem("cookie-consent", "configured");
    localStorage.setItem("cookie-preferences", JSON.stringify(cookiePreferences));
    setIsVisible(false);
    setShowConfig(false);
  };

  const handlePreferenceChange = (type: string, value: boolean) => {
    if (type === "necessary") return; // Can't disable necessary cookies
    setCookiePreferences(prev => ({
      ...prev,
      [type]: value
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-2xl mx-auto">
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
                Este sitio web utiliza cookies técnicas necesarias para su funcionamiento y cookies analíticas para mejorar tu experiencia de navegación. No se usan cookies publicitarias.
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Puedes aceptar todas las cookies o configurarlas según tus preferencias. Para más información, consulta nuestra{" "}
                <Link to="/politica-cookies" className="text-primary hover:underline">
                  Política de cookies
                </Link>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button 
                  size="sm" 
                  onClick={acceptAllCookies}
                  className="bg-primary hover:bg-primary/90"
                >
                  ✔ Aceptar
                </Button>
                <Dialog open={showConfig} onOpenChange={setShowConfig}>
                  <DialogTrigger asChild>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-gray-300"
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Configurar cookies
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Configuración de Cookies</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Cookies Necesarias</h4>
                          <p className="text-sm text-gray-600">
                            Imprescindibles para el funcionamiento del sitio web
                          </p>
                        </div>
                        <Switch
                          checked={cookiePreferences.necessary}
                          disabled={true}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Cookies Analíticas</h4>
                          <p className="text-sm text-gray-600">
                            Nos ayudan a mejorar tu experiencia de navegación
                          </p>
                        </div>
                        <Switch
                          checked={cookiePreferences.analytics}
                          onCheckedChange={(checked) => 
                            handlePreferenceChange("analytics", checked)
                          }
                        />
                      </div>
                    </div>
                    <div className="flex justify-end space-x-2 mt-6">
                      <Button variant="outline" onClick={() => setShowConfig(false)}>
                        Cancelar
                      </Button>
                      <Button onClick={savePreferences}>
                        Guardar Preferencias
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
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
