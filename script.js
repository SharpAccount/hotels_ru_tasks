const computersAmount = (amount) => {
    let ans = "компьютер";
    const exceptions = {1: "", 2: "а", 3: "а",4: "а"}
    if ((amount % 10 in exceptions) && !((amount > 9 && amount < 21) || (amount % 100 > 9 && amount % 100 < 21))) {
        ans += exceptions[amount % 10];
        alert(amount + " " + ans);
        return amount + " " + ans;
    } else {
        ans += "ов";
        alert(amount + " " + ans);
        return amount + " " + ans;
    }
}

const callFindDivs = (input) => {
    input = input.split(" ").map(el => parseInt(el, 10));
    findDivs(input);
}

const findDivs = (numbers) => {
    let ans = [];
    for (let i = 1; i <= Math.max(...numbers); i++) {
        if (numbers.every((num) => num % i === 0)) {
            ans.push(i);
        }
    }
    alert(ans.length > 0 ? ans : "неверный ввод");
    return ans.length > 0 && ans;
}

const simpleNumbers = (numbers) => {
    numbers = numbers.split(' ').map(el => parseInt(el, 10));
    let ans = []
    let isSimple = true;
    for (let i = numbers[0]; i <= numbers[1]; i++) {
        if (i % 2 === 0 && i != 2) {
            continue;
        } else {
            for (let j = 3; j < parseInt(i**0.5)+1; j++) {
                if (i % j === 0) {
                    isSimple = false;
                    break;
                }
            }
            if (isSimple) {
                ans.push(i);
            } else { isSimple = true}
        }
    }
    alert(ans);
    return ans;
}

const showMultipleTable = (limit) => {
    let result = "   ";
    for (let i = 1; i <= limit; i++) {
        result += i + " ";
    }
    result += "\n";
    for (let i = 1; i <= limit; i++) {
        result += i + " ";
        for (let j = 1; j <= limit; j++) {
            result += (j * i) + " ";
        }
        result += "\n";
    }
    alert(result);
    return result;
}