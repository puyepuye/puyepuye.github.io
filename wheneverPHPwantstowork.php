<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="tomorrow.css">

</head>
<body>
<div class="container">
<div id="title">wai tum poong nee na</div>
<div id="main">Hover for Details.</div>
<div id="show">ไว้ทำพรุ่งนี้นะ</div>
<div id="hide">
 <?php
 date_default_timezone_set('Asia/Bangkok');
 echo "Coming on " .   date("d-m-", strtotime("+1 day")) . "<br>";
 ?>
</div>
</div>
</body>
</html>