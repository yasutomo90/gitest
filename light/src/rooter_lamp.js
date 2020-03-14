//{ type: text, id : id, value : placeholder }
//{ type: radio, label_text: label_text, name : name, id : [], value : [] }

//ラジオランプ
const rooter_power = { type: 'radio', label_text: 'ルーター電源ランプ', name: 'rooter_power_lamp', id: ['rooter_power_lamp_green', 'rooter_power_lamp_black'], value: ['緑点灯', '消灯'] };
const alarm = { type: 'radio', label_text: 'アラームランプ', name: 'alarm_lamp', id: ['alarm_lamp_red', 'alarm_lamp_red_flash', 'alarm_lamp_black'], value: ['赤点灯', '赤点滅', '消灯'] };
const ppp = { type: 'radio', label_text: 'PPPランプ', name: 'ppp_lamp', id: ['ppp_lamp_green', 'ppp_lamp_orange', 'ppp_lamp_black'], value: ['緑点灯', '橙点灯', '消灯'] };
const light_tel = { type: 'radio', label_text: 'ひかり電話ランプ', name: 'light_tel_lamp', id: ['light_tel_lamp_green', 'light_tel_lamp_green_flash', 'light_tel_lamp_black'], value: ['緑点灯', '緑点灯', '消灯'] };
const act = { type: 'radio', label_text: 'ACTランプ', name: 'act_lamp', id: ['act_lamp_green', 'act_lamp_green_flash', 'act_lamp_black'], value: ['緑点灯', '緑点滅', '消灯'] };
const register = { type: 'radio', label_text: '登録ランプ', name: 'register_lamp', id: ['register_lamp_green', 'register_lamp_green_flach', 'register_lamp_red', 'register_lamp_red_flach', 'register_lamp-black'], value: ['緑点灯', '緑点滅', '赤点灯', '赤点滅', '消灯'] };
const initial = { type: 'radio', label_text: '初期状態ランプ', name: 'initial_lamp', id: ['initial_lamp_orange', 'initial_lamp_flach', 'initial_lamp_black'], value: ['橙点灯', '橙点滅', '消灯'] };
const option = { type: 'radio', label_text: 'オプションランプ', name: 'option_lamp', id: ['option_lamp_green', 'option_lamp_green_flash', 'option_lamp_blue', 'option_lamp_black'], value: ['緑点灯', '緑点滅', '青3回点滅後、２秒点灯', '消灯'] };
const Authentication = { radio: 'radio', label_text: '認証ランプ', name: 'Authentication_lamp', id: ['Authentication_lamp_green', 'Authentication_lamp_black'], value: ['緑点灯', '消灯'] };
const uni = { type: 'radio', label_text: 'UNIランプ', name: 'uni_lamp', id: ['uni_lamp_green', 'uni_lamp_green_flash', 'uni_lamp_black'], value: ['緑点灯', '緑点滅', '消灯'] };
const optical_line = { type: 'radio', label_text: '光回線ランプ', name: 'optical_line_lamp', id: ['optical_line_lamp_green', 'optical_line_lamp_orange', 'optical_line_lamp_orange_flach', 'optical_line_lamp_black'], value: ['緑点灯', '橙点灯', '橙点滅', '消灯'] };
const power = { type: 'radio', label_text: '電源ランプ', name: 'power_lamp', id: ['power_lamp_green', 'power_lamp_red', 'power_lamp_red_flash', 'power_lamp_black'], value: ['緑点灯', '赤点灯', '赤点滅', '消灯'] };
const movie = { type: 'radio', label_text: '映像出力ランプ', name: 'movie_lamp', id: ['movie_lamp_green', 'movie_lamp_red', 'movie_lamp_black'], value: ['緑点灯', '赤点灯', '消灯'] };

//無線LANセットアップ中
const lan_setup = { type: 'radio', label_text: '登録ランプ', name: 'lan_setup_lamp', id: ['lan_setup_lamp_green_flach', 'lan_setup_lamp_orange_flach', 'lan_setup_lamp_orange', 'lan_setup_lamp_red'], value: ['緑点滅', '橙点滅', '橙点灯(10秒間)', '赤点灯(10秒間)'] };
const lan_setup_ararm = { type: 'radio', label_text: 'アラームランプ', name: 'lan_setup_ararm_lamp', id: ['lan_setup_ararm_lamp_red', 'lan_setup_ararm_lamp_black'], value: ['赤点灯(10秒間)', '消灯'] };

//最初の項目
const user_account = { type: 'text', id: 'user_account', value: 'アカウント' };
const cfs = { type: 'text', id: 'cfs', value: 'CFS' };
const tell_no = { type: 'text', id: 'tell_no', value: '電話番号' };
const west_east = { type: 'radio', label_text: '西or東', name: 'west_east', id: ['west', 'east'], value: ['西', '東'] };
const farst_lib = [user_account, cfs, tell_no, tell_no, west_east];

//次の項目
const wireless_lan = { type: 'text', id: 'wireless_lan', value: '無線LANメーカー' };
const wireless_model = { type: 'text', id: 'wireless_model', value: '無線型番' };
const rooter_mode = { type: 'radio', label_text: 'ルーターモード', name: 'rooter_mode', id: ['ap_mode', 'rt_mode', 'br_mode'], value: ['AP', 'RT', 'BR'] };

const second_lib = [wireless_lan, wireless_model, rooter_mode];

//下の項目
const optical = [
  { type: 'radio', label_text: '利用可否', name: 'use', id: ['use_ok', 'use_ng'], value: ['可', '不可'] },
  { type: 'radio', label_text: 'ディスプレイ', name: 'display', id: ['display_ok', 'display_ng'], value: ['点灯', '消灯'] },
  { type: 'radio', label_text: '外線音', name: 'outside_call', id: ['outside_call_ok', 'outside_call_ng'], value: ['鳴る', '鳴らない'] },
  { type: 'radio', label_text: 'モジュラーケーブル', name: 'modular_cable', id: ['modular_cable_ok', 'modular_cable_ng'], value: ['改善', '改善なし'] }
];

//下の項目その2
const fault = [
  { type: 'radio', label_text: 'リブート', name: 'reboot', id: ['reboot_ok', 'reboot_ng'], value: ['改善', '改善なし'] },
  { type: 'radio', label_text: '訪問', name: 'visit', id: ['visit_ok', 'visit_ng'], value: ['OK', 'NG'] },
  { type: 'radio', label_text: '事前連絡', name: 'contact', id: ['contact_ok', 'contact_ng'], value: ['OK', 'NG'] },
  { type: 'radio', label_text: '料金', name: 'price', id: ['price_ok', 'price_ng'], value: ['OK', 'NG'] },
  { type: 'text', id: 'contact_address', value: '折り返し先' }
];

const pr600_ki = [rooter_power, alarm, ppp, light_tel, act, register, initial, option, Authentication, uni, optical_line, power, movie, lan_setup, lan_setup_ararm];

const all_name_lib = ['user_account', 'cfs', 'tell_no', 'west_east', 'wireless_lan', 'wireless_model', 'rooter_mode', 'use', 'display', 'outside_call', 'modular_cable', 'reboot', 'visit', 'contact', 'price', 'contact_address', 'rooter_power_lamp', 'alarm_lamp', 'ppp_lamp', 'light_tel_lamp', 'act_lamp', 'register_lamp', 'initial_lamp', 'option_lamp', 'Authentication_lamp', 'uni_lamp', 'optical_line_lamp', 'power_lamp', 'movie_lamp', 'lan_setup_lamp', 'lan_setup_ararm_lamp'];