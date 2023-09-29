<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

const ikaworu = reactive<{ src: string }[]>([
  { src: '/kaworu/20220830.jpg' },
  { src: '/kaworu/20220909.jpg' },
  { src: '/kaworu/20220912.jpg' },
  { src: '/kaworu/20220924.jpg' },
  { src: '/kaworu/20221004.jpg' },
  { src: '/kaworu/20221015.jpg' },
  { src: '/kaworu/20221103.jpg' },
  { src: '/kaworu/20221215.jpg' },
  { src: '/kaworu/20230512.jpg' },
  { src: '/kaworu/20230616.jpg' },
  { src: '/kaworu/20230813.jpg' },
  { src: '/kaworu/20230814.jpg' },
])
const tkaworu = reactive<string[]>([
  '<a href="https://x.com/kaworu1030/status/1564519531720343552" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/kaworu1030/status/1568162311595884544" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/kaworu1030/status/1569294765614571520" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/kaworu1030/status/1573462219546689537" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/kaworu1030/status/1577091630091235328" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/kaworu1030/status/1581168139122790402" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/kaworu1030/status/1588099493207355392" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/kaworu1030/status/1603093807809323008" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/kaworu1030/status/1656887572965249024" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/kaworu1030/status/1669736339648962561" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/kaworu1030/status/1690709789913829376" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/kaworu1030/status/1690917554410385408" style="color: blue;" target="_blank">Twitter連結</a>',
])
const kaworu = ref([])
for (let i = 0; i < ikaworu.length && i < tkaworu.length; i++) {
  kaworu.value.push({ image: ikaworu[i], text: tkaworu[i] })
}

const imageList = reactive<{ src: string }[]>([
  { src: '/irokatanaoto/直人老師_1.jpg' },
  { src: '/irokatanaoto/直人老師_2.jpg' },
  { src: '/irokatanaoto/直人老師_3.jpg' },
])
const textList = reactive<string[]>([
  '<a href="https://twitter.com/irokatanaoto/status/1596538424215101441" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://twitter.com/irokatanaoto/status/1585934400641855489" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://twitter.com/irokatanaoto/status/1585934400641855489" style="color: blue;" target="_blank">Twitter連結</a>',
])
const irokatanaoto = ref([])
for (let i = 0; i < imageList.length && i < textList.length; i++) {
  irokatanaoto.value.push({ image: imageList[i], text: textList[i] })
}

const t750627i = reactive<{ src: string }[]>([
  { src: '/t750627/20230818_FF41認親卡.jpg' },
  { src: '/t750627/20230907_點圖台.jpg' },
  { src: '/t750627/20230617_捷比彩蛋賀生日.jpg' },
  { src: '/t750627/20230617_073650_吃馬卡龍柴柴.jpg' },
  { src: '/t750627/20230612_六等星間奏柴.png' },
  { src: '/t750627/20230324_半週年和風馬尾柴.jpg' },
  { src: '/t750627/20220822_201631_黑貓cover預告.jpg' },
  { src: '/t750627/20220824__黑貓cover倒數2天.jpg' },
  { src: '/t750627/20220825__黑貓cover倒數1天.jpg' },
  { src: '/t750627/20220909柴柴賀三萬訂-S.jpg' },
  { src: '/t750627/20220911柴柴姿姿貼貼.jpg' },
  { src: '/t750627/20220916安平愛心鎖.jpg' },
  { src: '/t750627/20220924_恭喜出配信成功.jpg' },
  { src: '/t750627/20221002_眼鏡日.jpg' },
  { src: '/t750627/20221004_呱呱們舉起你的尾巴.jpg' },
  { src: '/t750627/20221014_幻塔連動捏角.jpg' },

  { src: '/t750627/20221124_雙芙芙畫面.jpg' },
  { src: '/t750627/20221203.jpg' },
  { src: '/t750627/20221226_89柴.png' },
  { src: '/t750627/20221226_Q版柴.png' },
  { src: '/t750627/20230105_比心柴柴.jpg' },
  { src: '/t750627/20230114_環島.jpg' },
  { src: '/t750627/20230226_墨筆練.jpg' },
])
const t750627t = reactive<string[]>([
  '<a href="https://x.com/t750627/status/1692240920413102495" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/t750627/status/1699788247185215687" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/t750627/status/1670027746821685248" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/t750627/status/1668303866579013632" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/t750627/status/1647532520622428162" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/t750627/status/1561699504176320517" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/t750627/status/1562451472427917313" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/t750627/status/1562845645538754561" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/t750627/status/1568127539700432897" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/t750627/status/1568970159347613697" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/t750627/status/1570777235560468485" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/t750627/status/1573689328970395648" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/t750627/status/1576462032840273920" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/t750627/status/1577259735216058368" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/t750627/status/1580634899970949120" style="color: blue;" target="_blank">Twitter連結</a>',

  '<a href="https://x.com/t750627/status/1595804072569081857" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/t750627/status/1598847936691331072" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/t750627/status/1614256532149145603" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/t750627/status/1629846115305816064" style="color: blue;" target="_blank">Twitter連結</a>',
])
const t750627 = ref([])
for (let i = 0; i < t750627i.length && i < t750627t.length; i++) {
  t750627.value.push({ image: t750627i[i], text: t750627t[i] })
}

