export async function sleep(ms: number): Promise<void> {
return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getDupElement(arr: number[]) : Promise<number[]> {
    const myDic: {[key: number]: number} = {};

    for(let i =0; i< arr.length; i++) {
        if(myDic[arr[i]] == undefined) {
            myDic[arr[i]] = 1;
        } else {
            myDic[arr[i]] = Number(myDic[arr[i]]) + 1;
        }
    }

    const res:number[] = [];
    for(const k in myDic) {
        if(Number(k.valueOf()) != 1) {
            res.push(Number(k));
        }
    }

    return res;

}