const Customers = (props) => {
  const { title, listCustomer, DeleteCustomer } = props
  const handleEventDeleteCustomer = (id) => {
    DeleteCustomer(id)
  }
  return (
    <div className="listCustomer" >
      <h5>{title}</h5>
      {listCustomer.map((customer) => {
        return (
          <div>
            <li key={customer.id}>
              {customer.name} <span onClick={()=>handleEventDeleteCustomer(customer.id)}>X</span>
            </li>
          </div>
        )
      })}
      <hr />
    </div>
  )
}

export default Customers;