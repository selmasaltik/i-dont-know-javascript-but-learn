
// -- CONSOLE --


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