# Zadania na przećwiczenie różnego rodzaju HOF'ów.

Do wszystkich zadań napiszcie najpierw program bez wykorzystania HOF a zatem z (jeżeli dacie rady, to również z wykorzystaniem wyrażenia lambda), porównajcie ilość kodu oraz "zrozumiałość kodu", który musieliście napisać w obu przypadkach.

## Zadanie 1

Zakładając że macie pewnej tablicy, która zawiera dowolnych liczb, stwórzcie nowej tablicy która zawiera kwadraty liczb podanej tablicy.

```
Przykładowa tablica danych:

const arr1 = [2, 3, 1, 5, 8, 6];
```

## Zadanie 2

Zakładając że macie pewnej tablicy, która składa się z liczb (dowolna ilość liczb) wypiszcie ich iloczyn.

```
Przykładowa tablica danych:

const numbers = [12, 6, 99, 34, 51, 83, 35, 95];
```

## Zadanie 3

Zakładając, że macie niektórej tablicy, która zawiera obiekty z imiem, nazwiskiem oraz wiekiem osób. Napiszcie program (funkcję) który sprawdza wszystkich osób z listy oraz tworzy nowej tablicy, zawierającej tylko pełnoletnich osób.

```
Przykładowa tablica danych:

const persons = [
    { name: "Maks", age: 20 },
    { name: "Maja", age: 15 },
    { name: "Sonya", age: 18 },
    { name: "Jakub", age: 19 },
    { name: "Jan", age: 16 },
    { name: "Michał", age: 25 }
];
```

## Zadanie 4

Zakładając że macie pewnej tablicy, w której znajdują się lata urodzenia jakichś różnych osób, stwórz nowej tablicy zawierającej wiek tych osób.

```
Przykładowa tablica danych:

const birthYear = [1997, 2000, 2002, 1999, 1992, 2008];
```

## Zadanie 5

Zakładając że macie pewnej tablicy, która imituje bazę danych twitów Twittera pewnego użytkownika, ktora składa się z obiektów, każdy z których zawiera w sobie tekst tweetu, tablicy wykorzystanzch hashtagów, ilość lajków oraz ilość retweetów. Policzcie sumę wszystkich lajków (lub/oraz retweetów).

```
const tweets = [
    { text: "I will have today a big day full of #webstack, #teaching and #coding", likes: 1429, retweet: 85, hashtags : ["webstack", "teaching", "coding"] },
    { text: "Doing some tasks for #westack. Feels #exciting!", likes: 315, retweet: 19, hashtags : ["webstack", "exciting"] },
    { text: "Having a day full of #work and #coding", likes: 329, retweet: 22, hashtags : ["work", "coding"] },
    { text: "#vibing all day and night long! Friendly #reminder: you should visit my #spotify and #youtube to be ;)", likes: 2621, retweet: 152, hashtags : ["vibing", "reminder", "spotify", "youtube"] },
    { text: "Just created a new #awesome #webhook for guys from #webstack!", likes: 415, retweet: 39, hashtags : ["awesome", "webhook", "webstack"] }
];
```

## Zadanie 6

Zakładając że macie pewnej tablicy, która imituje bazę danych twitów Twittera, ktora składa się z obiektów, każdy z których zawiera w sobie nick użytkownika, tekst tweetu, ilość lajków, ilość retweetów oraz tablicy, w której znajdują się wszystkie wykorzystane w tym tweecie hashtagi. Stwórzcie innej tablicy, która będzie zawierała tylko tweety z konkretnym hashtagiem (np #webstack).

```
const tweets = [
    { user: "maksszaszkow", text: "I will have today a big day full of #webstack, #teaching and #coding", likes: 1429, retweet: 85, hashtags : ["webstack", "teaching", "coding"] },
    { user: "lev.dream", text: "Doing some tasks for #westack. Feels #exciting!", likes: 315, retweet: 19, hashtags : ["webstack", "exciting"] },
    { user: "realJakubNajman", text: "Having a day full of #work and #coding", likes: 329, retweet: 22, hashtags : ["work", "coding"] },
    { user: "vibing", text: "#vibing all day and night long! Friendly #reminder: you should visit my #spotify and #youtube to be ;)", likes: 2621, retweet: 152, hashtags : ["vibing", "reminder", "spotify", "youtube"] },
    { user: "maizyy", text: "Just created a new #awesome #webhook for guys from #webstack!", likes: 415, retweet: 39, hashtags : ["awesome", "webhook", "webstack"] }
];
```

### Z poważeniem, Sonya
