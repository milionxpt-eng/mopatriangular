const FooterSection = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 text-center md:text-left">
          <div>
            <h3 className="font-display text-xl font-bold text-gradient-gold mb-3">
              MopaTriangular360.es
            </h3>
            <p className="text-muted-foreground text-sm">
              La mopa que revoluciona la limpieza del hogar en España.
            </p>
            <div className="mt-4">
              <h4 className="font-semibold mb-3 text-foreground">Información</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-gold transition-colors">Política de privacidad</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Términos y condiciones</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Política de devoluciones</a></li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-foreground">Nuestra historia</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Todo empezó cuando nuestra fundadora, cansada de arrodillarse cada día para limpiar los rincones 
              imposibles de su casa, se preguntó: <em className="text-foreground">«¿Por qué ninguna fregona llega 
              donde de verdad se acumula la suciedad?»</em> Tras meses probando prototipos y perfeccionando el 
              diseño triangular con rotación 360°, nació una mopa que no solo limpia suelos, sino también 
              ventanas, techos y debajo de cada mueble. Hoy, más de 2.500 hogares españoles confían en ella 
              para mantener su casa impecable sin esfuerzo ni dolor de espalda. Nuestra misión es sencilla: 
              que limpiar deje de ser una tarea pesada y se convierta en algo rápido, cómodo y hasta satisfactorio.
            </p>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          © 2026 MopaTriangular360.es — Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
