import Anchor from "./Anchor";
import MovieCard from "./MovieCard";

const movieDataArr = [
  {
    title: "The Shawshank Redemption",
    desc: "A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.",
    img1: "https://lh6.googleusercontent.com/proxy/vfjTj1mwQXLWVCArfLdMJrE5EFhv455JuDg6awr8DztwFQm5CFZg6zUUBQhYFomHlZsn_1sVfWbq3aMQqsAlyUByW2arUav1jHZKxjS7Bz9qv5ZoZGg",
    img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTohSYpYcBgUhj3JIpS-KKqURbMdk9729XbKA&s",
    genre: ["drama", "prison-drama", "crime-drama"],
  },
  {
    title: "The Godfather",
    desc: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjiOt9aTwFTnhy7Gb5cvaWr-Y92UzE0IKDrw&s",
    img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXmNUdGe0pWNvJwAloxbFfsBQuMlB7ChYpqQ&s",
    genre: ["gangster", "psychological-drama", "crime", "tragedy"],
  },
  {
    title: "12 Angry Men",
    desc: "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
    img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRprjdWl21m2dcpDakAN1Va178tjy7ysy3qaw&s",
    img2: "https://m.media-amazon.com/images/I/71P25QCPaUL._AC_UF894,1000_QL80_.jpg",
    genre: ["psychological-drama", "legal-drama", "crime"],
  },
  {
    title: "Pulp Fiction",
    desc: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNN3GKmySD4Q5YC88rhwRjzi8jZ6iz3acc-g&s",
    img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_KhfN20NOpPea0_88mhUzbB-gLu3wSgMb_Q&s",
    genre: ["dark-comedy", "drug-crime", "gangster"],
  },
];

const TheHero = () => {
  return (
    <section className="my-10 h-140 overflow-x-scroll *:w-full flex *:shrink-0 no-scrollbar *:even:bg-amber-600">
      {movieDataArr.map((movie,index) => {
        return <MovieCard title={movie.title} desc={movie.desc} img1={movie.img1} num={index} img2={movie.img2} genre={movie.genre}/>
      })}
    </section>
  );
};

export default TheHero;
