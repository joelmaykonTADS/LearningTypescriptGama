
<h1 align="center">
  <a name="logo" href="#"><img src="https://www.guiacodigo.com/img/cursos/iniciando_com_typescript/pequena-iniciando_com_typescript_img_63767.png" alt="Bear Stone Smart Home" width="200"></a>
  <br>
  Learning Typescript Gama
</h1>
<h4 align="center">Aprendendo Typescript com aulas do bootcamp da Gama Academy!</h4>
<p align="center"><a align="center" target="_blank" href="https://gama.academy/"><img style="background-size: cover; width: 50px;
height: 50px;" src="https://i.picasion.com/pic90/75a6b894f6d4b9edcc121e3abdf8cbb4.gif" alt="Recent Commits to Bear Stone Smart Home" style="border:0"></a></p>
<div align="center">
  <h4>
    <a href="https://travis-ci.org/CCOSTAN/Home-AssistantConfig"><img src="https://travis-ci.org/CCOSTAN/Home-AssistantConfig.svg?branch=master"/></a>
    <a href="https://github.com/CCOSTAN/Home-AssistantConfig/stargazers"><img src="https://img.shields.io/github/stars/CCOSTAN/Home-AssistantConfig.svg?style=plasticr"/></a>    
    
  </h4>
</div>
<p><font size="3">
 O que é o <strong>Typescript</strong>, surgiu a partir do <strong>Javascript</strong> que é uma liguagem robusta que possui funções contrutoras, tipagem dinâmica, prototypes e possui várias especificações com ES6 e o ES7. Quando usamos as novas implementações providas pelas novas especificações do Javascript, elas não são suportadas nos navegadores mais antigos. O Typescript é um superset do Javascript que é o agrupamento de adicionais que dar a possibilidade de trabalhar com  tipagem estática, interfaces, enums, decorators, generics, dando controle sobre o código, escrevemos o código em Typescript que é transpilado para Javascript.
</p>
<span>
<img style="background-size: cover; width: 350px;
height: 250px;" src="https://miro.medium.com/max/606/1*UIioHehyD5o_6ydf3w2fuw.png" />
<img style="background-size: cover; width: 250px;
height: 250px;" src="https://qph.fs.quoracdn.net/main-qimg-1bb226be271cbb969e55513384f2401d.webp">
</span>
<div align="center"><a name="menu"></a>
  <h4>
    <a href="http://www.vCloudInfo.com/tag/iot">
      Instalação
    </a>
    <span> | </span>
    <a href="https://github.com/CCOSTAN/Home-AssistantConfig#devices">
      Tipos Básicos
    </a>
    <span> | </span>
    <a href="https://github.com/CCOSTAN/Home-AssistantConfig/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc">
      Tipo Never
    </a>
    <span> | </span>
    <a href="https://twitter.com/BearStoneHA">
      Union Type
    </a>
    <span> | </span>
    <a href="https://www.vcloudinfo.com/click-here">
      Type Alias
    </a>
    <span> | </span>
    <a href="https://github.com/CCOSTAN/Home-AssistantConfig/tree/master/config">
      Nulos e opcionais
    </a>
    <span> | </span>
    <a href="https://github.com/CCOSTAN/Home-AssistantConfig#diagram">
      Type assertion
    </a>
    <span> | </span>
    <a href="https://youtube.com/vCloudInfo">
      Interfaces
    </a>
    <span> | </span>
    <a href="https://amzn.to/2HXSx2M">
      Classes
    </a>
    <span> | </span>
    <a href="https://amzn.to/2HXSx2M">
      Target do Typescript
    </a>
    <span> | </span>
    <a href="https://amzn.to/2HXSx2M">
      modificadores de acesso
    </a>
    <span> | </span>
    <a href="https://amzn.to/2HXSx2M">
      Herança
    </a>
  </h4>
</div>

