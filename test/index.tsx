import React from 'react'
import ReactDOM from 'react-dom'
import { Mode, useLightSwitch, useModeSelector } from '../'


const Simple: React.FC = () => {
    const mode = useLightSwitch()

    let color = 'green'
    let name = 'Light'
    if (mode === Mode.Dark) {
        color = 'red'
        name = 'Dark'
    }

    return <div>
        <h3>Simple</h3>
        <div style={{
            padding: '1em 2em',
            backgroundColor: color
        }}>
            {name}
        </div>
    </div>
}

const WithSelector: React.FC = () => {
    const selected = useModeSelector({
        light: { color: 'green', name: 'Light' },
        dark: { color: 'red', name: 'Dark' },
        unset: { color: 'blue', name: 'Unset' },
    })

    return <div>
        <h3>Selector</h3>
        <div style={{
            padding: '1em 2em',
            backgroundColor: selected.color
        }}>
            {selected.name}
        </div>
    </div>
}

const App: React.FC = () => {
    return <div>
        <Simple />
        <WithSelector />
    </div>
}

ReactDOM.render(<App />, window.document.getElementById('root'))
