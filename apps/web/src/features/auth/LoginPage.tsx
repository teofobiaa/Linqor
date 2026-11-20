import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";

export function LoginPage() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Интерфейс готов. Вход станет доступен после подключения Supabase Auth; данные никуда не отправлялись.");
  }
  return <section className="auth-layout"><div className="auth-aside"><Link className="brand brand-large" to="/">Linqor<span className="brand-mark">.</span></Link><div><p className="eyebrow">PRIVATE DEVICE BRIDGE</p><h1>Ваши устройства<br/>работают вместе.</h1><p className="lead">Войдите, чтобы управлять подключениями, сессиями и избранными беседами.</p></div><p className="auth-footnote">Ваши данные принадлежат вам.</p></div><div className="auth-main"><form className="form-card" onSubmit={submit}><div className="form-heading"><p className="eyebrow">С ВОЗВРАЩЕНИЕМ</p><h2>Войти в аккаунт</h2><p className="muted">Введите данные учётной записи Linqor.</p></div><label className="field">Email<input type="email" autoComplete="email" placeholder="you@example.com" value={email} onChange={e=>setEmail(e.target.value)} required /></label><label className="field">Пароль<input type="password" autoComplete="current-password" placeholder="Ваш пароль" value={password} onChange={e=>setPassword(e.target.value)} required minLength={8}/></label><button className="button button-primary button-wide" type="submit">Войти <span aria-hidden="true">→</span></button>{message&&<p className="form-message" role="status">{message}</p>}<p className="form-switch">Впервые в Linqor? <Link to="/register">Создать аккаунт</Link></p><p className="form-legal">Перед использованием ознакомьтесь с политикой конфиденциальности и условиями Linqor.</p></form></div></section>;
}
