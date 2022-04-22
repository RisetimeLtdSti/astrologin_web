'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "65ef4cbf47e13e6c23404d0d7a858d4d",
".git/config": "cea2a8c98fca8ffabb2e0e54d21f452a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "d5a822afe62e25858e3714d84cde84cc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7b36d11cf9f5bc90c822a21b37a3347b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "853a8f9c72b1cabc0ded3ac73923acef",
".git/logs/refs/heads/21_04_2022": "853a8f9c72b1cabc0ded3ac73923acef",
".git/logs/refs/remotes/origin/21_04_2022": "7e0fdbc89d5951ef99d8a3f71ad8a05d",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/02/eba94cfc034b791a1bf06462d63a59e2a7483a": "d361031ae1608ffe1db60c885b6c5eec",
".git/objects/05/0c13868f6001ff505a1cc344d3e8a01bc60c22": "7b1b285acdf2f56ad0c6e0cc9f1a536c",
".git/objects/08/2d325d4e3801f729416a332687fff18edb70d3": "53fa73605fc7939d7fdef8c0e18991f3",
".git/objects/0a/045b09af3a39ef4d2ad21d0fbc06a44c319711": "ca082efea611f01b6abfd35227edbf2f",
".git/objects/0b/5529e57e18f8b2f41378a8ab9c0ca309acd269": "49f1b6c54d1136d2009423f9aebd6b2e",
".git/objects/0f/0fd1d55b3e9e32ac0f1b1ecdbc59612ca88bf5": "da56b49c0d29942dacc901c812ccaaef",
".git/objects/0f/19b1bdd8d074fdfe2b54fc5ab8c23e0a3ae97c": "e5cd10c48aa951307c42d8403c8c338c",
".git/objects/11/50104235b698053c340465fea2b5d9578381f2": "d98e02a1a673399d1be69186ea64848b",
".git/objects/14/7c0eb1e3e6fc3294cb545c8931a0b1c75f87c2": "5dfc1b630d34a29c472c83766348966b",
".git/objects/14/a1c64036635b2a8dc1d095a08d5d2c8c6bd2ae": "a8640d19849e6bc4e4df2ca5da78e532",
".git/objects/14/cace16908d4547e9bfbaa3e3147930299ef6b5": "d4b19e0c176f7f3ffd814207a2d860fb",
".git/objects/16/821312d03b7e20465152d82bd1e3a142b5472e": "fef9cc1cc45327cfe933924b69b9c0fc",
".git/objects/20/0e1e8aee433f4be13a3a1391e5da3ebc36e9e9": "e787753a14da1682c79ec935bd5f42ee",
".git/objects/24/2f3a4bb796dea822e4094b820c6e46aa638914": "0b96f400832666d9e64e03e90860f8cd",
".git/objects/25/3ffa50766769ff2ad0b27fd8297cf4734b776e": "7692c881f9d20fa1465e073d3a75a46c",
".git/objects/2b/710aa305c9ba7fb319dcbb012c64e910426c77": "330a32d7c094b0a21adcfb49f3f581b4",
".git/objects/2c/91484e3178169dd2ce1a931599ceb08aa7fae1": "113d41fdd6e8d3b962d0d781339b31c9",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/5e293596a09cebe1aa7def10b0e889bcae85e6": "dc92e458cb27d10201c87d1adf1e487a",
".git/objects/34/2219544cfe44cd60c15c6b27301914d233fd94": "5289a9b2f0ea7f5d26d3297726bd0443",
".git/objects/3e/430873ae2d4677a02876bbd0d641d5aaae2326": "fb966add400cf4a0315779fbfac178ed",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/3e/fb43ad742f9239c50a7c5337e4878650adad83": "2a205c954f2a14ff788d03c575c12f7e",
".git/objects/3f/ab1063d69ef61af6db3b2f8a04da792e7b5988": "1e5c634612f1ef5252d79928f6dd95ad",
".git/objects/40/b203082895ff304978af0f3527639f90c2a29b": "09e1b37e78d2bc006acbd9d8cee1b8a0",
".git/objects/43/09802630062c555c141d46a37e0cf07cf6e170": "bd501352ac92ef1bda414160856e8812",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/4b/6f4ea3064c9adcabae06f96fb3f7e5167774ac": "da612c0fb6f31ed4362d935fcd4a8115",
".git/objects/4f/047db9a0e2df65099bbd7173951f3c80b7129e": "dd215cce10edebcd47a1554f1b98cd31",
".git/objects/52/8f6bfb26ba5d61ac44d4cf254f1e0f106a8617": "81fee5d2e25d86a2ea963eb250eb7b01",
".git/objects/56/aa4bbbde6879d829c7047d015ea1de913c82d9": "c7300c2c5091fea08ef92e5d800a8cfa",
".git/objects/57/115f310e6030c6df9467f327dd50e7b12c6485": "6c1bd94a69749701b1e169a526527a99",
".git/objects/5a/072c4e58ae108b5a2dabebc57eeaa2cef8c749": "80d67bb1b0f6551ab5bf0ecf56d9b6f0",
".git/objects/5a/a1c5d74f36bc2cb4b39cd4c63f03f92da50e57": "d121198cdeacc9de98f0daffde348288",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5c/ed13c2f682934a1b0babc8d17cf8eb0b17dcdc": "da01ec4b59040dde45e3f9471cbe2add",
".git/objects/5d/a382e0560f54a76909ea724340a6ce79fffbb0": "a8a7ba901adc5c45aa9871e28cf5cfbf",
".git/objects/64/ef84c145cf08f0aa62e6d7c0bfb1f3a4793da9": "7539ad00be877f89cb3f0d65fa8b4184",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/66/4e0567090b9505f1ea48729c6ce7023124a129": "f7f5e32210e128437efbaee52083102d",
".git/objects/68/fa3148ed3cecfc074bc159994386b543177751": "7e4e3423b69605d67b9e8bacddae53f2",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6b/5e795e36c9dd3ddfe7bb35e8331b8b0af8f094": "b64a294f40e09a554139527427140205",
".git/objects/70/66340013a76de59e5238d987364c06ca2b896e": "f930c271f1fe460de5a6e275e0100928",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/73/8a7d49ee69a8a96b350eee4b804b570ef36a5f": "ae508f5c6911d949f89d428dee8b6b7e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/c08c8c7510096074e9736b3b2bbdf2f8c6be0c": "7ba4299bc76eb8eeaa5d7a682eafc430",
".git/objects/7b/1db770ca752f5954837c108f161286e0516074": "1ea618a79f0694f03f1bab2289aa5fbd",
".git/objects/7b/9d3bd766c4af707237ec05c53e733e51ced14d": "513f0f15144cf4e648d042a56a8c12e0",
".git/objects/7b/f65297cb83cd10ed79fe7238707de374e983af": "7044b78d5a926c5962a0dc4bd0b89136",
".git/objects/7c/e4903b6dba468895a40f7d60bc6545614c30cd": "1e98e4da3cff5fc96e5dde044c5daa8c",
".git/objects/83/c9ae5611d7ae37a2df4fc23fcdce3737e31891": "9e953251ed742d0077d493790bd1ada9",
".git/objects/83/fb838629d7132ac66337c8746cc948b914746a": "8d1fd61c2ab18c98b4d62ddef36a277b",
".git/objects/84/ee5d5e2121a1a5d91876ccc93e5cd7aa5fe877": "9a6eab819361ce3eb2acda41f38fd039",
".git/objects/86/cf5c2d3347007a8a68a64849c7fa7abb761b31": "2ff516b3d6f99685bd943df40da21002",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/e459e70adf5574057272e3952112ccaee4367f": "1ff2fa4d3490c9fdfbd4c14c7ceed506",
".git/objects/89/a78a8d81596fb058d7cc7174af30c785fe026b": "db0fd79a1f90c6bad0507fa6dc62d05c",
".git/objects/89/ae4968c2f799c118bf508c44c51580c8abcbc9": "50932222ce435286c48b640f34f6f728",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/747299b1f06a82d12a51a5643c5ef99d88e69c": "7e8fb03335ac2cfbec678c5f38deee06",
".git/objects/8d/6729ee415f65ffe772f9184a0f566eff0cb443": "951cd7f140c71f46127071d508c8eff1",
".git/objects/8e/5ee19f1246a1f2c2ad82e56b90a351b12db605": "4783d56ed1de558cd891c8c108a36727",
".git/objects/95/1440730ff61cab4ead3c3fa5114ceeaae9e8d1": "17c205f1040e13d3562a25c50f41c674",
".git/objects/96/557f638bddd854bf1816fcfaa54afeea3bdfc6": "524bf12279c329d30100d10cfa538cec",
".git/objects/9e/e2f7bc520f90e14e4b225b3f3ed8019dde5f3e": "0926b613beb5010f821aece20f6a78ae",
".git/objects/a0/1a5ffa0c2ef91c919fc51cec2137f44cd835a2": "6ce2cc205162e576287c8056f09dab6c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/c89d4c0de480d0f3080ef863e771b3e196e710": "82c5d01d0a74e38144f230fe148250e6",
".git/objects/a4/747ed5eaae0b7698c87ff8806977d1c8ab8915": "ff71916dbf8681903fb3bd69a9ed77e0",
".git/objects/a8/0731fec90c5cbe2e870349e97a00cac38ccb66": "b0554740621f58e19516a370c0901854",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ad/0d68b4e24c23966da8dfe9b25b8d6cf290456a": "5735c7243e5f116ee8f6b85fd441bb9b",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/ae/3ad6a093e6c90925f53c6081e5f9cfe908ca32": "5b31809bffb5ff5483a0330e35515a6b",
".git/objects/b0/614034ad3a95e4ae9f53c2b015eeb3e8d68bde": "7ac75a1205d6369de21c8c4b5e901c5f",
".git/objects/b1/0ed4e044c9b9d20da9daef31b933b8234ba733": "f429c90803cef549dd1e105f5935948a",
".git/objects/b2/b616ef58388cf0a45ade7af49ea96961d4a5cd": "a6866fa0fa52563b91361bb8ce1017f5",
".git/objects/b4/830aa134ea2c09600182f7732f11d9ef31c4c6": "de57de61c08ae21b08f42319f2692dca",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/cc8f79527171af368ffb35ff7cfb1f383e16bb": "702fee61d8f4316980858f98bbebf984",
".git/objects/b9/195e20530c858e24ed792bfe179c74ac4cfda7": "f56f1f6460bbd152d98fb15e66138b45",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/919f35356827f1247efebb99ba5c88f0fc93c6": "b89c4255710433628daadc3ba698a60b",
".git/objects/c1/d1ee37b64285d252b023c57b113d54e2321347": "bfd0023ef6adca3b64b8b6267e70c48f",
".git/objects/c3/2dd81d61055d348a2c3a170ed74b91542d2cc3": "e58027111553e7fff14c9a25794179ae",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c6/2893c22ee838d2bca3c9fea5a922c2594cc436": "4acca8114a6b8748c7076281df138a49",
".git/objects/c8/2c64ac1fdb31f516c8c292700e82c6861a1f80": "00205ad9de29643f0da5a1ebce25801d",
".git/objects/c8/cbab9a1298ce9350a7fb12f4ea9ccee5a6527c": "34050071fcb32b702ca5544aae53e76f",
".git/objects/cd/ea971eb48224cc52fd63a23852a7555c7181dd": "3b258d7053eb31d92ddb26d862846096",
".git/objects/d2/e9ff8cfa3ae94d6fa8c4f4f03b256382206654": "0f06980e1f3fff4b5069ac91a03a92d7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/aa7cf4dd7b58767e3625ad8152e0efe3024a0d": "c8bb0f2a6e6cf8109b3e3aa11fa77b60",
".git/objects/dd/50e53947c1445ad84788b1e4d41a70d3c66dcd": "931239b49ac23afcc11759848f9fdf6d",
".git/objects/de/0c032b55dca8d7a87a99ef99f65a3c1a5b7855": "c4f51fe30377badd1c3e1390e143156c",
".git/objects/df/2cf04d2202973a3ecb198babc7c42e36ce07ab": "591aeaea588eb5ad0c0a04c982d86637",
".git/objects/df/d4f6626b1045270b4cee325b8455c342c52d13": "bfa2df4e02ae33206558879960ceabf3",
".git/objects/e0/3dfd1c0cea463fb0ba6f6278186e7098d5b827": "448c5d3673e57cef1afc1ea7b59c9960",
".git/objects/e0/ae627170f076854179b87674a7c5cba5c3a7e0": "5899aa6f7804f628ed887c2123e97d43",
".git/objects/e0/b9eea36b6894cf40ad1352561ed31fdc96a4b1": "8a22ca85838a71712a76acf1b6e7202a",
".git/objects/e3/90b0ccc9573ee73db38d531fdaf04844aec4ca": "d3dfebc76e9b2bcedb09df3638bd6983",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/0c4fe90bafc702d32468a67dd9869373076392": "77eae03b5efefd28e2fa635ef9ed7b31",
".git/objects/e8/2f4ef780add70f8eeb1c3a966ddf86485a8537": "c1fcc2e96bd7f6401a266855bf55bcf3",
".git/objects/ea/3ccb4484f1fa625619192998c412c4bface2db": "dc1b9ce40d9a33070c709166b4ddef93",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/11027d1dca4d1e3b2560d8f697e5112f97076b": "04b4a30b2dbc89173d20039ca0337cbc",
".git/objects/f1/165ea70d1201dab58705dcca20e4e36d357ebf": "6a3d5b295883476a99f15b70abe48378",
".git/objects/f1/fffa7c3567e65cd831d71e47848020155d1347": "34f6c6b4007ffc7420cc618c584ddbbb",
".git/objects/f4/66006ae10a7146f653b420a372209bb695c9d3": "1a67438987642c59f8e9f3bc1d254029",
".git/objects/f5/2b8275eeed53669be147c5a0988a0b341242aa": "8f98a8aaafd52c7e04916bc19eb00d7f",
".git/objects/f7/946ecd9089f87f32f3fdd6ca55417e89261598": "9ae9ad3c7261ad35e00bc2c13cc1af55",
".git/objects/f8/359aba8c3615af6169adca2f0ed382b743d700": "6c222756db64ff382cfeb588405d088a",
".git/objects/f8/614c5cb3c352abb441ca80779e356cfabb6f82": "94f7bfe725085e832020156dab2429e1",
".git/objects/fe/17749914439a0e3103c09b15881c96abc864d0": "dd0b55ff5cd5f9cc0eeae376df22de45",
".git/objects/fe/76b9b6652182db66b320eb26b3d2931fb77235": "29150685495cb94de37edf052f3d0a74",
".git/refs/heads/21_04_2022": "32a42a3563686b72e67897e5e3b17136",
".git/refs/remotes/origin/21_04_2022": "32a42a3563686b72e67897e5e3b17136",
"assets/AssetManifest.json": "8527c5a267f849d39725dc7032ef3ef3",
"assets/assets/fonts/Montserrat-Light.ttf": "a17f43cc60643d965636985afc00a221",
"assets/assets/fonts/Montserrat-Medium.ttf": "aca6287f22eef510c1e622c97bb1e1e1",
"assets/assets/fonts/Montserrat-Regular.otf": "92db9a0772b3732e6d686fec3711af42",
"assets/assets/images/adImage/ad1.png": "1417f155065c2701b7f061868e9aacef",
"assets/assets/images/adImage/ad3.png": "304cd6270691fccd8d3d24921f992223",
"assets/assets/images/background/about_header.png": "3fb6d2d772c2cc2b6f7b9ce681298c46",
"assets/assets/images/background/anasayfa.png": "9d1ec73e798bd7248e7091c1cb8375f0",
"assets/assets/images/background/anaSayfaCut.png": "73dd2df53eb531fb2e83506bc50eb01d",
"assets/assets/images/background/astrologlar.png": "accacb7e4ee02449b49fe9c3c33f7157",
"assets/assets/images/background/backg.png": "492bf5e89905a082d3f2aea156504b09",
"assets/assets/images/background/Group40.png": "752c689200a5993de89cc16d8102f65f",
"assets/assets/images/background/hizmet.png": "1a9025e19c312b896376c79930df6edd",
"assets/assets/images/background/hizmetSayfas%25C4%25B1Cut.png": "f9103d128563894d752a779029cd030d",
"assets/assets/images/background/Katman2.png": "3bab225e1b135af3f6435af1a8141e3b",
"assets/assets/images/background/thirdPageCut.png": "6d6c912e450cd5d6dcd0f537b61fd002",
"assets/assets/images/background/title.png": "0d08dbb154cf9565ea24643be0e5d7e9",
"assets/assets/images/card/card1.png": "464d7a7a39aee3a93f8732ebeb48ed94",
"assets/assets/images/card/card10.png": "934cec3d025b49857a36e479e4282e70",
"assets/assets/images/card/card11.png": "430001c065bedc8affed4453e363673f",
"assets/assets/images/card/card12.png": "b5b323443aab2ec4cf04ef145603620e",
"assets/assets/images/card/card2.png": "210e7da3c3d0cdb18649fbbc100fd53e",
"assets/assets/images/card/card3.png": "45db2bb39c238ba3c247c2dfb3982dd7",
"assets/assets/images/card/card4.png": "ede4444f44c7f1d7c94c7fcf75284978",
"assets/assets/images/card/card5.png": "22912abccb201760b84629bef1f1e770",
"assets/assets/images/card/card6.png": "e65b09d7d852958373983a0c093ea1ae",
"assets/assets/images/card/card7.png": "7b1fd9ce34514185a7930d8478805de0",
"assets/assets/images/card/card8.png": "faa186590753e585b7fd710028f4a10a",
"assets/assets/images/card/card9.png": "832e78649b913bff0edd6e3372e8d4dd",
"assets/assets/images/icon/cup-2.png": "671485cf0ef464ede624ac815836fc1a",
"assets/assets/images/icon/edit_profile_circular.png": "46bcbc0c871741a6dd0406b64a91a6ad",
"assets/assets/images/icon/element_air_icon.png": "2f5a9d9934cf453401e7fc347f9f950d",
"assets/assets/images/icon/element_earth_icon.png": "a83b4638884922ff330928b28a541d0d",
"assets/assets/images/icon/element_fire_icon.png": "86508da533d69ecf35bb467b881819c4",
"assets/assets/images/icon/element_water_icon.png": "3298d381bc94c5583ede70ab54d81364",
"assets/assets/images/icon/facebook-icon.ico": "d855b8d41bf273c66bcbca7ed6a09364",
"assets/assets/images/icon/gender_female.ico": "9fe0aa6887a9cbe3868ea2e9ce4db5b9",
"assets/assets/images/icon/gender_male.ico": "37eeaf49d3f29d4cabc61a7091808925",
"assets/assets/images/icon/gender_non-binary.ico": "1afe4f406bef3b0ff3cdef41f3fd6c44",
"assets/assets/images/icon/google_icon.ico": "7fa97c71202620686c9c679c3f61b9f5",
"assets/assets/images/icon/grey_rewind.png": "291d697e4c66ea11992c061524441356",
"assets/assets/images/icon/instagram-icon.png": "f2dea9574a1413438c7de5fde22c26e3",
"assets/assets/images/icon/like.png": "4ba0b11539b3d46effcebd37b7414d47",
"assets/assets/images/icon/message-box.png": "f287f7337463e9d43252d5b59c1a8576",
"assets/assets/images/icon/moon_sign.png": "850e90a0f033fb814be01932231070d0",
"assets/assets/images/icon/nope.png": "9673aff6c0507f397226d01c3e220b1a",
"assets/assets/images/icon/ok_sa%25C4%259F.png": "6b9a178cf3f30169c5c27a9de5737465",
"assets/assets/images/icon/ok_sol.png": "5f9d535ecc65dc46d103a88b181214d4",
"assets/assets/images/icon/pinterest-icon.png": "b92f16467acf3de944383ed79fdd953b",
"assets/assets/images/icon/profile-1.png": "898495295cf11268c318ef7c80100f96",
"assets/assets/images/icon/rising_sign.png": "159cf304145119d4174978a56be49c06",
"assets/assets/images/icon/settings_circular.png": "0ee1955ec031db2e33e2a9de228c0350",
"assets/assets/images/icon/shop.png": "abc76679cf8f66be6afcb60c8a098528",
"assets/assets/images/icon/sun_sign.png": "94e2b8f77c80049b30eaa3b4888a9047",
"assets/assets/images/icon/super_like.png": "13f274e98d09fbdd6b77f6d7ac5f66aa",
"assets/assets/images/icon/swipe-1.png": "7591a64f9e9cf0a4323ca93a86934037",
"assets/assets/images/icon/tick.ico": "fc528ea9575978e84faf83f4baab1ecf",
"assets/assets/images/icon/twitter-icon.png": "00de0742afc224236a0b3b1147f80575",
"assets/assets/images/icon/yuyyu_coin.png": "5c72886c27b65cf47443d9e7199066c4",
"assets/assets/images/logo/fire.png": "7f978f0d5cba541dbdb95af6c8a3dbaa",
"assets/assets/images/logo/logo.png": "fb4f0eafb6fd5d73a3f5b8246bec202b",
"assets/assets/images/logo/logo_text.png": "a0aeb2bd6b78bb81ead7451ec0bb6ed7",
"assets/assets/images/tittles/ask_ilski_uyumu.png": "164e256914df6dc3c8d88691d30be231",
"assets/assets/images/tittles/astrokartografi.png": "87d9a8d6c3bd4210b0e94b49ec6f72a2",
"assets/assets/images/tittles/ay_d%25C3%25BC%25C4%259F%25C3%25BCmleri_%25C4%25B1%25C5%259F%25C4%25B1klar.png": "06837eacb27eed0d4649693f25750785",
"assets/assets/images/tittles/cocuk_ve_genc.png": "2ad8881a8335f68138201925a733831a",
"assets/assets/images/tittles/egitim_astrolojisi.png": "997f68a43c1d74d2a433c927c5542ec6",
"assets/assets/images/tittles/eleksiyon.png": "e18e13b7ebd472f5919d85ebe6f8b850",
"assets/assets/images/tittles/finansal.png": "0bfd116c49af16f27dd8eb94ead62c9b",
"assets/assets/images/tittles/horary.png": "db8f49eae92cc255cbc2bd1cfdec8b67",
"assets/assets/images/tittles/hukuki_astroloji.png": "f33df35d831d411dc20b9242966b4f4d",
"assets/assets/images/tittles/kariyer.png": "b1b1d287e75a62b717a717f328a83a3d",
"assets/assets/images/tittles/lunar_return.png": "35870a95628e4c44525f505d04b410f6",
"assets/assets/images/tittles/natal_harita.png": "e2dbba38b2d968bacf3938c58e89ab3b",
"assets/assets/images/tittles/saglikli_yasam.png": "57ab3f03a6d8ea6c32280182d5c99e48",
"assets/assets/images/tittles/solar_return.png": "bc38c9d39c696655947c0b6e3b9ff786",
"assets/assets/userImages/image_3.jpg": "63aae95f60bd3d3df83f62a0d9e50186",
"assets/assets/userImages/image_4.jpg": "58de98c36df68863bf5c1cc5c9061dc9",
"assets/assets/userImages/image_5.jpg": "9dfeca4337ef8f511fd1387a7bb734c4",
"assets/FontManifest.json": "57eaaf03069c49e82bab1f71539141bd",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "0f4e1aa3fe324d369566d9701b1dff77",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/html_editor_enhanced/assets/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"assets/packages/html_editor_enhanced/assets/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"assets/packages/html_editor_enhanced/assets/font/summernote.woff": "c1a96d26d30d9e0b2fd33c080d88c72e",
"assets/packages/html_editor_enhanced/assets/font/summernote.woff2": "f694db69cded200e4edd999fddef81b7",
"assets/packages/html_editor_enhanced/assets/jquery.min.js": "b61aa6e2d68d21b3546b5b418bf0e9c3",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-at-mention/summernote-at-mention.js": "8d1a7c753cf1a4cd0058e31fa1e5376e",
"assets/packages/html_editor_enhanced/assets/summernote-lite-dark.css": "3f3cb618d1d51e3e6d0d4cce469b991b",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.css": "cadfcf986f26d830521e9a63350f4dbd",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.js": "4fe75f9b35f43da141d60d6a697db1c1",
"assets/packages/html_editor_enhanced/assets/summernote-no-plugins.html": "89ca56cd85a91f1dc39f5413204e24d0",
"assets/packages/html_editor_enhanced/assets/summernote.html": "8ce8915ee5696d3c568e94911eb0d9bf",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c926099abfefd5efe050fa89676235cf",
"/": "c926099abfefd5efe050fa89676235cf",
"main.dart.js": "0e30e2358f3727099bb6991159b8d4a8",
"manifest.json": "a07254bf4fa03f551995b1cbf2ac8b1e",
"version.json": "6531f80211781a8eee5f945b5ca0083d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
