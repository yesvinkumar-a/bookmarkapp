<?php
 include "db.php";
 if(isset($_POST['insert']))
 {
 $link=$_POST['link'];
 $category=$_POST['category'];
 
 $q=mysqli_query($con,"INSERT INTO `bookmark_details` (`link`,`category`) VALUES ('$link','$category')");
 if($q)
  echo "success";
 else
  echo "error";
 }
 ?>