#!/usr/bin/python
# -*- coding: UTF-8 -*-
# 文件名：client.py

import socket               # 导入 socket 模块

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)         # 创建 socket 对象
s.connect(("10.108.150.37", 1234))        # 绑定端口
s.send("HELLO 我是服务端")
print(s.recv(1024))
s.close()