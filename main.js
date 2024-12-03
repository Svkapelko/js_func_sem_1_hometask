// Задание 1 
/*Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread
оператора, найти минимальное число в массиве, решение задание должно состоять
из одной строки */
const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));


// Задание 2
/*Напишите функцию createCounter, которая создает счётчик и возвращает объект
с двумя методами: increment и decrement. Метод increment должен увеличивать
значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
на 1. Значение счетчика должно быть доступно только через методы объекта, а не
напрямую.*/
function createCounter() {
    let counter = 0;
    return {
        increment: function (counter) {
            return counter += 1;
        },
        decrement: function (counter) {
            return counter -= 1;
        }
    }
}

const count = createCounter(1);
console.log(count.increment(2));
console.log(count.decrement(2));


//Задание 3 
/* Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.*/


function findElementByClass(rootElement, className) {
    // Проверяем, содержит ли переданный корневой элемент нужный класс
    if (rootElement.classList && rootElement.classList.contains(className)) {
        return rootElement; // Если содержит, то возвращаем элемент
    }
    // Просматриваем, дочерние элементы 
    for (let i = 0; i < rootElement.children.length; i++) {
        const childElement = rootElement.children[i];
        const foundElement = findElementByClass(childElement, className);

        if (foundElement) {
            return foundElement; // Если нашли элемент с классом, то возвращаем его
        }
    }
    return null // Если не нашли элемент с классом, то возвращаем null
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);

