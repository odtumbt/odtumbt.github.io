'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "d3d33d18604b541662e911d4eb3745f3",
"/": "d3d33d18604b541662e911d4eb3745f3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/assets/images/faaliyetlerimiz/online-egitimlerimiz.png": "0192b21ccd27c96223dd70c80e39516f",
"assets/assets/images/faaliyetlerimiz/kaynasma-etkinliklerimiz.png": "fedceda84b62d16bd3603135e5489dec",
"assets/assets/images/faaliyetlerimiz/projelerimiz.png": "aac0a9c8df879ca2bf631ad6c09cd8c2",
"assets/assets/images/faaliyetlerimiz/teknik-etkinliklerimiz.png": "7149981e1bb764242f58abb972f4af51",
"assets/assets/images/4-3.jpg": "268763d545d425ebe22e25b2da8849a4",
"assets/assets/images/logo/logo-128.png": "0bd24fedd09c0200e249ffac95959a18",
"assets/assets/images/logo/logo-64.png": "78f06237ec80ca007ead220e9f189830",
"assets/assets/images/logo/logo-512.png": "184ce9886f728542890b8c6e5a8c4232",
"assets/assets/images/logo/logo-256.png": "14d4f335660eb2f89ab5e1667b9bb42f",
"assets/assets/images/logo/Icon-512.png": "184ce9886f728542890b8c6e5a8c4232",
"assets/assets/images/logo/Icon-192.png": "44a5832c03c9a29c4841ce34392c04d8",
"assets/assets/images/logo/favicon.png": "d728b9b90bea963c3995789095c64079",
"assets/assets/images/sosyalMedya/linkedin.png": "f81f084330de2f3ca1902d289ec3b616",
"assets/assets/images/sosyalMedya/youtube.png": "1099763b9fa768c3f4030fe2ff8c39f5",
"assets/assets/images/sosyalMedya/twitch.png": "ddfe9df87aceecab52f657a4950c754a",
"assets/assets/images/sosyalMedya/twitter.png": "4a5eeb9394152266580c171ec01cc860",
"assets/assets/images/sosyalMedya/reddit.png": "5f0b9a7a4c8d881d591013c34cc94f00",
"assets/assets/images/sosyalMedya/discord.png": "39a564ccee762aee938268cb2207094a",
"assets/assets/images/sosyalMedya/instagram.png": "6f3dbfce0f2ed8376627878f02d1b85a",
"assets/assets/images/sosyalMedya/github.png": "1dfad82968ef75c2b7072ad52c10ece5",
"assets/assets/images/sosyalMedya/facebook.png": "dfed48900fd935dbdc604c06c76721b4",
"assets/assets/images/sponsorlogo/kazanetsucuklari.png": "4a0a9d16c01a1ab459c2fead54905f63",
"assets/assets/images/sponsorlogo/gizemfrit.png": "037c41a9927a0971401717916bf4694e",
"assets/assets/images/sponsorlogo/adimodtu.png": "664faf677488cced6a8cb3c82e2bc169",
"assets/assets/images/sponsorlogo/dowaksa.png": "863f11e5fea2543cb43c47813e88d99b",
"assets/assets/images/kolaj.png": "37cbbfea18513d21aa52e47c10aac1d2",
"assets/AssetManifest.json": "878e0223f0825ad0e9ada2b56bc56273",
"assets/NOTICES": "b12d1965a1a55989bb7ff33f6f59eb50",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"manifest.json": "03faa38e777d4dd1f5d1c5e0e7ebfd7e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3fdde1c9c2ae9727677b2c80faf6c7e7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/index": "db2a2d7d3fbfe647f1535aa1cd3aa71b",
".git/objects/32/8df6de5a866464fe70f342f663e8e8d581742b": "e3d0ea6ca951cd62888bb06d4d0e69f3",
".git/objects/32/77d19348e59764aa96afd8f593052b14679789": "6edbef7430de55f8c3f774c7aca6c6bb",
".git/objects/04/582de87e431105a14b04537faf8a77f19a5363": "8c47aed48343547d5a5d51dccc5934d9",
".git/objects/04/64e58d25d5a3c9dbc99cb46be67625c2c14b8d": "286e3b112bb46c58133c1a6dd8bf0df4",
".git/objects/04/cb1bb3fb9780bc465f1fa5a8ce6a8bfc7410ab": "36f55fc825ec8042151f40a510136259",
".git/objects/b7/bdf406322736c224fff3e1e65bd60459225fc0": "23978f806b7839e8cf83c897314c9b29",
".git/objects/b7/97a9ab6ea44e9b78a9e6c97e15d117e2cb3b8e": "ad09bb426a4f0daba40b6311f7835112",
".git/objects/b7/500194b247e4deb1333cbc718a9116f6a976b0": "92ff37d76ee0686d948d47c214016309",
".git/objects/4e/f0b188c47e6b0fe48a832e512358aa94154be1": "ad6f8022376cf1d4e6b186bd234bf7a3",
".git/objects/4e/70b50538b72c0207374d32a3ef846a51131a6a": "733f69781141f3c8bbb49838979dd888",
".git/objects/4e/219a8438ace165fd0c51701b7cc908edbf1efc": "b4d64b20dcb657c215bcd7c0ba9d0c35",
".git/objects/b4/3a27af5e0900619d976744eef67bfce4f9b6d3": "8b7127707d973f198ebaf88fd9ee793e",
".git/objects/pack/pack-9ed90a332cc12d2cbb13396e01e3825385daa973.idx": "710c173fdff4d2a2c836854f55413a36",
".git/objects/pack/pack-9ed90a332cc12d2cbb13396e01e3825385daa973.pack": "f6f875226c851afa358d5a5f6ac056a0",
".git/objects/ce/519c38219a874a241427ba1a7394eb526d7650": "20e5e5de469d8d7f1cdc33fb3d2c9515",
".git/objects/d6/35a4b2aef3d7a0ebe0f42a34bd7e47fdb26c2c": "78950b1ccb13eccae59522f8b5da5d3d",
".git/objects/5d/8830ca6d9b47bf2bc0ae9f604f504109575d1f": "296da89fe752ff5a5aed648e6f01c4f3",
".git/objects/ca/c6a57ad86bb297aee4664429480131c14d7537": "ccd84e86eadf19bd20ec2ccdce568d3e",
".git/objects/61/8ac6c0eefcee1ce2d5051b7a860a56a03895e3": "9293c09e021ed18fcadc48637605ebf7",
".git/objects/63/a7e4e491c8d8adea88f9692dc425b364d453e3": "917e8eb03fd4a31560f5012f201ca767",
".git/objects/63/7ef8c332307392a645c9b289a6b3d0de0a4fd6": "6d232cb67a030672316b9b88defa394a",
".git/objects/63/02e13b36e74b0deda74671623479aa4f95d973": "9d3ca458a14e6733bb3ded62692493a4",
".git/objects/63/0366e44141c1a69781db07020746c6f3081c9d": "82d66af7f12d10594bd4dc18ec20922e",
".git/objects/1e/eca63a05cbb2381b444fe7faf05495c8da259e": "5ca76df10b3670c0f324ceccc875d024",
".git/objects/7b/3f9be0a5773af2aef6c95ffc89ee35aaa8742a": "5ebd3d4821c9d68d9de0ae2d915207b8",
".git/objects/7b/88797ee723afa2cef503be2e895ce104413318": "ffeb87e39a424e82900199e1d940c8c8",
".git/objects/7b/68ae3a0fee0726b5e6384b84737059f3eb4191": "ff391d361082c6bb02eb78dec8a205e9",
".git/objects/a7/2ecdd1e4e865f19744e3f4dc484033dc02dd3e": "cd2453ae8f7fffac85bb6e3c24a55b09",
".git/objects/02/601035b24b8e1cd925ef01f9f75ed59e9d1f31": "49fd0ff2c65f2b254989ade31bc67a25",
".git/objects/02/21da87702363109ab257d1e31d7be92a4e996b": "77bed236e2162db0f34f69357236cb45",
".git/objects/02/b3446cbad08ccc22a385f02edfe59769418504": "d38baeed8cc5937f873c667ff2477069",
".git/objects/14/0da5546a8f3a4de564fc55f05cf85197f5dcab": "354d83c84f6cab51d4039d7d62f157e9",
".git/objects/89/4e9e988303775da29ccf2fb1e1a418671ee205": "f7ff6042b401af36be28d13f65526f08",
".git/objects/89/d48c02d60f1d8336bb3aee06c1defb4c38b4af": "7d956ba3e649daed5a9ff5b0c3255545",
".git/objects/89/8f77dd78d61654936c1db9a704d40cb4fd91a0": "3ed3d65dbe0973d64004fc78228350a3",
".git/objects/af/098c68dd413074c1a49836af825c21a5a45e4b": "296c13afbcc0d7bfcdbab3c5ab71fa88",
".git/objects/af/04791df9a3792864e3e0feb27fcd87a0e5035f": "a93aa6026aa5d5d9ca3d7b794c5b17a0",
".git/objects/d3/f14351910406fc4255e60ba4ac2a8aba7f9aca": "c89f149f6a77d3f5f82014413c2e7a96",
".git/objects/aa/21deddb35b51c3eab3cf009c9e3f80086346b5": "fc356c75011a655954704cd2877e28fb",
".git/objects/fe/76f9238417829722f276d3e8a9b35838067620": "8bf3f64f2256ea41b3e4274adb0a58b2",
".git/objects/f9/08e9be2d2b8f1c7342aa17e87e8b4bda88cc34": "18952cd9a27fde5df17730b34732e8e3",
".git/objects/3d/631e8c0f2902688937bb72ff3603b01ac2a6aa": "cb002ffa8a8ec7fc1299da62da248568",
".git/objects/fa/efcc2d3296d03e9825d5840500ed2bf793c883": "16bf41883136023aff6c42ec753e872c",
".git/objects/fa/4721739c5ad295265efd1994cd1a9ea2a78d5f": "13f5e108bd32558b9650c98c23c109b2",
".git/objects/ed/17175bbb8307a3c2eb96d6b44a220a52af89e2": "5f6da313e6734a8f5042fa704e7d5c50",
".git/objects/ed/a7574038a44dfb6f9abef92ebf514fd20cc3a5": "6198bd6e3e830de4971c50ff79f359e9",
".git/objects/88/71c4139d75cfe5aa51ded1a58880d4eaed4156": "e03c0c3be0624ad89de978eb8d1aef54",
".git/objects/ee/cb45052e4100a46c5e3e471edc3d503ff467b4": "d481101a638b9cdf6ecb036986912ac0",
".git/objects/44/d36406ce542003fc24da88dc24ecc0a7e2e224": "7da0d94f5aa11fccded1000b5a063e28",
".git/objects/44/79d1b10eadf0d95c8631d7d5efccc2e0483b85": "70c09294f2ee4c2d1a54e9e8ec45bcb3",
".git/objects/44/b4544a2ce976d4dacdaee2848de9da29f4c69b": "acb245f9e1e9da2e5d674e0b811d19d7",
".git/objects/44/2e8978234e8b9c65042712583c56b277ecd711": "6b76b0bdcefa6e991da2bdef2a014cc5",
".git/objects/df/52a2d7e1b49646800514fca6d7fbaa632c0819": "6f06efef978338856ad3018f00d91ec9",
".git/objects/df/31613603d87c188982a47445ec0222957a9873": "69f41f81f3e65cef0236a7c4cb2c4c34",
".git/objects/7e/a3f0a131990d009f2fb003189cfbd652ad42af": "873a1e09df7653dfc75417819a73551d",
".git/objects/a4/24de7d1b58eb31baa8f5cea50fb02ce6b73b0a": "1c587d1a71f96e79057847c92277b8c3",
".git/objects/d7/208fbb18b0900abb962a2836bffb0a41594296": "00eeac068230eea246af28f11fb44ea6",
".git/objects/de/ffa561686acc58cc456de821a5ba377e1a36a7": "d44cce5c5c27f760576b91fac993e46b",
".git/objects/fd/12495cd6c892de7029aed735c82d5ddd5f48c7": "923393c002d08634cabce1a7d3d975d7",
".git/objects/fd/cb1c0ea4c9329ddc7b784fb71f588eecb3cc73": "18f4ce8d6d78dff237eab2fc42a10f04",
".git/objects/fd/b587ae0c7933a93de04e117b9f16caf2730e58": "b2d5301a1d7bf180d522eff7314f503a",
".git/objects/41/e606842abf80a85bf6965c5da470fc2ba9a30e": "1042f16dc8268e18c3237ed92d945e72",
".git/objects/41/d2acc08a6b78c813562b243bbc5d8121249f0c": "66cff3bea6d443bff1c0df80772ff440",
".git/objects/84/59db25c691c34eb86c5900ea904d7b33d87e62": "917c84bbef0a8d74ee0f76542a0e9d07",
".git/objects/ae/4b71ffd871aea031f75952c62fa3195dd86cb4": "569ffa0556da60097620fd15048477a4",
".git/objects/91/8002007b17c63cf0a95c3ca9e1e8cb87f7b853": "cb51734ba406219fc1fb98afa0f4ccf5",
".git/objects/91/137dfde1694ddbedfaed90d9b82af1571a6c10": "70acb5e66b803b7d56e73153a4672c10",
".git/objects/55/d36ff373f830fd4804521ac499ff227d052f23": "c707517c1e8a2dfb41a20e9369335180",
".git/objects/55/93316d72bec1618da432623f56b2756b4ad90f": "542a80577e59e3e103ee06f8edfe2fc9",
".git/objects/12/8d6454d3a952f43c0841fb108b86ff72551a49": "4f1ae13710b17b229bd55f94f6765cf5",
".git/objects/12/8f1e86c401beb009b606c13361a2e13aa45a84": "bdeb3eba3eb4ec634390b57e448ba632",
".git/objects/12/25aa9e07c023fde868adb723cc835fba20ba10": "8c00b4d8fcbf0aa4ec60a0046ab74539",
".git/objects/86/0584ee5b51752781eb490556f8c271bafb66b4": "80a22cdc2c77dd7274597959897a7d5e",
".git/objects/72/f8e39b18cd802660525c147c5c881d1beca63d": "98f64294c41cc4cae618b7365e776969",
".git/objects/72/288ec8893459ee1a1bfaf8fc8d89f0a469c391": "8bc68825f98dde2ef4fbccd810000d15",
".git/objects/b2/6fc1a8181ff03bd3a49dc877642872e83f0d28": "df9117841d0cf8564d3abb08d2de147a",
".git/objects/b2/a6bca1efa15d4299a4391498c01aa23258eeab": "e74e931a0cc3c967844607468dedde00",
".git/objects/46/59e1e3daf035df023cb544302927e5da85ee6c": "6ae108d6ec2e7a2cde48515875b5dd3c",
".git/objects/46/efd19707cca1af59102119ef5d2aceac1edf02": "bfbf2fd0c9a2ef25161076b96ea24040",
".git/objects/eb/55349935004202b3a0c6c4b11e941016ea1c66": "a0c39cfa17ee147797801f123fe7119d",
".git/objects/81/27235f4f46323ef62f2054c7d0957a38db2dfc": "660b394a223abfb5bd4545257af17181",
".git/objects/98/037373af1da40474305f89646e71e2bbb262a1": "7ee98351e4dd33b2f228e3caf2842b3a",
".git/objects/16/9eeb8f2b498a1cd05e71f4b624a15e8f27ac63": "1b599b1458b33583047868badb23f72d",
".git/objects/16/f78d0eadd62356d874c3cba984aa06205a1909": "b9573b19edb3274ba9b588909b38856f",
".git/objects/16/80bd1f7d0136a09665474ca4449569a87681d7": "bc461b0f902466937c3c3401087280c4",
".git/objects/16/d73480a1e11a6a8c4a58b81cbcdf9dd221971c": "700af69f5a90f51e4a068f9a9dfc01fa",
".git/objects/16/dd8f16e00aaaf7ee83bfd451438095ad1c70c7": "296bcc031d4f33c3be165c8a46105ab8",
".git/objects/c1/28f8c14d8005c9ecb582a530bb574c128765fa": "9782361ef06ee02b3bab2a19503f7a50",
".git/objects/c1/f8224f5d71b9a03cbefa9c2019eeccbfa19364": "a1ceafabeb17083b1a6a0c1b881f1701",
".git/objects/20/0ab849a701b584ebfd61307aaed1eb8c8d2773": "da922fcad443fbeaba6f5e941da76f0e",
".git/objects/29/1a735331158d9f101fbac6d4b1bc5507f8ef4d": "739393be5641375ad83dbc12a28b8fe7",
".git/objects/29/8ef1bdb553c6d193e1fb05398d11381fbbebe4": "27f51bb8fc4fe45bb78590c4fc4f32d9",
".git/objects/da/da14170c6ade4b44e31aafab516a308d227a79": "2edd2bfc6755ab113db8d1529dbd099a",
".git/objects/92/b177bdbefda09efd15640b74d6c72c44ab3ef9": "962924fb98801e416a06f558875c110b",
".git/objects/92/66d606dec9b88b92b4f75cf517219399841f4f": "fb794b6ec4d02ce3dccba7b950215e48",
".git/objects/92/2c8c1242101017a42afccf1f32056f6a56746a": "bbf9edace1e376802549324b4beb4dac",
".git/objects/0f/61a5af6f1a4e09743b264a72f2d7a0db9b6a89": "39069773b3b551bda2a6188e9f410c6f",
".git/objects/0f/17fcadeb848d5cfaa13f85428ab2b7b9845658": "2352d3708e31d5d25f1eacf2f0e30574",
".git/objects/0f/c498953f945213f1eb4957b885ffdb4e937582": "060e6b026f14be24613ef6aaab7e766e",
".git/objects/42/4b68842a988f5c9ad4b082c77a930a4ee9c577": "8826abe75f9391550649cfa1803da910",
".git/objects/42/15ccc3964f475d0719609481bc806bfb53e9cd": "d48c52f4838c0146b4c1920eab7cdfd8",
".git/objects/0c/bc12a9b83c0d467e238c8594b28ecc70230fab": "65e9b8caa1b8fbb9c853dcb673264e6f",
".git/objects/96/26c6253874a9dc80e17b37e7e84ac8e70e3afb": "b1a2ed29237864f8978f03e0dc384d29",
".git/objects/96/3968a5829c3e4d85b3e8a4b8968a076cfd25c8": "39eff065a1e71cbf5e479bb5317c15e5",
".git/objects/db/750e55d9ccf5b0d0e284aa5c1ebbde4ddf8743": "acf9be33ec966681511850fa4e9475fa",
".git/objects/db/f2d28d20c60fd937cf16fd26df6352559cd80e": "3fd6bec59209f7646ccf164e4c00da69",
".git/objects/db/485f1d0506032b7138ab4d078ae88c8a926931": "c6030df4aa0e1065874204544053db08",
".git/objects/11/82e81ead506fb03098d99f03792318e3973aff": "8a7535d8f6cc446b9d129d06fd4abe00",
".git/objects/3b/42dcd5b116cca06b3f3151b136c34829f5c022": "0649c772b8322ec7854c380bcd22f78d",
".git/objects/e2/ed6473b208433fb9a542686d384b9d1977c161": "978be56cc383dd966d59bd6c2f5cdf04",
".git/objects/e2/112ef3be239fb935ac29beae96d47a7b877829": "5f2c7952bb8931ba1a06df5c03b8ab35",
".git/objects/e2/84234e5c1d5f7e6be1b316263f699aa4072d76": "55139a72fed076fad14fdabe068a6afa",
".git/objects/e2/aa7c2623d3d4b1aefc9f35299795f2b81e37b8": "b43b4b7078b90a83501ed7f08004e50e",
".git/objects/48/7ae397ac696640f2128b5fbf59cbe6b7809cac": "d6a2c70a058643556b8a793537d31d3e",
".git/objects/b1/2524ab19cb0246eb23ac3dda323c6105896405": "0297fc2b4cf187f606c3e7226028970b",
".git/objects/8e/94abc38a984638ed841fea22f044f3cfa2d33d": "2435cf39e787ca60685f2b8f0a66b315",
".git/objects/8e/2ca7368867859fcbc82129d72c9ab57beb28f2": "ec3bf35d51792e158f71deaf9239ecd6",
".git/objects/8e/4d874006135f493210072f6e4fbaf25a864f4d": "c2cbc03e11cd6e46c4f317e841439d3b",
".git/objects/00/88740838e2ffaa3e18b912ac8d6381e4000501": "ce65d6fd7488d21075446f8b4c694f8e",
".git/objects/ba/071e5650a16070c9b1bb2cab717afe85384068": "97ad32be9be7ee1bb78a9cadf5f01123",
".git/objects/d8/226f6fd1dd603baf8eaa086a940e9d9339806c": "01ed58e296987cf5fc057ee6e2e6c673",
".git/objects/7f/2e78468b5965e952a934e4b63da37a27f3eb5f": "7fd61e4f708714327c693282e28b2e60",
".git/objects/7f/61713f3d416cd3f740cdeccfce2769c57827a7": "48c633d65046726a1fa9dc290e601f9d",
".git/objects/15/b5470bcd860b98d01dbbfc0eaec2ff44949d84": "c86a1a0e40ee219acd768bdf0fea5745",
".git/objects/15/9b866aa938d215a3ef1ad40976cb173139e5a1": "0ce80871d6ad2ab0df3adefebe514354",
".git/objects/c7/0cca3dd9c4e9f0909dcbbc98fd240c4e79c182": "2c4c932beda03e8a70201ab704362f41",
".git/objects/7d/c69ef345d7764cb77c451df275fa25e9d047f7": "df668b862473b6d91b5b3a9404985e63",
".git/objects/ad/4388e831fb9816acfeed56f6c6fac2191ec754": "fd1b5a0a9a5a8f8850d9efb4b99fa64e",
".git/objects/ad/160af63966018364344015c1dd05f374bc49cf": "25b68b1faba2aa6990ad01a3a65c9fc4",
".git/objects/ad/615a395059e423641cfa653084bfdf305ef339": "adcc36c2211d9417e07e1a270a1012e7",
".git/objects/f3/bcffd62f8c0a5cb9ccd491015eec6dcb6b2d32": "c6c997c44a52741bce344a25502d9808",
".git/objects/f3/7bcc5932902eae076446c5928a74f8105eeb4b": "517e4e38cbffbb8f1a6f9a6a0b39406a",
".git/objects/24/42a7ba22047ad6ecbbd28de84e66a342dd5675": "5883f53752aa07383db7a673a262550d",
".git/objects/9b/c86754c55b913e2a451f001bf6de7b914c324e": "ed26e3a483b6b980c53dcc28284f59bf",
".git/objects/9b/21f000bce517f9c5af7e1c171f062983324841": "d86cfe4fc69c758f5795ccaa7d92d457",
".git/objects/90/ae97f9082fcf2913d06232f511fe06ad9ee1a9": "312202ff9c9806070c7d87f404fad755",
".git/objects/90/2fbd697205ccbe54ab7d1da2b96c90fd85e287": "f3694db2bbbaeadf06078f6e1ad8eecf",
".git/objects/90/eaf949826eacfb1d14934eb92015a48166274c": "8d359b823ab23651238517a2a2118b39",
".git/objects/c5/b1482fc01840aac10c8e08bada693ecdb6d1ee": "56db75a240e9533f766c2fb5f728cd3e",
".git/objects/05/8c380d8b20a3980a4fc3f6c5c09c17e72e86e6": "504f012b1f20a8f0f1ae26b4a84d2acd",
".git/objects/4c/6269ca7ddc12a28267ac4e0b7bd6e0c12f7889": "c4b893c9c8b210803c30c57c648250f2",
".git/objects/4c/81691382e809e92549f76ced85cc67e7165d85": "9986fe1236ad0f0135e97b299eb159ac",
".git/objects/ea/3155ee5f758e7a083bc6ba5d49e9171e968f82": "2bba6428b667be2b8e27f4e465f958ee",
".git/objects/ea/6ffd0545b38054a5c2903d3737d907e927d23b": "d83bdd46ded59d2b83995023069b5558",
".git/objects/ea/ec47e2702bcf5771324ed97c3997cb3867ce91": "ef6a2b4cafc805887f0e38f3abee42ea",
".git/objects/1a/07f16c23310275f2974f65c0b14784ce284500": "320fb08c6867b06d1659f723df11403e",
".git/objects/1a/8d217e3bf23f8bdbbf8b148d55e270ea6534da": "c26860fa8d4c2e3a52488a98f7a09d82",
".git/objects/1a/e3c8c83c1ede75788e15d27d4da0eed2b79347": "0737dc966eb8da74a23a4cd0ecaf9ffa",
".git/objects/2a/3200a954b3f65d30d4b80a2ab0874fc37248c8": "0c2033c253862ffd85fade9d587d6c23",
".git/objects/2a/0c8f744520fba2f3cef6f0e551cddac7d6afb6": "d89fb054d5054db67e75335c3185255b",
".git/objects/2a/79a4f9e647a155db75493ac2a6b2b53e19f702": "41264d475a8b3dc9e3dfcf81f340b36b",
".git/objects/79/fde4d71224eab68a6e02f07c95b3a6eeff1107": "68136f9522a434326ce78d386d05e29d",
".git/objects/d5/6a309fe154bf42f16997809b9b011f03edbf16": "a742d1465fe5dc3b226f569081b28b5d",
".git/objects/5e/9fd001f64a23fca804fafa851059a721ffd4a2": "2fb99ae08640460dfaed641d091f15cf",
".git/objects/f1/1a0002c706d1742d3a65f609b5668bf407fb2f": "8b17ca8283367a0556685ee4c129761b",
".git/objects/cc/41f7908dfdf35b272e57ceff27f9de9d9a656a": "8061938fdfe4b3c861c7cd666cfb31d4",
".git/objects/cc/76165a1b71f296de1e79eab8b6ae7fb3388512": "ed4f005760d8eff95d3019934679d608",
".git/objects/31/cab88ddcfc1d34e44ac6366362f05adcd5c675": "ca76c3ecce2994bba7fcc620968baa48",
".git/objects/e4/5e600b40bf273f62b2a09d6c67c6ee74b20557": "f579502e90abc59cf0279bcd8b1bd5b4",
".git/objects/e4/15cc48ab1b8ad6f62e619c3b6e95a5aeefc0fe": "c0981410b7427065d16e181018ee971a",
".git/objects/8c/c79f2f25cf37026a822908ff62e5f2d28fcffa": "6e8ea5563e3226e75fdb70f7baaa722b",
".git/objects/8c/7fd8456f0afbe850ead257c7b8e99afd24a657": "32e5b3bb3d2296661850688b559f5bfa",
".git/objects/8c/7563870c678624f685a1c93edb89fba8fdb1d2": "401de6af5ad1c512f25336778f015d1d",
".git/objects/3f/cb7a729c74b38749f04b31e2a47f49bdda4253": "5bbe8b1ac9c04fd31806841ffbbcd84f",
".git/objects/3f/2e207919e87aff2643ec1ce829211ac1fa5f10": "f9ccf9f66821f068006d4a5ec36b4581",
".git/objects/23/49455253a228e266031f152e22029207be6d98": "afb8df2dbe901ed7cdaad0753b68181a",
".git/objects/21/a522ac01253ace5747a1bc49df2e01a68cef5a": "840d2c60df9b75af4d5cb5b20933f266",
".git/objects/21/35e31208fa3cab1ef140c1e7bad72d5869161a": "a2b5eca25f541a1b75da16ff12c87c32",
".git/objects/54/d75e036595bf685945366573b280d70b89d2f1": "b590319307c47049ab0f80ee70fc904e",
".git/objects/54/9273cb4ea919a7e6bedf27d79f59e73feabe9a": "66092bd828073aa4ce70dae2029f68c5",
".git/objects/54/18e46a63764efbe8e3d03be2d1c0000a9b94cb": "e86d74c83f1a63bb00b2bccb8b63ecb5",
".git/objects/e6/f47167fcd8bf5ec965f8bec63b88591bcd5cb8": "26676043085517220287fa90acb23ade",
".git/objects/e6/d32a5f5ac5502914a2fd05ee6da8dae48447b4": "02a217be210f977f0164d30e973f36d7",
".git/objects/ac/dc23c0a35afc7b66df2d0238474df5feb48175": "7bfcf8da94f7ad8fa4e62f0b7dc63826",
".git/objects/f0/98472d54357f216e525a03d8764c328b51fdfd": "13b4e20aa1aa2a08b91769f14e30037d",
".git/objects/67/37b32ec0aa58dad6e90e2aafe665fa74e1c089": "a943cde8587660158955b4d9e6165748",
".git/objects/67/628c71e64d04472a601f9fd89dd2a8d0b5844d": "c789479af2ac98f2dfcd194483f835c3",
".git/objects/52/c8f38eceb166b8a19fe3861959e92d7557f33d": "d162487c361ca8d932283fe5358d5e17",
".git/objects/d9/df42b7758b7c6af4234639f863c18f50e3c81d": "565a3f4b746c22fa690e9bb153ac8d0c",
".git/objects/36/a8098af1cc6daa206a10e95ee8ffc5f4a3eab8": "114e5c5545db4cd9c2491cc35da0b873",
".git/objects/5c/e77e5ce1ef6cd896b37ebe99ef2b0ddcf97996": "bc8e5be4e23e315cd6b35a7bbd81c9db",
".git/objects/64/a7b5b5eba2d387d718fa0cfbd3c2c489dc7f75": "cdc32b6473c968fb74447bfc47fad8f6",
".git/objects/59/12234e3a3f00353b5c8528ac8422a897e48a95": "222b66311e2a32771e1f59cb2d1881bb",
".git/objects/c8/cf7f80704c3d4485fec2480037f7838c541f4b": "d0214774c1db929e06e6351c02897e8e",
".git/objects/c8/4ca94ed52e2ed43ff0cf595bee1c5dcf4b93c1": "80af6b540ebb2baa02d88fc8094d6da4",
".git/objects/c8/0fe83e1cc27b35a94e75de1641c673d4634e4e": "c470b6f30ac7b2187bd3a1eb2a079be4",
".git/objects/f5/75ee9f734b9369474017f41ea5c9fa95ad9583": "bafb8225fdb2ee06c483ce0b75536358",
".git/objects/6c/f7a45140f663bcce2db851c50d6e52f8d93ac3": "1f8869db912b267a1ef4fb61e4fb398e",
".git/objects/6c/254f403a27a1cf0d1552d8043f7c29770f9066": "2f48660e5840c7767ccec62fa71de42d",
".git/objects/77/58b93525be1a3940fcbf38f4b08f40d8d7045d": "5c08d5b39e67cb3f1668857e621992df",
".git/objects/83/528fd07ac2401ef2996895161b015dc700d046": "2f98b27c075687b3a0eed8aa2a32b431",
".git/objects/83/b60fcb8e60c6380bd1c91f42988cbc73b7364c": "939707a4969b3d0db7fd1f73700d6900",
".git/objects/e9/c0adfee778d055aad242b40900f286c463a130": "76bd3e1f7d7874d9175707b5d308bec5",
".git/objects/e9/8d4c35d2f547aae692b6f047809ce96bb9dcb4": "1e09c64c0086da7c58d3b1df8acf6816",
".git/objects/01/aed473ab391062dba3f8e0b05ec16110f49ddd": "8260e2404d545277c1f6b8b2d1ac67b2",
".git/objects/75/d9cfb4616019cc391c4ef0b52982140d4a191e": "6d10d3f78025eeb2cfd87bf803c6bca5",
".git/objects/39/0ea8c5fb35f951b785bf572e4b96f238f60717": "0f0fcae5675407db1f230700f1a15920",
".git/objects/39/4a6a85b7856c3eee47104b1d50e73b43043b44": "e0de6034081208c0b401797f3bfa7288",
".git/objects/d1/68a4a017ba2ab65396b60e7b4e5a5ed7a95c12": "797d9eb85920d001c82876a9f552d3d4",
".git/objects/d1/8c5bdce88c43a3ea6b23bb2ef05c910ccdfac3": "7a0b9f4d8a2bc6b81f174bb5f0e2bb47",
".git/objects/d1/14b6b2ffe436cf5cdd7986da0cc84e8c0e9b9a": "1fe6283bdc1bcba24b25e161335d1818",
".git/objects/bd/637f810d3bb54952ff2a5e5238250be276567b": "c00b0cef7ed640bed3648e604c07c92f",
".git/objects/bd/8fcb3c45f3d6248f62caeaf7fbf6940ffe32ad": "674e8fc75d10b8bc5d44e15c055ce9a2",
".git/objects/bd/f840aac05e8cd1f70a0d3178a30c73b4fdb135": "5718b78bea4bf3ad428cccce18bce132",
".git/objects/26/eb2e1cd0815251d5a3299ea9e196c4c57220ba": "6e805b290f68ae303cea87e792326742",
".git/objects/dc/e9abc29b5b244e56154849a66b6953c5fdef99": "bb4157c86aa7bbc7abf1b40a1e1d9a07",
".git/objects/19/88c7093841de9d546841415967c2906ed63fb9": "410fbbe21f13d1279e597237072334f8",
".git/objects/19/e82efafc7404365b64537e796817a4e1fcc135": "f973607e7b0138b4a9fc037f927416de",
".git/objects/19/3c397c1b41eb0b6ae6abe6770a3acc19036455": "aaa575f298510af418163dd9c9a08a76",
".git/objects/19/0417ffc8ebc792e6e9191e179500bd9bda8a79": "6b4617a3447bca54631071404f3ceaa2",
".git/objects/33/0a1fb8975e7b2b0590f75fd9c3ba176719a3d2": "096439428900ac894b7bc9adf13ed9cc",
".git/objects/93/aab77aeab8e8bb6445b4e66f6048e8e3c9417a": "62a1ac95e6fb99b1328418f9fc5afedd",
".git/objects/a5/fea0e4815ed33909bb56fefd2b137bfedd68eb": "6bbde8ac0a57fa8d9376af50d89b19f1",
".git/objects/a5/f54c100e34378167fa7e599d1a8a69d6ece364": "e8a65c0f7dd0ba3590e7e6e93113ec67",
".git/objects/a5/57d9f7c85f7d416278c0eb2e45bd98ef9af9e2": "fc9d8247a5fc79ab31690aa2f7f25d06",
".git/objects/58/1022931c63cc4a95335f14bb9bc175afd46e49": "43a35308f31c506999aec73563ee3035",
".git/objects/bb/a6c76853d54738e7250bdabf9d441ae33656d2": "47ac143a8a0e94d1eb13d89e73515c81",
".git/objects/6d/3a13f4a7deb30cfa22dc664abd457a13642fda": "1a2b608999f168f1e46b9b2f187961b2",
".git/objects/1c/e442ba5dd97c515d338e3c191d9f30c3757dde": "e6b4e9f2a42a1986e59879673eadeb3c",
".git/objects/1c/5dd8f39c44ab8d1e024a17913043891771b297": "3fdcb75bc5fd4ba951c1877f2756ab05",
".git/objects/82/1556b673eaa68a7b835f4ef7a79e2614c5a97e": "7f9f21221fdef129af7dacd594db1760",
".git/objects/82/9f748afee7e451f2c7ac1e6a8d8c1c5c888baf": "77838cc12a37939691757b2433a36951",
".git/objects/82/5e6503e8645e60f6f519fdbf709577dba5ff5b": "fc23218f38afa12f1bf28a7cbdc3cdfd",
".git/objects/78/77dc2bae8e6b9d38830e6ef3a17fc31f489e26": "a2114896b24613cf2f8abf24982c6cd3",
".git/objects/78/bb5ce9bbae0b49e5f0859597c5fb31e2726f69": "5d427ed18c620a3386a8fe58a9ebd959",
".git/objects/40/2efc9c016b3e73ce963ab495d7c9d3ba38c517": "f14be673c64e18afb3699a61e0119968",
".git/objects/40/d0926a25b2821be6e9b68b2a4d4726b65a4def": "08245d55d8fdaf99a683ef1461e6d280",
".git/objects/5a/3709348f3748ba12a81f5359129a97bf2998fb": "57dfe51a31c9a31af60b5d4d56e2fe77",
".git/objects/5a/7c5b30f2a9834d9f5bb56711683325f7a137cf": "bc51ad66101cb39e8393521d76ba7c49",
".git/objects/9a/811aaf7224efb2f99caabcb2e030f284ecc5b6": "1a35eaa6e248f38d5f6b33ba5dc98da3",
".git/objects/9a/aee7a6c8abe9bfe53886b2fcf4eccdacc3e567": "76ee517fe4c7e0771bda8df7a83d750d",
".git/objects/9a/6f95cb467a9f4949b9aa21b69c966a5a75736a": "e623de7fa2ab58076a8801f46d31c260",
".git/objects/9a/99a11c24b2776b2083e30de7cc48aa94d17e94": "c9d2e265943e730bcc638a223ba3b91c",
".git/objects/85/1ce14d09df5cff010101aed73d033da5ce1d28": "bff5867b7dfc5767b127cba23b1e0414",
".git/objects/85/d7c165ec6492121233c931d8a632211845c56e": "c39c220315142b2d69dce5a57f6cd79e",
".git/objects/47/1d148de0f30251f13884cc237748a3ebb68364": "f1fdd8780e4c4843b4d82f4fc1a5ee41",
".git/objects/47/ff61519455aaa31bd905ef80441665b2694bbc": "b30ad4f349c6b523e5106e92fa8d4689",
".git/objects/47/c03b3f9de8b378118e3cb27a1fa634b4e550cb": "815c36b6232119e7805719d28dbc31ff",
".git/objects/47/2c8ffc2a176b4120587d8c4704fef0b7f190d1": "5760c44211213731702de84f237be17b",
".git/objects/97/06fcb117d8962970d430861aed198139d31d8b": "bbb853bad90cab3e95f34ebddec1d323",
".git/objects/53/caed2e486aa93adca7ae5ec2117564f85c4088": "0d8dae9845d886fd45823d1de90dd9db",
".git/objects/53/6f4f6c91f320d0af4716bbc8d41789eef5b720": "f52b429ff99554a5244651c17dfb9f17",
".git/objects/53/858974d418ae2b29e31a54bfa941111ebf57d8": "070642c968d437d69d696430449aa0bf",
".git/objects/53/98a2d7aee18502573b3839c681654a52e75c20": "9e00b8372cf98894c1a33ca22f38a27d",
".git/objects/53/b2f9b4d9c1c912804bdf2f5e02ca6fd26b7b3d": "1eefbd5c3542f334e9c8e5cdff580cb3",
".git/objects/a0/5751e60980d9312bdea132d78ac56cc4128ab2": "230b5582672a94c3e254588f886d9027",
".git/objects/a0/6e245b6b00c7eb444a9c254b81161699023a1a": "0d034da8892af2231245c1688e653ae8",
".git/objects/a0/2ceca1a30bf09cfa2b8a068d626b4714c63551": "118d26a258bc9a9b52d7d984398f3df7",
".git/objects/17/f7982c4b1076d241a6025e7e70804c668482dd": "7bd913ea7cdd3cf48cc8d215ef7f72f4",
".git/objects/60/231cf124b703053774156ab84e29882574fa35": "d9a483280394ea1e9a8433c0f7abd1a8",
".git/objects/60/109bbae3c84eba791831796fbb94339500f22f": "f795486008fd6e4bc323c40c95fc1c41",
".git/objects/66/36e8a17c19fdab12cc6cac6a6e01a204946b7b": "6192c8e7da14097018976b4c88a03658",
".git/objects/66/6343fb5260c2921706e8de3360f8da8fc747e3": "793eaa692823a82777111c6b4e72be30",
".git/objects/66/01fcd5c62d7b0e79b6426a4d5bc4a2f888ea51": "98e2bf8fcdba56f090c789fc49b57c7c",
".git/objects/69/afd4b9af5634c4b92c3b341bc831f6506ba41f": "8b16b6d64733ebd28977ce530ecdbd71",
".git/objects/a2/c1e892614451f984054f16ec2f48d2128ed603": "f71080d0167702f383f86193d71b09ad",
".git/objects/a2/3a3f888d17de640748e89863e13389ff686f13": "279293c19c6160f28812fba78e843349",
".git/objects/6f/5453bae8e4fd37cde13b5c16d3db197479ba4f": "aa24ca43e2f660f57e3b98d5efcf7b73",
".git/objects/6f/e3791dd656d5dc018f91d11f02f11ae2fd52ba": "abdb4090b58d77f7cc715ba37048b8b1",
".git/objects/6f/c0178de539d8d8474e6b9ebf43bdad0969dace": "11166266d1dd3cb6a3d67a9de39266dc",
".git/objects/49/e2d525c8adf91bdaa5986ead3af67cfd7a0c21": "41b212da360349ff9a3196cf0b7b18df",
".git/objects/49/43fc90093589139dbffd7f0e434f2078d73b65": "4a2e5ad673ac222570e044cf32bf9f1a",
".git/objects/0e/682ae75e50c0aaa47df24f667904d1647a7a4b": "fcc5e5d6ceb6e5d16f45ca390c097c54",
".git/objects/0e/c797361d1691370e7a8e140934433681f13713": "ee8b88f3ca6a2c7fa9122e35cacfe171",
".git/objects/4f/47a3a8d164dfe2e51aaa52fa50a0102cfea14a": "d40ea1bd5a1ed6d2c748359a38423c6d",
".git/objects/4f/b7e320228ea87bed680444b90982086a483db0": "23da0c1073cb28df466b7c9b3e3dc94b",
".git/objects/5b/b25e5033167faf503e1bd46c0adf44354c7ba5": "095ad9ad303e94bb4320811e23cd8261",
".git/objects/5b/7720fd9daee4569b814e7961cb87da2469a940": "c8a8f90b39ffb4bb10072fb4705823ea",
".git/objects/5b/9e80594c90184b3a82762d3ebe44023cc1962e": "cfd1a57d1a14aed4f0b06fb178628a19",
".git/objects/c3/2d475407f798fadec61cb82631bf4731ce06bb": "1236b054bb2bd064b71f5d3a00f88edd",
".git/objects/b9/55370bd7978b5c97d928728451e0748bc4a0ef": "7df7747e4c26ecb2b1fde987a9d58734",
".git/objects/b9/df33c7c283ebd9e6302148d0bc88245b5b6d25": "e23a5340712d5241494cf185e757936e",
".git/objects/b9/00e1a4b745fa50541a8accd7f90c4bfaebe0a1": "177e66ddaabef829f1df8ddf1e72f534",
".git/objects/be/8ea9a8a66d997df0347bf20594fd8696e9d75f": "64151328d8384240fd24043726dde940",
".git/objects/8d/178690de5416fb1691e70d7249216f6df43549": "07fd8d32fb936064864ac1a953f281d0",
".git/objects/37/d7a8a6f6632689bd9d0fb717d8232ecdbe019a": "4e31083679ff2a694f604c3442b0aba2",
".git/objects/37/1a09a8a25f843fe4ec20804800796411806c10": "074574ed44e84cb27017d174d698173e",
".git/objects/a1/5271d551ad56ff7d257610dee3ed210c80c8f4": "4cb2ddf7c90eaea80f72b01ef6c95b8e",
".git/objects/76/f27a181ffaba2472757053317fc8cdf447efa3": "434ba05169c0a062b8e4b09603025ba6",
".git/objects/76/dadfe547c2bb037bfa72e02d92c24469275fa4": "40f25fdbd3d0e6797e8b85e1a26c570d",
".git/objects/e7/9c421fef68b1eb21df71e152e811e39b819e88": "af0f343ab583bfa82860d746d4a7e466",
".git/objects/e7/775c61280292996c700db0d7e47fa7fd2aa2d7": "d56894bca2fe0444fc4c50d5f18d8211",
".git/objects/b5/d0c422c6ecafd12d3fa9c9d8faba0580a46bfc": "7db4a55e0ae735b344aeef05005dac39",
".git/objects/b5/cf47628f1a43780f83eb458187b9d394c92561": "bbbd30ccd79a237ca408fa078aca38f6",
".git/objects/b5/10a15c1191acf5b81dee34908033b2970aa2f4": "3df168473c3b5acb38417c6b558931e6",
".git/objects/f7/67685df83d7dbd444df076247fdde980c82b6e": "882db848b02d3f158583b35c60324519",
".git/objects/f7/f20c3be75bc3aad39b6bbc10f575a3f11fe99e": "48c930a50b7db4ca07860812065f10ce",
".git/objects/f7/f34ba8c25264a0b3cc0805d54379e23332fa19": "b657b3dc84df86b84e0eedf60e1f3c72",
".git/objects/f6/f93340d57dcaea0f8cfd9af8ad9249e1170798": "5aeb90288080d42526877afdae7f8001",
".git/objects/f6/f3ed8a3229856b1b4ea5fe200b41ec48214f3f": "c3a442bd5f774bd303995b2e7fa06160",
".git/objects/f6/422f72990b68a6f6ecba4314fbbf767456fe26": "209b776ae7632ba3bc437e52a13fc4a4",
".git/objects/ff/863586fe820918f4f05b883f66025c9f1391f6": "3c35905f27de562062a2b77b8ab4e39f",
".git/objects/ff/a10da4158cd5508d88b0e52730ef480b8c5ee3": "86399d234239703978a6d4cf641d48e2",
".git/objects/ff/cd5d83109623e49e735ca8aa36f4801b0836ab": "f0273c77ac4ac61418248448115e4865",
".git/objects/8f/b205ec627a623803ca08919e75b866cd59fdc4": "b36be423eb59c76864633afc36c4bd42",
".git/objects/1f/b0159e3d800a06f18079d682c1c6ed13ef610d": "ba5b6a56fe7128310f4eb9b664f6c225",
".git/objects/fc/093dd5f213003742ba65cd5e4da85a2a7c11c5": "109477793947c7aacc8653dc8b3ecd84",
".git/objects/fc/c0c73105cceef1ce243e445f798e3750eae89f": "c65a2f45b767c543a3c35b579789555e",
".git/objects/fc/d2f75c772bc864afef46a18a11ca3d43d1414b": "ba6ce2148d26b5c60736a9cc345a210c",
".git/objects/8b/dbd9adc2e09f8e4548d7efc3cc6ce9f46b346b": "edea3d47f1400c0b4ab1303dbc8474cb",
".git/objects/8b/2c2fc6047e1a08545c95f48fa1d460fcb46cff": "02655b8953bccde95f81875abb396a62",
".git/objects/8b/0fdbc52fa6c892ad0a271e54e791c47bcb0d92": "874965fc749fdac3a56ee9daebbf8873",
".git/objects/06/2933f238538bce50af3e71fbe485650fc98bb8": "b3d2fc7ace5f6f4e7e4e5460e24647fe",
".git/objects/45/e6fcbfb9cdd39455bc99a56ec8493a33931ade": "4ec5f9ea4369098712ab3e44995558f2",
".git/objects/c9/2dc1b5e17779919d353c46d6903b07ea0703ba": "9993b6db9bb2bd91e8a4ad00467365e6",
".git/objects/e3/0c6b40f78d31a6d435d9150286a05ead018008": "3d25ea74015c83abe21dca95e2181475",
".git/objects/09/9a7ae05197ac8a920ad3dae0845fa4ca07f875": "dadbb3c883dbe455b34dd19f12f0d3b4",
".git/objects/ab/2e6d6ea23cd655e1b93ed3f2ebc3da72cc7929": "dfb478cf0a63dc6e9016d8a218a70940",
".git/objects/34/f79fcab4be04edf97e55fc70d08d8dad106b05": "2a938ab19576c21eadfbec2b584c0236",
".git/objects/34/c007ad7cccbe238364605fb4295e964fc36b32": "fe943d3b9362bc23f28e2aed7e79fbd1",
".git/objects/4a/98b15f6f15f356d02b05f7f8adfdf8bd7db0fa": "d31262f7ccfd9079bf1850b928f00abc",
".git/objects/fb/21080c883c1fca91ae50ccb87c2db5eea07e8c": "9a473e68d54ccafb18c7fa42c4e761f6",
".git/objects/3a/db931b1f9541a6f9f011ea2692cba0702ca4d2": "794ac7b5c04da7d8369a1f5d6d8f3cb8",
".git/objects/0d/0ffae350133bc0e2a26547119fc1be89ed2076": "2bc22297c11f537553ddc8147531b290",
".git/objects/e0/b5f99b6a3e7055ec0394745e205276d482e49b": "d3f25892ef0c911060d243e3ac020f65",
".git/objects/e0/6648d2afd92b93c7fae116e271e8f8b0d53bfc": "25abfdabd77e78133a26d330f1ad4c4a",
".git/objects/1d/8d7049bb7b6d951f71ed8db63d68e69516f64e": "e8b6204ba9e7f211442ee1a5f687c888",
".git/objects/71/89d50fb07ba884c94f52530d55bc9bc14dccdb": "016fa5b5c14a957f69b8c95b603021da",
".git/objects/71/ea411eaef5d7dc5042dfbf340f442ca298065d": "9e819b2fb7359ae8c00916759b52e2a4",
".git/objects/71/e20a215d415952250b0afd3460d0af2b1a80b0": "c0380ca22d04905f07573264f77171be",
".git/objects/a3/7e84939bc29f2259ed23c9cf0e802f6ba295a3": "38ee90ed0b14c7caf6f356e610c660f2",
".git/objects/3c/a3ab1a8c14d56a26a698a0905e4e6cfb7166c5": "c90d7bca9ded5a533287fde1b85232e1",
".git/objects/3c/0aecacd6332c5d178603d61dcb76539a91f398": "feb6b22fbe2cb05373c4bd1ee8063960",
".git/objects/3c/930e2b6f2bb34dd14be95223f23d4f1af846b6": "4714598b3be3e23c620083042c2a99b2",
".git/objects/3c/449e14d782b814a3e33d67d68a11dae4426bc7": "8cb6021f157d58e22281fd9ac2081dba",
".git/objects/3c/93edd0d335ff0057283a3670a9809d21ff85ab": "4682725f8793389be0b540a82e54c5cd",
".git/objects/e8/8c851b1aec270ebaf4cfba0acb21dc1e66ed18": "836d3472599c84ed36828f66c38b9726",
".git/objects/87/4889ca59f28d47c1a54885afdc3b4e1a264603": "907d8848dddb1609b064629e6893ed77",
".git/objects/f8/fe55e5bb56e081a3745fcc2b46948d7a403484": "a6e2410b474ab43ce82e41fe98cf8fee",
".git/objects/6a/9ff9a26e16255f71d45e45022a31aee732de66": "0bf7e67e2db04c0b068fb4699f638b29",
".git/objects/6a/78496e2a02291a0b98914cd313db7afadb69f9": "d2ed87ee9e6d8270fc6d6fb9caccc807",
".git/objects/c2/f4336267d77c58a21e176f84d23673fa82a49a": "fa0a02c4d6892db1196cbb8a6f0fd289",
".git/objects/2e/8bc143e809aeb2929fc6014a3502b4e369cc09": "b98916cf9e0aa54aa39bf11a890f3b97",
".git/objects/e5/796c6bd1264edbdd98f2b265e355dd5a509ff5": "28ee6bff85238ac86a11405d785f7352",
".git/objects/3e/4ee3b0237f6bd5ac9065a6b8db3865087d7ef1": "4125a5d98a2916166a397f907be03167",
".git/objects/f2/79b930dfad4bef66f0003f40afe7d338d9383f": "fb718e71323512194f9de39e6e0a1462",
".git/objects/f2/1da0f5f1f19eee1b7ff075792f4de850da79bb": "4abdcce8684f64ef3c311e7dd82ff8f5",
".git/objects/f2/2592dffbf8b383fbb6e046e91ef2193daa4b6c": "b3f610dc24c0794200fd17751f5ab15a",
".git/objects/f2/6c9aeb3ac5761fd77124daa71addcc4dd035af": "38ad5fa237816277a29749dc6efc51d1",
".git/objects/25/297058fbfaace4a0fff24cc75862a480d8bcf0": "19c338c8f22dc42bdfe472560c0580c0",
".git/objects/25/269c444131e8e00df7deb35191e5113f4ae855": "df08d825f1d5c84e86ddfd93cb498707",
".git/objects/25/5aebe6c3a90d22be6141d6ae262c0686b3059a": "1a5ee2d9dec9ab1304b0edb88693644a",
".git/objects/a9/9463daeb4c74c16950076436a1015fb66d5d69": "9db817d6c4e10e5619c0f6390c200716",
".git/objects/d0/6f60627bcaa5826dc6f40e27812faf20fe0e66": "9c416c66d8462416b56ebfd66ef51036",
".git/objects/57/0b59c0d483cefe90cffa0bb3d277736494ed79": "15bbcbe05e6423f387926bc434c8f4df",
".git/refs/remotes/origin/master": "070966d78b922a940c93a5ef435a026d",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/heads/master": "070966d78b922a940c93a5ef435a026d",
".git/refs/heads/odtumbt-patch-1": "3ef39e329e0122f3a746e3b76d7b075b",
".git/config": "fb590bcfd367ad032496bfd97362ed86",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/packed-refs": "1e485431135b30292a3d4c3c8d884edd",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/logs/refs/remotes/origin/master": "12a0a471a3956b623f1f1d7eb44b99b3",
".git/logs/refs/remotes/origin/HEAD": "0aa7ac21b3ec9ee564505bcd21ead21d",
".git/logs/refs/heads/master": "e7d8a823fbb54a4eebfcbcebe7e34498",
".git/logs/refs/heads/odtumbt-patch-1": "4f71852a4e012c2f7104250ed3bb667f",
".git/logs/HEAD": "4e5d203e9e1bc6e755adbfa7d41d299b",
"favicon.png": "d728b9b90bea963c3995789095c64079",
"icons/Icon-512.png": "184ce9886f728542890b8c6e5a8c4232",
"icons/Icon-192.png": "44a5832c03c9a29c4841ce34392c04d8",
"main.dart.js": "c6e9af086b44f12da66e42910c6ea89b"
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
