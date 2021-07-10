gost转发记录

现在中转鸡和落地鸡上安装gost原版脚本

wget -N --no-check-certificate https://github.com/ginuerzh/gost/releases/download/v2.11.0/gost-linux-amd64-2.11.0.gz && gzip -d gost-linux-amd64-2.11.0.gz
mv gost-linux-amd64-2.11.0 gost
chmod +x gost

之后在两台机器root目录新建问价gost.json
首先以编辑中转鸡
分为普通中转和加密中转格式如下

{
"Routes": [
{"ServeNodes":["tcp://:30080/hk.cf-1.fevers.cyou:80","udp://:30080/hk.cf-1.fevers.cyou:80"]},
{"ServeNodes":["tcp://:27866/lessweb.eries.fun:443","udp://:27866/lessweb.eries.fun:443"]},
{"ServeNodes":["tcp://:23112","udp://:23112"],"ChainNodes":["relay+tls://hk.simongino.xyz:50186"]},
{"ServeNodes":["tcp://:10304","udp://:10304"],"ChainNodes":["relay+tls://do.simongino.xyz:80"]}
    ]
}

落地鸡（注意内网端口）分别以nat鸡和vps举例

{
"Routes": [
{"ServeNodes":["ss://AEAD_CHACHA20_POLY1305:密码@:8888","ssu://AEAD_CHACHA20_POLY1305:密码@:8888"]}, 
{"ServeNodes":["relay+tls://:14887/:8888"]}
]
}

{
"Routes": [
{"ServeNodes":["ss://AEAD_CHACHA20_POLY1305:密码@:12300","ssu://AEAD_CHACHA20_POLY1305:密码@:12300"]}, 
{"ServeNodes":["relay+tls://:80/:12300"]}
]
}

./gost -C gost.json
最后在github下载gost.service https://github.com/SimonGino/gost/releases/download/1/gost.service  文件放入两台机器/usr/lib/systemd/system/目录下
然后运行一下命令
systemctl daemon-reload
systemctl enable gost.service
systemctl start gost.service
systemctl disable gost.service
systemctl stop gost.service

大功告成

***1.***

```shell
wget -N --no-check-certificate https://github.com/ginuerzh/gost/releases/download/v2.11.0/gost-linux-amd64-2.11.0.gz && gzip -d gost-linux-amd64-2.11.0.gz && mv gost-linux-amd64-2.11.0 gost && chmod +x gost
```

***2.创建gost.json***

```shell
vi gost.json
```

***3.***

```shell
cd /usr/lib/systemd/system/ && wget -N --no-check-certificate https://github.com/SimonGino/gost/releases/download/1/gost.service
```

***4.启动***

```shell
systemctl start gost.service && systemctl enable gost.service
```

***停止***

```shell
systemctl stop gost.service && systemctl disable gost.service
```



**流媒体检测**

```shell
bash <(curl -L -s https://raw.githubusercontent.com/lmc999/RegionRestrictionCheck/main/check.sh)
```

**WARP 一键配置脚本**

```shell
# 自动配置 WARP WireGuard 双栈全局网络
bash <(curl -fsSL git.io/warp.sh) d
```

*单栈*

```
# 自动配置 WARP WireGuard IPv4 网络
bash <(curl -fsSL git.io/warp.sh) 4
# 自动配置 WARP WireGuard IPv6 网络
bash <(curl -fsSL git.io/warp.sh) 6
```



```
#停止WARP
systemctl stop wg-quick@wgcf
#重启
systemctl restart wg-quick@wgcf


```

