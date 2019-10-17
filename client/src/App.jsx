import React from 'react';

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          hours: '00',
        minutes: '00',
        seconds: '00'
      }
    }
    
    componentDidMount() {
      this.updateTime();
      setInterval( () => {this.updateTime()},100);
    }
    
    updateTime() {
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      this.setState({hours: this.addZero(today.getHours().toString())});
      this.setState({minutes: this.addZero(today.getMinutes().toString())});
      this.setState({seconds: this.addZero(today.getSeconds().toString())})
    }
    
    addZero(num) {
        if(num.length === 1) {
          return '0' + num;
      } else {
          return num;
      }
    }
    
    render() {
      return (
        <div class="main">
          {this.state.hours}:{this.state.minutes}:{this.state.seconds}
        </div>
      )
    }
  }

export default App;