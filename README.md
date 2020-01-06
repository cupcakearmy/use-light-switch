# use-light-switch

![Version](https://badgen.net/npm/v/use-light-switch)
![Dependencies](https://badgen.net/david/dep/cupcakearmy/use-light-switch)
![Size Badge](https://badgen.net/bundlephobia/minzip/use-light-switch)

**React hook for dark mode.**

## 🌈 Features

- Typescript compatible
- **0** Dependencies
- Tiny **~0.4kB**
- React Hooks

###### Installation

```
npm i use-light-switch
```

## 🤔 Motivation

There was no library with typings 🤕

## 🚀 Quickstart

```typescript
import React from 'react'
import ReactDOM from 'react-dom'
import { useModeSelector } from 'use-light-switch'

const App: React.FC = () => {
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

ReactDOM.render(<App />, window.document.getElementById('root'))
```
