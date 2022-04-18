/*
 * @Author: yhf 
 * @Date: 2021-10-Su 08:10:33 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-10-Su 08:10:33 
 */
const team=["易建联","郭艾伦","小川","赵继伟","周琦"];

const [captain,assistant,...players]=team;
console.log(captain,assistant,players);

function sortNumbers(...numbers) {
    console.log(numbers);
    return numbers.sort((a,b)=>a-b)
}
sortNumbers(1,2,3);
