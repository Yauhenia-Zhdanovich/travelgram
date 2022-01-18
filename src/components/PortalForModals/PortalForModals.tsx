import * as React from 'react';
import * as ReactDom from 'react-dom';

export class PortalForModal extends React.Component {
  private el;
  private modalRoot: HTMLElement;

  constructor(props: any) {
    super(props);
    this.el = document.createElement('div');
    this.modalRoot = document.getElementById('modal-root');
  }

  componentDidMount(): void {
    this.modalRoot.appendChild(this.el);
  }

  componentWillUnmount(): void {
    this.modalRoot.removeChild(this.el);
  }

  render(): React.ReactNode {
    return ReactDom.createPortal(this.props.children, this.el);
  }
}
