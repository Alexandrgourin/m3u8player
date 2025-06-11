# 🚀 Быстрый деплой на Vercel

## ✨ Структура сайта
- **Главная** (`M3U8-PLAYER.TECH/`) - заглушка с информацией о проекте
- **Welcome** (`M3U8-PLAYER.TECH/welcome`) - инструкция по установке расширения

## Метод 1: Простейший (Drag & Drop)

1. Соберите проект:
   ```bash
   npm run build
   ```

2. Зайдите на [vercel.com](https://vercel.com) → "New Project"

3. Перетащите папку `dist` на страницу Vercel

4. После деплоя:
   - Перейдите в настройки проекта → Domains
   - Добавьте домен `M3U8-PLAYER.TECH`
   - Настройте DNS записи согласно инструкциям Vercel

5. Готово! 🎉

## Метод 2: Через GitHub (с автообновлениями)

1. Создайте репозиторий на GitHub

2. Загрузите код:
   ```bash
   git init
   git add .
   git commit -m "M3U8 Player website with routing"
   git remote add origin https://github.com/USERNAME/m3u8-player-website.git
   git push -u origin main
   ```

3. На Vercel → "New Project" → выберите ваш репозиторий

4. Deploy → в настройках добавьте домен `M3U8-PLAYER.TECH`

5. Готово! 🎉

---

## 🌐 Результат:
- **`M3U8-PLAYER.TECH/`** - красивая главная страница
- **`M3U8-PLAYER.TECH/welcome`** - инструкция по установке расширения

## 🔧 Особенности:
- SPA роутинг (React Router)
- Адаптивный дизайн
- Оптимизирован для SEO
- Автоматическое кэширование
