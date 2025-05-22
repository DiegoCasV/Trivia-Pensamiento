import { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './ui/pages/Home.jsx';
import Start from './ui/pages/Start.jsx';
import './App.css';
import Game from './ui/pages/Game.jsx';

function App() {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home />
                        }
                    />
                    <Route
                        path="/start"
                        element={
                            <Start />
                        }
                    />
                    <Route
                        path="/game"
                        element={
                            <Game />
                        }
                    />
                </Routes>
            </HashRouter>
        </>
    )
}

export default App
