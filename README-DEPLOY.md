# Развертывание M3U8 Player Welcome Page на Vercel

## Способ 1: Через GitHub (Рекомендуемый)

### 1. Подготовка репозитория на GitHub

1. Создайте новый репозиторий на GitHub
2. Загрузите ваш проект:

```bash
# В папке study-timer-clone
git init
git add .
git commit -m "Initial commit: M3U8 Player welcome page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/m3u8-player-welcome.git
git push -u origin main
```

### 2. Деплой на Vercel

1. Зайдите на [vercel.com](https://vercel.com)
2. Войдите через GitHub аккаунт
3. Нажмите "New Project"
4. Выберите ваш репозиторий `m3u8-player-welcome`
5. Vercel автоматически определит настройки:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Нажмите "Deploy"

## Способ 2: Через Vercel CLI

### 1. Установка Vercel CLI

```bash
npm i -g vercel
```

### 2. Деплой

```bash
# В папке study-timer-clone
vercel

# Следуйте инструкциям:
# - Подтвердите папку проекта
# - Выберите настройки или оставьте по умолчанию
# - Дождитесь завершения деплоя
```

## Способ 3: Перетаскиванием файлов

### 1. Сборка проекта

```bash
# В папке study-timer-clone
npm run build
```

### 2. Загрузка на Vercel

1. Зайдите на [vercel.com](https://vercel.com)
2. Нажмите "New Project"
3. Выберите "Deploy from folder"
4. Перетащите папку `dist` на страницу

## Автоматические обновления

При выборе первого способа (через GitHub), Vercel будет автоматически обновлять сайт при каждом push в репозиторий.

## Настройки домена

После деплоя вы получите URL вида: `https://your-project.vercel.app`

Вы можете:
- Изменить название проекта в настройках Vercel
- Подключить собственный домен
- Настроить HTTPS (включен по умолчанию)

## Полезные ссылки

- [Документация Vercel](https://vercel.com/docs)
- [Vite + Vercel гайд](https://vercel.com/guides/deploying-vite-to-vercel)
