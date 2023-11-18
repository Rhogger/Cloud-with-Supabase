import { Component, ReactNode } from 'react';
import ErrorComponent from '../pages/errors/ErrorComponent';

interface State {
  hasError: boolean;
  errorMessage: string;
  solutionMessage: string;
}

interface Props {
  children: ReactNode;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, errorMessage: '', solutionMessage: '' };
  }

  static getDerivedStateFromError(error: Error) {
    let solution = '';

    if (
      error.message ===
      "Cannot destructure property 'name' of 'location.state' as it is null."
    ) {
      solution = 'User id is not ';
    }

    return {
      hasError: true,
      errorMessage: error.message,
      solutionMessage: solution,
    };
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <ErrorComponent
          errorMessage={this.state.errorMessage}
          solutionMessage={
            this.state.solutionMessage ||
            'For now, no solution... Create a pull request for creating a solution! :D'
          }
        />
      );
    }

    return this.props.children;
  }
}
