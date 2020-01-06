# use-light-switch

![Version](https://badgen.net/npm/v/use-light-switch)
![Dependencies](https://badgen.net/david/dep/cupcakearmy/use-light-switch)
![Size Badge](https://badgen.net/bundlephobia/minzip/use-light-switch)

**React hook for dark mode.**

## 🌈 Features

- Typescript compatible
- **0** Dependencies
- Tiny **~0.7kB**
- React Hooks

###### Installation

```
npm i use-light-switch
```

## 🤔 Motivation

There was no library with typings 🤕

## 🚀 Quickstart

```typescript
import ReactDOM from 'react-dom'
import { useForm } from 'formhero'

const Form = () => {
  const { field, form } = useForm({
    username: '',
    password: '',
  })

  const _submit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <div>
      <form onSubmit={_submit}>
        <input {...field('username')} />
        <input {...field('password')} />

        <button type="submit">Go 🚀</button>
      </form>
    </div>
  )
}
```
