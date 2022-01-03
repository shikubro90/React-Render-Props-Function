import React from "react";


export default class Click extends React.Component{

    render(){

        const {count, incrementCount} = this.props

        return(
            <div>
                <button type="button" onClick={incrementCount}>
                    Click {count} time
                </button>
            </div>
        ) 
    }
}

