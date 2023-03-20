{
  let arr1 = ["a", "b", "c"];
  let arr2 = [1, 2, 3];
  arr3 = arr1.concat(arr2);
  console.log(arr3);
}
{
  let arr1 = ["a", "b", "c"];
  arr1.push(1);
  arr1.push(2);
  arr1.push(3);
  console.log(arr1);
}
{
  let arr1 = [1, 2, 3];
  arr1 = arr1.reverse();
  console.log(arr1);
}
{
  let arr1 = [1, 2, 3];
  arr1.push(4);
  arr1.push(5);
  arr1.push(6);
  console.log(arr1);
}
{
  let arr1 = [1, 2, 3];
  arr1.unshift(6);
  arr1.unshift(5);
  arr1.unshift(4);
  console.log(arr1);
}
{
  let arr = ["js", "css", "jq"];
  console.log(arr[0]);
}
{
  let arr = [1, 2, 3, 4, 5];
  arr = arr.slice(0, 3);
  console.log(arr);
}
{
  let arr = [1, 2, 3, 4, 5];
  arr.splice(-4, 2);
  console.log(arr);
}
{
  let arr = [1, 2, 3, 4, 5];
  arr.splice(2, 0, 10);
  console.log(arr);
}
{
  let arr = [3, 4, 1, 2, 7];
  arr.sort((a, b) => {
    return a - b;
  });
  console.log(arr);
}
{
  let arr = ["Привіт, ", "світ", "!"];
  arr.splice(1, 1, "мир");
  arr = arr.join("");
  console.log(arr);
}
{
  let arr = ["Привіт, ", "світ", "!"];
  arr.splice(0, 1, "Поки, ");
  arr = arr.join("");
  console.log(arr);
}
{
  let arr = new Array(1, 2, 3, 4, 5);
  let arr2 = [1, 2, 3, 4, 5];
  console.log(arr, arr2);
}
{
  let arr = [
    ["блакитний", "червоний", "зелений"],
    ["blue", "red", "green"],
  ];
  console.log(arr[0][0], arr[1][0]);
}
{
  let arr = ["a", "b", "c", "d"];
  console.log(arr[0] + "+" + arr[1], arr[2] + "+" + arr[3]);
}
{
  let length = prompt("кількість елементів масиву?");
  let arr = new Array(length);
  for (let i = 0; i <= length; ++i) {
    arr[i] = i;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      document.writeln(`<p>${arr[i]}</p>`);
    } else {
      document.writeln(`<span style="background: red">${arr[i]}</span>`);
    }
  }
}
{
  let vegetables = ["Капуста", "Ріпа", "Редиска", "Морковка"];
  document.writeln(vegetables.join(", "));
}
