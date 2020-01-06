import React, { useState, useEffect } from 'react'

export enum Mode {
  Light,
  Dark,
  Unset,
}

export const useLightSwitch = (): Mode => {

  const darkMedia = window.matchMedia('(prefers-color-scheme: dark)')
  const lightMedia = window.matchMedia('(prefers-color-scheme: light)')

  const [dark, setDark] = useState(darkMedia.matches)
  const [light, setLight] = useState(lightMedia.matches)
  const unsed = !dark && !light

  useEffect(() => {
    const darkFn = (e: MediaQueryListEvent) => { setDark(e.matches) }
    const lightFn = (e: MediaQueryListEvent) => { setLight(e.matches) }
    darkMedia.addListener(darkFn)
    lightMedia.addListener(lightFn)

    return () => {
      darkMedia.removeListener(darkFn)
      lightMedia.removeListener(lightFn)
    }
  }, [])

  return unsed
    ? Mode.Unset
    : dark
      ? Mode.Dark
      : Mode.Light
}

export const modeSelector = <A, B, C>(mode: Mode, { light, dark, unset }: { light?: A, dark?: B, unset?: C }): A | B | C | undefined => {
  switch (mode) {
    case Mode.Light:
      return light
    case Mode.Dark:
      return dark
    case Mode.Unset:
      return unset
  }
}

export const useModeSelector = <A, B, C>({ light, dark, unset }: { light?: A, dark?: B, unset?: C }): A | B | C | undefined => {
  const mode = useLightSwitch()

  return modeSelector<A, B, C>(mode, { light, dark, unset })
}