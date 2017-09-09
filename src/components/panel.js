import React, {Component} from 'react'

class Panel extends Component {
  render() {
    return (
      <div className="panel">
        <div className="bzg">
          <div className="bzg_c" data-col="m6">
            <h3 className="text-blue text-regular">Daily Schedule</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam dolores quae maxime maiores temporibus, rerum cumque quo similique esse laborum deserunt adipisci. Necessitatibus ipsa sunt quaerat quam, maxime fugit.</p>
          </div>
          <div className="bzg_c" data-col="m6">
            <h3 className="text-red text-regular">Reservation Form</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam dolores quae maxime maiores temporibus, rerum cumque quo similique esse laborum deserunt adipisci. Necessitatibus ipsa sunt quaerat quam, maxime fugit</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Panel