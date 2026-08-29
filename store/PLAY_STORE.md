# Google Play 上架材料 · Fuga Mythica

打包方式:**PWABuilder**(网页版,不需要本机装 JDK/Android SDK)。
本目录里的图片可直接上传;文案可直接复制。

---

## 0. 固定信息

| 项 | 值 |
|---|---|
| 应用包名 Package name | `io.github.walterwood1995.fugamythica` |
| 网站 URL | `https://walterwood1995.github.io/fuga-mythica/` |
| 隐私政策 URL | `https://walterwood1995.github.io/fuga-mythica/privacy.html` |
| 图片授权页 | `https://walterwood1995.github.io/fuga-mythica/attributions.html` |
| 联系邮箱 | haoyang.wu@gmail.com |
| 默认语言 | 中文(简体)— 另加英语(美国) |
| 应用类型 | 游戏 → 教育类(Educational) |

**包名一旦上传就永久不可改**,请在第一次打包前确认。

---

## 1. 图形素材(本目录内,已按 Play 规格生成)

| 文件 | 规格 | 用途 |
|---|---|---|
| `app-icon-512.png` | 512×512, 32 位 PNG | 应用图标 |
| `feature-graphic-1024x500.png` | 1024×500 | 主打图(必填) |
| `screenshots/1-title.png` … `7-chapter.png` | 1030×2230 | 手机截图(必填 2–8 张) |

建议上传顺序:`3-quiz`(核心玩法)→ `4-answer`(答案卡)→ `2-map`(地图)→ `7-chapter`(章节)→ `5-codex`(词汇册)→ `1-title` → `6-settings`。

---

## 2. 商品详情文案

### 中文(简体)— 默认语言

**应用名称**(≤30 字符)
```
Fuga Mythica 神话拉丁语
```

**简短说明**(≤80 字符)
```
希腊神话密室逃脱,400 个拉丁语单词,每词配一幅古典名画。
```

**完整说明**(≤4000 字符)
```
把拉丁语课变成一场逃脱游戏。

忒修斯要走出克里特迷宫,俄耳甫斯要从冥府带回爱人——每闯一关,你都在学真正的拉丁语。答对一题,开一把锁;十把锁全开,才能离开这一关。

【400 个词,400 幅画】
每个单词的答案卡上都配着一幅古典艺术作品:庞贝壁画、希腊红绘陶瓶、罗马马赛克、贝尼尼的雕像、卡拉瓦乔的《美杜莎》。图下写明作品名称、作者与收藏地——单词不再是抽象符号,而是看得见的东西。

【看得懂词是怎么长出来的】
· 词根拆解:remigare = rem-(桨)+ -igare(驱动)
· 拉丁语词族:同一个词根换前缀后缀,变出一串亲戚词
· 词源故事:这个词从印欧语走到今天,经历了什么
· 今天还活着的词:西班牙语 remo、法语 rame、英语 remove——都是它的后代

【两种难度】
学徒(6–8 岁):看图选词,三选一。
英雄(9–12 岁):双向翻译,四选一,更考记忆。

【为学习设计的机制】
· 错词自动进入复习队列,后面的关卡会再考你
· 变形咒语:动词、名词的变位变格,当成咒语来记
· 羊皮卷地图、希腊纹样换肤、成绩战报与排行榜
· 九种界面语言:中文、English、Español、Français、Deutsch、Русский、日本語、हिन्दी、العربية

【关于隐私】
没有账号系统,没有服务器,没有广告,没有统计代码。所有进度只存在你的手机里。
可在「设置」中下载离线包,之后完全断网也能玩。

图片来自 Wikimedia Commons,作者与授权在应用内「设置 → 图片来源与授权」中逐一列出。
```

### English (United States)

**App name**
```
Fuga Mythica: Latin Quest
```

**Short description**
```
A Greek-myth escape room for Latin: 400 words, each with a classical artwork.
```

**Full description**
```
Turn the Latin lesson into an escape room.

Theseus has to get out of the Cretan labyrinth; Orpheus has to bring his wife back from the underworld. Every lock you open is a Latin word you got right — ten locks, and the level lets you go.

400 WORDS, 400 ARTWORKS
Every answer card carries a classical work of art: Pompeian frescoes, Greek red-figure vases, Roman mosaics, Bernini's marble, Caravaggio's Medusa. Each one is captioned with its title, artist and museum, so a word is something you can see rather than a symbol to memorise.

SEE HOW WORDS ARE BUILT
· Root breakdown: remigare = rem- (oar) + -igare (to drive)
· Latin word families: one root, new prefixes and suffixes, a whole set of relatives
· Origin stories: how the word travelled from Indo-European to today
· Still alive: Spanish remo, French rame, English remove — all descendants

TWO DIFFICULTIES
Apprentice (ages 6–8): pick the picture, three choices.
Hero (ages 9–12): translate both ways, four choices.

BUILT FOR LEARNING
· Missed words return automatically in later levels
· Transformation spells: conjugations and declensions, learned as incantations
· Parchment map, Greek-pattern skins per chapter, score reports and a leaderboard
· Nine interface languages: English, 中文, Español, Français, Deutsch, Русский, 日本語, हिन्दी, العربية

PRIVACY
No accounts, no server, no ads, no analytics. All progress stays on your phone.
Download the offline pack in Settings and the game works with no connection at all.

Artwork comes from Wikimedia Commons; every file's author and licence is listed in Settings → Image sources and licences.
```

