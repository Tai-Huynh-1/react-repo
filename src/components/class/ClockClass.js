import React, {Component} from 'react'

class ClockClock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            timer: "...",
            schedules: []
        };
    }

    tick() {
        this.setState({
          date: new Date()
        });
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {
        return (
            <div>
              <h1>Hello, world!</h1>
              <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default ClockClock

// class Animal {
//     constructor(numOfLegs) {
//         this.numOfLegs = numOfLegs
//     }

//     eat: () => {

//     }
//     walk: () => {

//     }
// }

// class Cat {
//     constructor() {
//         super()
//         this.numOfKittens = 
//     }

//     meow: () => {
       
//     }
// }

// const Tom = new Cat()
