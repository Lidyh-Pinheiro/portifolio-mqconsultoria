
import { CreditCard, Globe, MapPin, Users, Laptop } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ServiceInfo = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-mq-blue-50 to-mq-light-blue-50">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-mq-blue mb-4">
            Atendimento Nacional
          </h2>
          <div className="w-24 h-1 bg-mq-light-blue mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções personalizadas para todo o Brasil
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="overflow-hidden border-t-4 border-t-mq-blue shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
            <CardContent className="p-8">
              <div className="flex items-start">
                <div className="bg-mq-blue/10 p-4 rounded-full mr-6">
                  <MapPin className="h-8 w-8 text-mq-blue" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-mq-blue mb-3">Atuação Nacional</h3>
                  <p className="text-gray-600 mb-4">
                    Atendemos em todo o território brasileiro com soluções estratégicas adaptadas à sua realidade local.
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-mq-light-blue mr-2" />
                      <span className="text-gray-700">Atendimento Presencial</span>
                    </div>
                    <div className="flex items-center">
                      <Laptop className="h-5 w-5 text-mq-light-blue mr-2" />
                      <span className="text-gray-700">Consultorias Online</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-t-4 border-t-mq-light-blue shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in delay-150">
            <CardContent className="p-8">
              <div className="flex items-start">
                <div className="bg-mq-light-blue/10 p-4 rounded-full mr-6">
                  <CreditCard className="h-8 w-8 text-mq-light-blue" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-mq-light-blue mb-3">Formas de Pagamento</h3>
                  <p className="text-gray-600 mb-4">
                    Facilitamos o seu investimento aceitando as principais formas de pagamento do mercado.
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="flex flex-wrap gap-3">
                      <div className="bg-white p-2 rounded-md shadow-sm">
                        <img src="/public/lovable-uploads/visa.png" alt="Visa" className="h-8" 
                             onError={(e) => {
                               e.currentTarget.src = 'https://placehold.co/80x32/ffffff/0046AD?text=VISA';
                             }} />
                      </div>
                      <div className="bg-white p-2 rounded-md shadow-sm">
                        <img src="/public/lovable-uploads/mastercard.png" alt="Mastercard" className="h-8" 
                             onError={(e) => {
                               e.currentTarget.src = 'https://placehold.co/80x32/ffffff/EB001B?text=MASTERCARD';
                             }} />
                      </div>
                      <div className="bg-white p-2 rounded-md shadow-sm">
                        <img src="/public/lovable-uploads/pix.png" alt="Pix" className="h-8" 
                             onError={(e) => {
                               e.currentTarget.src = 'https://placehold.co/80x32/ffffff/00FFAE?text=PIX';
                             }} />
                      </div>
                      <div className="flex items-center bg-white p-2 rounded-md shadow-sm">
                        <Globe className="h-5 w-5 text-mq-blue mr-1" />
                        <span className="text-gray-700 text-sm">E outros</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServiceInfo;
