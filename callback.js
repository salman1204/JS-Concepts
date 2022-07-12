const takeOrder = (customer, callback) => {
  console.log(`Take order for ${customer}`)
  callback(customer)
}

const proccessOrder = (customer, callback) => {
  console.log(`cooking food for ${customer} ..........`)

  setTimeout(() => {
    console.log('Cooking completed')
    console.log('Order served')
    callback(customer)
  }, 5000)
}

const completeOrder = (customer) => {
  console.log(`order complete for ${customer}`)
}

takeOrder('salman', (customer) => {
  proccessOrder(customer, (customer) => {
    completeOrder(customer)
  })
})
