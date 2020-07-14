cd C:\xampp\mysql\bin
mysql -u root -p

create database zzzzzz;
show databases;


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


ワードプレスの階層
https://wpdocs.osdn.jp/wiki/images/wp-template-hierarchy.jpg




cocoon

xeory