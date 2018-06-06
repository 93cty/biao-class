/* 打印出“我叫王花花，我今年18岁了” */

var person = {
    name: '王花花',
    age: 18,
}

var a = '我叫' + person.name + ',我今年' + person.age + '岁了';
console.log(a);

/* 打印出“我叫李拴蛋，我老婆叫王花花，今年18岁了” */

person = {
    name: '李拴蛋',
    wife: {
        name: '王花花',
        age: 18
    }
}
var b = `我叫` + person.name + `,我老婆叫` + person.wife.name + `,今年` + person.wife.age + `岁了`
console.log(b)


/* 打印出“我叫李拴蛋，我老婆一共有200块” */

person = {
    name: '李拴蛋',
    wife: {
        name: '王花花',
        age: 18,
        huabei: 1000,
        balance: 1200
    },
}
var c = `我叫` + person.name + `,我老婆一共有` + (person.wife.balance - person.wife.huabei) + `块`
console.log(c)


/* 打印出“我叫李拴蛋，我丈人有3个朋友” */

person = {
    name: '李拴蛋',
    wife: {
        name: '王花花',
        dad: {
            friends: ['王一', '王二', '李三']
        }
    },
}
var d = `我叫` + person.name + `,我丈人有` + person.wife.dad.friends.length + `个朋友`
console.log(d)


/* 打印出“我叫李拴蛋，我丈人的第一个朋友叫王一，第三个朋友叫李三” */

person = {
    name: '李拴蛋',
    wife: {
        name: '王花花',
        dad: {
            friends: [{
                name: '王一',
                children: 1,
                averageScore: 44
            }, {
                name: '王二',
                children: 3,
                averageScore: 98
            }, {
                name: '李三',
                children: 5,
                averageScore: 87
            }]
        }
    },
}
var e = `我叫` + person.name + `,我丈人的第一个朋友叫` + person.wife.dad.friends[0].name + `,第三个朋友叫` + person.wife.dad.friends[2].name
console.log(e)


/* 打印出“我叫李拴蛋，我丈人朋友们的孩子们的平均分是85.888888888” */

person = {
    name: '李拴蛋',
    wife: {
        name: '王花花',
        dad: {
            friends: [{
                name: '王一',
                children: 1,
                averageScore: 44
            }, {
                name: '王二',
                children: 3,
                averageScore: 98
            }, {
                name: '李三',
                children: 5,
                averageScore: 87
            }]
        }
    },
}
// var f = `我叫` + person.name + `,我丈人的朋友们的孩子们的平均分是`
//总分
//var g = person.wife.dad.friends[0].averageScore * person.wife.dad.friends[0].children + person.wife.dad.friends[1].averageScore * person.wife.dad.friends[1].children + person.wife.dad.friends[2].averageScore * person.wife.dad.friends[2].children
//总人数
//var h = person.wife.dad.friends[0].children + person.wife.dad.friends[1].children + person.wife.dad.friends[2].children
//平均分
//var i = f + g / h
//console.log(i)

//-----------------------------------------

// var f = `我叫` + person.name + `,我丈人的朋友们的孩子们的平均分是`
// var g = person.wife.dad.friends
// var h = g[0].averageScore * g[0].children + g[1].averageScore * g[1].children + g[2].averageScore * g[2].children
// var i = g[0].children +g[1].children +g[2].children
// var j = f + h/i
// console.log (j)

//------------------------------------------

var total = 0;
var num = 0;
var per = person.wife.dad.friends;
for (var i = 0; i < per.length; i++) {
    total = total + per[i].averageScore * per[i].children;
    num = num + per[i].children;
}
var x = `我叫` + person.name + `,我丈人的朋友们的孩子们的平均分是` + total / num;
console.log(x);