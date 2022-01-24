import * as React from 'react';

export class ErrorBoundary extends React.Component<
  { errorText: string },
  { hasError: boolean }
> {
  public state: { hasError: boolean };
  constructor(props: {
    errorText: string;
    children: JSX.Element | JSX.Element[];
  }) {
    super(props);

    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error);
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h3>Something went wrong</h3>
          <p>{this.props.errorText}</p>
        </>
      );
    }

    return this.props.children;
  }
}
