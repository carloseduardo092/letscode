// true
// true, [], {}, número diferente de 0, string não vazia
//falsy: null, undefined, 0, "" Nan

// console.log(!![], !!{}, !!1, !!'afsfa')
if ([] && {} && 1 && 'afs' && true)  {
    console.log('tudo é truthy')
}


console.log(!!null, !!undefined, !!0, !!NaN)