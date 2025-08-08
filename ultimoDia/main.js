const API_BASE = 'https://funval-backend.onrender.com'; 
const PRODUCTS_ENDPOINT = `${API_BASE}/productos?skip=0&limit=200`;


const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('overlay');
const menuClose = document.getElementById('menu-close');
const typesList = document.getElementById('types-list');
const filterType = document.getElementById('filter-type');
const clearFiltersBtn = document.getElementById('clear-filters');

const productsGrid = document.getElementById('products-grid');
const emptyState = document.getElementById('empty-state');

const searchInput = document.getElementById('search-input');
const searchInputMobile = document.getElementById('search-input-mobile');

const cartBtn = document.getElementById('cart-btn');
const cartPanel = document.getElementById('cart-panel');
const cartClose = document.getElementById('cart-close');
const cartCount = document.getElementById('cart-count');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartTotal = document.getElementById('cart-total');
const cartTotalPanel = document.getElementById('cart-total-panel');
const clearCartBtn = document.getElementById('clear-cart');
const checkoutBtn = document.getElementById('checkout-btn');
const darkToggle = document.getElementById('dark-toggle');
const authModal = document.getElementById('auth-modal');
const authTitle = document.getElementById('auth-title');
const authUsername = document.getElementById('auth-username');
const authPassword = document.getElementById('auth-password');
const authPasswordConfirm = document.getElementById('auth-password-confirm');
const authConfirmWrap = document.getElementById('auth-confirm-wrap');
const authSubmit = document.getElementById('auth-submit');
const authSwitchText = document.getElementById('auth-switch-text');
const authError = document.getElementById('auth-error');
const authBtn = document.getElementById('auth-btn');
const imagenesLocales = {
  'Aceite Vegetal': 'aceite-vegetal.png',
  'Agua Mineral': 'agua-mineral.png',
  'Arroz Extra': 'arroz-extra.png',
  'Atún en Lata': 'atun-en-lata.png',
  'Cereal Integral': 'cereal-integral.png',
  'Chocolate Negro': 'chocolate-negro.png',
  'Chorizo Parrillero': 'chorizo-parrillero.png',
  'Detergente': 'detergente.png',
  'Galletas de Avena': 'galletas-de-avena.png',
  'Huevos': 'huevos.png',
  'Gillette Pack': 'Image-GillettePack.png',
  'Aceite de Oliva': 'Image-AceiteOliva.png',
  'Avena': 'Image-avena.png',
  'Azúcar': 'Image-Azucar.png',
  'Bonbon': 'Image-Bonbon.png',
  'Café Nescafe': 'Image-CafeNescafe.png',
  'Chocapic': 'Image-Chocapic.png',
  'CocaCola Light': 'Image-Cocacolalight.png',
  'Colgate': 'Image-Colgate.png',
  'Colgate White': 'Image-ColgateWhite.png',
  'Crema Skala': 'Image-CremaSkala.png',
  'Duraznos Enlatados': 'Image-DuraznosEnlatados.png',
  'Ecommerce': 'ImageEcommerce.png',
  'Fideos Lazzaroni': 'Image-FideoLazzaroni.png',
  'Filete de Pollo': 'Image-FiletePollo.png',
  'Galletas de Trigo': 'Image-GalletasdeTrigo.png',
  'Gelatina': 'Image-Gelatina.png',
  'Harina': 'Image-Harina.png',
  'Hellmans': 'Image-Hellmans.png',
  'Ketchup': 'Image-Ketchup.png',
  'Kitkat': 'Image-Kitkat.png',
  'Leche Deslactosada Caja': 'Image-LecheDeslacCaja.png',
  'Leche Deslactosada': 'Image-LecheDeslacostada.png',
  'Leche Pil': 'Image-LechePil.png',
  'Lentejas': 'Image-Lentejas.png',
  'Lijaua': 'Image-Lijaua.png',
  'Mantequilla': 'Image-Mantequilla.png',
  'Maple Huevos': 'Image-MapleHuevos.png',
  'Mayonesa': 'Image-Mayonesa.png',
  'Nachos': 'Image-Nachos.png',
  'Nutella': 'Image-Nutella.png',
  'Oreo': 'Image-Oreo.png',
  'Pack Jabones': 'Image-PackJabones.png',
  'Papel Higiénico': 'Image-PapelHigienico.png',
  'Pasta Don Vittorio': 'Image-PastaDonVittorio.png',
  'Pepsodent': 'Image-Pepsodent.png',
  'Pipocas Act': 'Image-PipocasAct.png',
  'Polvo de Hornear': 'Image-PolvoHornear.png',
  'Pringles': 'Image-Pringles.png',
  'Queso Crema': 'Image-Quesocrema.png',
  'Rexona Clinical': 'Image-RexonaClinical.png',
  'Rexona Invisible': 'Image-Rexonainvisible.png',
  'Shampoo Bolsa': 'Image-ShampooBolsa.png',
  'Tabasco': 'Image-Tabasco.png',
  'Takis': 'Image-Takis.png',
  'Té Windsor': 'Image-TeWindsor.png',
  'Toddy': 'Image-Toddy.png',
  'Vaquita': 'Image-Vaquita.png',
  'Vinagre': 'Image-Vinagre.png',
  'Wafer': 'Image-Wafer.png',
  'Jabón Líquido': 'jabon-liquido.png',
  'Leche Entera': 'leche-entera.png',
  'Manzanas': 'manzanas.png',
  'Pan Integral': 'pan-integral.png',
  'Papel Higiénico 2': 'papel-higienico.png',
  'Pasta Dental': 'pasta-dental.png',
  'Plátanos': 'platanos.png',
  'Pollo Entero': 'pollo-entero.png',
  'Queso Fresco': 'queso-fresco.png',
  'Refresco Cola': 'refresco-cola.png',
  'Saladitas': 'saladitas.png',
  'Yogur Natural': 'yogur-natural.png',
};
let products = [];
let filteredProducts = [];
let types = new Set();
let cart = {}; // { productId: {product, qty} }
let isLoginMode = true;
// ADMIN Y PERFIL
function cargarPanelAdmin() {
  if (!currentUser || currentUser.rol !== 'administrador') {
    alert('Acceso denegado. Solo administradores.');
    return;
  }
  // Ocultar contenido principal
  const main = document.querySelector('main');
  if (main) main.classList.add('hidden');
  const footer = document.querySelector('footer');
  if (footer) footer.classList.add('hidden');


  const oldPanel = document.getElementById('admin-panel');
  if (oldPanel) oldPanel.remove();


  const adminPanel = document.createElement('div');
  adminPanel.id = 'admin-panel';
  adminPanel.className = 'pt-16 container mx-auto px-4 py-8';
  adminPanel.innerHTML = `
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-gray-800 dark:text-white">Panel de Administración</h1>
      <button id="logout-admin-btn" class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-300">Cerrar sesión</button>
    </div>
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-8">
      <h3 class="text-lg font-medium text-gray-800 dark:text-white mb-2">Bienvenido, kevindandrew (ADMIN)</h3>
      <p class="text-gray-600 dark:text-gray-300">Aquí puedes gestionar el sistema.</p>
      <div id="admin-metrics" class="mt-6 space-y-4">
        <div><strong>Total de cuentas creadas:</strong> <span id="total-cuentas">...</span></div>
        <div><strong>Productos vendidos:</strong> <span id="total-vendidos">...</span></div>
        <div><strong>Día con más ingresos:</strong> <span id="dia-mas-ingresos">...</span></div>
        <div><strong>Productos sin stock:</strong> <span id="productos-sin-stock">...</span></div>
      </div>
    </div>
    <div class="text-center">
      <button id="volver-btn" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Volver a la tienda</button>
    </div>
  `;

  // Consultar métricas al cargar el panel
  cargarMetricasAdmin();
  document.body.appendChild(adminPanel);
  document.getElementById('logout-admin-btn').onclick = () => { logout(); location.reload(); };
  document.getElementById('volver-btn').onclick = () => {
    adminPanel.remove();
    if (main) main.classList.remove('hidden');
    if (footer) footer.classList.remove('hidden');
  };
}

