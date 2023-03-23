---
title: IO流
date: 2021-04-18
categories:
 - Java
tags:
 - Java基础
sidebar: 'auto'
---

---

## 一、概述和分类

1.  介绍
    - IO：输入输出
    - 流：抽象概念，对数据传输的总称。
    - IO流就是用来处理数据传输问题的。
2.  分类
    - 按照数据的流向
        - 输入流
        - 输出流
    - 按照数据类型
        - 字节流
        - 字符流
3.  使用场景
    - 文本文件：字符流
    - 图片、音频等二进制文件：字节流
    - 不确定文件：字节流

## 二、字节流

1.  字节流抽象基类
    - InputStream：是所有输入流的超类
    - OutputStream：是所有输出流的超类
    - 子类名都是以父类名作为后缀的
2.  使用字节输出流写数据的步骤
    - 创建字节输出流对象(调用系统功能创建文件，让自己输出流对象指向文件)
    - 调用字节输出流对象的写数据方法
    - 释放资源
3.  一些方法
    - 字节输出流
        - 构造方法：
            - **FileOutputStream(String name)**
                创建文件输出流以指定的名称写入文件。 将创建一个新的FileDescriptor对象来表示此文件连接。
            - **FileOutputStream(File file)**
                创建文件输出流以写入指定的File对象表示的文件。
            - **FileOutputStream(File file, boolean append)**
                创建文件输出流以写入由指定的。第二个boolean若为true则写入文件的末尾而不是开头。
            - **FileOutputStream(FileDescriptor fdObj)**
                创建文件输出流以写入指定的文件描述符，表示与文件系统中实际文件的现有连接。
            - **FileOutputStream**(FileDescriptor fdObj)
                创建文件输出流以写入指定的文件描述符，表示与文件系统中实际文件的现有连接。
        - **void close()**
            关闭输出流并释放资源
        - **FileChannel getChannel()**
            返回此文件输出流相关联的唯一的FileChannel对象
        - **FileDescriptor getFD()**
            返回此流相关的文件描述符。in,out,err
        - write
            - **void write(byte\[\] b)**
                将 b.length字节从指定的字节数组写入此文件输出流。
            - **void write(byte\[\] b, int off, int len)**
                将 len字节从指定的字节数组开始，从偏移量 off开始写入此文件输出流。
            - **void write(int b)**
                将指定的字节写入此文件输出流。
    - 字节输入流
        - 构造方法
            - **FileInputStream(File file)**
                通过打开与实际文件的连接来创建一个 FileInputStream ，该文件由文件系统中的File对象 file命名。
            - **FileInputStream(FileDescriptor fdObj)**
                通过使用文件描述符 fdObj创建 FileInputStream ，该文件描述符表示与文件系统中的实际文件的现有连接。
                由于文本描述符对象是每个文件独有的，所有获得的输入流对象实际上是来自那个文件的。
            - **FileInputStream(String name)**
                通过打开与实际文件的连接来创建一个 FileInputStream ，该文件由文件系统中的路径名 name命名。
        - **int available()**
            返回从此输入流中可以读取（或跳过）的剩余字节数的估计值，而不会被下一次调用此输入流的方法阻塞。
        - **void close()**
            关闭此文件输入流并释放资源
        - **FileChannel getChannel()**
        - **FileDescriptor getFD()**
        - read
            - **int read()**
                从该输入流读取一个字节的数据。
            - **int read(byte\[\] b)**
                从该输入流读取最多 b.length个字节的数据到一个字节数组。
            - **int read(byte\[\] b, int off, int len)**
                从该输入流读取最多 len个字节的数据到字节数组。
        - **long skip(long n)**
            跳过并从输入流中丢弃 n字节的数据。

## 三、字节缓冲流

- **BufferOutputStream**
    该类实现缓冲输出流。 通过设置这样的输出流，应用程序可以向底层输出流写入字节，而不必为写入的每个字节导致底层系统的调用。
