import { Component, type ErrorInfo, type ReactNode } from "react";

interface AppErrorBoundaryProps {
  children: ReactNode;
}

interface AppErrorBoundaryState {
  hasError: boolean;
}

export class AppErrorBoundary extends Component<
  AppErrorBoundaryProps,
  AppErrorBoundaryState
> {
  state: AppErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): AppErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Linqor application error:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="page-container error-container">
          <section className="error-panel" role="alert" aria-live="assertive">
            <p className="eyebrow">APPLICATION ERROR</p>
            <h1>Что-то пошло не так</h1>
            <p className="muted">
              Произошла непредвиденная ошибка. Перезагрузите приложение.
              Если проблема повторится, попробуйте позже.
            </p>
            <button
              className="button button-primary"
              type="button"
              onClick={() => window.location.reload()}
            >
              Перезагрузить приложение
            </button>
          </section>
        </main>
      );
    }

    return this.props.children;
  }
}
