// Fuente única de la identidad pública del autor. La usan el JSON-LD
// (PersonSchema.astro) y, a futuro, cualquier lista de enlaces del sitio.
export const SITE = "https://vfuentesc.github.io";

export const perfil = {
  id: `${SITE}/#persona`,
  nombre: "Víctor Fuentes Campos",
  cargo: "Gerente Central de Economía",
  imagen: `${SITE}/victor-fuentes.png`,
  empleador: { nombre: "Instituto Peruano de Economía (IPE)", url: "https://ipe.org.pe/" },
  estudios: [
    { nombre: "Harris School of Public Policy, University of Chicago", url: "https://harris.uchicago.edu/" },
    { nombre: "Universidad del Pacífico", url: "https://www.up.edu.pe/" },
  ],
  temas: ["Economía peruana", "Políticas públicas", "Economía", "Datos", "Inteligencia artificial aplicada a políticas públicas"],
  // Solo perfiles que identifican a la persona. Al publicarse la página del
  // autor en La República, agregarla acá.
  sameAs: [
    "https://x.com/vfuentesc",
    "https://www.linkedin.com/in/vfuentesc",
    "https://github.com/vfuentesc",
    "https://elcomercio.pe/autor/victorfuentescampos/",
  ],
  proyecto: { nombre: "Perú en Cifras", url: "https://peruencifras.pe" },
};
