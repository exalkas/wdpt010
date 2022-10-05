import { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };

      // const [hasError, setHasError] = useState(false)
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.log('There is a serious error my friend')
    }
  
    render() {  // return from a function

      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <DemoErrorUI />
      }
  
      return this.props.children; 
    }
  }

  function DemoErrorUI() {
    return <h1>Something went wrong.</h1>;
  }