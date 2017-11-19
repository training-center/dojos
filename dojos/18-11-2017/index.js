
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
  newParams = params.slice(0,4);

  return newParams.reduce((a,b)=>{
    return a+b;
  });
}

const maxSum = (params) =>
{
  let newParams = sortParams(params);
  newParams = params.slice(1,5);

  return newParams.reduce((a,b)=>{
    return a+b;
  });
}

module.exports = {minMaxSum,minSum,maxSum}
