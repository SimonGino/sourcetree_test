## 安装SS命令

## 一键脚本

#### 通过 wget 命令安装 via wget to install script

```shell
wget --no-check-certificate https://raw.githubusercontent.com/jinwyp/one_click_script/master/trojan_v2ray_install.sh && chmod +x ./trojan_v2ray_install.sh && ./trojan_v2ray_install.sh
```

## xray一键安装

```
source <(curl -sL https://multi.netlify.app/v2ray.sh) --zh
```

## 升级命令(保留配置文件更新)
```
source <(curl -sL https://multi.netlify.app/v2ray.sh) -k
```

## 卸载命令
```
source <(curl -sL https://multi.netlify.app/v2ray.sh) --remove
```

## 命令行参数
```bash
v2ray/xray [-h|help] [options]
    -h, help             查看帮助
    -v, version          查看版本号
    start                启动 V2Ray
    stop                 停止 V2Ray
    restart              重启 V2Ray
    status               查看 V2Ray 运行状态
    new                  重建新的v2ray json配置文件
    update               更新 V2Ray 到最新Release版本
    update [version]     更新 V2Ray 到指定版本
    update.sh            更新 multi-v2ray 到最新版本
    add                  新增端口组
    add [protocol]       新增一种协议的组, 端口随机, 如 v2ray add utp 为新增utp协议
    del                  删除端口组
    info                 查看配置
    port                 修改端口
    tls                  修改tls
    tfo                  修改tcpFastOpen
    stream               修改传输协议
    cdn                  走cdn
    stats                v2ray流量统计
    iptables             iptables流量统计
    clean                清理日志
    log                  查看日志
    rm   
```

## BBR安装

卸载内核

```shell
wget -N --no-check-certificate "https://github.000060000.xyz/tcp.sh" && chmod +x tcp.sh && ./tcp.sh
```

或

```shell
wget -O tcp.sh "https://git.io/coolspeeda" && chmod +x tcp.sh && ./tcp.sh
```

不卸载内核

```shell
wget -N --no-check-certificate "https://github.000060000.xyz/tcpx.sh" && chmod +x tcpx.sh && ./tcpx.sh
或
wget -O tcpx.sh "https://git.io/JYxKU" && chmod +x tcpx.sh && ./tcpx.sh

```

## 流媒体解锁

```shell
bash <(curl -L -s https://raw.githubusercontent.com/lmc999/RegionRestrictionCheck/main/check.sh)
```

只检测IPv4结果：

```
bash <(curl -L -s https://raw.githubusercontent.com/lmc999/RegionRestrictionCheck/main/check.sh) 4
```

只检测IPv6结果：

```powershell
bash <(curl -L -s https://raw.githubusercontent.com/lmc999/RegionRestrictionCheck/main/check.sh) 6
```



