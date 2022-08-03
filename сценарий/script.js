
// 1 задания
let balance = 25000


let car = 4480
let food = 890


let invoice = 5500
let stock = 4200


let total = balance - car - food
let income = total + invoice + stock
let totalBalance = income 



console.log(totalBalance);

// 2 задания

let gmail = 'aaa@bbb@ccc '
gmail = gmail.replaceAll('@', '!')
console.log(gmail);

let stop = "HELLOWORLD"
stop = stop[0].toUpperCase() + stop.slice(1, 5).toLowerCase() + " " + stop.slice(5).toLowerCase()
console.log(stop);

let start = 'Hello, it is HTML'
start = start.slice(0, 5) + start.slice(6, 12) + ' not JS'
console.log(sts);

let bag = 'alex'
bag = bag[0].toUpperCase() + bag.slice(1, 4)
console.log(a);

let random = Math.random()
random = random.toString().slice(2, 3)
console.log(random);

let txt = 'Lex Luter has a big suit'
txt = txt[11].toUpperCase() + txt.slice(0, 4)
console.log(txt);



// 3 задания



let name = prompt('Как вас зовут ?').trim()
name = name.toLowerCase()

if (name === 'alex') {
   let code = +prompt('Номер счета ?')

   if (code === 7777)  {
      let money = alert('Ваш баланс  ' + 10000 + '$')
      money === 10000
      let cash = prompt('Сколько обналичить ?')

      if (cash <= 10000)
      
      {
         alert('Все отлично ')
         alert('Вы сняли ' + cash +' $ ')
         alert('Осталось средств ' + ( 10000 - cash) + '$')

      }else {
         alert('Недостаочно средств'  )
         } 
   }else {
      alert('Пользователь не найден, покидос ')
   }
   
}else {
   alert('Пользователь не найден, досвидули ')
}

// 4 задания 


let nameTwo = prompt('Как вас зовут?').trim()
name = name.toLowerCase()

if(nameTwo[0] === 'a') {
   let age = prompt('сколько вам лет ?')

   if(age >=20 && age <=40  ) {
      let moneyClub = prompt('Сколько у вас на кармане денег ?')

      if(moneyClub >100 )  {
         let people = prompt('Вас сколько ?')

         if(people <=5) { 
            alert('Добро пожаловать !')
         } else {
            alert('Вас много !')
         }
      } else {
            alert('У вас мало денег ! ')
         }
   }  else {
      alert(' Ваш возраст не подходит ! ')
    }
}else {
   alert('Ваше имя не подходит ! ')
}



// 5 задания 


    let arr = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut au`tem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
  
            "completed": true
        },
        {
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false
        },
        {
            "userId": 1,
            "id": 6,
            "title": "qui ullam ratione quibusdam voluptatem quia omnis",
            "completed": false
        },
        {
            "userId": 1,
            "id": 7,
            "title": "illo expedita consequatur quia in",
            "completed": false
        },
        {
            "userId": 1,
            "id": 8,
            "title": "quo adipisci enim quam ut ab",
            "completed": true
        },
        {
            "userId": 1,
   
            "id": 9,
            "title": "molestiae perspiciatis ipsa",
            "completed": false
        },
        {
            "userId": 1,
            "id": 10,
            "title": "illo est ratione doloremque quia maiores aut",
            "completed": true
        },
    ]
    let a = {
        count: 0,
        arr: []
    }
   
    let b = {
        count: 0,
        arr: []
    }
   let filtered = arr.filter(item => {
      if( item.completed === true){
          a.arr.push(item)
          a.count++
      }else {
        b.arr.push(item)
        b.count++
      }
         })
  
  
  
  console.log(a);
  console.log(b);
