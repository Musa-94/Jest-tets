export const getLetters = word => {
    let a = word.length
    let b = '';
    
    for (let i = 0; i < a; i++) {
        b += word.charAt(i) + '\n';
    }
    console.log(b);
    return b;
}

