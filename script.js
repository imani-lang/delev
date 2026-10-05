const DELIVERY_NAME = "Bilel Delev";
const DELIVERY_PHONE_DISPLAY = "+213 5 55 00 00 00";
const DELIVERY_PHONE_WA = "213555000000"; 
const DELIVERY_PHONE_TEL = "+213555000000";
const PRODUCTS = [
  // --- Fruits ---
  { id: 1, name: "Pomme", cat: "fruits", label: "Fruits", img: "apple" },
  { id: 2, name: "Banane", cat: "fruits", label: "Fruits", img: "banana" },
  { id: 3, name: "Orange", cat: "fruits", label: "Fruits", img: "orange-fruit" },
  { id: 4, name: "Fraise", cat: "fruits", label: "Fruits", img: "strawberry" },
  { id: 5, name: "Raisin", cat: "fruits", label: "Fruits", img: "grapes" },
  { id: 6, name: "Pastèque", cat: "fruits", label: "Fruits", img: "watermelon" },
  { id: 7, name: "Mangue", cat: "fruits", label: "Fruits", img: "mango" },
  { id: 8, name: "Poire", cat: "fruits", label: "Fruits", img: "pear" },
  { id: 9, name: "Citron", cat: "fruits", label: "Fruits", img: "lemon" },
  { id: 10, name: "Pêche", cat: "fruits", label: "Fruits", img: "peach" },
  { id: 11, name: "Autres type de fryits", cat: "fruits", label: "Fruits", img: "Fruits" },

  // --- Légumes ---
  { id: 12, name: "Tomate", cat: "legumes", label: "Légumes", img: "tomato" },
  { id: 13, name: "Pomme de terre", cat: "legumes", label: "Légumes", img: "potato" },
  { id: 14, name: "Oignon", cat: "legumes", label: "Légumes", img: "onion" },
  { id: 15, name: "Carotte", cat: "legumes", label: "Légumes", img: "carrot" },
  { id: 16, name: "Poivron", cat: "legumes", label: "Légumes", img: "bellpepper" },
  { id: 17, name: "Courgette", cat: "legumes", label: "Légumes", img: "zucchini" },
  { id: 18, name: "Aubergine", cat: "legumes", label: "Légumes", img: "eggplant" },
  { id: 19, name: "Ail", cat: "legumes", label: "Légumes", img: "garlic" },
  { id: 20, name: "Concombre", cat: "legumes", label: "Légumes", img: "cucumber" },
  { id: 21, name: "Salade verte", cat: "legumes", label: "Légumes", img: "lettuce" },
  { id: 22, name: "Autres types de legumes", cat: "legumes", label: "Légumes", img: "legumes" },

  // --- Produits laitiers ---
  { id: 23, name: "Lait", cat: "laitiers", label: "Produits laitiers", img: "milk-bottle" },
  { id: 24, name: "Yaourt", cat: "laitiers", label: "Produits laitiers", img: "yogurt" },
  { id: 25, name: "Fromage", cat: "laitiers", label: "Produits laitiers", img: "cheese" },
  { id: 26, name: "Crème fraîche", cat: "laitiers", label: "Produits laitiers", img: "cream" },
  { id: 27, name: "Crème fraîche liquide", cat: "laitiers", label: "Produits laitiers", img: "cream-liquid" },
  { id: 28, name: "Petit-suisse", cat: "laitiers", label: "Produits laitiers", img: "dairy-dessert" },
  { id: 29, name: "Raib / Lben", cat: "laitiers", label: "Produits laitiers", img: "buttermilk" },
  { id: 30, name: "Beurre laitier", cat: "laitiers", label: "Produits laitiers", img: "butter" },
  { id: 31, name: "Autres type de produits laitiers", cat: "laitiers", label: "Produits laitiers", img: "laitier" },

  // --- Matières grasses ---
  { id: 32, name: "Huile d'olive", cat: "graisses", label: "Matières grasses", img: "olive-oil" },
  { id: 33, name: "Huile", cat: "graisses", label: "Matières grasses", img: "sunflower-oil" },
  { id: 34, name: "Beurre", cat: "graisses", label: "Matières grasses", img: "butter-block" },
  { id: 35, name: "Margarine", cat: "graisses", label: "Matières grasses", img: "margarine" },
  { id: 36, name: "Autres type de Matieres grasses", cat: "graisses", label: "Matières grasses", img: "grasses" },

  // --- Conserves ---
  { id: 37, name: "Thon en boîte", cat: "conserves", label: "Conserves", img: "tuna-can" },
  { id: 38, name: "Sardines en boite", cat: "conserves", label: "Conserves", img: "sardines-can" },
  { id: 39, name: "Cachir / paté", cat: "conserves", label: "Conserves", img: "corn-can" },
  { id: 40, name: "maionese", cat: "conserves", label: "Conserves", img: "peas-can" },
  { id: 41, name: "herissa", cat: "conserves", label: "Conserves", img: "green-beans-can" },
  { id: 42, name: "Tomates conserve", cat: "conserves", label: "Conserves", img: "canned-tomato" },
  { id: 43, name: "champignons", cat: "conserves", label: "Conserves", img: "tomato-paste" },
  { id: 44, name: "Olives", cat: "conserves", label: "Conserves", img: "olives-jar" },
  { id: 45, name: "Autres type de conserves", cat: "conserves", label: "Conserves", img: "conserves" },
  // --- Chocolats & snacks --7
  { id: 46, name: "Chocolat noir", cat: "chocolats", label: "Chocolats", img: "dark-chocolate" },
  { id: 47, name: "Chocolat au lait", cat: "chocolats", label: "Chocolats", img: "milk-chocolate" },
  { id: 48, name: "Pâte à tartiner", cat: "chocolats", label: "Chocolats", img: "chocolate-spread" },
  { id: 49, name: "Kinder", cat: "chocolats", label: "Chocolats", img: "chocolate-bar" },
  { id: 50, name: "Twix", cat: "chocolats", label: "Chocolats", img: "candy-bar" },
  { id: 51, name: "Kit Kat", cat: "chocolats", label: "Chocolats", img: "wafer-bar" },
  { id: 52, name: "Biscuits", cat: "chocolats", label: "Chocolats", img: "cookies" },
  { id: 53, name: "Autes type de chocolats et biscuits", cat: "chocolats", label: "Chocolats", img: "chocbis" },

  // --- Farine & boulangerie ---
  { id: 54, name: "Farine", cat: "boulangerie", label: "Farine & boulangerie", img: "flour" },
  { id: 55, name: "Semoule", cat: "boulangerie", label: "Farine & boulangerie", img: "semolina" },
  { id: 56, name: "Levure", cat: "boulangerie", label: "Farine & boulangerie", img: "yeast" },
  { id: 57, name: "Sucre", cat: "boulangerie", label: "Farine & boulangerie", img: "sugar" },
  { id: 58, name: "Chapelure", cat: "boulangerie", label: "Farine & boulangerie", img: "breadcrumbs" },
  { id: 59, name: "Fécule de maïs (Maïzena)", cat: "boulangerie", label: "Farine & boulangerie", img: "cornstarch" },
  { id: 60, name: "Pain", cat: "boulangerie", label: "Farine & boulangerie", img: "bread-loaf" },
  { id: 61, name: "Autres type ", cat: "boulangerie", label: "Farine & boulangerie", img: "autres" },

  // --- Hygiène & cosmétique ---
  { id: 62, name: "Serviettes hygiéniques Always", cat: "hygiene", label: "Hygiène & cosmétique", img: "hygiene-product" },
  { id: 63, name: "Serviettes hygiéniques Molped", cat: "hygiene", label: "Hygiène & cosmétique", img: "cotton-pads" },
  { id: 64, name: "Savon", cat: "hygiene", label: "Hygiène & cosmétique", img: "soap-bar" },
  { id: 65, name: "Shampoing", cat: "hygiene", label: "Hygiène & cosmétique", img: "shampoo-bottle" },
  { id: 66, name: "Dentifrice", cat: "hygiene", label: "Hygiène & cosmétique", img: "toothpaste" },
  { id: 67, name: "Déodorant", cat: "hygiene", label: "Hygiène & cosmétique", img: "deodorant" },
  { id: 68, name: "Crème hydratante", cat: "hygiene", label: "Hygiène & cosmétique", img: "moisturizer-cream" },
  { id: 69, name: "Couche Bébé", cat: "hygiene", label: "Hygiène & cosmétique", img: "couche" },
  { id: 70, name: "lingettes ", cat: "hygiene", label: "Hygiène & cosmétique", img: "lingette" },
  { id: 71, name: "Autres type de cosmetiques", cat: "hygiene", label: "Hygiène & cosmétique", img: "moisturizer-cream" },

  // --- les viandes
  { id: 72, name: "Boeuf", cat: "viande", label: "viande", img: "bf" },
  { id: 73, name: "Agneau", cat: "viande", label: "viande", img: "ag" },
  { id: 74, name: "Poulet", cat: "viande", label: "viande", img: "pl" },
  { id: 75, name: "Dinde", cat: "viande", label: "viande", img: "di" },
  { id: 76, name: "Saucisse", cat: "viande", label: "viande", img: "sa" },
  { id: 77, name: "Steak", cat: "viande", label: "viande", img: "st" },
  { id: 78, name: "Viande hachée", cat: "viande", label: "viande", img: "vh" },
  { id: 79, name: "Poulet hachée", cat: "viande", label: "viande", img: "ph" },
  { id: 80, name: "Dinde hachée", cat: "viande", label: "viande", img: "dh" },
  { id: 81, name: "Escalope", cat: "viande", label: "viande", img: "es" },
  { id: 82, name: "Autres type de viandes",  label: "viande", img:"viande"},

  //---poissons
  { id: 83, name: "Sardine", cat: "poisson", label: "poisson", img: "sa" },
  { id: 84, name: "Sole", cat: "poisson", label: "poisson", img: "so" },
  { id: 85, name: "Saumon", cat: "poisson", label: "poisson", img: "sa" },
  { id: 86, name: "Crevette", cat: "poisson", label: "poisson", img: "cr" },
  { id: 87, name: "Calamar", cat: "poisson", label: "poisson", img: "ca" },
  { id: 89, name: "Espadon", cat: "poisson", label: "poisson", img: "es" },
  { id: 90, name: "Autres Types de poissons", cat: "poisson", label: "poisson", img: "poissons" },

  //--- Autres articles
  { id: 91, name: "Autres article", cat: "article", label:"article", img:"autres"},
  
];
let currentCategory = "tous";
let currentSearch = "";
const grid = document.getElementById("productGrid");
const resultsCount = document.getElementById("resultsCount");
const noResults = document.getElementById("noResults");
function normalize(str) {
  return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function getFilteredProducts() {
  return PRODUCTS.filter((p) => {
    const matchCat = currentCategory === "tous" || p.cat === currentCategory;
    const matchSearch = currentSearch === "" || normalize(p.name).includes(normalize(currentSearch));
    return matchCat && matchSearch;
  });
}
function renderProducts() {
  const list = getFilteredProducts();
  grid.innerHTML = "";
  if (list.length === 0) {
    noResults.hidden = false;
    resultsCount.textContent = "";
    return;
  }
  noResults.hidden = true;
  resultsCount.textContent = `${list.length} produit${list.length > 1 ? "s" : ""} affiché${list.length > 1 ? "s" : ""}`;
  const frag = document.createDocumentFragment();
  list.forEach((p) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <div class="thumb">
        <span class="thumb-text">${p.name}</span>
      </div>
      <div class="info">
        <p class="p-cat">${p.label.toUpperCase()}</p>
        <p class="p-name">${p.name}</p>
        <button class="order-btn" data-id="${p.id}">Commander</button>
      </div>
    `;
    frag.appendChild(card);
  });
  grid.appendChild(frag);
}
document.getElementById("categoryNav").addEventListener("click", (e) => {
  const btn = e.target.closest(".cat-chip");
  if (!btn) return;
  document.querySelectorAll(".cat-chip").forEach((c) => c.classList.remove("active"));
  btn.classList.add("active");
  currentCategory = btn.dataset.cat;
  renderProducts();
});
document.getElementById("searchInput").addEventListener("input", (e) => {
  currentSearch = e.target.value;
  renderProducts();
});
const deliveryOverlay = document.getElementById("deliveryOverlay");
document.getElementById("logoBtn").addEventListener("click", () => {
  document.getElementById("phoneDisplay").textContent = `📞 ${DELIVERY_PHONE_DISPLAY}`;
  document.getElementById("phoneDisplay").href = `tel:${DELIVERY_PHONE_TEL}`;
  document.getElementById("callBtn").href = `tel:${DELIVERY_PHONE_TEL}`;
  document.getElementById("whatsBtn").href = `https://wa.me/${DELIVERY_PHONE_WA}`;
  deliveryOverlay.hidden = false;
});
document.getElementById("closeDelivery").addEventListener("click", () => (deliveryOverlay.hidden = true));
deliveryOverlay.addEventListener("click", (e) => {
  if (e.target === deliveryOverlay) deliveryOverlay.hidden = true;
});
const orderOverlay = document.getElementById("orderOverlay");
const orderForm = document.getElementById("orderForm");
let selectedProduct = null;
grid.addEventListener("click", (e) => {
  const btn = e.target.closest(".order-btn");
  if (!btn) return;
  const product = PRODUCTS.find((p) => p.id === Number(btn.dataset.id));
  if (!product) return;
  selectedProduct = product;
  document.getElementById("orderThumb").textContent = product.name;
  document.getElementById("orderTitle").textContent = product.name;
  document.getElementById("orderCat").textContent = product.label;
  document.getElementById("orderDescription").value = `Je veux : ${product.name} — précisez la quantité et la marque si besoin.`;
  document.getElementById("locStatus").textContent = "";
  orderOverlay.hidden = false;
});
document.getElementById("closeOrder").addEventListener("click", () => (orderOverlay.hidden = true));
orderOverlay.addEventListener("click", (e) => {
  if (e.target === orderOverlay) orderOverlay.hidden = true;
});
document.getElementById("locateBtn").addEventListener("click", () => {
  const status = document.getElementById("locStatus");
  const locField = document.getElementById("orderLocalisation");

  if (!navigator.geolocation) {
    status.textContent = "La géolocalisation n'est pas supportée par ce navigateur.";
    return;
  }
  status.textContent = "Localisation en cours…";
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;
      locField.value = `Position GPS : ${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;
      status.textContent = "Position détectée. Vous pouvez préciser une adresse si besoin.";
    },
    () => {
      status.textContent = "Impossible d'obtenir votre position. Saisissez votre adresse manuellement.";
    }
  );
});
orderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!selectedProduct) return;
  const description = document.getElementById("orderDescription").value.trim();
  const nom = document.getElementById("orderNom").value.trim();
  const prenom = document.getElementById("orderPrenom").value.trim();
  const telephone = document.getElementById("orderTelephone").value.trim();
  const localisation = document.getElementById("orderLocalisation").value.trim();
  const message =
    `Nouvelle commande — ${selectedProduct.name}\n` +
    `Description : ${description}\n` +
    `Nom : ${nom} ${prenom}\n` +
    `Téléphone : ${telephone}\n` +
    `Localisation : ${localisation}`;

  const waLink = `https://wa.me/${DELIVERY_PHONE_WA}?text=${encodeURIComponent(message)}`;
  window.open(waLink, "_blank", "noopener");
  showToast("Commande envoyée au livreur ✅");
  orderOverlay.hidden = true;
  orderForm.reset();
  document.getElementById("cartDot").hidden = false;
});
let toastTimer = null;
function showToast(text) {
  const toast = document.getElementById("toast");
  toast.textContent = text;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (toast.hidden = true), 3200);
}
renderProducts();