import React, { useEffect, useState } from "react";
import "./Ruleta.css";
import { useNavigate } from "react-router-dom";

const categorias = [
    { nombre: "Aleatorio", icono: "❓" },
    { nombre: "Ciencia", icono: "🧪" },
    { nombre: "Historia", icono: "📜" },
    { nombre: "Deportes", icono: "🏅" },
    { nombre: "Geografía", icono: "🌍" },
    { nombre: "Entretenimiento", icono: "🎬" }
];

const categoriasContra = [
    { nombre: "Aleatorio", icono: "❓" },
    { nombre: "Entretenimiento", icono: "🎬" },
    { nombre: "Geografía", icono: "🌍" },
    { nombre: "Deportes", icono: "🏅" },
    { nombre: "Historia", icono: "📜" },
    { nombre: "Ciencia", icono: "🧪" }
];

export default function Ruleta() {
    const [girando, setGirando] = useState(false);
    const [angulo, setAngulo] = useState(0);
    const navigate = useNavigate();

    const girarRuleta = () => {
        if (girando) return;

        const gradosExtra = 360 * 5;
        const gradosAleatorios = Math.floor(Math.random() * 360);
        const nuevoAngulo = angulo + gradosExtra + gradosAleatorios;

        setGirando(true);
        setAngulo(nuevoAngulo);

        const gradosPorCategoria = 360 / categorias.length;
        let indice = Math.floor(((nuevoAngulo % 360) / gradosPorCategoria)) % categorias.length;
        if (indice === 5) {
            indice = 0;
        }else {
            indice ++;
        }

        setTimeout(() => {
            setGirando(false);
            navigate(`/game?categoria=${indice}&nombre=${categoriasContra[indice].nombre}`);
        }, 4000);
    };

    return (
        <div className="ruleta-container">
            <div className="ruleta-wrapper">
                <div className="puntero">▼</div>
                <div className="ruleta-borde">
                    <div className="ruleta" style={{ transform: `rotate(${angulo}deg)` }}>
                        {categorias.map((cat, i) => (
                            <div
                                key={i}
                                id={cat.nombre}
                                className={`label`}
                                style={{
                                    transform: `rotate(${(360 / categorias.length) * i}deg)`,
                                }}
                            >
                                <span>{cat.icono}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <button className="ruleta-button" onClick={girarRuleta} disabled={girando}>
                {girando ? "Girando..." : "Girar Ruleta"}
            </button>
        </div>
    );
}
