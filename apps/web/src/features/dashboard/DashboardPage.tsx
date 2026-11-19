import { Link } from "react-router-dom";
export function DashboardPage() {
  return <section className="hero"><p className="eyebrow">DEVICE BRIDGE</p><h1>Ваши устройства.<br/>Одно пространство.</h1><p className="lead">Подключайте устройства по QR-коду и передавайте данные в рамках отдельной сессии.</p><div className="actions"><Link className="button button-primary" to="/pair">Подключить устройство</Link><Link className="button button-secondary" to="/login">Войти в аккаунт</Link></div><p className="notice">Каркас интерфейса. Авторизация и обмен данными пока не подключены.</p></section>;
}