---
title: GO基础
date: 2021-08-18
categories:
 - go
tags:
 - go
sidebar: 'auto'
---
---
# GO基础

## 导入

go语言通过import导入，可以括号分组导入，也可以逐个导入

```go
import "fmt"
import "math"
```

```go
import (
	"fmt"
	"math"
)
```

官方推荐使用分组导入

## 导出名

在Go中，如果一个名字以大写字母开头，那么它就是已导出的。例如在math包中的Pi，而如果是以小写字母开头，如pi。已经导出的在包外部是可以被引用的，就如同在java中的公有，而未导出的在包外部是不可用的，如同java中的protected。

## 函数

在golang中，函数可以没有参数或者接受多个参数

例如这里的add函数，可以接收两个int类型的参数，函数的类型在参数之后。

```go
package main

import "fmt"

func add(x int, y int) int {
   return x + y
}

func main() {
   fmt.Println(add(42, 13))
}
```

当连续两个或多个函数的已命名形参类型相同时，除了最后一个类型之外，其他的都是可以忽略的。即连续的两个，前面的可以忽略，只要保留最后一个类型。

```go
package main

import "fmt"

func add(x, y int) int {
	return x + y
}

func main() {
	fmt.Println(add(42, 13))
}

```

多个返回值

函数可以返回任意数量的返回值

例如这里的swap函数

```go
package main

import "fmt"

func swap(x, y string) (string, string) {
   return y, x
}

func main() {
   a, b := swap("hello", "world")
   fmt.Println(a, b)
}
```

而go的函数有一个特点就是，函数的返回值是可以命名的，它将会被认为是定义在函数初始位置的变量。从而在我们返回值的时候，就可以不用特定指出返回什么。

```go
package main

import "fmt"

func split(sum int) (x, y int) {
	x = sum * 4 / 9
	y = sum - x
	return
}

func main() {
	fmt.Println(split(17))
}
```

## 变量的初始化

变量在声明的同时进行初始化，这与其他的编程语言类似。

```go
package main

import "fmt"

var i, j int = 1, 2

func main() {
	var c, python, java = true, false, "no!"
	fmt.Println(i, j, c, python, java)
}
```

## 短变量声明

在go语言中，可以使用:=代替var进行变量声明。

但是函数外的每个语句都必须以关键字开始，所以函数外是不能使用:=的。

```go
package main

import "fmt"

func main() {
	var i, j int = 1, 2
	k := 3
	c, python, java := true, false, "no!"

	fmt.Println(i, j, k, c, python, java)
}
```

## 基本类型

go的基本类型有bool,string,int8~64,uint8~64,unitptr,byte,rune,float32~64,complex64~128

对于complex变量，使用的使用，虚数一定要指明i前面的数字。

`int`, `uint` 和 `uintptr` 在 32 位系统上通常为 32 位宽，在 64 位系统上则为 64 位宽。 当你需要一个整数值时应使用 `int` 类型，除非你有特殊的理由使用固定大小或无符号的整数类型。

## 零值

对于没有进行初始化的变量，声明会赋予它们零值

数值类型是0，布尔类型是false，字符串是""

```go
package main

import "fmt"

func main() {
   var i int
   var f float64
   var b bool
   var s string
   fmt.Printf("%v %v %v %q\n", i, f, b, s)
}
```

## 类型转换

表达式 `T(v)` 将值 `v` 转换为类型 `T`。

一些关于数值的转换：

```go
var i int = 42
var f float64 = float64(i)
var u uint = uint(f)
```

或者，更加简单的形式：

```go
i := 42
f := float64(i)
u := uint(f)
```

与 C 不同的是，Go 在不同类型的项之间赋值时需要显式转换。试着移除例子中 `float64` 或 `uint` 的转换看看会发生什么。

go中没有隐式转换。

## 类型推导

在声明一个变量而不指定其类型时（即使用不带类型的 `:=` 语法或 `var =` 表达式语法），变量的类型由右值推导得出。

新定义的变量，类型和右边的那个变量相同。

但是如果右边是没有指定类型的数值常量时，新变量的类型就有多种可能，取决于变量的精度。

```go
i := 42           // int
f := 3.142        // float64
g := 0.867 + 0.5i // complex128
```

## 常量

常量的声明与变量类似，只不过不使用var，使用const

但常量的类型有限制，可以是字符、字符串、布尔值或者数值。

常量不能够使用：=声明

```go
package main

import "fmt"

const Pi = 3.14

func main() {
	const World = "世界"
	fmt.Println("Hello", World)
	fmt.Println("Happy", Pi, "Day")

	const Truth = true
	fmt.Println("Go rules?", Truth)
}
```

## 数值常量

数值常量是高精度的 **值**。

一个未指定类型的常量由上下文来决定其类型。

```go
package main

import "fmt"

const (
   // 将 1 左移 100 位来创建一个非常大的数字
   // 即这个数的二进制是 1 后面跟着 100 个 0
   Big = 1 << 100
   // 再往右移 99 位，即 Small = 1 << 1，或者说 Small = 2
   Small = Big >> 99
)

func needInt(x int) int { return x*10 + 1 }
func needFloat(x float64) float64 {
   return x * 0.1
}

func main() {
   fmt.Println(needInt(Big))
   fmt.Println(needInt(Small))
   fmt.Println(needFloat(Small))
   fmt.Println(needFloat(Big))
}
```

这里尝试输出needInt(Big)，发现报错，因为Big已经溢出了，超过了int能表示的最大范围。

## iota

```golang
package main

const (
   b1 = iota
   b2
   b3
   b4
   _
   b5
)

func main() {
   println(b1)
   println(b2)
   println(b3)
   println(b4)
   println(b5)

}
```

```result
0
1
2
3
5
```

可以看到，iota是从0开始的，遇到_站位仍然会继续计数

```go
package main


const (
   c1 = iota //0
   c2 = 100  //100
   c3        //100
   c4        //100
)

func main() {
   println(c1)
   println(c2)
   println(c3)
   println(c4)

}
```

```result
0
100
100
100
```

这里可以看到，iota使用必须是连续的。

```go
package main

const (
   d1 = iota //0
   d2 = 100  //100
   d3 = iota //2
   d4        //3
)

func main() {
   println(d1)
   println(d2)
   println(d3)
   println(d4)

}
```

```result
0
100
2  
3  
```

这里可以看到，iota中间隔了其他变量，可以再次使用iota连上，但是中间会被占位。

```go
package main

const (
   d1, d2 = iota + 1, iota + 2 //1 2
   d3, d4 = iota + 1, iota + 2 //2 3
)

func main() {
   println(d1)
   println(d2)
   println(d3)
   println(d4)

}
```

```result
1
2
2
3
```

这里可以看到，在同一行，iota的值是不变的，不管有多少个变量

### iota实际使用

个人感觉使用情况比较少，一般应该用在一些常量，并且是有规律的常量上

```GO
package main

const (
   _  = iota
   KB = 1 << (10 * iota)
   MB = 1 << (10 * iota)
   GB = 1 << (10 * iota)
   TB = 1 << (10 * iota)
   PB = 1 << (10 * iota)
)

func main() {
   println(KB)
   println(MB)
   println(GB)
   println(TB)
   println(PB)

}
```

例如这里的存储大小计算
