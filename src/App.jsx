import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { FavoritesProvider } from './contexts/FavoritesContext';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import ProductDetailsPage from './pages/ProductDetails';
import CategoriesPage from './pages/Categories';
import FavoritesPage from './pages/Favorites';
import CartPage from './pages/Cart';
import CheckoutPage from './pages/Checkout';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import AccountPage from './pages/Account';
import OrdersPage from './pages/Orders';
import ContactPage from './pages/Contact';
import AdminPage from './pages/Admin';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <FavoritesProvider>
          <div className="app-shell">
            <Header />
            <main className="app-main">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/produtos" element={<ProductsPage />} />
                <Route path="/produto/:id" element={<ProductDetailsPage />} />
                <Route path="/categorias" element={<CategoriesPage />} />
                <Route path="/favoritos" element={<FavoritesPage />} />
                <Route path="/carrinho" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/cadastro" element={<RegisterPage />} />
                <Route path="/minha-conta" element={<AccountPage />} />
                <Route path="/pedidos" element={<OrdersPage />} />
                <Route path="/contato" element={<ContactPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </FavoritesProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
