'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "3b9f9bfa9981d6ce046ca629cff95166",
".git/config": "4577373fa1da35d78790d9aa289f6e29",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "9da1c98191642fd2a046efb5c61ccaf9",
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
".git/index": "59daaf198ee0d7afef1d5688f0a95215",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a210a28f22c4212d5ec21afe4b3e01a3",
".git/logs/refs/heads/tunahan": "b4e9edc174cc4acdd8aa07197dee51fc",
".git/logs/refs/heads/tunahan2": "1ff8de4180aef34acb219d117e358a5a",
".git/logs/refs/heads/tunahan3": "18ee65d4ecafe051e62bfb50391a3e03",
".git/logs/refs/remotes/origin/tunahan": "ede98b762f9733f4950205b7d3771652",
".git/logs/refs/remotes/origin/tunahan2": "53887b40ed65baa52b3ad2458c5d0b60",
".git/logs/refs/remotes/origin/tunahan3": "585abc4e07176736d72a40f75de35cec",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/02/eba94cfc034b791a1bf06462d63a59e2a7483a": "d361031ae1608ffe1db60c885b6c5eec",
".git/objects/05/0c13868f6001ff505a1cc344d3e8a01bc60c22": "7b1b285acdf2f56ad0c6e0cc9f1a536c",
".git/objects/08/2d325d4e3801f729416a332687fff18edb70d3": "53fa73605fc7939d7fdef8c0e18991f3",
".git/objects/08/6aa20b1ee53cb3a71e48735428e66abd852881": "14036c21edc86e50a9801e2d7a61ea9b",
".git/objects/0a/045b09af3a39ef4d2ad21d0fbc06a44c319711": "ca082efea611f01b6abfd35227edbf2f",
".git/objects/0b/5529e57e18f8b2f41378a8ab9c0ca309acd269": "49f1b6c54d1136d2009423f9aebd6b2e",
".git/objects/0f/0fd1d55b3e9e32ac0f1b1ecdbc59612ca88bf5": "da56b49c0d29942dacc901c812ccaaef",
".git/objects/0f/19b1bdd8d074fdfe2b54fc5ab8c23e0a3ae97c": "e5cd10c48aa951307c42d8403c8c338c",
".git/objects/11/50104235b698053c340465fea2b5d9578381f2": "d98e02a1a673399d1be69186ea64848b",
".git/objects/14/7c0eb1e3e6fc3294cb545c8931a0b1c75f87c2": "5dfc1b630d34a29c472c83766348966b",
".git/objects/14/cace16908d4547e9bfbaa3e3147930299ef6b5": "d4b19e0c176f7f3ffd814207a2d860fb",
".git/objects/15/e00dddfb1b01bd05f2462168fd46f6d00bd689": "5882102f616f789d1b2d169aabae8d9d",
".git/objects/16/821312d03b7e20465152d82bd1e3a142b5472e": "fef9cc1cc45327cfe933924b69b9c0fc",
".git/objects/1f/e30026ecef93a5d63818fd828889764c6f9a4d": "f94553cebc2bff5195b84bd68fb69403",
".git/objects/20/0e1e8aee433f4be13a3a1391e5da3ebc36e9e9": "e787753a14da1682c79ec935bd5f42ee",
".git/objects/24/2f3a4bb796dea822e4094b820c6e46aa638914": "0b96f400832666d9e64e03e90860f8cd",
".git/objects/25/3ffa50766769ff2ad0b27fd8297cf4734b776e": "7692c881f9d20fa1465e073d3a75a46c",
".git/objects/29/93d70f1b58e21f8ef5cd3d088cd8b09e069504": "f1b29a8e5d9e7c08ec6e96528ad35e19",
".git/objects/2c/91484e3178169dd2ce1a931599ceb08aa7fae1": "113d41fdd6e8d3b962d0d781339b31c9",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/5e293596a09cebe1aa7def10b0e889bcae85e6": "dc92e458cb27d10201c87d1adf1e487a",
".git/objects/37/8a89813e79c29b085058683a215746b2ea3a5f": "81925849f6a2d7d30923d9f46e027d26",
".git/objects/3e/430873ae2d4677a02876bbd0d641d5aaae2326": "fb966add400cf4a0315779fbfac178ed",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/3e/fb43ad742f9239c50a7c5337e4878650adad83": "2a205c954f2a14ff788d03c575c12f7e",
".git/objects/3f/ab1063d69ef61af6db3b2f8a04da792e7b5988": "1e5c634612f1ef5252d79928f6dd95ad",
".git/objects/43/09802630062c555c141d46a37e0cf07cf6e170": "bd501352ac92ef1bda414160856e8812",
".git/objects/52/ec858947a75ff2ae2d3d37e65d0a6acae66fc6": "51012d2dd8a99d50b5928752bbc50592",
".git/objects/54/3348ed77f770ef8b587c7c485c358d564ba3f1": "3069ae0d31b99a6db65ea88e84e5220a",
".git/objects/56/aa4bbbde6879d829c7047d015ea1de913c82d9": "c7300c2c5091fea08ef92e5d800a8cfa",
".git/objects/57/115f310e6030c6df9467f327dd50e7b12c6485": "6c1bd94a69749701b1e169a526527a99",
".git/objects/5a/072c4e58ae108b5a2dabebc57eeaa2cef8c749": "80d67bb1b0f6551ab5bf0ecf56d9b6f0",
".git/objects/5a/a1c5d74f36bc2cb4b39cd4c63f03f92da50e57": "d121198cdeacc9de98f0daffde348288",
".git/objects/5c/ed13c2f682934a1b0babc8d17cf8eb0b17dcdc": "da01ec4b59040dde45e3f9471cbe2add",
".git/objects/5d/a382e0560f54a76909ea724340a6ce79fffbb0": "a8a7ba901adc5c45aa9871e28cf5cfbf",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/66/4e0567090b9505f1ea48729c6ce7023124a129": "f7f5e32210e128437efbaee52083102d",
".git/objects/66/f5c95b0cfaae44d3087006bbec0387261a77f8": "ef4bcec70bc6e4da00a96a92bfd7405f",
".git/objects/69/6a270a0a9d0cfd54ef000f783c09f8d9b7e8f7": "c891b6053773118dcff20f197afab06b",
".git/objects/6a/6da479362534668bb9805c0bbaa7963afb6f02": "c3601c9e7a546cfe2847c27c483c4da0",
".git/objects/6b/5e795e36c9dd3ddfe7bb35e8331b8b0af8f094": "b64a294f40e09a554139527427140205",
".git/objects/6d/fdbe54b3bf8103777f02ba3f7e15720bed3a95": "55e5a97e815c3000d2a0a018212c030d",
".git/objects/70/66340013a76de59e5238d987364c06ca2b896e": "f930c271f1fe460de5a6e275e0100928",
".git/objects/71/b1c25d575e67df7c5d83c94983e0f33bb45f6c": "0f25a42dbd245f0d69c388c97c365fb0",
".git/objects/72/500f1825b6db635faace4cc74211fee162d007": "f25585cc916d1e935787d7a739c9ffbd",
".git/objects/73/81ce5fdcf30a132c0f01cc8deecf86da7cbe49": "a416722eec9a5fbfd2083b7d0c9d7bcb",
".git/objects/73/8a7d49ee69a8a96b350eee4b804b570ef36a5f": "ae508f5c6911d949f89d428dee8b6b7e",
".git/objects/74/5b5297be73b2e75457f2b128df2ea47146433c": "1b83afa034ed74dac36b08507e64da2a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/1db770ca752f5954837c108f161286e0516074": "1ea618a79f0694f03f1bab2289aa5fbd",
".git/objects/7b/9d3bd766c4af707237ec05c53e733e51ced14d": "513f0f15144cf4e648d042a56a8c12e0",
".git/objects/7b/f65297cb83cd10ed79fe7238707de374e983af": "7044b78d5a926c5962a0dc4bd0b89136",
".git/objects/7c/e4903b6dba468895a40f7d60bc6545614c30cd": "1e98e4da3cff5fc96e5dde044c5daa8c",
".git/objects/86/cf5c2d3347007a8a68a64849c7fa7abb761b31": "2ff516b3d6f99685bd943df40da21002",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/e459e70adf5574057272e3952112ccaee4367f": "1ff2fa4d3490c9fdfbd4c14c7ceed506",
".git/objects/89/a78a8d81596fb058d7cc7174af30c785fe026b": "db0fd79a1f90c6bad0507fa6dc62d05c",
".git/objects/89/ae4968c2f799c118bf508c44c51580c8abcbc9": "50932222ce435286c48b640f34f6f728",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/747299b1f06a82d12a51a5643c5ef99d88e69c": "7e8fb03335ac2cfbec678c5f38deee06",
".git/objects/8c/7a702da21d3c489c9f9c51e5c3ff0f74029893": "4e18239ccf3822698afcce69c00271c3",
".git/objects/8d/6729ee415f65ffe772f9184a0f566eff0cb443": "951cd7f140c71f46127071d508c8eff1",
".git/objects/8e/5ee19f1246a1f2c2ad82e56b90a351b12db605": "4783d56ed1de558cd891c8c108a36727",
".git/objects/95/1440730ff61cab4ead3c3fa5114ceeaae9e8d1": "17c205f1040e13d3562a25c50f41c674",
".git/objects/96/557f638bddd854bf1816fcfaa54afeea3bdfc6": "524bf12279c329d30100d10cfa538cec",
".git/objects/9e/e2f7bc520f90e14e4b225b3f3ed8019dde5f3e": "0926b613beb5010f821aece20f6a78ae",
".git/objects/a0/1a5ffa0c2ef91c919fc51cec2137f44cd835a2": "6ce2cc205162e576287c8056f09dab6c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/c89d4c0de480d0f3080ef863e771b3e196e710": "82c5d01d0a74e38144f230fe148250e6",
".git/objects/a8/0731fec90c5cbe2e870349e97a00cac38ccb66": "b0554740621f58e19516a370c0901854",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/0d68b4e24c23966da8dfe9b25b8d6cf290456a": "5735c7243e5f116ee8f6b85fd441bb9b",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/ae/3ad6a093e6c90925f53c6081e5f9cfe908ca32": "5b31809bffb5ff5483a0330e35515a6b",
".git/objects/ae/3f3e87d05c34408d9c8b0b8b4c8fef1fbd1493": "70041525413a1fe9f3d72aacb1641c3f",
".git/objects/b1/0ed4e044c9b9d20da9daef31b933b8234ba733": "f429c90803cef549dd1e105f5935948a",
".git/objects/b4/830aa134ea2c09600182f7732f11d9ef31c4c6": "de57de61c08ae21b08f42319f2692dca",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/195e20530c858e24ed792bfe179c74ac4cfda7": "f56f1f6460bbd152d98fb15e66138b45",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/d1ee37b64285d252b023c57b113d54e2321347": "bfd0023ef6adca3b64b8b6267e70c48f",
".git/objects/c6/2893c22ee838d2bca3c9fea5a922c2594cc436": "4acca8114a6b8748c7076281df138a49",
".git/objects/c8/2c64ac1fdb31f516c8c292700e82c6861a1f80": "00205ad9de29643f0da5a1ebce25801d",
".git/objects/c8/cbab9a1298ce9350a7fb12f4ea9ccee5a6527c": "34050071fcb32b702ca5544aae53e76f",
".git/objects/cb/61b9eb4d4a64bf95c1fda1761df76ff0a598bc": "44a3cdbf0c72a29fb76c2abf4c8b759c",
".git/objects/cc/46c47358fc212647f836cfcde6e9710b45c871": "f9fe394c6a11318588e58b7a3c585249",
".git/objects/ce/960e0b447ba0d42b14d39eab7190ed584d22b4": "f493ba991dcf2d2c487517768d3f91ad",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/50e53947c1445ad84788b1e4d41a70d3c66dcd": "931239b49ac23afcc11759848f9fdf6d",
".git/objects/de/0c032b55dca8d7a87a99ef99f65a3c1a5b7855": "c4f51fe30377badd1c3e1390e143156c",
".git/objects/df/2cf04d2202973a3ecb198babc7c42e36ce07ab": "591aeaea588eb5ad0c0a04c982d86637",
".git/objects/e0/3dfd1c0cea463fb0ba6f6278186e7098d5b827": "448c5d3673e57cef1afc1ea7b59c9960",
".git/objects/e0/b9eea36b6894cf40ad1352561ed31fdc96a4b1": "8a22ca85838a71712a76acf1b6e7202a",
".git/objects/e3/90b0ccc9573ee73db38d531fdaf04844aec4ca": "d3dfebc76e9b2bcedb09df3638bd6983",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/2f4ef780add70f8eeb1c3a966ddf86485a8537": "c1fcc2e96bd7f6401a266855bf55bcf3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/165ea70d1201dab58705dcca20e4e36d357ebf": "6a3d5b295883476a99f15b70abe48378",
".git/objects/f1/fffa7c3567e65cd831d71e47848020155d1347": "34f6c6b4007ffc7420cc618c584ddbbb",
".git/objects/f4/66006ae10a7146f653b420a372209bb695c9d3": "1a67438987642c59f8e9f3bc1d254029",
".git/objects/f5/2b8275eeed53669be147c5a0988a0b341242aa": "8f98a8aaafd52c7e04916bc19eb00d7f",
".git/objects/f7/946ecd9089f87f32f3fdd6ca55417e89261598": "9ae9ad3c7261ad35e00bc2c13cc1af55",
".git/objects/f8/359aba8c3615af6169adca2f0ed382b743d700": "6c222756db64ff382cfeb588405d088a",
".git/objects/f8/614c5cb3c352abb441ca80779e356cfabb6f82": "94f7bfe725085e832020156dab2429e1",
".git/objects/fe/17749914439a0e3103c09b15881c96abc864d0": "dd0b55ff5cd5f9cc0eeae376df22de45",
".git/refs/heads/tunahan": "ab17d064ae640032538e78f1c502bb7a",
".git/refs/heads/tunahan2": "5e403195899d96ac128f5cd291c0f421",
".git/refs/heads/tunahan3": "5e403195899d96ac128f5cd291c0f421",
".git/refs/remotes/origin/tunahan": "76aeb23374dab334d5bed86b6c1a9cf2",
".git/refs/remotes/origin/tunahan2": "ab17d064ae640032538e78f1c502bb7a",
".git/refs/remotes/origin/tunahan3": "5e403195899d96ac128f5cd291c0f421",
"assets/AssetManifest.json": "2df98fa26f44d303d1d01ef20169da60",
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
"assets/assets/images/card/card2.png": "210e7da3c3d0cdb18649fbbc100fd53e",
"assets/assets/images/card/card3.png": "45db2bb39c238ba3c247c2dfb3982dd7",
"assets/assets/images/card/card4.png": "ede4444f44c7f1d7c94c7fcf75284978",
"assets/assets/images/card/card5.png": "22912abccb201760b84629bef1f1e770",
"assets/assets/images/card/card6.png": "e65b09d7d852958373983a0c093ea1ae",
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
"assets/assets/userImages/image_3.jpg": "63aae95f60bd3d3df83f62a0d9e50186",
"assets/assets/userImages/image_4.jpg": "58de98c36df68863bf5c1cc5c9061dc9",
"assets/assets/userImages/image_5.jpg": "9dfeca4337ef8f511fd1387a7bb734c4",
"assets/FontManifest.json": "57eaaf03069c49e82bab1f71539141bd",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "68bed6304cf73e018c29e9a527a410ff",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "11541bb4a13626b79269ebd6fa129f09",
"/": "11541bb4a13626b79269ebd6fa129f09",
"main.dart.js": "6b9d82ed995987477d796d48771d5d2e",
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
