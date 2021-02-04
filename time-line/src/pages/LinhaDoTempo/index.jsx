import React, { useState, useEffect } from 'react'
// import { useHistory } from 'react-router-dom';
import api from '../../services/api'
import useStyles from './useStyles'

export default function TimeLines() {
    const classes = useStyles()
    // const history = useHistory()

    const [timeLines, setTimeLines] = useState([])

    useEffect(() => {
        api.get('linhas/buscar')
            .then(response => {
                setTimeLines(response.data)
            })
    }, [])

    return (
        <div className={classes.root}>
            <h1>Linhas do Tempo:</h1>
            
            <ul>
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

            </ul>
        </div>
    )
}   