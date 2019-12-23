const node = (value) => {
  return {
    value,
    next: null
  }
}

const listaEncadeada = () => {
  let tam = 0;
  let head = null;

  const add = (v) => {
    if (!head) {
      head = node(v);
      tam ++;

      return head
    }

    let data = head;

    while(data.next){
      data = data.next;
    }

    data.next = node(v);
    tam++;

    return data.next;
  }

  return {
    add: (value) => add(value),
    lenght: () => tam,
    print: () => console.log(JSON.stringify(head))
  }
}

const list = listaEncadeada();
console.log(list.lenght());
list.add(1);
list.add(2);
list.add(3);
list.add(5);
list.add(8);
console.log(list.lenght());
list.print();