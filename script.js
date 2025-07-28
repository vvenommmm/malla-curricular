document.addEventListener("DOMContentLoaded", () => {
  const ramos = [
    // --- PRIMER AÑO ---
    { id: "anatomia", nombre: "Anatomía humana normal y embriología", requisitos: [], año: 1, semestre: 1 },
    { id: "biologia", nombre: "Biología celular", requisitos: [], año: 1, semestre: 1 },
    { id: "fisica", nombre: "Física aplicada", requisitos: [], año: 1, semestre: 1 },
    { id: "introduccion", nombre: "Introducción a la odontología", requisitos: [], año: 1, semestre: 1 },
    { id: "habilidades", nombre: "Habilidades comunicativas", requisitos: [], año: 1, semestre: 1 },

    { id: "anatomia_aplicada", nombre: "Anatomía aplicada", requisitos: ["anatomia", "biologia"], año: 1, semestre: 2 },
    { id: "quimica", nombre: "Química general e inorgánica", requisitos: [], año: 1, semestre: 2 },
    { id: "genetica", nombre: "Genética molecular humana", requisitos: ["biologia"], año: 1, semestre: 2 },
    { id: "histologia", nombre: "Histología general", requisitos: ["anatomia", "biologia"], año: 1, semestre: 2 },
    { id: "introduccion_clinica", nombre: "Introducción a la clínica", requisitos: ["introduccion"], año: 1, semestre: 2 },
    { id: "ingles1", nombre: "Inglés I", requisitos: [], año: 1, semestre: 2 },

    // --- SEGUNDO AÑO ---
    { id: "biomateriales", nombre: "Biomateriales", requisitos: ["fisica", "anatomia_aplicada", "quimica"], año: 2, semestre: 0 },
    { id: "bioquimica", nombre: "Bioquímica general", requisitos: ["quimica", "biologia"], año: 2, semestre: 3 },
    { id: "microbio_gral", nombre: "Microbiología general", requisitos: ["genetica"], año: 2, semestre: 3 },
    { id: "patologia1", nombre: "Patología general", requisitos: ["genetica", "histologia", "anatomia_aplicada"], año: 2, semestre: 3 },
    { id: "histologia_oral", nombre: "Histología oral", requisitos: ["anatomia_aplicada", "histologia"], año: 2, semestre: 3 },
    { id: "fisiologia", nombre: "Fisiología", requisitos: ["anatomia_aplicada", "histologia"], año: 2, semestre: 3 },
    { id: "lab_fisiologia", nombre: "Laboratorio de fisiología", requisitos: ["anatomia_aplicada", "histologia"], año: 2, semestre: 3 },
    { id: "ingles2", nombre: "Inglés II", requisitos: [], año: 2, semestre: 3 },

    { id: "bioquimica_oral", nombre: "Bioquímica oral", requisitos: ["bioquimica", "histologia_oral"], año: 2, semestre: 4 },
    { id: "microbio_oral", nombre: "Microbiología oral", requisitos: ["bioquimica", "microbio_gral"], año: 2, semestre: 4 },
    { id: "patologia2", nombre: "Patología general II", requisitos: ["patologia1", "fisiologia", "lab_fisiologia"], año: 2, semestre: 4 },
    { id: "promo_salud", nombre: "Promoción y educación en salud", requisitos: ["introduccion_clinica"], año: 2, semestre: 4 },
    { id: "raz_cientifico", nombre: "Razonamiento científico", requisitos: ["habilidades"], año: 2, semestre: 4 },

    // --- TERCER AÑO ---
    { id: "pat_dentomax", nombre: "Patología dentomaxilar", requisitos: ["patologia2", "microbio_oral"], año: 3, semestre: 0 },
    { id: "imagenologia", nombre: "Imagenología", requisitos: ["patologia2"], año: 3, semestre: 0 },
    { id: "cirugia_bucal", nombre: "Cirugía bucal básica", requisitos: ["patologia2", "microbio_oral"], año: 3, semestre: 0 },
    { id: "fisio_oral", nombre: "Fisiología oral y de la oclusión", requisitos: ["biomateriales"], año: 3, semestre: 0 },
    { id: "preclinico", nombre: "Preclínico integrado", requisitos: ["biomateriales"], año: 3, semestre: 0 },

    { id: "farmaco1", nombre: "Farmacología I", requisitos: ["bioquimica_oral", "patologia2"], año: 3, semestre: 5 },
    { id: "ingles4", nombre: "Inglés IV", requisitos: [], año: 3, semestre: 5 },

    { id: "farmaco2", nombre: "Farmacología II", requisitos: ["farmaco1"], año: 3, semestre: 6 },
    { id: "cariologia", nombre: "Cariología", requisitos: ["microbio_oral", "farmaco1", "ingles4", "promo_salud"], año: 3, semestre: 6 },

    // --- CUARTO AÑO ---
    { id: "cirugia_dento", nombre: "Cirugía dentomaxilar", requisitos: ["farmaco2", "pat_dentomax", "imagenologia", "cirugia_bucal"], año: 4, semestre: 0 },
    { id: "odonto_rest", nombre: "Odontología restauradora", requisitos: ["imagenologia", "cirugia_bucal", "preclinico", "cariologia"], año: 4, semestre: 0 },
    { id: "protesis", nombre: "Prótesis dentomaxilar", requisitos: ["imagenologia", "cirugia_bucal", "fisio_oral", "preclinico"], año: 4, semestre: 0 },
    { id: "endodoncia", nombre: "Endodoncia", requisitos: ["farmaco2", "pat_dentomax", "imagenologia", "cirugia_bucal", "cariologia", "preclinico"], año: 4, semestre: 0 },
    { id: "periodoncia", nombre: "Periodoncia clínica", requisitos: ["farmaco2", "pat_dentomax", "imagenologia", "cirugia_bucal", "preclinico"], año: 4, semestre: 0 },
    { id: "pat_maxilo", nombre: "Patología maxilofacial", requisitos: ["pat_dentomax", "imagenologia"], año: 4, semestre: 0 },

    { id: "salud_pub1", nombre: "Salud pública I", requisitos: ["cariologia"], año: 4, semestre: 7 },
    { id: "pensamiento", nombre: "Pensamiento crítico", requisitos: ["raz_cientifico"], año: 4, semestre: 7 },
    { id: "salud_pub2", nombre: "Salud pública II", requisitos: ["salud_pub1"], año: 4, semestre: 8 },

    // --- QUINTO AÑO ---
    { id: "cirugia_trauma", nombre: "Cirugía y traumatología maxilofacial", requisitos: ["cirugia_dento", "pat_maxilo"], año: 5, semestre: 0 },
    { id: "cirugia_adulto", nombre: "Cirugía integral del adulto y odontogeriatría", requisitos: ["odonto_rest", "protesis", "endodoncia", "periodoncia"], año: 5, semestre: 0 },
    { id: "odontopediatria", nombre: "Odontopediatría", requisitos: ["cirugia_dento", "odonto_rest", "endodoncia"], año: 5, semestre: 0 },
    { id: "ortodoncia", nombre: "Ortodoncia y ortopedia dentomaxilar", requisitos: ["periodoncia"], año: 5, semestre: 0 },

    { id: "investigacion", nombre: "Metodología de la investigación", requisitos: ["salud_pub2"], año: 5, semestre: 9 },
    { id: "medicina_oral", nombre: "Medicina oral", requisitos: ["pat_maxilo"], año: 5, semestre: 9 },
    { id: "etica", nombre: "Ética en la práctica odontológica", requisitos: ["salud_pub2"], año: 5, semestre: 9 },

    { id: "gestion", nombre: "Administración y gestión en salud", requisitos: ["salud_pub2", "medicina_oral"], año: 5, semestre: 10 },
    { id: "medicina_legal", nombre: "Medicina legal", requisitos: ["medicina_oral"], año: 5, semestre: 10 },
    { id: "resp_social", nombre: "Responsabilidad social", requisitos: [], año: 5, semestre: 10 },

    // --- SEXTO AÑO ---
    { id: "internado", nombre: "Internado clínico", requisitos: ["cirugia_trauma", "cirugia_adulto", "odontopediatria", "ortodoncia", "investigacion", "medicina_legal", "resp_social"], año: 6, semestre: 0 },
    { id: "proyecto", nombre: "Proyecto integrado de investigación", requisitos: ["cirugia_trauma", "cirugia_adulto", "odontopediatria", "ortodoncia", "investigacion", "medicina_legal", "resp_social"], año: 6, semestre: 0 },
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

    // Agrupar por año
    const años = [...new Set(ramos.map(r => r.año))].sort((a,b) => a-b);

    años.forEach(año => {
      const contAño = document.createElement("div");
      contAño.className = "año-container";

      const tituloAño = document.createElement("h2");
      tituloAño.textContent = `Año ${año}`;
      contAño.appendChild(tituloAño);

      // Semestres de ese año
      const semestres = [...new Set(ramos.filter(r => r.año === año).map(r => r.semestre))].sort((a,b) => a-b);

      semestres.forEach(sem => {
        const contSemestre = document.createElement("div");
        contSemestre.className = "semestre-container";

        const tituloSem = document.createElement("h3");
        tituloSem.textContent = sem === 0 ? "Anual" : `Semestre ${sem}`;
        contSemestre.appendChild(tituloSem);

        // Ramos del semestre
        const ramosSem = ramos.filter(r => r.año === año && r.semestre === sem);
        ramosSem.forEach(ramo => {
          const div = crearRamo(ramo);
          const requisitosCumplidos = ramo.requisitos.every(req => aprobados.has(req));
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

          contSemestre.appendChild(div);
        });

        contAño.appendChild(contSemestre);
      });

      contenedor.appendChild(contAño);
    });
  }

  render();
});

