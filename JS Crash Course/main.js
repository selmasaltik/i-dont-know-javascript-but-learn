//COMMENT

/* MULTI
LINE
COMMENTS */


// -- CONSOLE OUTPUT --


// alert('Hello World'); //Ekrana "Hello World" yazan bir popup çıkacaktır.
//Bu şekilde çalışmak, value kullanmak ya da hata ayıklamak verimsiz olduğundan tarayıcıda konsolda çalışmak daha iyi olacaktır.
//Her tarayıcıda geliştirici araçları olarak adlandırılan ve kullanabileceğiniz bir JavaScript konsolunuz vardır burada JS kodlarını çalıştırabilirsiniz.
//Menu > More Tools > Console
//Ağırlıklı olarak konsolda çalışmak syntax a daha iyi hakim olabilmenizi sağlayacaktır.
// https://developer.mozilla.org/en-US/ Bu site geliştiriciler için çok iyi bir dokümantasyon sağlayan bir kaynaktır.
// Örneğin; console.warn() yazdığınızda çıktısı bir uyarı mesajı olacaktır ya da console.error() yazdığınızda çıktısı bir hata mesajı olacaktır.
// https://developer.mozilla.org/en-US/docs/Web/API/Console Eklediğim linki inceleyerek, console ile bir çok farklı işlem yapabilirsiniz. (console.table(), console.group() etc.)
//VS Code üzerinde çalışıyorum ben, console üzerinde burada yaptığınız işlemleri yapabilir clear ile ekranı temizleyebilir ve komut dosyamızdan konsola console.log() ile çıktılar yazabiliriz.
//VS Code üzerinde yaptığınız değişiklikleri anlık olarak görmek için Live Server extentesion ekleyebilirsiniz.

console.log('Hello World'); //Çoğunlukla bunu kullanıyoruz.
console.error('This is an error'); //Mesaj kırmızı olacaktır ve bize hatanın satır numarasını ve hangi dosyada ise göstermek için bir bağlantı verir.
console.warn('This is a warning'); //Mesaj sarı olacaktır ve hata mesajında olduğu gibi satır numarası ve bağlantı verecektir.


// -- VARIABLES & DATA TYPES --

//var, let, const
//Temelde bu üç değişken kullanılmaktadır.
//var değişken tipi JavaScript 'in başından beri var olmakta fakat let ve const kullanılmaya başlandığından bu yana pek kullanmıyoruz.
//Çünkü var global olarak kapsamını belirlediğinden, eğer if koşul ifadesi içinde bir değişken belirledik.
//Sonra bu if bloğunun dışında aynı ada sahip çakışma olabilen bir değişken varsa bu sorun olur bu yüzden çoğunlukla kullanmak istemezsiniz.

// - SCOPE -

// Scope : Değişkeni tanımladığınız bölgeye göre isimlendirilir ve değişken de o bölgenin ismiyle anılır. (Global scope’ta tanımlanan değişken global değişkendir gibi.)
// Global Scope: JavaScript kodunda herhangi bir yerde tanımlanan değişkenlerdir. Bu değişkenlere her yerden erişebilirsiniz.
// Local Scope: Sadece tanımlandığı fonksiyon içinde geçerli olan değişkenlerdir. Dışarıdan bu değişkenlere erişemezsiniz. Function scope diye de anılır.
// /* JS */
// var name = 'global degisken';
// console.log(name);
// // global degisken
// function foo() {
//    var name = "local degisken";
//    console.log(name);
//    // local degisken
// }
// console.log(name);
// // global degisken
// Block Scope : Block scope ise her türlü { } süslü parantez arasında olan kısma denir. if-for da dahildir.

// var function scope
// let & const have a `block-level` scope


// ECMAScript --> http://es6-features.org/#Constants
//ES6 ya da ES2015 bir betik dili standartıdır. JavaScript dilinin standartlarını da belirlemektedir. Bu konuda bize bir çok işlevsellik verir.
//Şuan tüm browserların desteklediği standart ES5'tir, ‘let ve const’ ES6 standartıyla çıkmıştır ve ES standartları geliştirilmeye devam edilmektedir.
//var function scope olduğu için if-for tanımlanan değişkenlere dışarıdan erişebilirsiniz. Değişken değeri sonradan değiştirilebilir. Değişken tekrar tanımlanabilir.
//const değişkenin değerini sonradan değiştiremezsiniz. Yani değişkenin değeri sabittir. const sadece bir kez tanımlanabilir. const block scope’tur. Yani sadece tanımlandığı { } süslü parantez içerisinden erişilebilir.
//let değişkenin değeri sonradan değiştirilebilir. let sadece bir kez tanımlanabilir. let block scope’tur.


let day = 30; //ilk çıktımız bu olacaktır
day = 31;  //sonra değişkenimize başka bir değer atarsak çıktımız bu olacaktır.

console.log(day);