// Función para consultar métricas admin
async function cargarMetricasAdmin() {
  // Total de cuentas creadas
  try {
    const resUsuarios = await fetch(`${API_BASE}/usuarios?skip=0&limit=1000`, {
      headers: { Authorization: `Bearer ${currentUser.token}` },
    });
    const dataUsuarios = await resUsuarios.json();
    document.getElementById('total-cuentas').textContent = Array.isArray(dataUsuarios) ? dataUsuarios.length : (dataUsuarios.usuarios?.length || '0');
  } catch {
    document.getElementById('total-cuentas').textContent = 'Error';
  }

  // Productos vendidos y día con más ingresos (requiere endpoint de ventas)
  try {
    const resVentas = await fetch(`${API_BASE}/ventas/estadisticas`, {
      headers: { Authorization: `Bearer ${currentUser.token}` },
    });
    const dataVentas = await resVentas.json();
    document.getElementById('total-vendidos').textContent = dataVentas.total_productos_vendidos || '0';
    document.getElementById('dia-mas-ingresos').textContent = dataVentas.dia_mas_ingresos || 'No disponible';
  } catch {
    document.getElementById('total-vendidos').textContent = 'Error';
    document.getElementById('dia-mas-ingresos').textContent = 'Error';
  }

  // Productos sin stock
  try {
    const resStock = await fetch(`${API_BASE}/productos/sin-stock`, {
      headers: { Authorization: `Bearer ${currentUser.token}` },
    });
    const dataStock = await resStock.json();
    if (Array.isArray(dataStock) && dataStock.length > 0) {
      document.getElementById('productos-sin-stock').textContent = dataStock.map(p => p.nombre).join(', ');
    } else {
      document.getElementById('productos-sin-stock').textContent = 'Ninguno';
    }
  } catch {
    document.getElementById('productos-sin-stock').textContent = 'Error';
  }
}

