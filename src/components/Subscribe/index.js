import { Component } from "react"
import "./index.css"

class Welcome extends Component{
    state={isSubscribed:false}

    onSubscribe=()=>{
        this.setState(prevState=>({isSubscribed:!prevState.isSubscribed}))
    }
    render(){
        const {isSubscribed}=this.state
        return(
            <div className="app-container">
                <h1 className="heading">Welcome</h1>
                <p className="description">Thank you! Happy Learning</p>
                <button type="button" className="subscribe-button" onClick={this.onSubscribe} >
                    {isSubscribed ? "Subscribed":"Subscribe"}
                </button>
            </div>
        )
    }
}

export default Welcome