# project-Google-oauth
MVC架構實作練習, Express MVC<br/>
在Express中，其MVC運作會是這樣：<br/>
![OuisPl0](https://user-images.githubusercontent.com/107973729/218791662-69bdb479-f3ee-48c0-9db7-e332e9146297.png)
1.Client端發送request至server端。<br/>
2.Server端將收到的request由特定的router來做處理。<br/>
3.若收到的request需要跟DB來做撈取資料的動作，則從DB中找尋該資料，並將資料回傳至router中。<br/>
若無則直接對資料進行後處理的動作。<br/>
4.待router處理完資料的邏輯後，將其結果傳給view，並由view來產生html文件。<br/>
5.藉由router來將view所產生的html文件送至server端中。<br/>
6.Server端回覆response至clietn端。<br/>
MVC架構介紹引用至, <a href="https://ithelp.ithome.com.tw/articles/10194968">IT邦幫忙:Node.js-Backend見聞錄(10)</a><br/>
<br/>
project實作練習<br/>
Node.js,Express,Ejs,<br/>
MongodbAtlas,bcrypt,<br/>
passport-google-oauth20<br/>
串接 Google OAuth 2.0 實現第三方登入,<br/>
並且可本地註冊.登入與可post文字(留言,歌詞,記事)<br/>

因使用render免費託管服務,平時無request時會處於待機模式,點擊網站進入時server需運行一段時間重啟才能run server,謝謝等候
<h3>上架render託管服務,  <a href="https://project-google-oauth.onrender.com/">網站頁面Google-oauth</a> </h3>
測試帳號:a111@gmail.com<br/>密碼:aa111111<br/>

![ezgif com-gif-maker](https://user-images.githubusercontent.com/107973729/216813353-106feb85-bb04-4b60-bd15-20e430dcab60.gif)
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/107973729/216813462-8e6e95b1-9f59-42ba-948a-7086440b3d82.gif)
