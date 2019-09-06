import { PureComponent } from 'react';
import ReactDom from 'react-dom';
const modalRoot = document.getElementById('modal-root');
console.log(modalRoot);
export class PortalContainer extends PureComponent {
    constructor(props){
        super(props);
        this.container = document.createElement('div');
        console.log(this.container);
    }
    componentDidMount() {
        modalRoot.appendChild(this.container);
    }
    componentWillUnmount() {
        modalRoot.appendChild(this.container);
    }
    render() {
        return ReactDom.createPortal(
            this.props.children,
            this.container,
        )
    }
}