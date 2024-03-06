const Customers = (props) => {
    const listCustomer = props.myCustomers;
    return(
        <div className="listCustomer" >{listCustomer.map((customer) => {
            return (
              <li key={customer.id}>
                {customer.name}
              </li>
            )
          })}</div>
    )
}

export default Customers;