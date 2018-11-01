import React, {Component} from 'react';

const Problematic = () => {
    throw (new Error('Bug found'));
    return(
        <div>

        </div>
    );
};

class Counter extends Component {
    state = {
        number: 0
    }

    constructor(props){
        super(props);
        console.log('constructor');
    }
    /*
    componentWillMount(){
        console.log('componentWillMount(depricated)');
    }

    componentDidMount(){
        console.log('component didMount');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate');
        if(nextState.number % 5 === 0) return false;
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate');
    }


    */
    // handleIncrease = () => {
    //     this.setState(
    //         // number: this.state.number + 1
    //         (state) => ({
    //             number: state.number + 1
    //         })
    //     );
    // }

    handleDecrease = () =>{
        this.setState(
            //number: this.state.number -1
            ({number}) => ({
                number: number - 1
            })
        );
    }
    
    handleIncrease = () => {
        const {number} = this.state;
        this.setState({
            number: number + 1
        })
    }
    

    componentDidCatch(error, info){
        this.setState({
            error: true
        })
    }

    render(){
        if(this.state.error) {
            return (
                <div>
                    <h1>Error Occurred.</h1>;
                </div>

                );

        }
        
        console.log(this.state.number);
        console.log(this.state.error);

        return(
            <div>
                <h1>Counter</h1>
                <div>값: {this.state.number}</div>
                {this.state.number === 4 && <Problematic />}
                <button onClick={this.handleIncrease}>+</button>
                <button onClick = {this.handleDecrease}>-</button>
            </div>
        )
    }
}

export default Counter;