const ijenny40128 = reactive<{ src: string }[]>([
  { src: '/jenny40128/220828.jpg' },
  { src: '/jenny40128/221002.jpg' },
  { src: '/jenny40128/221024.jpg' },
  { src: '/jenny40128/221113.jpg' },
  { src: '/jenny40128/221225.jpg' },
  { src: '/jenny40128/221228.jpg' },
  { src: '/jenny40128/230105.jpg' },
  { src: '/jenny40128/230107.jpg' },
  { src: '/jenny40128/230110.jpg' },
  { src: '/jenny40128/230317.jpg' },
  { src: '/jenny40128/230324.jpg' },
  { src: '/jenny40128/230612.jpg' },
  { src: '/jenny40128/230924.jpg' },
  { src: '/jenny40128/初配信.png' },
  { src: '/jenny40128/聖誕節.png' },
  { src: '/jenny40128/跨年.png' },
  { src: '/jenny40128/FF40見面會.png' },
  { src: '/jenny40128/與姿的早呱.png' },
  { src: '/jenny40128/生日.png' },
  { src: '/jenny40128/日本行.png' },
  { src: '/jenny40128/布丁狗連動.png' },
  { src: '/jenny40128/新衣裝.png' },
  { src: '/jenny40128/底片回憶錄 (1).png' },
  { src: '/jenny40128/底片回憶錄 (2).png' },
  { src: '/jenny40128/底片回憶錄 (3).png' },
  { src: '/jenny40128/底片回憶錄 (4).png' },
  { src: '/jenny40128/底片回憶錄 (5).png' },
  { src: '/jenny40128/底片回憶錄 (6).png' },
  { src: '/jenny40128/菜單-01.jpg' },
])
const tjenny40128 = reactive<string[]>([
  '<a href="https://x.com/jenny40128/status/1563887844632182784" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/jenny40128/status/1576538143716966400" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/jenny40128/status/1584532224644632577" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/jenny40128/status/1591594028143095809" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/jenny40128/status/1606927950666166272" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/jenny40128/status/1607957698901078017" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/jenny40128/status/1611009100032389120" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/jenny40128/status/1611740058679390208" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/jenny40128/status/1612825420168302599" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/jenny40128/status/1636736933203410944" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/jenny40128/status/1639111598047645696" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/jenny40128/status/1668263999211798531" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/jenny40128/status/1705875782521028942" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="" style="color: blue;" target="_blank">一周年企畫插圖</a>',
  '<a href="" style="color: blue;" target="_blank">一周年企畫插圖</a>',
  '<a href="" style="color: blue;" target="_blank">一周年企畫插圖</a>',
  '<a href="" style="color: blue;" target="_blank">一周年企畫插圖</a>',
  '<a href="" style="color: blue;" target="_blank">一周年企畫插圖</a>',
  '<a href="" style="color: blue;" target="_blank">一周年企畫插圖</a>',
  '<a href="" style="color: blue;" target="_blank">一周年企畫插圖</a>',
  '<a href="" style="color: blue;" target="_blank">一周年企畫插圖</a>',
  '<a href="" style="color: blue;" target="_blank">一周年企畫插圖</a>',
  '<a href="" style="color: blue;" target="_blank">一周年企畫底片回憶錄</a>',
  '<a href="" style="color: blue;" target="_blank">一周年企畫底片回憶錄</a>',
  '<a href="" style="color: blue;" target="_blank">一周年企畫底片回憶錄</a>',
  '<a href="" style="color: blue;" target="_blank">一周年企畫底片回憶錄</a>',
  '<a href="" style="color: blue;" target="_blank">一周年企畫底片回憶錄</a>',
  '<a href="" style="color: blue;" target="_blank">一周年企畫底片回憶錄</a>',
  '<a href="" style="color: blue;" target="_blank">早餐店菜單</a>',
])
const jenny40128 = ref([])
for (let i = 0; i < ijenny40128.length && i < tjenny40128.length; i++) {
  jenny40128.value.push({ image: ijenny40128[i], text: tjenny40128[i] })
}

