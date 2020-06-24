abusaidm.html-snippets
annsk.alignment
auchenberg.vscode-browser-preview
CoenraadS.bracket-pair-colorizer
dbaeumer.vscode-eslint
donjayamanne.githistory
eamodio.gitlens
ecmel.vscode-html-css
Equinusocio.vsc-community-material-theme
Equinusocio.vsc-material-theme
felixfbecker.php-debug
felixfbecker.php-intellisense
felixfbecker.php-pack
formulahendry.auto-rename-tag
GitHub.vscode-pull-request-github
hdg.live-html-previewer
hollowtree.vue-snippets
HookyQR.beautify
jcbuisson.vue
mechatroner.rainbow-csv
michelemelluso.code-beautifier
mkaufman.HTMLHint
mosapride.zenkaku
MS-CEINTL.vscode-language-pack-ja
ms-python.python
ms-vscode-remote.remote-wsl
octref.vetur
oderwat.indent-rainbow
PKief.material-icon-theme
pranaygp.vscode-css-peek
ritwickdey.live-sass
ritwickdey.LiveServer
shardulm94.trailing-spaces
Zignd.html-css-class-completion


https://readouble.com/larabel/6.x/ja/

composer install

config > app.phpのデバッグをtrue

php artisan make:migration  create_categories_table
php artisan make:migration  create_posts_table
php artisan make:migration  create_comments_table

マイグレーションでテーブル作成
ファイルに記入していく


php artisan migrate


php artisan make:seeder CategoriesTableSeeder

php artisan db:seed


php artisan make:model Category
php artisan make:model Post
php artisan make:model Comment



php artisan make:auth



php artisan route:list




php artisan make:contoroller PostContoroller --resource






<!-- https://developer.cybozu.io/hc/ja/community/posts/360042799572-%E5%88%A5%E3%82%A2%E3%83%97%E3%83%AA%E3%81%AE%E3%83%AC%E3%82%B3%E3%83%BC%E3%83%89%E3%82%92%E3%83%9E%E3%82%B9%E3%82%BF%E3%81%A8%E3%81%97%E3%81%A6-%E8%A4%87%E6%95%B0%E3%81%AE%E3%83%89%E3%83%AD%E3%83%83%E3%83%97%E3%83%80%E3%82%A6%E3%83%B3%E3%81%AE%E8%A1%A8%E7%A4%BA%E5%86%85%E5%AE%B9%E3%82%92%E9%80%A3%E5%8B%95%E3%81%95%E3%81%9B%E3%82%8B -->