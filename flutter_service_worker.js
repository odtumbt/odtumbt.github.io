'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "67839e1bba5029447aa47d2e4b280b37",
".git/config": "ca717995aa3726f5b9028fd05f76234b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "74cfc90ee11c019a85bf53177a345f8a",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "cf250e0fc31bb229194e48107fec94fd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "35a7f280b0677404c94861201c86e835",
".git/logs/refs/heads/master": "35a7f280b0677404c94861201c86e835",
".git/logs/refs/remotes/origin/HEAD": "abb48522e092fa9139dc3d0dc334c565",
".git/logs/refs/remotes/origin/master": "cd5a64189f5d173f372afb2af6de433c",
".git/objects/00/88ff4c34edacae95b2bad49f6575bc4d0bf816": "1552100834169552b85495d97da49c9a",
".git/objects/00/abf425119c13e1551b5fe2fe69713ca0ad10cb": "57479451118146ef957089d090e8b892",
".git/objects/00/ba829658dc4e45eaddbfaf51621bb71bc63999": "be69279bf7f10472cf19a0712dad282a",
".git/objects/01/7d70d462f9078bfb88c17b639eb14a51d33837": "577225d386706c4474e54936232c30a3",
".git/objects/03/70ceb26682dd4f0d7ca1f058ede7755b6a2735": "0d36510ba0aaed0daad49fa4192a887e",
".git/objects/03/a31fec31338ac97115fc5056cfff3b38950e6e": "3fe4840ad20965a921ef53fcb667c78a",
".git/objects/03/be38de28272c3b2fc6ae9e7d8816198d931c3f": "c4921971028fe5067dc636350d788798",
".git/objects/04/c0c43261472ab6ce097bf4e9e55cd7391f86ec": "725ba5c688fc73de01c8d261b53ec299",
".git/objects/06/65703373eb798d3a87d0d9087f0c20daceaf9c": "ffef1d025b813957095e80b72ce0af07",
".git/objects/07/4c193c93708b0fdac4e7f1da3ff59feeede5c0": "c123dd65e933cbedd9281dee629806a0",
".git/objects/0b/47e0a0d682ac2a7ffdb2eb970123417de4259b": "95784f8f5eaf1881d80d51d79fc57e05",
".git/objects/0c/6bd54377a9d3f020537c6f006c5da42f1ccb26": "af5a4c72b6552e1e09dc70910dc2ef45",
".git/objects/0d/156a651cfe4e3004289ef23f6c5b7d4d36b350": "fb0abddd81c1bf861974f1787268a4c1",
".git/objects/0e/31e7c57573c3fb4250057b57ebc9be66784db7": "5befccc127f8a21a49b52fb05c86cb74",
".git/objects/12/2dd761e304b9aa083e87eea4cd649070717e7b": "30e5e655e2f104734b1085d714b98c7b",
".git/objects/15/d94578d43feadd52ac39d64bea80103a0ac90c": "e52dcbb70b4ac966d3428787fbdb39bc",
".git/objects/16/243aed252377a903d60fe817d793c7671d059a": "7aa553e20d4cc2a7ff9bca4e053f0531",
".git/objects/18/154d7424ee047856d2309c1c0078b4bde38448": "891d4dbaa60bf263d97f3f6a1caf8fd6",
".git/objects/19/00b384754997ea07b041b2f7cdf80511707892": "f0793cd88961d74fb83f621a223c3806",
".git/objects/1a/412088c0f53029fbe37f83cc035798c155dd75": "f1c06dfa8d91b6fb62ab8fcf4da73677",
".git/objects/1d/775d90556fb7da3a233cf95e64accbe9a5563e": "658c3b7b93c6c38e449ba937aaa471e0",
".git/objects/1f/880260a0e48c9a37fecfb8f11d1a2600e5bc39": "fb4ee1d796f8a2b3b86d0c703ac3f9fa",
".git/objects/22/92c674e119424604dfa526c8b168b94c3fdcaf": "3c0bb4bd41d0735ee3cedffd463c2f26",
".git/objects/26/97a82f412d50f2b2b1cf1b2210f8503d5b5f19": "7bc27c0227c3b103f601868a9c12f042",
".git/objects/27/538bab37dc1a4acf90727bb65ee3d5b26d3421": "228fbb4fa3cf28a0d1258527b1c809a6",
".git/objects/27/8fee0f103041aec4548a7aca0fe8f15c140a55": "42e698e0e539836d005453424a217341",
".git/objects/27/d77a97a432ff91b071b860adc8761c16a2ea75": "48351f7cf624da1e47fd077c7c1772ef",
".git/objects/29/889df904f577209190d39300ce0da6ba2643eb": "94d34f74314a9ce1fdcec03d3b2eb07f",
".git/objects/29/8fa01b529690b1aae191fe792b51fb281ee903": "051bf7aa01026cd8d4dc5ea82de8348f",
".git/objects/2b/b65865322a2737563d02b47783efd2bf926839": "4ffdcfdf01c552d74595f44c2ed68145",
".git/objects/2d/c0c4b8b4c56dc3c97f886d38ff47c698bad5cd": "6ab65f6003f88c44c59aaa6415267d09",
".git/objects/2e/b022ecf6f6ef5233db284cb7fb3b2671ed5baf": "00bfb96e889511841640db24eb52b742",
".git/objects/2f/bc65c17121ee040963a481001aa997c83e11f2": "f9708b47bc34028ce9dc646a3b6f3be1",
".git/objects/30/55bc092fc01bda4b82f61cb08228ef06572439": "e76f2252f5794095794cf6ec2ed1f876",
".git/objects/30/c2fa73db51160b49d9ca4f81a775bee14a9997": "c4a93b843190191de2ac6e81dfb6188c",
".git/objects/32/515f8a3da18845d528fec00af6d6709a416c1f": "eb5a1da9e8e2c3637b2815ff73d4ac84",
".git/objects/32/9e1ba3fd9a2d560ba0cf3717d4ae02b275e7cd": "0326b55c8b8938b6eb84c52d74bb1ec2",
".git/objects/3a/245cfbc0641403a6f817171bb8f9884c6f0ef9": "5239ea3f32355360b097a2599bf0813e",
".git/objects/3d/5f9ddefa30b1043dab0cdb6c9ab915896a8f3a": "695df45c36f63ce50748a0467af6f7d6",
".git/objects/40/362d0338e27b4762817c11766dd85615ec4cf4": "e8f33ecab6c1a35564bc4d1e847b81cf",
".git/objects/43/6a2c23a819798c40d9b049f1d6a61d25e6a1df": "88d97c81271d19b2a905eea479fdae28",
".git/objects/43/f3f2532f5d1a9287f9a1ea5c53aa6c392faf7d": "6d9fb2383ea24f9c5e3301910479e05d",
".git/objects/4b/0102b70c91f740019a887d2e67041eda0d165c": "7e64a612bb9730c21323a5cecd514618",
".git/objects/4b/123fa3bf6a19d0dfb5e0f4ced8b91f844b9936": "48a5a294bfe0b9aa2bfc961fe928630c",
".git/objects/4f/c0bf3824ac59853856ca117a9ced09caf15a52": "58ac63fef6396c5c02618f3969739084",
".git/objects/51/0bbbcb47c5a474d7b2139366ad8a2232e1e9ab": "b8559b0dca8ba992fd5bcfafd06b2b9f",
".git/objects/51/571fcc1e1fff880100880aa17948c1a2d174ee": "7c82cca32386f8e5af42939422204001",
".git/objects/58/55890571ddfe59f9681ba1bb461b713f7d21e5": "b49bfe8a5c61fdb423ccc0158c2fdd50",
".git/objects/5d/7eabab8ec5dad407bdcdaf88412774a132e1af": "23d4a685b6941989eb0cf2cf9059f102",
".git/objects/5d/a1e8439e58cceb292124fd7f0c6ebaf3fdc380": "94d5e7552dc777c3014a8746cfba7728",
".git/objects/5f/ea27486f7d1188435958878df5f6823cb09656": "c7bcb7b2b6e081711e2f3c74a0476934",
".git/objects/60/42cb29f29c200321c5e75acfa36b4c2244e971": "855f05031ca790f9d1cad58725ad2fa8",
".git/objects/60/5ea08d3933cfa3f72b6cb476b663c88d5e5773": "ada5bca97dc7853d973f18b2ca0a571a",
".git/objects/63/02aefc02b3cecf5588bdabd860b96b7d4d7967": "58c619ecf5aba2f2331b32824abfc182",
".git/objects/63/bf4d19f0e5d095c08b114f460f0eba3bd6ebad": "884fe2b91ea53406783d4347b8f8f30a",
".git/objects/64/58e69431034dfe8f8c12cf546718c04aa96e5d": "fe1cd4b2f9c2f42973ddaebc8223d197",
".git/objects/64/bc453c303c3981d8c5275a43d3cfd24a4b8867": "8bdb1a62c9feba9b56285aea06f9c220",
".git/objects/65/2dfc0b3a865493b14ee52632cf8a1f7e21f9ed": "f290a2e66881c82b1a33e8f66c47fe80",
".git/objects/66/03ae27a67e96fbb9a2d8007563841c99d4cd40": "068b3209d46b8821304314016732ca26",
".git/objects/66/2c0372e8ce8e2136358fb52160e43197850ee4": "148578656207c97f0b8fcd757243c39c",
".git/objects/67/842f894b8680efedf9e187bb29541ca5701e3c": "5e517e56c847a7d7b8192ef702493d9a",
".git/objects/67/a1ec0c4f769b314a6d0a06198c4ee7b57e0b07": "5c03df93ab4e4ec420b24e197c67054f",
".git/objects/68/91fdf4b6b4ed2c42a608b856def79d80867016": "70476488504711e04da3a884a87c1e1f",
".git/objects/68/e2d58fd86a6548723f25698d8f7d1c2393721c": "9fb1ffa8c5ba13f06b737d55c9b50a02",
".git/objects/69/a2e6f6553ba322391ae69cc33532dd34e7cbc1": "2c8ff9ad79d7eb00c9438ec3c926fc37",
".git/objects/6c/5fcb78d93c750c7608070f9905331a5062dee6": "6946d548153ba142ff6d2afd7a3e3f62",
".git/objects/6d/4502fca3865d406059b2bb4aac71f5b7c6f67b": "c92d246d6ad7f9eefc9e019b63d7c18c",
".git/objects/6e/0e1b6b9c53a3160dc56e511a48218c336c84f7": "eaf0844ee5fec7d9dc0424c98c153f27",
".git/objects/75/4e5cee0cc23ff09dd6a55fae45ac6ccf7dcf02": "f3df46d465042c06bf225bd51e40bb45",
".git/objects/75/fa22812efbbacb2e7761143a63e4ceb5c9547b": "f70cae5e0ceaf970e50971e7a56d0921",
".git/objects/77/7eb7e1c2c89928d194a83424563edae17b73dc": "a7008b7035ab4b2a98622f8fe0a21a87",
".git/objects/77/febd3673a3cc9c737767fb7884d58f34699dfa": "946ae9f7deea7da3a47a3358d9321422",
".git/objects/79/670f5926985e4b28c8b4872273bada8b03a8f6": "dc26495549a0c71013bb2aeb9e4985b3",
".git/objects/79/f839fcf34263f2b9c3803ba9cfbef2a7b7285f": "2d5618df074239877cebe07865e62ac1",
".git/objects/7a/44778bf04a7080407c9685d317a862f07bb9f2": "b3ccc6e133885ac391d65927b9eda3bb",
".git/objects/7a/c7af1d9471773d096ab652712fa198d256b6ec": "75363efe592ecf405ab83a2fc74e7c52",
".git/objects/7b/2ebcf6487cc6034f68cd5f30d0cb3e3e0d724e": "acf10c25f6bca41733ce099855e4e793",
".git/objects/7d/b680b12a330bee368516458b9525373dcad53a": "8cf58e8d3ce2fa6724ee21e9a92f75e9",
".git/objects/81/2f0317a4b1232378467230dd3b99651ad8b7a2": "248f834c01e3c8012763be903b3fcdac",
".git/objects/82/30ce3c5d4b808d9256032ea57263398fbd3cfc": "2a9c3fbffc5f90d4c426ac9c9fcff3d7",
".git/objects/82/fc629c598abf8d4227a74d4fd3ef2020ce5a30": "1096f69c50cf25c8153085c9929707a3",
".git/objects/84/5f54f5a733faafa8d60b3e80d006e2d460ce20": "1b5f2947e5e54f1106df9c48bf10c6f4",
".git/objects/84/cb5a32b85efc67d9177672df8cd913d3ce69a3": "963902c4988f3145e63d82650ed603fe",
".git/objects/85/8c73bf21550678abffda0dc06d5ccf41907362": "f877a6f97ebca0bd2549269f61d2847a",
".git/objects/89/54603bd05bf4ab0bc69b63af39867d708dfe4a": "5af657b1d90b1112afc32ec7efa4c594",
".git/objects/89/84de5cb01ec8ce90ef05a238a57b1f31d39fa9": "dcb186859805c993244da02fafdf04da",
".git/objects/89/f0a96f65d285ef65d8a52e5e4331de5fd85adf": "5edfa73338af0cc2fecf5ad9325b4c4e",
".git/objects/8c/1c2696aa53a88af78bf1a66a5d67e9979e2a2c": "830b21badfbe0b98114b694aa808240c",
".git/objects/8d/e48d2f390708f632066b3a8c97b48730b77132": "9171fe1eec989abd545569496f328639",
".git/objects/94/12eb705f442946fcf73dbf4d59abf13e1463ca": "ea8f94632a34b45a9ff4035732d99148",
".git/objects/95/1e59099926a25a83a9edbe26b26c9c0cb1c724": "b1a15c99561e1d94ab7ca502ba69d430",
".git/objects/99/a7364d7fec2498ecc2bf9e31a22f3b905c9b72": "e3baa5bf6517eb420e7374994d92fbe2",
".git/objects/9d/8ffdf10a283c498c6c358fd7a9deeb97df4e4f": "cb3ed072c15a2eafda157e836774357d",
".git/objects/9f/41ca55355b999e6f74039323afa5a21490a326": "d2fde2387bc8fc11892c15c21b221b27",
".git/objects/a1/7e5a0945da34944a99f07009f158b149becda9": "50547df263218e97776d20b8b41435b8",
".git/objects/a2/435ede84c75bfa7d8d44c71f4d5f8fad0cc928": "d650f7560e247d85244d918cffe3bf9c",
".git/objects/a6/ca481e846ec46721a9b8d7b6590632917f10e9": "4b52d0579d19762dbf563690d5dae046",
".git/objects/ad/f79c74d088c72c778356a3b40782b3b38f0691": "5adef47500e759dfe4b8c189282c943f",
".git/objects/af/b68e04f5063508f12ef31cf7fa67c09691f7b2": "e9431a6c40abdef1ae4c496170dc17aa",
".git/objects/af/c2db75055f01fb027100af2b70b5d01a2b2fb0": "a00bd51a6c5dd69462febeec12715b07",
".git/objects/b1/59a8ebff51cc84f33cf32b7da36a16268f4d60": "5856499aefbcb69b0126cb05d3f1d97d",
".git/objects/b4/9007c9fafab736b522c63e3b468326c9141934": "d401af2cc4469bfa0cd9a29a26ae7a49",
".git/objects/b6/c5172dd5ac44e1aa5649e78a7a6b7e49351533": "7dc6856bcb1fc6f1fbc0334b7480e4da",
".git/objects/b6/c6caa1bc2ff629f2d9f6e7537d49ab84a5870b": "6eab8c443c345143828a73847900d8a9",
".git/objects/b9/effcd475110d93ecb280c21d7731a8f6db51b6": "b5cbeb65cde83493cccc2b71db8e0efd",
".git/objects/bd/20439d345a6b8dc94e445a661205e0e09341e2": "1aa7874b6035d95bf2ef664d17a19188",
".git/objects/be/610143c66655970e893d2c8e4e9d7df4459d6b": "0c2a5a018c8f615bd6a00e91d929285b",
".git/objects/bf/e2dcf63489c23e2f73911474a51c38466db921": "3abf0b5e51d45be5a09beba67d564129",
".git/objects/c1/53a5aa555c70a3cbfae33c42384341a6d19fe3": "0c2e5b1312adbed0dbb54b4699393578",
".git/objects/c6/8441450272923f05251b177495d2a7285aef1c": "2b535894ee8b03ad80928f10f27c4f79",
".git/objects/ca/00f990fd672f0805756b4852b67d6478d5d9c2": "857fec38886d7892b5bcf929f527ab2a",
".git/objects/cb/33e81b2171dbae914fc72b4811e9acfbd18eed": "7e78ee2cdfc0462b5a76208470d66d9e",
".git/objects/cd/8863ab5caff06a7e26dd43e9a658c2c80fd0a3": "74f1aa22b30d7a30aba2edbcd884a2a2",
".git/objects/cf/af3c5a494b1a83ef647bb6ce571fbaca800903": "3e1423c6318b9901865a6a760e9af060",
".git/objects/d5/ed9ab0fd05d990677b6b1cee67614385a80015": "e497398c12d479d16da7de509877b04a",
".git/objects/d6/2d97f537a96790cc8553151c7a44d411c86105": "25fd831f41de6341fb2ae1ffdf3421ce",
".git/objects/db/68390e698b950d9164be5cc25b33376ace57af": "f3af034e0a7335d48864e40107b7defe",
".git/objects/dd/2abbcffa9a0148735856fa0e350da1cbb943a3": "8dc84b2ac74a0d9ba0e49e59d6b33bbc",
".git/objects/e3/76be17d5dda0c30ad13bdd16e930176868a7ee": "35fc20038648d236920c0afbacccdb2a",
".git/objects/e5/8033b174201f7b395dfa3c18e98978b88b392f": "ca8edeaf31cd7ed8d6a77fb1854fd190",
".git/objects/e6/54a38a4ce724b088f2b8296efc18702ae3c7bb": "75ab2da61defeb046f2e3594addca303",
".git/objects/ea/ba26cbd5c8b28b5132105ee460a62ed7530174": "892d688537b6cea763b9ba54faa717c7",
".git/objects/eb/192cdaffac46b7768a392c5366c9bac96993f6": "1cceca4e74eb7a5967a0ccd2deb0d325",
".git/objects/eb/9caec0948244f7ec1e7c6f5533a352b350e671": "9790f8cfa4b302f7bc72903b9002f201",
".git/objects/ec/24ab19ce6e20d53482cc589b8aa0ee0219da88": "2b41636bc433b9dff976a853eeb5c36f",
".git/objects/f7/14cd9a79b8d2c58262762e92be643cbed33a63": "17cac6f9946bac3b854988f8ad3abf71",
".git/objects/f7/5a773bffa3a1362efeaa56e8643f127c3f47b9": "d846085c4628a3b56a1453617f477a1d",
".git/objects/f9/54d39736c8b3085fd38260b4f0d644f912dd16": "0481b3a5896c14916600ea34b6a9e0dc",
".git/objects/fa/e7f2e72535e03ed160a21d0ffdd8eda4f4eed8": "19da3400026790026e7b8782ce2a300f",
".git/objects/fc/890f981ae3f5e0f241acecc505d151b9e8d110": "eb08994050debfa941f7da56d3ef2075",
".git/objects/fd/f905a97d4e654f42e60a3cc3ef517281e0f920": "0a2bc291669c9ec25760f3adfeb2451b",
".git/objects/pack/pack-0c10061c8cbcae67ed57461c06fad06b8158dfc2.idx": "4dd081355faa5c411646d6cc261b5c0b",
".git/objects/pack/pack-0c10061c8cbcae67ed57461c06fad06b8158dfc2.pack": "e2784243a7b729ebdd3eff89b9977bdf",
".git/packed-refs": "19289650be398f6f7bc6870a29f4d7b7",
".git/refs/heads/master": "57ab369a6ee1d588d90f7590eb113fc2",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "57ab369a6ee1d588d90f7590eb113fc2",
"assets/AssetManifest.json": "51a826dfb53a28186ebf591f273c1a99",
"assets/assets/images/4-3.jpg": "268763d545d425ebe22e25b2da8849a4",
"assets/assets/images/faaliyetlerimiz/basindabiz.png": "2aab3e0b16b9af83fff693ca5a5f09cf",
"assets/assets/images/faaliyetlerimiz/ders-notlarimiz.png": "e33111643b3cc7222b4e5aada14910cd",
"assets/assets/images/faaliyetlerimiz/makale.png": "c803e2771af7df718db2320ac5d6d908",
"assets/assets/images/faaliyetlerimiz/online-egitimlerimiz.png": "0192b21ccd27c96223dd70c80e39516f",
"assets/assets/images/faaliyetlerimiz/online-kutuphanemiz.png": "986a3cced2be6194772e4eb644b85f31",
"assets/assets/images/faaliyetlerimiz/projelerimiz.png": "aac0a9c8df879ca2bf631ad6c09cd8c2",
"assets/assets/images/faaliyetlerimiz/sosyal-etkinliklerimiz.png": "fedceda84b62d16bd3603135e5489dec",
"assets/assets/images/faaliyetlerimiz/teknik-etkinliklerimiz.png": "7149981e1bb764242f58abb972f4af51",
"assets/assets/images/faaliyetlerimiz/video-egitimlerimiz.png": "e401f709974e54e664e7ecbea03e8122",
"assets/assets/images/kolaj.png": "37cbbfea18513d21aa52e47c10aac1d2",
"assets/assets/images/logo/favicon.png": "d728b9b90bea963c3995789095c64079",
"assets/assets/images/logo/Icon-192.png": "44a5832c03c9a29c4841ce34392c04d8",
"assets/assets/images/logo/Icon-512.png": "184ce9886f728542890b8c6e5a8c4232",
"assets/assets/images/logo/logo-128.png": "0bd24fedd09c0200e249ffac95959a18",
"assets/assets/images/logo/logo-256.png": "14d4f335660eb2f89ab5e1667b9bb42f",
"assets/assets/images/logo/logo-512.png": "184ce9886f728542890b8c6e5a8c4232",
"assets/assets/images/logo/logo-64.png": "78f06237ec80ca007ead220e9f189830",
"assets/assets/images/logo/logo-yatay.png": "4020f3a866351bbb2ba4354e3d290bda",
"assets/assets/images/sosyalMedya/discord.png": "39a564ccee762aee938268cb2207094a",
"assets/assets/images/sosyalMedya/facebook.png": "dfed48900fd935dbdc604c06c76721b4",
"assets/assets/images/sosyalMedya/github.png": "1dfad82968ef75c2b7072ad52c10ece5",
"assets/assets/images/sosyalMedya/instagram.png": "6f3dbfce0f2ed8376627878f02d1b85a",
"assets/assets/images/sosyalMedya/linkedin.png": "f81f084330de2f3ca1902d289ec3b616",
"assets/assets/images/sosyalMedya/reddit.png": "5f0b9a7a4c8d881d591013c34cc94f00",
"assets/assets/images/sosyalMedya/twitch.png": "ddfe9df87aceecab52f657a4950c754a",
"assets/assets/images/sosyalMedya/twitter.png": "4a5eeb9394152266580c171ec01cc860",
"assets/assets/images/sosyalMedya/youtube.png": "1099763b9fa768c3f4030fe2ff8c39f5",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "83af5dc6b4ecd5b9eb1d7d4b2eb32b78",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "d728b9b90bea963c3995789095c64079",
"icons/Icon-192.png": "44a5832c03c9a29c4841ce34392c04d8",
"icons/Icon-512.png": "184ce9886f728542890b8c6e5a8c4232",
"index.html": "99bf7753991182372916ada109aa26f5",
"/": "99bf7753991182372916ada109aa26f5",
"main.dart.js": "a8dc29be3d229a6c108c2056a29fdce6",
"manifest.json": "492fdb19bfb7c531d5756514a8d5d454"
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
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
