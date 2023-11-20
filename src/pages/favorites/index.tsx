import { useGlobalContext } from "@/context/context";
import { FavoritesPage } from "@/components/screens/favorites/favorites";

function Favorites() {
  const { favorites } = useGlobalContext();

  return <FavoritesPage favorites={favorites} />;
}

export default Favorites;