const year = 2019; //çıktımız bu olacaktır
// year = 2020; değişkene yeni bir değer atamak istersek bu şekilde hata verecektir çünkü değişken tipimiz const bu yüzden type error mesaj dönecektir.
//yani yukarıda da dediğimiz gibi sabittir değiştirilemez veya yeni değer atanamaz.
console.log(year);

//const değişken tipini ne zaman kullanmalıyım?
//yeniden değer atayacağınızı biliyorsanız const kullanmamaya çalışın.
//Bir oyunda skor değişebilir ve doğrudan değiştirmek isteyebiliriz
//Burada yeniden atama yapmasak bile const ile yapamayız.
//const = score; dersem syntax hatası verecektir bu hata şudur Missing initializer in const declaration
//Çünkü const kullanırsak bir değer eklemeniz gerekir const score = 10; gibi
//Ama çoğu zaman direkt olarak değer atayamayabilirsiniz mesela dizi ya da obje içindeki değerlerin tümünü yeniden atayamazsınız bunu ileri anlatımlarda daha iyi anlıyor olacağız.
let = score;
score = 10;

console.log(score);


//String, Number, BigInt, Boolean, Null, Undefined ve Symbol(ECMAScript 6'da yeni gelen veri tipi)

//Bunlar ECMAScript standartları ile gelen ve ilkel değerler yani primitives 7 veri tipidir.
//Bütün bu veri tipleri sonradan değiştirilemez değerler tanımlar.
//Detaylı bilgi için: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types

// ** Değişken tanımlarken tek/çift tırnak kullanmak ya da noktalı virgül kulanmak/kullanmamak bir hata yaratmaz fakat bir standart oluşturmak adına
// birini tercih edip o şekilde tüm yapıda kullanmak daha iyi olacaktır. **

const name = 'Jane';
const age = 23;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
const z;

console.log(typeof name); //Değişkenin türünü bulmak için `typeof` kullanıyoruz. Çıktısı bu örnek için `string` olacaktır.
console.log(typeof x); //Değişken tipi olarak bunun çıktısı `object` olacaktır.
// ** In JavaScript null is "nothing". It is supposed to be something that doesn't exist.
// Unfortunately, in JavaScript, the data type of null is an object.
// You can consider it a bug in JavaScript that typeof null is an object. **
// Source: https://www.w3schools.com/js/js_datatypes.asp
console.log(typeof z); //Değişken tipi olarak bunun çıktısı `undefined` olacaktır.

// - CONCATENATION -
//Bunu yapmanın birkaç yolu vardır.

//Burada name ve age değişkenlerini birleştirmek için kullandığımız eski bir yöntemdir ve çok değişkenli bir birleştirme için vakit alabilir.
console.log('My name is ' + name + 'and I am ' + age);
//Output: My name is Jane and I am 23


//ES6 ile gelen ve bunun yerine kullandığımız diğer bir yöntem ise;

// - TEMPLATE STRING -
const hello = `My name is  ${name} and I am ${age}`;

console.log(hello);
//Output: My name is Jane and I am 23

// - STRING METHODS -
const s = 'Hello World!';

console.log(s.length());
//Output: 12

console.log(s.toUpperCase());
//Output: HELLO WORLD!

console.log(s.toLowerCase());
//Output: hello world!

console.log(s.substring(0, 5));
//Output: Hello

console.log(s.substring(0, 5).toUpperCase());
//Output: HELLO

console.log(s.split(''));
//Output: ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d", "!"]

const f = 'banana, strawberry, blueberry, watermelon';

console.log(f.split(', ')); //bu şekilde tanımladığımız stringi bir arraye dönüştürmüş olduk. Bu oldukça kullanışlı bir kullanımdır.
//Output: ["banana", "strawberry", "blueberry", "watermelon"]

// -- ARRAYS --

//Variables that hold multiple values
// const arr = new Array(); array constuctor

const numbers = new Array(1,2,3,4,5);

console.log(numbers);
//Output: [1,2,3,4,5];


const fruits = ['apples', 'oranges', 'bananas'];

console.log(fruits);
//Output: ["apples", "oranges", "bananas"]

console.log(fruits[1]);
//Output: oranges

console.log(fruits[0]);
//Output: apples

fruits[3] = 'grapes';
console.log(fruits);
//Output: ["apples", "oranges", "bananas", "grapes"]

// fruits = []; değişken tipimiz const olduğu için bu şekilde direkt yeni bir atama yapamayız fakat yukarıdaki gibi diziye yeni bir eleman ekleyebiliriz.
// doğrudan atama yapmak yerine push() ile diziyi manipüle edebilir ve sonuna yeni bir eleman ekleyebiliriz

fruits.push('mangos'); //sona eleman eklemek için
console.log(fruits);
//Output: ["apples", "oranges", "bananas", "grapes", "mangos"]

