'use strict'

const Route = use('Route')

// Declaração das rotas Angular
const angularRoutes = ['/', 'home', 'dashboard', 'login']

angularRoutes.forEach(ngRoute => {
  Route.on(ngRoute).render('front.index')
})

// As rotas da api
Route.on('/').render('welcome')

Route.get('api', ({ response }) => {
  response.status(200).send({
    message: "I'm online!"
  })
})

Route.get('api/users', ({ response }) => {
  response.status(200).send({
    users: [
      {
        name: 'Albert Einstein',
        birth_date: '1879-03-14'
      },
      {
        name: 'Nicolas Tesla',
        birth_date: '1856-07-10'
      }
    ]
  })
})