---

## 3. 数据安全表(Data safety)—— 逐题答案

- 你的应用是否收集或分享任何必需的用户数据? → **否 (No)**
- 所有用户数据在传输过程中是否加密? → 不适用(不收集)
- 是否提供删除数据的方式? → 不适用(数据仅存本机,应用内「清除进度重新开始」可删)

> 依据:应用无后端,档案仅写入 WebView 的 localStorage,不上传。若表单追问,可说明:游戏会向 Wikimedia Commons 与 Google Fonts 发起图片/字体请求,这属于内容加载,不涉及用户数据收集。

## 4. 内容分级问卷(IARC)—— 逐题答案

| 问题 | 答案 |
|---|---|
| 类别 | 参考类 / 教育类应用(Reference, News, or Educational) |
| 暴力 | 否(神话叙述,无写实暴力画面) |
| 性或裸露 | 否 —— **注意**:部分古典雕塑与绘画含艺术性裸体。若问卷有"艺术裸体"相关选项,如实勾选 |
| 粗俗语言 / 毒品 / 赌博 | 否 |
| 用户互动、分享位置、内购 | 否 |
| 数字购买 | 否 |

## 5. 目标受众与内容(Target audience)

- 目标年龄段:**6–8、9–12**(会触发「面向儿童」规则)
- 应用是否面向儿童? → **是**
- 因此需要:隐私政策(已备)、无广告(符合)、无第三方分析(符合)、家庭政策声明(勾选合规)

> 若你不想进入「Designed for Families」计划,可把目标年龄设为 13+,审核更简单;但本游戏定位就是儿童,建议如实填写。

---

## 6. 操作步骤(你点、我配合)

### 第 1 步 · 注册开发者账号
1. 打开 https://play.google.com/console/signup ,用你的 Google 账号登录
2. 选择 **个人 (Personal)** 账号类型,填姓名、地址、电话
3. 支付 **25 美元** 一次性注册费
4. 身份验证(证件),通常 1–3 天出结果

⚠️ 个人账号有「封闭测试满 12 名测试者、持续 14 天」才能申请正式发布的要求。**建议注册当天就把封闭测试建起来**,14 天的钟越早开始越好。

### 第 2 步 · 生成 Android 安装包(PWABuilder)
1. 打开 https://www.pwabuilder.com
2. 输入 `https://walterwood1995.github.io/fuga-mythica/` → Start
3. 点 **Package for stores → Android**
4. 确认下列字段(其余默认):
   - Package ID: `io.github.walterwood1995.fugamythica`
   - App name: `Fuga Mythica 神话拉丁语`
   - Launcher name: `Fuga Mythica`
   - Display mode: `standalone`
   - Signing key: **Create new**(让它生成),下载后的 `signing.keystore` 与密码**务必备份**
5. 下载 zip,里面有 `app-release-bundle.aab`(上传用)和 `assetlinks.json`
6. **把 zip 里的 `assetlinks.json` 发给我**,我来更新仓库里的 `.well-known/assetlinks.json`

### 第 3 步 · 创建应用并上传
1. Play Console → 创建应用 → 名称 `Fuga Mythica 神话拉丁语`,类型「游戏」,免费
2. 测试 → 封闭测试 → 创建版本 → 上传 `app-release-bundle.aab`
3. 上传后进入「应用完整性 / App integrity」→ 复制 **应用签名密钥的 SHA-256 证书指纹**
4. **把这串指纹发给我**,我据此确认 `.well-known/assetlinks.json` 正确(这一步决定 App 里会不会顶着一条浏览器地址栏)

### 第 4 步 · 填写商品详情
用本文档第 2 节的文案 + 本目录的图片,填「主要商品详情」。

### 第 5 步 · 封闭测试
1. 创建测试人员邮箱列表(≥12 个 Google 账号)—— 你的试玩团队正好
2. 把测试链接发给他们,请他们**安装并保持 14 天**
3. 满 14 天后申请正式发布

---

## 7. 我需要你回传的两样东西

1. PWABuilder 生成的 `assetlinks.json`(或其中的 SHA-256 指纹)
2. Play Console「应用完整性」页面里的应用签名密钥 SHA-256 指纹

拿到后我更新仓库、推送、验证线上 `https://walterwood1995.github.io/fuga-mythica/.well-known/assetlinks.json` 可访问且指纹匹配。