fruits.unshift('strawberries'); //dizinin başına eleman eklemek için
console.log(fruits);
//Output: ["strawberries", "apples", "oranges", "bananas", "grapes", "mangos"]

fruits.pop(); //sondan eleman çıkarmak için
console.log(fruits);
//Output: ["apples", "oranges", "bananas", "grapes"]

console.log(Array.isArray(fruits)); //bu bir dizi midir kontrolü yapmak için
//Output: true

console.log(Array.isArray('hello')); //bu bir dizi değildir
//Output: false

console.log(fruits.indexOf('oranges')); //dizide elemanın ilk görüldüğü indexi verir
//Output: 2

console.log(fruits.indexOf('pears')); //dizide olmayan bir eleman ise -1 değeri dönecektir
//Output: -1

// -- OBJECT LITERALS --

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 33,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 Main St',
    city: 'Boston',
    state: 'MA'
  }
}

console.log(person);
//Output: {firstName: "John", lastName: "Doe", age: 33, hobbies: Array(3), address: {…}}

// alert(person); yazdığımızda çıktı [object Object] olacaktır alert bu tür şeyler yapmak için iyi bir yol değildir

console.log(person.firstName); //Belirli tek bir değere ulaşmak için yazılması gereken söz dizimi
//Output: John

console.log(person.firstName, person.lastName);
//Output: John Doe

console.log(person.hobbies[1]); //nesne içindeki diziden indexi 1 olan elemanı getirmek için
//Output: movies

console.log(person.address.city); //nesne içinden bir nesne elemanını getirmek için
//Output: Boston

// - OBJECT DESTRUCTURING -
const { firstName, lastName, address : {city}} = person;

console.log(firstName);
//Output: John

console.log(city);
//Output: Boston

person.email = 'john@gmail.com';

console.log(person.email);
//Output: john@gmail.com

// console.log(person); dediğimizde emailin person nesnesine eklendiğini görürüz.

const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true
  },
  {
    id: 3,
    text: 'Dentist appt',
    isCompleted: false
  }
];

console.log(todos); //tüm elemanları nesne olan bir dizi gelecektir

console.log(todos[1].text);
//Output: Meeting with boss

// -- JSON --
// (JavaScript Object Notation)
// JSON Formatter --> https://www.freeformatter.com/json-formatter.html

//Formatted JSON
/*
[
  {
    "id": 1,
    "text": "Take out trash",
    "isCompleted": true
  },
  {
    "id": 2,
    "text": "Meeting with boss",
    "isCompleted": true
  },
  {
    "id": 3,
    "text": "Dentist appt",
    "isCompleted": false
  }
]
*/

/*
A common use of JSON is to exchange data to/from a web server.
When sending data to a web server, the data has to be a string.
Convert a JavaScript object into a string with JSON.stringify().

Source: https://www.w3schools.com/js/js_json_stringify.asp
*/

const todoJSON = JSON.stringify(todos); //bir diziden JSON formatında dize oluşturmak için
console.log(todoJSON);
//Output: [{"id":1,"text":"Take out trash","isCompleted":true},{"id":2,"text":"Meeting with boss","isCompleted":true},{"id":3,"text":"Dentist appt","isCompleted":false}]

// -- LOOPS --

// - FOR -

for(let i = 0; i < 10; i++) {
  //console.log(i); ya da
  console.log(`For Loop Number: ${i}`); //template string kullanarak
}

/* Output:
0
1
2
3
4
5
6
7
8
9
*/

// - WHILE -

let i = 0;
while(i < 10) {
  console.log(`While Loop Number: ${i}`);
  i++;
}

//for döngüsü
for(let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}
/* Output:
Take out trash
Meeting with boss
Dentist appt
*/

//for of döngü kurarken daha okunabilir ve basit bir yapısı var for a göre
for (let todo of todos) {
  console.log(todo.id);
}
/* Output:
1
2
3
*/

// - forEach, map, filter -

//forEach ile her bir text için diziye girdi ve textleri çağırdık
todos.forEach(function (todo) {
  console.log(todo.text);
});
/* Output:
Take out trash
Meeting with boss
Dentist appt
*/

//map bize bir dizi döndürür, sadece textin bir dizisini istediğimiz için bir değişkene atadık ve bunu çağırdık
const todoText = todos.map(function (todo) {
  return todoText;
});

console.log(todoText);
// Output: ["Take out trash", "Meeting with boss", "Dentist appt"]

//filter ile tamamlananları filtreledik çıktı olarak bize 2 tane dizi değerlerini getirecektir
const todoCompleted = todos.filter(function (todo) {
  return todoCompleted === true;
});

console.log(todoCompleted);

//bu şekilde filter ve map birlikte kullanıldığında tamamlanmış olanların textlerini bir dizi olarak getirecektir
const todoCompleted = todos.filter(function (todo) {
  return todoCompleted === true;
}).map(function (todo) {
  return todo.text;
});

console.log(todoCompleted);
