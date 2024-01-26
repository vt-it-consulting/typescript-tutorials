const delay = (ms: number) => new Promise(res => {
    setTimeout(res, ms);
    console.log("adding 2 functions: " + addTwoNumber(1,3));
});

function addTwoNumber(x: number, y: number): number {
    return x + y;
}

addTwoNumber(1,2);

const mainAsync = async () => {
    await delay(1000);
    console.log('1s');
    await delay(1000);
    console.log('2s');
    await delay(1000);
    console.log('3s');
};

mainAsync();


let result =  async () => addTwoNumberAsync(3,3);
console.log("addition is " + result)

async function addTwoNumberAsync(x: number, y: number): Promise<number> {
    return Promise.resolve(x + y);
}

;