const FooterSection = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-display text-xl font-bold text-gradient-gold mb-3">
              MopaTriangular360.es
            </h3>
            <p className="text-muted-foreground text-sm">
              La mopa que revoluciona la limpieza del hogar en España.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-foreground">Información</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-gold transition-colors">Política de privacidad</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Términos y condiciones</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Política de devoluciones</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-foreground">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>📧 info@mopatriangular360.es</li>
              <li>📱 WhatsApp: +34 600 000 000</li>
              <li>🕐 Lun-Vie: 9:00 - 18:00</li>
            </ul>
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
