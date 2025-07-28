// Lista de ramos y requisitos
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
  // Agrega más ramos aquí siguiendo el patrón
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

