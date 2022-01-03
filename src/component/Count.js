import React from "react";

class Count extends React.Component{

    state = {
        count : 0
    }

    increment = ()=>{
        this.setState(  
            (previousState) => ({count : previousState.count +1})
        )
    }

    render(){
        const {render} = this.props
        const {count} = this.state

        return render(count, this.increment)

    }

}

export default Count;