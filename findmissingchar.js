function findMissingChar(str1, str2){
    let length = 0 
    for (let chrpos = 0; chrpos < str1.length; chrpos++){
        let chr = str1[chrpos]
        if (str2.indexOf(chr) === -1){
            return chr
        }
    }
    for (let chrpos = 0; chrpos < str2.length; chrpos++){
        let chr = str2[chrpos]
        if (str1.indexOf(chr) === -1){
            return chr
        }   
    }
    if (str1.length < str2.length){
        length = str2.length
    } else {
        length = str1.length
    }
    for (let pos = 0; pos < length; pos++){
        let chr1 = str1[pos];
        let chr2 = str2[pos];
        if (chr1 !== chr2){
            if (chr1 === undefined){
                return chr2
            }
            if (chr2 === undefined){
                return chr1
            }
        }
    }
}
console.log(findMissingChar('xx', 'xyx'));// 'y'
console.log(findMissingChar('mm', 'm'));// 'm'
console.log(findMissingChar('abcd', 'dbc'));// 'a'
console.log(findMissingChar('dgrhsw','hrgwsdx')); // 'x'
console.log(findMissingChar('ddd', 'dddd'));// 'd'
console.log(findMissingChar('xddxdd', 'xddxddx')); //'x'