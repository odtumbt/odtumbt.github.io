'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "d3d33d18604b541662e911d4eb3745f3",
"/": "d3d33d18604b541662e911d4eb3745f3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/assets/images/4-3.jpg": "268763d545d425ebe22e25b2da8849a4",
"assets/assets/images/iletisim/konum.png": "0d833c87f1b443e514f744f7ab9d13c4",
"assets/assets/images/iletisim/mail.png": "4dfadfcf84e4220695578472b389588d",
"assets/assets/images/iletisim/telefon.png": "44233c6e31c24f2d0dbfd1d70a084fcf",
"assets/assets/images/logo/logo-128.png": "0bd24fedd09c0200e249ffac95959a18",
"assets/assets/images/logo/logo-64.png": "78f06237ec80ca007ead220e9f189830",
"assets/assets/images/logo/logo-512.png": "184ce9886f728542890b8c6e5a8c4232",
"assets/assets/images/logo/logo-256.png": "14d4f335660eb2f89ab5e1667b9bb42f",
"assets/assets/images/logo/Icon-512.png": "184ce9886f728542890b8c6e5a8c4232",
"assets/assets/images/logo/Icon-192.png": "44a5832c03c9a29c4841ce34392c04d8",
"assets/assets/images/logo/favicon.png": "d728b9b90bea963c3995789095c64079",
"assets/assets/images/sosyalMedya/linkedin.png": "f81f084330de2f3ca1902d289ec3b616",
"assets/assets/images/sosyalMedya/youtube.png": "1099763b9fa768c3f4030fe2ff8c39f5",
"assets/assets/images/sosyalMedya/twitter.png": "4a5eeb9394152266580c171ec01cc860",
"assets/assets/images/sosyalMedya/reddit.png": "5f0b9a7a4c8d881d591013c34cc94f00",
"assets/assets/images/sosyalMedya/instagram.png": "6f3dbfce0f2ed8376627878f02d1b85a",
"assets/assets/images/sosyalMedya/github.png": "1dfad82968ef75c2b7072ad52c10ece5",
"assets/assets/images/sosyalMedya/facebook.png": "dfed48900fd935dbdc604c06c76721b4",
"assets/assets/images/sponsorlogo/kazanetsucuklari.png": "4a0a9d16c01a1ab459c2fead54905f63",
"assets/assets/images/sponsorlogo/gizemfrit.png": "037c41a9927a0971401717916bf4694e",
"assets/assets/images/sponsorlogo/dowaksa.png": "863f11e5fea2543cb43c47813e88d99b",
"assets/assets/images/kolaj.png": "37cbbfea18513d21aa52e47c10aac1d2",
"assets/assets/images/yonetim/sekreter.jpg": "268763d545d425ebe22e25b2da8849a4",
"assets/assets/images/yonetim/dk2.jpg": "268763d545d425ebe22e25b2da8849a4",
"assets/assets/images/yonetim/maliye.jpg": "268763d545d425ebe22e25b2da8849a4",
"assets/assets/images/yonetim/dk1.jpg": "268763d545d425ebe22e25b2da8849a4",
"assets/assets/images/yonetim/sosyal.jpg": "268763d545d425ebe22e25b2da8849a4",
"assets/assets/images/yonetim/baskan.jpg": "268763d545d425ebe22e25b2da8849a4",
"assets/assets/images/yonetim/dk3.jpg": "268763d545d425ebe22e25b2da8849a4",
"assets/assets/images/yonetim/proje.jpg": "268763d545d425ebe22e25b2da8849a4",
"assets/assets/images/yonetim/danisman.jpg": "268763d545d425ebe22e25b2da8849a4",
"assets/AssetManifest.json": "75147e7e5ddfedd493092a3962507c04",
"assets/NOTICES": "fad2f445f94f304394be4b160ca065c8",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"manifest.json": "03faa38e777d4dd1f5d1c5e0e7ebfd7e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "33428a9ff27675e7cb6b314e9e903e87",
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
".git/index": "877038eca7fe75dbddc3068bb81d2149",
".git/objects/04/64e58d25d5a3c9dbc99cb46be67625c2c14b8d": "286e3b112bb46c58133c1a6dd8bf0df4",
".git/objects/04/cb1bb3fb9780bc465f1fa5a8ce6a8bfc7410ab": "36f55fc825ec8042151f40a510136259",
".git/objects/b7/bdf406322736c224fff3e1e65bd60459225fc0": "23978f806b7839e8cf83c897314c9b29",
".git/objects/4e/219a8438ace165fd0c51701b7cc908edbf1efc": "b4d64b20dcb657c215bcd7c0ba9d0c35",
".git/objects/pack/pack-9ed90a332cc12d2cbb13396e01e3825385daa973.idx": "710c173fdff4d2a2c836854f55413a36",
".git/objects/pack/pack-9ed90a332cc12d2cbb13396e01e3825385daa973.pack": "f6f875226c851afa358d5a5f6ac056a0",
".git/objects/d6/35a4b2aef3d7a0ebe0f42a34bd7e47fdb26c2c": "78950b1ccb13eccae59522f8b5da5d3d",
".git/objects/5d/8830ca6d9b47bf2bc0ae9f604f504109575d1f": "296da89fe752ff5a5aed648e6f01c4f3",
".git/objects/61/8ac6c0eefcee1ce2d5051b7a860a56a03895e3": "9293c09e021ed18fcadc48637605ebf7",
".git/objects/63/a7e4e491c8d8adea88f9692dc425b364d453e3": "917e8eb03fd4a31560f5012f201ca767",
".git/objects/63/02e13b36e74b0deda74671623479aa4f95d973": "9d3ca458a14e6733bb3ded62692493a4",
".git/objects/63/0366e44141c1a69781db07020746c6f3081c9d": "82d66af7f12d10594bd4dc18ec20922e",
".git/objects/1e/eca63a05cbb2381b444fe7faf05495c8da259e": "5ca76df10b3670c0f324ceccc875d024",
".git/objects/7b/88797ee723afa2cef503be2e895ce104413318": "ffeb87e39a424e82900199e1d940c8c8",
".git/objects/7b/68ae3a0fee0726b5e6384b84737059f3eb4191": "ff391d361082c6bb02eb78dec8a205e9",
".git/objects/89/d48c02d60f1d8336bb3aee06c1defb4c38b4af": "7d956ba3e649daed5a9ff5b0c3255545",
".git/objects/89/8f77dd78d61654936c1db9a704d40cb4fd91a0": "3ed3d65dbe0973d64004fc78228350a3",
".git/objects/af/04791df9a3792864e3e0feb27fcd87a0e5035f": "a93aa6026aa5d5d9ca3d7b794c5b17a0",
".git/objects/aa/21deddb35b51c3eab3cf009c9e3f80086346b5": "fc356c75011a655954704cd2877e28fb",
".git/objects/fa/4721739c5ad295265efd1994cd1a9ea2a78d5f": "13f5e108bd32558b9650c98c23c109b2",
".git/objects/ed/a7574038a44dfb6f9abef92ebf514fd20cc3a5": "6198bd6e3e830de4971c50ff79f359e9",
".git/objects/ee/cb45052e4100a46c5e3e471edc3d503ff467b4": "d481101a638b9cdf6ecb036986912ac0",
".git/objects/44/d36406ce542003fc24da88dc24ecc0a7e2e224": "7da0d94f5aa11fccded1000b5a063e28",
".git/objects/44/b4544a2ce976d4dacdaee2848de9da29f4c69b": "acb245f9e1e9da2e5d674e0b811d19d7",
".git/objects/44/2e8978234e8b9c65042712583c56b277ecd711": "6b76b0bdcefa6e991da2bdef2a014cc5",
".git/objects/df/52a2d7e1b49646800514fca6d7fbaa632c0819": "6f06efef978338856ad3018f00d91ec9",
".git/objects/df/31613603d87c188982a47445ec0222957a9873": "69f41f81f3e65cef0236a7c4cb2c4c34",
".git/objects/a4/24de7d1b58eb31baa8f5cea50fb02ce6b73b0a": "1c587d1a71f96e79057847c92277b8c3",
".git/objects/d7/208fbb18b0900abb962a2836bffb0a41594296": "00eeac068230eea246af28f11fb44ea6",
".git/objects/de/ffa561686acc58cc456de821a5ba377e1a36a7": "d44cce5c5c27f760576b91fac993e46b",
".git/objects/fd/cb1c0ea4c9329ddc7b784fb71f588eecb3cc73": "18f4ce8d6d78dff237eab2fc42a10f04",
".git/objects/41/e606842abf80a85bf6965c5da470fc2ba9a30e": "1042f16dc8268e18c3237ed92d945e72",
".git/objects/41/d2acc08a6b78c813562b243bbc5d8121249f0c": "66cff3bea6d443bff1c0df80772ff440",
".git/objects/91/137dfde1694ddbedfaed90d9b82af1571a6c10": "70acb5e66b803b7d56e73153a4672c10",
".git/objects/55/d36ff373f830fd4804521ac499ff227d052f23": "c707517c1e8a2dfb41a20e9369335180",
".git/objects/55/93316d72bec1618da432623f56b2756b4ad90f": "542a80577e59e3e103ee06f8edfe2fc9",
".git/objects/12/8d6454d3a952f43c0841fb108b86ff72551a49": "4f1ae13710b17b229bd55f94f6765cf5",
".git/objects/12/8f1e86c401beb009b606c13361a2e13aa45a84": "bdeb3eba3eb4ec634390b57e448ba632",
".git/objects/86/0584ee5b51752781eb490556f8c271bafb66b4": "80a22cdc2c77dd7274597959897a7d5e",
".git/objects/72/f8e39b18cd802660525c147c5c881d1beca63d": "98f64294c41cc4cae618b7365e776969",
".git/objects/b2/6fc1a8181ff03bd3a49dc877642872e83f0d28": "df9117841d0cf8564d3abb08d2de147a",
".git/objects/b2/a6bca1efa15d4299a4391498c01aa23258eeab": "e74e931a0cc3c967844607468dedde00",
".git/objects/46/efd19707cca1af59102119ef5d2aceac1edf02": "bfbf2fd0c9a2ef25161076b96ea24040",
".git/objects/eb/55349935004202b3a0c6c4b11e941016ea1c66": "a0c39cfa17ee147797801f123fe7119d",
".git/objects/16/9eeb8f2b498a1cd05e71f4b624a15e8f27ac63": "1b599b1458b33583047868badb23f72d",
".git/objects/16/f78d0eadd62356d874c3cba984aa06205a1909": "b9573b19edb3274ba9b588909b38856f",
".git/objects/29/8ef1bdb553c6d193e1fb05398d11381fbbebe4": "27f51bb8fc4fe45bb78590c4fc4f32d9",
".git/objects/92/b177bdbefda09efd15640b74d6c72c44ab3ef9": "962924fb98801e416a06f558875c110b",
".git/objects/92/66d606dec9b88b92b4f75cf517219399841f4f": "fb794b6ec4d02ce3dccba7b950215e48",
".git/objects/0f/17fcadeb848d5cfaa13f85428ab2b7b9845658": "2352d3708e31d5d25f1eacf2f0e30574",
".git/objects/0f/c498953f945213f1eb4957b885ffdb4e937582": "060e6b026f14be24613ef6aaab7e766e",
".git/objects/96/26c6253874a9dc80e17b37e7e84ac8e70e3afb": "b1a2ed29237864f8978f03e0dc384d29",
".git/objects/db/485f1d0506032b7138ab4d078ae88c8a926931": "c6030df4aa0e1065874204544053db08",
".git/objects/e2/ed6473b208433fb9a542686d384b9d1977c161": "978be56cc383dd966d59bd6c2f5cdf04",
".git/objects/e2/112ef3be239fb935ac29beae96d47a7b877829": "5f2c7952bb8931ba1a06df5c03b8ab35",
".git/objects/e2/aa7c2623d3d4b1aefc9f35299795f2b81e37b8": "b43b4b7078b90a83501ed7f08004e50e",
".git/objects/b1/2524ab19cb0246eb23ac3dda323c6105896405": "0297fc2b4cf187f606c3e7226028970b",
".git/objects/8e/2ca7368867859fcbc82129d72c9ab57beb28f2": "ec3bf35d51792e158f71deaf9239ecd6",
".git/objects/8e/4d874006135f493210072f6e4fbaf25a864f4d": "c2cbc03e11cd6e46c4f317e841439d3b",
".git/objects/ba/071e5650a16070c9b1bb2cab717afe85384068": "97ad32be9be7ee1bb78a9cadf5f01123",
".git/objects/15/9b866aa938d215a3ef1ad40976cb173139e5a1": "0ce80871d6ad2ab0df3adefebe514354",
".git/objects/c7/0cca3dd9c4e9f0909dcbbc98fd240c4e79c182": "2c4c932beda03e8a70201ab704362f41",
".git/objects/ad/4388e831fb9816acfeed56f6c6fac2191ec754": "fd1b5a0a9a5a8f8850d9efb4b99fa64e",
".git/objects/ad/160af63966018364344015c1dd05f374bc49cf": "25b68b1faba2aa6990ad01a3a65c9fc4",
".git/objects/ad/615a395059e423641cfa653084bfdf305ef339": "adcc36c2211d9417e07e1a270a1012e7",
".git/objects/f3/bcffd62f8c0a5cb9ccd491015eec6dcb6b2d32": "c6c997c44a52741bce344a25502d9808",
".git/objects/f3/7bcc5932902eae076446c5928a74f8105eeb4b": "517e4e38cbffbb8f1a6f9a6a0b39406a",
".git/objects/24/42a7ba22047ad6ecbbd28de84e66a342dd5675": "5883f53752aa07383db7a673a262550d",
".git/objects/9b/21f000bce517f9c5af7e1c171f062983324841": "d86cfe4fc69c758f5795ccaa7d92d457",
".git/objects/90/ae97f9082fcf2913d06232f511fe06ad9ee1a9": "312202ff9c9806070c7d87f404fad755",
".git/objects/4c/6269ca7ddc12a28267ac4e0b7bd6e0c12f7889": "c4b893c9c8b210803c30c57c648250f2",
".git/objects/ea/6ffd0545b38054a5c2903d3737d907e927d23b": "d83bdd46ded59d2b83995023069b5558",
".git/objects/ea/ec47e2702bcf5771324ed97c3997cb3867ce91": "ef6a2b4cafc805887f0e38f3abee42ea",
".git/objects/1a/07f16c23310275f2974f65c0b14784ce284500": "320fb08c6867b06d1659f723df11403e",
".git/objects/1a/8d217e3bf23f8bdbbf8b148d55e270ea6534da": "c26860fa8d4c2e3a52488a98f7a09d82",
".git/objects/1a/e3c8c83c1ede75788e15d27d4da0eed2b79347": "0737dc966eb8da74a23a4cd0ecaf9ffa",
".git/objects/2a/3200a954b3f65d30d4b80a2ab0874fc37248c8": "0c2033c253862ffd85fade9d587d6c23",
".git/objects/2a/79a4f9e647a155db75493ac2a6b2b53e19f702": "41264d475a8b3dc9e3dfcf81f340b36b",
".git/objects/79/fde4d71224eab68a6e02f07c95b3a6eeff1107": "68136f9522a434326ce78d386d05e29d",
".git/objects/cc/41f7908dfdf35b272e57ceff27f9de9d9a656a": "8061938fdfe4b3c861c7cd666cfb31d4",
".git/objects/8c/c79f2f25cf37026a822908ff62e5f2d28fcffa": "6e8ea5563e3226e75fdb70f7baaa722b",
".git/objects/8c/7fd8456f0afbe850ead257c7b8e99afd24a657": "32e5b3bb3d2296661850688b559f5bfa",
".git/objects/3f/cb7a729c74b38749f04b31e2a47f49bdda4253": "5bbe8b1ac9c04fd31806841ffbbcd84f",
".git/objects/54/d75e036595bf685945366573b280d70b89d2f1": "b590319307c47049ab0f80ee70fc904e",
".git/objects/e6/f47167fcd8bf5ec965f8bec63b88591bcd5cb8": "26676043085517220287fa90acb23ade",
".git/objects/e6/d32a5f5ac5502914a2fd05ee6da8dae48447b4": "02a217be210f977f0164d30e973f36d7",
".git/objects/ac/dc23c0a35afc7b66df2d0238474df5feb48175": "7bfcf8da94f7ad8fa4e62f0b7dc63826",
".git/objects/f0/98472d54357f216e525a03d8764c328b51fdfd": "13b4e20aa1aa2a08b91769f14e30037d",
".git/objects/67/37b32ec0aa58dad6e90e2aafe665fa74e1c089": "a943cde8587660158955b4d9e6165748",
".git/objects/52/c8f38eceb166b8a19fe3861959e92d7557f33d": "d162487c361ca8d932283fe5358d5e17",
".git/objects/d9/df42b7758b7c6af4234639f863c18f50e3c81d": "565a3f4b746c22fa690e9bb153ac8d0c",
".git/objects/36/a8098af1cc6daa206a10e95ee8ffc5f4a3eab8": "114e5c5545db4cd9c2491cc35da0b873",
".git/objects/5c/e77e5ce1ef6cd896b37ebe99ef2b0ddcf97996": "bc8e5be4e23e315cd6b35a7bbd81c9db",
".git/objects/59/12234e3a3f00353b5c8528ac8422a897e48a95": "222b66311e2a32771e1f59cb2d1881bb",
".git/objects/c8/cf7f80704c3d4485fec2480037f7838c541f4b": "d0214774c1db929e06e6351c02897e8e",
".git/objects/c8/4ca94ed52e2ed43ff0cf595bee1c5dcf4b93c1": "80af6b540ebb2baa02d88fc8094d6da4",
".git/objects/6c/f7a45140f663bcce2db851c50d6e52f8d93ac3": "1f8869db912b267a1ef4fb61e4fb398e",
".git/objects/77/58b93525be1a3940fcbf38f4b08f40d8d7045d": "5c08d5b39e67cb3f1668857e621992df",
".git/objects/e9/c0adfee778d055aad242b40900f286c463a130": "76bd3e1f7d7874d9175707b5d308bec5",
".git/objects/e9/8d4c35d2f547aae692b6f047809ce96bb9dcb4": "1e09c64c0086da7c58d3b1df8acf6816",
".git/objects/75/d9cfb4616019cc391c4ef0b52982140d4a191e": "6d10d3f78025eeb2cfd87bf803c6bca5",
".git/objects/39/0ea8c5fb35f951b785bf572e4b96f238f60717": "0f0fcae5675407db1f230700f1a15920",
".git/objects/d1/68a4a017ba2ab65396b60e7b4e5a5ed7a95c12": "797d9eb85920d001c82876a9f552d3d4",
".git/objects/d1/14b6b2ffe436cf5cdd7986da0cc84e8c0e9b9a": "1fe6283bdc1bcba24b25e161335d1818",
".git/objects/bd/637f810d3bb54952ff2a5e5238250be276567b": "c00b0cef7ed640bed3648e604c07c92f",
".git/objects/bd/8fcb3c45f3d6248f62caeaf7fbf6940ffe32ad": "674e8fc75d10b8bc5d44e15c055ce9a2",
".git/objects/26/eb2e1cd0815251d5a3299ea9e196c4c57220ba": "6e805b290f68ae303cea87e792326742",
".git/objects/dc/e9abc29b5b244e56154849a66b6953c5fdef99": "bb4157c86aa7bbc7abf1b40a1e1d9a07",
".git/objects/19/0417ffc8ebc792e6e9191e179500bd9bda8a79": "6b4617a3447bca54631071404f3ceaa2",
".git/objects/33/0a1fb8975e7b2b0590f75fd9c3ba176719a3d2": "096439428900ac894b7bc9adf13ed9cc",
".git/objects/93/aab77aeab8e8bb6445b4e66f6048e8e3c9417a": "62a1ac95e6fb99b1328418f9fc5afedd",
".git/objects/a5/57d9f7c85f7d416278c0eb2e45bd98ef9af9e2": "fc9d8247a5fc79ab31690aa2f7f25d06",
".git/objects/1c/5dd8f39c44ab8d1e024a17913043891771b297": "3fdcb75bc5fd4ba951c1877f2756ab05",
".git/objects/78/bb5ce9bbae0b49e5f0859597c5fb31e2726f69": "5d427ed18c620a3386a8fe58a9ebd959",
".git/objects/40/d0926a25b2821be6e9b68b2a4d4726b65a4def": "08245d55d8fdaf99a683ef1461e6d280",
".git/objects/9a/aee7a6c8abe9bfe53886b2fcf4eccdacc3e567": "76ee517fe4c7e0771bda8df7a83d750d",
".git/objects/85/1ce14d09df5cff010101aed73d033da5ce1d28": "bff5867b7dfc5767b127cba23b1e0414",
".git/objects/47/ff61519455aaa31bd905ef80441665b2694bbc": "b30ad4f349c6b523e5106e92fa8d4689",
".git/objects/97/06fcb117d8962970d430861aed198139d31d8b": "bbb853bad90cab3e95f34ebddec1d323",
".git/objects/53/858974d418ae2b29e31a54bfa941111ebf57d8": "070642c968d437d69d696430449aa0bf",
".git/objects/53/98a2d7aee18502573b3839c681654a52e75c20": "9e00b8372cf98894c1a33ca22f38a27d",
".git/objects/a0/6e245b6b00c7eb444a9c254b81161699023a1a": "0d034da8892af2231245c1688e653ae8",
".git/objects/a0/2ceca1a30bf09cfa2b8a068d626b4714c63551": "118d26a258bc9a9b52d7d984398f3df7",
".git/objects/60/231cf124b703053774156ab84e29882574fa35": "d9a483280394ea1e9a8433c0f7abd1a8",
".git/objects/66/36e8a17c19fdab12cc6cac6a6e01a204946b7b": "6192c8e7da14097018976b4c88a03658",
".git/objects/a2/3a3f888d17de640748e89863e13389ff686f13": "279293c19c6160f28812fba78e843349",
".git/objects/6f/5453bae8e4fd37cde13b5c16d3db197479ba4f": "aa24ca43e2f660f57e3b98d5efcf7b73",
".git/objects/6f/e3791dd656d5dc018f91d11f02f11ae2fd52ba": "abdb4090b58d77f7cc715ba37048b8b1",
".git/objects/6f/c0178de539d8d8474e6b9ebf43bdad0969dace": "11166266d1dd3cb6a3d67a9de39266dc",
".git/objects/49/e2d525c8adf91bdaa5986ead3af67cfd7a0c21": "41b212da360349ff9a3196cf0b7b18df",
".git/objects/49/43fc90093589139dbffd7f0e434f2078d73b65": "4a2e5ad673ac222570e044cf32bf9f1a",
".git/objects/0e/682ae75e50c0aaa47df24f667904d1647a7a4b": "fcc5e5d6ceb6e5d16f45ca390c097c54",
".git/objects/0e/c797361d1691370e7a8e140934433681f13713": "ee8b88f3ca6a2c7fa9122e35cacfe171",
".git/objects/4f/b7e320228ea87bed680444b90982086a483db0": "23da0c1073cb28df466b7c9b3e3dc94b",
".git/objects/5b/b25e5033167faf503e1bd46c0adf44354c7ba5": "095ad9ad303e94bb4320811e23cd8261",
".git/objects/5b/7720fd9daee4569b814e7961cb87da2469a940": "c8a8f90b39ffb4bb10072fb4705823ea",
".git/objects/b9/55370bd7978b5c97d928728451e0748bc4a0ef": "7df7747e4c26ecb2b1fde987a9d58734",
".git/objects/b9/df33c7c283ebd9e6302148d0bc88245b5b6d25": "e23a5340712d5241494cf185e757936e",
".git/objects/8d/178690de5416fb1691e70d7249216f6df43549": "07fd8d32fb936064864ac1a953f281d0",
".git/objects/37/d7a8a6f6632689bd9d0fb717d8232ecdbe019a": "4e31083679ff2a694f604c3442b0aba2",
".git/objects/76/dadfe547c2bb037bfa72e02d92c24469275fa4": "40f25fdbd3d0e6797e8b85e1a26c570d",
".git/objects/b5/d0c422c6ecafd12d3fa9c9d8faba0580a46bfc": "7db4a55e0ae735b344aeef05005dac39",
".git/objects/b5/cf47628f1a43780f83eb458187b9d394c92561": "bbbd30ccd79a237ca408fa078aca38f6",
".git/objects/b5/10a15c1191acf5b81dee34908033b2970aa2f4": "3df168473c3b5acb38417c6b558931e6",
".git/objects/f7/f20c3be75bc3aad39b6bbc10f575a3f11fe99e": "48c930a50b7db4ca07860812065f10ce",
".git/objects/f7/f34ba8c25264a0b3cc0805d54379e23332fa19": "b657b3dc84df86b84e0eedf60e1f3c72",
".git/objects/f6/f93340d57dcaea0f8cfd9af8ad9249e1170798": "5aeb90288080d42526877afdae7f8001",
".git/objects/f6/f3ed8a3229856b1b4ea5fe200b41ec48214f3f": "c3a442bd5f774bd303995b2e7fa06160",
".git/objects/f6/422f72990b68a6f6ecba4314fbbf767456fe26": "209b776ae7632ba3bc437e52a13fc4a4",
".git/objects/ff/a10da4158cd5508d88b0e52730ef480b8c5ee3": "86399d234239703978a6d4cf641d48e2",
".git/objects/8f/b205ec627a623803ca08919e75b866cd59fdc4": "b36be423eb59c76864633afc36c4bd42",
".git/objects/1f/b0159e3d800a06f18079d682c1c6ed13ef610d": "ba5b6a56fe7128310f4eb9b664f6c225",
".git/objects/fc/c0c73105cceef1ce243e445f798e3750eae89f": "c65a2f45b767c543a3c35b579789555e",
".git/objects/8b/0fdbc52fa6c892ad0a271e54e791c47bcb0d92": "874965fc749fdac3a56ee9daebbf8873",
".git/objects/06/2933f238538bce50af3e71fbe485650fc98bb8": "b3d2fc7ace5f6f4e7e4e5460e24647fe",
".git/objects/45/e6fcbfb9cdd39455bc99a56ec8493a33931ade": "4ec5f9ea4369098712ab3e44995558f2",
".git/objects/c9/2dc1b5e17779919d353c46d6903b07ea0703ba": "9993b6db9bb2bd91e8a4ad00467365e6",
".git/objects/ab/2e6d6ea23cd655e1b93ed3f2ebc3da72cc7929": "dfb478cf0a63dc6e9016d8a218a70940",
".git/objects/34/f79fcab4be04edf97e55fc70d08d8dad106b05": "2a938ab19576c21eadfbec2b584c0236",
".git/objects/4a/98b15f6f15f356d02b05f7f8adfdf8bd7db0fa": "d31262f7ccfd9079bf1850b928f00abc",
".git/objects/0d/0ffae350133bc0e2a26547119fc1be89ed2076": "2bc22297c11f537553ddc8147531b290",
".git/objects/71/89d50fb07ba884c94f52530d55bc9bc14dccdb": "016fa5b5c14a957f69b8c95b603021da",
".git/objects/a3/7e84939bc29f2259ed23c9cf0e802f6ba295a3": "38ee90ed0b14c7caf6f356e610c660f2",
".git/objects/3c/a3ab1a8c14d56a26a698a0905e4e6cfb7166c5": "c90d7bca9ded5a533287fde1b85232e1",
".git/objects/3c/0aecacd6332c5d178603d61dcb76539a91f398": "feb6b22fbe2cb05373c4bd1ee8063960",
".git/objects/3c/449e14d782b814a3e33d67d68a11dae4426bc7": "8cb6021f157d58e22281fd9ac2081dba",
".git/objects/e8/8c851b1aec270ebaf4cfba0acb21dc1e66ed18": "836d3472599c84ed36828f66c38b9726",
".git/objects/f8/fe55e5bb56e081a3745fcc2b46948d7a403484": "a6e2410b474ab43ce82e41fe98cf8fee",
".git/objects/6a/9ff9a26e16255f71d45e45022a31aee732de66": "0bf7e67e2db04c0b068fb4699f638b29",
".git/objects/6a/78496e2a02291a0b98914cd313db7afadb69f9": "d2ed87ee9e6d8270fc6d6fb9caccc807",
".git/objects/c2/f4336267d77c58a21e176f84d23673fa82a49a": "fa0a02c4d6892db1196cbb8a6f0fd289",
".git/objects/2e/8bc143e809aeb2929fc6014a3502b4e369cc09": "b98916cf9e0aa54aa39bf11a890f3b97",
".git/objects/f2/79b930dfad4bef66f0003f40afe7d338d9383f": "fb718e71323512194f9de39e6e0a1462",
".git/objects/f2/1da0f5f1f19eee1b7ff075792f4de850da79bb": "4abdcce8684f64ef3c311e7dd82ff8f5",
".git/objects/f2/2592dffbf8b383fbb6e046e91ef2193daa4b6c": "b3f610dc24c0794200fd17751f5ab15a",
".git/objects/25/269c444131e8e00df7deb35191e5113f4ae855": "df08d825f1d5c84e86ddfd93cb498707",
".git/objects/a9/9463daeb4c74c16950076436a1015fb66d5d69": "9db817d6c4e10e5619c0f6390c200716",
".git/refs/remotes/origin/master": "d166f3b31836ab10a2fcacdf99d46eae",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/heads/master": "d166f3b31836ab10a2fcacdf99d46eae",
".git/refs/heads/odtumbt-patch-1": "3ef39e329e0122f3a746e3b76d7b075b",
".git/config": "fb590bcfd367ad032496bfd97362ed86",
".git/COMMIT_EDITMSG": "872a4eae5eb77789e4eb9315936e35f6",
".git/packed-refs": "1e485431135b30292a3d4c3c8d884edd",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/logs/refs/remotes/origin/master": "0c5cd59a2aaee2b7cd563b6022f116b6",
".git/logs/refs/remotes/origin/HEAD": "0aa7ac21b3ec9ee564505bcd21ead21d",
".git/logs/refs/heads/master": "93ac03cfc4b23868c1c91f81abd18e1c",
".git/logs/refs/heads/odtumbt-patch-1": "4f71852a4e012c2f7104250ed3bb667f",
".git/logs/HEAD": "86e475e521b261859a4bf8f6d938851b",
"favicon.png": "d728b9b90bea963c3995789095c64079",
"icons/Icon-512.png": "184ce9886f728542890b8c6e5a8c4232",
"icons/Icon-192.png": "44a5832c03c9a29c4841ce34392c04d8",
"main.dart.js": "4015e52aa4b5def47af829a926c413d5"
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
