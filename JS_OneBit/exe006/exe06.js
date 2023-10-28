let menu = '';
let total = 0;

do {
  menu = prompt(
    'MENU - escolha uma opção' +
    '\n1 -> HAMBÚRGUE - $ 8,00' +
    '\n2 -> PASTEL    - $ 4,00' +
    '\n3 -> SANDUICHE - $ 5,00' +
    '\n4 -> COCA      - $ 3,00' +
    '\n5 -> SAIR'
  );

  switch (menu) {
    case '1':
      total += 8;
      break;
    case '2':
      total += 4;
      break;
    case '3':
      total += 5;
      break;
    case '4':
      total += 3;
      break;
    case '5':
      break;
    default:
      alert('Opção inválida. Por favor, escolha novamente.');
      break;
  }
} while (menu !== '5');

alert(`Total da compra: $ ${total.toFixed(2)}`);

