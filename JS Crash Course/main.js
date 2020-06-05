
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
//yani yukarıda da dediğimiz sabittitr değiştirilemez veya yeni değer atanamaz.
console.log(year);

//const değişken tipini ne zaman kullanmalıyım?
//yeniden değer ataycağınızı biliyorsanız const kullanmamaya çalışın.
//Bir oyunda skor değişebilir ve doğrudan değiştirmek isteyebiliriz
//Burada yeniden atama yapmasak bile const ile yapamayız.
//const = score; dersem syntax hatası verecektir bu hata şudur Missing initializer in const declaration
//Çünkü const kullanırsak bir değer eklemeniz gerekir const score = 10; gibi
//Ama çoğu zaman direkt olarak değer atayamayabilirsiniz mesela dizi ya da obje içindeki değerlerin tümünüyeniden atayamazsınız bunu ileri anlatımlarda daha iyi anlıyor olacağız.
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


//ES6 ile gelen ve bunun yerine ise kullandığımız diğer bir yöntem ise;

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

console.log(s.substring(0, 5)).toUpperCase;
//Output: HELLO

console.log(s.split(''));
//Output: ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d", "!"]

const f = 'banana, strawberry, blueberry, watermelon';

console.log(f.split(', ')); //bu şekilde tanımladığımız stringi bir arraye dönüştürmüş olduk. Bu oldukça kullanışlı bir kullanımdır.
//Output: ["banana", "strawberry", "blueberry", "watermelon"]
