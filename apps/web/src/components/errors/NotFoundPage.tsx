import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="error-panel" aria-labelledby="not-found-title">
      <p className="eyebrow">404 · PAGE NOT FOUND</p>
      <h1 id="not-found-title">Страница не найдена</h1>
      <p className="muted">
        Такого адреса в Linqor нет. Проверьте ссылку или вернитесь на главную.
      </p>
      <div className="actions">
        <Link className="button button-primary" to="/">
          На главную
        </Link>
        <Link className="button button-secondary" to="/pair">
          Подключить устройство
        </Link>
      </div>
    </section>
  );
}
