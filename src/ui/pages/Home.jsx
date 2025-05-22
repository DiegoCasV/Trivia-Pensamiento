import { useNavigate } from "react-router-dom";
import imgCharacter from "../../assets/trivia_character.png"
import "./Home.css";
import { saveCors } from "../../tools/storage";

export default function Home() {
    const navigate = useNavigate();

    return (
        <>
            <div className="home">
                <h1 className="home_title">Trivia Challenge</h1>
                <img className="home_img" src={imgCharacter} />
                <button 
                    className="menu_button menu_button-start" 
                    onClick={() => {
                        saveCors(0, 0);
                        navigate("/start");
                    }}
                >
                    Empezar Juego
                </button>
            </div>
        </>
    );
}