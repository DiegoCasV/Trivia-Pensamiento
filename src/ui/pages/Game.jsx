import { useLocation, useNavigate } from "react-router-dom";
import "./Game.css";
import { obtenerPreguntaAleatoria } from "../../tools/questions";
import { getCor, getIncor, sumCor, sumInCor } from "../../tools/storage";
import { useState } from "react";
import { ajustarDificultad } from "../../tools/main";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Game() {
    const navigate = useNavigate();
    const query = useQuery();
    const nombre = query.get("nombre");
    const categoriaC = query.get("categoria");
    let categoria = query.get("categoria");
    if (categoria === "0") {
        categoria = String(Math.floor(Math.random() * (5) + 1));
    }
    const nivel = ajustarDificultad(getCor(), getIncor());
    const pregunta = obtenerPreguntaAleatoria(categoria, nivel);

    const manejarRespuesta = (respuestaSeleccionada) => {
        if(respuestaSeleccionada === pregunta.respuestaCorrecta) {
            alert("Respuesta Correcta");
            sumCor();
            sumInCor();
        } else {
            alert("Respuesta Incorrecta");
            sumInCor();
        }
        setTimeout(() => {
            navigate(-1);
        }, 800);
    }

    return (
        <>
            <div className="game">
                <div className="game_pregunta">
                    <h3 style={categoriaC == 0 ? {color: "#9c04aa"} : categoriaC == 1 ? {color: "#ff2d2d"} : categoriaC == 2 ? {color: "#2fc92a"} : categoriaC == 3 ? {color: "#2c4ad3"} : categoriaC == 4 ? {color: "#ffd700"} : {color: "#ff8c00"} }>{nombre}</h3>
                    <p>{pregunta.pregunta}</p>
                </div>
                <div className="game_opciones">
                    {pregunta.opciones.map((respuesta, index) => (
                        <button key={index} onClick={() => manejarRespuesta(respuesta)} >
                            {respuesta}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}