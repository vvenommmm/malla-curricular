document.addEventListener("DOMContentLoaded", () => {
  const ramos = [
    // PRIMER AÑO
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

    // SEGUNDO AÑO
    { id: "biomateriales", nombre: "Biomateriales", requisitos: ["fisica", "anatomia_aplicada", "quimica"], año: 2, semestre: 0 },
    { id: "bioquimica", nombre: "Bioquímica general", requisitos: ["quimica", "biologia"], año: 2, semestre: 1 },
    { id: "microbiologia", nombre: "Microbiología general", requisitos: ["genetica"], año: 2, semestre: 1 },
    { id: "patologia1", nombre: "Patología general", requisitos: ["genetica", "histologia", "anatomia_aplicada"], año: 2, semestre: 1 },
    { id: "histologia_oral", nombre: "Histología oral", requisitos: ["anatomia_aplicada", "histologia"], año: 2, semestre: 1 },
    { id: "fisiologia", nombre: "Fisiología", requisitos: ["anatomia_aplicada", "histologia"], año: 2, semestre: 1 },
    { id: "lab_fisiologia", nombre: "Laboratorio de fisiología", requisitos: ["anatomia_aplicada", "histologia"], año: 2, semestre: 1 },
    { id: "ingles2", nombre: "Inglés II", requisitos: [], año: 2, semestre: 1 },
    { id: "bioquimica_oral", nombre: "Bioquímica oral", requisitos: ["bioquimica", "histologia_oral"], año: 2, semestre: 2 },
    { id: "microbiologia_oral", nombre: "Microbiología oral", requisitos: ["bioquimica", "microbiologia"], año: 2, semestre: 2 },
    { id: "patologia2", nombre: "Patología general II", requisitos: ["patologia1", "fisiologia", "lab_fisiologia"], año: 2, semestre: 2 },
    { id: "promocion_salud", nombre: "Promoción y educación en salud", requisitos: ["introduccion_clinica"], año: 2, semestre: 2 },
    { id: "razonamiento", nombre: "Razonamiento científico", requisitos: ["habilidades"], año: 2, semestre: 2 },

    // TERCER AÑO
    { id: "patologia_dentomaxilar", nombre: "Patología dentomaxilar", requisitos: ["patologia2", "microbiologia_oral"], año: 3, semestre: 0 },
    { id: "imagenologia", nombre: "Imagenología", requisitos: ["patologia2"], año: 3, semestre: 0 },
    { id: "cirugia_bucal", nombre: "Cirugía bucal básica", requisitos: ["patologia2", "microbiologia_oral"], año: 3, semestre: 0 },
    { id: "fisiologia_oral", nombre: "Fisiología oral y de la oclusión", requisitos: ["biomateriales"], año: 3, semestre: 0 },
    { id: "preclinico", nombre: "Preclínico integrado", requisitos: ["biomateriales"], año: 3, semestre: 0 },
    { id: "farmacologia1", nombre: "Farmacología I", requisitos: ["bioquimica_oral", "patologia2"], año: 3, semestre: 1 },
    { id: "ingles4", nombre: "Inglés IV", requisitos: [], año: 3, semestre: 1 },
    { id: "farmacologia2", nombre: "Farmacología II", requisitos: ["farmacologia1"], año: 3, semestre: 2 },
    { id: "cariologia", nombre: "Cariología", requisitos: ["microbiologia_oral", "farmacologia1", "ingles4", "promocion_salud"], año: 3, semestre: 2 },

    // CUARTO AÑO
    { id: "cirugia_dentomaxilar", nombre: "Cirugía dentomaxilar", requisitos: ["farmacologia2", "patologia_dentomaxilar", "imagenologia", "cirugia_bucal"], año: 4, semestre: 0 },
    { id: "restauradora", nombre: "Odontología restauradora", requisitos: ["imagenologia", "cirugia_bucal", "preclinico", "cariologia"], año: 4, semestre: 0 },
    { id: "protesis", nombre: "Prótesis dentomaxilar", requisitos: ["imagenologia", "cirugia_bucal", "fisiologia_oral", "preclinico"], año: 4, semestre: 0 },
    { id: "endodoncia", nombre: "Endodoncia", requisitos: ["farmacologia2", "patologia_dentomaxilar", "imagenologia", "cirugia_bucal", "cariologia", "preclinico"], año: 4, semestre: 0 },
    { id: "periodoncia", nombre: "Periodoncia clínica", requisitos: ["farmacologia2", "patologia_dentomaxilar", "imagenologia", "cirugia_bucal", "preclinico"], año: 4, semestre: 0 },
    { id: "patologia_maxilofacial", nombre: "Patología maxilofacial", requisitos: ["patologia_dentomaxilar", "imagenologia"], año: 4, semestre: 0 },
    { id: "salud_publica1", nombre: "Salud pública I", requisitos: ["cariologia"], año: 4, semestre: 1 },
    { id: "pensamiento", nombre: "Pensamiento crítico", requisitos: ["razonamiento"], año: 4, semestre: 1 },
    { id: "salud_publica2", nombre: "Salud pública II", requisitos: ["salud_publica1"], año: 4, semestre: 2 },

    // QUINTO AÑO
    { id: "cirugia_maxilofacial", nombre: "Cirugía y traumatología maxilofacial", requisitos: ["cirugia_dentomaxilar", "patologia_maxilofacial"], año: 5, semestre: 0 },
    { id: "cirugia_integral", nombre: "Cirugía integral del adulto y odontogeriatría", requisitos: ["restauradora", "protesis", "endodoncia", "periodoncia"], año: 5, semestre: 0 },
    { id: "odontopediatria", nombre: "Odontopediatría", requisitos: ["cirugia_dentomaxilar", "restauradora", "endodoncia"], año: 5, semestre: 0 },
    { id: "ortodoncia", nombre: "Ortodoncia y ortopedia dentomaxilar", requisitos: ["periodoncia"], año: 5, semestre: 0 },
    { id: "investigacion", nombre: "Metodología de la investigación", requisitos: ["salud_publica2"], año: 5, semestre: 1 },
    { id: "medicina_oral", nombre: "Medicina oral", requisitos: ["patologia_maxilofacial"], año: 5, semestre: 1 },
    { id: "etica", nombre: "Ética en la práctica odontológica", requisitos: ["salud_publica2"], año: 5, semestre: 1 },
    { id: "administracion", nombre: "Administración y gestión en salud", requisitos: ["salud_publica2", "medicina_oral"], año: 5, semestre: 2 },
    { id: "medicina_legal", nombre: "Medicina legal", requisitos: ["medicina_oral"], año: 5, semestre: 2 },
    { id: "responsabilidad", nombre: "Responsabilidad social", requisitos: [], año: 5, semestre: 2 },

    // SEXTO AÑO
    { id: "internado", nombre: "Internado clínico", requisitos: ["cirugia_maxilofacial", "cirugia_integral", "odontopediatria", "ortodoncia", "investigacion", "medicina_legal", "responsabilidad"], año: 6, semestre: 0 },
    { id: "proyecto", nombre: "Proyecto integrado de investigación", requisitos: ["cirugia_maxilofacial", "cirugia_integral", "odontopediatria", "ortodoncia", "investigacion", "medicina_legal", "responsabilidad"], año: 6, semestre: 0 },
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

    const años = [...new Set(ramos.map((r) => r.año))].sort((a, b) => a - b);

    años.forEach((año) => {
      const columna = document.createElement("div");
      columna.className = "columna-ano";

      const titulo = document.createElement("h2");
      titulo.textContent = `Año ${año}`;
      columna.appendChild(titulo);

      const anual = document.createElement("div");
      anual.className = "fila-semestre";
      const s1 = document.createElement("div");
      s1.className = "fila-semestre";
      const s2 = document.createElement("div");
      s2.className = "fila-semestre";

      ramos
        .filter((r) => r.año === año)
        .forEach((ramo) => {
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

          if (ramo.semestre === 1) s1.appendChild(div);
          else if (ramo.semestre === 2) s2.appendChild(div);
          else anual.appendChild(div);
        });

      if (anual.childNodes.length > 0) {
        const label = document.createElement("h3");
        label.textContent = "Anual";
        columna.appendChild(label);
        columna.appendChild(anual);
      }
      if (s1.childNodes.length > 0) {
        const label = document.createElement("h3");
        label.textContent = "Semestre 1";
        columna.appendChild(label);
        columna.appendChild(s1);
      }
      if (s2.childNodes.length > 0) {
        const label = document.createElement("h3");
        label.textContent = "Semestre 2";
        columna.appendChild(label);
        columna.appendChild(s2);
      }

      contenedor.appendChild(columna);
    });
  }

  render();
});
