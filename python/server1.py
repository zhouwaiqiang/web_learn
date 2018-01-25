#!/usr/bin/python
# -*- coding: UTF-8 -*-
# 文件名：server.py

import socket               # 导入 socket 模块

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)         # 创建 socket 对象
s.bind(("10.108.150.37", 1234))        # 绑定端口

s.listen(5)                 # 等待客户端连接
while True:
    c, addr = s.accept()     # 建立客户端连接。
    print('连接地址：', addr)
    data = c.recv(1024)
    print("收到的是:", data)
    c.send(data)
    c.close()                # 关闭连接
