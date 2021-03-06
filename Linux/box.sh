#!/bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH
Green_font="\033[32m" && Red_font="\033[31m" && Font_suffix="\033[0m"
Info="${Green_font}[Info]${Font_suffix}"
Error="${Red_font}[Error]${Font_suffix}"
echo -e "${Green_font}
#======================================
# Project: shbox
# Version: 0.0.1
# Blog:    https://vpsxb.net/1642/
# usage:   bash <(curl -fsSL https://raw.githubusercontent.com/SimonGino/sourcetree_test/master/Linux/box.sh)
#======================================
${Font_suffix}"

check_root(){
	[[ "`id -u`" != "0" ]] && echo -e "${Error} must be root user !" && exit 1
}

first(){
	
	apt update -y
	apt install git tmux nano vim curl net-tools wget sudo proxychains iperf3 lsof conntrack openssl unzip lsb-release jq ca-certificates python iptables -y && update-ca-certificates
	bash <(curl -fsSL https://raw.githubusercontent.com/jamespan2012/shbox/main/dependencies/tcping.sh)
	bash <(curl -fsSL https://raw.githubusercontent.com/jamespan2012/shbox/main/dependencies/bashrc.sh)
	bash <(curl -fsSL git.io/speedtest-cli.sh)

}

vmess(){

	bash <(curl -fsSL https://raw.githubusercontent.com/wulabing/V2Ray_ws-tls_bash_onekey/master/install.sh)

}

neko-tools(){

	bash <(curl -fsSL http://sh.nekoneko.cloud/tools.sh)

}

hc(){
	
	bash <(curl -fsSL https://raw.githubusercontent.com/jamespan2012/shbox/main/dependencies/jcnf.sh)

}

tcpx(){
	
	bash <(curl -fsSL https://git.io/JYxKU)

}

ddxt(){
	
	bash <(curl -fsSL https://raw.githubusercontent.com/hiCasper/Shell/master/AutoReinstall.sh)

}

nfcheck(){
	
	bash <(curl -fsSL https://raw.githubusercontent.com/lmc999/RegionRestrictionCheck/main/check.sh)

}

yabs(){
	
	bash <(curl -fsSL yabs.sh)

}

lb(){
	
	curl -fsSL http://ilemonra.in/LemonBenchIntl | bash -s fast

}

superbench(){
	
	bash <(curl -fsSL https://raw.githubusercontent.com/jamespan2012/shbox/main/dependencies/superbench.sh)

}

speed(){
	
	curl -fsSL https://raw.githubusercontent.com/jamespan2012/shbox/main/dependencies/superbench.sh | bash -s speed

}

io(){
	
	curl -fsSL https://raw.githubusercontent.com/jamespan2012/shbox/main/dependencies/superbench.sh | bash -s io

}

ipcheck(){
	
	curl ip.p3terx.com -4
	curl ip.p3terx.com -6

}

ss(){
	
	bash <(curl -sL https://s.hijk.art/ss.sh)

}

warp(){
	
	curl -sL https://raw.githubusercontent.com/acacia233/Project-WARP-Unlock/main/run.sh | bash

}

switch(){

	bash <(curl -sL https://raw.githubusercontent.com/SimonGino/sourcetree_test/master/Linux/warp_switch.sh)
	
}

check_root

echo -e "${Info} ???????????????????????????: "
echo -e "1.????????????\n2.??????vmess\n3.neko????????????\n4.????????????\n5.???????????????\n6.??????bbr\n7.??????dd\n8.??????IP\n9.superbench\n10.yabs\n11.LemonBench\n12.IO??????\n13.????????????\n14.??????ss\n15.??????WARP\n16.????????????"
read -p "?????????????????????:" function

	while [[ ! "${function}" =~ ^([1-9]|1[0-8])$ ]]
		do
			echo -e "${Error} ?????????????????????"
			echo -e "${Info} ???????????????" && read -p "?????????????????????:" function
		done

	if [[ "${function}" == "1" ]]; then
		first
	elif [[ "${function}" == "2" ]]; then
		vmess
	elif [[ "${function}" == "3" ]]; then
		neko-tools
	elif [[ "${function}" == "4" ]]; then
		hc
	elif [[ "${function}" == "5" ]]; then
		nfcheck
	elif [[ "${function}" == "6" ]]; then
		tcpx
	elif [[ "${function}" == "7" ]]; then
		ddxt
	elif [[ "${function}" == "8" ]]; then
		ipcheck
	elif [[ "${function}" == "9" ]]; then
		superbench
	elif [[ "${function}" == "10" ]]; then
		yabs
	elif [[ "${function}" == "11" ]]; then
		lb
	elif [[ "${function}" == "12" ]]; then
		io
	elif [[ "${function}" == "13" ]]; then
		speed
	elif [[ "${function}" == "14" ]]; then
		ss	
	elif [[ "${function}" == "15" ]]; then
		warp	
	elif [[ "${function}" == "16" ]]; then
		switch
	else
		echo -e "${Info} ???????????????" && read -p "?????????????????????:" function
	fi
