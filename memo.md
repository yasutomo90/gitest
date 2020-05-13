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