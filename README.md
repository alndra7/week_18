# week_18

### Вопросы 💎

1. Сколько живет localStorage?

    бессрочно

2. Как посмотреть localStorage в браузере?

    F12 - Application

3. Можно ли хранить данные пользователя в sessionStorage?

    нет

4. Как очистить локальное хранилище в браузере?

    с помощью JavaScript (removeItem('ключ')/clear()) или очистки кэша браузера

5. Для чего нужны куки JS?

    для хранения информации (например, токен авторизации или данные пользователя)

6. В чём польза cookie?

    - можно передавать на сервер;
    - срок хранения устанавливается при создании cookie;
    - Cookie могут быть защищёнными, в этом случае их содержимое нельзя получить на стороне клиента. Это важно при хранении пользовательских данных авторизации.

7. Как работать с cookie?

    через document.cookie в JS

8. Как добавить и получить значение из веб-хранилища? 

    - `setItem` для сохранения данных;
    - `getItem` для получения сохранённых данных;

9. Придумайте ещё минимум 3 ситуации, помимо предложенных в уроке, для чего может быть нужно сохранять данные пользователя и какие? 
    
    - местоположение пользователя
    - последние просмотренные товары
    - выбранные фильтры поиска
    
10. Какие преимущества использования JSON?

    - JSON — это компактный формат. С ним большие объемы данных быстро обмениваются между браузером и веб-сервером.
    - c JSON-файлами можно работать не только методами JavaScript. Почти у всех языков есть инструменты для чтения и генерации данных JSON.

11. Какие значения могут быть использованы в JSON?

    - **массивы;**
    - **объекты;**
    - **строки;**
    - **числа** (могут быть как целым, так и с плавающей запятой);
    - **булевый тип** (значение true или false);
    - **значение null** (обозначает отсутствие данных).

12. Как брать данные из JSON?

    JSON.parse()



## Задание на развитие мягких навыков (soft skills) 🔮

1. Какие ваши главные результаты этой недели, что вы поняли / чему научились?

    работа с веб-хранилищами и JSON

2. Как вы выполняли задания, какими способами? Что вы чувствовали при этом?

    использование материала и примеров из него, использование кода из предыдущих занятий; из ощущений - усталость, воодушевление, удовлетворение

3. С какими трудностями вы столкнулись и как их преодолевали?

    незнание подробного принципа действий определенных методов, просила помощи у Совы

4. Какие замечания и предложения на будущее себе дадите?

    углубиться подробнее в самостоятельное изучение доп. материала