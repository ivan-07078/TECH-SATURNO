import { createContext, useContext, useMemo, useState } from 'react';

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (productId) => {
    setFavorites((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
    );
  };

  const removeFavorite = (productId) => {
    setFavorites((current) => current.filter((id) => id !== productId));
  };

  const value = useMemo(
    () => ({
      favorites,
      toggleFavorite,
      removeFavorite,
      isFavorite: (productId) => favorites.includes(productId)
    }),
    [favorites]
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('useFavorites must be used inside FavoritesProvider');
  }

  return context;
}
