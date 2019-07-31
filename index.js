let css = 'background: #222; color: #f28e1c';

for (let bottleNumber = 100; 1 <= bottleNumber; bottleNumber--) {
  console.info(
    `%c${bottleNumber} bottles of beer on the wall, ${bottleNumber} bottles of beer 🍻`,
    css
  );
  console.info(
    `%cTake one down and pass it around, ${bottleNumber -
      1} bottles of beer on the wall 🍺`,
    css
  );
}
