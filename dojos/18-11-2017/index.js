
const minMaxSum = (params) =>
{
  let maxNumbersSum = maxSum(params);
  let minNumbersSum =  minSum(params);

  return `${minNumbersSum} ${maxNumbersSum}`;
}

const sortParams = (params) => {
  return params.sort((a,b)=>{
    return a > b;
  });
}

const minSum = (params) =>
{
  let newParams = sortParams(params);
  newParams.pop();

  console.log(newParams)
  return newParams.reduce((a,b)=>{
    return a+b;
  });
}

const maxSum = (params) =>
{
  let newParams = sortParams(params);
  newParams.shift();

  return newParams.reduce((a,b)=>{
    return a+b;
  });
}

module.exports = {minMaxSum,minSum,maxSum}
