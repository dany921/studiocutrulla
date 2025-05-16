
import ScrollReveal from '@/components/ScrollReveal';

const PartnershipSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-accountBlue mb-4">Partnership</h2>
            <p className="text-accountGray-dark max-w-2xl mx-auto">
              Collaboriamo con importanti realtà professionali per offrire soluzioni integrate e di qualità.
            </p>
          </ScrollReveal>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <ScrollReveal direction="left" delay={100}>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center h-32">
              <div className="w-full h-16 bg-[url('https://via.placeholder.com/200x80?text=Partner+Logo')] bg-contain bg-no-repeat bg-center"></div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left" delay={200}>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center h-32">
              <div className="w-full h-16 bg-[url('https://via.placeholder.com/200x80?text=Partner+Logo')] bg-contain bg-no-repeat bg-center"></div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={300}>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center h-32">
              <div className="w-full h-16 bg-[url('https://via.placeholder.com/200x80?text=Partner+Logo')] bg-contain bg-no-repeat bg-center"></div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={400}>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center h-32">
              <div className="w-full h-16 bg-[url('https://via.placeholder.com/200x80?text=Partner+Logo')] bg-contain bg-no-repeat bg-center"></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