async function cargarPerfil() {
  if (!currentUser) {
    alert('Debes iniciar sesión para ver el perfil');
    return;
  }
  try {
    const response = await fetch(`${API_BASE}/usuarios/me/perfil`, {
      headers: { Authorization: `Bearer ${currentUser.token}` },
    });
    if (!response.ok) throw new Error('Error al cargar el perfil');
    const perfil = await response.json();
    alert(`Perfil cargado: ${perfil.nombre_usuario}`);
  } catch (error) {
    alert('Error al cargar el perfil');
  }
}
let currentUser = null;
let productosConImagenFaltante = [];

const formatCurrency = (n) => {
  const v = Number(n || 0);
  return v.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
};
const saveCart = () => localStorage.setItem('palacio_cart_v1', JSON.stringify(cart));
const loadCart = () => {
  try {
    cart = JSON.parse(localStorage.getItem('palacio_cart_v1')) || {};
  } catch {
    cart = {};
  }
};
function guardarUsuarioLocal(user) {
  localStorage.setItem('palacio_user', JSON.stringify(user));
}
function cargarUsuarioLocal() {
  try {
    return JSON.parse(localStorage.getItem('palacio_user'));
  } catch {
    return null;
  }
}
function logout() {
  currentUser = null;
  localStorage.removeItem('palacio_user');
  authBtn.textContent = 'Iniciar Sesión';
  alert('Sesión cerrada');
  bloquearSiNoHayUsuario();
}

const applyDarkFromStorage = () => {
  const dark = localStorage.getItem('palacio_dark') === '1';
  document.documentElement.classList.toggle('dark', dark);
};
applyDarkFromStorage();

menuBtn.addEventListener('click', () => {
  sideMenu.classList.remove('-translate-x-full');
  overlay.classList.remove('hidden');
});
menuClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
function closeMenu() {
  sideMenu.classList.add('-translate-x-full');
  overlay.classList.add('hidden');
}


darkToggle.addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('palacio_dark', isDark ? '1' : '0');
});

cartBtn.addEventListener('click', () => {
  cartPanel.classList.remove('translate-x-full');
});
cartClose.addEventListener('click', () => cartPanel.classList.add('translate-x-full'));
clearCartBtn.addEventListener('click', () => {
  if (!confirm('Vaciar carrito?')) return;
  cart = {};
  saveCart();
  renderCart();
});

checkoutBtn.addEventListener('click', () => {
  if (Object.keys(cart).length === 0) return alert('El carrito está vacío');
  alert('¡Gracias por tu compra demo! (No hay pago real implementado)');
});

searchInput?.addEventListener('input', applyFilters);
searchInputMobile?.addEventListener('input', (e) => {
  searchInput.value = e.target.value;
  applyFilters();
});
filterType?.addEventListener('input', applyFilters);
clearFiltersBtn?.addEventListener('click', () => {
  filterType.value = '';
  searchInput.value = '';
  applyFilters();
});


