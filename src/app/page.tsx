'use client';

import { useState, FormEvent } from 'react';

type Mensaje = {
  de: 'usuario' | 'bot';
  tipo: 'texto' | 'audio';
  contenido: string;
};

export default function Page() {
  const [chat, setChat] = useState<Mensaje[]>([]);
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const enviar = async (e: FormEvent) => {
  e.preventDefault();
  if (!msg) return;

  setLoading(true);

  try {
    const res = await fetch(
      `/api/agent?idagente=anon&msg=${encodeURIComponent(msg)}`
    );
    const texto = await res.text();

    // Agrega el mensaje del usuario
    setChat((c) => [...c, { de: 'usuario', tipo: 'texto', contenido: msg }]);

    // Buscar la URL del audio dentro del texto
    const match = texto.match(
      /(https:\/\/storage\.googleapis\.com\/audios_library\/speech\d+)/
    );

    if (match) {
      const audioUrl = match[1];

      // Mostrar el texto explicativo si quieres
      const textoSinUrl = texto.replace(audioUrl, '').trim();

      if (textoSinUrl) {
        setChat((c) => [
          ...c,
          { de: 'bot', tipo: 'texto', contenido: textoSinUrl },
        ]);
      }

      // Mostrar el audio
      setChat((c) => [
        ...c,
        { de: 'bot', tipo: 'audio', contenido: audioUrl },
      ]);
    } else {
      // Si no hay audio, mostrar el texto como siempre
      setChat((c) => [
        ...c,
        { de: 'bot', tipo: 'texto', contenido: texto },
      ]);
    }
  } catch (err) {
    setChat((c) => [
      ...c,
      {
        de: 'bot',
        tipo: 'texto',
        contenido: 'Ocurrió un error al obtener la respuesta.',
      },
    ]);
  }

  setMsg('');
  setLoading(false);
};

  return (
    <div className="h-full flex flex-col p-4">
      <div className="flex-1 overflow-y-auto space-y-3 pb-4">
        {chat.map((m, i) => (
          <div
            key={i}
            className={`p-3 rounded max-w-[70%] ${
              m.de === 'usuario' ? 'ml-auto bg-blue-100' : 'mr-auto bg-gray-100'
            }`}
          >
            {m.tipo === 'audio' ? (
              <audio controls>
                <source src={m.contenido} type="audio/mpeg" />
                Tu navegador no soporta audio.
              </audio>
            ) : (
              <p>{m.contenido}</p>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={enviar} className="mt-2 flex gap-2">
        <input
          className="flex-1 rounded border px-3 py-2"
          placeholder="Escribe tu mensaje…"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          disabled={loading}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? '…' : 'Enviar'}
        </button>
      </form>
    </div>
  );
}