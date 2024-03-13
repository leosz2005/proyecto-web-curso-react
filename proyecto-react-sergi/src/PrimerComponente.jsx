import React from 'react'

const string = 'Esto es un texto'
const number = 123
const array = [1, 2, 3]
const boolean = true
const funcion = (a, b) => a*b
const objeto = { nombre: 'Curso de Javascript', duracion: 4 }
const fecha = new Date()

export const PrimerComponente = () => {
  return (
    <h1>{funcion(5, 10)}</h1>
  )
}
