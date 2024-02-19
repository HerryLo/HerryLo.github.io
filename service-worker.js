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
    "revision": "c6d3fdb7cdf21c954f0bf48ec3b60672"
  },
  {
    "url": "assets/css/0.styles.41c8c15c.css",
    "revision": "9f7143e85486facb51b400e2576039d6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.5a7329f1.js",
    "revision": "6b0743192aa17d64a38b870fe0c8654c"
  },
  {
    "url": "assets/js/10.86b6e0dd.js",
    "revision": "3b3faa7335c54fc29bd15090f53e6bfd"
  },
  {
    "url": "assets/js/11.4cd9e10c.js",
    "revision": "69ed6a5af61f1f2c9c2ec6ce4201a5ac"
  },
  {
    "url": "assets/js/12.a20f5378.js",
    "revision": "dc2b4801c2cd786e1324024ca4d5307f"
  },
  {
    "url": "assets/js/13.32463134.js",
    "revision": "7310738096226c8541da35c64ce063f1"
  },
  {
    "url": "assets/js/14.9243954d.js",
    "revision": "9c90c9d68a788292cdafe7fa8a32eb28"
  },
  {
    "url": "assets/js/15.b7a9fb83.js",
    "revision": "4b55979e54f07739a6308e704acc592b"
  },
  {
    "url": "assets/js/16.0f7e4e98.js",
    "revision": "330df8ea3e2edd161431ac9545623ee2"
  },
  {
    "url": "assets/js/17.b9fb48fd.js",
    "revision": "6eee58600e60df489adaf1984f6d03d5"
  },
  {
    "url": "assets/js/18.b57ef3b6.js",
    "revision": "cb795725588eb8f451867b5c5c247f4d"
  },
  {
    "url": "assets/js/19.f52d83a1.js",
    "revision": "ac1eb3e3c660279bc5fa00bea7a9600b"
  },
  {
    "url": "assets/js/20.e081c1b4.js",
    "revision": "e3efd33ebe242254c3cf4b1d067c7b21"
  },
  {
    "url": "assets/js/21.68d7deb4.js",
    "revision": "d72e1e31d98f9f7092abf78a6ca7cd62"
  },
  {
    "url": "assets/js/22.3f8ec3b7.js",
    "revision": "5e3dc75c9d703401007753e1b993a9f7"
  },
  {
    "url": "assets/js/23.120fb17b.js",
    "revision": "82da2f40efdfc6a3742465154e1042e4"
  },
  {
    "url": "assets/js/24.36343952.js",
    "revision": "434e431907c1a541496a0d054e329e9c"
  },
  {
    "url": "assets/js/25.7810905b.js",
    "revision": "ea4860a1093a26823d02770d40951585"
  },
  {
    "url": "assets/js/26.05733481.js",
    "revision": "d9cfca8aacb6a99349ee06eeb2524915"
  },
  {
    "url": "assets/js/27.d32dc1ba.js",
    "revision": "7d7388082f654012cdf024fe984b50d2"
  },
  {
    "url": "assets/js/28.9ba6205b.js",
    "revision": "690627cd5380e060719781203b5a80de"
  },
  {
    "url": "assets/js/29.41468bb2.js",
    "revision": "729766410f04f9f169918e88bf3cb5d4"
  },
  {
    "url": "assets/js/3.44a65254.js",
    "revision": "3102ceb5b4ae625c0844d9c74b62e754"
  },
  {
    "url": "assets/js/30.4fcd50bc.js",
    "revision": "c704cab0ba07c749d0f7089135da89ee"
  },
  {
    "url": "assets/js/31.01b519c1.js",
    "revision": "83495ffbcf395edb450820d6aa0abaab"
  },
  {
    "url": "assets/js/32.0605a918.js",
    "revision": "46cbb4a16673b2b8f9abd7fb3b113859"
  },
  {
    "url": "assets/js/33.07c4aa26.js",
    "revision": "36c662fe2a95e5f9bdd3440e02deed5c"
  },
  {
    "url": "assets/js/34.1289f798.js",
    "revision": "65cdfb5c9b20208126bfb06664410ded"
  },
  {
    "url": "assets/js/35.35a61226.js",
    "revision": "ff27363289f2f91a6deb0efeefedbbcd"
  },
  {
    "url": "assets/js/36.720e9176.js",
    "revision": "2259647d10f33761acf3c0a2aa61f89e"
  },
  {
    "url": "assets/js/37.4a31c7a1.js",
    "revision": "aa8708dc1eccc4654de44c9a55a8bcd0"
  },
  {
    "url": "assets/js/38.5d2512dd.js",
    "revision": "445d738105709bfbfe3d99ad55a8c5fb"
  },
  {
    "url": "assets/js/39.3e2ca350.js",
    "revision": "53d627b53243b09c5cda7285c5c9188d"
  },
  {
    "url": "assets/js/4.284460ba.js",
    "revision": "e85a54997267fe223221c60d10647262"
  },
  {
    "url": "assets/js/40.2ca1976d.js",
    "revision": "62bb8f13e09abcb96af82af6adf63ed2"
  },
  {
    "url": "assets/js/41.f7220ce9.js",
    "revision": "ae36ac13347b139dbd820e3f132abe9a"
  },
  {
    "url": "assets/js/42.63459eb7.js",
    "revision": "48b86cd949f7b20c9a8279a2af2f6a54"
  },
  {
    "url": "assets/js/43.ffc2c0f0.js",
    "revision": "6419da937e1f4b1cf5a744b0f6c44fd9"
  },
  {
    "url": "assets/js/44.f28f58c4.js",
    "revision": "07512a5f16740ee7f092123643e5b8f3"
  },
  {
    "url": "assets/js/45.bd91ee83.js",
    "revision": "e7731ac9a026d5acbf5b3554d0d51303"
  },
  {
    "url": "assets/js/46.5d2b2be3.js",
    "revision": "51690943890160b01d0673180164fcac"
  },
  {
    "url": "assets/js/47.aec20681.js",
    "revision": "91023b4de76cb97dfdfcd583fc262231"
  },
  {
    "url": "assets/js/48.5adc33b2.js",
    "revision": "2f09c7d5de1a24b516cbb4505654864a"
  },
  {
    "url": "assets/js/49.7b41cdec.js",
    "revision": "9d60a418d3c0f6b8d9857c56ad8001c9"
  },
  {
    "url": "assets/js/5.56c5ebc3.js",
    "revision": "3fef1e349f4835e3e42670d557c47fa3"
  },
  {
    "url": "assets/js/50.ce734685.js",
    "revision": "2cc876954451d300943e11af5275d52a"
  },
  {
    "url": "assets/js/51.0f8f14d5.js",
    "revision": "4aeefc84339aa5c2165d8c23704e43d8"
  },
  {
    "url": "assets/js/52.e9d44c4c.js",
    "revision": "992ff200ab60953be7654b61bb5c1c28"
  },
  {
    "url": "assets/js/53.8e97fb29.js",
    "revision": "33e1e8303544be5b582e4df4b4521fb9"
  },
  {
    "url": "assets/js/54.d9b36632.js",
    "revision": "b5487bc8a6ce509ef13990a4893c98bb"
  },
  {
    "url": "assets/js/55.56410bdb.js",
    "revision": "f2ff847c32b9b169b004d63adcf7edb5"
  },
  {
    "url": "assets/js/56.0a383f13.js",
    "revision": "dacba8438c696ae36bed5caa166f9067"
  },
  {
    "url": "assets/js/57.7b995206.js",
    "revision": "ae35ad969b7cb5a52e9c80066de106a2"
  },
  {
    "url": "assets/js/58.f53e4c54.js",
    "revision": "7974ec786d17e80cae7ffc0a00de021d"
  },
  {
    "url": "assets/js/59.1cf9b584.js",
    "revision": "0e91d5ca9f97ce55942381d8167706ee"
  },
  {
    "url": "assets/js/6.7678e14c.js",
    "revision": "24b1610c72f7f2030f318da292cb7cdd"
  },
  {
    "url": "assets/js/60.3665060c.js",
    "revision": "dd89bef027a841dd79fee2522d61c47c"
  },
  {
    "url": "assets/js/61.13600541.js",
    "revision": "f16779341fb904f62ca1b4f5735d2c05"
  },
  {
    "url": "assets/js/62.f5e6d6c1.js",
    "revision": "ccccb68aa0afb6748214b21d70bcde04"
  },
  {
    "url": "assets/js/63.dc2f5a41.js",
    "revision": "0a78547e788dd7eb0f6d1d79cf333d4e"
  },
  {
    "url": "assets/js/64.13f22f87.js",
    "revision": "9086bb604665b7af21e1cb0e77820998"
  },
  {
    "url": "assets/js/65.651ead61.js",
    "revision": "a3756d8fbc9e6f0c58285fb14a420268"
  },
  {
    "url": "assets/js/66.1a116b21.js",
    "revision": "eff55b68d70b3b71e1806a3256450fdc"
  },
  {
    "url": "assets/js/67.c226b0be.js",
    "revision": "de4d5be15681ba22afe7c955d2e2759d"
  },
  {
    "url": "assets/js/68.ce8f883f.js",
    "revision": "411c08beb22c9d8e59005233bc32d29a"
  },
  {
    "url": "assets/js/69.f7ae76ec.js",
    "revision": "642ad011e4285439ef4613557b8596fc"
  },
  {
    "url": "assets/js/7.d95a6a77.js",
    "revision": "43d4feef83c9d5d1c1dcd12ab172a8a4"
  },
  {
    "url": "assets/js/70.01eb86a8.js",
    "revision": "0e710cd730cd8870b7bb24002a315a85"
  },
  {
    "url": "assets/js/71.5eb24207.js",
    "revision": "b308d9d89d318d6b4f8ac42a8c7a7eee"
  },
  {
    "url": "assets/js/72.83c608da.js",
    "revision": "a7b24578cbda63dd3d6696691aa845e7"
  },
  {
    "url": "assets/js/73.e5553e80.js",
    "revision": "59d1370f51ab993c88e56eb25bba6216"
  },
  {
    "url": "assets/js/74.f49b9e18.js",
    "revision": "6c65dda4e4d264364c38cafeec870524"
  },
  {
    "url": "assets/js/75.5d63de95.js",
    "revision": "6355e217fc7910ce71ea41c9264fa39f"
  },
  {
    "url": "assets/js/76.c88cb96f.js",
    "revision": "78d26450746224e444598527f954500d"
  },
  {
    "url": "assets/js/77.32a9fadf.js",
    "revision": "84a1aef3bea49ad85f57d359365b9747"
  },
  {
    "url": "assets/js/78.063ae3b2.js",
    "revision": "df652ae6f21a6309991c97a0c9e076f4"
  },
  {
    "url": "assets/js/79.3829d3bc.js",
    "revision": "297d2fc38ab7534c20e113bd3240c15c"
  },
  {
    "url": "assets/js/8.a96c7ccd.js",
    "revision": "c1b38cecfd2b05685c686471a65ea376"
  },
  {
    "url": "assets/js/80.af15cf5a.js",
    "revision": "70a9ca2cefdfc6187d24e37f507de023"
  },
  {
    "url": "assets/js/81.4e8fc694.js",
    "revision": "4b1dc105088037988f9df024f0ac5397"
  },
  {
    "url": "assets/js/82.5c5e5088.js",
    "revision": "e3ac59468b8f944f69837317342b5b99"
  },
  {
    "url": "assets/js/83.b28ed874.js",
    "revision": "bdf5498cfde55e62a34f08bf7bcac84f"
  },
  {
    "url": "assets/js/84.3715c490.js",
    "revision": "4ec45105c9ceb22129275bbe28137838"
  },
  {
    "url": "assets/js/85.ed443780.js",
    "revision": "48c71e2248801f9aa63e732d16963d8b"
  },
  {
    "url": "assets/js/86.56c6a8ba.js",
    "revision": "fe76e86814817c684dd355bb118b40c5"
  },
  {
    "url": "assets/js/9.c75c0a4a.js",
    "revision": "8f6c3ec2c1ff3c70f696386e71491467"
  },
  {
    "url": "assets/js/app.91c9965d.js",
    "revision": "edda834ce7e11862fe374253dec8c600"
  },
  {
    "url": "breach/index.html",
    "revision": "97ef315e508590b59aec1eaf11c8763b"
  },
  {
    "url": "essay/2021-08-29.html",
    "revision": "8da61ce7764b1010d55b7b31b0c09137"
  },
  {
    "url": "essay/2022-01-21.html",
    "revision": "fe841ab7227b8ba69666a1ccc94b6997"
  },
  {
    "url": "essay/2023-01-06.html",
    "revision": "3a2c8b9bc476304a613a43f4fd0ea5e8"
  },
  {
    "url": "essay/index.html",
    "revision": "9d1702f608e177baa3fe93d4a9a4daad"
  },
  {
    "url": "front/2018-12-27.html",
    "revision": "c3dbb2313695fa761d38af9f11d43527"
  },
  {
    "url": "front/2019-04-01.html",
    "revision": "904d17ea5abca40d6f0fc7b01aae2f9b"
  },
  {
    "url": "front/2019-04-25.html",
    "revision": "df178c4b13dc1c3cbfd192ed4ff73912"
  },
  {
    "url": "front/2019-05-12.html",
    "revision": "f35f14bbd9a165698ec8254c0adb2896"
  },
  {
    "url": "front/2019-05-13.html",
    "revision": "5619c69944c1fe4dcd9bddeede7028d6"
  },
  {
    "url": "front/2019-07-22.html",
    "revision": "2004d2cd1285c2f6ba4c7531e3aa1e5b"
  },
  {
    "url": "front/2019-08-02.html",
    "revision": "2e62cec47e45080f0784c560e2f8968c"
  },
  {
    "url": "front/2019-08-10.html",
    "revision": "695442ed7f6efce955c8bf9069681de9"
  },
  {
    "url": "front/2019-08-17.html",
    "revision": "3d302d120d651d104bab8174777b5013"
  },
  {
    "url": "front/2019-09-05.html",
    "revision": "e717377901593f187531428384240109"
  },
  {
    "url": "front/2019-09-12.html",
    "revision": "ebb3ea336c556be7b8359d1fbff2cfac"
  },
  {
    "url": "front/2019-09-22.html",
    "revision": "0b728cf030ffc9d06351d6855b0f83db"
  },
  {
    "url": "front/2019-10-06.html",
    "revision": "a83ed877a1d1ea0362dc16416468af86"
  },
  {
    "url": "front/2019-10-26.html",
    "revision": "8cc2385f894b1542a32461dc36238fdc"
  },
  {
    "url": "front/2019-11-24.html",
    "revision": "70f0602a2144e6be6aecf7c3cdc99a98"
  },
  {
    "url": "front/2019-11-30.html",
    "revision": "b6444d211c46cd3210073d74e3fef47a"
  },
  {
    "url": "front/2019-12-11.html",
    "revision": "9da98a685f26b8a049185fd072c32d7d"
  },
  {
    "url": "front/2019-12-20.html",
    "revision": "5457045260d834479ee1b2ba70f7be70"
  },
  {
    "url": "front/2019-12-29.html",
    "revision": "6876d4c1437c78b5c8bcee2ce92f27e2"
  },
  {
    "url": "front/2020-02-14.html",
    "revision": "8320e01a85cf1d46d66e4b75a858000d"
  },
  {
    "url": "front/2020-03-02.html",
    "revision": "036287987de4e1d5bd539f25b3b7034e"
  },
  {
    "url": "front/2020-03-14.html",
    "revision": "fba84cef499b3171c03f861aa571f8d8"
  },
  {
    "url": "front/2020-04-05.html",
    "revision": "e8c1bcf074afe65993b2c8035b2afeda"
  },
  {
    "url": "front/2020-06-04.html",
    "revision": "113dc6b6984d22355ac12cc029e84bd1"
  },
  {
    "url": "front/2020-07-01.html",
    "revision": "5c9f99ea66c20fab3e59d2dc920b08b3"
  },
  {
    "url": "front/2020-10-21.html",
    "revision": "cbdade355da813a628128b98f5e01065"
  },
  {
    "url": "front/2020-12-31.html",
    "revision": "30123de556dbd2e5b15f8dbe27c2159a"
  },
  {
    "url": "front/2021-01-01.html",
    "revision": "7fc5b5d367aeffc8847f9b59024ee2be"
  },
  {
    "url": "front/2021-02-05.html",
    "revision": "89aab03f09753bd820a775d5cd7d1df0"
  },
  {
    "url": "front/2021-06-23.html",
    "revision": "e473cdcf4ad3f8633a6efaaddac3ceef"
  },
  {
    "url": "front/2021-10-30.html",
    "revision": "0b0fa8b9d8f8f1a58908e3fc1d62c736"
  },
  {
    "url": "front/2021-11-24.html",
    "revision": "80b371317f55f12026b88bee758aee2c"
  },
  {
    "url": "front/2022-02-11.html",
    "revision": "1b0f958df5f4a40cd400a9c61d1d790d"
  },
  {
    "url": "front/2022-04-22.html",
    "revision": "15c434be65d443a0222f81fab50675d5"
  },
  {
    "url": "front/2022-04-27.html",
    "revision": "42e81e4b0ee4194da69c689bd003b80c"
  },
  {
    "url": "front/2022-10-27.html",
    "revision": "5184d78a8b0747432d0a891925dc939a"
  },
  {
    "url": "front/2022-11-17.html",
    "revision": "b6d1038c73c8e383cc46a8c863e6cc26"
  },
  {
    "url": "front/2023-01-08.html",
    "revision": "3e65b15534fbf2321eb6de2e974b824d"
  },
  {
    "url": "front/2023-02-20.html",
    "revision": "e149485b6d1fe7f5ca691275736094b5"
  },
  {
    "url": "front/2023-03-03.html",
    "revision": "8817dea4ef998d1330070b7b7b76630a"
  },
  {
    "url": "front/2023-07-05.html",
    "revision": "730c1a31df118535449b99fc367df03d"
  },
  {
    "url": "front/2023-07-23.html",
    "revision": "c9652e43a438d6d2c8352cd7f406e451"
  },
  {
    "url": "front/2023-08-23.html",
    "revision": "1f885e41bd7d7dbf20012502e2419a50"
  },
  {
    "url": "front/2023-09-11.html",
    "revision": "c0547d6fe4cfd367840609528ae95d71"
  },
  {
    "url": "front/gis/2023-12-25.html",
    "revision": "96d9fad4e3e6e76b3d040cc995c809b9"
  },
  {
    "url": "front/gis/2023-12-26.html",
    "revision": "033b8ebcb088b4278ff45a8d72726054"
  },
  {
    "url": "front/gis/2023-12-27.html",
    "revision": "3db37a8a33945186a415867b15d45c0b"
  },
  {
    "url": "front/gis/2023-12-28.html",
    "revision": "b7943d649194eaa653d84dcb5d661f8b"
  },
  {
    "url": "front/gis/2023-12-29.html",
    "revision": "2b7d48f89a4fe09c20de3747f50a5fc0"
  },
  {
    "url": "front/gis/2024-01-01.html",
    "revision": "4c5c06fec51d7a737fea9e1f48adcda3"
  },
  {
    "url": "front/index.html",
    "revision": "a264c74a6338328ab39e1a33d6665405"
  },
  {
    "url": "front/java/2023-10-24.html",
    "revision": "a451b402cb82b53f3e2c26f75130501e"
  },
  {
    "url": "front/java/2023-10-25.html",
    "revision": "ab9e061f84bc38de330c195f46045950"
  },
  {
    "url": "gis/231225/img01.png",
    "revision": "52dd41277de05217e5cbd9db19fc1488"
  },
  {
    "url": "gis/231225/img02.png",
    "revision": "5588f5a4d749bef3fad4b8daf397d39d"
  },
  {
    "url": "gis/231225/img03.png",
    "revision": "72de8c3d8b7de3febc8d5e82d3d034fb"
  },
  {
    "url": "gis/231225/img04.png",
    "revision": "b665fa54b99201d4d45922c02d9995d2"
  },
  {
    "url": "gis/231225/img05.png",
    "revision": "0316491389d473c2f5ccdc0649f2fd54"
  },
  {
    "url": "gis/231226/img01.png",
    "revision": "9f02031013f2b548a634cbbc3d967284"
  },
  {
    "url": "gis/231226/img02.png",
    "revision": "1112760ac1fd813eb1be8b9053c1bf04"
  },
  {
    "url": "gis/231226/img03.png",
    "revision": "86db0caf78cf74d12ecd5961ed39409f"
  },
  {
    "url": "gis/231227/img01.jpg",
    "revision": "5f8345637f039debe667d6693d67a94d"
  },
  {
    "url": "gis/231227/img02.jpg",
    "revision": "9b5584510309f6792168cce74af76d18"
  },
  {
    "url": "gis/231227/img03.png",
    "revision": "1c5fd5801562ce73664c7dfd9671fed2"
  },
  {
    "url": "gis/231227/img04.jpg",
    "revision": "19b2b6e61c58d603718204178a93124f"
  },
  {
    "url": "gis/231227/img05.png",
    "revision": "60d76f6f4ffa0bf34ffaf7af54de9c5e"
  },
  {
    "url": "gis/231227/img06.jpg",
    "revision": "6befd55846012030e6d00ac34f1013cf"
  },
  {
    "url": "gis/231227/img07.png",
    "revision": "8366d3aeb7a1f8c6ad1478b2c4e49c7c"
  },
  {
    "url": "gis/231228/img01.jpg",
    "revision": "cda22b0866f1b88f3ac072a9948121e0"
  },
  {
    "url": "gis/231228/img02.jpg",
    "revision": "83cd46d2b073b544c7b2d3627bfa0710"
  },
  {
    "url": "gis/231229/img01.png",
    "revision": "47c206169dddd7f5ca6102517fb73fcd"
  },
  {
    "url": "gis/240101/img01.jpg",
    "revision": "fbda1b2192dfa877bac8b4ea7da3fbea"
  },
  {
    "url": "gis/240101/img02.jpg",
    "revision": "448beb57877bdd8add6026529f110e6b"
  },
  {
    "url": "gis/240101/img03.jpg",
    "revision": "d9294d7bfb7f07f01052c835ab14f282"
  },
  {
    "url": "home/20221029125835.jpg",
    "revision": "714b3b048e115ddf7a69c8885a7e64fd"
  },
  {
    "url": "image/082301.png",
    "revision": "0e47d63731a240b4cb531a3f0add56a1"
  },
  {
    "url": "image/082302.gif",
    "revision": "b98e3af664f355d5d30d85336e489b0f"
  },
  {
    "url": "image/082303.png",
    "revision": "f70e337ac9c2aea2136101bc2e7ca580"
  },
  {
    "url": "image/082304.png",
    "revision": "dfd34b74e668dcdbd2bb6131c190125a"
  },
  {
    "url": "image/091101.jpg",
    "revision": "1681b642a439f238da2a939d0b0145c1"
  },
  {
    "url": "image/1.jpg",
    "revision": "31ccc1d03bf77b64d0180397d5764066"
  },
  {
    "url": "image/102401.jpg",
    "revision": "32a6e740f99bb527578fb5510d2a1f71"
  },
  {
    "url": "image/102402.jpg",
    "revision": "95de39b3dde3222757199bc9c0ad6aec"
  },
  {
    "url": "image/102403.jpg",
    "revision": "1f9c96828d1aed6a4aef6bc6b6f003c9"
  },
  {
    "url": "image/102501.png",
    "revision": "a618c8bde55f39b6d5b4199ccb1efcd1"
  },
  {
    "url": "image/6EAE61B7-ED3B-4188-B801-EABD9B5EFC3D.png",
    "revision": "114a50f54638516e56d272b0f8bbda15"
  },
  {
    "url": "image/9F250D83-1940-4518-B757-8405262F1F2F.png",
    "revision": "eccd3d49d3b7fdaeb681b51fc24a0416"
  },
  {
    "url": "image/BB778B0.png",
    "revision": "715b0cbf1b9383635ecdff1dae5db585"
  },
  {
    "url": "image/DA89955.png",
    "revision": "20c2c73879b83f70ec2e2329532839b6"
  },
  {
    "url": "image/ddd24.png",
    "revision": "289abf40fde15ca5288b08922316881c"
  },
  {
    "url": "image/E1F03D22-5113-4df2-8972-1F469F6E8242.png",
    "revision": "c8ee267a2a68e116740762b5c04fb70f"
  },
  {
    "url": "image/F6FB7E.png",
    "revision": "36d93db0c279649c70a1d80676532688"
  },
  {
    "url": "image/gh_blog.jpg",
    "revision": "8628c4a43f672aa0297d6ae1e77476f7"
  },
  {
    "url": "image/github.svg",
    "revision": "f190859b917ffc4067b92dbc1ff8b85c"
  },
  {
    "url": "image/images.jpg",
    "revision": "69ab5a1c508b355cc32358078752e716"
  },
  {
    "url": "image/IMG_2940.png",
    "revision": "343dcfae48f972293c60feab0e089388"
  },
  {
    "url": "image/IMG_2941.png",
    "revision": "51019fe9dd75e7eac264f489530eedb9"
  },
  {
    "url": "image/img0574.jpg",
    "revision": "8b0be855fec70dfbe249124f2f3d162f"
  },
  {
    "url": "image/img2023070501.png",
    "revision": "fe4fa643740b8d3bb68dd77227661e84"
  },
  {
    "url": "image/img2023070502.png",
    "revision": "8970654c366ef9fde0556ce927c1fad7"
  },
  {
    "url": "image/img2023070503.png",
    "revision": "a5a424db5bde790b9a2502a2630e8771"
  },
  {
    "url": "image/img2023070504.png",
    "revision": "5812c17976409d50ad595aa4936b32b5"
  },
  {
    "url": "image/img2023070505.png",
    "revision": "ef6ec1271e77610b7f3c10a97c9a1090"
  },
  {
    "url": "image/img2023070506.png",
    "revision": "96d2522325fbdd929e141a5489d9e780"
  },
  {
    "url": "image/img2023070507.png",
    "revision": "2cecc2441c1e097f94b13142ca4c24bf"
  },
  {
    "url": "image/juejin.svg",
    "revision": "37fa33fcb93dbde696bd60873f4fe3ed"
  },
  {
    "url": "image/logo.jpg",
    "revision": "3495b5e865a9307619d1bfc7893e18eb"
  },
  {
    "url": "image/logotouchicon.jpg",
    "revision": "322c7663c9e553bd393484c4a358f3a5"
  },
  {
    "url": "image/npm1.png",
    "revision": "4e8265551283824cba54efc196f7209c"
  },
  {
    "url": "image/npm2.png",
    "revision": "e3f77e0629d2d0d52d0d69e9ad3e8ce4"
  },
  {
    "url": "image/npm3.png",
    "revision": "941caa42d6137246d9418f1193f8b9ea"
  },
  {
    "url": "image/npm4.png",
    "revision": "485a040aa1ed6b613020f356e3809ebd"
  },
  {
    "url": "image/qrcode_for_gh.jpg",
    "revision": "bb4e8925c9a69d6a8f7732d43147f21a"
  },
  {
    "url": "image/sf.svg",
    "revision": "f1faa315551bab4877f775ad01f30ea6"
  },
  {
    "url": "image/yuque_diagram.png",
    "revision": "d2a441614e7bb3187700ac05ebdffd63"
  },
  {
    "url": "image/yuque_mind.jpeg",
    "revision": "5cdec8fec8d7825ddc99f29b0cbdbaf5"
  },
  {
    "url": "image/yuque.svg",
    "revision": "6117082167652b971d28022821c4abae"
  },
  {
    "url": "image/zhihu.svg",
    "revision": "c9948b4a3e54b5b1ae552f7135f8ac50"
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
    "revision": "788b3ebcdbf0adacc6b46ec5f2406504"
  },
  {
    "url": "p87292043.jpg",
    "revision": "02a3b5a0025681dc873f8858d2cbbb62"
  },
  {
    "url": "recommend/2019-09-20.html",
    "revision": "6806dc43eb8bb2b7ae7e530a44b196b7"
  },
  {
    "url": "recommend/2019-11-17.html",
    "revision": "f0eeb9098d66df75c40c5c8e501e0b03"
  },
  {
    "url": "recommend/2019-12-09.html",
    "revision": "f7c5c3fdcbe54e9b8e73992394d68763"
  },
  {
    "url": "recommend/2021-04-17.html",
    "revision": "04f50b42114ecf626d4e388b6f3157a3"
  },
  {
    "url": "recommend/2021-05-26.html",
    "revision": "165ad9b3d24bbfa9067d3b3c5af0207c"
  },
  {
    "url": "recommend/2022-11-27.html",
    "revision": "3ad1c4520eba8752acb2b8eeeb2e400c"
  },
  {
    "url": "recommend/2023-03-31.html",
    "revision": "d274a64131d715340ca6838eaf6d9cdb"
  },
  {
    "url": "recommend/2023-04-01.html",
    "revision": "82d778617422e6d635be8d0d81387b81"
  },
  {
    "url": "recommend/index.html",
    "revision": "6864b6e99e54a3bb85e7b431d6b53dde"
  },
  {
    "url": "vuepress-plugin/index.html",
    "revision": "40288289bd7d2ec335eed49236d4e85c"
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