const isakuyaliu = reactive<{ src: string }[]>([
  { src: '/sakuyaliu/112.09.24 一周年早安柴1.png' },
  { src: '/sakuyaliu/112.09.01 咪哭生日柴.png' },
  { src: '/sakuyaliu/112.08.31 柴柴吊飾圖.png' },
  { src: '/sakuyaliu/112.08.31 柴柴吊飾.png' },
  { src: '/sakuyaliu/112.08.23 七夕.png' },
  { src: '/sakuyaliu/112.08.18 FF41攤位展示繪圖板.png' },
  { src: '/sakuyaliu/112.08.18 FF41認親.png' },
  { src: '/sakuyaliu/112.08.20 柴柴耳朵尾巴.png' },
  { src: '/sakuyaliu/111.10.27 柴柴心動套組.jpg' },
  { src: '/sakuyaliu/111.10.30 dimoo裝扮.jpg' },
  { src: '/sakuyaliu/111.12.04 柴柴初配信手燈.png' },
  { src: '/sakuyaliu/111.12.14 呱呱蛋餅製造所.jpg' },
  { src: '/sakuyaliu/111.12.24 檸檬派.png' },
  { src: '/sakuyaliu/111.12.24 草莓泡芙.png' },
  { src: '/sakuyaliu/111.12.26 聖誕下午茶直播.png' },
  { src: '/sakuyaliu/112.01.05 柴柴五萬賀圖.jpg' },
  { src: '/sakuyaliu/112.01.11 等柴恢復練手感.png' },
  { src: '/sakuyaliu/112.01.20 呱呱愛黏土娃.png' },
  { src: '/sakuyaliu/112.01.22 FF40認親卡.jpg' },
  { src: '/sakuyaliu/112.01.22 柴柴賀年卡.jpg' },
  { src: '/sakuyaliu/112.01.23 早安呱呱動圖.GIF' },
  { src: '/sakuyaliu/112.01.31 呱呱眼罩.png' },
  { src: '/sakuyaliu/112.02.14 柴柴情人節.jpg' },
  { src: '/sakuyaliu/112.02.18 小小柴.jpg' },
  { src: '/sakuyaliu/112.03.25 柴柴半周年紀念.jpg' },
  { src: '/sakuyaliu/112.03.30 彩虹猴猴柴.jpg' },
  { src: '/sakuyaliu/112.04.11 呱呱吊飾.png' },
  { src: '/sakuyaliu/112.04.16 布丁丁生日.png' },
  { src: '/sakuyaliu/112.04.20 新旅程的開始.png' },
  { src: '/sakuyaliu/112.05.02 3D柴8000訂.png' },
  { src: '/sakuyaliu/112.05.15 泳裝女呱呱.png' },
  { src: '/sakuyaliu/112.05.15 泳裝男呱呱.png' },
  { src: '/sakuyaliu/112.05.18 巨大呱呱燒.png' },
  { src: '/sakuyaliu/112.06.12 柴生日 2D.png' },
  { src: '/sakuyaliu/112.06.12 柴生日 3D.png' },
  { src: '/sakuyaliu/112.06.12 柴生日老恩委託.png' },
  { src: '/sakuyaliu/112.02.28 柴柴驚恐浴室歌回.jpg' },
  { src: '/sakuyaliu/112.05.05 呱呱燒.png' },
  { src: '/sakuyaliu/112.07.01 3D柴兩萬訂閱祝賀.png' },
  { src: '/sakuyaliu/112.07.15 中式柴.png' },
  { src: '/sakuyaliu/112.07 26 短髮柴.png' },
  { src: '/sakuyaliu/112.08.10 新衣裝預測.png' },
  { src: '/sakuyaliu/112.08.14 柴柴新衣裝.png' },
])
const tsakuyaliu = reactive<string[]>([
  '<a href="https://x.com/sakuyaliu1997/status/1705896582066090207" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1697272792184492189" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1697201382296879545" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1697201382296879545" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1693274653735944252" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1692226035205669111" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1693274653735944252" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1694031568938078433" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1585642414416404481" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1586530401584979969" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1599283324442542081" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1603004879558975489" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1606642928801447936" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1606642928801447936" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1607049669242417152" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1611020007521267713" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1613180199562280961" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1616448571183894529" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1616828566670565377" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1617013473732603904" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1617316396828102656" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1620437852973850624" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1625214587510599681" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1626612947811446784" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1639309002688593920" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1641362545687810048" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1645673847625240578" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1647590156961189892" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1648911420459974656" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1653302212171546624" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1658007643020230656" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1658007643020230656" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1659073653290708992" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1668228977486602241" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1668228977486602241" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1630547632639684610" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="" style="color: blue;" target="_blank">DC貼圖</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1674969176958713856" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1680063732255453185" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1684197911343558656" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1689309351444664321" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/sakuyaliu1997/status/1690942954981253120" style="color: blue;" target="_blank">Twitter連結</a>',
])
const sakuyaliu = ref([])
for (let i = 0; i < isakuyaliu.length && i < tsakuyaliu.length; i++) {
  sakuyaliu.value.push({ image: isakuyaliu[i], text: tsakuyaliu[i] })
}

