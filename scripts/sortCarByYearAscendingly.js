function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini

      let i, j, temp;
      let swapped;
      for (i = 0; i < result.length - 1; i++) 
      {
          swapped = false;
          for (j = 0; j < result.length - i - 1; j++) 
          {
              if (result[j].year > result[j + 1].year) 
              {
                  // Swap arr[j] and arr[j+1]
                  temp = result[j];
                  result[j] = result[j + 1];
                  result[j + 1] = temp;
                  swapped = true;
              }
          }
  
          // IF no two elements were 
          // swapped by inner loop, then break
          if (swapped == false)
          break;
      }
  
  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
