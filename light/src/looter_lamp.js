const rooter_power = ['radio', 'ルーター電源ランプ', 'rooter_power_lamp', { 'rooter_power_lamp_green': '緑点灯', 'rooter_power_lamp_black': '消灯' }];
const alarm = ['radio', 'アラームランプ', 'alarm_lamp', { 'alarm_lamp_red': '赤点灯', 'alarm_lamp_red_flash': '赤点滅', 'alarm_lamp_black': '消灯' }];
const ppp = ['radio', 'PPPランプ', 'ppp_lamp', { 'ppp_lamp_green': '緑点灯', 'ppp_lamp_orange': '橙点灯', 'ppp_lamp_black': '消灯' }];
const light_tel = ['radio', 'ひかり電話ランプ', 'light_tel_lamp', { 'light_tel_lamp_green': '緑点灯', 'light_tel_lamp_green_flash': '緑点灯', 'light_tel_lamp_black': '消灯' }];
const act = ['radio', 'ACTランプ', 'act_lamp', { 'act_lamp_green': '緑点灯', 'act_lamp_green_flash': '緑点滅', 'act_lamp_black': '消灯' }];
const register = ['radio', '登録ランプ', 'register_lamp', { 'register_lamp_green': '緑点灯', 'register_lamp_green_flach': '緑点滅', 'register_lamp_red': '赤点灯', 'register_lamp_red_flach': '赤点滅', 'register_lamp-black': '消灯' }];
const initial = ['radio', '初期状態ランプ', 'initial_lamp', { 'initial_lamp_orange': '橙点灯', 'initial_lamp_flach': '橙点滅', 'initial_lamp_black': '消灯' }];
const option = ['radio', 'オプションランプ', 'option_lamp', { 'option_lamp_green': '緑点灯', 'option_lamp_green_flash': '緑点滅', 'option_lamp_blue': '青3回点滅後、２秒点灯', 'option_lamp_black': '消灯' }];
const Authentication = ['radio', '認証ランプ', 'Authentication_lamp', { 'Authentication_lamp_green': '緑点灯', 'Authentication_lamp_black': '消灯' }];
const uni = ['radio', 'UNIランプ', 'uni_lamp', { 'uni_lamp_green': '緑点灯', 'uni_lamp_green_flash': '緑点滅', 'uni_lamp_black': '消灯' }];
const optical_line = ['radio', '光回線ランプ', 'optical_line_lamp', { 'optical_line_lamp_green': '緑点灯', 'optical_line_lamp_orange': '橙点灯', 'optical_line_lamp_orange_flach': '橙点滅', 'optical_line_lamp_black': '消灯' }];
const power = ['radio', '電源ランプ', 'power_lamp', { 'power_lamp_green': '緑点灯', 'power_lamp_red': '赤点灯', 'power_lamp_red_flash': '赤点滅', 'power_lamp_black': '消灯' }];
const movie = ['radio', '映像出力ランプ', 'movie_lamp', { 'movie_lamp_green': '緑点灯', 'movie_lamp_red': '赤点灯', 'movie_lamp_black': '消灯' }];

//無線LANセットアップ中
const lan_setup = ['radio', '登録ランプ', 'lan_setup_lamp', { 'lan_setup_lamp_green_flach': '緑点滅', 'lan_setup_lamp_orange_flach': '橙点滅', 'lan_setup_lamp_orange': '橙点灯(10秒間)', 'lan_setup_lamp_red': '赤点灯(10秒間)' }];
const lan_setup_ararm = ['radio', 'アラームランプ', 'lan_setup_ararm_lamp', { 'lan_setup_ararm_lamp_red': '赤点灯(10秒間)', 'lan_setup_ararm_lamp_black': '消灯' }];


const farst_lib = [
  ['text', 'user_account', 'アカウント'], ['text', 'cfs', 'CFS'], ['text', 'tell_no', '電話番号'], ['radio', '西or東', 'west_east', { 'west': '西', 'east': '東' }]];

const second_lib = [['text', 'wireless_lan', '無線LANメーカー'], ['text', 'wireless_model', '無線型番'], ['radio', 'ルーターモード', 'rooter_mode', { 'ap_mode': 'AP', 'rt_mode': 'RT', 'br_mode': 'BR' }]];

//radio, p, name,{id,label}

const optical = [['radio', '利用可否', 'use', { 'use_ok': '可', 'use_ng': '不可' }], ['radio', 'ディスプレイ', 'display', { 'display_ok': '点灯', 'display_ng': '消灯' }], ['radio', '外線音', 'outside_call', { 'outside_call_ok': '鳴る', 'outside_call_ng': '鳴らない' }], ['radio', 'モジュラーケーブル', 'modular_cable', { 'modular_cable_ok': '改善', 'modular_cable_ng': 'なし' }]];

const fault = [['radio', 'リブート', 'reboot', { 'reboot_ok': '改善', 'reboot_ng': 'なし' }], ['radio', '訪問', 'visit', { 'visit_ok': 'OK', 'visit_ng': 'NG' }], ['radio', '事前連絡', 'contact', { 'contact_ok': 'OK', 'contact_ng': 'NG' }], ['radio', '料金', 'price', { 'price_ok': 'OK', 'price_ng': 'NG' }], ['text', 'contact_address', '折り返し先']];


const pr600_ki = [rooter_power, alarm, ppp, light_tel, act, register, initial, option, Authentication, uni, optical_line, power, movie, lan_setup, lan_setup_ararm];

const all_name_lib = ['user_account', 'cfs', 'tell_no', 'west_east', 'wireless_lan', 'wireless_model', 'rooter_mode', 'use', 'display', 'outside_call', 'modular_cable', 'reboot', 'visit', 'contact', 'price', 'contact_address', 'rooter_power_lamp', 'alarm_lamp', 'ppp_lamp', 'light_tel_lamp', 'act_lamp', 'register_lamp', 'initial_lamp', 'option_lamp', 'Authentication_lamp', 'uni_lamp', 'optical_line_lamp', 'power_lamp', 'movie_lamp', 'lan_setup_lamp', 'lan_setup_ararm_lamp'];