- **BufferedInputStream**
    创建BufferedInputStream将创建一个内部缓冲区数组。 当从流中读取或跳过字节时，内部缓冲区将根据需要从所包含的输入流中重新填充，一次很多字节。

## 四、字符流

1.  介绍
    字符流 = 字节流 \+ 编码表
2.  编码解码方法
    - **byte\[\] getBytes()**
        使用平台的默认字符集将该 String编码为一系列字节
    - **byte\[\] getBytes(String charsetName)**
        使用指定的字符集将该 String编码为一系列字节
    - **String(byte\[\] bytes)**
        使用平台的默认字符集解码指定的字节数组来创建字符串
    - **String(byte\[\] bytes, String charsetName)**
        通过指定的字符集解码指定的字节数组来创建字符串
3.  字符流的编码解码
    - InputStreamReader：从字节流到字符流的桥梁，将字节编码为字符，编码可以由名称指定，也可以明确指定，也可以默认
    - OutputStreamWriter：是从字符流到字节流的桥梁
4.  方法
    1.  InputStreamReader
        - 构造方法
            - **InputStreamReader(InputStream in)**
                创建一个使用默认字符集的InputStreamReader
            - **InputStreamReader(InputStream in, String charsetName)**
                创建一个使用命名字符集的InputStreamReader。
            - **InputStreamReader(InputStream in, Charset cs)**
                创建一个使用给定字符集的InputStreamReader。
            - **InputStreamReader(InputStream in, CharsetDecoder dec)** 创建一个使用给定字符集解码器的InputStreamReader。
        - **void close()**
            关闭流并释放资源
        - **String getEncoding()**
            返回此流使用的字符编码的名称。
        - **int read()**
            读一个字符
        - **int read(char\[\] cbuf,int offset,int length)**
            将字符读入数组的一部分
        - **boolean ready()** 流是否可以被读取
    2.  OutputStreamWriter
        - 构造方法
            - **OutputStreamWriter(OutputStream out)**
                创建一个使用默认字符编码的OutputStreamWriter。
            - **OutputStreamWriter(OutputStream out, String charsetName)**
                创建一个使用命名字符集的OutputStreamWriter。
            - **OutputStreamWriter(OutputStream out, Charset cs)**
                创建一个使用给定字符集的OutputStreamWriter。
            - **OutputStreamWriter(OutputStream out, CharsetEncoder enc)**
                创建一个使用给定字符集编码器的OutputStreamWriter。
        - **Writer append(CharSequence csq)**
            将指定的字符序列附加到此作者。
        - **Writer append(CharSequence csq, int start, int end)**
            将指定字符序列的子序列附加到此作者。
        - **void close()**
            关闭流
        - **void flush()**
            刷新流
        - **String getEncoding()**
            返回此流使用的字符编码的名称。
        - **void write(char\[\] cbuf, int off, int len)**
            写入字符数组的一部分。
        - **void write(int c)**
            写一个字符

## 五、字符缓冲流

1.  BufferedWriter：将文本写入字符输出流，缓冲字符，以提供单个字符，数组和字符串的高效写入，可以指定缓冲区大小，或者可以接受默认大小。默认值足够大，可用于大多数用途。
2.  BufferedReader：从字符输入流读取文本，缓冲字符，以提供字符，数组和行的高效读取，可以指定缓冲区大小，或者可以使用默认大小。默认值足够大，可用于大多数用途。
3.  构造方法
    - \*\*BufferedWriter(Writer out)\*\*创建字符缓冲输出流对象
    - \*\*BufferedReader(Reader in)\*\*创建字符缓冲输入流对象
    - 其他写入，刷新，关闭方法同字符流一致
    - **void newLine()**
        写一行行分隔符，行分隔符字符串由系统属性定义
    - **String readLine()**
        读一行文字。 结果包含行的内容的字符串，不包括任何行终止字符如果流的结尾已经到达，则为null
