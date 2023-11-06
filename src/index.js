import "./styles.css";
// Attendez que le document soit complètement chargé
document.addEventListener("DOMContentLoaded", function () {
  // Créez une balise <link> pour le fichier CSS
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "./styles.css"; // Assurez-vous que le chemin pointe correctement vers votre fichier styles.css

  // Ajoutez la balise <link> au <head> du document
  document.head.appendChild(link);

  // Fonction pour importer toutes les images du dossier "Images"
  function importAllImages() {
    const images = {};

    // Utilisez require.context pour importer dynamiquement toutes les images du dossier "Images"
    const req = require.context("./Images", false, /\.(jpg|jpeg|png|gif|svg)$/);

    req.keys().forEach((key) => {
      const imageName = key.replace("./", "");
      images[imageName] = req(key);
    });

    return images;
  }

  // Utilisation de la fonction pour importer les images
  const importedImages = importAllImages();

  // Créez l'image myIcon
  const myIcon = new Image();
  myIcon.src = importedImages["Jacket2022.png"];

  // Créez le reste de votre contenu HTML
  const title = document.createElement("h1");
  title.textContent = "Mizuno Japan";
  title.style.fontFamily = "Arial, sans-serif";
  title.style.textAlign = "center";
  document.body.appendChild(title);

  // Créez une section pour les kimonos
  const kimonoSection = document.createElement("section");
  kimonoSection.id = "kimonos";
  document.body.appendChild(kimonoSection);

  // Créez une section pour les ceintures de judo
  const ceintureSection = document.createElement("section");
  ceintureSection.id = "ceintures";
  document.body.appendChild(ceintureSection);

  // Générez des kimonos avec les images importées
  const kimonosData = [
    {
      name: "Veste Mizuno",
      imageSrc: myIcon.src,
    },
    {
      name: "Pentalon Mizuno",
      imageSrc: importedImages["Pentalon.png"],
    },
    {
      name: "Veste Mizuno",
      imageSrc: importedImages["Jacket2023.jpg"],
    },
  ];

  kimonosData.forEach((kimonoData) => {
    const kimono = document.createElement("div");
    kimono.className = "kimono";
    kimono.innerHTML = `
        <h2>${kimonoData.name}</h2>
        <img src="${kimonoData.imageSrc}" alt="${kimonoData.name}" />
      `;
    kimonoSection.appendChild(kimono);
  });

  // Générez des ceintures de judo avec les images importées
  const ceinturesData = [
    { name: "Ceinture Blanche", imageSrc: importedImages["Blanc.jpg"] },
    { name: "Ceinture Jaune", imageSrc: importedImages["Jaune.png"] },
    { name: "Ceinture Orange", imageSrc: importedImages["Orange.png"] },
    { name: "Ceinture Vert", imageSrc: importedImages["Vert.png"] },
    { name: "Ceinture Bleu", imageSrc: importedImages["Blue.png"] },
    { name: "Ceinture Marron", imageSrc: importedImages["Marron.png"] },
    { name: "Ceinture Noir", imageSrc: importedImages["Noir.png"] },
  ];

  ceinturesData.forEach((ceintureData) => {
    const ceinture = document.createElement("div");
    ceinture.className = "ceinture";
    ceinture.innerHTML = `
        <h2>${ceintureData.name}</h2>
        <img src="${ceintureData.imageSrc}" alt="${ceintureData.name}" />
      `;
    ceintureSection.appendChild(ceinture);
  });
});
