import React, { Component } from 'react';
import ErrorMessage from "../Error/ErrorMessage";
import {Container} from "react-bootstrap";


export default class ErrorBoundery extends Component {
   
    state = {
        error: false
    }


    componentDidCatch(error, info){
        if(error){
            this.setState({error: info});
        }
    }
   
 
    render() {
        if(this.state.error){
            return <section className="error-boundary">
            <Container>
                <div className="error-boundary__top">
                    {<ErrorMessage userMessage={"Error on the server"} 
                    errorMessage={this.state.error} url={this.props.url}/>}
                </div>
            </Container>
        </section>
        }

        return (
            <>
             {this.props.children}   
            </>
        )
    }
}
