import React, { Component } from 'react'
import './TrafficLight.css'
import classNames from 'classname';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;
 
export default class TraficLight extends Component {
    constructor(props){
        super(props);
        this.state ={
        currentColor:GREEN
        };
        setInterval(()=>{
       
            this.setState({
                currentColor: this.getNextColor(this.state.currentColor)
            });
        },1000);
    }
    getNextColor(color){
        switch(color){
            case RED:
                return ORANGE;
            case ORANGE:
                return GREEN;
            default:
                return RED;
        }
    }
    render() {
       
        const{currentColor} = this.state;
        console.log('Renderring...', currentColor)
        return (
            
            <div className="TrafficLight">
                <div className={classNames('buld','red',{
                    active:currentColor === RED
                })}/>
                <div className={classNames('buld','orange',{
                    active:currentColor === ORANGE
                })}/>
                <div className={classNames('buld','green',{
                    active: currentColor === GREEN
                })}/>
            </div>
        )
    }
}