const ijohn981111 = reactive<{ src: string }[]>([
  { src: '/john981111/20230924一周年用.jpg' },
  { src: '/john981111/20230814泳裝柴柴.jpg' },
  { src: '/john981111/20230802柴唱歌.jpg' },
  { src: '/john981111/20230617柴生日2.jpg' },
  { src: '/john981111/20230520Q版柴 (1).jpg' },
  { src: '/john981111/20220823.jpg' },
  { src: '/john981111/20220826.jpg' },
  { src: '/john981111/20220902.png' },
  { src: '/john981111/20220913.jpg' },
  { src: '/john981111/20220924.jpg' },
  { src: '/john981111/20220928.jpg' },
  { src: '/john981111/20221012.jpg' },
  { src: '/john981111/20221024.jpg' },
  { src: '/john981111/20221201.jpg' },
  { src: '/john981111/20221205angelshiba.jpg' },
  { src: '/john981111/20221217.jpg' },
  { src: '/john981111/20230101.jpg' },
  { src: '/john981111/20230105.jpg' },
  { src: '/john981111/20230122.jpg' },
  { src: '/john981111/20230214.jpg' },
  { src: '/john981111/20230228ASMR.jpg' },
  { src: '/john981111/20230324.jpg' },
  { src: '/john981111/20230510.jpg' },
])
const tjohn981111 = reactive<string[]>([
  '<a href="https://twitter.com/john981111/status/1705799132626178552" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://twitter.com/john981111/status/1690954199239192576" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://twitter.com/john981111/status/1686627308327813120" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://twitter.com/john981111/status/1668244267259625473" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://twitter.com/john981111/status/1659884641913020416" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://twitter.com/john981111/status/1561982317622874112" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://twitter.com/john981111/status/1563137546938630152" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://twitter.com/john981111/status/1565707574514958336" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://twitter.com/john981111/status/1569468314266775552" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://twitter.com/john981111/status/1573613020332204032" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://twitter.com/john981111/status/1575125130585378821" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://twitter.com/john981111/status/1580219515862122503" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://twitter.com/john981111/status/1584551075625185281" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://twitter.com/john981111/status/1598190242267529216" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://twitter.com/john981111/status/1606545811667824641" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://twitter.com/john981111/status/1604111796390232064" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://twitter.com/john981111/status/1609337754827264001" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://twitter.com/john981111/status/1610982281761509379" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://twitter.com/john981111/status/1616957121127673856" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://twitter.com/john981111/status/1625279098175246338" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://twitter.com/john981111/status/1630454935153422336" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://twitter.com/john981111/status/1639046815353020424" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://twitter.com/john981111/status/1656252204939112449" style="color: blue;" target="_blank">Twitter連結</a>',
])
const john981111 = ref([])
for (let i = 0; i < ijohn981111.length && i < tjohn981111.length; i++) {
  john981111.value.push({ image: ijohn981111[i], text: tjohn981111[i] })
}

