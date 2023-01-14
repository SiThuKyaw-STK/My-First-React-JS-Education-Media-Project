import React, {Component} from 'react';
import {Link} from "react-router-dom";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    componentDidCatch(error, errorInfo) {
        console.log("Error is ", error);
        console.log("Error Info ", errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <>
                    <h1 className={`text-gradient text-[100px] text-center`}>Something is not right!</h1>
                    <Link to={"/"}>Go Back Home</Link>
                </>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;