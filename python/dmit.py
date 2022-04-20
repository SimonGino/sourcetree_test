# ！/usr/bin/env python
import requests
import time
from bs4 import BeautifulSoup
from pypushdeer import PushDeer


def dmit():
    resp = requests.get('https://www.dmit.io/aff.php?aff=184&gid=1')
    soup = BeautifulSoup(resp.text, 'html.parser')
    hkg = "PVM.HKG.Lite.TINY"
    tyo = "PVM.TYO.Lite.TINY"
    oos = 'OutofStock'
    # 取得各篇 blog 的所有文字

    divs = soup.find_all('div', 'cart-products-box')
    pushdeer = PushDeer(pushkey="填入自己的key")
    # print(divs)
    for div in divs:
        # 方法一, 使用 text (會包含許多換行符號)
        # print(div.text)
        div = div.text.replace(' ', '').replace('\n', '').replace('\r', '')

        if hkg in div and oos not in div:
            pushdeer.send_text(hkg + ":" + "6.90USD")
        elif tyo in div and oos not in div:
            pushdeer.send_text(tyo + ":" + "6.90USD")
        # 會自動去掉空白字符串


def time_print():
    dmit()


def loop_monitor():
    while True:
        time_print()
        time.sleep(60)


if __name__ == '__main__':
    loop_monitor()
