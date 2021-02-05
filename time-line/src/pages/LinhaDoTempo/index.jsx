import React, { useState, useEffect } from 'react'
// import { useHistory } from 'react-router-dom';
import api from '../../services/api'
// import useStyles from './useStyles'

import './styles.css'

export default function TimeLines() {
    // const classes = useStyles()
    // const history = useHistory()

    const [timeLines, setTimeLines] = useState([])

    useEffect(() => {
        api.get('linhas/buscar')
            .then(response => {
                setTimeLines(response.data)
            })
    }, [timeLines])

    return (
        <div className="root">
            <h1>Todas as Linhas do Tempo:</h1>
            <div className="timelines-cards">
                <ul className="cards-container">
                    {timeLines.map(timelines => (
                        <li key={timelines.id}>
                            <strong>Linha:</strong>
                            <p>{timelines.timeLineName}</p>

                            <strong>WebSite:</strong>
                            <p>{timelines.website}</p>

                            <strong>Resumo:</strong>
                            <p>{timelines.resume}</p>
                        </li>
                    ))}
                    <li className="line-card">
                        <strong>Linha:</strong>
                        <p>Minha Infância</p>

                        <strong>WebSite:</strong>
                        <p>www.fabricio-rosa.com.br</p>

                        <strong>Resumo:</strong>
                        <p>Aqui em conto a história da minha infância.
                        Como cresci, aprendi e me tornei
                        um grande adulto!</p>
                    </li>
                    <li className="line-card">
                        <strong>Linha:</strong>
                        <p>Minha Infância</p>

                        <strong>WebSite:</strong>
                        <p>www.fabricio-rosa.com.br</p>

                        <strong>Resumo:</strong>
                        <p>Aqui em conto a história da minha infância.
                        Como cresci, aprendi e me tornei
                        um grande adulto!</p>
                    </li>
                    <li className="line-card">
                        <strong>Linha:</strong>
                        <p>Minha Infância</p>

                        <strong>WebSite:</strong>
                        <p>www.fabricio-rosa.com.br</p>

                        <strong>Resumo:</strong>
                        <p>Aqui em conto a história da minha infância.
                        Como cresci, aprendi e me tornei
                        um grande adulto!</p>
                    </li>
                    <li className="line-card">
                        <strong>Linha:</strong>
                        <p>Minha Infância</p>

                        <strong>WebSite:</strong>
                        <p>www.fabricio-rosa.com.br</p>

                        <strong>Resumo:</strong>
                        <p>Aqui em conto a história da minha infância.
                        Como cresci, aprendi e me tornei
                        um grande adulto!</p>
                    </li>

                </ul>
            </div>
        </div>
    )
}   