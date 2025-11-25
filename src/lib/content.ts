export type Service = {
  title: string;
  description: string;
  duration: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Contacto', href: '/contacto' },
];

export const services: Service[] = [
  {
    title: 'Estética canina integral',
    description: 'Spa completo con cepillado, masajes relajantes y cuidado de pelaje con productos hipoalergénicos.',
    duration: '90 minutos promedio',
  },
  {
    title: 'Baño premium aromaterapia',
    description: 'Baño tibio con aromas suaves, secado cuidadoso y limpieza de almohadillas para un confort absoluto.',
    duration: '60 minutos promedio',
  },
  {
    title: 'Corte estilizado y seguro',
    description: 'Diseños modernos adaptados a la personalidad de tu perrito, con herramientas esterilizadas y silenciosas.',
    duration: '75 minutos promedio',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Mariana & Luna',
    role: 'Cliente feliz',
    quote: 'Luna sale del spa suave y tranquila. Se nota el cariño con el que la cuidan.',
  },
  {
    name: 'Carlos & Max',
    role: 'Cliente recurrente',
    quote: 'El equipo entiende perfecto a Max. El corte siempre queda impecable y sin estrés.',
  },
  {
    name: 'Vale & Coco',
    role: 'Primera visita',
    quote: 'Nos guiaron con paciencia y tips de cuidado en casa. Súper profesionales y amables.',
  },
];
