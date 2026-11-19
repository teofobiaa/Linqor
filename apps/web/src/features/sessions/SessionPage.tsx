import { useParams } from "react-router-dom";
export function SessionPage() {
  const { sessionId } = useParams();
  return <section className="panel"><p className="eyebrow">SESSION</p><h1>Сессия</h1><p className="muted">Идентификатор: {sessionId}</p><p className="muted">История сообщений, список файлов, загрузка, скачивание и завершение сессии будут добавлены после реализации транспорта.</p></section>;
}