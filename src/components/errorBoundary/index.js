import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log('error =>', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return(
                <div className="errorBoundary">
                    <h1 className="alignCenter">Something went wrong.</h1>
                    <p className="alignCenter">Sorry, Something went wrong there. Try Again.</p>
                </div>
            )
        }
  
        return this.props.children; 
    }
  }

  export default ErrorBoundary;
