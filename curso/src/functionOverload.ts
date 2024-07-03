type StringOrArray = string[] | string;


function reverse(str: string) : string;
function reverse(strArr: string[]) : string[];
function reverse(stringOrArray:StringOrArray): StringOrArray {
    return typeof stringOrArray === "string" ? stringOrArray.split("").reverse().join("") : stringOrArray.slice().reverse()
}