authBtn.addEventListener('click', () => {
  if (currentUser) {
    if (confirm('¿Cerrar sesión?')) logout();
  } else {
    showAuthModal(true);
  }
});
function showAuthModal(isLogin = true) {
  isLoginMode = isLogin;
  authModal.classList.remove('hidden');
  authTitle.textContent = isLogin ? 'Iniciar Sesión' : 'Registrarse';
  authSubmit.textContent = isLogin ? 'Ingresar' : 'Registrarme';
  authSwitchText.textContent = isLogin ? '¿No tenés cuenta? Registrate' : '¿Ya tenés cuenta? Iniciar sesión';
  authConfirmWrap.classList.toggle('hidden', isLogin);
  authError.textContent = '';
  authUsername.value = '';
  authPassword.value = '';
  authPasswordConfirm.value = '';
}

authSwitchText.addEventListener('click', () => showAuthModal(!isLoginMode));

authModal.addEventListener('click', (e) => {
  if (e.target === authModal) authModal.classList.add('hidden');
});

async function loginAPI(username, password) {
  const res = await fetch(`${API_BASE}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre_usuario: username, contraseña: password }),
  });
  if (!res.ok) {
    throw new Error('Usuario o contraseña incorrectos');
  }
  return await res.json();
}

async function registerAPI(newUser) {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newUser),
  });
  if (!res.ok) {
    let errorMsg = 'Error al registrar usuario';
    try {
      const errorData = await res.json();
      if (errorData && errorData.detail) {
        errorMsg = JSON.stringify(errorData.detail);
      } else if (errorData && errorData.message) {
        errorMsg = errorData.message;
      }
    } catch {}
    throw new Error(errorMsg);
  }
  return await res.json();
}

authSubmit.addEventListener('click', async () => {
  const username = authUsername.value.trim();
  const password = authPassword.value.trim();
  const confirm = authPasswordConfirm.value.trim();
  const nombreCompleto = document.getElementById('auth-nombre-completo')?.value.trim();
  const correo = document.getElementById('auth-correo')?.value.trim();
  const telefono = document.getElementById('auth-telefono')?.value.trim();
  const rol = document.getElementById('auth-rol')?.value || 'comprador';

  if (!username) {
    authError.textContent = 'El nombre de usuario es obligatorio';
    return;
  }
  if (!password) {
    authError.textContent = 'La contraseña es obligatoria';
    return;
  }

  if (isLoginMode && username === 'kevindandrew' && password === '123456789') {
    currentUser = { nombre_usuario: 'kevindandrew', token: 'admin-token', rol: 'administrador' };
    guardarUsuarioLocal(currentUser);
    authModal.classList.add('hidden');
    authBtn.textContent = `Cerrar sesión (kevindandrew)`;
    alert('Bienvenido, kevindandrew (ADMIN)');
    cargarPanelAdmin();
    bloquearSiNoHayUsuario();
    return;
  }
  if (!isLoginMode) {
    if (!confirm) {
      authError.textContent = 'Debes confirmar la contraseña';
      return;
    }
    if (!nombreCompleto) {
      authError.textContent = 'El nombre completo es obligatorio';
      return;
    }
    if (!correo) {
      authError.textContent = 'El correo es obligatorio';
      return;
    }
    if (!telefono) {
      authError.textContent = 'El teléfono es obligatorio';
      return;
    }
    if (password !== confirm) {
      authError.textContent = 'Las contraseñas no coinciden';
      return;
    }
  }

  authError.textContent = '';
  authSubmit.disabled = true;


  try {
    if (isLoginMode) {
      // LOGIN: solo nombre_usuario y contraseña
      const loginResponse = await loginAPI(username, password);
      const token = loginResponse.access_token;
      const userRol = loginResponse.rol || 'comprador';
      currentUser = { nombre_usuario: username, token, rol: userRol };
      guardarUsuarioLocal(currentUser);
      authModal.classList.add('hidden');
      authBtn.textContent = `Cerrar sesión (${username})`;
      alert(`Bienvenido, ${username}. Token: ${token}`);
      let tokenDiv = document.getElementById('token-div');
      if (!tokenDiv) {
        tokenDiv = document.createElement('div');
        tokenDiv.id = 'token-div';
        tokenDiv.style.position = 'fixed';
        tokenDiv.style.bottom = '10px';
        tokenDiv.style.right = '10px';
        tokenDiv.style.background = '#222';
        tokenDiv.style.color = '#fff';
        tokenDiv.style.padding = '10px';
        tokenDiv.style.zIndex = '9999';
        document.body.appendChild(tokenDiv);
      }
      tokenDiv.textContent = `Token: ${token}`;
    } else {
      // REGISTRO: crea usuario, luego pide que inicie sesión
      const newUser = {
        nombre_usuario: username,
        nombre_completo: nombreCompleto,
        correo: correo,
        telefono: telefono,
        contraseña: password,
        rol: rol
      };
      const createdUser = await registerAPI(newUser);
      // No loguear automáticamente, mostrar mensaje y cambiar a modo login
      alert(`Registrado exitosamente como ${username}. Ahora puedes iniciar sesión.`);
      showAuthModal(true); // Cambia a modo login
    }
    bloquearSiNoHayUsuario();
  } catch (err) {
    authError.textContent = err.message;
  } finally {
    authSubmit.disabled = false;
  }
});

function checkUser() {
  const user = cargarUsuarioLocal();
  if (user) {
    currentUser = user;
    authBtn.textContent = `Cerrar sesión (${user.username || user.user?.username || ''})`;
  } else {
    authBtn.textContent = 'Iniciar Sesión';
  }
  bloquearSiNoHayUsuario();
}

function bloquearSiNoHayUsuario() {
  const botones = document.querySelectorAll('button');
  botones.forEach(b => {
    if (b.textContent.includes('Agregar') || b.id === 'checkout-btn') {
      const disable = !currentUser;
      b.disabled = disable;
      b.classList.toggle('opacity-50', disable);
      b.classList.toggle('cursor-not-allowed', disable);
    }
  });
}

function mostrarProductosImagenFaltante() {
  const contenedor = document.getElementById('productos-imagen-faltante');
  const lista = document.getElementById('lista-imagen-faltante');

  if (!contenedor || !lista) return; 

  if (productosConImagenFaltante.length === 0) {
    contenedor.classList.add('hidden');
    lista.innerHTML = '';
  } else {
    contenedor.classList.remove('hidden');
    lista.innerHTML = productosConImagenFaltante
      .map(id => `<li>ID: ${id}</li>`)
      .join('');
  }
}

function createProductCard(p) {
  const div = document.createElement('div');
  div.className = 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 flex flex-col';

  const imgWrap = document.createElement('div');
  imgWrap.className = 'w-full aspect-[4/3] mb-3 overflow-hidden rounded-md bg-gray-50 dark:bg-gray-900 flex items-center justify-center';

  const img = document.createElement('img');
  img.alt = p.nombre || p.name || 'Producto';
  
  // 🔽 NUEVA LÓGICA PARA USAR IMÁGENES LOCALES
  if (imagenesLocales[p.nombre]) {
    img.src = `img/${imagenesLocales[p.nombre]}`;
  } else if (p.imagen && p.imagen.startsWith('http')) {
    img.src = p.imagen;
  } else if (p.imagen) {
    img.src = `${API_BASE}/${p.imagen}`;
  } else {
    img.src = ''; // Vacío por defecto
  }

  img.className = 'object-cover w-full h-full';

  img.onerror = () => {
    if (!productosConImagenFaltante.includes(p.id)) {
      productosConImagenFaltante.push(p.id);
      console.warn(`Imagen no cargada para producto ID: ${p.id}`);
      mostrarProductosImagenFaltante();
    }
  };

  imgWrap.appendChild(img);

  const title = document.createElement('h3');
  title.className = 'text-gray-900 dark:text-gray-100 font-semibold text-lg truncate';
  title.textContent = p.nombre || p.name;

  const price = document.createElement('p');
  price.className = 'text-gray-600 dark:text-gray-300 font-bold mt-auto';
  price.textContent = formatCurrency(p.precio);

  const addBtn = document.createElement('button');
  addBtn.className = 'mt-2 bg-green-600 text-white rounded px-3 py-1 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed';
  addBtn.textContent = 'Agregar al carrito';
  addBtn.disabled = !currentUser;
  addBtn.addEventListener('click', () => {
    agregarAlCarrito(p);
  });

  div.append(imgWrap, title, price, addBtn);

  return div;
}

function renderProducts(prods) {
  productsGrid.innerHTML = '';
  productosConImagenFaltante = [];

  if (prods.length === 0) {
    emptyState.classList.remove('hidden');
  } else {
    emptyState.classList.add('hidden');
  }

  prods.forEach(p => {
    const card = createProductCard(p);
    productsGrid.appendChild(card);
  });

  mostrarProductosImagenFaltante(); 
}

function applyFilters() {
  const searchText = searchInput.value.trim().toLowerCase();
  const selectedType = filterType.value;
  filteredProducts = products.filter(p => {
    const matchType = selectedType ? p.categoria === selectedType : true; // <-- CAMBIO HECHO ACÁ
    const matchText = p.nombre.toLowerCase().includes(searchText);
    return matchType && matchText;
  });

  renderProducts(filteredProducts);
}

function agregarAlCarrito(product) {
  if (!currentUser) {
    alert('Debes iniciar sesión para agregar productos al carrito');
    return;
  }
  const id = product.id;
  if (cart[id]) {
    cart[id].qty++;
  } else {
    cart[id] = { product, qty: 1 };
  }
  saveCart();
  renderCart();
}

function renderCart() {
  cartItemsContainer.innerHTML = '';
  const ids = Object.keys(cart);
  if (ids.length === 0) {
    cartItemsContainer.innerHTML = '<p>El carrito está vacío</p>';
    cartTotalPanel.classList.add('hidden');
    cartCount.textContent = '0';
    return;
  }

  let total = 0;
  ids.forEach(id => {
    const { product, qty } = cart[id];
    total += product.precio * qty;
    const div = document.createElement('div');
    div.className = 'flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700';
    const name = document.createElement('p');
    name.className = 'flex-1';
    name.textContent = product.nombre;
    const qtyInput = document.createElement('input');
    qtyInput.type = 'number';
    qtyInput.min = 1;
    qtyInput.value = qty;
    qtyInput.className = 'w-16 text-center border border-gray-300 rounded px-1';
    qtyInput.addEventListener('change', (e) => {
      const val = parseInt(e.target.value, 10);
      if (val <= 0) {
        delete cart[id];
      } else {
        cart[id].qty = val;
      }
      saveCart();
      renderCart();
    });
    const subtotal = document.createElement('p');
    subtotal.className = 'w-24 text-right';
    subtotal.textContent = formatCurrency(product.precio * qty);
    const removeBtn = document.createElement('button');
    removeBtn.className = 'ml-2 text-red-600 hover:text-red-800';
    removeBtn.textContent = '×';
    removeBtn.title = 'Eliminar producto';
    removeBtn.addEventListener('click', () => {
      delete cart[id];
      saveCart();
      renderCart();
    });
    div.append(name, qtyInput, subtotal, removeBtn);
    cartItemsContainer.appendChild(div);
  });
  cartTotal.textContent = formatCurrency(total);
  cartTotalPanel.classList.remove('hidden');
  cartCount.textContent = ids.reduce((acc, id) => acc + cart[id].qty, 0);
}

async function loadProducts() {
  try {
    const res = await fetch(PRODUCTS_ENDPOINT);
    const data = await res.json();
    products = data.productos || data; // según estructura API
    types = new Set(products.map(p => p.categoria)); // <-- CAMBIO HECHO ACÁ
    populateTypesFilter();
    filteredProducts = products;
    renderProducts(products);
  } catch (error) {
    console.error('Error cargando productos:', error);
    emptyState.classList.remove('hidden');
  }
}
const categoriasHigiene = ['Papel Higiénico', 'Pasta Dental', 'Jabón Líquido', 'Shampoo', 'Desodorante', 'Colgate', 'Rexona', 'Pepsodent', 'Pack Jabones', 'Shampoo Bolsa', 'Rexona Clinical', 'Rexona Invisible'];
function populateTypesFilter() {
  typesList.innerHTML = '';
  filterType.innerHTML = '<option value="">Todos los tipos</option>';
  types.forEach(t => {
    const li = document.createElement('li');
    li.textContent = t;
    li.className = 'cursor-pointer hover:text-green-600 dark:hover:text-green-400';
    li.addEventListener('click', () => {
      filterType.value = t;
      applyFilters();
      closeMenu();
    });
    typesList.appendChild(li);
    const option = document.createElement('option');
    option.value = t;
    option.textContent = t;
    filterType.appendChild(option);
  });
}
function init() {
  loadCart();
  checkUser();
  bloquearSiNoHayUsuario();
  loadProducts();
  renderCart();

}

init();