const iDORAHD01 = reactive<{ src: string }[]>([
  { src: '/DORAHD01/20230924.jpg' },
  { src: '/DORAHD01/20230727.jpg' },
  { src: '/DORAHD01/5.JPG' },
  { src: '/DORAHD01/IMG_5161.JPG' },
  { src: '/DORAHD01/IMG_1787.PNG' },
  { src: '/DORAHD01/IMG_1254.PNG' },
  { src: '/DORAHD01/4.GIF' },
  { src: '/DORAHD01/2.PNG' },
  { src: '/DORAHD01/20220825.jpg' },
  { src: '/DORAHD01/20220904_1.jpg' },
  { src: '/DORAHD01/20220904_2.jpg' },
  { src: '/DORAHD01/20220924.jpg' },
  { src: '/DORAHD01/20220929.jpg' },
  { src: '/DORAHD01/20221008.jpg' },
  { src: '/DORAHD01/20221025.jpg' },
  { src: '/DORAHD01/20221030.jpg' },
  { src: '/DORAHD01/20221216.jpg' },
  { src: '/DORAHD01/20221225.jpg' },
  { src: '/DORAHD01/20221225柴龜.jpg' },
  { src: '/DORAHD01/20230122.jpg' },
  { src: '/DORAHD01/20230202.jpg' },
  { src: '/DORAHD01/20230206.jpg' },
  { src: '/DORAHD01/20230216.jpg' },
  { src: '/DORAHD01/20230226.jpg' },
  { src: '/DORAHD01/20230304.jpg' },
  { src: '/DORAHD01/20230308.jpg' },
  { src: '/DORAHD01/20230324.jpg' },
  { src: '/DORAHD01/20230510.jpg' },
  { src: '/DORAHD01/20230520.jpg' },
  { src: '/DORAHD01/20230520.gif' },
  { src: '/DORAHD01/20230527.jpg' },
  { src: '/DORAHD01/20230621.gif' },
  { src: '/DORAHD01/20230708.jpg' },
  { src: '/DORAHD01/20230801.jpg' },
  { src: '/DORAHD01/20230805.jpg' },
  { src: '/DORAHD01/20230830.jpg' },
  { src: '/DORAHD01/20230911.jpg' },
  { src: '/DORAHD01/20230916.gif' },
  { src: '/DORAHD01/20230926.gif' },
])
const tDORAHD01 = reactive<string[]>([
  '<a href="https://x.com/DORAHD01/status/1705928147903164911" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/DORAHD01/status/1684360691116048384" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/DORAHD01/status/1562818233308446723" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/DORAHD01/status/1566279254710833152" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/DORAHD01/status/1566279254710833152" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/DORAHD01/status/1573614847451074560" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/DORAHD01/status/1575334987175710720" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/DORAHD01/status/1578428723388616704" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/DORAHD01/status/1584751169418964994" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/DORAHD01/status/1586672261339418625" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/DORAHD01/status/1603440828625874944" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/DORAHD01/status/1606902902773387265" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/DORAHD01/status/1607000149536157697" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/DORAHD01/status/1616828499108712448" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/DORAHD01/status/1620993477378211840" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/DORAHD01/status/1622492880580534272" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/DORAHD01/status/1626120377092182016" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/DORAHD01/status/1629722380917698560" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/DORAHD01/status/1631870927356190720" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/DORAHD01/status/1633356088992231425" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/DORAHD01/status/1638962379156508675" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/DORAHD01/status/1656320780291158016" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/DORAHD01/status/1659628621991149568" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/DORAHD01/status/1659883174841978880" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/DORAHD01/status/1662405766631034880" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/DORAHD01/status/1671392476383576064" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/DORAHD01/status/1677689456135118849" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/DORAHD01/status/1686364045702803456" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/DORAHD01/status/1687783068881534976" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/DORAHD01/status/1696641185241043149" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/DORAHD01/status/1700949240409985361" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/DORAHD01/status/1702753437417611677" style="color: blue;" target="_blank">Twitter連結</a>',
  '<a href="https://x.com/DORAHD01/status/1706445121833824537" style="color: blue;" target="_blank">Twitter連結</a>',
])
const DORAHD01 = ref([])
for (let i = 0; i < iDORAHD01.length && i < tDORAHD01.length; i++) {
  DORAHD01.value.push({ image: iDORAHD01[i], text: tDORAHD01[i] })
}
</script>

