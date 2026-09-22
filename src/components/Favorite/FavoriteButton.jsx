import { Heart } from 'lucide-react';

function FavoriteButton({ active = false }) {
  return (
    <button type="button" className="favorite-button" aria-label="Favoritar produto">
      <Heart size={16} fill={active ? 'currentColor' : 'none'} />
    </button>
  );
}

export default FavoriteButton;
