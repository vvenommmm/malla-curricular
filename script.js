document.addEventListener("DOMContentLoaded", () => {
  const ramos = [
  // Primer Año
  { id: "anat_humana", nombre: "Anatomía humana normal y embriología", requisitos: [], anio: 1, semestre: 1 },
  { id: "biol_celular", nombre: "Biología celular", requisitos: [], anio: 1, semestre: 1 },
  { id: "fisica", nombre: "Física aplicada", requisitos: [], anio: 1, semestre: 1 },
  { id: "intro_odonto", nombre: "Introducción a la odontología", requisitos: [], anio: 1, semestre: 1 },
  { id: "hab_com", nombre: "Habilidades comunicativas", requisitos: [], anio: 1, semestre: 1 },
  { id: "anat_aplicada", nombre: "Anatomía aplicada", requisitos: ["anat_humana", "biol_celular"], anio: 1, semestre: 2 },
  { id: "quimica", nombre: "Química general e inorgánica", requisitos: [], anio: 1, semestre: 2 },
  { id: "genetica", nombre: "Genética molecular humana", requisitos: ["biol_celular"], anio: 1, semestre: 2 },
  { id: "histo_gral", nombre: "Histología general", requisitos: ["anat_humana", "biol_celular"], anio: 1, semestre: 2 },
  { id: "intro_clinica", nombre: "Introducción a la clínica", requisitos: ["intro_odonto"], anio: 1, semestre: 2 },
  { id: "ingles1", nombre: "Inglés I", requisitos: [], anio: 1, semestre: 2 },

  // Segundo Año
  { id: "biomateriales", nombre: "Biomateriales", requisitos: ["fisica", "anat_aplicada", "quimica"], anio: 2, semestre: 0 },
  { id: "bioquimica", nombre: "Bioquímica general", requisitos: ["quimica", "biol_celular"], anio: 2, semestre: 3 },
  { id: "microbio_gral", nombre: "Microbiología general", requisitos: ["genetica"], anio: 2, semestre: 3 },
  { id: "patologia1", nombre: "Patología general", requisitos: ["genetica", "histo_gral", "anat_aplicada"], anio: 2, semestre: 3 },
  { id: "histo_oral", nombre: "Histología oral", requisitos: ["anat_aplicada", "histo_gral"], anio: 2, semestre: 3 },
  { id: "fisiologia", nombre: "Fisiología", requisitos: ["anat_aplicada", "histo_gral"], anio: 2, semestre: 3 },
  { id: "lab_fisiologia", nombre: "Laboratorio de fisiología", requisitos: ["anat_aplicada", "histo_gral"], anio: 2, semestre: 3 },
  { id: "ingles2", nombre: "Inglés II", requisitos: [], anio: 2, semestre: 3 },
  { id: "bioquimica_oral", nombre: "Bioquímica oral", requisitos: ["bioquimica", "histo_oral"], anio: 2, semestre: 4 },
  { id: "microbio_oral", nombre: "Microbiología oral", requisitos: ["bioquimica", "microbio_gral"], anio: 2, semestre: 4 },
  { id: "patologia2", nombre: "Patología general II", requisitos: ["patologia1", "fisiologia", "lab_fisiologia"], anio: 2, semestre: 4 },
  { id: "promo_salud", nombre: "Promoción y educación en salud", requisitos: ["intro_clinica"], anio: 2, semestre: 4 },
  { id: "raz_cientifico", nombre: "Razonamiento científico", requisitos: ["hab_com"], anio: 2, semestre: 4 },

  // Tercer Año
  { id: "pat_dentomax", nombre: "Patología dentomaxilar", requisitos: ["patologia2", "microbio_oral"], anio: 3, semestre: 0 },
  { id: "imagenologia", nombre: "Imagenología", requisitos: ["patologia2"], anio: 3, semestre: 0 },
  { id: "cirugia_bucal", nombre: "Cirugía bucal básica", requisitos: ["patologia2", "microbio_oral"], anio: 3, semestre: 0 },
  { id: "fisio_oral", nombre: "Fisiología oral y de la oclusión", requisitos: ["biomateriales"], anio: 3, semestre: 0 },
  { id: "preclinico", nombre: "Preclínico integrado", requisitos: ["biomateriales"], anio: 3, semestre: 0 },
  { id: "farmaco1", nombre: "Farmacología I", requisitos: ["bioquimica_oral", "patologia2"], anio: 3, semestre: 5 },
  { id: "ingles4", nombre: "Inglés IV", requisitos: [], anio: 3, semestre: 5 },
  { id: "farmaco2", nombre: "Farmacología II", requisitos: ["farmaco1"], anio: 3, semestre: 6 },
  { id: "cariologia", nombre: "Cariología", requisitos: ["microbio_oral", "farmaco1", "ingles4", "promo_salud"], anio: 3, semestre: 6 },

  // Cuarto Año
  { id: "cirugia_dento", nombre: "Cirugía dentomaxilar", requisitos: ["farmaco2", "pat_dentomax", "imagenologia", "cirugia_bucal"], anio: 4, semestre: 0 },
  { id: "odonto_rest", nombre: "Odontología restauradora", requisitos: ["imagenologia", "cirugia_bucal", "preclinico", "cariologia"], anio: 4, semestre: 0 },
  { id: "protesis", nombre: "Prótesis dentomaxilar", requisitos: ["imagenologia", "cirugia_bucal", "fisio_oral", "preclinico"], anio: 4, semestre: 0 },
  { id: "endodoncia", nombre: "Endodoncia", requisitos: ["farmaco2", "pat_dentomax", "imagenologia", "cirugia_bucal", "cariologia", "preclinico"], anio: 4, semestre: 0 },
  { id: "periodoncia", nombre: "Periodoncia clínica", requisitos: ["farmaco2", "pat_dentomax", "imagenologia", "cirugia_bucal", "preclinico"], anio: 4, semestre: 0 },
  { id: "pat_maxilo", nombre: "Patología maxilofacial", requisitos: ["pat_dentomax", "imagenologia"], anio: 4, semestre: 0 },
  { id: "salud_pub1", nombre: "Salud pública I", requisitos: ["cariologia"], anio: 4, semestre: 7 },
  { id: "pensamiento", nombre: "Pensamiento crítico", requisitos: ["raz_cientifico"], anio: 4, semestre: 7 },
  { id: "salud_pub2", nombre: "Salud pública II", requisitos: ["salud_pub1"], anio: 4, semestre: 8 },

  // Quinto Año
  { id: "cirugia_trauma", nombre: "Cirugía y traumatología maxilofacial", requisitos: ["cirugia_dento", "pat_maxilo"], anio: 5, semestre: 0 },
  { id: "cirugia_adulto", nombre: "Cirugía integral del adulto y odontogeriatría", requisitos: ["odonto_rest", "protesis", "endodoncia", "periodoncia"], anio: 5, semestre: 0 },
  { id: "odontopediatria", nombre: "Odontopediatría", requisitos: ["cirugia_dento", "odonto_rest", "endodoncia"], anio: 5, semestre: 0 },
  { id: "ortodoncia", nombre: "Ortodoncia y ortopedia dentomaxilar", requisitos: ["periodoncia"], anio: 5, semestre: 0 },
  { id: "investigacion", nombre: "Metodología de la investigación", requisitos: ["salud_pub2"], anio: 5, semestre: 9 },
  { id: "medicina_oral", nombre: "Medicina oral", requisitos: ["pat_maxilo"], anio: 5, semestre: 9 },
  { id: "etica", nombre: "Ética en la práctica odontológica", requisitos: ["salud_pub2"], anio: 5, semestre: 9 },
  { id: "gestion", nombre: "Administración y gestión en salud", requisitos: ["salud_pub2", "medicina_oral"], anio: 5, semestre: 10 },
  { id: "medicina_legal", nombre: "Medicina legal", requisitos: ["medicina_oral"], anio: 5, semestre: 10 },
  { id: "resp_social", nombre: "Responsabilidad social", requisitos: [], anio: 5, semestre: 10 },

  // Sexto Año
  { id: "internado", nombre: "Internado clínico", requisitos: ["cirugia_trauma", "cirugia_adulto", "odontopediatria", "ortodoncia", "investigacion", "medicina_legal", "resp_social"], anio: 6, semestre: 0 },
  { id: "proyecto", nombre: "Proyecto integrado de investigación", requisitos: ["cirugia_trauma", "cirugia_adulto", "odontopediatria", "ortodoncia", "investigacion", "medicina_legal", "resp_social"], anio: 6, semestre: 0 },
];
 const aprobados = new Set(JSON.parse(localStorage.getItem("ramosAprobados") || "[]"));

  function guardarEstado() {
    localStorage.setItem("ramosAprobados", JSON.stringify(Array.from(aprobados)));
  }

  function crearRamo(ramo) {
    const div = document.createElement("div");
    div.className = "ramo";
    div.id = ramo.id;
    div.textContent = ramo.nombre;

    const estado = document.createElement("span");
    estado.className = "estado";
    div.appendChild(estado);

    div.addEventListener("click", () => {
      if (!div.classList.contains("bloqueado")) {
        if (aprobados.has(ramo.id)) {
          aprobados.delete(ramo.id);
        } else {
          aprobados.add(ramo.id);
        }
        guardarEstado();
        render();
      }
    });
    return div;
  }

  function render() {
    const contenedor = document.getElementById("malla");
    contenedor.innerHTML = "";

    ramos.sort((a, b) => (a.año - b.año) || (a.semestre - b.semestre)).forEach((ramo) => {
      const div = crearRamo(ramo);
      const requisitosCumplidos = ramo.requisitos.every((req) => aprobados.has(req));
      const estado = div.querySelector(".estado");

      if (aprobados.has(ramo.id)) {
        div.classList.add("aprobado");
        estado.textContent = "Aprobado";
      } else if (!requisitosCumplidos) {
        div.classList.add("bloqueado");
        estado.textContent = "Bloqueado";
      } else {
        estado.textContent = "Disponible";
      }

      contenedor.appendChild(div);
    });
  }

  render();
});
