# 🧠 Vercel Frontend – Cloud Run API Integration

This project is part of the [**Stock Guru API**](https://github.com/JuanMontreuil08/stock-guru-api) repository. It offers a web interface built with **Next.js**, designed to seamlessly integrate with an API deployed on **Cloud Run**.

---

## 🚀 Clone and use this project

Follow this steps:

```bash
# 1. Clone the Repo
git clone https://github.com/JuanMontreuil08/ui-agent-vercel.git
cd ui-agent-vercel

# 2. Remove the reference to the original Repo
git remote remove origin
```

---

## 🔗 Add your API Url (Cloud Run)

1. Open the file:

```
src/app/api/agent/route.ts
```

2. In line 4, add your API Url including the endpoint, for example:

```ts
const url = 'https://stockbotv2-224560036383.us-west4.run.app/discover?' +
              new URL(request.url).searchParams.toString();
```

In my case, my endpoint is /discover.

---

## 📤 Push your changes

```bash
git remote add origin <your_repo>
git push -u origin main
```

### For future changes, execute:

```bash
git add .
git commit -m "update"
git push
```

---

## 💬 Variables esperadas por la API

En el archivo:

```
src/app/page.tsx
```

La API espera que se envíen las siguientes variables:

- `msg`: mensaje del usuario.
- `idagente`: identificador para mantener el historial conversacional.

Puedes adaptarlas según las necesidades de tu solución.

---

## 📦 Despliegue en Vercel

Este proyecto está preparado para ser desplegado directamente en [Vercel](https://vercel.com/).  
Solo debes configurar la variable de entorno `NEXT_PUBLIC_API_URL` apuntando a tu endpoint de Cloud Run.

---

## 🤝 Conecta conmigo

Gracias por revisar este repositorio.  
Si te interesa colaborar, aprender más o invitarme a dar una charla, puedes escribirme o seguirme en LinkedIn:

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Miguel%20Cotrina-blue?logo=linkedin&style=flat-square)](https://www.linkedin.com/in/mcotrina/)
