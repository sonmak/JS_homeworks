# 3 podstawowe zadania z arrayów sprawdzające znajomość działania na arrayach oraz wbudowane metody.

## Wstęp

Zainteresuj się metodami dostępnymi przy operacji na arrayach, użyte w tym ćwiczeniu metody to:

```
arr.pop();
arr.push();
arr.shift();
arr.unshift();
arr.lenght;
arr.slice();
arr.indexof(val);
```


## Zadanie 1

Napisz funkcję, która będzie pobierała array o nazwie 'samochodny' a wewnątrz definicji funkcji znajdziemy pętle, która będzie iterować po całej długości arraya i przy wykonywaniu pętli będzie wypisywała do konsoli element w arrayu o indeksie zgodnym z iteratorem.

## Zadanie 2 

Napisz funckję, która będzie pobierała 3 arraye n-elementowe (jednak takich, żeby ilość elementów w każdym z nich byłą zgodna!) gdzie później stworzy ona nowego arraya gdzie każdym elementem będzie jedna z naszych 'pod arrayów'. Następnie zaimplementuj dwie pętle w instrukcji funkcji. Niech jeden iterator iteruje po elementach arraya matki a druga pętla iteruje po elementach dzieciach. Tak znajdź sposób żeby wypisać wszystkie elementy w arrayu. 

## Zadanie 3 

Napisz funckję, która używając 3 arrayów z poprzedniego zadania skonsoliduje je w jednego arraya jednowymiarowego.

```
arr1=[va11,val12];
arr2=[va21,val22];
arr3=[va31,val32];

maxArr=[val11, val12, val21, val22, val31, val33];
```

 Następnie przeprowadź 3 operacje: pop, push, shift. Po tym wypisz do konsoli swojego arraya i zobacz co się w nim zmieniło. Następnie przeprowadź kolejne 3 operacje: unshift, indexOf, slice i pop. Wypisz po tym oba utworzone arraya i wskaż różnicę.
