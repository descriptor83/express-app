# x

Репозиторий для быстрого клонирования

```
mkdir $(date +%Y%m%d_%H%M%S) && cd $_ && git clone https://github.com/GossJS/x.git . && yarn
```

```
curl -SLO kodaktor.ru/x.js
curl kodaktor.ru/x -o index.js
```
https://raw.githubusercontent.com/GossJS/x/master/index.js

Для исследований и дебаггинга может быть удобно:

* `bash <(curl -s https://kodaktor.ru/g/eslint_exec)`
* запустить node в папке с этим файлом и сделать .load index.js
* использовать именованные функции в обработчиках – так будет информативнее выглядеть стек
