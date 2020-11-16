# giphy-project

const [favorites, setFavorite] = useState("");

useEffect(async ()=>{
  let savedFavorite = await localStorage.getItem('__Fav');
  if(savedFavorite) {
    setFavorite(savedFavorite);
  }
}, [])
