import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "¿Sirve si no tengo diagnóstico oficial?",
      answer: "Sí. Las herramientas de gestión ejecutiva y emocional son útiles para cualquier persona que se identifique con los síntomas, tenga o no el papel médico."
    },
    {
      question: "¿Es un libro técnico y aburrido?",
      answer: "No. Está escrito como un manual práctico. Menos teoría densa, más estrategias aplicables desde el día 1."
    },
    {
      question: "¿Sirve para adolescentes?",
      answer: "Absolutamente. El Bonus #2 está específicamente diseñado para ayudar en la etapa escolar y académica, y el lenguaje es accesible."
    },
    {
      question: "¿Cómo recibo el material?",
      answer: "Inmediatamente después de tu compra recibirás un correo electrónico con los enlaces de descarga directa a todo el material en formato digital (PDF)."
    }
  ];

  return (
    <section className="bg-[#F9FAFB] py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4 font-heading tracking-tight">
            ¿Tienes Dudas? Vamos a Resolverlas
          </h2>
          <p className="text-[#E89643] font-bold text-lg animate-pulse">
            ¡Quedan pocas horas para que expire el descuento del 80%!
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white border-l-4 border-transparent hover:border-[#E89643] rounded-lg px-6 shadow-sm transition-all duration-300 hover:shadow-md">
              <AccordionTrigger className="text-left font-bold text-[#333333] hover:text-[#E89643] py-6 text-lg font-heading group-hover:text-[#E89643] transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#333333] pb-6 text-base leading-relaxed font-sans bg-gray-50/50 -mx-6 px-6 pt-4 rounded-b-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
