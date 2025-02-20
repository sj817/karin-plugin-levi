import { karin, segment } from 'node-karin'
import { getRandomLineFromFile } from '../utils/common.js'
import he from 'he'

const rootPath = process.cwd() + '/plugins/karin-plugin-levi'

const girlValueMap = {
  jk: 'jk',
  JK: 'jk',
  ak: 'ak',
  cos: 'cos',
  国风: 'guofeng',
  汉服: 'hanfu',
  黑丝: 'heisi',
  hs: 'heisi',
  白丝: 'baisi',
  bs: 'baisi',
  小姐姐: 'xiaojiejie',
  xjj: 'xiaojiejie',
  买家秀: 'taobao',
  小性感: 'xiaoxinggan',
  夏日女友: 'girlfriend',
  诱惑图: 'youhuotu',
  yht: 'youhuotu',
  mt: 'meitui',
  随机ai: 'ai',
  随机AI: 'ai',
  ai: 'ai',
  AI: 'ai',
}

const faceValueMap = {
  坤坤: 'cxk',
  小黑子: 'cxk',
  鸡: 'cxk',
  cxk: 'cxk',
  鸡脚: 'cxk',
  鸽鸽: 'cxk',
  哥哥: 'cxk',
  一二布布: 'bubu',
  废柴: 'cheems',
  小恐龙: 'xiaokonglong',
  哆啦A梦: 'ameng',
  哆啦a梦: 'ameng',
  A梦: 'ameng',
  a梦: 'ameng',
  阿蒙: 'ameng',
  狐狐: 'fox',
  随机狐狐: 'fox',
  狐狸: 'fox',
  kabo: 'kabo',
  咖波: 'kabo',
  kapo: 'kabo',
  猫虫: 'kabo',
  库洛米: 'kuluomi',
  kuluomi: 'kuluomi',
  龙图: 'longtu',
  随机龙图: 'longtu',
  蘑菇头: 'mogutou',
  随机蘑菇头: 'mogutou',
  派大星: 'paidaxing',
  随机派大星: 'paidaxing',
  熊猫头: 'panda',
  随机熊猫头: 'panda',
  小黄鸡: 'xiaohuangji',
  随机小黄鸡: 'xiaohuangji',
  小灰灰: 'xiaohuihui',
  随机小灰灰: 'xiaohuihui',
  小豆泥: 'xiaodouni',
  疾炫鼬: 'jixuanyou',
  疾旋鼬: 'jixuanyou',
  兄弟兄弟: 'jixuanyou',
  兄弟你好香: 'jixuanyou',
  柴郡: 'chaijun',
  随机柴郡: 'chaijun',
}

const photoValueMap = {
  集原美: 'jiyuanmei',
  mc酱: 'mcjiang',
  兽猫酱: 'shoumao',
  甘城: 'maoyuna',
  萌宠: 'mengc',
  可爱萌宠: 'mengc',
}

const videoValueMap = {
  抖音变装: 'dybianzhuang',
  快手变装: 'ksbianzhuang',
  裙子: 'qunzi',
  随机裙子: 'qunzi',
  甜妹视频: 'tianmei',
  小姐姐视频: 'yzxjj',
  随机小姐姐: 'yzxjj',
  双倍快乐: 'shuangbei',
  loli: 'loli',
  玉足: 'yuzu',
  黑丝视频: 'heisi',
  白丝视频: 'baisi',
  慢摇视频: 'manyao',
  cos系列: 'cos',
  纯情女高: 'nvgao',
  吊带系列: 'diaodai',
  完美身材: 'shencai',
  热舞视频: 'rewu',
  穿搭系列: 'chuanda',
  学姐系列: 'xuejie',
  卡哇伊: 'kawayi',
  清纯系列: 'qingchun',
  汉服系列: 'hanfu',
}

const textValueMap = {
  kfc: 'kfc',
  v50: 'kfc',
  网易云热评: 'wyy',
  舔狗日记: 'tg',
  污污: 'saohua',
  污句子: 'saohua',
  日记: 'riji',
  随机日记: 'riji',
  新春祝福: 'newyear',
}

export const girljh = karin.command(`^#?(${Object.keys(girlValueMap).join('|')})$`, async (e) => {
  const name = girlValueMap[e.msg.replace('#', '')]
  await e.reply(segment.image(`http://hanhan.avocado.wiki?${name}`))
  return true
}, { name: 'girljh' })

export const facejh = karin.command(`^#?(${Object.keys(faceValueMap).join('|')})$`, async (e) => {
  const name = faceValueMap[e.msg.replace('#', '')]
  await e.reply(segment.image(`http://hanhan.avocado.wiki/?${name}`))
  return true
}, { name: 'facejh' })

export const photojh = karin.command(`^#?(${Object.keys(photoValueMap).join('|')})$`, async (e) => {
  const name = photoValueMap[e.msg.replace('#', '')]
  await e.reply(segment.image(`http://hanhan.avocado.wiki/?${name}`))
  return true
}, { name: 'photojh' })

export const videojh = karin.command(`^#?(${Object.keys(videoValueMap).join('|')})$`, async (e) => {
  const name = videoValueMap[e.msg.replace('#', '')]
  const urls = `http://ap.hanhan.icu:4006?category=${name}`
  const resp = await fetch(urls)
  // console.log(resp.url)
  await e.reply(segment.video(resp.url))
  return true
}, { name: 'videojh' })

export const textjh = karin.command(`^#?(${Object.keys(textValueMap).join('|')})$`, async (e) => {
  const name = textValueMap[e.msg.replace('#', '')]
  const path = rootPath + `/resources/json/${name}.json`
  console.log(path)
  let result = await getRandomLineFromFile(path)
  console.log(result)
  result = he.decode(await result.replace(/<br>/g, '\n'))
  await e.reply(result)
  return true
}, { name: 'textjh' })
