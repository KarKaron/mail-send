# Отправка почтовых сообщений NodeJS(Express) через сервер Яндекс

Путь отправки: <Имя хоста>/mail

```
method: POST
body: email, subject, message

email= кому отправляем 
subject= тема сообщения
message= текст сообщения

```
Настройка env

```
EMAIL_HOST= почтовый сервер Яндекс 
EMAIL_HOST_PASSWORD= пароль от почты Яндекс
EMAIL_HOST_USER= почта Яндекс (от чьего имени будет приходить почта)
EMAIL_PORT= порт почтового сервера Яндекс 

```