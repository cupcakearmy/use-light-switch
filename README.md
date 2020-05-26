# use-light-switch

![Version](https://badgen.net/npm/v/use-light-switch)
![Types](https://badgen.net/npm/types/use-light-switch)
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

## 💻 [Live Example](https://codesandbox.io/s/simple-wbpgp)

## 🤔 Motivation

There was no library that included typings 🤕

## 🛠 Compatibility & How it works

We leverage two browser features.

1. [prefers-color-scheme](https://caniuse.com/#feat=prefers-color-scheme) media query.
2. [matchMedia](https://caniuse.com/#feat=matchmedia)

The first one is a css media query that gives us the actual user preference. with `window.matchMedia` we can get it inside of javascript and even listen on changes, which makes it reactive.

Currently (26.05.2020) Safari, iOS, Firefox, Chrome, Edge & Android all support these features. IE of course is a lost cause.

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
        <p>Try switching your dark mode in macOS or Windows</p>
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

## 📒 Reference

### `useLightSwitch()`

This is the most basic react hook. It returns one of 3 [Modes](#mode)

###### Example

```typescript
import { Mode, useLightSwitch } from 'use-light-switch'


const Simple: React.FC = () => {
    const mode = useLightSwitch()

    if (mode === Mode.Dark) ...

    return ...
}
```


### Mode

A simple enum. Possible values are:

- `Mode.Light`
- `Mode.Dark`
- `Mode.Unset`

`Unset` is returned when the user has no explicit preference. This is often the case with older or if it's simply unsupported.

### `useModeSelector(options)`

This is a handy hook that reduces boilerplate. You pass values for the different modes and the hook will choose accordingly to what is currently selected. uses [`modeSelector`](#modeselectormode-options) under the hood.

###### Example

```typescript
import { useModeSelector } from 'use-light-switch'

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
```

All parameters are optional and typesafe.

### `modeSelector(mode, options)`

This is a simple functions that returns the matched option to the mode.

###### Example

```typescript
import { Mode, modeSelector } from 'use-light-switch'

const selected = modeSelector(
    Mode.Dark,
    {
        light: { color: 'green', name: 'Light' },
        dark: { color: 'red', name: 'Dark' },
        unset: { color: 'blue', name: 'Unset' },
    }
)

selected.color  // red
selected.name  // Dark
```
