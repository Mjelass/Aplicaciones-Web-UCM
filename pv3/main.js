'use strict'
const mysql = require('mysql')
const config = require('./config')
const DAOUsers = require('./DAOUsers')
const DAOTasks = require('./DAOTasks')
// Crear el pool de conexiones
const pool = mysql.createPool({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
})
let daoUser = new DAOUsers(pool)
let daoTask = new DAOTasks(pool)

daoTask.getAllTasks('aitor.tilla@ucm.es', cb_getAllTasks)
function cb_getAllTasks(err, result) {
  console.log(
    '******************Probando las clases de taskUser***********************'
  )

  console.log(`daoTask.getAllTasks('aitor.tilla@ucm.es',cb_getAllTasks) => `)
  if (err) {
    console.log(err.message)
  } else if (result) {
    console.log(result)
  } else {
    console.log('correo NO EXISTE')
  }
}

daoTask.deleteCompleted('aitor.tilla@ucm.es', cb_deleteCompleted)
function cb_deleteCompleted(err, result) {
  console.log(
    `daoTask.deleteCompleted('aitor.tilla@ucm.es', cb_deleteCompleted) => `
  )
  if (err) {
    console.log(err.message)
  } else if (result) {
    console.log(result)
  } else {
    console.log('correo NO EXISTE')
  }
}

//para probar la funcion isUserCorrect de daoUser
daoUser.isUserCorrect('aitor.tilla@ucm.es', 'aitor', cb_isUserCorrect)
function cb_isUserCorrect(err, result) {
  console.log(
    '******************Probando las clases de daoUser***********************'
  )
  console.log(
    `daoUser.isUserCorrect('aitor.tilla@ucm.es', 'aitor', cb_isUserCorrect) => `
  )
  if (err) {
    console.log(err.message)
  } else if (result) {
    console.log('Usuario y contraseña correctos')
  } else {
    console.log('Usuario y/o contraseña incorrectos')
  }
}

//para probar la funcion getUserImageName de daoUser
daoUser.getUserImageName('aitor.tilla@ucm.es', cb_getUserImageName)
function cb_getUserImageName(err, result) {
  console.log(
    '---------------------------------------------------------------------'
  )
  console.log(
    `daoUser.getUserImageName('aitor.tilla@ucm.es', cb_getUserImageName) => `
  )
  if (err) {
    console.log(err.message)
  } else if (result == '') {
    console.log('Correo no existe')
  } else {
    console.log(result)
  }
}
