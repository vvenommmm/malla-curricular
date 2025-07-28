// Lista completa de ramos y requisitos
const ramos = [
  { id: "anat_humana", nombre: "Anatomía humana normal y embriología", requisitos: [] },
  { id: "biol_celular", nombre: "Biología celular", requisitos: [] },
  { id: "fisica", nombre: "Física aplicada", requisitos: [] },
  { id: "intro_odonto", nombre: "Introducción a la odontología", requisitos: [] },
  { id: "hab_com", nombre: "Habilidades comunicativas", requisitos: [] },
  { id: "anat_aplicada", nombre: "Anatomía aplicada", requisitos: ["anat_humana", "biol_celular"] },
  { id: "quimica", nombre: "Química general e inorgánica", requisitos: [] },
  { id: "genetica", nombre: "Genética molecular humana", requisitos: ["biol_celular"] },
  { id: "histo_gral", nombre: "Histología general", requisitos: ["anat_humana", "biol_celular"] },
  { id: "intro_clinica", nombre: "Introducción a la clínica", requisitos: ["intro_odonto"] },
  { id: "ingles1", nombre: "Inglés I", requisitos: [] },
  { id: "biomateriales", nombre: "Biomateriales", requisitos: ["fisica", "anat_aplicada", "quimica"] },
  { id: "bioquimica", nombre: "Bioquímica general", requisitos: ["quimica", "biol_celular"] },
  { id: "microbio_gral", nombre: "Microbiología general", requisitos: ["genetica"] },
  { id: "patologia1", nombre: "Patología general", requisitos: ["genetica", "histo_gral", "anat_aplicada"] },
  { id: "histo_oral", nombre: "Histología oral", requisitos: ["anat_aplicada", "histo_gral"] },
  { id: "fisiologia", nombre: "Fisiología", requisitos: ["anat_aplicada", "histo_gral"] },
  { id: "lab_fisiologia", nombre: "Laboratorio de fisiología", requisitos: ["anat_aplicada", "histo_gral"] },
  { id: "ingles2", nombre: "Inglés II", requisitos: [] },
  { id: "bioquimica_oral", nombre: "Bioquímica oral", requisitos: ["bioquimica", "histo_oral"] },
  { id: "microbio_oral", nombre: "Microbiología oral", requisitos: ["bioquimica", "microbio_gral"] },
  { id: "patologia2", nombre: "Patología general II", requisitos: ["patologia1", "fisiologia", "lab_fisiologia"] },
  { id: "promo_salud", nombre: "Promoción y educación en salud", requisitos: ["intro_clinica"] },
  { id: "raz_cientifico", nombre: "Razonamiento científico", requisitos: ["hab_com"] },
  { id: "pat_dentomax", nombre: "Patología dentomaxilar", requisitos: ["patologia2", "microbio_oral"] },
  { id: "imagenologia", nombre: "Imagenología", requisitos: ["patologia2"] },
  { id: "cirugia_bucal", nombre: "Cirugía bucal básica", requisitos: ["patologia2", "microbio_oral"] },
  { id: "fisio_oral", nombre: "Fisiología oral y de la oclusión", requisitos: ["biomateriales"] },
  { id: "preclinico", nombre: "Preclínico integrado", requisitos: ["biomateriales"] },
  { id: "farmaco1", nombre: "Farmacología I", requisitos: ["bioquimica_oral", "patologia2"] },
  { id: "ingles4", nombre: "Inglés IV", requisitos: [] },
  { id: "farmaco2", nombre: "Farmacología II", requisitos: ["farmaco1"] },
  { id: "cariologia", nombre: "Cariología", requisitos: ["microbio_oral", "farmaco1", "ingles4", "promo_salud"] },
  { id: "cirugia_dento", nombre: "Cirugía dentomaxilar", requisitos: ["farmaco2", "pat_dentomax", "imagenologia", "cirugia_bucal"] },
  { id: "odonto_rest", nombre: "Odontología restauradora", requisitos: ["imagenologia", "cirugia_bucal", "preclinico", "cariologia"] },
  { id: "protesis", nombre: "Prótesis dentomaxilar", requisitos: ["imagenologia", "cirugia_bucal", "fisio_oral", "preclinico"] },
  { id: "endodoncia", nombre: "Endodoncia", requisitos: ["farmaco2", "pat_dentomax", "imagenologia", "cirugia_bucal", "cariologia", "preclinico"] },
  { id: "periodoncia", nombre: "Periodoncia clínica", requisitos: ["farmaco2", "pat_dentomax", "imagenologia", "cirugia_bucal", "preclinico"] },
  { id: "pat_maxilo", nombre: "Patología maxilofacial", requisitos: ["pat_dentomax", "imagenologia"] },
  { id: "salud_pub1", nombre: "Salud pública I", requisitos: ["cariologia"] },
  { id: "pensamiento", nombre: "Pensamiento crítico", requisitos: ["raz_cientifico"] },
  { id: "salud_pub2", nombre: "Salud pública II", requisitos: ["salud_pub1"] },
  { id: "cirugia_trauma", nombre: "Cirugía y traumatología maxilofacial", requisitos: ["cirugia_dento", "pat_maxilo"] },
  { id: "cirugia_adulto", nombre: "Cirugía integral del adulto y odontogeriatría", requisitos: ["odonto_rest", "protesis", "endodoncia", "periodoncia"] },
  { id: "odontopediatria", nombre: "Odontopediatría", requisitos: ["cirugia_dento", "odonto_rest", "endodoncia"] },
  { id: "ortodoncia", nombre: "Ortodoncia y ortopedia dentomaxilar", requisitos: ["periodoncia"] },
  { id: "investigacion", nombre: "Metodología de la investigación", requisitos: ["salud_pub2"] },
  { id: "medicina_oral", nombre: "Medicina oral", requisitos: ["pat_maxilo"] },
  { id: "etica", nombre: "Ética en la práctica odontológica", requisitos: ["salud_pub2"] },
  { id: "gestion", nombre: "Administración y gestión en salud", requisitos: ["salud_pub2", "medicina_oral"] },
  { id: "medicina_legal", nombre: "Medicina legal", requisitos: ["medicina_oral"] },
  { id: "resp_social", nombre: "Responsabilidad social", requisitos: [] },
  { id: "internado", nombre: "Internado clínico", requisitos: ["cirugia_trauma", "cirugia_adulto", "odontopediatria", "ortodoncia", "investigacion", "medicina_legal", "resp_social"] },
  { id: "proyecto", nombre: "Proyecto integrado de investigación", requisitos: ["cirugia_trauma", "cirugia_adulto", "odontopediatria", "ortodoncia", "investigacion", "medicina_legal", "resp_social"] },
];

// Cargar estado guardado del navegador
let estadoRamos = JSON.parse(localStorage.getItem("estadoRamos")) || {};

// Crear interfaz
const contenedor = document.getElementById("malla");

ramos.forEach((ramo) => {
  const div = document.createElement("div");
  div.classList.add("ramo");
  div.setAttribute("id", ramo.id);
  div.innerHTML = `<h3>${ramo.nombre}</h3><span class="estado"></span>`;
  contenedor.appendChild(div);
});

function actualizarMalla() {
  ramos.forEach((ramo) => {
    const div = document.getElementById(ramo.id);
    const aprobado = estadoRamos[ramo.id] === true;
    const desbloqueado = ramo.requisitos.every(req => estadoRamos[req]);

    div.classList.remove("locked", "approved");
    div.classList.add(aprobado ? "approved" : (!desbloqueado ? "locked" : ""));
    div.querySelector(".estado").textContent = aprobado ? "Aprobado" : (!desbloqueado ? "Bloqueado" : "Disponible");

    div.onclick = () => {
      if (!desbloqueado) return;
      estadoRamos[ramo.id] = !aprobado;
      localStorage.setItem("estadoRamos", JSON.stringify(estadoRamos));
      actualizarMalla();
    };
  });
}

actualizarMalla();