<template>
  <div class="py-6">
    <SHeading class="text-zinc-800"
      ><a href="https://x.com/kaworu1030" style="color: blue" target="_blank">KAWORU卡歐露老師</a></SHeading
    >
    <Carousel :items-to-show="1">
      <Slide v-for="(item, index) in kaworu" :key="index">
        <div class="flex flex-col items-center" style="max-height: 900px; max-width: 500px">
          <img class="h-auto w-full" :src="item.image.src" alt="Image" />
          <p v-html="item.text"></p>
        </div>
      </Slide>
      <template v-if="kaworu.length" #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>

  <div class="py-6">
    <SHeading class="text-zinc-800"
      ><a href="https://x.com/irokatanaoto" style="color: blue" target="_blank">色形直人老師</a></SHeading
    >
    <Carousel :items-to-show="1">
      <Slide v-for="(item, index) in irokatanaoto" :key="index">
        <div class="flex flex-col items-center" style="max-height: 900px; max-width: 500px">
          <img class="h-auto w-full" :src="item.image.src" alt="Image" />
          <p v-html="item.text"></p>
        </div>
      </Slide>
      <template v-if="irokatanaoto.length" #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>

  <div class="py-6">
    <SHeading class="text-zinc-800"
      ><a href="https://twitter.com/t750627" style="color: blue" target="_blank">阿本</a></SHeading
    >
    <Carousel :items-to-show="1">
      <Slide v-for="(item, index) in t750627" :key="index">
        <div class="flex flex-col items-center" style="max-height: 900px; max-width: 500px">
          <img class="h-auto w-full" :src="item.image.src" alt="Image" />
          <p v-html="item.text"></p>
        </div>
      </Slide>
      <template v-if="t750627.length" #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>

  <div class="py-6">
    <SHeading class="text-zinc-800"
      ><a href="https://x.com/sakuyaliu1997" style="color: blue" target="_blank">冰霜夜雨</a></SHeading
    >
    <Carousel :items-to-show="1">
      <Slide v-for="(item, index) in sakuyaliu" :key="index">
        <div class="flex flex-col items-center" style="max-height: 900px; max-width: 500px">
          <img class="h-auto w-full" :src="item.image.src" alt="Image" />
          <p v-html="item.text"></p>
        </div>
      </Slide>
      <template v-if="sakuyaliu.length" #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>

  <div class="py-6">
    <SHeading class="text-zinc-800"
      ><a href="https://x.com/john981111" style="color: blue" target="_blank">鬼哥</a></SHeading
    >
    <Carousel :items-to-show="1">
      <Slide v-for="(item, index) in john981111" :key="index">
        <div class="flex flex-col items-center" style="max-height: 900px; max-width: 500px">
          <img class="h-auto w-full" :src="item.image.src" alt="Image" />
          <p v-html="item.text"></p>
        </div>
      </Slide>
      <template v-if="john981111.length" #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>

  <div class="py-6">
    <SHeading class="text-zinc-800"
      ><a href="https://x.com/jenny40128" style="color: blue" target="_blank">凌最</a></SHeading
    >
    <Carousel :items-to-show="1">
      <Slide v-for="(item, index) in jenny40128" :key="index">
        <div class="flex flex-col items-center" style="max-height: 900px; max-width: 500px">
          <img class="h-auto w-full" :src="item.image.src" alt="Image" />
          <p v-html="item.text"></p>
        </div>
      </Slide>
      <template v-if="jenny40128.length" #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>

  <div class="py-6">
    <SHeading class="text-zinc-800"
      ><a href="https://x.com/DORAHD01" style="color: blue" target="_blank">X5(哆啦)</a></SHeading
    >
    <Carousel :items-to-show="1">
      <Slide v-for="(item, index) in DORAHD01" :key="index">
        <div class="flex flex-col items-center" style="max-height: 900px; max-width: 500px">
          <img class="h-auto w-full" :src="item.image.src" alt="Image" />
          <p v-html="item.text"></p>
        </div>
      </Slide>
      <template v-if="DORAHD01.length" #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<style lang="postcss" scoped>
:deep(button.carousel__prev),
:deep(button.carousel__next) {
  @apply rounded-full bg-gray-100;
}
:deep(button.carousel__prev--disabled),
:deep(button.carousel__next--disabled) {
  @apply hidden;
}
</style>
