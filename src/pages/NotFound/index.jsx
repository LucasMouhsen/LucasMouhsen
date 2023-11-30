import useGiphy from '../../hooks/useGiphy';
import './index.css'
export default function NotFound() {

  console.log("NotFound rendered");
  const { gif } = useGiphy();
  console.log("Gif: ", gif);

  return (
    <main className="notFound">
      <h1 className="error">404</h1>
      <h1 className="desc">Page not found</h1>
      <div className='boxGif'>

        <img className='gif' src={gif} alt="Gif" />
      </div>
    </main>
  );
}