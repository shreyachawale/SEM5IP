const fetchNum = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const number = 11;
            if(number > 10) resolve(number);
            else reject("failed to fulfil promise");
        }, 100);
    });
};

const doubleNum = (num) => {
    return num*2;
};
const main = async() => {
    try {
        const number = await fetchNum();
        console.log(number);

        const doubnum = doubleNum(number);
        console.log(doubnum);
    }catch(error){
        console.log(error);
    }
};

main();