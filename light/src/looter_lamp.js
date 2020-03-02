const rooter_power = { ルータ電源ランプ: ["緑点灯", "消灯"] };
const alarm = { アラームランプ: ["赤点灯", "赤点滅", "消灯"] };
const ppp = { ＰＰＰランプ: ["緑点灯", "橙点灯", "消灯"] };
const light_tel = { ひかり電話ランプ: ["緑点灯", "緑点滅", "消灯"] };
const act = { ＡＣＴランプ: ["緑点灯", "緑点滅", "消灯"] };
const register = { 登録ランプ: ["緑点灯", "緑点滅", "赤点灯", "赤点滅", "消灯"] };
const initial = { 初期状態ランプ: ["橙点灯", "橙点滅", "消灯"] };
const option = { オプションランプ: ["緑点灯", "緑点滅", "青3回点滅後、２秒点灯", "消灯"] };
const Authentication = { 認証ランプ: ["緑点灯", "消灯"] };
const uni = { ＵＮＩランプ: ["緑点灯", "緑点灯", "消灯"] };
const optical_line = { 光回線ランプ: ["緑点灯", "橙点灯", "橙点滅", "消灯"] };
const power = { 電源ランプ: ["緑点灯", "赤点灯", "赤点滅", "消灯"] };
const movie = { 映像出力ランプ: ["緑点灯", "赤点灯", "消灯"] };
const lan_setup = { 登録ランプ: ["緑点滅", "橙点滅", "橙点灯(10秒間)", "赤点灯(10秒間)"] };
const lan_setup_ararm = { アラームランプ: ["赤点灯(10秒間)"] };


//https: //www.wakuwakubank.com/posts};464-javascript-array-object-pattern/

const pr600_ki = {
  "rooter_power": rooter_power,
  "alarm": alarm,
  "ppp": ppp,
  "light_tel": light_tel,
  "act": act,
  "register": register,
  "initial": initial,
  "option": option,
  "Authentication": Authentication,
  "uni": uni,
  "optical_line": optical_line,
  "power": power,
  "movie": movie,
  "lan_setup": lan_setup,
  "lan_setup_ararm": lan_setup_ararm
}

const pr600_ki_name = ["ルータ電源ランプ", "アラームランプ", "ＰＰＰランプ", "ひかり電話ランプ", "ＡＣＴランプ", "登録ランプ", "初期状態ランプ", "オプションランプ", "認証ランプ", "ＵＮＩランプ", "光回線ランプ", "電源ランプ", "映像出力ランプ", "登録ランプ", "アラームランプ"];


const hlogs_key = ["rooter_power", "alarm", "ppp", "light_tel", "act", "register", "initial", "option", "Authentication", "uni", "optical_line", "power", "movie", "lan_setup", "lan_setup_ararm"];