![Screenshot of Home Assistant Header](https://i.imgur.com/vjDH1LJ.png)

As of 2018, I have migrated everything to a Docker based platform.  You can read all about it here:
[Migration Blog Post](http://www.vCloudInfo.com/2018/02/journey-to-docker.html)
<hr>

#### <a name="software"></a>Notable Software on my Laptop Host:
* [Docker](https://Docker.com) - Docker runs on a Ubuntu Server Core base. [Video on Ubuntu Upgrades](https://youtu.be/w-YNtU1qtlk)
* [Youtube Video on Upgrading Home Assistant in Docker](https://youtu.be/ipatCbsY-54) - Be sure to Subscribe to get all Home Assistant videos.
* [Home Assistant Container](https://home-assistant.io/) - It all starts here.
* The amazing [Floorplan](https://github.com/pkozul/ha-floorplan) project to help visualize my smarthome.
* SSL via [SSLS](https://SSLS.com) - 5 Bucks A Year! - Keeps me safe! - [Youtube Video on Port Forwarding](https://youtu.be/y5NOP1F-xGU) - On my Arris TG1682 Modem
* [Docker-Compose.yaml](https://github.com/CCOSTAN/Docker_Support) - Realtime list of all the Containers.
* [Dasher Container](https://github.com/maddox/dasher) to leverage those cheap [Amazon Dash Buttons](https://youtu.be/rwQVe6sIi9w)
* [HomeBridge Container](https://github.com/nfarina/homebridge) for full HA <-> Homekit compatibility.
* [Unifi controller Container to manage](https://github.com/jacobalberty/unifi-docker) [APs](http://amzn.to/2mBSfE9)

![Screenshot of SmartHome](https://lh3.googleusercontent.com/-vKGF5gdz_VY/WVpP7qjsmjI/AAAAAAADVZ4/sGyiS1PjouUQxrEbWVfot6raxcElv4r-wCHMYCw/s1600/clip_image001%255B4%255D)
Lots of my gear comes from [BetaBound](https://goo.gl/0vxT8A) for Beta Testing and reviews.
Be sure to use the referral code 'Reliable jaguar' so we both get priority for Beta Tests!

#### <a name="diagram"></a>Smart Home Diagram - Get your icons (<a href="https://www.vcloudinfo.com/2018/07/the-bear-stone-home-assistant-icon.html">here</a>).
Here is how all the parts talk to each other.  Keep reading to see code examples and explanations.
![Smart Home Diagram](https://raw.githubusercontent.com/CCOSTAN/Home-AssistantConfig/master/config/www/custom_ui/floorplan/images/branding/bearstoneflow.png)

<p align="center"><strong>Smart Home diagram (<a href="https://pbs.twimg.com/media/Dg_CPwVU8AEyC2B.jpg:large"><code>PNG</code></a>). Made with <a href="https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=BearStoneFlow.xml#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FCCOSTAN%2FDocker_Support%2Fmaster%2FBearStoneFlow.xml">Draw.io</a> (<a href="https://raw.githubusercontent.com/CCOSTAN/Docker_Support/master/BearStoneFlow.xml"><code>XML</code></a> source file).</strong></p>

<a name="devices"></a>
<div align="center">
  <h4>
    <a href="https://github.com/CCOSTAN/Home-AssistantConfig#battery">
      Batteries
    </a>
    <span> | </span>
    <a href="https://github.com/CCOSTAN/Home-AssistantConfig#networking">
      Networking
    </a>
    <span> | </span>
    <a href="https://github.com/CCOSTAN/Home-AssistantConfig#alexa">
      Alexa
    </a>
    <span> | </span>
    <a href="https://github.com/CCOSTAN/Home-AssistantConfig#mobiledevices">
      Mobile Devices
    </a>
    <span> | </span>
    <a href="https://github.com/CCOSTAN/Home-AssistantConfig#nest">
      Nest
    </a>
    <span> | </span>
    <a href="https://github.com/CCOSTAN/Home-AssistantConfig#voice">
      Voice
    </a>
    <span> | </span>
    <a href="https://github.com/CCOSTAN/Home-AssistantConfig#hubs">
      Hubs
    </a>
    <span> | </span>
    <a href="https://github.com/CCOSTAN/Home-AssistantConfig#lights">
      Lights
    </a>
    <span> | </span>
    <a href="https://github.com/CCOSTAN/Home-AssistantConfig#switches">
      Switches
    </a>
    <span> | </span>
    <a href="https://github.com/CCOSTAN/Home-AssistantConfig#landscaping">
      Landscaping
    </a>
    <span> | </span>
    <a href="https://github.com/CCOSTAN/Home-AssistantConfig#LED">
      DIY LED Lights
    </a>
    <span> | </span>
    <a href="https://github.com/CCOSTAN/Home-AssistantConfig#garage">
      Garage
    </a>
    <span> | </span>
    <a href="https://github.com/CCOSTAN/Home-AssistantConfig#TV">
      TV Streaming
    </a>
    <span> | </span>
    <a href="https://github.com/CCOSTAN/Home-AssistantConfig#security">
      Security
    </a>
    <span> | </span>
    <a href="https://github.com/CCOSTAN/Home-AssistantConfig#cameras">
      Cameras
    </a>
    <span> | </span>
    <a href="https://github.com/CCOSTAN/Home-AssistantConfig#sensors">
      Sensors
    </a>
  </h4>
</div>

<table align="center" border="0">
<tr><td colspan="4">

#### <a name="battery"></a>Battery Backups - [UPS Blog write-up](http://www.vCloudInfo.com/2017/06/home-protection-from-power-outages-sort.html)<a href="https://github.com/CCOSTAN/Home-AssistantConfig#logo"><img align="right" border="0" src="https://raw.githubusercontent.com/CCOSTAN/Home-AssistantConfig/master/config/www/custom_ui/floorplan/images/branding/up_arrow.png" width="22" ></a>
</td></tr>
<tr><td align="center">

[3 Prong UPS](http://amzn.to/2HJerU8)
</td><td align="center">

[2 Prong UPS](http://amzn.to/2CijVG3)
</td><td align="center" colspan="2">

[Tesla Powerwall 2](http://www.vCloudInfo.com/2018/01/going-green-to-save-some-green-in-2018.html)</td></tr>
<tr><td align="center"><a href="https://www.amazon.com/APC-Back-UPS-Battery-Protector-BE425M/dp/B01HDC236Q/ref=as_li_ss_il?s=electronics&ie=UTF8&qid=1519445552&sr=1-2&keywords=apc+450&linkCode=li2&tag=vmw0a-20&linkId=efbdf7bdfad7bd607e099d34bd1f2688" target="_blank"><img border="0" src="https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01HDC236Q&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=vmw0a-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=vmw0a-20&l=li2&o=1&a=B01HDC236Q" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
</td><td align="center"><a href="https://www.amazon.com/gp/product/B00KH07WRC/ref=as_li_ss_il?ie=UTF8&psc=1&linkCode=li2&tag=vmw0a-20&linkId=52a63711f582d1ff83f4687137a6154b" target="_blank"><img border="0" src="https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00KH07WRC&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=vmw0a-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=vmw0a-20&l=li2&o=1&a=B00KH07WRC" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
</td><td align="center"><a href="http://www.vCloudInfo.com/2018/01/going-green-to-save-some-green-in-2018.html" target="_blank"><img border="0" src="https://lh3.googleusercontent.com/-V8NMHkiKFIY/Wkgpf7T-WDI/AAAAAAADihs/fp5yNzjrQ5sKgFkafXhllLYsD7yM3tGBgCHMYCw/image_thumb5?imgmax=200" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=vmw0a-20&l=li2&o=1&a=B01HDC236Q" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
</td><td align="center"><a href="https://www.youtube.com/watch?v=BartadUzGOA" target="_blank"><img src="https://raw.githubusercontent.com/CCOSTAN/Home-AssistantConfig/master/config/www/custom_ui/floorplan/images/youtube/S01E01_PlayButton.png"  height="150" border="0" alt="" style="border:none !important; margin:0px !important;"></a></td></tr>

<tr><td colspan="4">
There aren't really automations for the Batteries yet.  Electricity is the life blood for the house and only really the Tesla Battery has smarts so maybe in the future, you'll see a Powerwall automation in this space.  But be sure to check out the  Videos below:
<details>
  <summary>How To Port Forward Home Assistant on Arris TG1682</summary><p align="center">
  <a href=https://www.vcloudinfo.com/2018/11/port-forwarding-on-arris-tg1682-modem.html>
  Write Up and YouTube Video</a><br>
</details>
<details>
  <summary>Adding Powerwall Sensors to Home Assistant</summary><p align="center">

[![Adding Powerwall Sensors to Home Assistant](https://raw.githubusercontent.com/CCOSTAN/Home-AssistantConfig/master/config/www/custom_ui/floorplan/images/youtube/Adding%20Powerwall%20Sensors%20to%20Home%20Assistant.jpeg)](https://youtu.be/KHaLddx5wPg "Adding Powerwall Sensors to Home Assistant")

</details>
</td></tr>
