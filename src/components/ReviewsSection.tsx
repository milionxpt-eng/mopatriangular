import profileMaria from "@/assets/profiles/maria.jpg";
import profileCarlos from "@/assets/profiles/carlos.jpg";
import profileAna from "@/assets/profiles/ana.jpg";
import profilePedro from "@/assets/profiles/pedro.jpg";
import profileLaura from "@/assets/profiles/laura.jpg";
import profileJavier from "@/assets/profiles/javier.jpg";
import profileCarmen from "@/assets/profiles/carmen.jpg";
import profileDiego from "@/assets/profiles/diego.jpg";
import profileIsabel from "@/assets/profiles/isabel.jpg";
import profileRoberto from "@/assets/profiles/roberto.jpg";

const topReviews = [
  { name: "María García", location: "Madrid", stars: 5, text: "¡Increíble! Por fin puedo limpiar las esquinas del baño sin esfuerzo. La rotación 360° es una maravilla.", photo: profileMaria },
  { name: "Carlos Rodríguez", location: "Barcelona", stars: 5, text: "Compré dos, una para casa y otra para la oficina. La calidad es premium y los paños se lavan perfectamente.", photo: profileCarlos },
  { name: "Ana Martínez", location: "Valencia", stars: 5, text: "Mi marido no me creía hasta que la probó. Ahora es él quien friega 😂 La forma triangular es genial.", photo: profileAna },
  { name: "Pedro López", location: "Sevilla", stars: 5, text: "Muy buena calidad. Llegó en 2 días con pago contra entrega. Limpia debajo de los muebles sin agacharse.", photo: profilePedro },
  { name: "Laura Fernández", location: "Málaga", stars: 5, text: "La mejor compra que he hecho este año. Mis suelos brillan como nunca. ¡Y el envío fue rapidísimo!", photo: profileLaura },
  { name: "Javier Sánchez", location: "Bilbao", stars: 5, text: "Escéptico al principio, pero esta mopa es otra liga. Limpia techos, ventanas y suelos. 4 en 1 de verdad.", photo: profileJavier },
  { name: "Carmen Ruiz", location: "Zaragoza", stars: 5, text: "Tengo problemas de espalda y esta mopa me ha cambiado la vida. No necesito agacharme para nada.", photo: profileCarmen },
  { name: "Diego Moreno", location: "Alicante", stars: 5, text: "Pagué contra entrega y llegó en 48 horas. La calidad del mango de acero es impresionante.", photo: profileDiego },
  { name: "Isabel Torres", location: "Granada", stars: 5, text: "Se la regalé a mi madre y está encantada. Dice que es lo mejor que le han regalado en años.", photo: profileIsabel },
  { name: "Roberto Díaz", location: "Valladolid", stars: 5, text: "Funciona de maravilla en parqué y baldosa. Los paños de microfibra son de muy buena calidad.", photo: profileRoberto },
];

const bottomReviews = [
  { name: "Lucía Navarro", location: "Murcia", stars: 5, text: "¡No puedo vivir sin ella! Limpio toda la casa en la mitad de tiempo. El diseño triangular es un acierto.", photo: profileLaura },
  { name: "Fernando Gil", location: "Santander", stars: 5, text: "Perfecto para los rincones del salón. Antes usaba trapos y rodillas, ahora todo es mucho más fácil.", photo: profileJavier },
  { name: "Pilar Romero", location: "Córdoba", stars: 5, text: "Pedí con pago contra entrega y todo perfecto. La mopa llegó bien embalada y funciona genial.", photo: profileCarmen },
  { name: "Andrés Herrera", location: "Vigo", stars: 5, text: "Calidad-precio inmejorable. El mango extensible llega al techo sin necesidad de escalera.", photo: profileCarlos },
  { name: "Elena Castro", location: "Pamplona", stars: 5, text: "La uso para limpiar las ventanas por fuera y es fantástica. Los paños absorben muchísimo.", photo: profileMaria },
  { name: "Miguel Ortega", location: "Gijón", stars: 5, text: "Muy satisfecho con la compra. El giro 360° hace que limpiar sea casi divertido.", photo: profilePedro },
  { name: "Rosa Delgado", location: "Salamanca", stars: 5, text: "Se nota la diferencia con las fregonas normales. Esta llega a todos los rincones sin problema.", photo: profileAna },
  { name: "Pablo Guerrero", location: "Toledo", stars: 5, text: "Llegó antes de lo esperado. Pagué al recibir, sin problemas. La uso todos los días.", photo: profileDiego },
  { name: "Teresa Molina", location: "Cádiz", stars: 5, text: "Mis vecinas me la han pedido prestada y ahora todas quieren una. ¡Es adictiva de lo bien que limpia!", photo: profileIsabel },
  { name: "Óscar Ramírez", location: "León", stars: 5, text: "El mejor invento para limpiar suelos. La recomiendo al 100%. Relación calidad-precio espectacular.", photo: profileRoberto },
];

const ReviewCard = ({ review }: { review: typeof topReviews[0] }) => (
  <div className="flex-shrink-0 w-[340px] glass border-gradient-gold rounded-xl p-5 mx-3">
    <div className="flex items-center gap-3 mb-3">
      <img src={review.photo} alt={review.name} className="w-10 h-10 rounded-full object-cover" loading="lazy" width={40} height={40} />
      <div>
        <p className="font-bold text-foreground text-sm">{review.name}</p>
        <p className="text-xs text-muted-foreground">{review.location}</p>
      </div>
    </div>
    <div className="mb-2 text-gold text-sm">{"⭐".repeat(review.stars)}</div>
    <p className="text-foreground/80 text-sm leading-relaxed">{review.text}</p>
  </div>
);

const ReviewsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(38,80%,55%,0.04)_0%,_transparent_60%)]" />
      <div className="relative z-10">
        <div className="text-center mb-12 px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Lo que dicen nuestros <span className="text-gradient-gold">clientes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            +2.500 hogares en España ya disfrutan de una limpieza sin esfuerzo
          </p>
        </div>

        {/* Top row - scrolls right */}
        <div className="mb-6 overflow-hidden">
          <div className="flex animate-marquee-right">
            {[...topReviews, ...topReviews].map((review, i) => (
              <ReviewCard key={`top-${i}`} review={review} />
            ))}
          </div>
        </div>

        {/* Bottom row - scrolls left */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee-left">
            {[...bottomReviews, ...bottomReviews].map((review, i) => (
              <ReviewCard key={`bottom-${i}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
