/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "20190401/0_Pb1-NDZYUf-yYH3X.png",
    "revision": "c6671e3aa242a033ef6c79c2f668b19a"
  },
  {
    "url": "20190401/1_FbbOG9mcqWZtNajjDO6SaA.png",
    "revision": "5e11f417ad77261d96759c18cacb67e4"
  },
  {
    "url": "20190401/1_WVtok3BV0NgU95mpxk9CNg.gif",
    "revision": "4070ff781663987e991826e6082689b5"
  },
  {
    "url": "20190905/1567698457129.jpg",
    "revision": "c3b7754db432a65cf25b9aebdf671d62"
  },
  {
    "url": "20190905/1567698491518.jpg",
    "revision": "08d51b6c6844bba40e1ac1fd9f454986"
  },
  {
    "url": "20190905/1567698598618.jpg",
    "revision": "847983dd3cb47610c91eb63df008cf7f"
  },
  {
    "url": "20190905/1567698653683.jpg",
    "revision": "68c443ef1b4ed282743614990dce368f"
  },
  {
    "url": "20190905/1567699387394.jpg",
    "revision": "199e40c18dfd4c45d1ab06ae7d52f0ce"
  },
  {
    "url": "20190912/1568171213364.jpg",
    "revision": "1a099a477ddfb8743080dc082f5b0078"
  },
  {
    "url": "20190912/1568272846327.jpg",
    "revision": "747be6b8d4b3d1f0bddf2b599038af23"
  },
  {
    "url": "20190922/1569159840863.jpg",
    "revision": "f1f9765be7534f0545ec6181d27117ec"
  },
  {
    "url": "20190922/1569474400110.jpg",
    "revision": "02d679111916967a82661e679f75ebd4"
  },
  {
    "url": "20190922/1569561725779.jpg",
    "revision": "8b9fc854c4041c85ccb163e6aefcaf36"
  },
  {
    "url": "20191026/15725323927952.jpg",
    "revision": "fb1aad35489038b51413a7101f1aade1"
  },
  {
    "url": "20191026/15728519289702.jpg",
    "revision": "e3e4f5221d9ac4d1130c6a33f89bf381"
  },
  {
    "url": "20191229/68747470733a2f2f696d672e616c6963646e2e636f6d2f7466732f54423164637a4970514c30674b306a535a467458585851435858612d313030302d3939332e706e67.png",
    "revision": "52bd86ad9a749171429ad2fb22be8b7b"
  },
  {
    "url": "20191229/balance.jpg",
    "revision": "33afeda4e5e8d41b4f76a04f74787c4e"
  },
  {
    "url": "20191229/scroll.gif",
    "revision": "39bf48f0dbe96efa088f5986dd81e7b4"
  },
  {
    "url": "20210205/1612934911965.jpg",
    "revision": "647b8fa8bfb7da6ee9605559233f8c02"
  },
  {
    "url": "202104/capital_product_circulation.png",
    "revision": "274e4538405f0e005952d416e176fbb2"
  },
  {
    "url": "202104/Capital_production_process.png",
    "revision": "4b168300beb2ecf7ad93d6a0954879f7"
  },
  {
    "url": "404.html",
    "revision": "f01693134ecec05ad4ee2d9deba1e4d5"
  },
  {
    "url": "assets/css/0.styles.87da81b6.css",
    "revision": "d78a4bb2f5292bc13ceb725b33f6609f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.ec75bc92.js",
    "revision": "18436de512f5e12aeb6e01fe58df66e3"
  },
  {
    "url": "assets/js/10.fd42c895.js",
    "revision": "c5fecef75e58c2fd945f5be837c3d224"
  },
  {
    "url": "assets/js/11.32da8190.js",
    "revision": "36f93b08a4dc451e55160f58bf2abc41"
  },
  {
    "url": "assets/js/12.b87c0e70.js",
    "revision": "2038c197d358a470065f3725fabd2ce0"
  },
  {
    "url": "assets/js/13.10988a2a.js",
    "revision": "4e7d39426a10d70b4fdcd3337e2d773f"
  },
  {
    "url": "assets/js/14.6fb8a210.js",
    "revision": "5ddcc901f830f85e98ff08a948380e42"
  },
  {
    "url": "assets/js/15.efcdc4b6.js",
    "revision": "7b48123f69d49c4a6a121b8681e82f27"
  },
  {
    "url": "assets/js/16.8c3a8502.js",
    "revision": "76029d311c31002747a3b36a2b2b5f41"
  },
  {
    "url": "assets/js/17.67ee1212.js",
    "revision": "35cdfbaeae2dcf74d0327d17b1e3a828"
  },
  {
    "url": "assets/js/18.93f94966.js",
    "revision": "9619253512fb08edb2305ceff95244df"
  },
  {
    "url": "assets/js/19.8e6ddb97.js",
    "revision": "2509c45cca1a0022c84a62a6a4402b45"
  },
  {
    "url": "assets/js/20.e547fcf8.js",
    "revision": "4f35463f3236892a9b189feba27c8af9"
  },
  {
    "url": "assets/js/21.a9850e7d.js",
    "revision": "0ecc8e87086490332ffa03610d337bd0"
  },
  {
    "url": "assets/js/22.d9f5aab0.js",
    "revision": "bb679f327b48d59b3b3c71659b2f9334"
  },
  {
    "url": "assets/js/23.cab0b8a2.js",
    "revision": "7a4a59e23452856b35565dcf7f9e0aac"
  },
  {
    "url": "assets/js/24.7eb5d3ee.js",
    "revision": "5b62ed61b6f8c5a2d26fe0767f97b689"
  },
  {
    "url": "assets/js/25.05058e0f.js",
    "revision": "09ad1d623a01a14df27e319e0d838716"
  },
  {
    "url": "assets/js/26.9fd22d31.js",
    "revision": "b4197b93298134eb014be5d68b663513"
  },
  {
    "url": "assets/js/27.ca6498f0.js",
    "revision": "2cf071e7efbf4a1f8f984a2ee4bd0ab7"
  },
  {
    "url": "assets/js/28.621d6d4f.js",
    "revision": "be8ee9a7f1092ef2b2ff8ce0532f3d95"
  },
  {
    "url": "assets/js/29.e4dd9e50.js",
    "revision": "c4bc18e66d17af305fa020b8ea5891b8"
  },
  {
    "url": "assets/js/3.e9536b33.js",
    "revision": "ed0f8c93d9ee94a7740180b8a5b2783b"
  },
  {
    "url": "assets/js/30.5193dffa.js",
    "revision": "c953fa969034a81e25e50f1bbba77849"
  },
  {
    "url": "assets/js/31.e7c931f0.js",
    "revision": "4175aaed13eb760a91498b1487068c47"
  },
  {
    "url": "assets/js/32.fc7aaaa2.js",
    "revision": "c102ea7fbd3026754731bb8a23ca5cee"
  },
  {
    "url": "assets/js/33.d3d83659.js",
    "revision": "a6695aa9483e53e9a09032253a8c7adb"
  },
  {
    "url": "assets/js/34.ef9f3bf2.js",
    "revision": "422a5d7e59dddf8065a56d42ea9f604e"
  },
  {
    "url": "assets/js/35.18a05300.js",
    "revision": "1e0aef9c3cf7b2cfcc4434b037e0d240"
  },
  {
    "url": "assets/js/36.7d734d94.js",
    "revision": "8f432648803c869bcee61e744fd64e92"
  },
  {
    "url": "assets/js/37.43b13cca.js",
    "revision": "f433dd9ed19dfaf9fb57ed3976852cd8"
  },
  {
    "url": "assets/js/38.5e5eb225.js",
    "revision": "4d51713548503294987bf97c8bc5695e"
  },
  {
    "url": "assets/js/39.ed7153b7.js",
    "revision": "8fee334f58f4349e4b3c4a5170f9b9d7"
  },
  {
    "url": "assets/js/4.3b1279c4.js",
    "revision": "d1f8bfc0496eb7263608b0c572f640ce"
  },
  {
    "url": "assets/js/40.af0bc099.js",
    "revision": "f52c612833a343fac3a196c2e37ff0ae"
  },
  {
    "url": "assets/js/41.d67937e0.js",
    "revision": "4e1747a06c66df8644feebfeea8e7124"
  },
  {
    "url": "assets/js/42.c1253d34.js",
    "revision": "9f20f6c0229f9f8d9c1b4a0ecd111c27"
  },
  {
    "url": "assets/js/43.2f152e40.js",
    "revision": "06eff423cd98126384d0e649a2537298"
  },
  {
    "url": "assets/js/44.af213909.js",
    "revision": "990e691f52940c5f8aa27bc1c2235ad8"
  },
  {
    "url": "assets/js/45.394a65e1.js",
    "revision": "f1a2c7341f8e56038be7501e74df0576"
  },
  {
    "url": "assets/js/46.3ff068cd.js",
    "revision": "d1c51d66fb6fedea1fa16659cd423952"
  },
  {
    "url": "assets/js/47.1d6fd435.js",
    "revision": "725ebdd1fe64997dc0544bc21fe51675"
  },
  {
    "url": "assets/js/48.0f6085a4.js",
    "revision": "41144311d09d8daf0ce4215f3efb8dfc"
  },
  {
    "url": "assets/js/49.49950471.js",
    "revision": "906d6ecf9ca692a3c7403623c326269c"
  },
  {
    "url": "assets/js/5.44572628.js",
    "revision": "424ce7be87b87ade1fcdab51bf3193de"
  },
  {
    "url": "assets/js/50.f701df33.js",
    "revision": "340e033ee42d82364a9f94f0c11b8856"
  },
  {
    "url": "assets/js/51.ac599165.js",
    "revision": "37505502ebc35073800d470f1a335e85"
  },
  {
    "url": "assets/js/52.36fdd77b.js",
    "revision": "3d44e1dafeae87997ca296f5128eb6bd"
  },
  {
    "url": "assets/js/53.bee27fa6.js",
    "revision": "2772f00a02fec2ae8f9d64d259f9b157"
  },
  {
    "url": "assets/js/54.2178b88d.js",
    "revision": "21ca9ef82459f02a413ac0a50b5e3aa9"
  },
  {
    "url": "assets/js/55.7390fad2.js",
    "revision": "572cfb15432a2cc470500563c8affcdf"
  },
  {
    "url": "assets/js/6.6635bab4.js",
    "revision": "d1ce2124db6e2a6ada815e74761c0996"
  },
  {
    "url": "assets/js/7.765ea46c.js",
    "revision": "f23f15dfb6c01f9e6e9e715f11d46409"
  },
  {
    "url": "assets/js/8.d061f13b.js",
    "revision": "f1424c049009588f7a88359a3ed260f9"
  },
  {
    "url": "assets/js/9.4b01b049.js",
    "revision": "f9244ba5a88d296fc75073327c4b95e9"
  },
  {
    "url": "assets/js/app.7eee14c1.js",
    "revision": "33432e6a6d2b6588aec1587cc6ea7c96"
  },
  {
    "url": "breach/index.html",
    "revision": "90d7a3de27518afab788702044e09b7b"
  },
  {
    "url": "essay/2019-09-20.html",
    "revision": "28c503b046cac97e1d82dba37f85d8a7"
  },
  {
    "url": "essay/2019-11-17.html",
    "revision": "3526cfdf5147cee123133c6b42bf18fb"
  },
  {
    "url": "essay/2019-12-09.html",
    "revision": "7f1ca58f9b77be3f6b291283f38f4095"
  },
  {
    "url": "essay/2021-04-17.html",
    "revision": "3fbc1be45ca2cfe4ba83ab06f9341352"
  },
  {
    "url": "essay/2021-05-26.html",
    "revision": "906f0e81b7c7fc694806561b39dd0cab"
  },
  {
    "url": "essay/index.html",
    "revision": "4e7f08202bdeccba370cd3f326d6e502"
  },
  {
    "url": "front/2018-12-27.html",
    "revision": "6ba7943cb89eb79cf9ba43563ebae587"
  },
  {
    "url": "front/2019-04-01.html",
    "revision": "9c215c684c617a76badda32ec36d6ee2"
  },
  {
    "url": "front/2019-07-22.html",
    "revision": "4d25bc280fc1b00895d84a256d3e3ffd"
  },
  {
    "url": "front/2019-08-02.html",
    "revision": "55040fd0ad807dc3a86067b0eae9ae79"
  },
  {
    "url": "front/2019-08-17.html",
    "revision": "a169eb373924405a31672f6630e3b5fe"
  },
  {
    "url": "front/2019-09-05.html",
    "revision": "78b61c33136971df55db182ca9a5154a"
  },
  {
    "url": "front/2019-09-12.html",
    "revision": "230eeb390148d431eb5e2f5727c031b3"
  },
  {
    "url": "front/2019-09-22.html",
    "revision": "3e892bfddce62fec078e75a8d00113d1"
  },
  {
    "url": "front/2019-10-26.html",
    "revision": "9dcc76b9f30290e694dc34f3d1235ac2"
  },
  {
    "url": "front/2019-11-30.html",
    "revision": "fb466d8c45c5dcbc9d3cc7ddf65f6b7c"
  },
  {
    "url": "front/2019-12-11.html",
    "revision": "b84c003da667e4069100453be2a13a1e"
  },
  {
    "url": "front/2019-12-20.html",
    "revision": "301724761359c688562400054e975424"
  },
  {
    "url": "front/2019-12-29.html",
    "revision": "d1213fe7782db1984d7ee89c6098539e"
  },
  {
    "url": "front/2020-02-14.html",
    "revision": "7b276c718b05e40e6f4af6c2797d5b97"
  },
  {
    "url": "front/2020-03-02.html",
    "revision": "73e61fd9d6aae9aa7f36a53a07d7d84a"
  },
  {
    "url": "front/2020-03-14.html",
    "revision": "f0a66bfdd0720e5e227fbf57859a9321"
  },
  {
    "url": "front/2020-04-05.html",
    "revision": "cf1fcc6389668b6789f6630d0068d688"
  },
  {
    "url": "front/2020-06-04.html",
    "revision": "9f97fb715e8a56f6d7a4f26599e53dda"
  },
  {
    "url": "front/2020-07-01.html",
    "revision": "6079a52ec01c2862ae59a44c90ae8d92"
  },
  {
    "url": "front/2020-10-21.html",
    "revision": "8707c84b34782fb9ed3c131170ef09d0"
  },
  {
    "url": "front/2020-12-31.html",
    "revision": "063fb60f7484de6c6b1d1ef308140c07"
  },
  {
    "url": "front/2021-01-01.html",
    "revision": "9be38d89be661556bc7b7158bb3b85e2"
  },
  {
    "url": "front/2021-02-05.html",
    "revision": "804fad4a512138281423ef386a5f61ae"
  },
  {
    "url": "front/index.html",
    "revision": "9ef28ce8c109fe2dbe8c27bf51501888"
  },
  {
    "url": "image/1.jpg",
    "revision": "31ccc1d03bf77b64d0180397d5764066"
  },
  {
    "url": "image/bcmw2-qiw8c-2.jpg",
    "revision": "b61ef18e10f8cdc73a1c623f75d11aaa"
  },
  {
    "url": "image/images.jpg",
    "revision": "69ab5a1c508b355cc32358078752e716"
  },
  {
    "url": "image/logo.jpg",
    "revision": "3495b5e865a9307619d1bfc7893e18eb"
  },
  {
    "url": "image/qrcode_for_gh.jpg",
    "revision": "bb4e8925c9a69d6a8f7732d43147f21a"
  },
  {
    "url": "Img/03-02-Queue.png",
    "revision": "1c0f564a28e7409c78209ad097384b32"
  },
  {
    "url": "Img/1557149501347.jpg",
    "revision": "2dea1e4173e584b5b278520059306fa2"
  },
  {
    "url": "Img/1557200356701.jpg",
    "revision": "6a5bff0b33da5e3bcaf5627a8a98f6ff"
  },
  {
    "url": "Img/1557200456091.jpg",
    "revision": "d9d43841f1040627e54c50d553b13658"
  },
  {
    "url": "Img/1557230072073.jpg",
    "revision": "1f8e682141918a4a470e8138bcea831b"
  },
  {
    "url": "Img/1557231565848.jpg",
    "revision": "97b951663fa5d80140cd17be5c311036"
  },
  {
    "url": "Img/15573180732282.jpg",
    "revision": "85eab301a4a87d52c451260cd4d087c3"
  },
  {
    "url": "Img/1565408715828 .jpg",
    "revision": "2610e581545abac8eca8cdb67acb29de"
  },
  {
    "url": "Img/1568171213364.jpg",
    "revision": "1a099a477ddfb8743080dc082f5b0078"
  },
  {
    "url": "Img/1568272846327.jpg",
    "revision": "747be6b8d4b3d1f0bddf2b599038af23"
  },
  {
    "url": "Img/7536BBF9-6563-4FD5-8359-28D3A5254EE7.png",
    "revision": "1ea8c52077257dbe5041cc02d7028d52"
  },
  {
    "url": "Img/axewcayr0gcyrtqf6kch.png",
    "revision": "44ac678369342675d5444f345bf3af15"
  },
  {
    "url": "Img/CA34AC20-F3C0-438F-AD64-66C5E0986669.png",
    "revision": "63dd5dc793c39f11f99e8ba8d02fa9ad"
  },
  {
    "url": "Img/configSsh.png",
    "revision": "60a08bad911c8475a0001410957a63d3"
  },
  {
    "url": "Img/default.svg",
    "revision": "135ec38650e6c1340067ea657714007a"
  },
  {
    "url": "Img/dirt.jpg",
    "revision": "9a5114285c5bd7224f3c642c5350c8b0"
  },
  {
    "url": "Img/jieba.jpg",
    "revision": "da3464b50a1d51e8d7cda4afa71e8275"
  },
  {
    "url": "Img/qlnjj9e95jy7qb3c4spd.png",
    "revision": "f8490beb99de23223794e4a2c2dc1624"
  },
  {
    "url": "Img/react_Update.png",
    "revision": "75d4f0724a61d32e8c6adcb00a42fc91"
  },
  {
    "url": "Img/record.png",
    "revision": "4bd844c6d9e6c986873589d8cce4a8d8"
  },
  {
    "url": "Img/record1.png",
    "revision": "668fcbc4d0b91091f80609388ccc8800"
  },
  {
    "url": "Img/sshConfig.png",
    "revision": "ed6ebb1b01008c342873ffee0d28a467"
  },
  {
    "url": "Img/sshConnect.png",
    "revision": "3b6bf610c1318b18e0b22e78903c05a8"
  },
  {
    "url": "Img/sshDir.png",
    "revision": "49f542163cb255d0b0688daddb237929"
  },
  {
    "url": "Img/sshServer.png",
    "revision": "816032cfd61fd50deb4fdf5edd870768"
  },
  {
    "url": "Img/tcp_ip.png",
    "revision": "172e06f989a3a1e1e15ba379a9587799"
  },
  {
    "url": "Img/udp_tcp.png",
    "revision": "c0ec84f24b1054fc64053469584fa548"
  },
  {
    "url": "Img/WechatIMG453.png",
    "revision": "f4987011aadb717b87020807b58dc0b4"
  },
  {
    "url": "Img/WechatIMG454.png",
    "revision": "b2e8b67ba1006dafff9402e0b67a5921"
  },
  {
    "url": "Img/WechatIMG50.jpeg",
    "revision": "2c757371a4420e7447a01153cfb1f788"
  },
  {
    "url": "index.html",
    "revision": "6aa587a955ca3686fa789d88ba3b1b40"
  },
  {
    "url": "interview/index.html",
    "revision": "bb3d821e4bd424abd541a380a4874ca6"
  },
  {
    "url": "react/2019-04-25.html",
    "revision": "c036699bdc23e0b5a9cc110cf0165939"
  },
  {
    "url": "react/2019-05-12.html",
    "revision": "d18e162df4780780deaa63950cfb9fff"
  },
  {
    "url": "react/2019-05-13.html",
    "revision": "40e34db66ac9e04ac2ce880362af529d"
  },
  {
    "url": "react/2019-08-10.html",
    "revision": "c40db785f37c2985acfb4bf7f68e414f"
  },
  {
    "url": "react/2019-10-06.html",
    "revision": "57b01e07e10824ae1f4995c1dcc3b72a"
  },
  {
    "url": "react/2019-11-24.html",
    "revision": "63d493d6ed43bf130a9979171bed7857"
  },
  {
    "url": "react/index.html",
    "revision": "2c3b77c45711f6bf39e9b29b6220e830"
  },
  {
    "url": "webChat1.png",
    "revision": "0504a2be9f9061afcaf75eaa3f177b97"
  },
  {
    "url": "WechatIMG199.jpeg",
    "revision": "d7c95e71960b68ae2cf450b9634fa0ed"
  },
  {
    "url": "wxCode/gh_75d5a8e03369_258.jpg",
    "revision": "39eb4b380f983310fababa392400fb50"
  },
  {
    "url": "wxCode/s6x01351xerl2wqeqhpfn56_55388962.jpg",
    "revision": "600a8787c7bcbca1137227495521eeb6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
